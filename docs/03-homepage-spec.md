# 03. Homepage spec (v2, reconciled to the v4 canvas)

Revised 4 September 2026 after Phase 1 and the export cross-check. The base
is the official export `design/reference/export/TEKMentors Homepage.dc.html`
(v4, the design of record), with `TEKMentors Homepage (share).html` beside it
as a self-contained render. Its handoff README,
`design/reference/export/HANDOFF-README.md`, is the detailed value-level
spec and is binding except where this document or the memo says otherwise. Copy quoted below is
the canvas draft and the starting point for the ux-copywriter, not final.
Slots marked [INPUT] depend on items in `02-content-inventory.md`.
`06-reconciliation-memo.md` records why each section is here.

## Page-level

- Title: "AI engineering programs and enterprise consulting | TEKMentors"
- Meta description: "Practitioner-led AI programs and enterprise consulting
  from Gurugram. AI Forward Deployed Engineer, GenAI foundations to
  production, cloud, DevOps and agile transformation."
- One `<h1>`, in the hero.
- Schema: Organization (legalName, address, telephone, sameAs, logo),
  WebSite, FAQPage for the answers section. Course schema lives on program
  pages.
- Fonts: Schibsted Grotesk 400 to 800, Spline Sans Mono 400 and 500.
- Sticky mobile bottom bar with "Programs" and "Talk to us" (anchors), hidden
  from 940px up. The canvas is desktop only; this is the mobile-first
  addition.
- GA4 events: `route_click` (hero list item), `persona_click`,
  `program_click` (program), `program_enquire` (program), `service_click`,
  `case_study_click`, `enquiry_submit` (need chip value), `phone_tap`,
  `email_tap`, `whatsapp_tap`.

## Section order

| # | Section | Serves | Ground |
|---|---|---|---|
| 0 | Promise bar | A, B | navy-950 |
| 1 | Header | all | ground, sticky, blurred |
| 2 | Hero slider, routing band and facts row | A, B | navy-900 |
| 3 | Client strip | B | surface-2 |
| 4 | Who writes to us | A, B | ground |
| 5 | Programs roster | A, B | ground |
| 6 | Consulting: before and after, five practices | B | ground |
| 6b | Photo band | B, A | photo with navy overlay |
| 7 | How an engagement runs | B | ground |
| 8 | Straight answers | A, B | ground |
| 9 | Outcomes and mentor bench | B, A | ground, white card |
| 10 | Insights | A, B | ground |
| 11 | Contact: what happens next and the form | A, B | navy-900 |
| 12 | Footer | all | ground |

Audience A: working professionals and graduates. Audience B: decision makers.

## 0. Promise bar

Canvas as is. Left: green dot, "Enquiries are read by a consultant, not a
bot. Replies within one working day." Right: phone and email in mono.
[INPUT: TEKMentors confirms the one-working-day promise or it softens to
"within two working days".] On mobile the right side hides; the left text
wraps to two lines at most.

## 1. Header

Canvas at 940px and up with one addition: logo 46px, six links (Programs
with a "NEW" mono pill, Consulting, Case studies, How we work, Answers,
Insights), dark "Talk to us" button. "Case studies" links to the live page;
Publicis Sapient puts customers in the header for the same reason. Sticky, ground at 94% with backdrop blur, 1px line below.

Below 940px: logo 36px, phone icon link, menu button. The menu is a
full-height sheet: five links, then "Talk to us", then phone and email.
This is the v3 prototype's menu pattern.

## 2. Hero (revised 4 September 2026: slider and photography)

Client request via Jakhar Singh: a hero slider and photography, because the
text-only page read like a blog. The design record had dropped an
auto-rotating carousel twice; the Design Lead built the slider in the form
that avoids the recorded problem (hidden slides) and kept the routing list.

- Navy section with the two radial glows. Inside it, top to bottom: the
  slider, the routing band, the facts row.
- Slider: three slides, one per reader. Each slide is text 7/12 left and a
  photograph 5/12 right (14px radius, 1px white 14% border), stacking below
  960px with the photo under the text at 16:10.
  1. "Who we are": h1 "Twenty years each in enterprise engineering. Now
     teaching production AI.", the legacy subhead, buttons "Talk to a
     consultant" and "See the AI programs". Photo: two engineers reviewing
     code.
  2. "Consulting": "The gap is never the model. It is everything around
     it." with a two-sentence subhead on the governed pipeline; buttons
     "Talk to a consultant" and "How an engagement runs". Photo: a
     consultant presenting to a leadership team.
  3. "AI programs": "Four programs. Each one ends in something you can
     show." with a one-line-per-program subhead; buttons "See the AI
     programs" and "Enquire about a batch". Photo: a live workshop.
  Only slide 1 carries the h1; slides 2 and 3 use h2 styled the same.
