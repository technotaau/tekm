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
| seo-schema | Title, meta, headings outline, JSON-LD, GA4 event map | `prototype/schema.json` snippets inline in `index.html`, `docs/06-tracking-plan.md` | Add Course schema to the homepage, stuff keywords into copy |
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

### Phase 1. Unblock the design source

Blocker: the Claude Design canvas at
https://claude.ai/design/p/79f4aba1-10cf-42e8-ab28-867207d83146 is not
readable from a headless session (share link returns 403, DesignSync needs an
interactive login).

Any one of these clears it:

1. In Claude Design, use "Send to Claude Code Web" on that project, targeting
   this repository. The canvas files land in the workspace.
2. Export the canvas (HTML or PNG per artboard) and commit the files to
   `design/reference/` on this branch.
3. Run `/design-login` once in an interactive Claude Code session on the same
   machine, after which DesignSync can read the project.

Exit: brand-strategist has produced the reconciliation memo listing which
canvas decisions (layout, palette, type, imagery, copy) carry into this repo
and which are replaced, with reasons tied to the brief.

Gate 1: Jakhar Singh signs off the reconciliation memo and the section order
in `03-homepage-spec.md`.

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
