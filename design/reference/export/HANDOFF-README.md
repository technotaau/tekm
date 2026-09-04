# Handoff: TEKMentors homepage redesign

## Overview

A complete redesign of the TEKMentors homepage (tekmentors.com). TEKMentors is an
enterprise consulting and technical upskilling firm based in Delhi NCR, working with teams
across India, the Gulf and the US. They sell two things: transformation consulting (cloud,
DevOps, agile, analytics) and practitioner-led training programs.

The redesign exists because three new programs needed prominent placement, and because
the previous page did not convert. It has to serve three audiences at once without
confusing any of them:

1. **Technology leaders** with a stalled project, arriving from referral or LinkedIn.
   Shallow scroll depth. They want to know you understand production, then how to
   make contact.
2. **Heads of engineering and L&D** looking for team training. They skip to programs and
   want format, length, audience, and whether it runs privately for one team.
3. **Individual engineers and graduates**, likely the largest share of organic search.
   They want syllabus, duration, placement support, and a low-friction way to ask about
   fees.

The target is enquiry submissions. Everything on the page routes to one form.

## About the design files

The files in this bundle are **design references created in HTML** — prototypes showing
intended look and behavior. They are **not production code to copy directly**.

The task is to **recreate these designs in the target codebase's existing environment**
using its established patterns, component library and conventions. The live site runs
**WordPress**, so the realistic target is a theme template or block implementation. If a
different environment is chosen, use these files as the specification, not as source.

Two things in the prototypes will not transfer as-is:

- **Styling is inline on every element.** This was a constraint of the prototyping
  environment, not a recommendation. Extract to whatever the target uses (theme CSS,
  CSS modules, Tailwind, utility classes).
- **The form is front-end only.** It validates and shows a success state in the browser
  but posts nowhere. Wiring it is implementation work — see "Form implementation".

## Fidelity

**High fidelity.** Final colors, typography, spacing, copy and interaction states.
Recreate the UI faithfully. Every hex value, font size and spacing value in this document
is the intended production value. The copy is final and has been through client review —
do not paraphrase it.

---

## Design direction

### Colors

The palette is derived from the TEKMentors logo, sampled directly from the asset. Logo blue
is `#4FA8E4` and logo green is `#57A445`. Neither is usable as-is for text on white, so
darkened variants carry the accessible roles.

| Token | Hex | Role |
|---|---|---|
| Brand blue | `#4FA8E4` | Buttons and accents on dark backgrounds only. Fails contrast on white. |
| Link blue | `#1B7CBE` | Links, primary buttons on light, section eyebrows |
| Link blue deep | `#175F91` | Secondary button text on light tint fills |
| Brand green | `#57A445` | Reference value from the logo |
| Green accessible | `#4A8F3C` | Green accents on light backgrounds |
| Green dark | `#35702B` | Small mono labels on light (contrast-safe) |
| Green light | `#8CCB72` | Eyebrows and accents on dark backgrounds |
| Ink | `#10222E` | Body text, headings, dark buttons |
| Ink 2 | `#24404F` | Form labels, emphasized secondary text |
| Body grey | `#4C5C69` | Body copy on light backgrounds |
| Mute grey | `#566774` | Mono eyebrow labels on light (contrast-safe) |
| Mute grey 2 | `#687987` | Footer links, fine print, table headers |
| Placeholder | `#93A5B1` | Input placeholder text |
| Slot label | `#5A6B78` | Labels inside dashed placeholder slots |
| Navy deep | `#07253C` | Hero, program flagship row, dark cards |
| Navy deeper | `#061B2B` | Top promise bar |
| Navy 2 | `#0B2F47` | Alternate dark section fill |
| Page bg | `#F5F8FA` | Page background |
| Band bg | `#EEF2F5` | Client logo band |
| Card bg | `#FFFFFF` | Cards, form, table rows |
| Border | `#DCE5EB` | Card borders, table row dividers |
| Border light | `#E7EDF2` | Internal dividers inside cards |
| Border input | `#D8E0E6` | Input borders |
| Tint blue | `#EAF4FB` | Secondary button fill, selected chip fill |
| Tint blue border | `#CFE4F3` | Secondary button border |
| Slot border | `#C4D2DC` | Dashed placeholder borders |
| Text on dark | `#A7BDCB` | Body copy on navy |
| Text on dark 2 | `#D5E2EA` | Table cell text on navy |
| Text on dark 3 | `#B3C6D3` | Hero subhead |
| Text on dark 4 | `#7E9AAB` | Hero stat captions |
| Warn rust | `#B4472F` | "BEFORE" label in the pipeline diagram |
| Warn rust text | `#8A6C62` | Body text inside "before" cards |
| Warn tint | `#FCF7F5` | "Before" card fill |
| Warn border | `#DCC3B9` | "Before" card dashed border |
| Error text | `#8A3B26` | Form validation message text |
| Error tint | `#FDF3F1` | Form validation message fill |
| Error border | `#EBD0C9` | Form validation message border |
| Success text | `#3C7A31` | Success checkmark |
| Success tint | `#EAF6E6` | Success checkmark disc |

