# PrintVana NFC Digital Business Card

Research, information architecture, and live UI prototypes for the PrintVana
NFC digital business card — the receiver view (tap experience), the owner
Card Studio dashboard, and the PrintEve Design System they're built on.

- `index.html` — project hub / landing page
- `PrintEve Design System (1)/` — tokens, components, UI kits (digital-card, studio, homepage)
- `nfc-card-information-architecture.*` — IA + UX writing + flows spec
- `mobile-first-design-research.*` — IxDF mobile-first research notes
- `credentials.txt` — **local only, gitignored, never commit**

Run locally: serve the repo root with any static server and open `index.html`.

## Design extraction (Playwright)

`tools/design-extract.mjs` reads any live URL and reverse-engineers its design
system into a rebuild prompt. Requires `npm install` + `npx playwright install chromium`.

```bash
node tools/design-extract.mjs <url> [--out dir] [--viewports 390x844,1440x900]
                                    [--themes light,dark] [--scope main]
                                    [--hide "sel,sel"] [--wait ms]
```

Writes to `design-audits/<host>/`:
- `report.md` — palette (chroma-classified, hue-clustered), type ladder, radii,
  shadows, tap targets, section order, contrast + a11y flags
- `prompt.md` — paste straight into Claude Design to rebuild the design language
- `design.json`, `screens/` — raw data + captures (both gitignored)

Notes that cost time to learn:
- It measures **painted pixels**, so marketing pages with product screenshots
  report bogus accent counts. Scope to the real chrome: `--scope main --hide "img,video"`.
  The report warns you when it detects >3 accent hues.
- `--hide` cookie banners, or their type sizes pollute the ladder.
- It reports the source's a11y failures rather than laundering them — dot.cards'
  primary CTA is white-on-teal at 1.96:1, and the prompt says *don't copy that*.

## Deployment
Repo: https://github.com/zenichakalasiya/nfc-card
Live URL: https://zenichakalasiya.github.io/nfc-card/
