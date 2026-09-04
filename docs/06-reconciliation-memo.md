# 06. Phase 1 reconciliation memo

Prepared by TechnoTaau Team, Design Lead, 4 September 2026, for Gate 1
sign-off by Jakhar Singh.

What was reconciled: the Claude Design canvas (five artboards, two chat
transcripts, five client uploads, one v3 static prototype) delivered to
`design/reference/` against the brief, brand doc, content inventory and
homepage spec written in Phase 0 before the canvas was readable.

Rendered previews of every version are in `design/reference/previews/`.

## 1. Decision: v4 is the base

v4 (`TEKMentors Home v4 (web).dc.html`) becomes the structural and visual
base for the homepage. v3 contributes its enquiry form and "what happens
next" sequence, which v4 already carries at the end of the page. v1
contributes nothing to the homepage directly; its FDE deliverables timeline
moves to the FDE program page. v2 contributed its ruled roster and answers
discipline to v4 and is otherwise retired.

Why v4 and not v3, which the handoff session implemented:

- v4 was the last design the client saw, and they asked for it to be
  exported to PDF and sent to Canva. That is the closest thing to approval
  in the record.
- v4 was built from an explicit behavioural read of the three visitor types,
  which matches the two-audience model in the brief and the marketing plan.
- v3 puts the form in the hero. That is a campaign landing page pattern. It
  is right for the paid-traffic program pages the proposal calls for, and
  wrong for the corporate homepage where a CTO lands from a referral.
- v4 already contains v3's best sections (persona routing, what happens
  next, straight answers, the form) so nothing from v3 is lost.

The v3 static prototype in `design/reference/prototype-v3/` is kept as
reference for the form component and the responsive rules its author
verified. It is not promoted to `prototype/`.

## 2. Visual system: the canvas wins, the tokens change