Selection color: `background #4FA8E4`, `color #07253C`.

Constraint worth preserving: **at most two background colors** across the page. Light
`#F5F8FA` and navy `#07253C`, with `#0B2F47` and `#EEF2F5` as minor variants of each.

### Typography

Two families, loaded from Google Fonts.

- **Schibsted Grotesk** — everything. Weights 400, 500, 600, 700, 800.
- **Spline Sans Mono** — eyebrow labels, table headers, small metadata only. Weights 400, 500.

```
https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800&family=Spline+Sans+Mono:wght@400;500&display=swap
```

Fallback stack: `Helvetica, Arial, sans-serif`.

| Role | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| H1 hero | `clamp(34px, 4.3vw, 74px)` | 700 | 1.05 | -0.028em |
| H2 section | `clamp(30px, 3.6vw, 46px)` | 700 | 1.08 | -0.025em |
| H2 contact | `clamp(32px, 3.8vw, 50px)` | 700 | 1.06 | -0.025em |
| H2 insights | `clamp(26px, 3vw, 36px)` | 700 | 1.1 | -0.025em |
| H3 card title | 21px | 700 | normal | -0.015em |
| H3 answer | 20px | 700 | 1.25 | -0.01em |
| Program title, flagship | 26px | 700 | 1.12 | -0.02em |
| Program title, standard | 23px | 700 | 1.15 | -0.015em |
| Practice row title | 20px | 600 | normal | -0.01em |
| Hero subhead | 19px | 400 | 1.6 | normal |
| Section lead | 16.5px | 400 | 1.6 | normal |
| Body | 15px | 400 | 1.6 | normal |
| Body small | 14.5px | 400 | 1.6 | normal |
| Stat number, hero | 30px | 700 | normal | normal |
| Stat number, record | 42px | 800 | normal | -0.03em |
| Nav link | 14.5px | 500 | normal | normal |
| Mono eyebrow, section | 12px | 400 | normal | 0.14em |
| Mono eyebrow, card | 11px | 400 | normal | 0.12em |
| Mono table header | 10.5px | 400 | normal | 0.12em |
| Form label | 13px | 600 | normal | normal |
| Fine print | 12.5px | 400 | 1.5 | normal |

All mono eyebrow labels are **uppercase**. They are a design element, not headings.

### Casing

**Sentence case throughout** — headings, nav, buttons, card titles. Title case reads like a
brochure. The exceptions, which stay as they are:

- Mono eyebrow labels: uppercase (design element)
- Proper nouns: DevOps, Adobe, Google, Scrum, GenAI, LLM, RAG, MCP, CI/CD
- Blog post titles: these are real published article names

### Copy rules

The client's explicit requirement: the content must not read as machine-written.

- **No em dashes anywhere.** Use a period, a comma, or restructure the sentence.
- **No marketing abstractions.** Banned in this project: "harness the full potential",
  "unlock the power of", "leverage", "empower", "drive innovation", "cutting-edge",
  "seamless", "robust", "best-in-class". Replace with a specific claim.
- **Dry, concrete, faintly self-deprecating.** Reference examples from the approved copy:
  "Agile that survives contact with your org chart", "If you still need us in a year,
  something went wrong", "briefing an executive who has eight minutes", "a notebook on
  somebody's laptop that nobody dares touch", "reporting your marketing team will actually
  open", "a bill you can explain at the end of the quarter".
- **No emoji.** Not part of the brand.
- **No fabricated specifics.** Never invent a client name, a metric, a mentor name or a
  percentage. Where proof is missing the design shows a visible dashed placeholder saying
  what belongs there. This was a deliberate decision: a fabricated case study destroys
  credibility with exactly the senior audience the page targets.

### Spacing and shape

- Content max width: **1480px**, centered. *Not* 1200px — that leaves a 27 inch display
  looking two-thirds empty. 1480px fills a 5K iMac while holding a readable measure.
- Horizontal page gutter: `clamp(18px, 3vw, 32px)`
- Section vertical padding: `clamp(48px, 7vw, 88px)` top, 24px bottom (sections butt up)
- Grid gaps: 20px between cards, 24px inside table rows, 56px between hero columns
- Border radius: 14px cards and sections, 9px buttons and inputs, 8px small buttons,
  12px inner slots, 99px pills
