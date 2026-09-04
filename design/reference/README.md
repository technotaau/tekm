# Claude Design canvas export

This is the Phase 1 unblock described in `docs/04-workflow.md`, route 2:
"Export the canvas and commit the files to `design/reference/` on this branch."

Delivered by the Claude Design session, 4 September 2026. Nothing here is
approved. It is source material for the brand-strategist reconciliation memo
that Phase 1 exits on.

```
canvas/           the .dc.html artboards as exported, plus their runtime
chats/            the two design conversations that produced them
prototype-v3/     a static implementation of the v3 artboard
```

## canvas/

Five artboards, oldest to newest:

| File | What it is |
|---|---|
| `TEKMentors Home.dc.html` | v1. First rebuild, SIP sections added later |
| `TEKMentors Home v2.dc.html` | v2. Serif experiment, roster table, ruled answers |
| `TEKMentors Home v3.dc.html` | v3. Enquiry-led, form in the hero |
| `TEKMentors Home v4 (web).dc.html` | v4 web. Synthesis of v1 to v3 |
| `TEKMentors Home v4.dc.html` | v4 print. Paginated version for PDF export |

These do not open usefully in a browser on their own. They are templates for
Claude Design's runtime (`support.js`): `<x-dc>` roots, `<sc-if>` conditionals,
`{{ }}` bindings, `style-hover` attributes and a `DCLogic` class per file.
`support.js` and `doc-page.js` are that runtime, included so the artboards can
be read as intended. Do not treat either as project source.

`uploads/` holds the five screenshots the client supplied as content input.
`BUNDLE-README.md` is the export's own README.

## chats/

`chat1.md` and `chat2.md`, in order. Worth reading before the reconciliation
memo: they carry the reasoning behind the palette, the casing rules, the
decision to drop the hero slider, and two explicit client instructions that
are not visible in the artboards themselves.

## prototype-v3/

The v3 artboard rebuilt as plain HTML, CSS and vanilla JS, with the Claude
Design runtime removed. See `HANDOFF.md` at the repo root for what it is, what
it is not, and where it diverges from `design/tokens.css` and
`docs/03-homepage-spec.md`.


## export/ (added 4 September 2026)

The official Claude Design export bundle supplied by Jakhar Singh. Later
than the canvas/ copies. `HANDOFF-README.md` is the value-level spec;
`TEKMentors Homepage.dc.html` is the final v4 and the design of record;
the two `(share).html` files open offline with fonts and logo inlined.
Duplicate files (v1, v2, v4 print, runtime, logo) were not copied again.

## previews/

Chromium renders of every version, produced in this repo after stripping
the Claude Design runtime, plus static HTML versions of the artboards that
open without it. `v4-final-export-desktop.jpg` is the current design of
record.
