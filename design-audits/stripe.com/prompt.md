Rebuild the design language of **stripe.com** as a single self-contained HTML file with inline CSS. No external fonts, no CDN, no image assets — draw placeholders in CSS/SVG.

Do not copy their copy, logo, or brand name. Copy the **system**: the spacing, the type ladder, the shape language, the restraint.

## Canvas & palette

- Canvas `#0d1738`, primary text `#ffffff`
- **6 accent hues.** Primary accent `#0d1738`, with tints `#061b31`, `#64748d`, `#50617a`, `#122054`, `#839bc8`, `#000eff`, `#a3b5d6`, `#2b408a`, `#b9b9f9`, `#1a2c44`, `#6480b2`, `#171055`, `#15286a`, `#362baa`, `#2c2484`, `#d6d9fc`, `#182659`, `#3c4f69`, `#101d4e`, `#2863b1`, `#2863b1`, `#152460`, `#273951`, `#92adff`, `#23356e`, `#667691`, `#5b6bff`, `#8586c2` for hover/depth. Spend it only where it earns attention — the primary CTA and icon fills. Everything else is neutral.
- Neutrals: `#ffffff`, `#e5edf5`, `#f8fafd`, `#f8fafd`, `#000000`

## Typography

- Family: sohne-var (system-ui fallback)
- Exactly **17 steps**, largest to smallest:
  - **56px / 300 / -1.4px** — e.g. "The backbone of global commerce"
  - **48px / 300 / -0.96px** — e.g. "Financial infrastructure to grow your reve"
  - **32px / 300 / -0.64px** — e.g. "Flexible solutions for every business mode"
  - **26px / 300 / -0.26px** — e.g. "Accept and optimise payments globally – on"
  - **22px / 300 / -0.22px** — e.g. "Hertz unifies commerce with Stripe."
  - **21px / 500 / 0.139px** — e.g. "₹1,899.99"
  - **20px / 300 / -0.2px** — e.g. "Create an account instantly, or contact us"
  - **18px / 300** — e.g. "50% of Fortune 100 companies have used Str"
  - **16px / 300** — e.g. "currencies and payment methods supported"
  - **15px / 400** — e.g. "Jackson Hot Yoga"
  - **14px / 300 / -0.42px** — e.g. "1"
  - **13px / 400 / -0.39px** — e.g. "A$72.00"
  - **12px / 500** — e.g. "1"
  - **11px / 300** — e.g. "5 class pass"
  - **10px / 300** — e.g. "To make sure your business is supportable,"
  - **9px / 500** — e.g. "create"
  - **8px / 400** — e.g. "Email"
- Never introduce a size outside this ladder.

## Shape & depth

- Box radii: `4px`, `6px`, `5px`, `0px 0px 6px 6px`, `8px`, `16px`

- Elevation, not borders. Signature shadow: `rgba(3, 3, 39, 0.25) 0px 14.088px 21.132px -14.088px, rgba(0, 0, 0, 0.1) 0px 8.453px 16.906px -8.453px`
- **Primary CTA:** 212×48px, radius `4px`, fill `rgb(83, 58, 253)`
- **Repeating rows:** 48px tall, radius `4px`, fill `rgba(255, 255, 255, 0)`, border `1px rgb(185, 185, 249)`

## Layout

- Content column **1232px**, mobile-first, centered on desktop
- Vertical rhythm: **24px** between sections
- Section order, top to bottom:
  1. Businesses on Stripe generated US$1.9tn in 2025.
  2. 150k+ users have their best day ever on Stripe.
  3. Tidemark's vertical and SMB SaaS benchmark report.
  4. Shopify's Tobi Lütke sits down with John Collison.
  5. New tools to process payments outside app stores.
  6. Crypto.com partners with Stripe to enable better crypto paym
  7. Make your products shoppable through AI platforms.
  8. How leading retailers unify customer experiences and drive g

## Rules

- Every tap target ≥ 44px (this design runs a 34px median)
- Inline SVG icons only, 2px stroke. No emoji.
- WCAG AA contrast in every state. The source CTA runs 6.19:1 — match it.
- Light mode only, matching the source
- Real placeholder content, no lorem ipsum
