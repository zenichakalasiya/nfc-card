#!/usr/bin/env node
/**
 * design-extract — read a live page's design and emit a spec you can rebuild from.
 *
 *   node tools/design-extract.mjs <url> [options]
 *
 *   --out <dir>          output directory        (default: design-audits/<hostname>)
 *   --viewports <list>   WxH,WxH                 (default: 390x844,1440x900)
 *   --themes <list>      light,dark              (default: light,dark)
 *   --wait <ms>          settle delay after load (default: 1200)
 *   --hide <selectors>   comma-separated CSS to display:none before capture
 *                        (cookie banners, chat widgets, sticky promos)
 *
 * Writes into <out>:
 *   screens/*.png    full-page captures per viewport x theme
 *   design.json      raw extracted data
 *   report.md        human-readable design audit
 *   prompt.md        ready-to-paste rebuild prompt for Claude Design
 */

import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

// ---------------------------------------------------------------- args

const argv = process.argv.slice(2);
const url = argv.find((a) => !a.startsWith('--'));
if (!url) {
  console.error('usage: node tools/design-extract.mjs <url> [--out dir] [--viewports 390x844,1440x900] [--themes light,dark] [--wait ms] [--hide "sel,sel"]');
  process.exit(1);
}
const flag = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  return i !== -1 && argv[i + 1] ? argv[i + 1] : fallback;
};

const hostname = new URL(url).hostname.replace(/^www\./, '');
const outDir = flag('out', path.join('design-audits', hostname));
const viewports = flag('viewports', '390x844,1440x900')
  .split(',')
  .map((v) => {
    const [w, h] = v.split('x').map(Number);
    return { w, h, label: v };
  });
