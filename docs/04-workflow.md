# 04. Workflow, roles and subagents

## Ownership

Session owner role: Design Lead and Delivery Owner for the TEKMentors homepage,
acting for TechnoTaau Team with Jakhar Singh as account owner and approver.

The Design Lead holds the brief, the spec and the acceptance checklist,
dispatches subagents, reviews every output against `docs/`, and is the only
role that marks a phase complete. Subagents never edit the brief or the
claims policy; they raise a change request in their report instead.

## Subagents

Defined in `.claude/agents/`. Each one gets the same three files as context
on every dispatch: `CLAUDE.md`, `docs/01-brand.md`, `docs/02-content-inventory.md`,
plus the spec section it is working on.

| Agent | Owns | Produces | Must not |
|---|---|---|---|
| brand-strategist | Positioning, competitive frame, reconciliation of the Claude Design canvas with the brand doc | Updates to `01-brand.md`, a positioning memo, a list of visual decisions to keep or drop from the canvas | Invent claims, change the palette without a contrast check |
| ux-copywriter | All on-page copy, microcopy, FAQ answers, form labels | `prototype/copy.md` with final copy per section, house-style-checked | Use any "do not publish" item, write placeholders that look real |
| visual-designer | The design canvas (via the `design` skill), component visuals, hero illustration, program card system | `.dc.html` artboards for mobile and desktop, exported PNGs in `design/exports/` | Use layouts Elementor cannot build, use colors outside tokens |
| frontend-builder | The static prototype in `prototype/` | `index.html`, `styles.css`, `main.js`, built on `design/tokens.css`, responsive at all four breakpoints | Add a build step, load more than two font families, ship a form that posts anywhere |
| seo-schema | Title, meta, headings outline, JSON-LD, GA4 event map | `prototype/schema.json` snippets inline in `index.html`, `docs/08-tracking-plan.md` | Add Course schema to the homepage, stuff keywords into copy |
| qa-reviewer | Acceptance checklist, accessibility, Lighthouse, cross-device screenshots, copy audit | `docs/qa/` report per round with pass/fail per checklist item and screenshots | Fix things silently; every fix goes back through the owning agent |

Dispatch rules:

- brand-strategist and ux-copywriter can run in parallel once Phase 1 clears.
- visual-designer starts only after copy v1 exists, so artboards carry real
  copy lengths.
- frontend-builder starts only after the canvas is approved at Gate 2.
- seo-schema runs alongside frontend-builder.
- qa-reviewer runs at the end of Phase 4 and again after every fix round.

## Phases and gates

### Phase 0. Context and workflow (complete, 4 September 2026)

Deliverables: this repo. Research log in `05-research-log.md`.

### Phase 1. Unblock and reconcile the design source (complete, 4 September 2026)

The canvas arrived through the Claude Code session that Claude Design's
handoff created (`Design: TEKMentors Website Redesign`). It pushed the export
to `claude-design/implement-v3-homepage`, which was fast-forwarded into this
branch. Everything sits in `design/reference/`.

The Design Lead wrote the reconciliation memo directly
(`docs/06-reconciliation-memo.md`) rather than dispatching brand-strategist,
because the full context was already loaded in the session. The brand doc,
tokens and homepage spec were revised to the canvas system in the same
commit.

Gate 1: Jakhar Singh answers the five open decisions at the end of
`06-reconciliation-memo.md`. Open as of 4 September 2026.

### Ownership change, 4 September 2026

The client handed the project to the Design Lead in full. From here the
gates are Design Lead reviews, with Jakhar Singh informed at each one rather
than asked. Gate 2 (canvas approval) is folded into Gate 3: the export's v4
canvas is the design of record, so Phase 3 becomes a mobile artboard and
component pass inside the prototype rather than a separate canvas round.

Decisions taken by the Design Lead at handover:

- Hero headline: candidate 1 from `07-reference-analysis.md`, "Twenty years
  each in enterprise engineering. Now teaching production AI." The
  client-reviewed v4 line stays as the A/B alternate in the copy doc.
- Copy edits against the flyers (executive demo, placement assistance, the
  fourth program row) are applied.
- Counters are replaced by the case numbers and the mentor bench.
- Type and palette move to the reconciled tokens.

### Phase 2. Content

- ux-copywriter writes final copy for every section against the spec, marks
  every [INPUT] slot, and runs `house-style-check`.
