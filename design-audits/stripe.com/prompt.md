Rebuild the design language of **stripe.com** as a single self-contained HTML file with inline CSS. No external fonts, no CDN, no image assets — draw placeholders in CSS/SVG.

Do not copy their copy, logo, or brand name. Copy the **system**: the spacing, the type ladder, the shape language, the restraint.

## Canvas & palette

- Canvas `#0d1738`, primary text `#ffffff`
- **6 accent hues.** Primary accent `#061b31`, with tints `#64748d`, `#50617a`, `#122054` for hover/depth. Spend it only where it earns attention — the primary CTA and icon fills. Everything else is neutral.
- Neutrals: `#ffffff`, `#e5edf5`, `#f8fafd`, `#f6f9fc`, `#f8fafd`

## Typography

- Family: sohne-var (system-ui fallback)
- Exactly **15 steps**, largest to smallest:
  - **34px / 300 / -0.34px** — e.g. "Financial infrastructure to grow your reve"
  - **28px / 300 / -0.28px** — e.g. "Building the economic infrastructure for A"
  - **26px / 400 / -0.78px** — e.g. "US$5.46"
  - **22px / 300 / -0.22px** — e.g. "Flexible solutions for every business mode"
  - **20px / 300 / -0.2px** — e.g. "Accept and optimise payments globally – on"
  - **18px / 300** — e.g. "With Stripe, we have a global technology p"
  - **16px / 400** — e.g. "160"
  - **15px / 400** — e.g. "Jackson Hot Yoga"
  - **14px / 400** — e.g. "Stripe Press"
  - **13px / 400 / -0.39px** — e.g. "A$72.00"
  - **12px / 300 / -0.36px** — e.g. "1"
  - **11px / 300** — e.g. "5 class pass"
  - **10px / 300 / -0.3px** — e.g. "₹793,060.00"
  - **9px / 300** — e.g. "Deluxe Shirt"
  - **8px / 400** — e.g. "Email"
- Never introduce a size outside this ladder.

## Shape & depth

- Box radii: `6px`, `4px`, `1px`, `5px`, `0px 0px 6px 6px`, `6px 6px 0px 0px`

- Elevation, not borders. Signature shadow: `rgba(3, 3, 39, 0.25) 0px 14.088px 21.132px -14.088px, rgba(0, 0, 0, 0.1) 0px 8.453px 16.906px -8.453px`
- **Primary CTA:** 358×44px, radius `4px`, fill `rgb(83, 58, 253)`
- **Repeating rows:** 44px tall, radius `4px`, fill `rgba(255, 255, 255, 0)`, border `1px rgba(72, 52, 219, 0.698)`

## Layout

- Content column **390px**, mobile-first, centered on desktop
- Vertical rhythm: **24px** between sections
- Section order, top to bottom:
  1. Lovable grows into a vibe-coding juggernaut with Stripe. — has media
  2. Gamma expands to US$100m ARR and 70 million users with Strip — has media
  3. Runway protects developer time with no-code solutions from S — has media
  4. Supabase delivers its backend-as-a-service to 150 countries  — has media
  5. Linear partners with Stripe to handle billing and payments. — has media
  6. ElevenLabs grows into a US$3bn AI audio leader with Stripe. — has media
  7. Browserbase offers usage-based billing for an AI agent brows — has media
  8. Decagon decreases support costs by 65% with Stripe-integrate — has media

## Rules

- Every tap target ≥ 44px (this design runs a 34px median)
- Inline SVG icons only, 2px stroke. No emoji.
- WCAG AA contrast in every state. The source CTA runs 6.19:1 — match it.
- Light mode only, matching the source
- Real placeholder content, no lorem ipsum