Phase 0 tokens were derived from the live Astra theme (Lexend Deca, #046bd2).
The canvas palette was sampled from the logo after the client challenged an
earlier indigo palette, and the client saw and accepted it across v3 and v4.
The client never saw Lexend Deca in a design. Decision: the tokens move to
the canvas system. `design/tokens.css` and `docs/01-brand.md` are updated in
this commit.

| Element | Phase 0 tokens | Canvas | Decision |
|---|---|---|---|
| Body and heading face | Lexend Deca | Schibsted Grotesk 400 to 800 | Adopt canvas. Elementor loads Google Fonts; Astra's global font changes to Schibsted Grotesk in the build |
| Label face | Lexend Deca 12px caps | Spline Sans Mono 400 and 500, 10.5 to 12.5px, tracked | Adopt canvas. Mono eyebrows are the one distinctive typographic device on the page |
| Primary link and CTA on light | #046bd2 | #1B7CBE | Adapt: #1B7CBE measures 4.49:1 on white, a hair under AA. Token becomes #1873B3 (5.1:1 on white, 4.75:1 on the page ground). Visually indistinguishable |
| Accent on dark, hero button | #4fa8de | #4FA8E4 | Adopt canvas value (6.0:1 on the navy) |
| Green | #569f42 | #57A445, #8CCB72 on dark, #35702B as text on light | Adopt canvas set. #57A445 stays decorative only (3.1:1 on white) |
| Navy | #0b1f3a | #07253C hero, #0B2F47 secondary, #061B2B promise bar | Adopt canvas |
| Neutrals | Tailwind slate | Cool blue-grey: #10222E text, #4C5C69 body, #687987 muted, #DCE5EB rule, #F5F8FA ground | Adopt, except muted text moves from #687987 (4.49:1) to #617486 (4.8:1) |
| Page ground | white | #F5F8FA with white cards | Adopt canvas |
| Radius | 12px | 14px cards, 8 to 9px buttons, pill chips | Adopt canvas |
| Container | 1200px | 1200px | Same |

Contrast fixes made in the canvas sessions (labels darkened, the #1B7CBE
panel moved to #0F5B8C) are carried into the tokens.

## 3. Section order: v4 plus four corrections from the brief

v4 as delivered, with the changes the brief and the claims policy require.

| # | v4 section | Decision | Reason |
|---|---|---|---|
| 0 | Promise bar: "read by a consultant, not a bot, replies within one working day" | Keep, confirm the promise | TEKMentors must commit to the one-working-day reply operationally. See open decisions |
| 1 | Sticky header, five links, "Talk to us" | Keep, add mobile menu and a sticky mobile bar | Canvas is desktop only; the brief is mobile first |
| 2 | Hero: headline, subhead, two CTAs, "start where it hurts" list | Keep | The routing list is the best idea on the page: it sorts both audiences by problem, not by job title |
| 2b | Hero stats row: "20+ yrs, 50+, Hands-on, End-to-end" | Adapt | "50+ clients" is a placeholder. Replace with four verified facts: mentors average 20+ years (verified on the client's own flyer), IIT (BHU) alumni faculty, founded 2017 in Gurugram, live online and on-site |
| 3 | Client logo strip, nine logos hotlinked from the live site | Keep, confirm | The logos are already published on tekmentors.com, so carrying them over is reasonable, but the proposal's rule says confirm in writing. Fallback is the sector line |
| 4 | Who writes to us: three persona cards | Keep | Maps to spec section 5 and to the marketing plan's buyer split |
| 5 | Programs roster: FDE (dark, flagship), GenAI foundations, Agile and product leadership, "also running" line | Keep, correct three facts | See claims audit: FDE ends with an executive customer demo, not a panel viva; "placement support" becomes "placement assistance" pending wording; add the GenAI Developer Training for teams as a fourth row because the proposal names it as a page to rebuild |
| 6 | Consulting: before and after pipeline, five practices | Keep | The diagram is the SIP "Illustrate" layer done well. It is the single section most likely to make a CTO reply |
| 7 | How an engagement runs: four phases | Keep | Consulting-side method. The programs-side method (Initiation, Immersion, Practice, Perform) moves to program pages |
| 8 | Straight answers: six questions | Keep, add FAQPage schema | Wording is strong. Two answers carry unverified claims, see audit |
| 9 | Record: four stat counters plus three dashed open slots | Replace | "50+ clients, 30+ transformations, 100+ programs, 10+ awards" are the live site's zero counters with numbers guessed in. Banned. The section becomes "Outcomes we have signed our name to" with the four verified UK bank numbers from the case study document, plus the mentor bench, which is no longer an open slot |
| 9b | Mentors (new) | Add | The client's GenAI flyer names three mentors with credentials: Arun Tiwari, Rahul Singh, Abinash Kumar Mishra. The canvas asked for exactly this and never received it. It was on the uploads all along |
| 10 | Insights: three posts | Keep | |
| 11 | Contact: what happens next plus the form | Keep | v3's strongest section, already merged into v4 |
| 12 | Footer | Keep, add address and the second phone line once confirmed | |

Dropped from the Phase 0 spec because v4 does better without them: the
announcement bar (the promise bar takes its slot), the separate trust strip
(folded into the hero stats row), the why-us tiles (the persona cards and
answers carry it), the learning-method stepper (program pages), the lead
magnet block (deferred until a magnet exists; the marketing plan lists three
candidates), testimonials (no verified quote yet).

## 4. Claims audit of v4 copy

Every statement checked against `docs/02-content-inventory.md`.

| Claim in v4 | Status | Action |
|---|---|---|
| "Twenty years inside enterprise transformation" | Verified: mentors 24+, 20+, 20+ years on the client's flyer | Keep |
| "50+ clients", "30+ transformations delivered", "100+ programs taught", "10+ awards won" | Placeholders, no source | Remove. Replace with the case study numbers |
| Client logos: IBM, L&T and seven unnamed | Published on tekmentors.com today | Keep pending written confirmation |
| FDE: 6 to 8 weeks, 3 to 8 years' experience, project led, LLM, RAG, agentic, evaluation, security, governance | Verified on the FDE flyer | Keep |
| FDE "ends with a live system and a panel viva" | Flyer says capstone ends in a working prototype and an executive customer demo | Reword to "ends with a working system and an executive demo" |
| FDE "briefing an executive who has eight minutes" | Flyer: "communicate technical options clearly to business and technical stakeholders" | Keep as voice, it is a paraphrase not a fact |
| GenAI: 16 weeks, 144 hours, 60% labs, RAG assistant, MCP agent, multimodal pipeline, capstone, mock interviews, industry panel viva | Verified on the GenAI flyer | Keep |
| GenAI "placement support" | Flyer says "placement assistance" | Use the flyer wording, confirm with TEKMentors how it is delivered before launch |
| Agile: 2 days, live online, Scrum Masters, Product Owners, delivery leads, no code | Verified on the Agile flyer | Keep |
| Agile "runs privately for a single team, from eight people" | Not on any document | Confirm or cut "from eight people" |
| "Replies within one working day", "45 minute session", "one page recommendation in two days", "proposal only if you want it" | Service promises, not facts | TEKMentors must agree to operate this before it ships. Otherwise soften to "within two working days" and drop the day counts |
| "We will sign your NDA before the scoping session" | Service promise | Confirm |
| "Remote, on site in Delhi NCR" | Verified location | Keep |
| v3 answer: "teams across India, the Gulf and the US" | Not in any document | Not carried into v4; do not reintroduce |
| Case study links, blog links, service page URLs | Live URLs on tekmentors.com | Keep, re-verify at build |
| X handle x.com/mentorstek in the footer | Not verified | Confirm or drop |
| Phone +91 99587 77467 and info@tekmentors.com | Site header | Keep. The flyers show a second line, 7296800884, and purva.menaria@tekmentors.com. Confirm which is the lead inbox |

## 5. What the canvas got right that Phase 0 missed

Recorded so the spec and the copywriter keep them.

- Routing by problem, not by persona label, in the hero list.
- "What happens after you press send" as the answer to the fear that
  actually stops enterprise buyers submitting.
- Answering the questions people will not type into a form, in the open.
- Leaving proof slots visibly empty rather than inventing numbers. The same
  discipline as the proposal's claims rule, arrived at independently.
- Dropping the auto-rotating slider with a reason the client accepted.
- Sentence case, no em dashes, no marketing tells. The client asked for
  these in the chat, and CLAUDE.md now carries them as rules.

## 6. Client references reviewed in the canvas sessions

The client pointed the design session at scaler.com, publicissapient.com,
nagarro.com and thoughtworks.com. The canvas took the program-row anatomy
(numbered outcomes, metrics row, one CTA) from Scaler and the ruled,
editorial restraint from Thoughtworks. Neither Publicis Sapient's motion
nor Nagarro's imagery was adopted, correctly: both need a photography budget
TEKMentors does not have.

The client also asked for the SIP principle (Show, Illustrate, Prove). The
canvas translated it for a services firm: Show becomes named deliverables,
Illustrate becomes the before and after pipeline, Prove becomes real case
numbers. This memo keeps that translation and now has the numbers to fill
Prove.

## 7. Open decisions for Gate 1

1. Approve v4 as the base with the corrections in section 3.
2. Approve the type and palette change to the canvas system.
3. Approve replacing the four counters with the UK bank case numbers and a
   named mentor bench.
4. Send TEKMentors the operational promises list (one working day reply,
   45 minute session, two-day recommendation, NDA on request) for a yes or
   a softer wording.
5. Confirm the lead phone line and inbox, the client logo permission, and
   the placement assistance wording.

When these are answered, Phase 2 starts: the ux-copywriter takes the v4
copy as the draft and produces `prototype/copy.md` against the reconciled
spec, and the visual-designer rebuilds the canvas on the new tokens with a
mobile artboard.

## 8. Cross-check against the official Claude Design export (added later on 4 September)

Jakhar Singh supplied the project's own export bundle
(`TEKMentors_Website_Redesign.zip`, now in `design/reference/export/`).
It is later than what the handoff session pushed, and it settles the open
question about which version is the design of record.

What the bundle adds:

- A 38KB handoff README written by Claude Design. It names
  `TEKMentors Homepage.dc.html` (v4) as "the recommended design, the
  specification" and says "implement this, everything else is context".
  It states the copy "has been through client review".
- A revised v4 and v3 with responsive fixes made after the repo copies: every
  grid uses `minmax(min(100%, N), 1fr)` so nothing overflows on a phone, the
  nav wraps, gutters and section padding are `clamp()`, and the hero h1
  climbs to 74px on large displays.
- The container widens from 1200px to 1480px, recorded as a decision "worth
  not relitigating".
- The client logo band is nine dashed slots (the logos were not fetchable
  during prototyping), with an instruction to use the WordPress media
  library files in production.
- Self-contained share builds of v4 and v3 that open offline.
- A fuller token table (input, placeholder, error and success colors), the
  form implementation notes (honeypot, routing by intent chip, autoresponder
  honesty, loading and failure states), and a list of seven decisions not to
  reopen.

Byte-for-byte checks: v1, v2, the v4 print file, the runtime files and the
logo are identical to the repo copies. Only v3 and v4 web changed, and only
in layout and responsiveness. No copy changed.

### Final judgement

The Phase 1 decision stands and is now backed by the export itself: v4 is
the base. The export supersedes the repo copy of v4 for layout values, so
the spec and tokens now carry 1480px, the clamp() rhythm, the fluid grid
rule and the 74px hero ceiling.

Where this repo still deviates from the export, each on purpose:

| Export says | This repo does | Why |
|---|---|---|
| Hero facts row "50+ clients" and Record counters "50+, 30+, 100+, 10+ awards" | Removed; replaced by verified facts and the UK bank case numbers | The proposal's claims rule. The export's own README bans "fabricated specifics" and these are exactly that |
| Copy is final, do not paraphrase | Three factual edits: FDE ends with an executive demo not a panel viva; "placement assistance" not "placement support"; a fourth program row for corporate GenAI training | Each is a correction against the client's own flyers, not a paraphrase. Listed for Jakhar Singh's approval in section 7 |
| Three named mentors are an open slot | Filled from the GenAI flyer: Arun Tiwari, Rahul Singh, Abinash Kumar Mishra | The design team never saw the flyer text; it was in the uploads |
| Nav wraps to two lines on phones | Menu button below 940px, plus a sticky bottom bar | Mobile first is a hard rule in the brief; Elementor's nav widget gives the menu for free |
| No breakpoints, fully fluid | Fluid grids as the rule, two breakpoints as exceptions: 940 for the menu, 640 for stacking the programs table | The README itself asks for a semantic table with a media-query stack in production |
| Link blue #1B7CBE, muted #687987 | #1873B3 and #617486 | Both export values measure 4.49:1 on white. AA needs 4.5 |
| "Teams across India, the Gulf and the US" in the README overview | Not published | No source; not in any TEKMentors document |
| Logo 484x226 PNG | Same file for now | The README is right that it is too small. Added to inputs needed |

Everything else in the export README is adopted as written, including the
seven decisions not to relitigate.
