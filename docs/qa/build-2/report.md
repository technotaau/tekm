# Build 2 report: hero slider and photography

Prepared by TechnoTaau Team (frontend-builder) for the Design Lead, 4 September 2026.
Files changed: `prototype/index.html`, `prototype/styles.css`, `prototype/main.js`,
`prototype/dist/tekmentors-homepage.html`. Nothing in docs, tokens or copy.md was touched.
Served from the repo root on 127.0.0.1:8765 and checked headlessly in Chromium 1194
through Playwright (python3). The harness lives in the session scratchpad, not the repo.

External hosts (Google Fonts, the nine client logos on tekmentors.com) are unreachable
from the sandbox, so every screenshot shows the Helvetica/Arial fallback stack and the
client strip renders alt text. Both resolve on a networked host.

## 1. What was built

1. Hero slider. Three slides on a translateX track (500ms), text 7/12 and photo 5/12 from
   960px, stacked with the photo below the text under that. Tab row (`role="tablist"`,
   `aria-selected`, roving tabindex, 2px blue-500 underline, progress bar that fills over
   the 8s interval), previous and next buttons at 44px with aria-labels, and a visually
   hidden `aria-live="polite"` count ("1 of 3"). Hidden slides carry `aria-hidden="true"`,
   `inert` and `tabindex="-1"` on their links. Left and right arrows (plus Home and End)
   on the tablist. Auto-advance every 8s, held on mouseenter, focusin, touchstart and
   while the tab is hidden, released on leave; under reduced motion there is no
   auto-advance, no transition and no progress bar. Swipe on touch and pen with a 40px
   threshold through pointer events. `hero_slide_view` pushes
   `{slide_index, slide_label, trigger}` on every change.
2. "Start where it hurts" as a wrapping row of pill links under the slider, inside the
   navy hero, with the same `data-route` values and `route_click` events.
3. Program thumbnails in each roster row: 96x72 at 4:3 with a 10px radius on desktop,
   full width at 16:9 above the title when the table stacks. Flagship row's thumb has the
   1px white 20% border.
4. Photo band between consulting and "How an engagement runs": `band-office.jpg` as a
   lazy `<img>` with `object-fit: cover`, `alt=""` and `aria-hidden`, navy-900 overlay at
   55%, 320px tall (240 on phones), eyebrow "WHERE THE WORK HAPPENS" and the one line.
5. Insight thumbnails: 120x80 on desktop, 64x43 at 640 and below, hidden below 400px.
6. Preload for `hero-1-engineering.jpg` (211,768 bytes, under the 220KB cap) with
   `fetchpriority="high"`, width and height on every image, the promise bar keeps its
   region role, one h1, tokens only, no external JS.

## 2. Screenshots

Full page, JPEG at 70%, no wider than 1000px, sticky bar hidden during the full-page
capture only:

- `docs/qa/build-2/home-360.jpg`
- `docs/qa/build-2/home-640.jpg`
- `docs/qa/build-2/home-960.jpg`
- `docs/qa/build-2/home-1280.jpg`
- `docs/qa/build-2/home-1480.jpg`

Hero with slide 2 and slide 3 active (viewport crops):

- `docs/qa/build-2/slide-2-1280.jpg`, `docs/qa/build-2/slide-3-1280.jpg`
- `docs/qa/build-2/slide-2-360.jpg`, `docs/qa/build-2/slide-3-360.jpg`

Lighthouse: `docs/qa/build-2/lighthouse-mobile-summary.json`.

