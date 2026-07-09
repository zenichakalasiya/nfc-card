# Design audit — stripe.com

**Source:** https://stripe.com
**Captured:** 1440x900 × light
**Title:** Stripe | Financial Infrastructure to Grow Your Revenue
**Page height:** 14614px · **content column:** 1232px

## Palette

Ranked by painted area. Role is inferred from how the color is used.

| Hex | Role | Chroma | Light | Neutral? | Area | Uses |
| --- | --- | --- | --- | --- | --- | --- |
| `#ffffff` | text | 0 | 1 | yes | 19,042,456 | 79 |
| `#0d1738` | background | 43 | 0.14 | — | 4,779,135 | 2 |
| `#e5edf5` | border | 16 | 0.93 | yes | 4,537,007 | 64 |
| `#f8fafd` | background | 5 | 0.98 | yes | 1,552,185 | 13 |
| `#f8fafd` @0.45 | background | 5 | 0.98 | yes | 1,183,192 | 3 |
| `#061b31` | text | 43 | 0.11 | — | 1,179,620 | 178 |
| `#64748d` | text | 41 | 0.47 | — | 1,053,248 | 65 |
| `#000000` | text | 0 | 0 | yes | 619,612 | 48 |
| `#50617a` | text | 42 | 0.4 | — | 520,008 | 113 |
| `#122054` | background | 66 | 0.2 | — | 368,760 | 4 |
| `#fffafd` | background | 5 | 0.99 | yes | 325,124 | 4 |
| `#ffd7ef` | border | 40 | 0.92 | — | 325,124 | 4 |

- **Canvas:** `#0d1738`
- **Text:** `#ffffff`
- **Accent:** `#0d1738`
- Hue ~226°: `#0d1738`, `#061b31`, `#64748d`, `#50617a`, `#122054`, `#839bc8`, `#000eff`, `#a3b5d6`, `#2b408a`, `#b9b9f9`, `#1a2c44`, `#6480b2`, `#171055`, `#15286a`, `#362baa`, `#2c2484`, `#d6d9fc`, `#182659`, `#3c4f69`, `#101d4e`, `#2863b1`, `#2863b1`, `#152460`, `#273951`, `#92adff`, `#23356e`, `#667691`, `#5b6bff`, `#8586c2` — one brand color in 29 tints
- Hue ~324°: `#ffd7ef`, `#5d0252`, `#a51d85`, `#ffe0ef`, `#ff4fd5` — one brand color in 5 tints
- Hue ~81°: `#81b81a`
- Hue ~248°: `#533afd`, `#2d2564`, `#6b59fe`, `#4834db` — one brand color in 4 tints
- Hue ~19°: `#ff6118`, `#ffe0d1`, `#ffe5da`, `#ffe5da`, `#ffa956` — one brand color in 5 tints
- Hue ~151°: `#00d66f`, `#15be53`, `#15be53`, `#108c3d`, `#00b261` — one brand color in 5 tints

Accent restraint: **6** accent hues (49 tints) against 23 neutrals.

> ⚠️  6 accent hues is high for a coherent design system. This page is likely
> a marketing page whose product screenshots, illustrations, or gradients are being counted as
> chrome. Re-run scoped to the real UI to get a clean read:
>
> `node tools/design-extract.mjs https://stripe.com --scope "main" --hide "img,video,canvas"`


## Type scale

Body font: `sohne-var, "SF Pro Display", sans-serif`

| Size | Weight | Tracking | Line height | Transform | Uses | Sample |
| --- | --- | --- | --- | --- | --- | --- |
| 56px | 300 | -1.4px | 57.68px | none | 1 | The backbone of global commerce |
| 48px | 300 | -0.96px | 55.2px | none | 4 | Financial infrastructure to grow your reve |
| 48px | 300 | -0.96px | 49.44px | none | 4 | Building the economic infrastructure for A |
| 48px | 300 | -0.96px | 48px | none | 4 | 135+ |
| 32px | 300 | -0.64px | 35.2px | none | 11 | Flexible solutions for every business mode |
| 26px | 300 | -0.26px | 29.12px | none | 22 | Accept and optimise payments globally – on |
| 26px | 400 | -0.78px | 29.9px | none | 4 | US$5.46 |
| 22px | 300 | -0.22px | 24.2px | none | 20 | Hertz unifies commerce with Stripe. |
| 21px | 500 | 0.139px | 27.3px | none | 1 | ₹1,899.99 |
| 20px | 300 | -0.2px | 28px | none | 1 | Create an account instantly, or contact us |
| 18px | 300 | normal | 25.2px | none | 7 | 50% of Fortune 100 companies have used Str |
| 18px | 400 | -0.54px | normal | none | 1 | ₹77,953.20 |

