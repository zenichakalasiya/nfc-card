# PrintVana NFC Digital Business Card
## Information Architecture & Mobile-First Flow — UX Documentation

**Prepared as:** UX Writing + Information Architecture specification
**Platform:** Mobile-first responsive web (one URL, receiver + owner experiences)
**Design system:** PrintEve Design System
**Date:** 7 July 2026

**Research inputs:**
- Reference image: "EliteCard – Alexander Sterling" profile layout
- Live references: qlik.biz/universalbrew, qlik.biz/MehulGajjar (Opti Matrix), dzicard.com/dbc/kbg-boilers-pvt-ltd
- Industry scan: Uniqode, OVOU, Popl, HiHello, KADO, OmniFlow (India), businesscards.io
- IxDF mobile-first principles (see companion doc: *mobile-first-design-research*)

---

# Part 1 — Who Is This Page For?

Every IA decision below follows from two people:

| | **The Receiver** (tapped the card) | **The Owner** (bought the card) |
|---|---|---|
| Mindset | Microtasking — 10-second visit, someone is standing in front of them | Extended engagement — editing, tracking |
| Device | Always a phone | Phone mostly, desktop for deep editing |
| Primary job | **Save this person's contact** | **Look impressive + capture the lead** |
| Secondary jobs | Call / WhatsApp / see what they offer | Update info, see analytics |
| Network | Often poor (expo hall, street, basement office) | Usually stable |

**The one-sentence design contract:**
> *A stranger with one thumb, weak 4G and five seconds of patience must be able to save the contact — everything else is progressive enhancement.*

---

# Part 2 — Complete Information Architecture

## 2.1 The Priority Pyramid (what loads and shows first)

```
P0  IDENTITY        Who is this?             (0–1 s, above the fold)
P1  ACTIONS         How do I reach them?     (thumb zone, no scroll)
P2  CREDIBILITY     Can I trust them?        (first scroll)
P3  OFFERINGS       What do they sell?       (second scroll)
P4  PROOF & MEDIA   Show me more             (deep scroll)
P5  EXCHANGE        Here are MY details      (persistent CTA)
P6  UTILITIES       Payments, files, legal   (bottom / on demand)
```

## 2.2 Full Content Inventory — every block, field by field

### P0 · Identity Block (Hero)
| Element | Content | Rules & UX notes |
|---|---|---|
| Cover banner | Brand image / gradient / video still | Decorative — must never delay text render. Lazy-load. |
| Profile photo | Face or logo, circular | 2 fallbacks: initials avatar → brand mark. Never broken image. |
| Full name | "Gunjan Talsania" | Largest text on page (H1). Test 28+ character Indian names. |
| Designation + Company | "Founder, CEO · Khyati & Sons Enterprise" | One line, truncate gracefully. |
| Tagline (optional) | "Redefining digital networking" | Max 60 chars. Owner-written; we provide examples. |
| Verified badge (optional) | ✓ PrintVana Verified | Trust marker; links to what verification means. |
| View counter (optional) | "👁 288 views" | Social proof seen on qlik.biz. Owner can toggle off. |

### P1 · Action Row (the money row — sticky/thumb-zone)
| Action | Microcopy | Behavior |
|---|---|---|
| **Save Contact** | `Save Contact` | PRIMARY. Downloads .vcf with photo. The "Shazam button". |
| Call | `Call` | `tel:` — if 2 numbers, bottom-sheet chooser ("Office / Personal"). |
| WhatsApp | `WhatsApp` | Pre-filled: "Hi {FirstName}, we just met — great connecting!" |
| Email | `Email` | `mailto:` with subject "Following up — {OwnerName}". |
| Website | `Website` | New tab. |
| Directions | `Directions` | Google Maps deep link. |
| Share | `Share` | Native share sheet → WhatsApp/SMS/Email/LinkedIn + Copy link. |
| QR | `Show QR` | Full-screen QR of this card (reverse-share when *their* phone taps ours). |