const themes = flag('themes', 'light,dark').split(',');
const settle = Number(flag('wait', 1200));
const hideSelectors = flag('hide', '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

// ---------------------------------------------------------------- color helpers (node side)

const parseRgb = (str) => {
  const m = String(str).match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const p = m[1].split(',').map((s) => parseFloat(s.trim()));
  const a = p.length > 3 ? p[3] : 1;
  if (!a) return null;
  return { r: p[0], g: p[1], b: p[2], a };
};

const toHex = (c) =>
  '#' + [c.r, c.g, c.b].map((n) => Math.round(n).toString(16).padStart(2, '0')).join('');

// chroma (max-min channel) separates real color from near-grey far better than
// HSL saturation, which reports #192734 as 35% "saturated" when it is plainly ink.
const chroma = (c) => Math.max(c.r, c.g, c.b) - Math.min(c.r, c.g, c.b);

const toHsl = (c) => {
  const r = c.r / 255, g = c.g / 255, b = c.b / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  if (!d) return { h: 0, s: 0, l };
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return { h: h * 360, s, l };
};

const relLum = (c) => {
  const f = (v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
};

const contrast = (a, b) => {
  const l1 = relLum(a), l2 = relLum(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};

// ---------------------------------------------------------------- in-page extraction

/* eslint-disable no-undef */
const EXTRACT = (opts) => {
  const MAX = 8000;
  const scopeEl = (opts.scope && document.querySelector(opts.scope)) || document.body;
  const vis = (el, cs, r) =>
    r.width > 0 && r.height > 0 &&
    cs.visibility !== 'hidden' && cs.display !== 'none' && cs.opacity !== '0';

  const colors = {};   // rgb -> { text, bg, border, area }
  const type = {};     // key -> { count, sample, color }
  const radii = {};
  const shadows = {};
  const bump = (bag, key, area, role) => {
    if (!key || key === 'rgba(0, 0, 0, 0)' || key === 'transparent') return;
    bag[key] ??= { text: 0, bg: 0, border: 0, area: 0 };
    bag[key][role] += 1;
    bag[key].area += area;
  };

  const all = [...scopeEl.querySelectorAll('*')].slice(0, MAX);

  for (const el of all) {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    if (!vis(el, cs, r)) continue;
    const area = r.width * r.height;

    bump(colors, cs.backgroundColor, area, 'bg');
    if (cs.borderTopWidth !== '0px' || cs.borderBottomWidth !== '0px')
      bump(colors, cs.borderTopColor, area, 'border');

    // leaf text only — avoids counting inherited color on every wrapper
    const leaf = el.children.length === 0 && el.textContent.trim().length > 0;
    if (leaf) {
      bump(colors, cs.color, area, 'text');
      const key = [cs.fontSize, cs.fontWeight, cs.letterSpacing, cs.lineHeight, cs.textTransform].join('|');
      type[key] ??= {
        fontSize: cs.fontSize, fontWeight: cs.fontWeight,
        letterSpacing: cs.letterSpacing, lineHeight: cs.lineHeight,
        textTransform: cs.textTransform, fontFamily: cs.fontFamily,
        color: cs.color, count: 0, samples: [],
      };
      type[key].count++;
      if (type[key].samples.length < 3) type[key].samples.push(el.textContent.trim().slice(0, 42));
    }

    if (cs.borderRadius && cs.borderRadius !== '0px') radii[cs.borderRadius] = (radii[cs.borderRadius] || 0) + 1;
    if (cs.boxShadow && cs.boxShadow !== 'none') shadows[cs.boxShadow] = (shadows[cs.boxShadow] || 0) + 1;
  }

  // design tokens declared on :root
  const rootCS = getComputedStyle(document.documentElement);
  const tokens = {};
  for (const prop of Array.from(rootCS)) {
    if (prop.startsWith('--')) tokens[prop] = rootCS.getPropertyValue(prop).trim();
  }

  // tap targets
  const targets = [];
  document.querySelectorAll('a,button,input,select,textarea,[role="button"]').forEach((el) => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    if (!vis(el, cs, r) || r.height < 8) return;
    targets.push({
      tag: el.tagName.toLowerCase(),
      text: (el.innerText || el.value || '').trim().slice(0, 28),
      w: Math.round(r.width), h: Math.round(r.height),
      radius: cs.borderRadius, bg: cs.backgroundColor, color: cs.color,
      // a fully transparent border is not a border
      border: cs.borderTopWidth === '0px' || /,\s*0\)$/.test(cs.borderTopColor)
        ? 'none'
        : `${cs.borderTopWidth} ${cs.borderTopColor}`,
      shadow: cs.boxShadow === 'none' ? 'none' : cs.boxShadow,
      fontSize: cs.fontSize, fontWeight: cs.fontWeight,
    });
  });

  // Content root = element whose direct children look like page sections.
  // Child width is measured against the PARENT, not the viewport — otherwise a
  // narrow centered column inside a wide desktop page matches nothing.
  let root = document.body, best = -1, bestW = -1;
  for (const el of all) {
    const r = el.getBoundingClientRect();
    if (r.width < 200) continue;
    const kids = [...el.children].filter((c) => {
      const cr = c.getBoundingClientRect();
      return cr.height > 40 && cr.width > r.width * 0.3;
    });
    if (kids.length > best || (kids.length === best && r.width > bestW)) {
      best = kids.length; bestW = r.width; root = el;
    }
  }

  const sections = [...root.children]
    .map((el) => {
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      if (r.height < 40) return null;
      const heading = el.querySelector('h1,h2,h3,h4,h5,h6');
      // innerText is undefined on SVG elements — fall back to textContent
      const txt = (n) => (n.innerText ?? n.textContent ?? '').trim();
      return {
        tag: el.tagName.toLowerCase(),
        cls: (typeof el.className === 'string' ? el.className : '').slice(0, 60),
        top: Math.round(r.top + scrollY), height: Math.round(r.height),
        heading: heading ? txt(heading).slice(0, 60) : null,
        text: txt(el).replace(/\s+/g, ' ').slice(0, 110),
        imgs: el.querySelectorAll('img,picture,video').length,
        svgs: el.querySelectorAll('svg').length,
        buttons: el.querySelectorAll('a,button').length,
        bg: cs.backgroundColor, radius: cs.borderRadius,
        padding: cs.padding,
      };
    })
    .filter(Boolean);

  const gaps = [];
  for (let i = 1; i < sections.length; i++) {
    gaps.push(sections[i].top - (sections[i - 1].top + sections[i - 1].height));
  }

  const bodyCS = getComputedStyle(document.body);
  return {
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.content || null,
    fonts: [...new Set(all.slice(0, 1500).map((e) => getComputedStyle(e).fontFamily))].slice(0, 6),
    bodyFont: bodyCS.fontFamily,
    pageBg: bodyCS.backgroundColor,
    contentWidth: Math.round(root.getBoundingClientRect().width),
    emojiFound: /\p{Extended_Pictographic}/u.test(document.body.innerText),
    iconCounts: { svg: document.querySelectorAll('svg').length, img: document.querySelectorAll('img').length },
    tokens, colors, type, radii, shadows, targets, sections, gaps,
    scrollHeight: document.documentElement.scrollHeight,
  };
};
/* eslint-enable no-undef */

// ---------------------------------------------------------------- capture

await mkdir(path.join(outDir, 'screens'), { recursive: true });

const browser = await chromium.launch();
const captures = {};
let primary = null;

for (const theme of themes) {
  for (const vp of viewports) {
    const ctx = await browser.newContext({
      viewport: { width: vp.w, height: vp.h },
      colorScheme: theme,
      deviceScaleFactor: 2,
    });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {});
    await page.waitForTimeout(settle);

    if (hideSelectors.length) {
      await page.evaluate((sels) => {
        sels.forEach((s) => document.querySelectorAll(s).forEach((e) => (e.style.display = 'none')));
      }, hideSelectors);
    }

    // lazy content
    await page.evaluate(async () => {
      await new Promise((res) => {
        let y = 0;
        const t = setInterval(() => {
          window.scrollBy(0, 900);
          y += 900;
          if (y >= document.body.scrollHeight) { clearInterval(t); window.scrollTo(0, 0); res(); }
        }, 60);
      });
    });
    await page.waitForTimeout(400);

    const shot = path.join(outDir, 'screens', `${theme}-${vp.label}.png`);
    await page.screenshot({ path: shot, fullPage: true }).catch(() => {});

    const data = await page.evaluate(EXTRACT);
    captures[`${theme}-${vp.label}`] = data;
    if (!primary) primary = { theme, vp, data };

    console.log(`captured ${theme} ${vp.label} — ${data.sections.length} sections, ${Object.keys(data.colors).length} colors`);
    await ctx.close();
  }
}
await browser.close();