## 3. Checks

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | No horizontal overflow at 360, 640, 960, 1280, 1480 | Pass | `scrollWidth` equals `innerWidth` at all five, on slide 1, 2 and 3. Also checked at 390, 641, 660, 700, 720, 760, 800 and 941 after fixing a 7px overflow the thumbnail caused between 641 and 710 (see section 5) |
| 2 | Tabs | Pass | Click on tab 2 moves to slide 2: `data-index` 1, status "2 of 3", `aria-selected` true on tab 2 only, tabindex 0 on the active tab and -1 on the others, slide 1 parts and slide 3 `aria-hidden="true"` and `inert`, their links `tabindex="-1"`, track transform -1228px at 1280 |
| 3 | Arrows | Pass | Next from slide 2 gives slide 3, next again wraps to slide 1, previous wraps to slide 3. `hero_slide_view` with `trigger: arrow` each time |
| 4 | Keyboard | Pass | On the tablist, ArrowRight from tab 3 wraps to tab 1 and focuses it; ArrowLeft wraps back to tab 3; Home goes to tab 1. Tabbing from the header "Talk to us" with slide 2 active reaches, in order, slide 2's two buttons, the active tab, previous, next, then the five routing pills. Slides 1 and 3 receive no focus |
| 5 | Swipe (CDP touch events at 360) | Pass | 160px swipe left: slide 2. Swipe right: slide 1. Swipe right again: wraps to slide 3. A 25px move is ignored. A vertical move is ignored. Three `hero_slide_view` events with `trigger: swipe`. The touch hold is released on touchend |
| 6 | Pause on hover | Pass | Pointer over the slider adds `is-paused`; after 9.5s the slide has not changed. Pointer leaves: class removed and the auto-advance fires 7.7s later (the remainder of the interval), with `trigger: auto` |
| 7 | Pause on focus and hidden tab | Pass | `focusin` on a tab pauses, focus moving to the header resumes. `visibilityState` hidden pauses, visible resumes |
| 8 | Reduced motion | Pass | `is-static` set, track `transition-duration` 0s, progress bar `display: none`, hero rise animation none, no advance after 9s, tab switch is instant |
| 9 | `hero_slide_view` fires | Pass | Ten events across tab, arrow and auto triggers in the desktop run, all mirrored to the console; `slide_index` is 1-based to match the "1 of 3" text |
| 10 | Slide CTAs | Pass | Slide 2's "Talk to a consultant" pushes `cta_click` with `cta_id: hero2_talk`, `location: hero`, `cta_text`, `link_url` |
| 11 | axe-core 4.10.2 at 1280 and 360, slide 1, slide 2 and with the menu open | Pass | Zero violations in all five runs (round 1 baseline after its fix: zero). The 96 "incomplete" color-contrast entries are the same pseudo-element backgrounds and glyphs as round 1 plus text over the photo band, which the overlay handles (see section 5) |
| 12 | Structure | Pass | One h1; every image has width, height and alt; all sections in main labelled; header, nav, main, footer landmarks; promise bar `role="region"`; tablist has an aria-label; arrows 44x44; pills at least 44px tall; status element `aria-live="polite"`; `data-route` values unchanged; no em dashes rendered |
| 13 | Thumbnail sizes | Pass | Roster 96x72 at 1280, full width 16:9 at 640 and 360. Insight 120x80 at 1280, 64x43 at 640, hidden at 360. Band 320px at 1280, 240px at 360 |
| 14 | CLS while scrolling the whole page, then idling through an auto-advance | Pass | 0 at 360 (DPR 2, touch) and 1280, no layout-shift entries |
| 15 | LCP element | Noted | Promise bar paragraph at 168ms (360) and 212ms (1280). The hero image is not reported: Chrome skips elements first painted at opacity 0, and the brand's `v4rise` animation fades the whole slider in. With that animation disabled the LCP is the hero image at 1280 (208ms) and the hero lede at 360 (the photo sits below a 780px fold). The animation is a brand rule, so it stays; the Design Lead can drop it if an image LCP matters more than the entry |
| 16 | Page errors | Pass | None in any run |
| 17 | Single-file artifact | Pass | `prototype/dist/tekmentors-homepage.html`, 2.05MB (under 6MB), 12 image references inlined as data URIs including the preload, logo and favicon as data URIs, client strip replaced by the sector line, title "TEKMentors Homepage", no doctype, html, head or body wrappers, renders with 0 broken images and no page errors |

## 4. Lighthouse, mobile (Lighthouse 12.8.2, Chromium 1194, local server)

Unreachable hosts blocked, two clean sequential runs:

| Category | Run 1 | Run 2 |
|---|---|---|
| Performance | 89 | 90 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |

FCP 1.8s, LCP 3.4s (promise bar text), TBT 120 to 130ms, CLS 0, Speed Index 1.8s. As run
with the sandbox network as it is: 78, 100, 96, 100, with Speed Index 23s because the
proxy holds the Google Fonts request; that is the sandbox, not the page.

The same harness gives the pre-build files (commit 9e937f6) 97 and 98. The drop is the
hero photograph: on simulated slow 4G the 212KB `hero-1-engineering.jpg`, requested at
high priority per the spec, shares bandwidth with the render-blocking stylesheet chain and
Lighthouse's pessimistic LCP estimate counts it. Before the fix in section 5 the page
also fetched `hero-2` and `hero-3` (415KB) at load and scored 81 to 86.

