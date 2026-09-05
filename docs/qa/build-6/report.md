# Build 6 report: static hero, one screen

Prepared by TechnoTaau Team (frontend-builder), 5 September 2026. Source of
the changes: Jakhar Singh's review on an iPhone and a laptop (hero three
screens tall on the phone with empty photo above the text, 80px headline in
four lines on the laptop, slider confusing), written up as section 2 of
`docs/03-homepage-spec.md`. Files changed: `prototype/index.html`,
`prototype/styles.css`, `prototype/main.js`, `prototype/build-dist.py`.
Everything else from build 5 (three ways, spotlight, roster, personas,
consulting, phases, answers, outcomes, insights, contact, dark footer,
accordions, adaptive form, tracking, tokens only, explicit grids) is
untouched.

Checked in Chromium 1194 through Playwright, served on 127.0.0.1:8765.
New for this build: Schibsted Grotesk and Spline Sans Mono were fetched
from Google Fonts through the sandbox proxy and installed locally, so every
number and screenshot below uses the real typeface. Build 5's report was
measured with a fallback font; the build 5 figures quoted here were
re-measured from commit 0526973 with the same installed fonts, so the
comparison is like for like.

## What changed

- Slider removed entirely: slides 2 and 3, the tab row, arrows, status
  element, progress bar, the slider script (auto-advance, swipe, tab
  keyboard handling, lazy photo loader), the `hero_slide_view` event and all
  its CSS. `hero-2-wide` and `hero-3-wide` are no longer referenced (files
  left on disk).
