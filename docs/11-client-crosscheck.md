# 11. Client cross-check: the three pages shared on 4 September

Prepared by TechnoTaau Team, Design Lead, 5 September 2026.

Jakhar Singh shared three pages with the client at tekmentors.com/homepage-v1,
v2 and v3. The client said v1 and v3 look good. Identification:

| Shared as | What it is | Source |
|---|---|---|
| homepage-v1 | The v4 design of record from the Claude Design export (headline "We build the AI systems, and the people who keep them running.") | `design/reference/export/TEKMentors Homepage (share).html` |
| homepage-v2 | The v3 form-in-hero variant | `design/reference/export/TEKMentors Homepage v3 (share).html` |
| homepage-v3 | A page built outside this repo: Sora and Inter, full-bleed photo hero, flagship spotlight, image cards, dark footer | Copied to `design/reference/client-review/homepage-v3-as-shared.html` with renders |

So the client's preference is: our base (v1) plus the photo-led hierarchy of
v3. The current prototype is built on v1; revision 3 pulls the v3 ideas that
survive the claims policy and the lead-generation goal.

## What v3 does better than the current build

1. Full-bleed photo hero with a two-line display headline, the second line
   in green, 80px at desktop, weight 800. More impact in the first second
   than our split layout.
2. A dedicated flagship spotlight for the AI Forward Deployed Engineer
   program: dark band, large photo, three facts, two buttons. Ours had FDE
   as the first roster row.
3. "Three ways we work with enterprise teams" as three photo cards:
   modernize the systems, take AI into production, train the people who
   run it. It answers "what do you do" at a glance. We answered "who are
   you" (the persona cards) but not this.
4. Insights as photo cards rather than thumbnail rows.
5. A dark footer that closes the page with weight.
6. The title "Built to survive the handover" for the phases section.
7. A prose point-of-view block that states the whole thesis in two
   paragraphs. Ours went straight to the diagram.

## What v3 gets wrong, not pulled

- No enquiry form on the page; every button goes to the contact page. The
  proposal's goal is leads, and the adaptive form is our strongest
  conversion element.
- "Agentic AI and Production LLM Systems" as a program with a duration and
  audience that no client document verifies.
- Mentor credentials weaker than the client's own flyer; one reads
  "background to be supplied by TEKMentors".
- A Pexels video autoplaying in the hero over a photo.
- Sora and Inter instead of the type the client accepted in v1.
- sales@ as the email; the site header uses info@ and the lead inbox is an
  open input.
- "Google marketing services" as a sixth consulting card; the proposal and
  the reconciled spec fold it into analytics.
- Program cards without the named builds, and no batch or fee slots.

## What ours keeps that v3 lacks

Routing by problem, the before-and-after diagram, the seven questions, the
straight answers, the adaptive form, the UK bank numbers with baselines,
three mentors with degrees and years, the sticky mobile bar, the accordion
behaviour on phones, the tracking, the schema.

## Revision 3 decisions

| # | Change | Why |
|---|---|---|
| 1 | Hero becomes a full-bleed photograph with a navy gradient overlay and a two-line headline, the second line in green-300. Built first as a slider (build 5), then made static and one screen tall in build 6 after Jakhar Singh's phone and laptop review; see spec section 2 | v3's first-second impact, without the slider that reviewers found confusing |
| 2 | New section after the client strip: "Three ways we work with enterprise teams", three photo cards | Answers "what do you do" before anything else |
| 3 | FDE spotlight: dark band with a 5:4 photo, the flyer's line "From technology engineer to customer-ready AI engineer", three facts, three builds, "Ask about the next cohort" and "All programs" | The client's own emphasis (flyer, LinkedIn post) and v3's strongest section |
| 4 | Roster becomes three rows (GenAI foundations, agile leadership, teams) under the spotlight | No duplication |
| 5 | Persona cards move after the roster | Routing is already done in the hero and the triptych; the cards keep their "first step" value |
| 6 | Consulting intro becomes v3's two paragraphs, then the diagram | The thesis in prose for the CTO who reads before looking |
| 7 | Phases section titled "Built to survive the handover." with v3's subline | Stronger, and verified |
| 8 | Insights as three photo cards | Visual rhythm where the page was thinnest |
| 9 | Footer on navy-950 | Closes the page with weight |
| 10 | The photo band is removed | The triptych and the spotlight now carry the photography, and the page must not grow |

Claims check on the new copy: "From technology engineer to customer-ready
AI engineer" is the FDE flyer's own line. "The same practitioners do the
consulting and teach the programs" rests on the mentors' flyer titles,
Senior consultant and trainer. Nothing else new is asserted.
