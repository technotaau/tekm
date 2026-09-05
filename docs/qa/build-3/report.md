# Build 3 report: revision 2, the first-visit audit's top five

Prepared by TechnoTaau Team (frontend-builder) for the Design Lead, 5 September 2026.
Files changed: `prototype/index.html`, `prototype/styles.css`, `prototype/main.js`,
`prototype/dist/tekmentors-homepage.html`. Nothing in docs, tokens or copy.md was touched.
Served from the repo root on 127.0.0.1:8765 and checked headlessly in Chromium 1194 through
Playwright (python3). The harness lives in the session scratchpad, not the repo. Google
Fonts and the client logos on tekmentors.com are unreachable from the sandbox, so every
screenshot shows the Helvetica/Arial fallback stack and the client strip renders alt text.

## 1. What was built

1. Hero, slide 1. Tab label and `data-slide-label` "What we do"; eyebrow "GURUGRAM · SINCE
   2017 · IIT (BHU) FACULTY"; the new h1 and subhead, verbatim; buttons unchanged. The
   photo now sits in a `.slide__photo` frame inside `.slide__media`, and the outcome card
   (`.outcome`) sits beside it in the same `data-slide-part`, so it inherits the slide's
   `aria-hidden`, `inert` and `tabindex="-1"` handling. Card: white, 14px radius,
   `--tm-shadow-card`, 18px 20px padding; mono eyebrow in ink-500, "6 months to 90 days"
   at 26px weight 700 ink-900 with tabular numerals, caption at 13.5px ink-600, link "See
   the four numbers" to `#proof` (the outcomes section's id) pushing `cta_click` with
   `cta_id: hero_outcome_card`. From 960px it is absolute, left -24px, bottom 24px,
   max-width 260px, over the photo's bottom-left corner. Below 960px it is a normal block
   under the photo, full width up to 420px, 16px below the photo, and the tab row follows
   in flow so nothing can overlap it.
2. Facts row: "Since 2017 / Consulting and training from Gurugram", "IIT (BHU) / Where the
   senior faculty trained", "20+ years / What each mentor brings from industry", "Delhi NCR
   / On site, or live online and hybrid".
3. Persona card 2 body, verbatim.
4. Checklist `#checklist` inside the consulting section, after the pipeline figure and
   before "Five practices, one bench": 1px `--tm-line-strong` top rule, mono eyebrow "USE
   THIS TOMORROW", h3, intro line, an `<ol>` numbered 01 to 07 in mono blue-600, each
   question at 15.5px weight 600 ink-900 with the short line (item 1 only, as given) in
   ink-600, one column below 800px and two columns from 800px, then the tint button
   "Send me this as a one-pager" (`btn btn--soft`) to `#contact` with `data-need` and
   `data-msg`, pushing `cta_click` with `cta_id: checklist_onepager`. The consulting
   section is tracked as one `section_view`, so that list is unchanged.
5. The form follows the chip. The title carries `aria-live="polite" aria-atomic="true"`;
   the message `<label for="f-msg">`, the textarea placeholder and the company
   `<label for="f-org">` are rewritten from a four-entry table in main.js, on load for the
   default chip, on every chip click, and when a link with `data-need` presets the chip.
   The short-message validation copy is unchanged. A link with `data-msg` fills the
   textarea only if it is empty, puts the caret at the end and focuses it.
6. Phone length, below 640px only (`(max-width: 639.98px)`, applied and removed as the
   viewport crosses the line). Answers: each h3 wraps a button with `aria-expanded` and
   `aria-controls`, chevron rotates, 44px minimum height, first answer open, the rest
   `hidden`; `faq_toggle {question_index}` on open. Programs: a "What you build" button
   (`aria-expanded`, `aria-controls`, chevron, 44px) replaces the mono label and the list
   is closed by default; `program_builds_toggle {program}` on open. At 640px and above the
   markup is the plain h3, label and list with no buttons in the tree.

## 2. Screenshots

Full page, JPEG at 70%, no wider than 1000px, sticky bar hidden for the capture only:

- `docs/qa/build-3/home-360.jpg`, `home-640.jpg`, `home-960.jpg`, `home-1280.jpg`, `home-1480.jpg`

Crops:

- `docs/qa/build-3/hero-360.jpg` and `hero-1280.jpg` (outcome card under and over the photo)
- `docs/qa/build-3/checklist-1280.jpg` (two columns) and `checklist-360.jpg` (one column)
- `docs/qa/build-3/form-program-chip-360.jpg` (form after "Joining a program")
- `docs/qa/build-3/answers-accordion-360.jpg` (first and second answers open)
- `docs/qa/build-3/program-row-builds-360.jpg` (flagship row with "What you build" open)

Lighthouse: `docs/qa/build-3/lighthouse-mobile-summary.json`.

## 3. Document height at 360

Measured in this harness (fallback fonts, 360x740, mobile emulation). Build 2 is the
committed revision 1 files served from a scratch copy on the same Chromium.

| Section | Build 2 | Build 3 | Delta |
|---|---|---|---|
| Hero | 1,799 | 1,976 | +177 (outcome card) |
| Who writes to us | 1,509 | 1,532 | +23 (card 2 body is one line longer) |
| Programs | 4,182 | 3,713 | -469 (four lists folded) |
| Consulting | 2,599 | 3,510 | +911 (checklist) |
| Answers | 1,807 | 981 | -826 (five answers folded) |
| Everything else | 7,827 | 7,827 | 0 |
| Total | 19,723 | 19,539 | -184 (-0.9%) |

The audit quoted "about 18,000" for build 2 with the web fonts loaded; the same harness
here reads 19,723 because Helvetica/Arial set wider than Schibsted Grotesk. The two
accordions take out 1,295px, the checklist and the outcome card put back 1,088px. The
target of at least 25% shorter (about 14,800 in this harness, 13,500 against the audit's
figure) is not reached by the five decided changes on their own; see section 6, item 3.

## 4. Checks

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | No horizontal overflow | Pass | `scrollWidth` equals `innerWidth` at 360, 390, 640, 641, 700, 800, 960, 1280 and 1480, on slides 1, 2 and 3 |
| 2 | Structure | Pass | One h1 (the new headline); header, nav (2: main and sticky), main, footer; promise bar `role="region"`; every section in main labelled; no em dashes in rendered text |
| 3 | Slide 1 copy, tab label, facts, persona 2, checklist items and order | Pass | Read back from the DOM and matched to the brief; checklist sits between `.pipeline` and the practices rule label |
| 4 | Outcome card position | Pass | At 1280: absolute, left -24px and bottom 24px relative to the photo frame, 260px wide. At 960: same. At 640 and 360: static, 420px or full width, 16px under the photo, tab row below |
| 5 | Outcome card follows the slide | Pass | With slide 2 active its `slide__media` is `aria-hidden="true"` and `inert`, the link has `tabindex="-1"`; all removed again on slide 1 |
| 6 | Outcome card link | Pass | Click pushes `cta_click {cta_id: hero_outcome_card, location: hero, cta_text, link_url: #proof}` and lands with `#proof` at 90px (the scroll margin) |
| 7 | Form on load | Pass | "Tell us what is stuck", "What is stuck?", the project placeholder, "Company (optional)"; `f-msg`'s `labels[0]` is the rewritten label; title has `aria-live="polite"` |
| 8 | Form by chip | Pass | Each of the four chips sets the title, message label, placeholder and company label from the table, and pushes `enquiry_need_select {need}`; "Joining a program" gives "Current employer or college (optional)" |
| 9 | Checklist link | Pass | With "Joining a program" selected first: click pushes `cta_click {cta_id: checklist_onepager, need: project, msg, location: consulting}`, chip flips to "A project or system", title "Tell us what is stuck", textarea holds the preset, caret 83/83, textarea focused, typing appends at the end. Checked at 1280 and 360. A second click after the visitor edited the message leaves "My own words" alone |
| 10 | Short-message validation | Pass | "A line or two about what is stuck helps us route this properly." unchanged |
| 11 | Answers accordion at 360 | Pass | Six `.answer.is-enhanced`; six buttons inside the h3s with `aria-controls` answer-1 to answer-6, heights 59 to 81px; first open, five `hidden`; `faq_toggle {question_index: 3}` on opening the third; closing pushes nothing; chevron `rotate(180deg)` when open; Enter and Space toggle; visible focus ring |
| 12 | Builds toggle at 360 | Pass | Four buttons "What you build" at 45px, `aria-controls` builds-fde to builds-teams, all four lists hidden, mono label `display: none`; open, close, open on GenAI pushes `program_builds_toggle {program: genai}` twice |
| 13 | Un-enhance on resize | Pass | 360 to 700: zero toggle buttons, zero hidden panels, the h3 is plain text with no children. Back to 360: 6 + 4 buttons, 5 + 4 hidden panels |
| 14 | axe-core 4.10.2, wcag2a/aa, 2.1, 2.2 and best-practice | Pass | Zero violations at 1280 on slide 1 and slide 2, and at 360 with the accordion enhanced, answer 3 open and one builds list open |
| 15 | CLS | Pass | 0 at 360 (DPR 2, touch) scrolling the full page, then 0 after opening and closing two answers, two builds lists and the last answer; 0 at 1280 scrolling the full page and idling through an auto-advance |
| 16 | Slider from build 2 | Pass | Tabs, arrows, keyboard, auto-advance, `hero_slide_view` untouched; reduced motion still gives `is-static` and 0s transitions (chevron included) |
| 17 | Page errors | Pass | None in any run |
| 18 | Single-file artifact | Pass | 1,881,564 bytes (1.79MB), 11 photos plus logo and favicon as data URIs, hero preload dropped, no `<picture>`, `<source>`, `srcset` or `sizes` in the markup, client strip replaced by the sector paragraph with its CSS, title "TEKMentors Homepage", no doctype, html, head or body wrappers, no charset or viewport meta, no `../assets/` left. Renders with 0 broken images and no page errors at 1280 and 360; slide 2's photo loads on tab click. At 360 it lays out at 980px because the host, not the file, supplies the viewport meta |