- Static hero, `section#top` (the id moved off the header; nothing linked
  to it). Full-bleed `hero-1-wide` (WebP 900w and 2000w, sizes 100vw, eager,
  fetchpriority high, preload as before), object-fit cover, object-position
  60% 40%, build 5's strengthened scrim unchanged. Order: eyebrow (green-300),
  h1 with the second line in green-300, shortened subhead, two buttons, then
  the outcome line replacing the card: mono label, "6 months to 90 days" at
  20px 700 white, "backlog to production, a large UK bank" at 14.5px
  ink-200, link "See the four numbers" (#proof, hero_outcome_card), with a
  1px rgba(255,255,255,.18) rule above and 16px padding-top.
- Desktop (960 and up): hero min-height `clamp(560px, calc(100vh - 114px),
  680px)`, copy centred; h1 `clamp(36px, 4.4vw, 60px)`, weight 800, line
  height 1.04; subhead 18px on 52ch; buttons in a row; outcome line in one
  row.
- Below 960: copy at the top of the photo with 40px above and below, no
  minimum height; h1 `clamp(30px, 8.5vw, 40px)`; subhead 16px; buttons
  stacked full width at 44px; outcome line wraps.
- Routing band `section#routes` directly under the hero: navy-900 with the
  radial glow, 20px vertical padding, mono label "START WHERE IT HURTS"
  inline at the left (visually hidden below 640, still read by assistive
  tech), five pills in one row with `data-route` and `route_click` as
  before, 44px minimum height. From 960 the row wraps once at most; below
  960 it scrolls sideways with scroll snap, 16px gutters, no visible
  scrollbar and a fading right edge (a mask, so the glow shows through) that
  main.js drops once the last pill is in view.
- Facts strip `div#facts` under the routing band: navy-800, 18px vertical
  padding, four compact items (mono label 11px over a 16px weight 600
  value), four columns from 800 and two below. Replaces the large facts row.
- Header unchanged in markup. The promise bar's contact links lost their 8px
  vertical padding so the bar is 40px again (it had grown to 56px), and the
  header's inner min-height is 73px plus its 1px rule, so promise bar plus
  header is exactly the 114px the hero height counts on.
- Sticky mobile bar now watches the facts strip: it appears once the strip
  has scrolled out above, so the hero and the routing band are gone.
- `prototype/build-dist.py` docstring updated; the script still strips the
  preload, picture sources, srcset and sizes and inlines hero-1-wide.jpg.

## First screen, viewport measurements

Page-relative y in CSS px. "Hero bottom" is the outcome line's bottom, as
asked; "section bottom" is where the routing band starts. Promise bar plus
header is 130px on phones (the promise text wraps to two lines) and 114px
from 768.

| Size | Bar and header | Eyebrow top | Second button bottom | Hero bottom (outcome) | Section bottom | h1 px / lines | Subhead lines | Outcome rows | Routes band | Routes rows | Document height |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 360x780 | 130 | 170 | 598 | 721 | 761 | 30.6 / 4 | 4 | 3 | 761 to 845 | scroller | 20,550 |
| 375x812 | 130 | 170 | 578 | 701 | 741 | 31.9 / 4 | 3 | 3 | 741 to 825 | scroller | 20,473 |
| 390x844 | 130 | 170 | 583 | 706 | 746 | 33.2 / 4 | 3 | 3 | 746 to 830 | scroller | 20,300 |
| 768x1024 | 114 | 154 | 509 | 605 | 645 | 40 / 3 | 2 | 2 | 645 to 729 | scroller | 18,172 |
| 1024x768 | 114 | 243 | 564 | 639 | 768 | 45.1 / 3 | 2 | 1 | 768 to 931 | 2 | 12,490 |
| 1280x720 | 114 | 201 | 557 | 633 | 720 | 56.3 / 3 | 2 | 1 | 720 to 858 | 2 | 11,062 |
| 1366x768 | 114 | 219 | 587 | 663 | 768 | 60 / 3 | 2 | 1 | 768 to 906 | 2 | 11,036 |
| 1440x900 | 114 | 232 | 600 | 676 | 794 | 60 / 3 | 2 | 1 | 794 to 932 | 2 | 11,024 |
| 1480x900 | 114 | 232 | 600 | 676 | 794 | 60 / 3 | 2 | 1 | 794 to 932 | 2 | 11,010 |

Targets: eyebrow to second button ends within 740px at 375x812 (578, and
598 at 360x780, 583 at 390x844); the hero, outcome line included, sits above
768 at 1366x768 (663) and above the fold at 1280x720 (633) and 1440x900
(676); h1 three lines or fewer at 1280, 1366 and 1440 (three) and five or
fewer at 360 and 390 (four). The hero section itself is exactly one screen
at 1024x768, 1280x720 and 1366x768 and 680px at 1440 and 1480.

## Build 5 versus build 6, same fonts

| | 375x812 build 5 | 375x812 build 6 | 1366x768 build 5 | 1366x768 build 6 |
|---|---|---|---|---|
| Slide or copy block bottom (outcome) | 1,081 | 701 | 890 | 663 |
| Second button bottom | 877 | 578 | 811 | 587 |
| Hero section bottom (before the client strip) | 1,920 | 741 | 1,389 | 768 |
| h1 | 40px, 5 lines | 31.9px, 4 lines | 76.5px, 4 lines | 60px, 3 lines |
| Document height | 21,397 | 20,473 | 11,444 | 11,036 |

Document height at 360: 21,487 to 20,550 (minus 937). At 1366: 11,444 to
11,036 (minus 408). The routing band and the facts strip are counted in the
build 6 section bottom; build 5's figure includes its controls, pills and
facts row too.

## Contrast over the rendered photograph

Sampled with the text made transparent, on a 7x3 grid inside every line box,
at 1366x768 and 360x780 (the method from build 5). Threshold 4.5:1.

| Element | Colour | 1366 start / middle / end | 1366 minimum | 360 start / middle / end | 360 minimum |
|---|---|---|---|---|---|
| h1 line 1 | white | 12.4 / 11.1 / 8.7 | 9.70 | 11.7 / 11.5 / 11.0 | 10.66 |
| h1 line 2 | green-300 | 6.6 / 7.8 / 5.8 | 5.38 | 6.2 / 6.8 / 5.9 | 5.70 |
| Subhead | ink-200 | 7.8 / 8.6 / 6.9 | 6.73 | 6.9 / 7.3 / 8.6 | 6.53 |
| Eyebrow | green-300 | 6.4 / 6.7 / 5.7 | 5.62 | 5.9 / 5.9 / 5.8 | 5.28 |
| Outcome label | green-300 | 8.2 / 7.6 / 7.5 | 7.46 | 7.6 / 8.0 / 7.3 | 7.27 |
| Outcome number | white | 14.4 / 14.4 / 14.6 | 14.19 | 14.0 / 16.1 / 15.9 | 14.02 |
| Outcome caption | ink-200 | 8.5 / 7.7 / 8.6 | 7.65 | 8.7 / 8.6 / 8.3 | 8.16 |
| Outcome link | white | 14.1 / 15.3 / 15.4 | 12.71 | 15.2 / 14.9 / 15.3 | 14.56 |

With the h1 on a 16em measure the green line at 1366 ran to x=879, into the
lit face at the right of the photograph, and sampled 3.09:1; on 13.5em it
breaks after "engineers", ends at x=797 and samples 5.38:1 (see deviation 1).

## Checks

| Check | Result |
|---|---|
| Overflow at 360, 640, 800, 960, 1024, 1100, 1280, 1366, 1480 and the nine first-screen sizes | None: document and body width equal the viewport everywhere |
| Routes scroller at 360 | 1,668px of pills in a 360px document that stays 360 wide; scroll-snap x mandatory; scrollbar-width none; mask present at rest, removed (`is-end`) after scrolling to the end |
| Routes rows | 1 (scroller) below 960; 2 at 960, 1024, 1100, 1280, 1366, 1440, 1480 |
| Grid column counts and remainders, 19 grids at 9 widths | All as specified; only the seven-item checklist has a remainder (as in build 5) |
| h1 count, landmarks, sections | One h1; header, nav, main, footer; every `main > section` has aria-labelledby (the facts strip is a div, see deviation 6) |
| Hero image | hero-1-wide-900.webp on phones and at 640 and 800, hero-1-wide.webp from 960; fetchpriority high, preload imagesrcset and imagesizes intact, no `loading` attribute, empty alt inside aria-hidden |
| Events | cta_click hero_talk, hero_programs, hero_outcome_card (location hero); route_click {route: pilot}; fde_enquire plus program_click; enquiry_start; enquiry_submit with need, audience and program. section_view for ways, fde, programs, who, consulting, how, answers, proof, insights, contact |
| Sticky bar at 360 | Hidden at the top, hidden while the routing band is in view, visible once the facts strip has scrolled out above, hidden again at the form |
| Accordions at 360 | 6 answer toggles, 3 builds toggles, spotlight list open |
| Form preset from the spotlight, send, sent state | need join_program, program fde, title "Ask about a program"; sent state shown, form hidden |
| Reduced motion at 1280 | hero animation none, scroll-behavior auto; without it v4rise 0.7s |
| Console and page errors at 360 and 1366 | None |
| axe-core 4.10.2 at 1280, 1024, 360 (360 with accordions enhanced and two panels open) | Zero violations; color-contrast incomplete over the photographs, covered by the table above |
| CLS while scrolling the full page at 360 (DPR 2, touch) and 1280 | 0 |
| Lazy images after the scroll | 11 of 11 local lazy images loaded at 360 and 1366 |
| Single-file build | `prototype/dist/tekmentors-homepage.html`, 1,463 KB (build 5: 2,080 KB); no `../assets/` reference, no picture, srcset or preload; hero-1-wide.jpg inlined as a data URI |

## Lighthouse mobile (unreachable hosts blocked, two runs)

Performance 95 / 95, accessibility 100 / 100, best practices 100 / 100, SEO
100 / 100. LCP 2.8s / 2.8s (the promise bar text, as in build 5, where it
was 2.6s), FCP 1.8s, speed index 1.8s, TBT 40ms / 70ms, CLS 0.

## Deviations from the brief and the reasons

1. h1 measure 13.5em (about 24ch), not 16ch. At 60px 16ch is 534px and sets
   the two sentences in five lines, which fails the brief's own three-line
   check. 13.5em sets "We get AI into production." / "Then we train your
   engineers" / "to run it." at every width from 960 and keeps the green
   line clear of the lit face on the right of the photograph (3.09:1 at a
   16em measure, 5.38:1 now).
2. Hero height uses min-height only, no max-height. The measured height
   equals the clamp at every size (654 at 768 tall, 606 at 720, 680 at 900),
   and a max-height with overflow hidden would clip rather than grow if a
   longer translation ever outran it.
3. Promise bar and header trimmed to 40px and 74px so the pair is the 114px
   in the brief; they measured 56px and 75px in build 5. Visible change: the
   promise bar is 16px shorter on desktop.
4. Routing label sits above the pills between 960 and 1279, with the pills
   at the 13.5px small size there; inline at the left from 1280 as briefed.
   The five pills are 302, 279, 362, 269 and 384px wide in Schibsted Grotesk;
   with the label inline the row needs three lines below 1280, and even with
   the label above, 1024 misses two rows by one pixel at 14.5px.
5. Outcome line wraps to three rows on phones (label and number / caption /
   link), not two. The four pieces total about 740px of text at their sizes
   against a 324 to 354px column; two rows would need the caption cut. For
   the ux-copywriter if two rows is a hard requirement. Two rows at 640 to
   959, one row from 960.
6. The facts strip is a `div#facts`, not a section: it has no heading and
   the brief gives it none, and an sr-only heading would be new copy.
7. The v4rise entrance stays on the whole hero block (photo included), as it
   was on build 5's slider, which is what keeps the promise bar text as the
   LCP element.

## For the Design Lead

- The shared artifact link is pinned to the build 5 version; the owner
  moves the pin in the artifact view for reviewers to see build 6.
- Documents that still describe the slider and were not touched here:
  `docs/01-brand.md` (motion paragraph, the 8-second exception),
  `docs/03-homepage-spec.md` section 2b ("the three hero slides"),
  `docs/08-tracking-plan.md` addendum (`hero_slide_view`),
  `prototype/copy.md` section "2 (revised). Hero slider copy",
  `docs/11-client-crosscheck.md` row 1.

Screenshots in this folder: first-screen-{360x780,375x812,390x844,768x1024,
1024x768,1280x720,1366x768,1440x900,1480x900}.jpg (viewport only), plus the
full pages home-360.jpg and home-1366.jpg after the lazy scroll.