- Shadow, form card on navy: `0 24px 60px -30px rgba(0,0,0,0.5)`
- Shadow, form card on light: `0 18px 44px -28px rgba(16,34,46,0.28)`
- Hero glow, navy sections:
  `radial-gradient(1000px 520px at 84% -12%, rgba(79,168,228,0.34), transparent 64%)`
  plus `radial-gradient(700px 420px at 6% 112%, rgba(124,193,95,0.14), transparent 60%)`

---

## Screens and views

The design is **one long homepage**, twelve sections top to bottom. There is one file per
candidate direction; the recommended one is v4.

### 0. Promise bar

Full width, `#061B2B` background, `#BFDCEE` text at 13px, 10px vertical padding.
Space-between: left is a 7px `#8CCB72` dot plus "Enquiries are read by a consultant, not a
bot. Replies within one working day." Right is phone and email in Spline Sans Mono at
12.5px, email in white.

This line does real work. It is the answer to the visitor's unspoken question about whether
submitting the form leads anywhere.

### 1. Navigation

Sticky, `top: 0`, `z-index: 50`. Background `rgba(245,248,250,0.94)` with
`backdrop-filter: blur(10px)`, bottom border `#DCE5EB`, min-height 74px.

Left: logo, 46px tall. Right: nav items at 14.5px/500 with 26px gaps —
Programs (with a `#1B7CBE` pill badge reading "NEW" in mono 10px), Consulting, How we work,
Answers, Insights — then a solid `#10222E` button, 11px/22px padding, 8px radius, reading
"Talk to us", hovering to `#1B7CBE`.

The nav must carry `flex-wrap: wrap`, `justify-content: flex-end` and `min-width: 0`, or it
forces horizontal overflow on a phone.

### 2. Hero

`#07253C` background with the two radial glows. Two columns, `minmax(min(100%,400px), 1fr)`
auto-fit, 56px/72px gap, top-aligned, 84px top padding.

**Left column.** Mono eyebrow "CONSULTING · CLOUD · AGILE · AI UPSKILLING" in `#9CD0F2`.
H1: "We build the AI systems, and the people who keep them running." Subhead in `#B3C6D3`,
max 580px: "Twenty years inside enterprise transformation, a fair few of them rescuing the
ones that went sideways. We modernize the systems, get AI into production, and train your
team to run it once we leave." Then two buttons: primary `#4FA8E4` fill with `#07253C` text
reading "Talk to a consultant" (hovers to white fill), and a ghost button with a
`rgba(255,255,255,0.32)` border reading "See the AI programs" (hovers border and text to
`#8CCB72`).

**Right column — "start where it hurts".** A glass panel: `rgba(255,255,255,0.05)` fill,
`rgba(255,255,255,0.14)` border, 14px radius, `backdrop-filter: blur(6px)`, 28px/30px
padding. Mono eyebrow in `#8CCB72`. Then five rows, each a link with a top border, 15px
vertical padding, space-between with a `→` glyph, hovering to `#4FA8E4`:

- "A pilot that works but will not go live" → `#consulting`
- "Cloud spend nobody can explain" → `#consulting`
- "Engineers who need to become AI engineers" → `#program-fde`
- "Agile on paper, slow in practice" → `#program-leaders`
- "A graduate who wants the AI job, not the course" → `#program-genai`

This panel replaced an auto-rotating three-slide carousel from an earlier round. The reason
matters: almost nobody sees slide two, and the people who do are usually waiting for slide
one to come back. Routing by the visitor's own problem does the same job without hiding
four fifths of the content. **Do not reintroduce a carousel.**

**Stat strip.** Below both columns, 64px top margin, top border
`rgba(255,255,255,0.12)`, auto-fit `minmax(min(100%,200px), 1fr)`. Four items, number at
30px/700 in white and caption at 13.5px in `#7E9AAB`:

- 20+ yrs — What our mentors average, in industry
- 50+ — Clients, several since the first engagement
- Hands-on — Practitioner led. No theory decks.
- End-to-end — Discovery to production, then handover

### 3. Client band

`#EEF2F5` fill, bottom border, 24px vertical padding. Mono label "TEAMS WE HAVE WORKED
WITH" in `#566774`, then the logo row. Logos are greyscale at 60% opacity, 26 to 34px tall.

**Currently nine dashed placeholder slots** labelled IBM, L&T and CLIENT 3 through CLIENT 9.
The real logos live on the WordPress media library but were not publicly fetchable during
prototyping, so they were replaced with slots. In the target implementation, use the real
media library URLs.

### 4. Who writes to us

Light background. Mono eyebrow "WHO WRITES TO US", H2 "Three kinds of people land here.
Pick yours and skip the rest."