To sit comfortably above 90 on mobile, two asset changes would do it, both outside this
brief: a WebP or AVIF version of the hero photos (Lighthouse estimates 74KB saved on the
one image fetched at load) and a smaller variant for phones through `srcset` (191KB
saved, since the 1600px file renders at 324px on a 360 screen).

## 5. Deviations from the brief, with reasons

1. `data-need` on the slide 3 button "Enquire about a batch" is `join_program`, not the
   literal "Joining a program". The form presets its chip by matching `data-need` to the
   chip value, and `join_program` is the value that renders as "Joining a program". The
   literal string would not preset anything.
2. Slide 1 hides its parts, not itself. axe raised a new moderate `page-has-heading-one`
   whenever slide 2 or 3 was active, because the page's only h1 sat inside the
   `aria-hidden` slide 1. The eyebrow, the lede with its buttons, and the photo carry
   `aria-hidden` and `inert` instead (`data-slide-part`), so the h1 stays exposed on every
   slide and axe is clean in all states. Slides 2 and 3 are hidden as wholes, as specified.
3. Slide 2 and 3 photos wait in `data-src`. With `loading="lazy"` alone Chrome fetched both
   at page load on mobile (its lazy margin reaches the horizontally offscreen track), 415KB
   a phone user may never see, and Lighthouse fell to 81 to 86. The slider now sets `src`
   on any manual change and two seconds before an auto-advance. The `loading="lazy"`
   attribute, width, height and aspect ratio stay, the box is reserved, CLS stays 0, and
   the not-yet-requested image is `visibility: hidden` so Chrome does not paint its alt
   text during a slow fetch.
4. The photo band overlay is the 55% navy-900 layer plus a left-to-right gradient
   (70% to 0%) behind the text. At a flat 55% the eyebrow and the line sat over the busiest
   part of the office photo and were hard to read at 1280.
5. The roster cell wraps. The 96px thumb plus its gap gave the first table column a hard
   minimum that pushed the table 7px past the viewport between 641 and 710px. The thumb and
   text now sit in a wrapping flex row, so below about 320px of cell width the text drops
   under the thumbnail. Nothing changes at 640 and below (stacked) or at 760 and above.
6. On phones the media box grows past 16:10 on the shorter slides. All three slides share
   one height (the tallest, slide 3) so an auto-advance cannot shift the page; the photo
   fills the leftover instead of leaving a navy gap. Measured 1.55:1 on slide 1 at 360
   against 1.6:1 specified. Slide 3, the tallest, is exactly 16:10.
7. New `cta_id` values for the slide buttons: `hero2_talk`, `hero2_how`, `hero3_programs`,
   `hero3_enquire`. Slide 1 keeps `hero_talk` and `hero_programs`. The tracking plan's
   `cta_id` list (docs/08-tracking-plan.md) needs those four added, plus the
   `hero_slide_view` event; the seo-schema or Design Lead owns that doc.
8. The band is a labelled section with its eyebrow as an h2 (`id="where"`), matching the
   client strip pattern, so the "every section has aria-labelledby" rule holds. That adds
   one h2 to the outline in `prototype/seo.md`. It is not in the `section_view` list.
9. docs/01-brand.md still says "No auto-rotating anything" under Motion. The Design Lead
   decided the 8s auto-advance for this build; the brand doc was not changed here.

## 6. Open items for the Design Lead

- Copy for the three slides is used exactly as given; the copywriter's file
  (`prototype/copy.md`) does not yet carry slides 2 and 3, the tab labels, the arrow
  labels or the band line.
- Assets: WebP or AVIF and a phone-size variant of the hero photographs (section 4).


## 7. Design Lead follow-up, same day

- Accepted all nine deviations. Tracking plan, copy.md, brand doc (motion exception) and seo.md updated accordingly.
- Applied the two asset recommendations from section 4: the three hero photographs now ship as `<picture>` with WebP and JPEG at 800w and 1600w, `sizes="(min-width: 960px) 42vw, 100vw"`, and the preload uses `imagesrcset`. Verified in Chromium at 360, 960 and 1280: the 800px WebP (41KB) is selected at every width, slide 2 loads its own variant on tab click, no overflow, no page errors. The lazy loader copies `data-srcset` for slides 2 and 3.
- The single-file artifact strips `<picture>` and `srcset` and inlines one JPEG per image as a data URI; 1.8MB.
