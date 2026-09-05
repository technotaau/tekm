# Build 4 report: laptop-width layout fixes

Prepared by TechnoTaau Team (frontend-builder) for the Design Lead, 5 September 2026.
Files changed: `prototype/index.html`, `prototype/styles.css`, `prototype/dist/tekmentors-homepage.html`.
`prototype/main.js`, the tokens, docs and copy.md are untouched. Served from the repo root on
127.0.0.1:8765 and checked headlessly in Chromium 1194 through Playwright (python3). Google Fonts
and the client logos are unreachable from the sandbox, so every measurement and screenshot uses
the Liberation Sans (Arial metric) and DejaVu Sans Mono fallbacks; heights will move by a line
either way once Schibsted Grotesk loads.

## 1. What changed

The root cause, `repeat(auto-fit, minmax(min(100%, Npx), 1fr))`, is gone from the stylesheet
(ten grids). Every grid now has an explicit column count per breakpoint, listed in a comment at the
top of section 19 of styles.css. Breakpoints: 480 (chips only), 640, 700, 800, 960, 1100, 1280.

1. Program roster. The `<table>` is now a `<ul class="roster">` of `<li class="roster__row">`
   grid rows (ids, `data-program`, the builds ids and every event attribute carried over; copy
   verbatim). From 1100px: `200px minmax(0, 1fr) 230px 150px`, gap 28px, `align-items: start`.
   Column 1 the photo at 200x150, 12px radius, 1px white 20% border on the flagship. Column 2
   label, title, body, "What you build". Column 3 a `<dl class="roster__meta">` of three items,
   mono `dt` (WHO IT IS FOR, LENGTH, FORMAT) in the row's label colour over a 14.5px `dd`, 12px
   apart. Column 4 the button, top and right aligned. The separate mono header row is gone; the
   1px `--tm-line-strong` top rule and the row dividers stay. From 640 to 1099px: `160px
   minmax(0, 1fr)`, photo 160x120, meta as a row of three under the body and builds, then the
   button left aligned. Below 640px: the stacked layout as before (full-width 16:9 photo, text,
   builds toggle from main.js, stacked meta, full-width button). Row label colours come from the
   row modifiers `roster__row--flagship`, `--blue`, `--leaf`.
2. Phases: 1 column, 2 from 640, 4 from 1100; the 1px-gap grid look is unchanged.
3. Personas: 1 column, 3 from 960.
4. Answers: 1 column, 2 from 700, 3 from 1280. The 1.5px strong rule moved to the `.answers`
   container and the first row of each column count hides its own 1px top border, so the block
   opens with one even line at every width. The accordion below 640 is unchanged.
5. Checklist: 1 column, 2 from 800 (as before, explicit).
6. Facts: 2 columns, 4 from 800.
7. Contact: 1 column with the form centred at max 500px, 2 columns from 960 with the form at the
   right edge.
8. Insight rows and practice rows already had explicit columns (`120px minmax(110px, 150px)
   minmax(0, 1fr) auto` and `auto minmax(0, 1fr) auto`); footer: 1 column, 2 from 640, 4 from 960.
9. Hero slide: stacked, `7fr 5fr` from 960; it was already explicit.
10. Outcomes: each stat is `dt` (mono "from" line in ink-500, then the result at
    clamp(30px, 2.6vw, 42px) weight 800 tabular) plus the caption `dd`. Strings as given:
    FROM 6 MONTHS / 90 days / Backlog to production; FROM 10 A YEAR / 15 releases / A year;
    FROM 20% / 50% / P1 and P2 test automation; FROM 25% / 10% / Defects in SIT and UAT.
    2 columns, 4 from 800. The "from" line never wraps and every result is one line at every
    width, so the four results share one top edge (section 4).
11. Mentor bench: a 56px circle with the initials AT, RS, AM in Spline Sans Mono 500 at 16px,
    blue-700 on blue-100, `aria-hidden`, to the left of the name block. 1 column, 3 from 960.
12. Photo band: the line is clamp(24px, 2.4vw, 34px) weight 600 white, max-width 26ch; eyebrow,
    overlay and lazy image unchanged; min-height 360px, 260px below 640.
13. The screenshot harness scrolls to the bottom in 500px steps, waits for every local
    `loading="lazy"` image to complete, scrolls back and then captures, so the program and insight
    thumbnails and the band photo are in every full-page shot.

Also removed: the auto-fit on the form chips (now 1 column, 2 from 480) and on the pipeline
figure (1 column, 2 from 800).

## 2. Screenshots

Full page after the lazy scroll, JPEG 70%, max 1000px wide, sticky bar hidden for the capture:
`docs/qa/build-4/home-360.jpg`, `home-640.jpg`, `home-800.jpg`, `home-960.jpg`, `home-1024.jpg`,
`home-1100.jpg`, `home-1280.jpg`, `home-1366.jpg`, `home-1480.jpg`.

