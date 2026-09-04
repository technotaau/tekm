# Build report: homepage prototype, Phase 4

Prepared by TechnoTaau Team (frontend-builder) for the Design Lead, 4 September 2026.
Prototype: `prototype/index.html`, `prototype/styles.css`, `prototype/main.js`.
Served from the repo root with `python3 -m http.server 8765` and checked headlessly in
Chromium 1194 via Playwright. The harness lives in the session scratchpad, not the repo.

## 1. Screenshots

Full page at each width, sticky bar hidden during the full-page capture only (a fixed
element is otherwise painted at the viewport position, mid-page):

- `docs/qa/build/home-360.jpg`
- `docs/qa/build/home-640.jpg`
- `docs/qa/build/home-960.jpg`
- `docs/qa/build/home-1280.jpg`
- `docs/qa/build/home-1480.jpg`

State captures:

- `docs/qa/build/menu-open-360.jpg` (menu sheet open)
- `docs/qa/build/sticky-bar-360.jpg` (bar visible after the hero scrolls out)
- `docs/qa/build/form-sent-1280.jpg` (success state)

Lighthouse: `docs/qa/build/lighthouse-mobile.html` (as run) and
`docs/qa/build/lighthouse-mobile-externals-blocked.json` (see section 4).

External fonts and the nine client logos do not load in this sandbox (connection reset
through the proxy), so every screenshot shows the Helvetica/Arial fallback stack and the
logo strip renders alt text only. Both resolve on a networked host.

## 2. Checks: passed (61 of 61 in the final run)

Layout

- `document.documentElement.scrollWidth` equals the viewport at 360, 640, 960, 1280 and
  1480. Also checked at 660, 700, 760 and 941 for the programs table band.
- No page errors or console errors other than the blocked external requests.
- Exactly one h1; the h2 and h3 outline matches `prototype/seo.md` section 3.
- Section ids present: promise, hero, clients, who, programs, program-fde, program-genai,
  program-leaders, program-teams, consulting, how, answers, proof, mentors, insights,
  contact, form, sticky-bar.
- Every `<img>` has alt. Landmarks: header, `nav[aria-label="Main"]`, main, footer; every
  section in main has `aria-labelledby` pointing at an existing element.
- Three JSON-LD blocks, all parse, byte-identical to `prototype/schema/*.json`.
- No em dashes in the rendered text. No `[INPUT` string rendered anywhere.
- Body text 15.5px; nothing readable below 14.5px. Programs header row is clipped off
  screen below 640px and each stacked cell carries its mono label.

Behaviour

- Header gains `is-scrolled` (shadow) after 80px; it is sticky and blurred at all widths.
- Menu at 360: button visible, `aria-expanded` toggles, sheet lists six links, "Talk to
  us", phone and email; focus moves to the Close button; Tab and Shift+Tab stay inside
  the sheet; Escape closes and returns focus to the Menu button; body scroll is locked;
  `menu_open` is pushed.
- Sticky bar at 360: hidden at the top, visible once the hero has scrolled out, hidden
  again while the form card is in view, both buttons 44px tall, body reserves
  `64px + safe-area` so nothing shifts.
- `prefers-reduced-motion: reduce` removes the hero rise (animation-name none) and
  smooth scrolling.
- Tap targets: every link and button is at least 44px in one dimension at 360; the
  inline text links (contact, footer, also running) are 44px or taller.

Tracking

- 60 elements carry `data-event`; the 51 visible at 1280 were each clicked and each pushed
  exactly one object to `window.dataLayer` and logged the same object to the console.
  The nine not clicked are hidden at that width (header phone icon, menu phone and
  email, the sent-state links and reset), and were exercised in the mobile and form runs.
- Event names seen: route_click, cta_click, persona_click, program_click,
  program_enquire, service_click, case_study_click, nav_click, insight_click,
  social_click, phone_tap, email_tap, section_view, menu_open, enquiry_start,
  enquiry_need_select, enquiry_error, enquiry_submit, post_submit_click.
- No name, email, company or message text appears in the dataLayer.

