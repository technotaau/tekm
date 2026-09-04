# 01. Brand: TEKMentors

## Logo

Files in `assets/brand/`, pulled from the live site on 4 September 2026.

- Horizontal lockup: brain-profile mark on the left, "TEKMentors" wordmark
  in bold rounded sans, tagline "Enabling minds to explore possibilities..."
  in a script italic underneath. Source: `TEKMentors_Logo.png` (2048x1024).
- Stacked mark: same elements stacked. Source: `Logo-of-Tekmentors.png` (square).
- Favicon exists on the site (`TEKMentors-Favicon-*.png`).

Sampled colors:

| Role | Hex |
|---|---|
| Logo blue (wordmark, nodes) | #4fa8de |
| Logo green (head outline) | #569f42 |

Logo rules for the homepage: minimum height 36px in the header on mobile,
44px on desktop. Clear space equal to the height of the "T". Never place the
full-color logo on the deep blue; use a white knockout version there
(to be produced, see inputs needed). Do not recreate the wordmark in
Lexend Deca; the logo is a fixed image.

## Palette

The live site's Astra global colors use a deeper blue (#046bd2) than the logo
(#4fa8de). Both have to coexist because the logo is not being redrawn in this
engagement. The reconciliation: deep blue carries the interface, logo blue is
reserved for accents that sit near the logo, green is a single-purpose
success and highlight color.

| Token | Hex | Use |
|---|---|---|
| --tm-blue-700 | #045cb4 | Primary button hover, link hover, dark hero gradient end |
| --tm-blue-600 | #046bd2 | Primary buttons, links, active nav, icons |
| --tm-blue-400 | #4fa8de | Accent tints near the logo, chart and icon secondary, focus ring |
| --tm-blue-050 | #f0f5fa | Section backgrounds, card surfaces on white |
| --tm-green-600 | #569f42 | Success states, "batch open" badges, single highlight per screen |
| --tm-navy-900 | #0b1f3a | Hero and footer background, heading color on light |
| --tm-slate-800 | #1e293b | Body headings |
| --tm-slate-700 | #334155 | Body text |
| --tm-slate-500 | #64748b | Secondary text, captions |
| --tm-slate-300 | #d1d5db | Borders, dividers |
| --tm-white | #ffffff | Page ground |
| --tm-amber-500 | #f59e0b | Only for "few seats left" urgency chips; never for buttons |

Contrast checks (WCAG 2.2 AA, normal text needs 4.5:1):

- #046bd2 on white: 5.2:1, passes for text and buttons.
- #4fa8de on white: 2.6:1, fails for text. Use it only for decorative accents,
  large icons, or text on navy where it reaches 6.3:1.
- #569f42 on white: 3.3:1, fails for small text. Use for badges with dark text
  or on navy backgrounds.
- #334155 on #f0f5fa: 9.4:1, passes.

## Typography

Lexend Deca, already loaded by the live site from Google Fonts with all
weights. It is a legibility-optimised humanist sans, which suits a
mentoring brand better than a tech-startup grotesque.

| Token | Size / line height | Weight | Use |
|---|---|---|---|
| --tm-display | 44px / 1.1 mobile, 64px / 1.05 desktop | 700 | Hero headline |
| --tm-h1 | 36px / 1.15 mobile, 48px / 1.1 desktop | 700 | Section titles |
| --tm-h2 | 28px / 1.2 mobile, 32px / 1.2 desktop | 600 | Sub-sections, card titles |
| --tm-h3 | 20px / 1.3 | 600 | Card headings |
| --tm-body-lg | 18px / 1.6 | 400 | Hero subhead, intro paragraphs |
| --tm-body | 16px / 1.6 | 400 | Body |
| --tm-small | 14px / 1.5 | 400 | Captions, meta rows on cards |
| --tm-label | 12px / 1.4, letter-spacing 0.08em, uppercase | 600 | Eyebrows, badges |

Sentence case for all headings. No all-caps except the 12px label style.
Numbers in cards use tabular figures (`font-variant-numeric: tabular-nums`).

## Voice

From the About page and the services deck, TEKMentors talks like a senior
practitioner explaining how things actually work: "It is relatively easy for
clients to define the transformation, it has been much tougher for them to
figure out how to transform and how to make it stick."

Rules for homepage copy:

- Plain, direct, second person. "You will build" not "Participants will be
  enabled to".
- Lead with the outcome, then the mechanism. "Cycle time from six months to
  90 days. Here is how."
- Specific over grand. Name the tools, the weeks, the client type.
- No exclamation marks, no "cutting-edge", "unlock", "empower", "leverage",
  "transform your career". These appear in the current site and the old
  page-copy doc; they go.
- Claims policy from the proposal: every partnership, accreditation, placement
  or ranking statement is verified with TEKMentors in writing or is left off.

## Imagery

- Real photographs of trainers and sessions beat stock. The proposal lists
  clean trainer photos as an input needed.
- Where stock is unavoidable, use people at work in Indian offices, not
  glowing-brain abstractions. The 2025 page-copy doc's Canva picks
  ("glowing digital transformation pathway") are the opposite of the voice
  above and should not be reused.
- Icons: a single outlined set at 1.5px stroke, blue-600 on light, white on
  navy. Elementor's built-in icon library is acceptable if the set is
  consistent (use one family only).
- Program cards may carry a small abstract system diagram (nodes and edges,
  echoing the logo mark) rather than photos, so the four cards read as a set.

## Motion

Minimal. Fade-up on section entry, 200ms, respecting `prefers-reduced-motion`.
No auto-playing carousels for content that matters; the current homepage's
slider hides the value proposition behind a rotation.
