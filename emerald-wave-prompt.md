# Ready-to-paste prompt — "Emerald Wave / Emerald Minimal" digital business card

This is the design brief for our finalized direction (Concept 09). Paste everything
between the lines into Claude (claude.ai artifact / Claude Design) to generate new
iterations of this exact design language.

---

Design a **static digital business card** — the mobile web page a person sees after
tapping an NFC card — as one self-contained HTML file with inline CSS and a working
**light + dark theme toggle**. Style name: **"Emerald Minimal"** — a soft-SaaS,
minimal, friendly-premium direction.

## Brand — PrintEve (follow exactly)

- **Accent:** ONE gradient only — green `#16A34A` → lime `#65A30D` (dark mode:
  `#22C55E` → `#84CC16`). Used ONLY for: the name's second word, one word per
  section heading, the primary CTA, section eyebrow ticks, and service dots.
  Nothing else gets color.
- **Light theme:** canvas `#FAFCFA`, cards `#FFFFFF`, ink `#0F1B14`, muted
  `#5F7367`, hairlines `#E4EEE7`, soft green surface `#E8F7EE`
- **Dark theme:** canvas `#0A100C` (green-tinted near-black), cards `#121A14`,
  text `#E9F5EC`, muted `#8FA697`, hairlines `#1F2C24`
- **Type:** Inter / system-ui — name 34px/900/-0.04em, section titles 20px/900,
  body 13.5px/1.75, eyebrows 10px/800 uppercase .22em tracking
- **Shape:** pills everywhere (999px) for buttons/chips; 16–20px radius cards;
  hairline 1px borders instead of shadows (the ONLY shadow is a soft green glow
  under the primary CTA)
- **Icons:** lucide-style inline SVG, 1.9px stroke. **Never emoji.**

## Signature elements (what makes this design *this* design)

1. **Morphing blob avatar** — organic border-radius that slowly shifts shape
   (14s ease loop), deep-green gradient fill, thin conic gradient ring behind it
2. **Gradient name** — first name in ink, surname in the green→lime gradient
3. **Exactly ONE wavy divider** — a full-bleed SVG wave right after the hero,
   filled with the soft green surface color. Never repeat waves between sections.
4. **Eyebrow labels** — tiny uppercase labels with a short gradient tick before
   each section ("— ABOUT", "— SERVICES")
5. **Sticky Save dock** — when the hero's Save button scrolls away, a frosted
   pill bar slides up from the bottom: mini avatar + name + "Save Contact"
6. **Hero centered, everything after left-aligned** — the calm rhythm that keeps
   it from feeling like a template

## Profile (use this exact data)

Tarang Sachaniya — CEO & Founder, **PrintEve** — Ahmedabad, Gujarat ·
"Order any print, delivered by trusted local partners." ·
About: PrintEve connects businesses with vetted local printing partners across
India — business cards, flyers, brochures, posters, stickers, packaging; instant
quotes, free design proofing, doorstep delivery. Stats: **10k+ orders · 500+
partners · 99% happy** · +91 98250 12345 · tarang@printeve.in · printeve.in ·
GSTIN 24ABCDE1234F1Z5 · UPI printeve@icici

## Section order (our tested IA — keep it)

1. Top bar: brand eyebrow + theme toggle (sun/moon)
2. Hero: blob avatar → "Tap Verified" chip → gradient name → role → location
3. CTA row: gradient Save Contact pill (with glow) + ghost WhatsApp + 5 icon
   chips (Call, Email, Website, Map, Share), all ≥44px
4. — the single wave —
5. About + 3 stat tiles
6. Business Intro video: 16:9 dark-green poster, white play circle, caption,
   duration chip
7. Services: 3 minimal rows (gradient dot · name · one-liner · chevron) —
   Business Cards / Flyers & Brochures / Custom Packaging
8. Recent Work: 3 square tiles with tiny uppercase captions
9. Details: Phone / Email / GSTIN / HQ rows with pill Copy buttons
10. Payments: flat two-tone card — soft-green header (Pay Tarang + small QR) over
    white body (UPI pill with Copy + GPay/PhonePe/Paytm chips)
11. Files: 2 download rows with sizes ("PDF · 3.1 MB")
12. Kind Words: one italic quote with a vertical gradient rule
13. Scan block: dashed border row, QR icon, "Scan to open this card"
14. Footer: "Made with PrintEve" (Eve in gradient) + Privacy · Terms · Support

## Steering keywords

minimal · soft SaaS · friendly-premium · one-accent discipline · hairline borders,
no shadows · generous whitespace · 4px grid · mobile-first 390px · thumb-zone ·
organic blob shapes · single wave moment · calm left-aligned rhythm · glowing CTA ·
frosted sticky dock · dark mode as first-class (green-tinted black, never grey)

## Hard rules

- Both themes must be complete: toggle via a `data-theme` attribute + respect
  `prefers-color-scheme` on first load; support `?theme=light|dark` URL override
- Static: dummy `#` links, no external assets/fonts/CDNs, everything inline
- Single column ~460px max; fine centered on desktop
- Real content above — no lorem ipsum; no emoji; tap targets ≥44px; WCAG AA
- Respect `prefers-reduced-motion` (blob stops morphing)

Give me **2–3 variations** that keep every signature element but explore: (a) even
quieter — monochrome green, gradient only on the CTA; (b) more expressive — bigger
blob, oversized numerals on services; (c) your own take that stays minimal.

---
