# PrintVana Digital Card — UI kit (v2, professional)

The **NFC-tap receiver view**: the page a stranger lands on when they tap a PrintVana NFC card or scan its QR. Redesigned to a **professional card-on-canvas layout** (LinkedIn's profile pattern + Linear's restraint): slate canvas, white cards with 1px borders, pill CTAs, ink cover with a quiet green glow, 13–14px UI type.

Open `index.html`. Design origin **390×844**; responds up to a desktop two-column layout (main 600px + sticky side rail) at ≥1025px. Append **`?embed=1`** to hide demo chrome (used by the Studio live preview).

## Two demo personas (switch bottom-left)

| | Business | Individual |
|---|---|---|
| Who | Priya Sharma, Founder & CEO, Sharma Packaging Solutions (Ahmedabad) | Arjun Mehta, Independent Product Design Consultant (Bengaluru) |
| Details | Phone, email, GSTIN, address | Phone, email, portfolio, city |
| Offerings | Mailer boxes, labels, inserts | Design audit, design systems, sprints |
| Extras | Google reviews, price lists, UPI | Portfolio deck, book intro call, UPI |

All content renders from a JS data object (`PERSONAS`) — the same architecture the production card will use.

## Layout (top → bottom)

1. **Identity card** — ink cover (green radial glow) with view count + dark-mode toggle; avatar overlapping; name + Verified pill; role; location · tagline; **Save Contact** (solid pill, real .vcf download) + WhatsApp + Share; quick-action icon rail (Call, Email, Website, Directions, QR, Exchange).
2. **About** — two short paragraphs, tag chips, social icons.
3. **Details** — contact-info rows (icon, label, value) with copy-on-tap.
4. **Services** — media rows with illustration thumbs + "Enquire" (pre-filled WhatsApp).
5. **Highlights** — quote with green rule, resource rows with file sizes, Google reviews.
6. **Payments** — UPI copy row + wallet buttons.
7. **Footer** — "Made with PrintVana · Get Your Card" referral loop.

Fixed: lead-capture bar (8 s / 40% scroll, dismissible) → bottom sheet (2 required fields → success state). Desktop side rail: QR hand-off card + "Get Your Card".

## Interactions

Real vCard download per persona · copy-on-tap with toast · native share with clipboard fallback · full-screen QR overlay · dark mode via `data-theme` on the root (all tokens flip) · Esc closes overlays · `prefers-reduced-motion` respected.

## Breakpoints

| Range | Layout |
|---|---|
| ≤ 480px | Cards edge-to-edge; Save Contact full-width, WhatsApp+Share on row 2 |
| 481–1024px | Centered 600px column with canvas margins |
| ≥ 1025px | Main column + 300px sticky side rail (QR hand-off, referral card); lead bar docks bottom-right |

Companion: `../studio/` (owner dashboard) · IA spec: `d:\NFC Card\nfc-card-information-architecture.md`.