**17 distinct sizes** across 79 size/weight variants. Largest: **56px**.

## Shape & depth

**Radii** (by frequency): `4px` ×90 · `6px` ×70 · `5px` ×7 · `0px 0px 6px 6px` ×5 · `8px` ×4 · `16px` ×3

**Shadows:**
- `rgba(3, 3, 39, 0.25) 0px 14.088px 21.132px -14.088px, rgba(0, 0, 0, 0.1) 0px 8.453px 16.906px -8.453px` ×5
- `rgba(50, 50, 93, 0.25) 0px 30px 45px -30px, rgba(0, 0, 0, 0.1) 0px 18px 36px -18px` ×4
- `rgba(23, 23, 23, 0.08) 0px 15px 35px 0px` ×3
- `rgba(23, 23, 23, 0.06) 0px 3px 6px 0px` ×3
- `rgba(0, 0, 0, 0.1) 0px 20.187px 40.374px -20.187px` ×3

## Interactive elements

Median tap-target height: **34px** · below 44px: **62 of 102**
Primary CTA contrast: **6.19:1** (passes AA)

| Element | Size | Radius | Fill | Border | Shadow |
| --- | --- | --- | --- | --- | --- |
| Stripe for enterprises | 212×48 | 4px | rgb(83, 58, 253) | none | none |
| View developer docs | 209×48 | 4px | rgb(83, 58, 253) | none | none |
| View announcement | 209×48 | 4px | rgba(255, 255, 255, 0) | 1px rgb(185, 185, 249) | none |
| Stripe for platforms | 200×48 | 4px | rgb(83, 58, 253) | none | none |
| View Stripe's GitHub | 197×48 | 4px | rgba(255, 255, 255, 0) | 1px rgba(72, 52, 219, 0.698) | none |
| Stripe for startups | 190×48 | 4px | rgb(83, 58, 253) | none | none |
| Request an invite | 183×48 | 4px | rgb(83, 58, 253) | none | none |
| See the numbers | 183×48 | 4px | rgba(255, 255, 255, 0) | 1px rgb(185, 185, 249) | none |

## Section order

Vertical rhythm — most common gap: irregular

| # | Section | Height | Media | Actions |
| --- | --- | --- | --- | --- |
| 1 | Businesses on Stripe generated US$1.9tn in 2025. | 100px | 0 img / 1 svg | 1 |
| 2 | 150k+ users have their best day ever on Stripe. | 100px | 0 img / 1 svg | 1 |
| 3 | Tidemark's vertical and SMB SaaS benchmark report. | 100px | 0 img / 1 svg | 1 |
| 4 | Shopify's Tobi Lütke sits down with John Collison. | 100px | 0 img / 1 svg | 1 |
| 5 | New tools to process payments outside app stores. | 100px | 0 img / 1 svg | 1 |
| 6 | Crypto.com partners with Stripe to enable better crypto paym | 100px | 0 img / 1 svg | 1 |
| 7 | Make your products shoppable through AI platforms. | 100px | 0 img / 1 svg | 1 |
| 8 | How leading retailers unify customer experiences and drive g | 100px | 0 img / 1 svg | 1 |

## Signals

- Icons: **269 inline SVG**, 48 `<img>` → SVG-first icon system
- Emoji in copy: **yes**
- Dark mode: **no — same canvas in both schemes**
- CSS custom properties on `:root`: **689** (design tokens exposed — see `design.json`)

## Screens

- `screens/light-1440x900.png`