- Controls: labelled tabs (Who we are, Consulting, AI programs) with the
  active tab underlined and a progress bar, previous and next arrows at
  44px, "n of 3" for screen readers. Auto-advance every 8 seconds; pauses on
  hover, focus, touch and when the tab is hidden; off entirely under
  prefers-reduced-motion. Swipe on touch. Tabs reset the timer. Every change
  fires hero_slide_view with the trigger.
  The tabs are the answer to the recorded objection: all three propositions
  are visible at once, so nothing depends on waiting for slide two.
- Routing band, "Start where it hurts": the five problem links as pill links
  in a wrapping row, same anchors and route_click events as before.
- Facts row as before: "20+ years", "IIT (BHU)", "2017", "Live", static text.
- Slide 1 photo is the LCP candidate: under 220KB, width and height set,
  preloaded, fetchpriority high. Slides 2 and 3 lazy.

## 2b. Photography

Stock photographs from Unsplash, chosen as placeholders until TEKMentors
supplies its own. Sources and licence in `assets/img/SOURCES.md`. Rules:

- Real offices and real work, calm and senior. No glowing brains, no
  handshake stock, no posed models.
- Never a stock photo where a real person is implied: mentors, "the
  consultant who reads your enquiry", client quotes. Those slots stay text
  until real photographs arrive.
