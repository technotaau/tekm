# TekMentors homepage redesign

Client: TEKMentors Consulting Private Limited (tekmentors.com), Gurugram.
Agency: TechnoTaau Team (technotaau.com). Account owner: Jakhar Singh.
Engagement: "Proposal: websites and lead generation for TEKMentors", 1 September 2026.

## What this repo is

The design source of truth for the new tekmentors.com homepage. It holds the
brief, brand tokens, verified content, the section-by-section homepage spec,
the working design canvas, and the static HTML/CSS prototype that the
WordPress/Elementor build is measured against.

The live site stays on WordPress (Astra theme + Elementor Pro). Nothing here is
deployed directly; the prototype is the build spec and acceptance reference.

## Read these first, in order

1. `docs/00-brief.md`            goal, audiences, KPIs, constraints
2. `docs/01-brand.md`            colors, type, logo rules, voice
3. `docs/02-content-inventory.md` verified facts, inputs still needed, claims banned
4. `docs/03-homepage-spec.md`    the section-by-section homepage spec
5. `docs/04-workflow.md`         roles, subagents, phases, review gates, definition of done
6. `docs/05-research-log.md`     every source reviewed and what it contributed
7. `docs/06-reconciliation-memo.md` how the canvas and the brief were reconciled, Gate 1 decisions

## Hard rules

- Nothing ships that TEKMentors cannot back up. No placeholder numbers
  (the current site shows "0+" counters), no invented testimonials, no
  accreditation, partnership or placement claims until verified in writing.
- Real outcome numbers from the case studies are allowed and encouraged
  (see the content inventory).
- Two audiences, one page: working professionals (program enquiries) and
  decision makers such as CTOs, VPs and L&D heads (corporate training and consulting).
  Every section must serve at least one of them and every CTA must be measurable.
- Mobile first. Most LinkedIn and Meta traffic lands on a phone.
- Prose in docs and copy: no em dashes, no AI filler, sentence case headings.
  Run the `house-style-check` skill on copy before it is marked final.
- Name the agency as "TechnoTaau Team" and the owner as "Jakhar Singh"
  in any document or proposal produced from this repo.

## Tech for the prototype

Hand-written HTML, one CSS file built on `design/tokens.css`, minimal JS,
no build step. Fonts via Google Fonts: Schibsted Grotesk and Spline Sans
Mono, the pair the client accepted in the design canvas (Lexend Deca on the
live site is retired in the build). Target Lighthouse 90+ on mobile for
performance, accessibility, best practices and SEO.

## Subagents

Defined in `.claude/agents/`. Use them per the workflow doc:
brand-strategist, ux-copywriter, visual-designer, frontend-builder,
seo-schema, qa-reviewer. The session owner acts as Design Lead and
Delivery Owner and is the only one who marks a phase complete.

## Design source

The Claude Design canvas that started this project is in
`design/reference/` (artboards, chats, client uploads, a v3 static
prototype, rendered previews). v4 is the approved base; the reconciliation
with the brief is `docs/06-reconciliation-memo.md`. Read `HANDOFF.md` for
what the handoff session delivered and what it deliberately did not do.
