Rebuild the design language of **dot.cards** as a single self-contained HTML file with inline CSS. No external fonts, no CDN, no image assets — draw placeholders in CSS/SVG.

Do not copy their copy, logo, or brand name. Copy the **system**: the spacing, the type ladder, the shape language, the restraint.

## Canvas & palette

- Canvas `#ffffff`, primary text `#000000`
- Single accent `#50ccbd` — used on only 5 elements page-wide. Spend it sparingly.
- Full ranked palette: `#ffffff`, `#50ccbd`, `#b9cad3`, `#000000`, `#9ea5af`, `#96e0d7`

## Typography

- Family: Open Sans (system-ui fallback)
- Exactly **6 steps**, largest to smallest:
  - **20px / 800** — e.g. "Sam Woods"
  - **16px / 600 / -0.16px** — e.g. "I review tech"
  - **16px / 700 / -0.7px** — e.g. "Exchange Contact"
  - **16px / 700 / -0.16px** — e.g. "Call"
  - **14px / 700 / 0.42px** — e.g. "Claim dot.profile/you"
  - **13px / 600** — e.g. "Sam Woods tech"
- Never introduce a size outside this ladder.

## Shape & depth

- Radii: `50%`, `9px`, `10px`, `15px`, `72px`, `46px`
- Elevation, not borders. Signature shadow: `rgba(110, 135, 171, 0.15) 0px 0px 20px 0px`
- Primary CTA: **328×60px**, radius `10px`, fill `rgb(255, 255, 255)`, shadow `rgba(110, 135, 171, 0.15) 0px 0px 20px 0px`
- Repeating rows: **60px tall**, radius `10px`, border `3px rgba(0, 0, 0, 0)`

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
- WCAG AA contrast in every state (their CTA runs 21:1)
- Light mode only, matching the source
- Real placeholder content, no lorem ipsum