// ---------------------------------------------------------------- analyse

const { data } = primary;

const palette = Object.entries(data.colors)
  .map(([rgb, m]) => {
    const c = parseRgb(rgb);
    if (!c) return null;
    const hsl = toHsl(c);
    const role = m.text >= m.bg && m.text >= m.border ? 'text' : m.bg >= m.border ? 'background' : 'border';
    return {
      hex: toHex(c), alpha: +c.a.toFixed(2), rgb, role, area: Math.round(m.area),
      uses: m.text + m.bg + m.border, chroma: chroma(c), hue: Math.round(hsl.h),
      sat: +hsl.s.toFixed(2), light: +hsl.l.toFixed(2), lum: relLum(c),
    };
  })
  .filter(Boolean)
  .sort((a, b) => b.area - a.area);

const neutral = (c) => c.chroma < 30 || c.light > 0.97 || c.light < 0.04;
const canvas = palette.find((c) => c.role === 'background') || palette[0];
const textColor = palette.find((c) => c.role === 'text');
const accents = palette.filter((c) => !neutral(c));
const accent = accents[0];

// Tints/shades of one brand color are not separate accents. Cluster by hue.
const hueGroups = [];
for (const c of accents) {
  const g = hueGroups.find((g) => Math.min(Math.abs(g.hue - c.hue), 360 - Math.abs(g.hue - c.hue)) <= 20);
  if (g) g.members.push(c);
  else hueGroups.push({ hue: c.hue, members: [c] });
}

const typeScale = Object.values(data.type)
  .sort((a, b) => parseFloat(b.fontSize) - parseFloat(a.fontSize))
  .filter((t) => t.count > 0);

const topRadii = Object.entries(data.radii).sort((a, b) => b[1] - a[1]).slice(0, 6);
const topShadows = Object.entries(data.shadows).sort((a, b) => b[1] - a[1]).slice(0, 5);

