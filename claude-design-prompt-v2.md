# Claude Design prompt — v2 (research-grounded)

Built from live DevTools inspection of **dot.cards** (production profile), the **OVOU**
profile system, and the Dribbble NFC-card corpus. Measured values from those pages are
baked into the spec below — see `research-findings` section at the bottom for provenance.

Copy everything between the horizontal rules into Claude Design.

---

Design a **digital business card** — the mobile web page a person lands on after tapping an NFC card. Deliver a single self-contained HTML file with inline CSS and no external assets.

The aesthetic target: **clean, minimal, professional, quietly premium.** Think Linear's restraint and Stripe's typographic confidence, applied to a personal profile. It should feel like a well-printed object, not a link-in-bio page.

## Brand — PrintEve

- Primary green `#16A34A`, hover `#15803D`, secondary `#22C55E`, soft surface `#DCFCE7`, deep `#14532D`
- Neutrals (slate): text `#0F172A`, muted `#64748B`, border `#E2E8F0`, canvas `#F8FAFC`, white cards
- **Inter** (system-ui fallback). Weights 400–800.
- Icons: **inline SVG, lucide style**, 2px stroke, round caps. **No emoji, anywhere.**
- Voice: confident, benefit-led, Indian context — ₹, +91, GSTIN, Title Case buttons.

## Profile data (use verbatim — no lorem ipsum)

**Tarang Sachaniya** · CEO & Founder, **PrintEve** · Ahmedabad, Gujarat
Tagline: "Order any print. Delivered by trusted local printing partners."
About: PrintEve connects businesses with vetted local printing partners across India — business cards, flyers, brochures, posters, stickers and packaging. Instant quotes, free design proofing, doorstep delivery.
Proof: **10,000+ orders · 500+ partners · 99% satisfaction**
+91 98250 12345 · tarang@printeve.in · printeve.in · GSTIN 24ABCDE1234F1Z5

## Layout — mobile-first, 390px column, centered on desktop

**1. Hero — photo-first.** A full-bleed portrait panel, 4:5 ratio, corners radius 24px. Name and role sit *over* the bottom of the photo on a dark gradient scrim (`transparent → rgba(0,0,0,.72)`), not below it. A small "Verified" pill sits top-right on the photo. Company name is prefixed by a 3px vertical accent bar in primary green.

**2. Name is the largest element on the page** — 32px / 800 / `-0.02em`. Role 15px / 500. Company 13px / 600, muted. One category chip beneath the hero (11px, pill, `#F1F5F9` fill).

**3. Action bar — the thumb zone.** A filled primary "Save Contact" button paired on the same row with a 56×56px square icon button (download vCard). Then a full-width outline "Exchange Contact" button below it.
- Buttons: **height 52px, radius 10px**.
- Give the primary CTA a **tactile hard shadow: `0 2px 0 #15803D`** — no blur. It should read as a physical, pressable key. This is the single most important detail in the design.

**4. Contact rows.** Call · WhatsApp · Email · Website · Book a Meeting.
- Each row: **height 60px, radius 10px, white fill, NO border.**
- Elevation instead of borders: `box-shadow: 0 0 20px rgba(110,135,171,0.15)`. Cool-grey, ambient, wide, zero offset.
- Left: a **48px circular medallion**, solid primary-green fill, white 2px-stroke icon inside.
- Middle: label 15px/700 above value 13px/600 muted.
- Right: a small arrow glyph, muted.
- 12px gap between rows.

**5. About** — 2 short paragraphs max, then a 3-up stat strip (10,000+ / 500+ / 99%) with hairline dividers between. Then 4 tag chips.

**6. Video intro** — 16:9, radius 16px, centered play button, caption "Inside a PrintEve partner press", duration chip "1:42" bottom-right.

**7. Services** — 3 rows (Business Cards · Flyers & Brochures · Custom Packaging), each a one-line description and an "Enquire" text link in green.

**8. Gallery** — 3 square tiles, 8px gutter, radius 12px, captions beneath in 11px muted.

**9. Details** — Phone / Email / GSTIN / Address rows, each with a ghost copy button on the right.

**10. Payments** — UPI `printeve@icici` with copy button, small QR block, GPay/PhonePe/Paytm chips, "Verified merchant · ICICI Bank" note in 11px.

**11. Files** — "Company Profile 2026 · PDF · 3.1 MB" and "Price List · PDF · 800 KB" download rows.