Crops: `programs-1024.jpg`, `programs-1366.jpg`, `phases-1024.jpg`, `phases-1100.jpg`,
`outcomes-1366.jpg`, `mentors-1366.jpg`.

## 3. Grid columns by width

`getComputedStyle(el).gridTemplateColumns` track count, then the remainder of children divided
by columns (0 means every row is full). Every cell matches the intended count.

| Width | facts (4) | personas (3) | pipeline (2) | checklist (7) | phases (4) | answers (6) | stats (4) | bench (3) | contact (2) | chips (4) | footer (4) | hero slide | roster row | roster meta (3) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 360 | 2, r0 | 1, r0 | 1, r0 | 1, r0 | 1, r0 | 1, r0 | 2, r0 | 1, r0 | 1, r0 | 1, r0 | 1, r0 | 1 | stacked | 1, r0 |
| 640 | 2, r0 | 1, r0 | 1, r0 | 1, r0 | 2, r0 | 1, r0 | 2, r0 | 1, r0 | 1, r0 | 2, r0 | 2, r0 | 1 | 160px + text | 3, r0 |
| 800 | 4, r0 | 1, r0 | 2, r0 | 2, r1 | 2, r0 | 2, r0 | 4, r0 | 1, r0 | 1, r0 | 2, r0 | 2, r0 | 1 | 160px + text | 3, r0 |
| 960 | 4, r0 | 3, r0 | 2, r0 | 2, r1 | 2, r0 | 2, r0 | 4, r0 | 3, r0 | 2, r0 | 2, r0 | 4, r0 | 7fr 5fr | 160px + text | 3, r0 |
| 1024 | 4, r0 | 3, r0 | 2, r0 | 2, r1 | 2, r0 | 2, r0 | 4, r0 | 3, r0 | 2, r0 | 2, r0 | 4, r0 | 7fr 5fr | 160px + text | 3, r0 |
| 1100 | 4, r0 | 3, r0 | 2, r0 | 2, r1 | 4, r0 | 2, r0 | 4, r0 | 3, r0 | 2, r0 | 2, r0 | 4, r0 | 7fr 5fr | 200 / 1fr / 230 / 150 | 1, r0 |
| 1280 | 4, r0 | 3, r0 | 2, r0 | 2, r1 | 4, r0 | 3, r0 | 4, r0 | 3, r0 | 2, r0 | 2, r0 | 4, r0 | 7fr 5fr | 200 / 1fr / 230 / 150 | 1, r0 |
| 1366 | 4, r0 | 3, r0 | 2, r0 | 2, r1 | 4, r0 | 3, r0 | 4, r0 | 3, r0 | 2, r0 | 2, r0 | 4, r0 | 7fr 5fr | 200 / 1fr / 230 / 150 | 1, r0 |
| 1480 | 4, r0 | 3, r0 | 2, r0 | 2, r1 | 4, r0 | 3, r0 | 4, r0 | 3, r0 | 2, r0 | 2, r0 | 4, r0 | 7fr 5fr | 200 / 1fr / 230 / 150 | 1, r0 |

The only non-zero remainder is the checklist: seven questions in two columns leave question 07
alone at the bottom left, exactly as build 3 was accepted. It is a numbered list with row rules,
not a card grid, and the only alternative is one column (see section 6). Insight rows are
`120px 150px 1fr auto` from 640 (4 tracks), `64px 1fr auto` below and `1fr auto` below 400.

## 4. Roster rows and stats

Row heights in px (limits at 1366: flagship under 420, others under 360):

| Width | fde (flagship) | genai | leaders | teams | Photo | Meta |
|---|---|---|---|---|---|---|
| 360 | 841 | 811 | 843 | 743 | full width 16:9 | stacked |
| 640 | 710 | 641 | 676 | 551 | 160x120 | row of 3 |
| 800 | 574 | 548 | 536 | 481 | 160x120 | row of 3 |
| 960 | 552 | 526 | 536 | 481 | 160x120 | row of 3 |
| 1024 | 552 | 526 | 536 | 460 | 160x120 | row of 3 |
| 1100 | 503 | 382 | 453 | 379 | 200x150 | stacked, column 3 |
| 1280 | 358 | 332 | 357 | 309 | 200x150 | stacked, column 3 |
| 1366 | 358 | 332 | 357 | 309 | 200x150 | stacked, column 3 |
| 1480 | 358 | 332 | 357 | 309 | 200x150 | stacked, column 3 |

