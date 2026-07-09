Rebuild the design language of **dot.cards** as a single self-contained HTML file with inline CSS. No external fonts, no CDN, no image assets — draw placeholders in CSS/SVG.

Do not copy their copy, logo, or brand name. Copy the **system**: the spacing, the type ladder, the shape language, the restraint.

## Canvas & palette

- Canvas `#ffffff`, primary text `#000000`
- **1 accent hue.** Primary accent `#50ccbd`, with tints `#96e0d7`, `#3d9d92` for hover/depth. Spend it only where it earns attention — the primary CTA and icon fills. Everything else is neutral.
- Neutrals: `#ffffff`, `#b9cad3`, `#000000`, `#9ea5af`, `#192734`

## Typography

- Family: Open Sans (system-ui fallback)
- Exactly **8 steps**, largest to smallest:
  - **20px / 800** — e.g. "Sam Woods"
  - **16px / 700 / -0.16px** — e.g. "Call"
  - **14px / 700 / 0.42px** — e.g. "Claim dot.profile/you"
  - **13px / 600 / -0.2px** — e.g. "+44 07734409927"
  - **12px / 700** — e.g. "Join Sam and create your profile"
  - **11px / 400** — e.g. "Creative"
  - **10px / 400** / uppercase — e.g. "Networking made simple"
  - **9px / 600 / -0.1px** — e.g. "Cookie Preferences"
- Never introduce a size outside this ladder.

## Shape & depth

- Box radii: `9px`, `10px`, `15px`
- Fully rounded (pills, avatars, icon medallions): `50%`, `72px`, `46px`
- Elevation, not borders. Signature shadow: `rgba(110, 135, 171, 0.15) 0px 0px 20px 0px`
- **Primary CTA:** 256×50px, radius `9px`, fill `rgb(80, 204, 189)`, shadow `rgb(61, 157, 146) 0px 2px 0px 0px`
- **Repeating rows:** 60px tall, radius `10px`, fill `rgb(255, 255, 255)`, **no border** — separation comes from the ambient shadow alone

## Layout

- Content column **350px**, mobile-first, centered on desktop
- Vertical rhythm: **16px** between sections
- Section order, top to bottom:
  1. <div>
  2. <div> — has media
  3. Sam Woods I review tech Sam Woods tech Creative
  4. Edit Profile
  5. Call

## Rules

- Every tap target ≥ 44px (this design runs a 50px median)
- Inline SVG icons only, 2px stroke. No emoji.
- WCAG AA contrast in every state. **Do not copy the source's CTA contrast — it runs 1.96:1 and fails AA.** Darken the accent until label-on-accent clears 4.5:1.
- Light mode only, matching the source
- Real placeholder content, no lorem ipsum