// buttons = tap targets with a real fill or border
const buttons = data.targets
  .filter((t) => t.h >= 28 && (t.bg !== 'rgba(0, 0, 0, 0)' || t.border !== 'none'))
  .sort((a, b) => b.w * b.h - a.w * a.h)
  .slice(0, 8);

// The primary CTA is the one wearing the accent fill. Sorting by area finds the
// widest neutral row instead — on a card layout that is a contact row, not the CTA.
const accentFilled = (b) => {
  const c = parseRgb(b.bg);
  return c && chroma(c) >= 30;
};
const ctaBtn = buttons.find(accentFilled) || buttons[0];
const rowBtns = buttons.filter((b) => b !== ctaBtn && !accentFilled(b) && b.w > 200 && b.h >= 40 && b.h <= 84);

const heights = data.targets.map((t) => t.h).sort((a, b) => a - b);
const median = heights.length ? heights[Math.floor(heights.length / 2)] : 0;
const tooSmall = data.targets.filter((t) => t.h < 44).length;

const gapMode = (() => {
  const counts = {};
  data.gaps.filter((g) => g > 0).forEach((g) => {
    const b = Math.round(g / 4) * 4;
    counts[b] = (counts[b] || 0) + 1;
  });
  return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 3);
})();

// contrast sanity on the primary CTA
let ctaContrast = null;
if (ctaBtn) {
  const bg = parseRgb(ctaBtn.bg), fg = parseRgb(ctaBtn.color);
  if (bg && fg) ctaContrast = +contrast(bg, fg).toFixed(2);
}

const darkKey = Object.keys(captures).find((k) => k.startsWith('dark'));
const lightKey = Object.keys(captures).find((k) => k.startsWith('light'));
const hasDarkMode =
  darkKey && lightKey && captures[darkKey].pageBg !== captures[lightKey].pageBg;

// ---------------------------------------------------------------- report

const fmt = (n) => `\`${n}\``;
const px = (v) => parseFloat(v);

// markdown table cells must not contain newlines or unescaped pipes
const cell = (s) => String(s ?? '').replace(/\s+/g, ' ').replace(/\|/g, '\\|').trim();
const uniqueSizes = new Set(typeScale.map((t) => t.fontSize)).size;

const report = `# Design audit — ${hostname}

**Source:** ${url}
**Captured:** ${viewports.map((v) => v.label).join(', ')} × ${themes.join(', ')}
**Title:** ${data.title}
**Page height:** ${data.scrollHeight}px · **content column:** ${data.contentWidth}px

## Palette

Ranked by painted area. Role is inferred from how the color is used.

| Hex | Role | Chroma | Light | Neutral? | Area | Uses |
| --- | --- | --- | --- | --- | --- | --- |
${palette.slice(0, 12).map((c) => `| \`${c.hex}\`${c.alpha < 1 ? ` @${c.alpha}` : ''} | ${c.role} | ${c.chroma} | ${c.light} | ${neutral(c) ? 'yes' : '—'} | ${c.area.toLocaleString()} | ${c.uses} |`).join('\n')}

- **Canvas:** \`${canvas?.hex ?? '—'}\`
- **Text:** \`${textColor?.hex ?? '—'}\`
- **Accent:** ${accent ? `\`${accent.hex}\`` : '— none. This is a fully neutral design; hierarchy comes from weight and space.'}
${hueGroups.length ? hueGroups.map((g) => `- Hue ~${g.hue}°: ${g.members.map((c) => `\`${c.hex}\``).join(', ')}${g.members.length > 1 ? ` — one brand color in ${g.members.length} tints` : ''}`).join('\n') : ''}

Accent restraint: **${hueGroups.length}** accent hue${hueGroups.length === 1 ? '' : 's'} (${accents.length} tint${accents.length === 1 ? '' : 's'}) against ${palette.length - accents.length} neutrals.

## Type scale

Body font: ${fmt(data.bodyFont)}

| Size | Weight | Tracking | Line height | Transform | Uses | Sample |
| --- | --- | --- | --- | --- | --- | --- |
${typeScale.slice(0, 12).map((t) => `| ${t.fontSize} | ${t.fontWeight} | ${t.letterSpacing} | ${t.lineHeight} | ${t.textTransform} | ${t.count} | ${cell(t.samples[0])} |`).join('\n')}

**${uniqueSizes} distinct sizes** across ${typeScale.length} size/weight variants. Largest: **${typeScale[0]?.fontSize ?? '—'}**.

## Shape & depth

**Radii** (by frequency): ${topRadii.map(([r, n]) => `${fmt(r)} ×${n}`).join(' · ') || 'none'}

**Shadows:**
${topShadows.length ? topShadows.map(([s, n]) => `- \`${s}\` ×${n}`).join('\n') : '- none — this design uses borders, not elevation'}