- Placement: the three hero slides; a 4:3 thumbnail on each program row; a
  full-bleed band between the consulting section and the engagement phases
  ("Consulting and training from Gurugram since 2017. Live online, on site
  in Delhi NCR, or hybrid."); a small thumbnail on each insight row, to be
  replaced by WordPress featured images at build.
- All images have width and height attributes, lazy loading below the fold,
  and alt text that describes the scene or is empty when decorative.

## 3. Client strip

Mono label "TEAMS WE HAVE WORKED WITH", nine logos at 26 to 34px, grayscale,
60% opacity, wrapping. The export shows dashed slots because the files were
not fetchable during prototyping; the earlier repo copy of v4 hotlinks the
nine files that exist in the WordPress media library, and those are the
files to use. [INPUT: written confirmation.]
Fallback if refused: the label becomes "Clients in UK banking, global
financial services and Fortune 500 consulting" and the logos are removed.
Never dashed placeholder boxes on the live page.

## 4. Who writes to us

Canvas as is. Eyebrow "WHO WRITES TO US", h2 "Three kinds of people land
here. Pick yours and skip the rest." Three white cards: technology leaders
("Something is not shipping"), engineering and L&D heads ("Your team has to
become AI capable"), individual engineers ("You want the AI job, not the AI
course"). Each has a "First step" line and a tinted button linking to the
relevant section. Cards stack below 960px.

## 5. Programs roster

Canvas structure with four rows instead of three and three copy corrections.

- Eyebrow "AI PROGRAMS", h2 "Three programs, with the details you would ask
  for anyway." becomes "Four programs, with the details you would ask for
  anyway." Side note: "All run live, taught by people who still do the work.
  Dates and fees come back with your enquiry." [INPUT: once fees and dates
  exist, they go in the row and the note changes.]
- Column header row in mono: PROGRAM, WHO IT IS FOR, LENGTH, FORMAT, action.
- Row 1, flagship, navy: AI Forward Deployed Engineer. "FLAGSHIP · ENROLLING"
  only while a batch is open [INPUT]. Copy: "LLM, RAG and agentic
  engineering on one real enterprise problem, with evaluation, security and
  governance in the build. Plus the customer-facing half of the job:
  discovery calls, design reviews, and briefing an executive who has eight
  minutes. Ends with a working system and an executive demo." Then three
  named builds, numbered, with the flyer's tools: 01 RAG on your enterprise
  data (LangChain, pgvector, OpenSearch); 02 an agent with real integrations
  (LangGraph, MCP, FastAPI); 03 an evaluated, governed deployment (Docker,
  GitHub Actions, Terraform, OpenTelemetry). Who: engineers with 3 to 8
  years, individually or as a company cohort. 6 to 8 weeks. Live, project
  led. Line: "Next batch starts [INPUT]. Fee [INPUT], instalments if
  offered." Button "Enquire".
- Row 2: GenAI engineering: foundations to production. Eyebrow "JOB READY".
  Copy: "A RAG assistant, an MCP-enabled agent and a multimodal pipeline,
  each one deployed rather than simulated in a notebook. Ends with mock
  interviews, an industry panel viva, placement assistance and a capstone
  you can walk someone through line by line." Who: engineering graduates,
  no AI background needed. 16 weeks, 144 hours. Live, 60% labs. Three named
  builds: 01 RAG assistant, v1 and v2; 02 MCP-enabled AI agent; 03
  multimodal AI pipeline. Line: "Next batch starts [INPUT]. Fee [INPUT]."
  Button "Syllabus" to the program page.
- Row 3: AI-enabled agile and product leadership. Eyebrow "NO CODE
  REQUIRED". Copy as canvas. Who: agile and product leaders, run privately
  for a team [INPUT: minimum size]. 2 days. Live online. Line: "Next date
  [INPUT]. Fee [INPUT]." Button "Book".
- Every row keeps its three builds in the mobile stack. The side note
  "Dates and fees come back with your enquiry" is removed the moment the
  batch and fee inputs land; until then the [INPUT] lines do not render.
- Row 4 (new): GenAI developer training for teams. Eyebrow "FOR ENGINEERING
  TEAMS". Copy: "Six to eight weeks that get an existing team building RAG
  apps, AI-assisted workflows and agents on your own stack. Four labs, one
  capstone, your codebase." Who: engineering teams of [INPUT] or more. 6 to
  8 weeks. Live online, on site or hybrid. Button "For your team" to the
  corporate training page.
- "ALSO RUNNING" line: Full stack architect, DevOps engineer, Adobe toolset
  for corporate teams, as text links.
- Below 960px the grid becomes stacked cards: title, copy, then a three-cell
  meta row, then the button full width. Do not render the column header row
  on mobile.

## 6. Consulting

Canvas as is. Eyebrow "CONSULTING", h2 "The gap is never the model. It is
everything around it." Intro: "Most AI pilots we are shown work perfectly
and will never go live. Here is what that usually looks like, and what we
replace it with."

Before and after diagram, two cards. Before (white, rust dashed boxes):
notebook prototype, data pulled by hand, quality judged by vibes, security
consulted last, no path to production. After (navy, green outlined boxes
joined by a vertical line): scoped business problem, governed data access,
agent in the real workflow, evaluation as a gate, production run by your
team. Build as HTML and CSS, not an image.

"FIVE PRACTICES, ONE BENCH" ruled list, each row a link with number, title,
one line, arrow: cloud and DevOps; transformation and tech strategy; agile
transformation; data and web analytics; upskilling. The live site also
sells Google marketing services; it folds into data and web analytics on
the homepage.

## 7. How an engagement runs

Canvas as is. Four cells in a ruled grid, the fourth navy: scope then argue
(a scoped brief with a baseline number); build against real data (a working
service, not a slide); measure and guard (an eval harness and a report);
hand it over properly (a live system with a named owner). Stacks to one
column below 640px.

## 8. Straight answers

Canvas as is, six questions in two ruled columns, plus FAQPage schema. Where
should we actually start with AI; our pilot works, why can it not go live;
do we hire AI engineers or train ours; what does the first conversation
cost; can you work inside our security rules; what happens when you leave.
[INPUT: the cost and security answers carry the service promises.]

## 9. Outcomes and mentor bench

Replaces the canvas "Record" block.

- White card, 14px radius. Eyebrow "ONE ENGAGEMENT, FOUR NUMBERS". Title
  is the outcome with the client typed by sector and scale, the Publicis
  Sapient case-card pattern: "A large UK bank: backlog to production from
  six months to 90 days." Source line in mono: "DEVOPS AND AGILE
  TRANSFORMATION · WEALTH AND PRIVATE BANKING".
- Four stat cells, 42px weight 800, tabular figures, static text never
  animated: "6 months to 90 days" backlog to production; "10 to 15" releases
  a year; "20% to 50%" P1 and P2 test automation; "25% to 10%" defects in
  SIT and UAT. Text link "Read the case study".
- Rule, then "WHO IS IN THE ROOM": three mentor cards in a row (photo 72px
  circle [INPUT], name, title, credential line, LinkedIn link [INPUT]).
  Credential line in a fixed format, degree and institution, years, one
  domain: "B.Tech, IIT (BHU) Varanasi. 24 years in product engineering for
  startups and enterprises." "B.Tech, IIT (BHU) Varanasi. 20 years in cloud,
  microservices and event-driven architecture." "Master's in Computer
  Science, PEC / Panjab University. 20 years building production AI and ML
  systems." No ratings, no counts.
  Until photos and permission arrive, the row renders as text only, still
  no placeholder avatars.
- A client quote slot is added only when a quote exists. Never a dashed box
  on the live page; the canvas's dashed slots were for the client review and
  are switched off by the `showOpenSlots` toggle.

## 10. Insights

h2 "What we have been writing about.", intro line "Written by the people
who teach and consult here.", link "Everything on the blog". Three ruled
rows: mono category, title, then author and month and year in the small
style, arrow. All fields pulled from WordPress at build, never typed.

## 11. Contact

Canvas as is. Navy section, two columns. Left: eyebrow "TALK TO US", h2
"Bring us the problem you have stopped mentioning in meetings.", intro, then
the four-step "what happens next" ruled list (within 1 day a real reply; day
2 to 4 a 45 minute session; 2 days later a one page recommendation; if you
want it a proposal), then phone, email, LinkedIn. [INPUT: the promises.]
The 45 minute session row carries its agenda in one extra line, the
Publicis Sapient pattern: "We will ask about the process that hurts, the
number attached to it, who owns it, and what has been tried." Ships only
with the promise.

Right: the form card, white, 500px max. Title "Tell us what you need",
line "Four fields, about a minute. It goes straight to the consulting
team." Need chips: a project or system, training my team, joining a
program, not sure yet (the chip sets a hidden field). Fields: your name,
work email, company (optional), what is stuck (textarea). Inline error
panel. Button "Send it to the team". Consent line: "Your details go to our
consultants and nowhere else. No newsletter, no automated sequence, no
third parties." [INPUT: if WhatsApp follow-up is used, the line must say
so.] Sent state: check mark, "Got it. Thank you.", the reply promise, three
"while you wait" links, "Send another enquiry".

