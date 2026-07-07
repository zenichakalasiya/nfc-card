# Mobile-First Design — Research Notes

**Source:** Interaction Design Foundation (ixdf.org) — Mobile First topic, Mobile UX Design topic, and supporting articles by Luke Wroblewski's framework, Frank Spillers, Mads Soegaard, and IxDF course material.
**Purpose:** Foundation knowledge for designing the **PrintVana / PrintEve NFC Digital Business Card** experience (mobile + web, using the PrintEve Design System).
**Date:** 7 July 2026

---

## 1. What is Mobile-First Design?

Mobile-first design is an approach that **embraces the constraints of smaller screens** and focuses on what is **indispensable** for users.

> You start the design process by designing for the **smallest device first**, then **progressively enhance** the design for larger layouts (mobile → tablet → desktop).

The concept was proposed in **2009 by Luke Wroblewski** (author of *Mobile First*, later Product Director at Google). His argument: starting design from the desktop version is a *backward* way of thinking. Designing mobile-first **forces focus** and **enables innovation**.

### Wroblewski's 3 reasons to go mobile-first (updated by IxDF)

1. **Mobile has exploded** — smartphones are ubiquitous; mobile devices generate **over 62% of all web traffic worldwide** (Statista). Since 2014, mobile users are the online majority.
2. **Mobile forces you to focus** — people use phones on the move, in short sharp bursts. There is no room for extraneous features. You must decide what really matters.
3. **Mobile offers new capabilities** — GPS, camera, accelerometer, touch, gestures, AR, biometrics, **NFC**. Mobile-first lets you leverage these instead of replicating a desktop experience on a small screen.

---

## 2. Progressive Enhancement vs. Graceful Degradation

Mobile-first is built on **progressive enhancement**:

| Concept | Direction | Focus |
|---|---|---|
| **Progressive enhancement** | Start small/basic → add layers up | Content availability for **everyone** first; users with better browsers/faster internet get an enhanced version |
| **Graceful degradation** | Start rich/desktop → strip down | Designs for the most capable browsers first, then patches for weaker ones |

Progressive enhancement is **preferred for modern web design** because content is guaranteed to reach every user, regardless of device or connection.

**Rule:** content loads before anything else. Images get alt-text (also boosts SEO).

---

## 3. Core Principles of the Mobile-First Approach (IxDF)

1. **Keep it simple** — treat white space as a design element. Clean, clutter-free layout. Navigation contains only essential items (human working memory holds **5–9 items**).
2. **Visual hierarchy** — mobile-first is content-first. Prioritize information using headings, paragraphs, captions and text styles so users instantly see what matters most.
3. **Optimize for scanning, not reading** — users scan in known patterns (left→right, top→bottom). Put the most critical info **above the fold**; paragraphs max 2–3 sentences.
4. **No hover effects** — hover is impossible on touch. Use tap/slide/gesture events users already know ("think app").
5. **Leave complex graphs/large imagery for desktop** — optimize images so nothing gets awkwardly cropped on mobile.
6. **Fat-finger-friendly targets** — tap targets **no smaller than 30 px** (IxDF minimum); **Apple recommends ≥ 44 px**; physical size ≥ 7–10 mm. Big targets = better accessibility too.
7. **Consider the context of use** — users are distracted, moving, one-handed, in bad light, on weak connections.
8. **Information architecture is critical** — it weeds out unnecessary detail. Use a content inventory to decide what earns a place on the screen.

---

## 4. Three Prioritization Approaches: Mobile-First, Task-First, Content-First

IxDF (Frank Spillers) frames three complementary approaches:

### Mobile-First
Design for small screens first, then scale up. Prioritize under the constraints of **movement, time, and attention**.

### Task-First
Design the **core value proposition** first. Focus on the user's primary task and make its completion effortless.
- Classic example: **Shazam** — one big animated button, "Tap to Shazam". The main task is obvious in one second.
- Ask: **"What is our Shazam button?"** (For an NFC card: **Save Contact**.)

### Content-First
Start with what the user **wants/needs/desires**, design content around it, add interface later. Three stages:
1. **Copy** — clear, concise text; define typography, sizes, heading structure (H1→H5; critical for screen-reader accessibility).
2. **UI elements** — buttons, icons, graphics that support the content.
3. **Interaction elements** — animations/transitions last.

**Takeaway:** the best mobile experiences combine all three: mobile constraints + one primary task + content before chrome.

---