Form

- Submit with nothing filled: "We need a name to reply to." in the single `role="alert"`
  block, focus on the name field.
- Bad email: "That email does not look right. Check it and send again."
- Message under eight characters: "A line or two about what is stuck helps us route this
  properly."
- Valid submit: button reads "Sending" and is disabled, then the success state replaces
  the form, focus lands on it, `enquiry_submit` carries `need`, `audience` and
  `form_id: homepage_enquiry` (and `program` when preset by a program button).
  `enquiry_error` fired once each for name, email, message; `enquiry_start` once;
  `enquiry_need_select` on the chip click.
- "Send another enquiry" restores the form with the default chip.
- "Enquire" on the flagship row presets the "Joining a program" chip and the hidden
  `program` field; "Book" presets "Training my team".
- Honeypot (`website`, aria-hidden, tabindex -1) and a two-second timestamp check run
  after validation; either one shows the sent state and sends nothing. Nothing posts
  anywhere; `submitEnquiry()` in `main.js` is the wiring point.

## 3. Checks: not passed, or not possible here

- Artifact publish: the Artifact tool call was denied by the permission classifier in
  this session. The single-file build is ready in the session scratchpad as
  `tekmentors-homepage-prototype.html` (tokens, styles and script inlined, logo as a data
  URI, logo link pointed at `#top`). The Design Lead can publish it, or allow the
  Artifact action and ask for a re-run. Note for that publish: the artifact host blocks
  images from other hosts, so the nine client logos will not render there either.
- Google Fonts and the client logos: not loadable in the sandbox. Visual checks were
  made on the fallback stack.

## 4. Lighthouse, mobile (Lighthouse 12, Chromium 1194, local server)

As run, with the sandbox network as it is:

| Category | Score |
|---|---|
| Performance | 88 |
| Accessibility | 100 |
| Best practices | 96 |
| SEO | 100 |

FCP 1.8s, LCP 2.1s (element: the promise bar text, so LCP is text), TBT 50ms, CLS 0,
Speed Index 20.0s. The Speed Index and the performance score are dominated by the
Google Fonts stylesheet, which the proxy holds for 12.5s before resetting; best
practices loses points for the same failed requests appearing in the console.

Second run with `fonts.googleapis.com`, `fonts.gstatic.com` and `tekmentors.com`
blocked, which is what the page looks like when those hosts answer or are self-hosted:

| Category | Score |
|---|---|
| Performance | 97 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 100 |

Speed Index 1.8s, TBT 0ms, CLS 0, LCP 2.3s (text). The remaining performance advice is
the render-blocking chain (`styles.css` importing `design/tokens.css`, per the build
instruction, plus the font stylesheet) and cache headers, both build-time decisions on
WordPress. Recommend self-hosting the two families in the build as the export README
already suggests.

## 5. Deviations and decisions to confirm

Copy, all rendered as the degraded state `prototype/copy.md` specifies for each
unfilled [INPUT] (none of these are rewrites; each is the fallback the copywriter wrote):

1. Promise bar: "Replies within two working days." Success state mirrors it.
2. Card 01 first step: "A scoping session and a written recommendation."
3. Card 03 first step: "A short call to pick the right program and batch."
4. Row 1 label: "FLAGSHIP" (no "ENROLLING" until a batch is open).
5. Row 2 body: "placement assistance" cut; sentence reads "Ends with mock interviews, an
   industry panel viva and a capstone you can walk someone through line by line."
6. Row 3 who: "Agile and product leaders, run privately for a team."
7. Row 4 who: "Engineering teams, with basic Python." copy.md gives no fallback for the
   missing minimum size; the ux-copywriter should confirm this wording.
8. No date and fee lines on any row; the side note keeps its second sentence.
9. Answer 4: "Nothing. It is the fastest way for both sides to find out whether the work
   is a fit." Answer 5: NDA sentence cut. Answer 6 keeps the "something went wrong" line
   from copy.md.
