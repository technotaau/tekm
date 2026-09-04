# QA round 1: TEKMentors homepage prototype

Run 4 September 2026 against `prototype/index.html` (commit 9e4915d) at
`http://127.0.0.1:8766/prototype/index.html` in headless Chromium. The
qa-reviewer agent ran all seven check scripts and saved results; it was cut
off by a session limit before writing this report, so the Design Lead wrote
it from the saved results. Screenshots in this folder.

External hosts (Google Fonts, tekmentors.com images) are unreachable from
the sandbox. Those network errors appear once in every run and are not
defects of the page.

| # | Check | Result | Evidence | Owner of fix |
|---|---|---|---|---|
| 1 | No horizontal overflow at 360, 390, 640, 960, 1280, 1480; no element past the viewport edge | Pass | scrollWidth equals innerWidth at all six; zero elements past the edge; `home-*.jpg`, `fold-*.jpg` | |
| 2 | Both audiences reach a CTA within one scroll at 360 | Pass | "Talk to a consultant" bottom at 725px of a 740px viewport; "See the AI programs" at 781px, within the first scroll | |
| 3 | Sticky bar at 360: hidden at top, shown after the hero, hidden while the form is in view, 44px buttons, no covered content | Pass | qa1b: top hidden, after_hero visible (scrollY 1686), form_in_view hidden, bottom visible, last content bottom 644 above bar top 675, body padding 64px; `sticky-bar-*.jpg` | |
| 4 | Mobile menu at 360: opens, focus trapped, Escape closes, focus returns, scroll locked | Pass | qa1: opened with aria-expanded true, body overflow hidden, tab cycle stays inside, scroll lock [2000, 2000]; `menu-open-*.jpg` | |
| 5a | axe-core 4.10.2 at 1280 and 360, menu open and closed | Fail (1 moderate) | `region`: the promise bar's text, phone and email are outside any landmark. No serious or critical issues | frontend-builder (fixed in this round by the Design Lead: the bar is now `role="region"` with an aria-label) |
| 5b | One h1, no skipped levels, sections named, images with alt, controls labelled | Pass | h1 count 1; outline h1, h2 per section, h3 in cards; honeypot not in the accessibility tree | |
| 5c | Visible focus on every interactive element | Pass | 62 tabbable elements, zero without a ring; `focus-1280-a.jpg`, `focus-1280-b.jpg` | |
| 5d | 200% zoom, no clipping | Pass | 640 at 2x: no overflow, no clipped text; CSS zoom at 1280 same; `zoom200-*.jpg` | |
| 5e | Reduced motion disables the hero rise | Pass | animationName none, duration 0s, opacity 1 under emulation; v4rise 0.7s without | |
| 5f | Contrast, manual sample of 20 text and ground pairs | Pass | all at or above 4.5:1; lowest 4.75:1 (link blue on the page ground). axe's "incomplete" entries are pseudo-element backgrounds and the arrow glyph, not failures | |
| 6 | Form: empty, bad email, short message, valid; role="alert"; Sending; success; focus; enquiry_submit with need, audience, form_id; honeypot hidden | Pass at 1280 and 360 | qa3: the three messages match copy.md exactly; no validation on blur; `form-error-empty-1280.jpg`, `form-sent-*.jpg` | |
| 7a | Do-not-publish phrases, banned words, em dashes, emoji, exclamation marks, title case | Pass with two reviewed hits | "placement assistance": kept by Design Lead decision, it is the client's own flyer wording pending confirmation of delivery. "master": false positive, "Master's in Computer Science". No dashes, no exclamation marks, no title-case headings. Non-ASCII on the page is limited to the middle dot, the arrow, the copyright sign and the success check mark | |
| 7b | Page copy versus prototype/copy.md | Pass | 151 lines checked. The 20 "missing" entries are labels, placeholders, the A/B alternate heading, stats split across elements, and states shown only while sending; none is missing text. Deliberate differences: "FLAGSHIP" without "ENROLLING" (no open batch), team-size slot rendered as "Engineering teams, with basic Python." | |
| 8 | JSON-LD parses; FAQPage matches the visible answers | Pass | three blocks (Organization, WebSite, FAQPage); zero mismatches between schema and visible questions and answers | |
| 9 | Every CTA pushes the planned dataLayer event with parameters, no PII | Pass | 1280: 44 base CTAs, 4 post-submit links, 7 section_view. 360: 43 base, 11 menu, 2 sticky bar, 4 post-submit. Names and parameters follow docs/08-tracking-plan.md | |
| 10a | LCP is text, CLS zero | Pass | LCP element is the promise bar paragraph (164ms at 1280 with fonts blocked); CLS 0 while scrolling | |
| 10b | Lighthouse mobile | Pass with a sandbox caveat | As-is: performance 88, accessibility 100, best practices 96, SEO 100. Speed index 20.2s is the Google Fonts request hanging 12.5s in the sandbox. With unreachable hosts blocked: 97, 100, 100, 100, speed index 1.8s | |
| 10c | Payload | Pass | HTML 46KB, CSS 37KB plus 5KB tokens, JS 11KB; one deferred script; nine client logos lazy | |

Result: 17 pass, 1 fail, fixed in this round. Round 2 is a re-run of check 5a
only, done by the Design Lead: axe reports zero violations after the change.
