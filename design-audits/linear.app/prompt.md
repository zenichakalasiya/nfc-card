Rebuild the design language of **linear.app** as a single self-contained HTML file with inline CSS. No external fonts, no CDN, no image assets — draw placeholders in CSS/SVG.

Do not copy their copy, logo, or brand name. Copy the **system**: the spacing, the type ladder, the shape language, the restraint.

## Canvas & palette

- Canvas `#0f1011`, primary text `#08090a`
- **8 accent hues.** Primary accent `#e4f222`. Spend it only where it earns attention — the primary CTA and icon fills. Everything else is neutral.
- Neutrals: `#08090a`, `#ffffff`, `#0f1011`, `#383b3f`, `#23252a`

## Typography

- Family: Inter Variable (system-ui fallback)
- Exactly **14 steps**, largest to smallest:
  - **72px / 510 / -1.584px** — e.g. "Built for the future. Available today."
  - **64px / 510 / -1.408px** — e.g. "The product development"
  - **48px / 510 / -1.056px** — e.g. "A new species of product tool."
  - **32px / 400 / -0.704px** — e.g. "You’ll probably build a better product, ju"
  - **24px / 400 / -0.288px** — e.g. "Turn conversations and customer feedback i"
  - **20px / 590 / -0.24px** — e.g. "Faster app launch"
  - **17px / 590** — e.g. "Weekly Pulse for Jul 10"
  - **16px / 510** — e.g. "Codex"
  - **15px / 400 / -0.165px** — e.g. "Purpose-built for planning and building pr"
  - **14px / 400** — e.g. "import"
  - **13px / 400 / -0.13px** — e.g. "Right now we show a spinner forever, which"
  - **12px / 400** — e.g. "connected by"
  - **11px / 510** — e.g. "Labels"
  - **10px / 400 / -0.15px** / uppercase — e.g. "ENG-2085"
- Never introduce a size outside this ladder.

## Shape & depth

- Box radii: `2px`, `6px`, `4px`, `12px`
- Fully rounded (pills, avatars, icon medallions): `50%`, `9999px`
- Elevation, not borders. Signature shadow: `rgba(0, 0, 0, 0.03) 0px 1.2px 0px 0px`
- **Primary CTA:** 432×480px, radius `8px`, fill `rgb(228, 242, 34)`
- **Repeating rows:** 68px tall, radius `6px`, fill `rgba(255, 255, 255, 0.02)`, border `1px rgba(255, 255, 255, 0.08)`

## Layout

- Content column **272px**, mobile-first, centered on desktop
- Vertical rhythm: **24px** between sections
- Section order, top to bottom:
  1. <g>
  2. <g>
  3. <g>
  4. <g>
  5. <g>
  6. <g>
  7. <g>
  8. <g>
  9. <g>
  10. <g>
  11. <g>
  12. <g>
  13. <g>
  14. <g>
  15. <g>

## Rules

- Every tap target ≥ 44px (this design runs a 28px median)
- Inline SVG icons only, 2px stroke. No emoji.
- WCAG AA contrast in every state. **Do not copy the source's CTA contrast — it runs 1.16:1 and fails AA.** Darken the accent until label-on-accent clears 4.5:1.
- Light mode only, matching the source
- Real placeholder content, no lorem ipsum
