# Ready-to-paste prompt for Claude Design

Copy everything between the lines into Claude (claude.ai artifact / Claude Design) to generate fresh static digital business card designs in PrintEve branding.

---

Design a **static digital business card** (the mobile web page a person sees after tapping an NFC card), as a single self-contained HTML file with inline CSS. Give me **3 different UI versions** side by side or as separate artifacts — each a genuinely different layout direction, not a recolor.

## Brand — PrintEve (follow exactly)

- **Primary green `#16A34A`**, hover `#15803D`, secondary `#22C55E`, soft accent surface `#DCFCE7`, deep green `#14532D`
- **Neutrals: slate scale** — text `#0F172A`, muted `#64748B`, border `#E2E8F0`, surface `#F8FAFC`, white canvas
- **Typography: Inter** (or system-ui fallback), weights 400–800; tight `-0.02em` tracking on large headings; relaxed 1.65 line-height on body; body 14–16px, labels 11–12px uppercase with wide tracking
- **Corners:** soft and generous — buttons 8px, cards 12–16px, hero panels 24px, pills/avatars fully rounded
- **Shadows:** low-spread, barely-there cool grey; primary CTA may carry a subtle green glow
- **Icons: lucide style** — 2px stroke, round caps, inline SVG. **Never emoji.**
- **Voice:** confident, benefit-led, Indian context — ₹ pricing, +91 phones, GSTIN, Title Case buttons ("Save Contact", "Enquire Now")

## Profile (use this exact data)

- **Tarang Sachaniya** — CEO & Founder, **PrintEve** — Ahmedabad, Gujarat
- Tagline: "Order any print. Delivered by trusted local printing partners."
- About: PrintEve connects businesses with vetted local printing partners across India — business cards, flyers, brochures, posters, stickers and packaging. Instant quotes, free design proofing, doorstep delivery. Proof points: **10,000+ orders · 500+ partners · 99% satisfaction**
- Phone +91 98250 12345 · tarang@printeve.in · printeve.in · GSTIN 24ABCDE1234F1Z5

## Sections (this exact order — it's our tested information architecture)

1. **Identity** — avatar/initials, name (largest text on page), role + company, location, Verified badge
2. **Primary actions in the thumb zone** — big "Save Contact" button + Call / WhatsApp / Email / Website / Share as icon chips (all ≥44px touch targets)
3. **About** — max 2 short paragraphs + 4 tag chips (Business Cards, Marketing Prints, Packaging, Bulk Orders)
4. **Video intro** — 16:9 poster with centered play button, caption "Inside a PrintEve partner press", duration chip "1:42"
5. **Services** — 3 items (Business Cards · Flyers & Brochures · Custom Packaging), each with a one-line description and an "Enquire" link
6. **Gallery** — 3 square image placeholders with captions
7. **Details** — Phone / Email / GSTIN / Address rows with copy buttons
8. **Payments** — UPI ID `printeve@icici` with copy button, small QR placeholder, GPay/PhonePe/Paytm chips, "Verified merchant · ICICI Bank" note
9. **Files** — "Company Profile 2026 · PDF · 3.1 MB" + "Price List · PDF · 800 KB" download rows
10. **Testimonial** — one short quote with attribution
11. **Scan block** — small QR + "Scan to open this card"
12. **Footer** — "Made with PrintEve" + Privacy · Terms links

## Design keywords (steer the aesthetic)

minimal · clean · editorial · premium SaaS polish · mobile-first 390px viewport · card-on-canvas layout · generous whitespace · strong visual hierarchy · one accent color used sparingly · 4px spacing grid · thumb-friendly · scannable · soft depth, no heavy borders · confident typography scale (32/20/14/11) · quiet micro-details (hairline dividers, uppercase eyebrow labels, subtle green glow on primary CTA only)

## The 3 versions I want

1. **Minimal light** — white/slate canvas, white cards, green only on the primary CTA and small accents; LinkedIn-meets-Linear restraint
2. **Deep green dark** — near-black green-tinted canvas (`#0C1510`), `#22C55E`/`#4ADE80` accents, glowing CTA, premium night mode
3. **Editorial print-shop** — graph-paper texture background, ink borders with hard offset shadows, a handwritten-script accent phrase under the name, receipt-style payments block (dashed rules, perforated edge) — a card that *feels* printed

## Hard rules

- Static only: dummy `#` links, no backend, no external assets/fonts/CDNs — everything inline
- Single mobile column (~390px), must also look fine centered on desktop
- No emoji anywhere; inline SVG icons only
- Real content from above — no lorem ipsum
- Every tap target ≥ 44px; text ≥ 11px; WCAG AA contrast

---