*Rule: max 4 visible + "More" overflow if owner enables >4. One tap each — no interstitials.*

### P2 · Credibility Block
| Element | Content | Notes |
|---|---|---|
| About company | 2 short paragraphs max | UX-writer trimmed; 2–3 sentences each (IxDF scanning rule). |
| About person (bio) | 1 paragraph | Optional; "20 years leading teams across EMEA…" |
| Expertise tags | `Strategy` `Leadership` `Innovation` | Chips, max 6. |
| Legal identifiers | GSTIN, ISO cert, CIN | India-critical (both qlik.biz & dzicard show GSTIN/ISO). Copy-on-tap. |
| Social row | LinkedIn, Instagram, Facebook, YouTube, X, IndiaMART | Icons only, recognized patterns. Max 6, owner picks order. |

### P3 · Offerings Block
| Element | Content | Notes |
|---|---|---|
| Section title | `What we offer` | Not "Exclusive Offerings" — plain language wins. |
| Service/product cards | Image + name + 1-line description | Card pattern (IxDF-recommended). Horizontal scroll on mobile, grid on desktop. |
| Category grouping | "Coffee / Tea / Cocoa" | Reference cards group SKUs under headers — support simple text lists too (SMB mode). |
| Card CTA | `Enquire on WhatsApp` | Pre-filled with product name: "Hi, I'm interested in {Product}". |
| Catalogue link | `View full catalogue (PDF)` | For businesses with long lists. |
| Search (only if >8 items) | `Search services…` | Progressive disclosure — hidden for small catalogues. |

### P4 · Proof & Media Block
| Element | Content | Notes |
|---|---|---|
| Featured video | YouTube/hosted embed | Click-to-load poster only (never autoload — bandwidth). |
| Gallery | 3–8 images | Lightbox; lazy-load. |
| Testimonials | Quote + name + role | 1–3, carousel. |
| Resource center | Company profile PDF, brochures, price list | Show file size ("PDF · 4.2 MB") — users on mobile data deserve to know. |
| Google Review link | `⭐ Rate us on Google` | Huge for Indian SMBs — drives their local SEO. |

### P5 · Exchange Block (lead capture — OUR differentiator)
| Element | Content | Notes |
|---|---|---|
| Floating CTA | `Share your details` | Appears after 40% scroll or 8 s. Never blocks content. |
| Form fields | Name, Phone, (Email), (Note) | 2 required max. Autofill-friendly. This feeds the owner's lead inbox. |
| Consent line | "Your details go only to {OwnerName}." | Plain-language privacy = trust. |
| Success state | "Done! {FirstName} has your details." | + optional "Save their contact too" nudge. |

### P6 · Utilities Block
| Element | Content | Notes |
|---|---|---|
| Payments | UPI ID + QR, bank details, GPay/PhonePe/Paytm buttons | dzicard has "Payments"; OmniFlow leads with UPI — must-have for India. Copy-on-tap UPI ID. |
| Wallet pass | `Add to Apple Wallet` / `Add to Google Wallet` | Receiver keeps the card forever. |
| Appointment booking | `Book a meeting` | Calendly/Google Calendar link. Optional module. |
| Address block | Full postal address | Copy-on-tap + map link. |
| Multiple numbers/emails | Labeled: Office / Personal / Support | qlik.biz shows 2 numbers — support up to 3, labeled. |
| Language toggle | EN / हिन्दी / ગુજરાતી | Phase-2; content-first means planning string expansion NOW. |
| Footer | "Made with PrintVana · Get your card" + Privacy/Terms | The referral loop — every card sells the next card (all 3 references do this). |

## 2.3 Features Beyond the Reference Image (research findings)

Found across Uniqode / Popl / OVOU / OmniFlow / dzicard but **not** in the EliteCard image:

