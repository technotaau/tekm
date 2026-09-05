# Build 7 report: final homepage cut

5 September 2026. Builder verification with the real typeface, plus the
Design Lead's footer tweak (two link columns on phones) measured after.

## Order

Promise bar, header, hero, routing band, facts strip, client strip, three
ways, FDE spotlight, programs (three rows), consulting (point of view,
diagram, one-pager line with two buttons), outcomes and mentors (with a
photograph), four straight answers, contact on a photograph, insights,
footer with a consulting column.

Removed: persona cards, the seven questions as a block, the five practices
list, the four phases, answers 4 and 5.

## Heights

| Width | Build 6 | Build 7 | After the footer tweak |
|---|---|---|---|
| 360 | 20,550 | 16,481 | 16,129 |
| 375x812 | | | 16,062 |
| 1366 | 11,036 | 9,037 | 9,037 |

Remaining length on phones sits in programs (2,887), consulting (2,310)
and contact (2,249). The form now sits before the insights section.

## Checks

- No horizontal overflow at 360, 640, 800, 960, 1024, 1100, 1280, 1366,
  1480. Every grid at every width has explicit columns and no orphaned
  last card (footer at 800 to 1099 leaves "Reach us" on a third row, noted).
- axe-core 4.10.2 at 1280, 1024 and 360: zero violations.
- CLS 0 at 360 and 1280.
- Contact copy sampled over the photograph at 1366 and 360: lowest 5.55:1.
- FAQPage JSON-LD matches the four visible answers exactly.
- Events: consulting_talk, checklist_onepager preset, faq_toggle 1 to 4,
  enquiry_start, enquiry_submit with need and audience, sticky bar hidden at
  the top, shown after the facts strip, hidden at the form, shown at insights.
- Lighthouse mobile, unreachable hosts blocked, two runs: performance 96 and
  95, accessibility 100, best practices 100, SEO 100. LCP 2.6s, CLS 0.

## Builder deviations, accepted

1. Sticky bar trigger changed from an IntersectionObserver to a scroll
   check, because a fast fling past the facts strip could skip the crossing.
2. Mentor bench is one column inside the half-width card.
3. The section_view threshold undercounts tall sections on phones; noted
   for the tracking plan revision.

Screenshots in this folder: full pages at nine widths, first screens at
375x812 and 1366x768, crops of outcomes, contact (1366 and 360) and the
footer (1366 and 360).