- Design Lead sends the consolidated inputs-needed list to TEKMentors.
- seo-schema drafts title, meta, heading outline and the FAQ set.

Exit: `prototype/copy.md` v1 approved by the Design Lead. Inputs request sent.

### Phase 3. Visual design

- visual-designer builds the canvas with the `design` skill: two artboards
  (desktop 1440, mobile 390) for the full page, plus a components artboard
  (buttons, program card, stat tile, stepper, form, header states).
- Uses `design/tokens.css` values only.
- Publishes the canvas as an artifact for review.

Gate 2: Jakhar Singh approves the canvas. Review notes are addressed in the
canvas, not in code.

### Phase 4. Prototype

- frontend-builder produces `prototype/index.html`, `styles.css`, `main.js`.
- seo-schema inserts JSON-LD, meta, and a `dataLayer` push per CTA.
- Prototype published as an artifact and screenshot at all four breakpoints
  with Playwright (Chromium is preinstalled in this environment).

Exit: prototype matches the approved canvas within normal rendering
tolerance; all CTAs fire their events in the console.

### Phase 5. QA

- qa-reviewer runs the acceptance checklist from the spec: Lighthouse mobile
  90+ in all four categories, axe with zero serious or critical issues,
  keyboard-only pass, 200% zoom pass, reduced-motion pass, copy audit,
  schema validation.
- Fix rounds go back to the owning agent. Maximum three rounds before the
  Design Lead escalates scope.

Gate 3: QA report all green. Jakhar Singh approves for handoff.

### Phase 6. Handoff to the WordPress build

- Design Lead writes `docs/07-elementor-handoff.md`: for every section, the
  Elementor widgets to use, the global colors and fonts to set in Astra, the
  Forminator form fields, Popup Maker triggers, and the GA4 event names.
- The prototype URL is the acceptance reference for the build.
- Program page specs start from the approved homepage components.

## Definition of done for the homepage design

1. Every section in the spec exists in the canvas and the prototype, or is
   documented as deferred with the reason and the degraded rendering.
2. No item from the "do not publish" list appears anywhere.
3. Every [INPUT] slot is either filled with verified data or degrades as
   specified.
4. QA report green at Gate 3.
5. Handoff doc written and reviewed by whoever builds in Elementor.
6. Everything committed and pushed to `technotaau/exciting-wright-fky9bc`.

## Cadence and communication

- Working branch: `technotaau/exciting-wright-fky9bc`. Commit per deliverable
  with a message that names the phase and the artifact.
- Progress summary to Jakhar Singh at each gate, in chat, short, with the
  artifact link and what is needed to pass the gate.
- Client-facing documents produced from this repo are signed
  "TechnoTaau Team" and name Jakhar Singh as the contact.


## Review gate added 5 September 2026

The client caught two laptop-width defects (phone-sized thumbnails in the
program rows, an orphaned phase card) that the 360/640/960/1280/1480
screenshot set missed. From build 4 on, every build is screenshotted and
grid-audited at 1024, 1100 and 1366 as well, and the Design Lead views the
laptop set before anything is published or sent to the client.

## Review gate extended 5 September 2026

Jakhar Singh's phone and laptop screenshots showed a hero three screens
tall on an iPhone and a four-line headline on a laptop, neither visible in
width-only screenshots with fallback fonts. From build 6, every build is
also checked as a first screen at 375x812, 390x844, 1280x720 and 1366x768,
and the Design Lead views those before publishing.

## Status, 4 September 2026

| Phase | State |
|---|---|
| 0 Context and workflow | Complete |
| 1 Canvas reconciliation | Complete; Gate 1 approved by Jakhar Singh ("all is good for now"), then full ownership handed to the Design Lead |
| 2 Content, SEO, tracking | Complete: `prototype/copy.md`, `prototype/seo.md`, `prototype/schema/`, `docs/08-tracking-plan.md`, `docs/07-reference-analysis.md` |
| 3 Visual design canvas | Folded into Phase 4: v4 from the export is the design of record, so no second canvas was drawn |
| 4 Prototype | Complete: `prototype/`, artifact published, `docs/qa/build/` |
| 5 QA | Round 1 complete, one fix applied, `docs/qa/round-1/` |
| 6 Handoff | Complete: `docs/09-elementor-handoff.md` |

Remaining before launch: the client inputs in `docs/02-content-inventory.md`
and the WordPress build itself, measured against the prototype.