1. **Two-way exchange (lead capture form)** — the single biggest gap; turns the card from a brochure into a lead engine.
2. **Wallet passes** (Apple/Google) — persistence after the tap.
3. **UPI payments block** — India-specific killer feature.
4. **Google Review deep link** — SMB local-SEO magnet.
5. **Appointment booking** — high value for consultants/doctors/agents.
6. **View analytics for owner** — views, taps by action, saves, lead count, tap locations.
7. **Email-signature embed & virtual meeting background** with card QR — passive sharing surfaces.
8. **SMS sharing + reverse QR** — works when receiver has no WhatsApp.
9. **Team features** — locked brand templates, central roster, bulk provisioning (Phase 2, B2B).
10. **CRM export** — leads → CSV/Google Sheets → later Zoho/HubSpot (Phase 2).
11. **View counter & "card sticker" download** (dzicard) — cheap social proof + offline QR sticker for shop counters.
12. **PrintVana-unique synergy:** `Print this card` — order physical NFC cards, QR stickers, standees, brochures **through the PrintVana marketplace**. No competitor can close this loop.

## 2.4 Module System (how IA flexes per persona)

The card = **fixed core + optional modules**, so a chai-stall owner and a consulting MD both look right:

- **Core (always):** Identity + Action Row + Share + Footer
- **Modules (owner toggles):** About · Offerings · Gallery · Video · Testimonials · Resources · Payments · Booking · Review link · Lead form · View counter

*Empty modules never render. No "coming soon" placeholders — IxDF: content availability first.*

---

# Part 3 — UX Writing Guide (voice, labels, microcopy)

## 3.1 Voice & Tone
- **Warm-professional, Indian-English friendly.** Say "Enquire on WhatsApp", not "Initiate communication".
- **Verb-first CTAs** (IxDF action-oriented grammar): Save, Call, Share, Book, Pay, Enquire.
- **No jargon:** "vCard" → `Save Contact`. "VCF Card" (from reference image) is developer language — never show it.
- **Numbers over adjectives:** "PDF · 1.8 MB", "288 views" — not "comprehensive document".

## 3.2 Microcopy Table (canonical strings)

| Context | ❌ Avoid | ✅ Use |
|---|---|---|
| Primary CTA | Download VCF / Add to contacts | `Save Contact` |
| Lead form open | Submit your information | `Share your details` |
| Lead form success | Form submitted successfully | `Done! {Name} has your details.` |
| Offerings title | Exclusive Offerings / Our Portfolio | `What we offer` |
| Enquiry CTA | Contact us for inquiry | `Enquire on WhatsApp` |
| Payments | Payment Information | `Pay {FirstName}` / `Scan to pay` |
| Wallet | Export pass | `Add to Apple Wallet` |
| Offline error | Network error occurred | `You're offline. The card will load when you're back.` |
| Broken action | — | `This link isn't working. Try {alternative}.` |
| Share sheet | Refer this card | `Share {FirstName}'s card` |
| Referral footer | Powered by PrintVana | `Made with PrintVana · Get yours` |
| QR screen | Scan QR Code | `Point your camera here` |
| Loading | Please wait… | Skeleton screens, no text (IxDF) |

## 3.3 Content Rules for Owners (enforced in the editor)
- Tagline ≤ 60 chars · About ≤ 2 paragraphs × 3 sentences · Tags ≤ 6 · Services: name ≤ 40 chars, description ≤ 90 chars.
- Editor shows **live mobile preview** — you write inside the constraint (content-first with real text, never lorem ipsum).
- Test data must include long names ("Chakravarthy Venkatasubramanian"), 2-line company names, Gujarati/Hindi strings (+30–40% expansion).

---

# Part 4 — Mobile-First Flows

## 4.1 Receiver Flow (the tap — 95% of traffic)