Three white cards, auto-fit `minmax(min(100%,300px), 1fr)`, 20px gap, 1px `#DCE5EB` border,
14px radius, 32px/30px padding, flex column. Each has: a mono index label, an H3, body copy,
a "First step" block above a `#E7EDF2` top border, and a bottom-anchored secondary button
(`#EAF4FB` fill, `#175F91` text, `#CFE4F3` border, hovering to a solid `#1B7CBE` fill with
white text).

| Card | Title | First step | Button |
|---|---|---|---|
| 01 · TECHNOLOGY LEADERS | Something is not shipping | A 45 minute scoping session and a one page recommendation. | Consulting → |
| 02 · ENGINEERING AND L&D HEADS | Your team has to become AI capable | A skills read across the team, then a private cohort plan. | Team programs → |
| 03 · INDIVIDUAL ENGINEERS | You want the AI job, not the AI course | A fifteen minute call to pick the right program and batch. | Individual programs → |

Body copy, in order:

- "A pilot stuck short of production, a migration that stalled, a bill that grew. You want
  an engineer's read before you commit more budget."
- "You would rather train the engineers who already know your systems than hire strangers,
  and you need a program that ends in shipped work."
- "A few years in, or just out of college. You want to finish with work you can show and
  defend in an interview, and someone to help you get in the room."

### 5. Programs

Mono eyebrow "AI PROGRAMS", H2 "Three programs, with the details you would ask for anyway."
Right-aligned lead, max 320px: "All run live, taught by people who still do the work. Dates
and fees come back with your enquiry."

A **comparison table**, not a card grid. This is deliberate: the training buyer's actual
question is which program fits, and that is a comparison. Cards force serial reading.

Structure: a top border `1px solid #10222E`, a mono header row (PROGRAM / WHO IT IS FOR /
LENGTH / FORMAT / blank action column), then three rows and a footer row. Columns are
`repeat(auto-fit, minmax(min(100%,210px), 1fr))` with a 24px gap and 32px/24px padding,
so they reflow to stacked blocks on mobile. In a production implementation a semantic
`<table>` with a media-query stack is preferable.

**Row 1 — flagship**, `id="program-fde"`, `#07253C` fill, white text,
`border-radius: 0 0 14px 14px`.
Mono label "FLAGSHIP · ENROLLING" in `#8CCB72`. Title "AI Forward Deployed Engineer" at
26px/700. Description in `#A7BDCB`: "LLM, RAG and agentic engineering on one real enterprise
problem, with evaluation, security and governance in the build. Plus the customer-facing
half of the job: discovery calls, design reviews, and briefing an executive who has eight
minutes. Ends with a live system and a panel viva."
Audience: "Engineers with 3 to 8 years behind them, individually or as a company cohort".
Length: "6 to 8 weeks". Format: "Live, project led". Action: `#4FA8E4` button "Enquire".

**Row 2**, `id="program-genai"`, white.
Mono label "JOB READY" in `#175F91`. Title "GenAI engineering: foundations to production".
Description: "A RAG assistant, an MCP-enabled agent and a multimodal pipeline, each one
deployed rather than simulated in a notebook. Ends with mock interviews, an industry panel
viva, placement support and a capstone you can walk someone through line by line."
Audience: "Engineering graduates, no AI background needed". Length: "16 weeks" with "144
hours" beneath in `#687987`. Format: "Live, 60% labs". Action: outline button "Syllabus"
linking to the existing program page.

**Row 3**, `id="program-leaders"`, white.
Mono label "NO CODE REQUIRED" in `#35702B`. Title "AI-enabled agile and product
leadership". Description: "For Scrum Masters, Product Owners and delivery leads. Enough AI
to back the right idea, question the wrong one, and stop nodding along in vendor meetings.
Ends with your own team showing what they built."
Audience: "Agile and product leaders, run privately for a single team". Length: "2 days".
Format: "Live online". Action: outline button "Book".

**Footer row.** Mono "ALSO RUNNING" then three underlined links: Full stack architect,
DevOps engineer, Adobe toolset for corporate teams.

### 6. Consulting

Mono eyebrow "CONSULTING", H2 "The gap is never the model. It is everything around it.",
lead "Most AI pilots we are shown work perfectly and will never go live. Here is what that
usually looks like, and what we replace it with."

**Before and after diagram.** Two columns, auto-fit `minmax(min(100%,360px), 1fr)`.

Left, white card: mono "BEFORE" in `#B4472F`, H3 "Disconnected pilots", then five stacked
`#FCF7F5` cards with dashed `#DCC3B9` borders, 10px radius, each a 15px/600 title and an
8.5px `#8A6C62` caption:

- Notebook prototype — Runs on one laptop. No owner after the demo.
- Data pulled by hand — Exports and spreadsheets. Nothing repeatable.
- Quality judged by vibes — No eval set, so no way to prove it improved.
- Security consulted last — Review arrives after the build, and blocks it.
- No path to production — The pilot succeeds. The rollout never starts.

