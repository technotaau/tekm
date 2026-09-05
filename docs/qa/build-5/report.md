# Build 5 report: revision 3, the photo-led crossover

Prepared by TechnoTaau Team (frontend-builder), 5 September 2026; saved to
disk by the Design Lead from the agent's report. Source of the changes:
`docs/11-client-crosscheck.md`. Files changed: `prototype/index.html`,
`prototype/styles.css`, `prototype/main.js`, `prototype/build-dist.py`.
Checked in Chromium 1194 through Playwright with fallback fonts (Google
Fonts and the client logos are unreachable from the sandbox).

## What changed

Section order: promise bar, header, hero (full-bleed photo slides, two-line
headline with the second line in green, outcome card bottom right from
960px), client strip, three ways we work (photo cards), FDE spotlight,
roster (three rows), who writes to us, consulting (point of view, diagram,
checklist, practices), phases titled "Built to survive the handover.",
answers, outcomes and mentors, insights (photo cards), contact, footer on
navy-950. The photo band is removed. Routing pill and footer FDE links now
point at #fde. New events: cta_click way_modernize, way_production,
way_train, fde_enquire, fde_all; fde buttons also push program_click
{program: fde}; section_view observes ways and fde.

## Checks

| Check | Result |
|---|---|
| Overflow at 360, 640, 800, 960, 1024, 1100, 1280, 1366, 1480 | None |
| Grid column counts and orphan remainders, 19 grids at 9 widths | All as specified; only the seven-item checklist has a remainder |
| axe-core 4.10.2 at 1280, 1024, 360 | Zero violations |
| CLS while scrolling at 360 and 1280 | 0 |
| Hero text over the photographs, sampled on a 7x3 grid inside every line box, three slides, 1366 and 360 | Minimum 5.11:1 (eyebrow at 360); headlines 9.8:1 and above; subheads 6.6:1 and above |
| Way cards text over photo | Minimum 5.36:1 |
| Hero image fetched on phones and by Lighthouse's Moto G | hero-1-wide-900.webp, 46.8KB, the only image above the fold |
| Slider, form preset from the spotlight, accordions, hover and reduced motion | Pass |
| Single-file build | 2.08MB, no external asset references |

Heights: 1366px 10,651 to 11,566 (+915); 360px 19,355 to 21,437 (+2,082).
Roster rows at 1366: 332 / 357 / 309.

## Lighthouse mobile (unreachable hosts blocked, two runs)

Performance 95 / 95, accessibility 100, best practices 100, SEO 100. LCP
2.6s (promise bar text; the slider's entrance fade keeps the photo out of
the LCP candidates, and the photo has finished loading by then).

## Deviations from the brief, accepted by the Design Lead

1. Hero scrim strengthened beyond the brief's values and the hero eyebrows
   moved from blue-500 to green-300, because the brief's values failed
   4.5:1 on phones and for the blue eyebrow at 1366.
2. Slide height exceeds the 720px cap at 1280 and up (814 to 857px) because
   the fallback font sets the headline in five lines; recheck with Schibsted
   Grotesk, and use 16ch or a 72px ceiling if it still overruns.
3. Way cards are taller than 4:3 between 960 and 1100 so the copy fits; a
   fade behind the copy block was added on top of the card gradient.
4. Spotlight facts are term-first in markup, value-first visually.
5. The page grew against the crosscheck's intent (+915px at 1366). The
   spotlight and the cards add more than the band and the flagship row
   removed.

Screenshots in this folder: home-{360,640,800,960,1024,1100,1280,1366,1480}.jpg
and crops hero-1366, hero-360, ways-1366, spotlight-1366, spotlight-360,
insights-1366, footer-1366.