## Interactive elements

Median tap-target height: **${median}px** · below 44px: **${tooSmall} of ${data.targets.length}**
${ctaContrast ? `Primary CTA contrast: **${ctaContrast}:1** ${ctaContrast >= 4.5 ? '(passes AA)' : '(FAILS AA)'}` : ''}

| Element | Size | Radius | Fill | Border | Shadow |
| --- | --- | --- | --- | --- | --- |
${buttons.map((b) => `| ${cell(b.text) || `\`<${b.tag}>\``} | ${b.w}×${b.h} | ${b.radius} | ${b.bg} | ${b.border} | ${cell(b.shadow).slice(0, 44)} |`).join('\n')}

## Section order

Vertical rhythm — most common gap: ${gapMode.map(([g, n]) => `${g}px ×${n}`).join(', ') || 'irregular'}

| # | Section | Height | Media | Actions |
| --- | --- | --- | --- | --- |
${data.sections.map((s, i) => `| ${i + 1} | ${cell(s.heading || s.text.slice(0, 44)) || `\`<${s.tag}>\``} | ${s.height}px | ${s.imgs} img / ${s.svgs} svg | ${s.buttons} |`).join('\n')}

## Signals

- Icons: **${data.iconCounts.svg} inline SVG**, ${data.iconCounts.img} \`<img>\` → ${data.iconCounts.svg > data.iconCounts.img ? 'SVG-first icon system' : 'raster-heavy'}
- Emoji in copy: **${data.emojiFound ? 'yes' : 'no'}**
- Dark mode: **${hasDarkMode ? `yes — canvas shifts to \`${toHex(parseRgb(captures[darkKey].pageBg) || { r: 0, g: 0, b: 0, a: 1 })}\`` : 'no — same canvas in both schemes'}**
- CSS custom properties on \`:root\`: **${Object.keys(data.tokens).length}**${Object.keys(data.tokens).length ? ` (design tokens exposed — see \`design.json\`)` : ''}

## Screens

${Object.keys(captures).map((k) => `- \`screens/${k}.png\``).join('\n')}
`;

// ---------------------------------------------------------------- rebuild prompt

const step = (t) => `${px(t.fontSize)}px / ${t.fontWeight}${t.letterSpacing !== 'normal' ? ` / ${t.letterSpacing}` : ''}`;

// One rung per size — 16/600 and 16/700 are weights of the same step, not two steps.
const bySize = new Map();
for (const t of typeScale) {
  const cur = bySize.get(t.fontSize);
  if (!cur || t.count > cur.count) bySize.set(t.fontSize, t);
}
const ladderSteps = [...bySize.values()].sort((a, b) => px(b.fontSize) - px(a.fontSize));
const ladder = ladderSteps
  .map((t) => `  - **${step(t)}**${t.textTransform === 'uppercase' ? ' / uppercase' : ''} — ${t.samples[0] ? `e.g. "${cell(t.samples[0])}"` : 'body'}`)
  .join('\n');

// 50% / large px radii are pills and avatars, not the box language.
const boxRadii = topRadii.filter(([r]) => !r.includes('%') && px(r) < 32);
const pillRadii = topRadii.filter(([r]) => r.includes('%') || px(r) >= 32);

const cta = ctaBtn;
const rows = rowBtns;

const prompt = `Rebuild the design language of **${hostname}** as a single self-contained HTML file with inline CSS. No external fonts, no CDN, no image assets — draw placeholders in CSS/SVG.

Do not copy their copy, logo, or brand name. Copy the **system**: the spacing, the type ladder, the shape language, the restraint.