Right, `#07253C` card with a radial glow: mono "AFTER" in `#8CCB72`, H3 "One governed
pipeline", then five numbered nodes in `rgba(140,203,114,0.08)` fill with
`rgba(140,203,114,0.35)` borders, connected by 1px vertical `rgba(140,203,114,0.4)` lines
12px tall, offset 30px from the left. The fifth node is emphasized (`0.14` fill, `0.55`
border):

1. Scoped business problem — Named owner, measurable outcome, agreed baseline.
2. Governed data access — Permissions and lineage handled in the pipeline.
3. Agent in the real workflow — Integrated where the work already happens.
4. Evaluation as a gate — Regression caught before release, not after.
5. Production, run by your team — CI/CD, monitoring, and engineers who own it.

This diagram is the single most load-bearing element for the consulting audience. It is what
demonstrates that TEKMentors understands the difference between a demo and a deployment.

**Five practices list.** Mono "FIVE PRACTICES, ONE BENCH", then a `1.5px solid #10222E` top
border and five link rows, each `auto 1fr auto` grid, 22px vertical padding, bottom border,
hovering the whole row to `#1B7CBE`. Mono index, title at 20px/600, caption at 14.5px, `→`.

1. Cloud and DevOps — "Pipelines that hold up under real load, and a bill you can explain
   at the end of the quarter."
2. Transformation and tech strategy — "A roadmap tied to how the business makes money, with
   the legacy estate honestly accounted for."
3. Agile transformation — "Agile that survives contact with your org chart. Coaching for the
   teams, and for the managers above them."
4. Data and web analytics — "Instrumentation you can trust on Adobe and Google stacks, so
   the next argument is about strategy rather than the numbers."
5. Upskilling — "Hands-on programs that leave your team able to build the thing without us."

Rows 1 to 4 link to existing service pages; row 5 links to `#programs`.

### 7. How we work

Mono eyebrow "HOW AN ENGAGEMENT RUNS", H2 "Four phases. Each one ends in something you can
open."

Four panels in a 1px-gap grid over a `#DCE5EB` background with a 1px border and 14px radius,
`overflow: hidden`, auto-fit `minmax(min(100%,240px), 1fr)`, min-height 230px. Three white,
the fourth `#07253C`. Each: mono phase label, H3 at 19px/700, body, then a bottom-anchored
deliverable line at 13.5px/600 above a top border.

| Phase | Title | Body | Deliverable |
|---|---|---|---|
| 01 | Scope, then argue | We interview the people doing the work, size the problem, and drop the ideas that do not survive the conversation. | A scoped brief with a baseline number |
| 02 | Build against real data | Your documents, your permissions, your awkward integrations. The parts a vendor demo quietly skips. | A working service, not a slide |
| 03 | Measure and guard | Evaluation set, regression runs, and the security posture written down where your risk team can read it. | An eval harness and a report |
| 04 | Hand it over properly | Deployed with CI/CD and monitoring, documented, and walked through with the engineers who will own it. | A live system with a named owner |

### 8. Straight answers

Mono eyebrow "STRAIGHT ANSWERS", H2 "The questions we get in almost every first meeting.",
lead "Answered the way we would across a table, without the hedging. If yours is missing, it
is probably the interesting one, so put it in the form."

Six items in a two-column grid, auto-fit `minmax(min(100%,340px), 1fr)`, 56px column gap.
Each: a top border (first is `1.5px solid #10222E`, rest are `1px solid #DCE5EB`), 26px top
padding, H3 at 20px/700, body at 15.5px/1.65.

1. **Where should we actually start with AI?** "With the process your best people complain
   about most. It is usually unglamorous, already has a number attached, and nobody has
   offered to fix it because it is boring. That is exactly why it is the right first
   project."
2. **Our pilot works. Why can it not go live?** "Because a pilot proves the model and
   production needs everything else: governed data access, an evaluation set, a deployment
   path, monitoring, and a named owner on Monday morning. We build those in from week one."
3. **Do we hire AI engineers or train ours?** "Train the ones who already know your systems,
   your data and who to call when something breaks at nine on a Friday. That knowledge takes
   years to rebuild. The AI part takes weeks, and that is the part we teach."
4. **What does the first conversation cost?** "Nothing, including the one page recommendation
   that follows it. It is the fastest way for both sides to find out whether the work is a
   fit, and you keep the page either way."
5. **Can you work inside our security rules?** "Yes, and we would rather meet your risk and
   security people in week one than week six. We will sign your NDA before the scoping
   session if that is easier. Remote, on site in Delhi NCR, or a mix."
6. **What happens when you leave?** "Your engineers keep running it, because they built most
   of it with us watching rather than the other way round. Handover is a phase with a date on
   it, not a conversation we have when the invoice is due."