On WordPress this is a Forminator form; in the prototype it posts nowhere.
Implementation rules from the export README, all adopted: server-side
validation mirroring the client rules; a honeypot field plus a timestamp
check instead of a visible CAPTCHA; the intent chip routes the email
(consulting enquiries to the consulting inbox, training to the programs
inbox); no autoresponder, or one that does not pretend to be the promised
human reply; a "Sending" button state and a failure state that names the
email address as a fallback; a GA4 conversion event on success carrying the
chip value. Validate on submit only, never on blur.

## 12. Footer

Canvas as is with two additions: the registered address, and the second
phone line if TEKMentors wants it. Four columns: logo and tagline; company
links; programs; reach us. Bottom row: copyright and site URL.

## Responsive rules (revised 5 September 2026)

- Explicit column counts per breakpoint, never `auto-fit`. The export's
  fluid rule orphaned the fourth phase card at laptop widths (1024 to
  1100px, which is what a 1366px laptop becomes at 125% zoom). Breakpoints:
  640, 800, 960, 1100, 1280.
- Persona cards 3 at 960 and up, else 1. Phases 4 at 1100, 2 at 640, else 1.
  Answers 3 at 1280, 2 at 700, else 1 (accordion below 640). Checklist 2 at
  800. Facts and outcome stats 4 at 800, else 2. Contact two columns at 960.
  Footer 4 at 960, 2 at 640. Hero two columns at 960.
- Programs roster at 1100 and up: photo 200x150, text column, stacked meta
  with labels, button. 640 to 1099: photo 160x120 beside the text, meta as a
  row of three under it. Below 640: stacked with a 16:9 photo.
- Container 1480px, gutters clamp(18px, 3vw, 32px). Tap targets 44px.
- Review widths before anything reaches the client: 360, 640, 800, 960,
  1024, 1100, 1280, 1366, 1480. The middle three are the laptop cases.

## Acceptance checklist

- Every [INPUT] is filled with verified data or the section degrades as
  written above. No dashed placeholder, no guessed counter, on the live page.
- Both audiences reach a CTA within one scroll on a 360px phone.
- Lighthouse mobile 90+ in all four categories.
- Copy passes the house-style check: no em dashes, no marketing tells,
  sentence case.
- FAQPage and Organization schema validate.
- Every CTA fires its GA4 event in the prototype console.