At 1366 the flagship's text column is 590px and the others' 638px; the flagship button sits 24px
in from the row edge (the row's padding), the others flush right. At 1100 the text column is
324px (flagship) and 372px, so the rows are taller there; that is the narrowest width the
four-column layout has to serve.

Stats: at every width the "from" line and the result are one line each and no result overflows
its column. Result size 30px from 800 to 1153, then 2.6vw (35.5px at 1366) up to 42px. Column
widths 161px at 800, 281px at 1366. Captions run to two lines at 800 (P1 and P2 test automation)
and at 360, which sits below the result and does not affect the shared top edge.

## 5. Checks

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | No horizontal overflow | Pass | `scrollWidth` equals `innerWidth` at 360, 640, 800, 960, 1024, 1100, 1280, 1366 and 1480 after the lazy scroll |
| 2 | Grid column counts | Pass | Section 3, every cell as intended; zero `auto-fit` in styles.css |
| 3 | Row heights at 1366 | Pass | 358 / 332 / 357 / 309 |
| 4 | axe-core 4.10.2, wcag2a/aa, 2.1, 2.2, best-practice | Pass | Zero violations at 1280, 1024 and at 360 with answer 3 and one builds list open |
| 5 | CLS while scrolling the full page | Pass | 0 at 360 (DPR 2, touch) and 0 at 1280, no layout-shift entries at all |
| 6 | Structure | Pass | One h1; header 1, nav 2, main 1, footer 1; 11 labelled sections; no table markup left; no em dashes in rendered text |
| 7 | Slider, accordions, form, events | Pass | At 360: `program_builds_toggle {program: genai}`, `faq_toggle {question_index: 2}`; at 360 and 1366: Enquire on the flagship pushes `program_enquire {need: join_program, program: fde}` and presets the chip, program and title; "For your team" pushes `program_click` and flips to Training my team; submit pushes `enquiry_submit {need, audience, form_id, program}` and shows the sent state; no page errors |
| 8 | Lazy images in the shots | Pass | All nine local lazy images loaded before capture at 640 and up; at 360 the three insight thumbnails are `display: none` (below 400px, as before) so they are not requested |
| 9 | Single-file artifact | Pass | 1,884,155 bytes (1.80MB), 11 photos plus logo and favicon inlined, no `../assets/`, no `<table`, no `auto-fit`, no picture/source/srcset/sizes, no wrappers |

## 6. Lighthouse, mobile (12.8.2, Chromium 1194, local server, unreachable hosts blocked)

| Category | Run 1 | Run 2 |
|---|---|---|
| Performance | 95 | 96 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |

LCP 2.6s (the promise bar text, as before), CLS 0, TBT 0 to 80ms.

## 7. Deviations from the brief, with reasons

1. The roster is a list, not a table. `display: grid` on `<tr>` strips the table semantics in
   the accessibility tree, and the brief's rows (inline labels, no header row) are cards, not a
   comparison table. The caption went with the table; the section heading still labels the block.
   The meta labels are literal uppercase mono `dt` text, like every other eyebrow in the page.
2. The phone boundary is 639.98px, not 640px, so that 640 itself takes the tablet rules ("from
   640 to 1099") and lines up with the accordion query in main.js. Insight rows at exactly 640 are
   therefore four-track.
3. Roster rhythm from 1100px: row padding 28px (matching the 28px gap) instead of 32px, builds
   label margin 16px, builds gap 4px, tools line 1.5 line-height. Without these the leaders row,
   the only one carrying the tools line, measured 380px at 1366 and the flagship 374px. Tuned in
   the fallback font; recheck with Schibsted Grotesk.
4. The stat result below 800px is clamp(22px, 6.5vw, 30px) rather than a fixed 30px floor: in two
   columns at 360 (128px each) "15 releases" at 30px wraps. From 800 it is exactly
   clamp(30px, 2.6vw, 42px). The stats gap is 20px from 800 to 1099 and 32px from 1100 so the
   four results fit one line at 800 (161px columns).
5. Checklist remainder 1 (section 3). Unchanged from build 3; options are one column, or the
   button in the eighth cell, which would put a non-list item inside the `<ol>`.
6. The chips grid was not in the brief's list; the auto-fit was replaced with 1 column and 2 from
   480 (it is inside the 500px form card, so it never reaches three).
7. The answers' strong top rule moved from the first answer to the grid container (item 4) so the
   first row reads as one line in 2 and 3 columns; below 700 nothing changes visually.


## Design Lead sign-off, 5 September 2026

Laptop crops at 1024 and 1366 reviewed against the client's three screenshots: program rows now carry a 200px photo and a wide text column with stacked meta; the phases sit two by two at 1024 with no orphan; the four outcome numbers share one baseline. Published to the artifact. `prototype/build-dist.py` added so the single-file build is reproducible.