These are objection handlers. They exist because the enterprise buying committee raises
exactly these six points, and answering them on the page shortens the sales cycle. Keep the
plain-spoken register — hedged legal phrasing here would defeat the purpose.

### 9. Record

A white card, 1px `#DCE5EB` border, 14px radius, 38px/36px padding. Four stats, auto-fit
`minmax(min(100%,190px), 1fr)`, number at 42px/800 with the `+` in `#4A8F3C`:

50+ Clients served · 30+ Transformations delivered · 100+ Programs taught · 10+ Awards won

Below, behind a `showOpenSlots` flag, three dashed `#C4D2DC` placeholder cards naming the
proof that is still missing:

- **ONE CASE RECORD** — "Baseline, what we did, result. One client-approved figure beats any
  number of adjectives."
- **THREE NAMED MENTORS** — "Names, titles, employers and LinkedIn profiles. Senior people
  look up who is in the room before they commit."
- **ONE CLIENT QUOTE** — "Two sentences from a named client with their title. It will do more
  for enquiries than anything else on this page."

The flag exists so the placeholders can be hidden for a client presentation. **These are the
highest-value outstanding items on the whole page.** Fill them before launch; a named client
quote and three named mentors will move enquiry rate more than any layout change.

### 10. Insights

H2 "What we have been writing about." with a right-aligned "Everything on the blog →" link
underlined in `#10222E`.

Three post rows under a `1px solid #10222E` top border, each a
`minmax(110px,150px) minmax(0,1fr) auto` grid, 22px vertical padding, bottom border, hovering
to `#1B7CBE`: a mono category, the title at 18px/600, and a `→`.

Titles are real published articles, so they keep their original casing:

- DATA AND AGILITY — "From data silos to business agility: how financial leaders turn
  information into competitive advantage"
- TRANSFORMATION — "Why 70% of digital transformation projects fail: five critical success
  factors for financial services leaders"
- CLOUD — "The hidden costs of cloud migration: seven pitfalls financial services leaders
  must avoid"

In production this section should pull the three most recent posts from the WordPress feed
rather than being hard-coded.

### 11. Contact

`#07253C` background with a radial glow, 88px vertical padding. Two columns, auto-fit
`minmax(min(100%,400px), 1fr)`, top-aligned.

**Left — what happens next.** Mono eyebrow "TALK TO US" in `#8CCB72`. H2 "Bring us the
problem you have stopped mentioning in meetings." Lead in `#A7BDCB`: "Nobody likes sending a
form into the dark, so here is exactly what follows. You can stop at any step without an
awkward phone call."

Then four timeline rows, each a `minmax(100px,150px) minmax(0,1fr)` grid with an 18px
vertical padding and a `rgba(255,255,255,0.14)` top border. Mono stage label in `#8CCB72`,
then a 16.5px/600 title and a 14.5px `#A7BDCB` caption:

| Stage | Title | Caption |
|---|---|---|
| WITHIN 1 DAY | A real reply | From the consultant who will handle it, with their name and two or three questions about what you sent. |
| DAY 2 TO 4 | A 45 minute session | Bring the engineers. We ask questions and take notes rather than present. |
| 2 DAYS LATER | A one page recommendation | What we heard, what we would do first, what it would take. Yours to keep and circulate. |
| IF YOU WANT IT | A proposal | Scope, team, timeline and cost on one page. If the recommendation was enough on its own, that is fine too. |

Below, three underlined contact links: phone, email, LinkedIn.

This timeline is the most important non-obvious element on the page. Most B2B sites skip it,
and it is what removes the hesitation before submitting. It must sit immediately beside the
form, not elsewhere.

**Right — the form.** See the next section.

### 12. Footer

`#F5F8FA` with a top border. Four columns, auto-fit `minmax(min(100%,200px), 1fr)`, 44px gap.

Column 1: logo at 46px, then "Enabling minds to explore possibilities. Consulting and
upskilling for teams that have to ship." and "TEKMentors Consulting Pvt. Ltd."
Column 2 COMPANY: About us, Case studies, Blog, Terms of use.
Column 3 PROGRAMS: AI Forward Deployed Engineer, GenAI engineering, Agile and product
leadership, DevOps engineer.
Column 4 REACH US: phone, email, LinkedIn, "X, formerly Twitter".

Bottom bar above a top border: "© 2026 TEKMentors. All rights reserved." and
"www.tekmentors.com".

---

## The enquiry form

`id="form"`, white card, 14px radius, `0 24px 60px -30px rgba(0,0,0,0.5)` shadow,
`overflow: hidden`, max-width 500px, `margin-inline: auto`, 30px/34px padding.

Heading "Tell us what you need" at 23px/700, then "Four fields, about a minute. It goes
straight to the consulting team."

