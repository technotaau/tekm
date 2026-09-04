# Handoff from the Claude Design session

Prepared by TechnoTaau Team, 4 September 2026, for the Design Lead session
working on `technotaau/exciting-wright-fky9bc`.

Everything delivered sits under `design/reference/`. Nothing outside that
directory is touched, and `prototype/` is left alone because Phase 4 owns it.

---

## 1. Read this first: it is not built on your tokens

The artboards predate this repository. They were designed against the logo,
not against `design/tokens.css`, so the two systems disagree. This is the
single thing most likely to cause trouble if it goes unnoticed.

| | `design/tokens.css` | v3 artboard |
|---|---|---|
| Typeface | Lexend Deca | Schibsted Grotesk, with Spline Sans Mono for labels |
| Link / primary | `#046bd2` | `#1B7CBE` |
| Logo blue | `#4fa8de` | `#4FA8E4` |
| Green | `#569f42` | `#57A445`, `#8CCB72` on dark |
| Darkest ground | `#0b1f3a` | `#07253C` and `#0B2F47` |
| Neutrals | Tailwind slate | cool blue-grey, custom |
| Container | 1200px | 1200px (agrees) |

The near-misses are more dangerous than the obvious ones. `#4fa8de` against
`#4FA8E4` and `#569f42` against `#57A445` are close enough to look like typos
and far enough apart to show up side by side.

`docs/04-workflow.md` requires frontend-builder to build on `design/tokens.css`
and forbids visual-designer from using colours outside them. The prototype here
satisfies neither. It is reference material for the reconciliation memo, not a
Phase 4 deliverable, and it should not be promoted to `prototype/` as-is.

The section counts diverge too. `docs/03-homepage-spec.md` runs sixteen
sections (0 to 15). v3 has nine, and deliberately drops the announcement bar,
trust strip as specified, why-us, how-you-learn, faculty, lead magnet and
insights, because it was built as an enquiry funnel rather than a full
corporate homepage.

---

## 2. Which version is current

**v3 is what was handed over, and v3 is what is implemented.** Both the export
bundle's own README and the session that triggered this work pointed at
`TEKMentors Home v3.dc.html`.

That is worth questioning, because **v4 is the later and more considered
design.** The chat record is explicit: v4 was built as a deliberate synthesis
of v1, v2 and v3 after a behavioural read of who lands on the page, and it
reverses two of v3's central decisions:

- v3 puts the enquiry form in the hero. v4 moves it to the end, on the
  reasoning that senior visitors on a corporate homepage read a hero form as
  being sold to before they know who the company is.
- v3 keeps v1's auto-rotating slider out. v4 also drops it, for the stated
  reason that almost nobody sees slide two.

v4 is closer to `docs/03-homepage-spec.md` in shape: it carries the persona
routing, the roster table, the before-and-after pipeline diagram and the
merged answers section, which map onto spec sections 5, 10, 6 and 13.

**Recommendation: reconcile against v4, not v3, and treat v3 as the source for
the enquiry-form section only (spec section 14), where it is the strongest of
the five.** I did not act on this, because the instruction named v3. v4 is in
`design/reference/canvas/` in both web and print form and needs no further work
to be readable.

Only v3 has been implemented. There is no v4 implementation, and I did not
build one, per the handover instruction not to implement anything new.

---

## 3. What v3 is, and why it is shaped that way

The design decisions below are the Claude Design session's, taken with the
client in the chat record, not mine. Sources are `design/reference/chats/`.

### Hero concept

An enquiry funnel. The page is organised around one action, and every button
on it points at the same form. The hero is a two-column split: proposition on
the left, the form itself on the right, sticky through the first screen so it
never has to be hunted for.

The headline is "Tell us what is stuck. We will tell you what we would do about
it." The promise bar above the header commits to a reply from a person within
one working day. This is the whole positioning of the page: it sells the first
conversation, not the company.

An earlier version had a three-slide auto-rotating hero. It was dropped
deliberately. The reasoning in the chat is that almost nobody sees slide two,
and those who do are usually waiting for slide one to return.

### Section order

1. Promise bar, a reply from a consultant within one working day
2. Header, five links and a standing CTA
3. Hero, proposition and the enquiry form
4. What happens next, four steps on dark ground
5. Where to start, three personas
6. Programs, three cards with the FDE flagship dark and first
7. Straight answers, six questions on a sticky two-column rule
8. Record, four statistics and two open slots
9. Closing CTA, plus non-form routes
10. Footer

The order is the argument. "What happens next" sits immediately after the form
rather than near the end, because the chat identifies post-submission
uncertainty as the thing that actually stops enterprise buyers submitting. It
answers the question the button raises, in the place it is raised.

"Straight answers" exists for the same reason: it takes the objections people
will not type into a form (will I be sold to, are we too small, can you meet
our security rules, who will actually turn up) and answers them in the open.

### Palette

Sampled from the logo, after the client challenged an earlier indigo and mint
palette that was adjacent to the brand but not actually it.

- `#4FA8E4` logo blue, on dark grounds and for the accent CTA
- `#1B7CBE` the same blue darkened, for links and CTAs on white, because the
  logo blue itself fails contrast there
