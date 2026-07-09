# Design audit — linear.app

**Source:** https://linear.app
**Captured:** 1440x900 × dark
**Title:** Linear – The system for product development
**Page height:** 10898px · **content column:** 272px

## Palette

Ranked by painted area. Role is inferred from how the color is used.

| Hex | Role | Chroma | Light | Neutral? | Area | Uses |
| --- | --- | --- | --- | --- | --- | --- |
| `#08090a` | text | 2 | 0.04 | yes | 16,532,013 | 14 |
| `#ffffff` @0.08 | border | 0 | 1 | yes | 6,082,544 | 27 |
| `#0f1011` | background | 2 | 0.06 | yes | 4,048,802 | 6 |
| `#383b3f` | border | 7 | 0.23 | yes | 2,808,960 | 3 |
| `#23252a` | border | 7 | 0.15 | yes | 2,099,442 | 10 |
| `#f7f8f8` | text | 1 | 0.97 | yes | 1,033,869 | 32 |
| `#090a0b` | background | 2 | 0.04 | yes | 950,400 | 1 |
| `#101112` | background | 2 | 0.07 | yes | 950,400 | 1 |
| `#323334` | border | 2 | 0.2 | yes | 950,400 | 1 |
| `#ffffff` @0.05 | background | 0 | 1 | yes | 828,190 | 133 |
| `#121314` | background | 2 | 0.07 | yes | 754,688 | 1 |
| `#d0d6e0` | text | 16 | 0.85 | yes | 634,493 | 104 |

- **Canvas:** `#0f1011`
- **Text:** `#08090a`
- **Accent:** `#e4f222`
- Hue ~64°: `#e4f222`
- Hue ~359°: `#f34e52`, `#ff0000`, `#eb5757`, `#422222`, `#f34f52` — one brand color in 5 tints
- Hue ~134°: `#27a644`, `#00ff05`, `#27a644` — one brand color in 3 tints
- Hue ~29°: `#f7bf8b`, `#ffdf9f` — one brand color in 2 tints
- Hue ~315°: `#f79ce0`
- Hue ~180°: `#83dcdc`, `#02b8cc`, `#55ccff`, `#0f3338`, `#10b981`, `#06b6d4` — one brand color in 6 tints
- Hue ~228°: `#8fa6ff`, `#5e6ad2`, `#6d78d5`, `#6366f1` — one brand color in 4 tints
- Hue ~258°: `#8b5cf6`

Accent restraint: **8** accent hues (23 tints) against 32 neutrals.

## Type scale

Body font: `"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`

| Size | Weight | Tracking | Line height | Transform | Uses | Sample |
| --- | --- | --- | --- | --- | --- | --- |
| 72px | 510 | -1.584px | 72px | none | 1 | Built for the future. Available today. |
| 64px | 510 | -1.408px | 64px | none | 3 | The product development |
| 48px | 510 | -1.056px | 48px | none | 7 | A new species of product tool. |
| 32px | 400 | -0.704px | 36px | none | 2 | You’ll probably build a better product, ju |
| 24px | 400 | -0.288px | 31.92px | none | 5 | Turn conversations and customer feedback i |
| 20px | 590 | -0.24px | 26.6px | none | 1 | Faster app launch |
| 17px | 590 | normal | 27.2px | none | 1 | Weekly Pulse for Jul 10 |
| 16px | 590 | normal | 24px | none | 1 | Activity |
| 16px | 400 | normal | 24px | none | 2 | · |
| 16px | 510 | normal | 24px | none | 6 | Codex |
| 16px | 510 | normal | 44px | none | 2 | Get started |
| 15px | 400 | -0.165px | 24px | none | 50 | Purpose-built for planning and building pr |

**14 distinct sizes** across 38 size/weight variants. Largest: **72px**.

## Shape & depth

**Radii** (by frequency): `2px` ×42 · `6px` ×40 · `50%` ×36 · `4px` ×28 · `9999px` ×19 · `12px` ×12

**Shadows:**
- `rgba(0, 0, 0, 0.03) 0px 1.2px 0px 0px` ×31
- `rgba(0, 0, 0, 0.4) 0px 2px 4px 0px` ×16
- `rgba(0, 0, 0, 0.2) 0px 0px 12px 0px inset` ×6
- `rgb(35, 37, 42) 0px 0px 0px 1px inset` ×5
- `rgba(0, 0, 0, 0.2) 0px 0px 0px 1px` ×3

## Interactive elements

Median tap-target height: **28px** · below 44px: **143 of 154**
Primary CTA contrast: **1.16:1** (FAILS AA)

| Element | Size | Radius | Fill | Border | Shadow |
| --- | --- | --- | --- | --- | --- |
| Our speed is intense and Lin | 432×480 | 8px | rgb(228, 242, 34) | none | none |
| `<textarea>` | 374×68 | 6px | rgba(255, 255, 255, 0.02) | 1px rgba(255, 255, 255, 0.08) | rgba(0, 0, 0, 0.2) 0px 0px 0px 1px |
| Contact sales | 144×44 | 9999px | rgba(255, 255, 255, 0.05) | none | rgba(255, 255, 255, 0.03) 0px 0px 0px 1px in |
| Faster app launch | 210×28 | 6px | rgba(255, 255, 255, 0.04) | none | none |
| Get started | 127×44 | 9999px | rgb(229, 229, 230) | 1px rgb(229, 229, 230) | rgba(0, 0, 0, 0) 0px 8px 2px 0px, rgba(0, 0, |
| Listen | 85×32 | 9999px | rgba(255, 255, 255, 0.05) | none | rgba(255, 255, 255, 0.03) 0px 0px 0px 1px in |
| Sign up | 73×32 | 9999px | rgb(229, 229, 230) | 1px rgb(229, 229, 230) | rgba(0, 0, 0, 0) 0px 8px 2px 0px, rgba(0, 0, |
| `<button>` | 32×32 | 50% | rgba(255, 255, 255, 0.05) | none | none |

## Section order

Vertical rhythm — most common gap: irregular

| # | Section | Height | Media | Actions |
| --- | --- | --- | --- | --- |
| 1 | `<g>` | 84px | 0 img / 0 svg | 0 |
| 2 | `<g>` | 97px | 0 img / 0 svg | 0 |
| 3 | `<g>` | 117px | 0 img / 0 svg | 0 |
| 4 | `<g>` | 144px | 0 img / 0 svg | 0 |
| 5 | `<g>` | 192px | 0 img / 0 svg | 0 |
| 6 | `<g>` | 144px | 0 img / 0 svg | 0 |
| 7 | `<g>` | 117px | 0 img / 0 svg | 0 |
| 8 | `<g>` | 97px | 0 img / 0 svg | 0 |
| 9 | `<g>` | 84px | 0 img / 0 svg | 0 |
| 10 | `<g>` | 77px | 0 img / 0 svg | 0 |
| 11 | `<g>` | 73px | 0 img / 0 svg | 0 |
| 12 | `<g>` | 72px | 0 img / 0 svg | 0 |
| 13 | `<g>` | 71px | 0 img / 0 svg | 0 |
| 14 | `<g>` | 71px | 0 img / 0 svg | 0 |
| 15 | `<g>` | 71px | 0 img / 0 svg | 0 |

## Signals

- Icons: **183 inline SVG**, 32 `<img>` → SVG-first icon system
- Emoji in copy: **no**
- Dark mode: **no — same canvas in both schemes**
- CSS custom properties on `:root`: **372** (design tokens exposed — see `design.json`)

## Screens

- `screens/dark-1440x900.png`