### Fields

**Intent chips.** Label "What is this about?". A 2×2 grid, 8px gap. Four buttons, left-aligned
text, 12px/14px padding, 9px radius, 14px/600, `1.5px` border. Unselected:
`#D8E0E6` border on white. Selected: `#1B7CBE` border on `#EAF4FB`. Default selection is the
first.

- A project or system
- Training my team
- Joining a program
- Not sure yet

**Text fields**, 14px gap, each with a 13px/600 `#24404F` label above a
`1px solid #D8E0E6` input, 13px/14px padding, 9px radius, 15px text.

| Field | Label | Placeholder | Required |
|---|---|---|---|
| name | Your name | Priya Nair | yes |
| email | Work email | priya@company.com | yes |
| org | Company *(optional)* | Where you work | no |
| msg | What is stuck? | One or two lines is plenty. Plain language beats a spec. | yes |

`msg` is a 3-row textarea with `resize: vertical`.

Focus state on all inputs: `border-color: #1B7CBE`, `box-shadow: 0 0 0 3px rgba(79,168,228,0.18)`,
`outline: none`.

Deliberately **four fields, not seven**. No phone, no company size, no budget dropdown, no
"how did you hear about us". Every added field costs completions, and a consultant can ask
for the rest in the reply.

### Validation

Client-side, on submit only. Never validate on blur — it punishes people mid-typing. Any
field change clears the current error.

| Rule | Message |
|---|---|
| name is empty after trim | We need a name to reply to. |
| email fails `/^[^@\s]+@[^@\s]+\.[^@\s]+$/` | That email does not look right. Check it and send again. |
| msg is under 8 characters after trim | A line or two about what is stuck helps us route this properly. |

Errors render in a single block above the button: `#FDF3F1` fill, `1px solid #EBD0C9` border,
`#8A3B26` text at 13.5px, 11px/14px padding, 9px radius.

### Submit and reassurance

Full-width button, `#1B7CBE` fill, white, 16px padding, 9px radius, 16px/700, reading "Send
it to the team", hovering to `#10222E` over 0.2s.

Directly beneath, at 12.5px in `#687987`, centered: "Your details go to our consultants and
nowhere else. No newsletter, no automated sequence, no third parties."

That line goes **under the button, not in a privacy policy link**. It answers the objection at
the exact moment it arises.

### Success state

Replaces the form body entirely. Centered: a 52px `#EAF6E6` disc with a `#3C7A31` checkmark,
H3 "Got it. Thank you.", then "A consultant is reading it today. You will have a reply within
one working day, from a person with a name."

Then a left-aligned `#F7FAFC` panel with a `#DCE5EB` border and a mono "WHILE YOU WAIT" label
over three links: "Look at the three programs" (`#programs`), "Read the straight answers"
(`#answers`), "Browse the case studies" (the existing case studies page).

Below, a plain underlined text button "Send another enquiry" in `#687987` that resets all
state.

The success state gives the visitor somewhere to go. A dead-end thank-you page wastes the
most engaged moment in the session.

### Form implementation

The prototype's submit only flips local state. Production needs:

1. **A real endpoint.** Either the WordPress form plugin already in use, or a REST endpoint
   posting to the CRM. Confirm which with the client.
2. **Server-side validation** mirroring the client rules. Never trust the browser.
3. **Spam protection.** A honeypot field plus a timestamp check is enough at this volume and
   costs no friction. Avoid a visible CAPTCHA — it will cost more real enquiries than it
   blocks bots.
4. **Routing.** The intent chip should determine the recipient: consulting enquiries to the
   consulting inbox, training enquiries to the programs inbox.
5. **Autoresponder honesty.** The page promises a reply from a named human within one working
   day. Either send no autoresponder, or send one that does not pretend to be that reply. A
   generic "we have received your request" template contradicts the promise bar and the
   timeline, and undermines the whole page.
6. **Loading and failure states.** Neither is designed. Suggested: disable the button and swap
   the label to "Sending…" during flight; on failure show the same error block with a message
   naming the email address as a fallback.
7. **Analytics.** Fire a conversion event on success. Track which intent chip was selected —
   that single data point tells the client which audience the page actually converts.

---

## Interactions and behavior

- **Navigation** is entirely in-page anchors plus outbound links to existing site pages.
  `scroll-behavior: smooth` on `html`, and `scroll-margin-top: 90px` on every anchor target
  to clear the sticky header.
- **Hovers.** Cards do not lift or scale. Links change color; buttons change fill. Practice
  rows and blog rows hover as a whole row, not just the text. Keep transitions minimal —
  0.2s on button fills, nothing else. The page's restraint is part of its seniority.
- **Animation.** One only: the hero fades up on load, `translateY(14px)` to `0` with opacity
  0 to 1, 0.7s ease, both fill modes. Nothing else animates. No scroll-triggered reveals.