## 5. Mobile UX Design — Practical Guidelines (IxDF)

### The 3 (+2) mobile mindsets (Josh Clark, *Tapworthy*)

| Mindset | User situation | Design response |
|---|---|---|
| **"I'm microtasking"** | Short, frenzied bursts (buy a ticket) | Make frequent tasks maximally efficient |
| **"I'm local"** | What's around me? | Use location/sensors (with permission) |
| **"I'm bored"** | Killing time | Offer browsable, entertaining content |
| **Extended engagement** (new) | Long scroll/swipe sessions | Streaming, feeds |
| **Interrupted attention** (new) | Notifications pull users back | Respect focus; match notification urgency to real urgency (Microsoft "Respecting Focus") |

### 5.1 Minimize content
- Page load **< 3 seconds**.
- Reduce cognitive load; simple, straightforward UI.
- **94% of mobile users hold the phone in portrait** — every pixel of *width* is precious.
- Small, few images. Clear visual hierarchy. Color + contrast for visibility.
- Text **≥ 11 pt**.
- Compress info into icons where appropriate; frame content with whitespace.
- **Card-style design patterns** show actionable content easily.
- Consider task-oriented design.

### 5.2 Simplify navigation
- Self-evident navigation; progressive disclosure.
- Buttons/tabs **min 30×30 px / 7–10 mm**.
- Full-screen menus with **minimum menu levels**; clear labels.
- Most-used items at top — but consider **thumb reach**.
- **One primary action per screen.**
- Don't mix navigation patterns. Show link states clearly.
- Hamburger menus: make them visually distinct; a labeled "Menu" word with a border converted better than a bare icon (James Foster study). Use ARIA attributes.
- Offer footer links + "back to top" to reduce scroll fatigue (also helps screen readers).

### 5.3 Restrict user inputs
- Design for **maximum effect from minimum interaction**.
- Pre-fill or minimize form fields (ask for more later, e.g., on desktop).
- Alternative input mechanisms (voice, camera).
- Allow permanent sign-in (phones are biometrically locked anyway).
- Minimal, **one-directional scrolling** only.
- Retain data if the connection fails.
- Obvious search affordance (magnifying glass).
- **Skeleton screens** to show background work is happening.

### 5.4 Ensure continuity & consistency
- Let users continue where they left off across mobile ↔ desktop.
- Keep content consistent between versions; don't erode trust with unexplained differences.
- Maintain brand look & feel across every version.
- Use recognizable UI design patterns.

### 5.5 Unstable connections (very relevant for India / on-the-go use)
- Retain data across connection breaks.
- Minimize page weight for rapid loading.
- Kill ad networks/pop-ups on mobile — they devour bandwidth.
- Few, small, compressed images.

---

## 6. Responsive vs. Adaptive vs. Standalone Mobile Design

(Mads Soegaard, IxDF)

| Approach | How it works | Pros | Cons |
|---|---|---|---|
| **Responsive** (Ethan Marcotte) | One fluid design; elements reflow to fit browser width via media queries | Uniform & seamless UX; SEO-friendly (one URL); easier/cheaper; template ecosystem | Less control per screen size; elements shift; heavier mobile downloads |
| **Adaptive** (Aaron Gustafson, 2011) | Multiple **fixed layouts**; the server/site picks the best for the detected screen (commonly 320/480/760/960/1200/1600 px) | Tailor-made UX per device; often **2–3× faster** than responsive; ads/content optimized per device | Much more work; "middle" devices (tablets) can fall through cracks; SEO risk with multiple versions |
| **Standalone m.site** | Separate mobile-only website (m. prefix) | (Historic) dedicated mobile tuning | Double maintenance; fallen out of favor; effectively dead |

**Recommendation for our project:** **Responsive, built mobile-first** — single URL (good SEO for the subdomain), one codebase, and the card page is simple enough that responsive reflow loses nothing. This is also the modern default.

---

## 7. Content Strategy & UX Writing for Mobile

- **"Content is King"** (Bill Gates, 1996) still holds: *"Users visit your website for its content. Everything else is just the backdrop."* — Jakob Nielsen.
- Users choose **quality content over visual appeal** every time.
- UX writing = plain language + **action-oriented grammar** that guides users to act ("Save contact", "Order prints").
- Content ideas must come from **user research** — mental models, how they decide, what info they need.
- **Use real text, never lorem ipsum** — real content proves the layout actually fits, and makes localization accurate.
- **Pseudo-localization**: preview designs in longer languages (German, Hindi, Gujarati…) early; translated strings expand and break layouts (Netflix logs a defect per language when this is skipped).
- Decide **early** which words/phrases/blocks get visual prominence.
- Keep copy short, verb-oriented, simple — small screens + short attention spans.

