# TEKMentors home page (v3)

> **Reference material, not an approved deliverable.** It is built on the
> artboard's own palette and typeface, not on `design/tokens.css`, and it is
> not the Phase 4 prototype. Read `HANDOFF.md` at the repo root first.

Implementation of `../canvas/TEKMentors Home v3.dc.html` from the Claude Design
handoff bundle, as a standalone static page. No build step, no framework, no
dependencies. Open `index.html` or drop the folder on any host.

```
design/reference/prototype-v3/
├── index.html
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/tekmentors-logo.png
```

## What changed from the prototype, and why

The prototype runs on Claude Design's `support.js` runtime: `<x-dc>`, `<sc-if>`,
`{{ }}` bindings, `style-hover` attributes and a `DCLogic` class. None of that
exists here. Everything it provided is reproduced natively:

| Prototype | Here |
|---|---|
| `style-hover="..."` attributes | real `:hover` rules in the stylesheet |
| `<sc-if value="{{ sent }}">` | two panels, `hidden` toggled in `main.js` |
| `{{ needConsultingBorder }}` etc. | a `.chip.is-active` class |
| `showQuoteSlot` boolean prop | `<body data-open-slots="true\|false">` |
| inline styles on every element | classes and custom properties |

Every colour, size, spacing and radius is carried across unchanged. The copy is
verbatim, including the validation messages.

## Wiring the form

The form validates and shows the thank-you state, but sends nothing. There is
one function to change, `submitEnquiry` at the top of `assets/js/main.js`. It
receives `{ need, name, email, org, msg }`. Resolve to advance the visitor to
the thank-you state; reject with an `Error` and its message shows in the error
strip. A commented example for a WordPress REST route sits directly above it.

## Open slots

Three sets of placeholders are deliberate, carried over from the design:

- **Six dashed client logo boxes** in the hero. Replace each `<div class="logo-slot">`
  with `<img class="logo-mark" src="assets/img/client-ibm.svg" alt="IBM">`. The
  class is already styled to match the slot height.
- **Client quote** and **consultant photo and bio**, in the record block.
  Set `<body data-open-slots="false">` to hide both for a client presentation.

## Additions beyond the design

Only two, both because the prototype was desktop-only:

- **A menu button below 940px.** The six nav items cannot fit one line on a
  phone. It uses existing tokens and reveals the same links.
- **Responsive rules** at 1024 / 967 / 940 / 911 / 800 / 600 / 520 / 400px.
  Each is pinned to the width at which one of the design's `auto-fit` grids
  actually reflows, so sticky columns release and dividers change orientation
  on the same frame the layout stacks.

Accessibility went in alongside: a skip link, a real `<form>` that submits on
Enter, `aria-pressed` on the topic chips, `role="alert"` on the error strip,
labelled sections, and `prefers-reduced-motion` handling.

## Verified

Checked headlessly in Chromium at 1440, 1200, 1024, 968, 966, 940, 911, 800,
600, 520 and 390px:

- no horizontal overflow at any width
- every breakpoint flips on its intended pixel
- no console or page errors
- form: all three validation messages, error clearing on input, chip selection,
  thank-you state, reset, menu open/close
- 75 computed-style checks against the prototype's inline values

One known request failure in a sandbox: the Google Fonts stylesheet, which the
prototype also loads. It resolves normally on a networked host. A `favicon.ico`
404 is expected until one is added.

## Still outstanding

Carried over from the design conversation:

1. Wire the form to your CRM or WordPress mail.
2. Supply the six client logo files.
3. Supply one named client quote, and a photo and short bio for the consultant
   who reads the enquiries.