- `#57A445` logo green, with `#8CCB72` as the light variant on dark
- `#07253C` the hero navy, which is the logo blue taken far down in lightness
  rather than a generic navy, so the logo sits on it cleanly
- Neutrals shifted from warm grey to cool blue-grey so nothing fights the hue

Several contrast fixes were made during the sessions and are carried through:
label colours darkened to clear 4.5:1, and a `#1B7CBE` panel moved to `#0F5B8C`
so white body copy clears 6:1.

### Type

Schibsted Grotesk 400 to 800 for everything, Spline Sans Mono 400 and 500 for
the uppercase eyebrow labels only. A serif was tried in v2 and dropped on the
grounds that it fought the logo.

Headings are sentence case throughout, a deliberate client instruction: title
case reads like a brochure, sentence case reads like a person wrote it. The
uppercase mono labels are a design element, not headings, and are exempt.

Two further copy rules from the client, both applied across the page and worth
preserving in Phase 2: no em dashes anywhere, and no marketing-speak tells
("harness the full potential", "unlock the power of data", "leverage",
"empower", "drive innovation").

---

## 4. The prototype

`design/reference/prototype-v3/` is the v3 artboard rebuilt as a standalone
static page. No build step, no dependencies, no framework.

```
index.html
assets/css/styles.css
assets/js/main.js
assets/img/tekmentors-logo.png
README.md
```

The artboards need Claude Design's runtime. Everything it provided is now
native:

| Artboard | Prototype |
|---|---|
| `style-hover="..."` attributes | real `:hover` rules |
| `<sc-if value="{{ sent }}">` | two panels, `hidden` toggled in JS |
| `{{ needConsultingBorder }}` | a `.chip.is-active` class |
| `showQuoteSlot` boolean prop | `<body data-open-slots="true\|false">` |
| inline styles on every element | classes and custom properties |

Colours, sizes, spacing and copy are carried over unchanged, including the
validation messages. 75 computed-style checks match the artboard's inline
values.

Verified headlessly in Chromium at 1440, 1200, 1024, 968, 966, 940, 911, 800,
600, 520 and 390px: no horizontal overflow at any width, no console or page
errors, every breakpoint firing on its intended pixel, and the full form flow.
This is not the Phase 5 acceptance checklist. No Lighthouse run, no axe run,
no keyboard-only or 200% zoom pass.

Two additions beyond the artboard, both because it was desktop-only: a menu
button below 940px, and responsive rules pinned to the widths where each
`auto-fit` grid actually reflows. Accessibility went in alongside: skip link,
real form semantics, `aria-pressed` chips, `role="alert"` errors,
`prefers-reduced-motion` handling.

Note against your `frontend-builder` constraints: it adds no build step and
loads two font families, but they are Schibsted Grotesk and Spline Sans Mono,
not Lexend Deca. The form posts nowhere, which matches your constraint.

---

## 5. Top-level files on this branch

Only `design/reference/` is added. Everything else is untouched.

```
HANDOFF.md                        this file
CLAUDE.md                         unchanged
README.md                         unchanged
docs/                             unchanged
design/tokens.css                 unchanged
design/reference/                 added, the canvas export
  README.md                       what the export contains
  canvas/                         five .dc.html artboards, runtime, logo, screenshots
  chats/                          chat1.md, chat2.md
  prototype-v3/                   the static implementation
assets/brand/                     unchanged
.claude/agents/                   unchanged
```

---

## 6. Open items

Carried over from the design sessions. The first four are client inputs that
were requested and never supplied, so they map onto your `[INPUT]` slots.

1. **`submitEnquiry()` is not wired.** The form validates and confirms in the
   browser and sends nothing. One function at the top of
   `prototype-v3/assets/js/main.js`, with a commented WordPress REST example
   above it. Left deliberately unimplemented, per the handover instruction.
2. **Six client logo files.** The hero shows six dashed slots labelled IBM,
   L&T and clients 3 to 6. The real logos on tekmentors.com were not publicly
   fetchable, which is also why they are placeholders in the artboard.
3. **One named client quote**, with title and company.
4. **A photo and short bio for the consultant** who reads the enquiries. The
   chat record argues a face beside the form is the cheapest available lift to
   completion.
5. **A verifiable case record**, baseline to intervention to result. The
   earlier SIP proof section was left with visibly dashed, empty data slots
   rather than invented figures, on the explicit reasoning that fabricated
   percentages would destroy credibility with this audience faster than vague
   copy. That decision is worth preserving in Phase 2.
6. **The statistics are placeholders.** 50+, 30+, 100+, 20+ were carried from
   the live site, which shows zeros. They need real figures or removal.

Two decisions for the Design Lead, neither of which I acted on:

7. **v3 or v4** as the reconciliation base. See section 2. My recommendation
   is v4, with v3's form section.
8. **Whether the prototype survives at all.** It is faithful to the artboard
   and off-system for this repo. Rebuilding on `design/tokens.css` in Lexend
   Deca at Phase 4 is a legitimate outcome, and it would be a cheaper decision
   to take now than after Gate 2.
