# Design audit — dot.cards

**Source:** https://dot.cards/samwoodstech
**Captured:** 390x844, 1440x900 × light, dark
**Title:** Sam Woods's dot.Profile
**Page height:** 847px · **content column:** 350px

## Palette

Ranked by painted area. Role is inferred from how the color is used.

| Hex | Role | Sat | Light | Area | Uses |
| --- | --- | --- | --- | --- | --- |
| `#ffffff` | background | 0 | 1 | 141,856 | 7 |
| `#50ccbd` | background | 0.55 | 0.56 | 81,040 | 4 |
| `#b9cad3` @0.2 | border | 0.23 | 0.78 | 50,310 | 2 |
| `#000000` | text | 0 | 0 | 32,111 | 7 |
| `#9ea5af` | text | 0.1 | 0.65 | 22,137 | 5 |
| `#96e0d7` | background | 0.54 | 0.73 | 14,400 | 1 |
| `#3d9d92` | background | 0.44 | 0.43 | 10,000 | 4 |
| `#192734` | text | 0.35 | 0.15 | 6,720 | 1 |
| `#0a0b0c` | text | 0.09 | 0.04 | 2,520 | 1 |
| `#b8bfca` @0.3 | background | 0.15 | 0.76 | 2,049 | 1 |
| `#f6f7f8` | background | 0.12 | 0.97 | 1,600 | 1 |
| `#3d4145` | text | 0.06 | 0.25 | 1,378 | 1 |

- **Canvas:** `#ffffff`
- **Text:** `#000000`
- **Accent:** `#50ccbd`
- **Other saturated colors:** `#b9cad3`, `#96e0d7`, `#3d9d92`, `#192734`

Accent restraint: **5** saturated colors across the whole page.

## Type scale

Body font: `"Open Sans", Arial`

| Size | Weight | Tracking | Line height | Transform | Uses | Sample |
| --- | --- | --- | --- | --- | --- | --- |
| 20px | 800 | normal | 30px | none | 1 | Sam Woods |
| 16px | 600 | -0.16px | 21px | none | 1 | I review tech |
| 16px | 700 | -0.7px | 20px | none | 1 | Exchange Contact |
| 16px | 700 | -0.16px | 21px | none | 4 | Call |
| 14px | 700 | 0.42px | 18px | none | 1 | Claim dot.profile/you |
| 13px | 600 | normal | 15.73px | none | 1 | Sam Woods tech |
| 13px | 600 | -0.2px | 22px | none | 4 | +44 07734409927 |
| 12px | 700 | normal | 12px | none | 1 | Join Sam and create your profile |
| 11px | 400 | normal | 15px | none | 1 | Creative |
| 10px | 400 | normal | 10px | uppercase | 1 | Networking made simple |
| 9px | 600 | -0.1px | 12px | none | 1 | Cookie Preferences |

Distinct steps: **11**. Largest: **20px**.

## Shape & depth

**Radii** (by frequency): `50%` ×9 · `9px` ×4 · `10px` ×4 · `15px` ×2 · `72px` ×1 · `46px` ×1

**Shadows:**
- `rgba(110, 135, 171, 0.15) 0px 0px 20px 0px` ×8
- `rgb(61, 157, 146) 0px 2px 0px 0px` ×2
- `rgba(5, 23, 84, 0.02) 0px 1px 1px 0px, rgba(31, 31, 31, 0.1) 0px 3px 20px 0px, rgba(31, 31, 31, 0.1) 0px 19px 24.75px -9px, rgb(229, 231, 235) 0px 0px 0px 1px` ×1

## Interactive elements

Median tap-target height: **50px** · below 44px: **3 of 9**
Primary CTA contrast: **21:1** (passes AA)

| Element | Size | Radius | Fill | Border | Shadow |
| --- | --- | --- | --- | --- | --- |
| Call

+44 07734409927 | 328×60 | 10px | rgb(255, 255, 255) | 3px rgba(0, 0, 0, 0) | rgba(110, 135, 171, 0.15) 0px 0px 20px 0px |
| Email

samwoodstech@tech.co. | 328×60 | 10px | rgb(255, 255, 255) | 3px rgba(0, 0, 0, 0) | rgba(110, 135, 171, 0.15) 0px 0px 20px 0px |
| Website

samwoodstech.co.uk | 328×60 | 10px | rgb(255, 255, 255) | 3px rgba(0, 0, 0, 0) | rgba(110, 135, 171, 0.15) 0px 0px 20px 0px |
| Calendly

calendly.com/samwo | 328×60 | 10px | rgb(255, 255, 255) | 3px rgba(0, 0, 0, 0) | rgba(110, 135, 171, 0.15) 0px 0px 20px 0px |
| Edit Profile
Exchange Contac | 256×50 | 9px | rgb(80, 204, 189) | none | rgb(61, 157, 146) 0px 2px 0px 0px |
| `<button>` | 56×50 | 9px | rgb(80, 204, 189) | none | rgb(61, 157, 146) 0px 2px 0px 0px |
| `<button>` | 40×40 | 45px | rgb(246, 247, 248) | none | none |

## Section order

Vertical rhythm — most common gap: 16px ×2

| # | Section | Height | Media | Actions |
| --- | --- | --- | --- | --- |
| 1 | `<div>` | 50px | 0 img / 1 svg | 0 |
| 2 | `<div>` | 146px | 1 img / 6 svg | 0 |
| 3 | Sam Woods I review tech Sam Woods tech Creat | 135px | 0 img / 1 svg | 0 |
| 4 | Edit Profile | 50px | 0 img / 3 svg | 2 |
| 5 | Call | 270px | 0 img / 8 svg | 4 |

## Signals

- Icons: **22 inline SVG**, 1 `<img>` → SVG-first icon system
- Emoji in copy: **no**
- Dark mode: **no — same canvas in both schemes**
- CSS custom properties on `:root`: **1110** (design tokens exposed — see `design.json`)

## Screens

- `screens/light-390x844.png`
- `screens/light-1440x900.png`
- `screens/dark-390x844.png`
- `screens/dark-1440x900.png`