```
NFC tap / QR scan / link
        │
        ▼
┌─────────────────────────┐
│ 0–1s  SKELETON → P0     │  Identity renders first, always <1s
│       photo·name·title  │
└─────────┬───────────────┘
          ▼
┌─────────────────────────┐     ┌──────────────────┐
│ ACTION ROW (thumb zone) │────▶│ Save Contact     │→ .vcf → phone contacts
│ Save·Call·WA·Share·More │     │ Call / WhatsApp  │→ native apps
└─────────┬───────────────┘     └──────────────────┘
          ▼  (only if curious)
   Scroll: About → Offerings → Media → Reviews
          │
          ▼ (40% scroll or 8s)
┌─────────────────────────┐
│ Floating: "Share your   │──▶ 2-field form ──▶ "Done!" ──▶ Lead → owner
│  details" (dismissible) │
└─────────┬───────────────┘
          ▼
   Footer: "Made with PrintVana · Get yours"  ← referral loop
```

**Flow rules**
1. Save Contact reachable **without any scroll**, in the thumb zone.
2. Every action ≤ 1 tap to native app. No login, no app install, ever.
3. Scroll is **one-directional, single column** (IxDF).
4. Lead-form nudge is dismissible and never auto-opens over content.
5. Page weight target: **< 200 KB first render, < 3 s on 4G**.

## 4.2 Owner Flow (buy → build → share → track)

```
Discover (PrintVana app banner / referral footer / sales)
   │
   ▼
1. CLAIM        Choose handle → card.printvana.com/{yourname}
   │            "Your card link, forever."
   ▼
2. BUILD        Guided 4 steps, one screen each (restrict inputs):
   │            ① Photo & name → ② Contact actions → ③ Business info → ④ Extras
   │            Live phone-frame preview at every step
   ▼
3. PREVIEW      "See it like they will" — full receiver view test
   ▼
4. SHARE        • Order NFC card (→ PrintVana print marketplace!)
   │            • Download QR sticker / poster (→ print via PrintVana!)
   │            • Wallet pass · link · email signature
   ▼
5. TRACK        Dashboard: Views · Saves · Action taps · Leads inbox
   │            Lead row → one tap: Call / WhatsApp / Export
   ▼
6. UPDATE       Edit anytime → live instantly. "No reprints. Ever."
```

**Owner-side rules**
- Onboarding completable on a phone in **< 5 minutes** with only P0+P1 filled; every module skippable ("Add later").
- Progressive disclosure: extras (payments, booking, resources) live behind "Add more sections".
- Notification on new lead: WhatsApp/push — "Rahul from Ahmedabad shared their details on your card."

## 4.3 Screen Map (sitemap)

```
card.printvana.com/
├── /{handle}                    ← RECEIVER card page (public, no auth)
│    ├── #qr                     full-screen QR overlay
│    ├── /vcf                    vCard download endpoint
│    └── /pass                   wallet pass endpoint
├── /studio                      ← OWNER app (auth)
│    ├── /onboarding  (4 steps)
│    ├── /editor      (modules, live preview)
│    ├── /leads       (inbox, export)
│    ├── /analytics   (views, taps, saves)
│    ├── /share       (QR kit, signature, wallet)
│    └── /order       (NFC card + print products → PrintVana)
└── /               marketing / "Get your card"
```

---

# Part 5 — Responsive Strategy (mobile → web)