---

## 8. Smartphones vs. Tablets

- Smartphones: highly mobile, distracted use, small screens, multi-tasking bursts, personal/emotional device, uncontrolled lighting.
- Tablets: more fixed locations, longer relaxed sessions, often shared devices, more room for media and "free browsing".
- Both need **fat-finger-friendly ≥ 44 px targets**.
- Don't let "mobile first" become "tablet never" — check the mid-size breakpoint.
- **Hand-off principle**: users move phone → tablet → desktop; keep task continuity pleasant.

---

## 9. Design-Process Checklist (Mobile-First)

1. **Content inventory** — list every piece of information the screen could show.
2. **Prioritize ruthlessly** — what is indispensable? (working memory: 5–9 items)
3. **Define the one primary task per screen** (our "Shazam button").
4. **Write real copy first** (content-first stages: copy → UI → interaction).
5. **Design the 320–390 px layout first**, portrait orientation.
6. **Touch targets ≥ 44 px**, spacing for thumbs, primary actions in thumb zone.
7. **No hover-dependent interactions**; use familiar gestures.
8. **Performance budget:** load < 3 s on 4G; compress images; skeleton screens.
9. **Progressively enhance** for tablet/desktop — add, never subtract, as space grows.
10. **Accessibility:** heading structure, alt text, contrast, ARIA on menus.
11. **Test on real devices** in real contexts (sunlight, one hand, weak network).

### Common mobile-first mistakes to avoid
- Designing desktop first and "shrinking" it down.
- Hiding essential content behind menus to fake simplicity.
- Hover interactions, tiny targets, multi-directional scrolling.
- Placeholder text that hides layout problems.
- Ignoring slow/broken connections.
- Mixing navigation patterns between screens.

---

## 10. Applying This to the PrintVana / PrintEve NFC Card

The NFC card's landing experience is a **pure mobile-first case**: ~100% of first views happen on a phone (it opens *from a physical tap*), often outdoors, one-handed, on mobile data, with a stranger waiting. This maps directly:

| IxDF principle | NFC card application |
|---|---|
| One primary action per screen | **"Save Contact"** is our Shazam button — biggest, first, in thumb zone |
| Above the fold | Photo, name, title, company — instantly visible, zero scroll needed to identify the person |
| 5–9 items max | Limit profile links (phone, email, WhatsApp, website, 2–3 socials) |
| < 3 s load, weak connections | Static, tiny page; compressed avatar; no heavy scripts; works on 4G at an expo hall |
| Portrait, one-directional scroll | Single column, vertical scroll only |
| ≥ 44 px touch targets | Every link is a full-width card-style row |
| Card-style patterns | Perfect fit for contact rows and action chips |
| Restrict inputs | The "share your details back" (lead capture) form: 2–3 pre-filled fields max |
| Content-first, real copy | Design with real names/titles (long Indian names, long company names) — pseudo-localize for Hindi/Gujarati |
| Progressive enhancement | Base page = plain HTML contact info (works everywhere); enhancements = vCard download, wallet pass, animations |
| Continuity | Same profile URL works on desktop (responsive), where the owner *edits* the card |
| Brand consistency | PrintEve Design System tokens across the card page, editor app, and marketplace |

**Two distinct experiences to design:**
1. **Receiver view** (the tapped page) — microtasking mindset, 10-second session, one job: *save the contact / reach the person*.
2. **Owner view** (card editor/dashboard) — extended engagement, richer forms, still mobile-first but can lean on progressive disclosure; desktop gets an enhanced editing layout.

---

## Sources (IxDF)

1. *What is Mobile First?* — interaction-design.org/literature/topics/mobile-first
2. *What is Mobile User Experience (UX) Design?* — interaction-design.org/literature/topics/mobile-ux-design
3. Frank Spillers, *What Comes First in Mobile Design: Tasks, Content, or Mobile Optimization?*
4. Mads Soegaard, *Adaptive vs. Responsive Design*
5. *How to Craft Effective Mobile Experiences: The Role of Content Strategy and UX Writing*
6. *How to Optimize Your Designs for Smartphones vs Tablets*
7. Luke Wroblewski, *Mobile First* (2009) — referenced throughout IxDF material