## Canvas & palette

- Canvas \`${canvas?.hex ?? '#FFFFFF'}\`, primary text \`${textColor?.hex ?? '#000000'}\`
${accent
  ? `- **${hueGroups.length} accent hue${hueGroups.length === 1 ? '' : 's'}.** Primary accent \`${accent.hex}\`${hueGroups[0]?.members.length > 1 ? `, with tints ${hueGroups[0].members.slice(1).map((c) => `\`${c.hex}\``).join(', ')} for hover/depth` : ''}. Spend it only where it earns attention — the primary CTA and icon fills. Everything else is neutral.`
  : '- Fully neutral palette — no accent color. Hierarchy comes from weight and space alone.'}
- Neutrals: ${palette.filter(neutral).slice(0, 5).map((c) => `\`${c.hex}\``).join(', ')}

## Typography

- Family: ${data.bodyFont.split(',')[0].replace(/["']/g, '')} (system-ui fallback)
- Exactly **${ladderSteps.length} steps**, largest to smallest:
${ladder}
- Never introduce a size outside this ladder.

## Shape & depth

- Box radii: ${boxRadii.map(([r]) => `\`${r}\``).join(', ') || 'square — 0 radius'}
${pillRadii.length ? `- Fully rounded (pills, avatars, icon medallions): ${pillRadii.map(([r]) => `\`${r}\``).join(', ')}` : ''}
${topShadows.length ? `- Elevation, not borders. Signature shadow: \`${topShadows[0][0]}\`` : '- No shadows anywhere. Depth comes from hairline borders only.'}
${cta ? `- **Primary CTA:** ${cta.w}×${cta.h}px, radius \`${cta.radius}\`, fill \`${cta.bg}\`${cta.shadow !== 'none' ? `, shadow \`${cta.shadow}\`${/ 0px 0px/.test(cta.shadow) ? '' : ' — note the hard, unblurred offset. It reads as a physical, pressable key.'}` : ''}` : ''}
${rows.length ? `- **Repeating rows:** ${rows[0].h}px tall, radius \`${rows[0].radius}\`, fill \`${rows[0].bg}\`, ${rows[0].border === 'none' ? '**no border** — separation comes from the ambient shadow alone' : `border \`${rows[0].border}\``}` : ''}

## Layout

- Content column **${data.contentWidth}px**, mobile-first, centered on desktop
- Vertical rhythm: **${gapMode[0]?.[0] ?? 24}px** between sections
- Section order, top to bottom:
${data.sections.map((s, i) => `  ${i + 1}. ${s.heading || s.text.slice(0, 50) || `<${s.tag}>`}${s.imgs ? ' — has media' : ''}`).join('\n')}

## Rules

- Every tap target ≥ 44px (this design runs a ${median}px median)
- ${data.iconCounts.svg > data.iconCounts.img ? 'Inline SVG icons only, 2px stroke. No emoji.' : 'Icons as inline SVG. No emoji.'}
- WCAG AA contrast in every state.${ctaContrast
  ? ctaContrast >= 4.5
    ? ` The source CTA runs ${ctaContrast}:1 — match it.`
    : ` **Do not copy the source's CTA contrast — it runs ${ctaContrast}:1 and fails AA.** Darken the accent until label-on-accent clears 4.5:1.`
  : ''}
${hasDarkMode ? `- Ship \`prefers-color-scheme: dark\`: canvas becomes \`${toHex(parseRgb(captures[darkKey].pageBg))}\`` : '- Light mode only, matching the source'}
- Real placeholder content, no lorem ipsum
`;

await writeFile(path.join(outDir, 'design.json'), JSON.stringify({ url, captures, analysis: { palette, typeScale, topRadii, topShadows, buttons, gapMode, hasDarkMode } }, null, 2));
await writeFile(path.join(outDir, 'report.md'), report);
await writeFile(path.join(outDir, 'prompt.md'), prompt);

console.log(`\n  ${outDir}/report.md`);
console.log(`  ${outDir}/prompt.md`);
console.log(`  ${outDir}/design.json`);
console.log(`  ${outDir}/screens/  (${Object.keys(captures).length} captures)\n`);
