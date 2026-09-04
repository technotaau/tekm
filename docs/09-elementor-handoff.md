# 09. Elementor handoff: building the homepage on tekmentors.com

Prepared by TechnoTaau Team, Design Lead, 4 September 2026. Contact:
Jakhar Singh.

The acceptance reference is the prototype:
https://claude.ai/code/artifact/0d729478-15a7-4c98-8694-4aa0670810cd
(source in `prototype/`, copy in `prototype/copy.md`, values in
`design/tokens.css`). The live build is done when it matches the prototype
at 360, 640, 960, 1280 and 1480 within normal rendering tolerance, passes the
acceptance checklist in `docs/03-homepage-spec.md`, and carries the tracking
in `docs/08-tracking-plan.md`.

Stack on the live site, detected 4 September: WordPress, Astra, Elementor
and Elementor Pro, ElementsKit Lite, Prime Slider Lite, Forminator, Popup
Maker, Rank Math. Prime Slider and Popup Maker are not used by this page.

## 1. Week-one fixes (no client inputs needed)

From the 1 September proposal, do these before touching layout:

1. Remove every "0+" counter and placeholder block on the homepage.
2. Retire the current hero line "We build enterprise-grade AI solutions" on
   every page. It is the Publicis Sapient hero with one word moved.
3. Replace the homepage meta description (currently a chatbot prompt) with
   the one in `prototype/seo.md`.
4. Fix index rules so program and service pages are indexable; submit the
   sitemap in Search Console.
5. Install one GTM container with GA4, per `docs/08-tracking-plan.md`.
6. Rank Math: set the site type to Organization and switch the homepage
   Article schema off, so the page carries exactly one Organization and one
   WebSite node. See `prototype/seo.md` section 6.

## 2. Astra global settings

Customizer, Global.

| Setting | Value |
|---|---|
| Container width | 1480px (Layout, Container). Content boxed, 0 padding on sections; Elementor sections carry their own padding |
| Body font | Schibsted Grotesk, 400, 15.5px, line height 1.6 |
| Headings font | Schibsted Grotesk, 700 |
| H1 | clamp not available in the customizer: set 64px desktop, 48px tablet, 38px mobile, line height 1.05, letter spacing -0.028em |
| H2 | 46 / 38 / 30px, line height 1.08, letter spacing -0.025em |
| H3 | 21px, 700 |
| Global color 1 (theme) | #1873B3 |
| Global color 2 (accent) | #4FA8E4 |
| Global color 3 (heading) | #10222E |
| Global color 4 (text) | #4C5C69 |
| Global color 5 (link hover) | #10222E |
| Global color 6 (border) | #DCE5EB |
| Global color 7 (surface) | #FFFFFF |
| Global color 8 (background) | #F5F8FA |
| Global color 9 (navy) | #07253C |

Elementor, Site Settings, Global Colors: mirror the same nine, plus
#0B2F47 navy 2, #061B2B navy 3, #8CCB72 green on dark, #35702B green text,
#175F91 blue deep, #EAF4FB blue tint, #CFE4F3 blue tint border, #617486
muted, #A7BDCB text on dark, #B3C6D3 hero subhead, #B4472F rust, #FCF7F5
rust tint, #DCC3B9 rust border. Global Fonts: Primary Schibsted Grotesk,
Secondary Schibsted Grotesk 400, Text Schibsted Grotesk, Accent Spline Sans
Mono 400 uppercase letter spacing 0.12em.

Fonts: Elementor loads Google Fonts on demand. Add Spline Sans Mono and
Schibsted Grotesk once through Elementor, then remove the Lexend Deca
enqueue from Astra so only two families load. Consider self-hosting both
later for performance.

Sticky header: Astra's sticky header or Elementor Pro's motion effects,
background #F5F8FA at 94% with backdrop blur (custom CSS: one rule), bottom
border 1px #DCE5EB, height 74px.

## 3. Section map

Every section is an Elementor Pro container. Padding top clamp(48px, 7vw,
88px) is entered as 88 / 64 / 48 for desktop / tablet / mobile, bottom 24px.
Gutters 32 / 24 / 18. Column gaps 20px between cards.

