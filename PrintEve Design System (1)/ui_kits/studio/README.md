# PrintVana Card Studio — UI kit

The **owner dashboard** for the NFC digital business card: where card owners track performance, work leads, edit their card, and share or order printed cards. Professional SaaS aesthetic — Stripe/Linear restraint (13–14px UI type, 1px slate borders, minimal color) on PrintEve tokens.

Open `index.html`. Design at **1280×860**; responsive down to mobile (sidebar becomes a fixed bottom nav at ≤900px).

## Views (sidebar / bottom-nav switching, vanilla JS)

1. **Overview** — greeting + live card URL; 4 stat cards (Card views 1,284 ▲12%, Contacts saved 342 ▲8%, Leads captured 57 ▲21%, WhatsApp taps 208 ▼3%); Recent leads list with call actions; Quick actions panel.
2. **Leads** — searchable, source-filterable table (Name / Phone / Note / Source chip: NFC tap · QR scan · Link / When / Call + WhatsApp actions); working **Export CSV** (real file download of visible rows).
3. **Analytics** — 14-day views bar chart (CSS bars, hover tooltips); "What visitors tap" breakdown bars; "Where taps happen" city list.
4. **My Card** — editor form (identity, contact, about, section toggles with switches) beside a **live phone-frame preview** (iframe of `../digital-card/index.html?embed=1`); autosave toast on input.
5. **Share & Order** — card link with copy; QR with PNG/sticker/wallet actions; **Order printed NFC cards** cross-sell (From ₹499 — the PrintVana marketplace loop); email-signature snippet with copy.

## Notable details

- Sidebar footer carries the standing **"Printed NFC cards — Order now"** cross-sell.
- Leads badge (3 new) on the nav item.
- Table rows hover-highlight; chips color-code acquisition source.
- All grids use `minmax(0, 1fr)` so nothing forces horizontal overflow on small screens.
- Topbar "View My Card" opens the receiver view in a new tab.

Companion: `../digital-card/` (receiver view) · flows: `d:\NFC Card\nfc-card-information-architecture.md` Part 4.2.