10. Contact timeline: "WITHIN 2 DAYS", "THEN", "AFTER THAT" with "A written
    recommendation"; the agenda line stays.
11. Consent line without the WhatsApp addition; no WhatsApp link, so no `whatsapp_tap`.
12. Mentor bench: text only, no photos, no LinkedIn links, no `social_click` there.
13. Footer: no second phone line, no X link.
14. Client quote slot: not rendered.
15. Insights: category and title only. Author and month are pulled from WordPress at
    build; no fallback values exist, so the rows carry neither rather than a placeholder.

Schema: the three JSON-LD blocks are byte-identical to `prototype/schema/*.json` as
`seo.md` section 8 requires, but `faqpage.json` still carries the v4 answers. Answers 4
and 5 on the page are now the degraded versions, answer 6 has the extra sentence, and
answer 5's wording is "Online, on site in Delhi NCR or a mix" in copy.md versus "Remote,
on site in Delhi NCR, or a mix" in the file. The schema must never say more than the
visible text, so seo-schema should regenerate `faqpage.json` from the rendered answers
and the block in `index.html` be replaced with it.

Links whose target is an [INPUT] URL:

- Row 4 "For your team": no corporate training page URL exists yet, so it anchors to
  `#contact` and presets "Training my team". It still fires `program_click` with
  `program: teams` per the tracking plan; swap the href when the page exists.
- "Read the case study": points at the live `/case-studies/` index until the UK bank
  case has its own URL.
- Row 2 "Syllabus", the three "also running" links and the four service pages use the
  live URLs found in the v4 canvas; re-verify at build.
- Client logo alt text: IBM and L&T are named; the other seven read "Client" because the
  media library file names (RR, c1, c2, c3, c5, c7, c8-1) do not identify the company.
  The client must supply the seven names.

Tokens and colours:

- `--tm-rust-text` (#8A6C62) on `--tm-rust-100` measures 4.48:1 at 13.5px, under AA by a
  hair; the "before" card captions use `--tm-ink-600` instead. Suggest the brand doc and
  tokens adopt a darker rust text value, or accept ink-600 here.
- `--tm-ink-500` on `--tm-surface-2` at 11px measures 4.28:1; the client strip label uses
  `--tm-ink-600`. Same recommendation for any 11px mono label on the band ground.
- Two canvas colours have no token and were mapped: promise bar text #BFDCEE to
  `--tm-ink-on-dark-cell` (#D5E2EA), hero eyebrow #9CD0F2 to `--tm-blue-500`. Add tokens
  if the exact values matter.
- Glass and glow values (rgba white and the two radial gradients) are used as the export
  README specifies them; they are not tokens.

Structure:

- Mono-style headings ("Start where it hurts", "Teams we have worked with", "Who is in
  the room", "Five practices, one bench", footer column heads) are written in sentence
  case in the HTML and uppercased by CSS, so screen readers get words rather than
  letters. Plain eyebrows keep the uppercase text from copy.md.
- The programs roster is a semantic `<table>` (the export README's preference). Between
  640 and 940px it stays a five-column table with the action column shrink-to-fit; below
  640px it stacks with a mono label before each cell.
- Sticky bar `aria-label` is "Quick links" per copy.md; seo.md says "Quick actions". One
  of the two docs should change.
- Nav `aria-label` is "Main" per seo.md; the sheet has its own Close button (copy.md).
- The spec's `#how-we-work` anchor became `#how`, the id fixed by seo.md and the
  tracking plan.
- Header is always solid at 94% ground with blur (design of record). It gains a shadow
  after 80px rather than switching from transparent, because the header sits on the
  light ground above a navy hero and a transparent state would put dark nav text on navy.
- Section views: `section_view` fires once per section at 50% visibility for the eight
  ids in the tracking plan.

## 6. Files

- `prototype/index.html`
- `prototype/styles.css` (imports `design/tokens.css`)
- `prototype/main.js`
- `docs/qa/build/` (this report, eight screenshots, two Lighthouse outputs)

Nothing in `prototype/copy.md`, `docs/` (other than this folder) or `design/` was edited.