## 5. Lighthouse, mobile (Lighthouse 12.8.2, Chromium 1194, local server, simulated throttling)

Unreachable hosts blocked, two sequential runs:

| Category | Run 1 | Run 2 |
|---|---|---|
| Performance | 96 | 95 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |

FCP 1.7 to 2.0s, LCP 2.6s (the promise bar text, as in build 2), TBT 0 to 70ms, CLS 0,
Speed Index 1.7 to 2.0s, 213KB total. Up from 89 to 90 in build 2 because the WebP and
800px hero variants the Design Lead added after that report are now what the phone fetches.

## 6. Deviations from the brief, with reasons

1. The checklist button carries `data-need="project"`, not `data-need="consulting"`. The
   chips are `project`, `training_team`, `join_program` and `not_sure`; the form presets
   by matching that value, and copy.md says the button opens "A project or system". A
   literal `consulting` would preset nothing (the same reason as build 2's `join_program`).
2. The checklist button keeps `href="#contact"` but, when JavaScript runs, main.js
   prevents the fragment jump and scrolls the form card (`#form`, same 90px scroll margin,
   same smooth or reduced-motion behaviour) into view instead. A fragment navigation blurs
   the textarea after the handler has focused it, which lost the caret; scrolling to the
   card also lands a phone visitor on the form rather than a screen and a half above it.
   The URL hash is not updated by that click. Without JavaScript it is a plain anchor.
3. The 25% mobile-length target is not met (section 3). The specified folds work as
   intended and save 1,295px, but the specified additions cost 1,088px at 360. Nothing was
   cut or tightened beyond the brief. Options for the Design Lead, none applied: fold the
   checklist's seven questions behind the h3 on phones the way the answers fold; run the
   facts row in two columns below 640px (about 150px); shrink the four program
   thumbnails on phones from full-width 16:9 to the desktop 96x72 (about 600px); shorten
   the timeline in the contact section on phones.
4. Slides 2 and 3 got the same `.slide__photo` frame as slide 1 so the media rules stay
   shared; their lazy `data-src` loading is unchanged.
5. The slider viewport's bottom padding grew from 6px to 18px (with the matching negative
   margin) so the card's shadow is not clipped at the track edge on desktop.
6. `text-wrap: balance` on the number so it breaks "6 months / to 90 days" in the 260px
   card rather than "6 months to 90 / days"; browsers without it wrap as before.
7. The accordion question buttons render at 18px below 640px against the 20px desktop h3,
   so a two-line question and the chevron fit at 360 without a third line.
8. Items 2 to 7 of the checklist have no short line after the question; copy used as given.

## 7. Open items for the Design Lead

- Decide on item 3 above, or accept the current height.
- copy.md and the tracking plan already carry revision 2; seo.md's heading outline gains
  the checklist h3 inside the consulting section.