| # | Section | Elementor build |
|---|---|---|
| 0 | Promise bar | Container, background #061B2B, 10px padding. Text Editor left with an Icon List dot; Text Editor right with tel and mailto links in the Accent font. Hide the right column on mobile. Custom CSS adds role="region" via the container's HTML attribute field, aria-label "Response promise and contact" |
| 1 | Header | Astra header builder or Elementor Pro Header template: Site Logo 46px (36 on mobile), Nav Menu with six items (Programs with a "NEW" pill via a menu item CSS class and a ::after rule, Consulting, Case studies, How we work, Answers, Insights), Button "Talk to us" #10222E. Mobile: Elementor Nav Menu in full-screen mode, hamburger labelled "Menu", phone icon link beside it |
| 2 | Hero | Container #07253C with two background gradient overlays (radial, values in `design/tokens.css` comments and the export README). Two columns 7/5 that stack on tablet. Left: Text Editor eyebrow (Accent font, #9CD0F2), Heading h1, Text Editor subhead (19px, #B3C6D3, max 580px), two Buttons (primary #4FA8E4 with #07253C text, ghost with 32% white border). Right: Container with 5% white fill, 14% white border, 14px radius, blur; heading "Start where it hurts" as an h2 in the Accent style; Icon List with five links, each row bordered, arrow glyph on the right. Below: a four-column Container, top border, four Text Editors (30px figure, 13.5px caption). Entrance animation: fade in up, 0.7s, on the hero grid only |
| 3 | Client strip | Container #EEF2F5, 24px padding, bottom border. Heading "Teams we have worked with" as h2 in Accent style, then an Image Carousel is not used: use a Basic Gallery or nine Image widgets in a flex row, grayscale filter 100%, opacity 60%, heights 26 to 34px, lazy loaded. Files are already in the media library under 2025/03 |
| 4 | Who writes to us | Heading eyebrow and h2, then three Containers as cards (white, 1px #DCE5EB, 14px radius, 32/30 padding): Text Editor index, Heading h3, Text Editor body, Text Editor "First step" with a top border, Button (tint style #EAF4FB fill, #175F91 text, #CFE4F3 border, hover solid #1873B3) |
| 5 | Programs roster | Heading eyebrow and h2 with a right-aligned Text Editor side note. The roster is one Container per row with a five-column inner grid (2.1fr 1.3fr 0.8fr 0.9fr 116px). Row 1 is #07253C with white text. Each row: Accent label, Heading h3, Text Editor body, Icon List "What you build" (three numbered items), then three Text Editor cells (who, length, format), then a Button. Header row of Accent labels above, hidden on mobile. On mobile each row stacks: title, body, builds, then a three-cell meta row, then a full-width button. A semantic table is preferable if the build uses a table plugin; otherwise the container grid with headings is acceptable. Below: the "Also running" Text Editor with three links |
| 6 | Consulting | Heading eyebrow, h2, intro. Two Containers side by side (stack below 800px): Before card white with five inner Containers (dashed #DCC3B9 border, #FCF7F5 fill, 10px radius); After card #07253C with five numbered Containers joined by 12px vertical 1px lines (a 1px Spacer with a background). Then "Five practices, one bench" as an h3 in Accent style and five link rows: each a Container link with three columns (index, title and caption, arrow), 22px padding, bottom border, hover color #1873B3 |
| 7 | How an engagement runs | Heading eyebrow and h2, then a four-column Container with 1px gaps over a #DCE5EB background, 14px radius, overflow hidden; three white cells and one #07253C. Each cell: Accent label, h3, Text Editor, bottom-anchored deliverable line with a top border |
| 8 | Straight answers | Heading eyebrow, h2, intro. Two-column grid of six Containers, each with a top border (first 1.5px #10222E), h3 question, Text Editor answer. Do not use an accordion: the answers are read as a page and the FAQPage schema is emitted separately by Rank Math or a Custom HTML widget with the JSON in `prototype/schema/faqpage.json` |
| 9 | Outcomes and mentor bench | White Container card, 1px border, 14px radius, 38/36 padding. Accent eyebrow, h2 "A large UK bank: backlog to production from six months to 90 days.", Accent source line, four Text Editors as stats (42px, 800, tabular numerals via custom CSS font-variant-numeric), link "Read the case study". Rule, then "Who is in the room" h2 in Accent style, one-line intro, three Containers with h3 name and two Text Editor lines. No Counter widget anywhere; numbers are static text |
| 10 | Insights | Heading h2 with a right-aligned link. Posts widget (Elementor Pro) in a custom skin or a Loop Grid: three latest posts, showing category in the Accent style, title, author and date. Rows with a top border 1px #10222E and bottom borders, 22px padding, hover #1873B3 |
| 11 | Contact | Container #07253C with a radial glow, 88px padding, two columns that stack below 800px. Left: Accent eyebrow #8CCB72, h2, intro, four timeline rows (Container each: Accent stage label, Heading 16.5px 600, Text Editor caption, 14% white top border), contact links row. Right: the Forminator form inside a white Container, 14px radius, shadow, max 500px, centred when stacked. See section 4 |
| 12 | Footer | Astra footer builder or an Elementor Pro Footer template: four columns (logo and tagline and legal name and address; Company links; Programs links; Reach us). Bottom bar with copyright and site URL |
| Sticky bar | A fixed Container shown only on mobile (Elementor responsive visibility), bottom 0, two Buttons "Programs" and "Talk to us" at 44px height, safe-area padding, `aria-label="Quick links"`. Add body padding-bottom 64px on mobile. Show after the hero with a small script (IntersectionObserver on the hero and on the form; `prototype/main.js` has the exact logic to copy), hide while the form is in view |

## 4. Forminator form

Form name "Homepage enquiry". Fields in order:

1. Radio styled as chips, label "What is this about?", options: A project or
   system (default), Training my team, Joining a program, Not sure yet.
   Field name `need`.
2. Name, label "Your name", placeholder "Priya Nair", required.
3. Email, label "Work email", placeholder "priya@company.com", required.
4. Text, label "Company (optional)", placeholder "Where you work".
5. Textarea, label "What is stuck?", placeholder "One or two lines is plenty.
   Plain language beats a spec.", required, three rows.
6. Hidden `audience` set from the chip, hidden `form_id` = homepage_enquiry,
   hidden `page_path`.

Settings:

- Validation on submit only (Forminator: turn off inline validation).
  Messages exactly: "We need a name to reply to." / "That email does not
  look right. Check it and send again." / "A line or two about what is stuck
  helps us route this properly."
- Submit button "Send it to the team", processing text "Sending".
- Spam: Forminator honeypot on; no visible CAPTCHA; add the timestamp check
  with a hidden field if the plugin version supports it.
- Routing: conditional email notifications by `need`: chips 1 and 4 to the
  consulting inbox, chips 2 and 3 to the programs inbox [INPUT: addresses].
- Autoresponder: off, or a plain message that does not pretend to be the
  promised human reply.
- Success: inline message replacing the form: "Got it. Thank you." plus the
  reply promise and the three "while you wait" links, as in `copy.md`.
- Failure: inline message naming the email address as fallback.
- Consent line under the button, as in `copy.md`, with the WhatsApp
  sentence added only if WhatsApp follow-up is used.
- Preset from program buttons: append `?need=program` or `?need=team` to
  the anchor and read it in a small script to preselect the chip.
  `prototype/main.js` uses a data attribute; the query approach works the
  same on WordPress.

## 5. Tracking

Follow `docs/08-tracking-plan.md`. In practice: one GTM container; a
dataLayer push on every CTA via GTM click triggers keyed on the `data-cta`
attributes (add them in Elementor's Attributes field on each button and
link); the Forminator success event `forminator:form:submit:success` mapped
to `enquiry_submit` with `need`; tel and mailto click triggers; a scroll
trigger at the outcomes section for `section_view`. Mark `enquiry_submit`,
`program_enquire`, `phone_tap` and `email_tap` as key events in GA4.

## 6. Structured data

Paste `prototype/schema/organization.json`, `website.json` and
`faqpage.json` into a single Custom HTML widget in the footer template, or
configure Rank Math to emit Organization and WebSite and use the widget for
FAQPage only. After Rank Math is reconfigured, run Google's Rich Results test
on the live homepage and confirm exactly one Organization, one WebSite and
one FAQPage.

## 7. Inputs still open before launch

From `docs/02-content-inventory.md`, the items that change what renders:

1. Batch dates and fees for the four programs (rows show the side note until
   then).
2. Mentor headshots, LinkedIn URLs and permission (bench is text only until
   then).
3. Written confirmation for the nine client logos (else the sector line).
4. Confirmation or softening of the four service promises (one working day,
   45 minute session, one page recommendation, NDA on request). The
   prototype shows the client-reviewed wording; `copy.md` gives the softer
   wording for each.
5. Lead phone line and inbox; the two routing inboxes.
6. How placement assistance is delivered.
7. A vector or 2x logo.
8. Program page URLs for the Syllabus, For your team and Also running links.

## 8. Acceptance

Build is accepted when, on the live URL:

- Side-by-side screenshots at 360, 640, 960, 1280 and 1480 match the
  prototype's section order, spacing and type within normal tolerance.
- No horizontal scroll at any width; sticky bar behaves as in the prototype.
- Lighthouse mobile 90 or above in all four categories on the live domain.
- axe reports zero serious or critical issues; one h1; keyboard-only pass.
- Every CTA fires its planned event in GTM preview; a test enquiry arrives
  in the right inbox with the chip value.
- Rich Results test shows the three schema types and no errors.
- No "0+" counter, no dashed placeholder, no phrase from the do-not-publish
  list anywhere on the page.