- **No JavaScript is required** for anything except the form. The page works with JS disabled
  apart from the form, which is the correct trade.
- **Responsive.** Fully fluid, no breakpoints. Every grid uses
  `repeat(auto-fit, minmax(min(100%, Npx), 1fr))`. The `min(100%, …)` wrapper is essential —
  a bare `minmax(400px, 1fr)` forces horizontal overflow on a 375px phone. Section padding
  and gutters are `clamp()`. Headings scale with `clamp()` and `vw`.
  - Phone: everything single column; the programs table becomes stacked blocks; nav wraps to
    two lines.
  - Laptop: hero two columns, cards three across, table five columns.
  - Large display: content caps at 1480px, headings reach their clamp ceiling.

## State management

Trivial. One component, seven values:

```
need    string   default "A project or system"   which intent chip is selected
name    string   default ""
email   string   default ""
org     string   default ""
msg     string   default ""
error   string   default ""                      current validation message
sent    boolean  default false                    success state toggle
```

Transitions: any field change writes the value and clears `error`. A chip click sets `need`.
Submit validates and either sets `error` or sets `sent = true`. Reset clears everything.

One configuration flag, exposed as a prop in the prototype: `showOpenSlots` (default true)
toggles the dashed proof placeholders in the Record section.

No data fetching, except that the Insights section should read the WordPress post feed in
production.

## Assets

| Asset | Source | Status |
|---|---|---|
| TEKMentors logo | Client-supplied PNG, 484×226 | In this bundle at `assets/tekmentors-logo.png`. Low resolution — **request a vector or 2× PNG before launch.** |
| Nine client logos | WordPress media library | Not in this bundle. Live URLs were not publicly fetchable during prototyping, so the design shows dashed placeholder slots. Use the real media library paths. |
| Fonts | Google Fonts | Schibsted Grotesk and Spline Sans Mono, linked. Consider self-hosting for performance and for the client's likely European traffic. |
| Icons | None | The design uses text glyphs (`→`, `✓`) and CSS shapes only. No icon library. Keep it that way. |

No photography is used. If the client later supplies mentor headshots, the Record section's
placeholder slots are where they belong.

## Files in this bundle

| File | What it is |
|---|---|
| `TEKMentors Homepage.dc.html` | **The recommended design (v4).** The full interactive homepage. This is the specification. |
| `TEKMentors Homepage (share).html` | Self-contained standalone build of v4, fonts and logo inlined. Opens offline. Useful for reference without a build step. |
| `TEKMentors Home v3.dc.html` | Alternative direction: form in the hero, sticky, campaign-landing-page style. Kept because it is the stronger choice if the page is ever used as a paid-campaign destination. |
| `TEKMentors Homepage v3 (share).html` | Standalone build of v3. |
| `TEKMentors Home v4.dc.html` | Print/PDF variant of v4, built on a paged-document shell. Reference only — it is the same content re-laid-out for paper, not a web target. |
| `TEKMentors Home.dc.html`, `TEKMentors Home v2.dc.html` | Earlier explorations. Included for provenance. Do not implement. |
| `assets/tekmentors-logo.png` | The logo. |
| `doc-page.js`, `support.js` | Prototype runtime files. **Not needed in production.** |

Implement `TEKMentors Homepage.dc.html`. Everything else is context.

## Decisions worth not relitigating

Recorded because each one was tried and rejected, and each is likely to be proposed again:

1. **No hero carousel.** Tried in an earlier round with three auto-rotating slides. Replaced
   by the "start where it hurts" router. Rotation hides most of its own content.
2. **The form belongs at the bottom on a homepage.** v3 puts it in the hero, and that is
   right for a campaign landing page but reads as selling-before-introducing to a senior
   visitor arriving cold. Every CTA anchors to it instead, and the nav button is always in
   reach.
3. **1480px, not 1200px.** A 1200px cap leaves a 27 inch display looking broken.
4. **Sentence case, not title case.** Client-confirmed.
5. **A comparison table for programs, not cards.** The buyer's question is comparative.
6. **No fabricated proof.** Visible placeholders instead. This was the client's call and the
   right one.
7. **The colors come from the logo.** An earlier round used an indigo and mint palette that
   was adjacent to the brand but not actually it. Everything now derives from the sampled
   `#4FA8E4` and `#57A445`.

## Outstanding before launch

1. Wire the form to a real endpoint, with server-side validation and spam protection.
2. Fill the three proof slots: one case record, three named mentors, one client quote.
3. Supply the real client logo files and a high-resolution TEKMentors logo.
4. Make the Insights section read the live WordPress feed.
5. Design loading and failure states for the form.
6. Confirm the phone number, email and address are current.