**Approach: Responsive, mobile-first, single URL** (per research: adaptive = multiple layouts = maintenance + SEO cost; the card's single-column simplicity loses nothing in responsive reflow).

| Breakpoint | Layout behavior |
|---|---|
| **≤ 480 px** (design origin) | Single column. Action row 4 icons + More. Offerings horizontal-scroll cards. Sticky Save Contact on scroll-up. |
| **481–768 px** (large phone/small tablet) | Same column, max-width 560 px centered. Offerings 2-up grid. |
| **769–1024 px** (tablet) | Card centered 640 px; gallery 3-up; nav actions get text labels beside icons. |
| **≥ 1025 px** (desktop) | Two-zone: left rail = identity + actions (sticky), right = content modules. Offerings 3-up. QR panel visible by default ("Scan to open on your phone"). |

**Enhancement direction (never subtraction):**
- Base (mobile) = complete experience: every fact, every action.
- Desktop *adds* comfort: persistent QR (hand-off principle — desktop viewer sends card to their phone), hover states on top of tap states, wider media.
- Owner editor: mobile = full editing; desktop = adds side-by-side preview + bulk tools.

**Performance & resilience checklist**
- [ ] P0 text renders before any image (progressive enhancement)
- [ ] Poster-only video embeds; lazy gallery
- [ ] vCard + core contact data work with JS disabled
- [ ] Offline revisit: cached card shell (PWA) — "on-the-move users, unstable networks" (IxDF)
- [ ] All tap targets ≥ 44 px; text ≥ 11 pt; portrait-first
- [ ] Heading order H1→H3 clean; alt text everywhere; ARIA on overflow menu (screen readers)
- [ ] Pseudo-localization pass (Hindi/Gujarati +40% string length)

---

# Part 6 — What We Deliberately Leave Out (and why)

| Rejected element | Reason |
|---|---|
| App install requirement | Kills the 10-second promise. Web only. |
| Login to view card | Same. Public page. |
| Autoplaying video/audio | Data cost + surprise = distrust (IxDF: kill bandwidth eaters). |
| Hover-dependent anything | Touch-first (IxDF: no hover on mobile). |
| Carousel hero banners | Attention span; one static/gradient banner. |
| Pop-up newsletter/ads | This is a person's card, not a funnel. |
| Long forms | 2 required fields max, everywhere. |
| "VCF/vCard" jargon in UI | Receiver language, not developer language. |

---

# Appendix A — Reference Card Teardowns (research evidence)

**qlik.biz/universalbrew (Gunjan Talsania)** — view counter (288), name/company/role, Call·WhatsApp·Website chips, GSTIN, categorized product list (Coffee/Tea/Cocoa), address, 2 phones, email, social (LinkedIn/FB/Insta), vCard export, share via WA/email/FB/LI/X, "Create Your Digital Card" referral, powered-by. *Weakness: wall of text, no lead capture, no payments.*

**qlik.biz/MehulGajjar (Kristal Graphitech)** — same skeleton + Google Maps location chip; Instagram only; referral code in signup link (viral loop!). *Weakness: no imagery for a visual business (printing/signage).*

**dzicard.com/dbc/kbg-boilers (Amit Gajjar)** — Inquiry CTA, Share, Call/WhatsApp/Email/SMS, Save vCard, QR code, **Legal Info** (ISO cert), **Payments** section, products list, maps link, 6 socials incl. IndiaMART & YouTube, downloadable QR sticker, feedback link, referral CTA. *Strongest feature set of the three; weakness: dated visual design, typo'd email ("gmail.ccom") shows the need for input validation in our editor.*

**EliteCard reference image** — premium visual bar: cover art, avatar, tagline, 7 action chips, About + tags, QR panel, offerings with search + Enquire, media spotlight video, portfolio grid, resource PDFs with sizes, testimonial, clean footer. *Gaps we close: lead capture, payments, booking, wallet, review link, analytics.*

# Appendix B — Field Validation Rules (editor)

| Field | Validation |
|---|---|
| Phone | E.164, India default +91, live format check |
| Email | RFC + typo suggestions ("gmail.ccom → gmail.com?") |
| UPI ID | `name@bank` pattern check |
| GSTIN | 15-char checksum validation |
| Handle | 3–30 chars, lowercase, unique, no impersonation of brands |
| Images | Auto-compress to WebP, face-crop suggestion for avatar |
| Links | HTTPS enforced, dead-link checker weekly |

---

*Companion document: `mobile-first-design-research.md` (IxDF principles this IA implements).*
*Next phase: wireframes → PrintEve Design System tokens → hi-fi mobile screens.*