**12. Testimonial** — one short quote, large-ish serif-adjacent treatment, attribution beneath.

**13. Scan block** — QR + "Scan to open this card".

**14. Footer** — "Made with PrintEve" · Privacy · Terms.

## The system rules that make it feel designed

- **One accent color, spent sparingly.** Green appears on: the primary CTA, the icon medallions, the company accent bar, and the "Enquire" links. Nowhere else. Every other surface is white on `#F8FAFC`.
- **Type scale, strictly four steps:** 32 (name) / 20 (section headings) / 14–15 (body & row labels) / 11 (eyebrows, captions, chips). Eyebrow labels are uppercase, 11px, `0.08em` tracking, muted.
- **Whitespace is the layout.** 4px grid. 32px between sections, 12px between rows within a section. Separate sections with space, not dividers — use hairline `#E2E8F0` rules only inside the stat strip.
- **No heavy borders.** Depth comes from wide, low-opacity, cool-grey ambient shadow. The one exception is the CTA's hard offset shadow.
- **Corner radii:** buttons and rows 10px, cards 16px, hero 24px, chips and avatars fully rounded.
- **Ship dark mode.** Most phones open links in dark. Provide `prefers-color-scheme: dark`: canvas `#0C1510` (green-tinted near-black), cards `#131C17`, accents shift to `#22C55E`/`#4ADE80`, and the CTA gains a soft green glow instead of the hard shadow.

## Hard rules

- Static only — `#` links, no backend, no CDN, no external fonts or images. Placeholders drawn in CSS/SVG.
- Every tap target ≥ 44px (rows are 60px, buttons 52px — respect this).
- No text below 11px. WCAG AA contrast in **both** light and dark mode.
- Single column. Must look correct at 390px and centered, max-width ~420px, on desktop.
- Inline SVG icons only. No emoji.

---

## Research findings — where these numbers came from

Measured live with Chrome DevTools, not guessed.

**dot.cards** (`/samwoodstech`, computed styles):

| Element | Measured value |
| --- | --- |
| Primary CTA | height 50px, radius 9px, `box-shadow: 0 2px 0 #3D9D92` (hard, no blur) |
| Secondary CTA | 56×56px square, same fill and radius |
| Contact row | height 60px, radius 10px, white, **no border**, `0 0 20px rgba(110,135,171,.15)` |
| Icon medallion | 56px circle, solid brand fill, white icon |
| Name | only 20px / 800 |
| Role | 16px / 600 / `-0.16em` tracking |
| Company | 13px / 600 muted, preceded by a vertical accent bar |
| Chip | 11px / 400, pill, grey fill |

The one place I deliberately **departed** from dot.cards: their name is 20px, which under-weights
the single most important word on the page. The Dribbble corpus and OVOU both scale the name far
larger. v2 specifies 32px.

**Patterns confirmed across dot.cards, OVOU, and the Dribbble NFC corpus:**

1. **Photo-first hero.** Either a cover band with an overlapping avatar (dot.cards) or a full-bleed portrait with the name overlaid on a scrim (OVOU, Basov Design). v2 takes the second — it's the more premium of the two.
2. **Dual CTA is the convention.** Filled "Save Contact" + outline "Exchange Contact". Never one button alone.
3. **Borderless rows, ambient shadow.** No production card used visible borders on its action rows.
4. **Rows are 60px** — comfortably above the 44px minimum. Nobody ships tight rows here.
5. **Rich content blocks** are what separate a card from a link-in-bio: video, gallery, map, FAQ accordion, featured files, booking link (OVOU ships all of these).
6. **Dark canvas + acid/deep green** was the dominant palette in the Dribbble corpus — which happens to sit right on PrintEve's existing brand green.
7. **Dark mode is not optional.** Phones default to it; the card is opened cold, once, by a stranger.

Sources:
- [dot.cards live profile](https://dot.cards/samwoodstech) — DevTools computed-style inspection
- [Dribbble — NFC Card tag](https://dribbble.com/tags/nfc-card) (OVOU / Basov Design profile systems)
- [OVOU](https://ovou.com/)
- [Blinq](https://blinq.me/), [V1CE](https://v1ce.co/blog/best-digital-business-cards), [HiHello](https://www.hihello.com/)
- [Business card design trends 2026](https://www.thecreativeunit.com/blog/16-business-card-trends-of-2026)
