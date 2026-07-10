# Design audit — stripe.com

**Source:** https://stripe.com
**Captured:** 390x844 × light
**Title:** Stripe | Financial Infrastructure to Grow Your Revenue
**Page height:** 20164px · **content column:** 390px

## Palette

Ranked by painted area. Role is inferred from how the color is used.

| Hex | Role | Chroma | Light | Neutral? | Area | Uses |
| --- | --- | --- | --- | --- | --- | --- |
| `#ffffff` | text | 0 | 1 | yes | 8,631,718 | 90 |
| `#e5edf5` | border | 16 | 0.93 | yes | 4,082,898 | 75 |
| `#0d1738` | background | 43 | 0.14 | — | 1,506,241 | 2 |
| `#f8fafd` | background | 5 | 0.98 | yes | 770,027 | 13 |
| `#061b31` | text | 43 | 0.11 | — | 696,519 | 190 |
| `#64748d` | text | 41 | 0.47 | — | 637,656 | 43 |
| `#50617a` | text | 42 | 0.4 | — | 451,021 | 112 |
| `#f6f9fc` | border | 6 | 0.98 | yes | 438,087 | 3 |
| `#f8fafd` @0.45 | background | 5 | 0.98 | yes | 395,132 | 2 |
| `#000000` | text | 0 | 0 | yes | 368,602 | 48 |
| `#122054` | background | 66 | 0.2 | — | 291,113 | 4 |
| `#ffd7ef` | border | 40 | 0.92 | — | 210,311 | 3 |

- **Canvas:** `#0d1738`
- **Text:** `#ffffff`
- **Accent:** `#061b31`
- Hue ~211°: `#061b31`, `#64748d`, `#50617a`, `#122054` +15 more — one brand color in 19 tints
- Hue ~324°: `#ffd7ef`, `#a51d85`, `#ffe0ef` — one brand color in 3 tints
- Hue ~248°: `#533afd`, `#b9b9f9`, `#171055`, `#362baa` +7 more — one brand color in 11 tints
- Hue ~19°: `#ff6118`, `#ffe5da`, `#ffe0d1`, `#ffe5da` +1 more — one brand color in 5 tints
- Hue ~151°: `#00d66f`, `#15be53`, `#15be53`, `#108c3d` +1 more — one brand color in 5 tints
- Hue ~293°: `#4f2055`

Accent restraint: **6** accent hues (44 tints) against 23 neutrals.

> ⚠️  6 accent hues is high for a coherent design system. This page is likely
> a marketing page whose product screenshots, illustrations, or gradients are being counted as
> chrome. Re-run scoped to the real UI to get a clean read:
>
> `node tools/design-extract.mjs https://stripe.com --scope "main" --hide "img,video,canvas"`


## Type scale

Body font: `sohne-var, "SF Pro Display", sans-serif`

| Size | Weight | Tracking | Line height | Transform | Uses | Sample |
| --- | --- | --- | --- | --- | --- | --- |
| 34px | 300 | -0.34px | 35.02px | none | 2 | Financial infrastructure to grow your reve |
| 34px | 300 | -0.68px | 35.02px | none | 1 | The backbone of global commerce |
| 28px | 300 | -0.28px | 29.96px | none | 8 | Building the economic infrastructure for A |
| 26px | 400 | -0.78px | 29.9px | none | 4 | US$5.46 |
| 24px | 400 | -0.72px | normal | none | 1 | ₹77,953.20 |
| 22px | 300 | -0.22px | 26.4px | none | 11 | Flexible solutions for every business mode |
| 21px | 500 | 0.139px | 27.3px | none | 1 | ₹1,899.99 |
| 20px | 300 | -0.2px | 24px | none | 34 | Accept and optimise payments globally – on |
| 18px | 300 | normal | 22.5px | none | 4 | Hertz unifies commerce with Stripe. |
| 18px | 400 | normal | normal | none | 1 | Zenflow |
| 18px | 300 | normal | 25.2px | none | 5 | With Stripe, we have a global technology p |
| 16px | 300 | normal | 22.4px | none | 22 | currencies and payment methods supported |

**17 distinct sizes** across 79 size/weight variants. Largest: **34px**.

## Shape & depth

**Radii** (by frequency): `6px` ×81 · `4px` ×76 · `1px` ×31 · `5px` ×13 · `0px 0px 6px 6px` ×5 · `6px 6px 0px 0px` ×4

**Shadows:**
- `rgba(3, 3, 39, 0.25) 0px 14.088px 21.132px -14.088px, rgba(0, 0, 0, 0.1) 0px 8.453px 16.906px -8.453px` ×5
- `rgba(50, 50, 93, 0.25) 0px 30px 45px -30px, rgba(0, 0, 0, 0.1) 0px 18px 36px -18px` ×4
- `rgba(0, 0, 0, 0.1) 0px 20.187px 40.374px -20.187px` ×3
- `rgba(23, 23, 23, 0.08) 0px 15px 35px 0px` ×2
- `rgba(23, 23, 23, 0.06) 0px 3px 6px 0px` ×2

## Interactive elements

Median tap-target height: **34px** · below 44px: **48 of 84**
Primary CTA contrast: **6.19:1** (passes AA)

| Element | Size | Radius | Fill | Border | Shadow |
| --- | --- | --- | --- | --- | --- |
| Request an invite | 358×44 | 4px | rgb(83, 58, 253) | none | none |
| Stripe for enterprises | 358×44 | 4px | rgb(83, 58, 253) | none | none |
| Stripe for startups | 358×44 | 4px | rgb(83, 58, 253) | none | none |
| Stripe for platforms | 358×44 | 4px | rgb(83, 58, 253) | none | none |
| View developer docs | 358×44 | 4px | rgb(83, 58, 253) | none | none |
| View Stripe's GitHub | 358×44 | 4px | rgba(255, 255, 255, 0) | 1px rgba(72, 52, 219, 0.698) | none |
| Contact sales | 342×44 | 4px | rgb(83, 58, 253) | none | none |
| Read the letter | 168×44 | 4px | rgba(255, 255, 255, 0) | 1px rgb(185, 185, 249) | none |

## Section order

Vertical rhythm — most common gap: irregular

| # | Section | Height | Media | Actions |
| --- | --- | --- | --- | --- |
| 1 | Lovable grows into a vibe-coding juggernaut with Stripe. | 477px | 2 img / 2 svg | 1 |
| 2 | Gamma expands to US$100m ARR and 70 million users with Strip | 477px | 2 img / 2 svg | 1 |
| 3 | Runway protects developer time with no-code solutions from S | 477px | 2 img / 2 svg | 1 |
| 4 | Supabase delivers its backend-as-a-service to 150 countries | 477px | 2 img / 2 svg | 1 |
| 5 | Linear partners with Stripe to handle billing and payments. | 477px | 2 img / 2 svg | 1 |
| 6 | ElevenLabs grows into a US$3bn AI audio leader with Stripe. | 477px | 2 img / 2 svg | 1 |
| 7 | Browserbase offers usage-based billing for an AI agent brows | 477px | 2 img / 2 svg | 1 |
| 8 | Decagon decreases support costs by 65% with Stripe-integrate | 477px | 2 img / 2 svg | 1 |

## Signals

- Icons: **268 inline SVG**, 44 `<img>` → SVG-first icon system
- Emoji in copy: **yes**
- Dark mode: **no — same canvas in both schemes**
- CSS custom properties on `:root`: **689** (design tokens exposed — see `design.json`)

## Screens

- `screens/light-390x844.png`
