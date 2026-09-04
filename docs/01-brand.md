# 01. Brand: TEKMentors

Revised 4 September 2026 after the Phase 1 reconciliation with the Claude
Design canvas. The canvas palette was sampled from the logo and accepted by
the client across v3 and v4; this doc adopts it and fixes two contrast
misses. Source values in `design/tokens.css`.

## Logo

Files in `assets/brand/`, pulled from the live site.

- Horizontal lockup: brain-profile mark on the left, "TEKMentors" wordmark
  in bold rounded sans, tagline "Enabling minds to explore possibilities..."
  in a script italic underneath. Source: `TEKMentors_Logo.png` (2048x1024).
- Stacked mark: same elements stacked. Source: `Logo-of-Tekmentors.png`.
- Sampled colors: blue #4FA8E4, green #57A445 (the Phase 0 sample read
  #4fa8de and #569f42 from a downscaled copy; the canvas values are used).

Rules: minimum height 36px in the header on mobile, 46px on desktop (the
canvas value). Clear space equal to the height of the "T". On the navy
grounds the canvas places the full-color logo directly; it holds up because
the navy is the logo blue taken down in lightness. A white knockout version
is still worth producing for the footer on dark and for social cards.

## Palette

| Token | Hex | Use | Contrast |
|---|---|---|---|
| --tm-navy-900 | #07253C | Hero, dark program row, before/after "after" panel, contact section | white on it 15:1 |
| --tm-navy-800 | #0B2F47 | Secondary dark panels, closing CTA card | |
| --tm-navy-950 | #061B2B | Promise bar | #BFDCEE on it 12.3:1 |
| --tm-blue-500 | #4FA8E4 | Logo blue. Hero primary button (navy text), accents and links on dark | on navy 6.0:1 |
| --tm-blue-600 | #1873B3 | Links, primary buttons and CTAs on light | on white 5.1:1, on page ground 4.75:1 |
| --tm-blue-700 | #175F91 | Text on the light blue tint, hover on light buttons | on #EAF4FB 6.1:1 |
| --tm-blue-800 | #0F5B8C | Filled panels that carry white body copy | white on it 7.3:1 |
| --tm-blue-100 | #EAF4FB | Tinted chips and secondary buttons | |
| --tm-blue-200 | #CFE4F3 | Borders on tinted chips | |
| --tm-green-500 | #57A445 | Logo green. Decorative only: dots, dividers, large marks | on white 3.1:1, so never small text |
| --tm-green-300 | #8CCB72 | Green labels and eyebrows on dark | on navy 8.1:1 |
| --tm-green-700 | #35702B | Green text on light (the "no code required" tag) | on white 6.0:1 |
| --tm-green-100 | #EAF6E6 | Success tint | |
| --tm-ink-900 | #10222E | Headings, nav text, dark buttons | on page ground 15.3:1 |
| --tm-ink-700 | #24404F | Emphasised body, form labels | |
| --tm-ink-600 | #4C5C69 | Body text | on white 6.9:1 |
| --tm-ink-500 | #617486 | Muted text, meta rows | on white 4.8:1 |
| --tm-ink-300 | #A7BDCB | Body text on navy | on navy 8.1:1 |
| --tm-ink-200 | #B3C6D3 | Hero subhead on navy | on navy 8.9:1 |
| --tm-line | #DCE5EB | Rules and card borders | |
| --tm-line-strong | #10222E | The 1px rule that opens a roster or answers block | |
| --tm-ground | #F5F8FA | Page background | |
| --tm-surface | #FFFFFF | Cards | |
| --tm-surface-2 | #EEF2F5 | Client strip band | |
| --tm-rust-600 | #B4472F | "Before" label in the pipeline diagram only | on white 5.4:1 |
| --tm-rust-100 | #FCF7F5 | "Before" card tint | |

Two values differ from the canvas on purpose: #1B7CBE measured 4.49:1 on
white and #687987 measured 4.49:1, both a hair under WCAG AA for normal
text. They become #1873B3 and #617486. Everything else is the canvas value.

## Typography

Schibsted Grotesk for everything readable, Spline Sans Mono for the tracked
uppercase eyebrow labels. Both from Google Fonts with `display=swap` and a
preconnect. Lexend Deca, which the live site loads today, is retired in the
build; Astra's global font setting changes to Schibsted Grotesk.

| Token | Size / line height | Weight | Use |
|---|---|---|---|
| --tm-display | clamp(38px, 4.6vw, 64px) / 1.05, tracking -0.028em | 700 | Hero h1 |
| --tm-h2 | clamp(30px, 3.6vw, 46px) / 1.08, tracking -0.025em | 700 | Section titles |
| --tm-h3-lg | 26px / 1.12 | 700 | Flagship program title |
| --tm-h3 | 20 to 23px / 1.15 to 1.25 | 700 | Card and answer headings |
| --tm-body-lg | 19px / 1.6 | 400 | Hero subhead |
| --tm-body-md | 16.5px / 1.6 | 400 | Section intros |
| --tm-body | 15.5px / 1.65 | 400 | Body |
| --tm-body-sm | 14.5px / 1.6 | 400 | Card body, roster cells |
| --tm-small | 13.5px / 1.5 | 400 | Meta and captions |
| --tm-label | 11 to 12.5px, tracking 0.12 to 0.14em, uppercase, Spline Sans Mono | 400 or 500 | Eyebrows, roster headers, phase labels |
| --tm-stat | 42px / 1, tracking -0.03em | 800 | Numbers in the outcomes block |

Sentence case for headings, nav and buttons. The mono eyebrows are the only
uppercase on the page. Proper nouns keep their casing. Blog titles keep
their published casing.

## Voice

The client's instructions from the canvas sessions, now rules:

- No em dashes anywhere.
- Sentence case, because title case reads like a brochure.
- No marketing tells: "harness the full potential", "unlock the power of
  data", "leverage", "empower", "drive innovation", "cutting-edge",
  "transform your career", "world-class".
- It must read as if a specific person wrote it. Dry, direct, a little
  attitude: "Agile that survives contact with your org chart", "If you still
  need us in a year, something went wrong".
- Lead with the outcome, then the mechanism. Name tools, weeks, client types.
- Every partnership, accreditation, placement or ranking statement is
  verified in writing or stays off the page.

## Imagery

- No stock photography on the homepage. The canvas proves the page works
  with type, rules, tinted cards and one diagram.
- The before and after pipeline is the one illustration. Rebuild it as
  inline SVG or CSS boxes, never as a raster.
- Mentor photos: real headshots from TEKMentors, consistent crop, 1:1,
  desaturated to 90% so three different lighting setups read as one row.
- Client logos: grayscale at 60% opacity, height 26 to 34px, as the canvas
  renders them.

## Motion

One entry animation on the hero (`v4rise`, 0.7s, translateY 14px), hover
color shifts at 150 to 200ms, nothing else. Respect `prefers-reduced-motion`.
No auto-rotating anything: the slider was tried in the canvas and dropped
because nobody sees slide two.
