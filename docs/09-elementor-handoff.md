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

## 3. Section map (final, 5 September 2026)

Every section is an Elementor Pro container. Padding top clamp(48px, 7vw,
88px) is entered as 88 / 64 / 48 for desktop / tablet / mobile, bottom 24px.
Gutters 32 / 24 / 18. Column gaps 20px between cards. Grids use explicit
column counts per breakpoint (Elementor's responsive column settings), never
auto-fit. The prototype is the reference for every value.

| # | Section | Elementor build |
|---|---|---|
| 0 | Promise bar | Container #061B2B, 10px padding. Text Editor left with an Icon List dot; Text Editor right with tel and mailto links in the Accent font, hidden on mobile. HTML attribute role="region", aria-label "Response promise and contact" |
| 1 | Header | Astra header builder or Elementor Pro Header template: Site Logo 46px (36 mobile), Nav Menu with six items (Programs with a "NEW" pill via a menu item class, Consulting, Case studies, How we work to #consulting, Answers, Insights), Button "Talk to us" #10222E. Mobile: full-screen Nav Menu, hamburger "Menu", phone icon link |
| 2 | Hero | Container with a background image (hero-1-wide, 900px variant for mobile via Elementor's responsive background) and two gradient overlays (values in the prototype CSS), min-height min(100vh minus 114px, 680px) on desktop, auto on mobile with 88px top padding. Text Editor eyebrow (Accent font, green #8CCB72), Heading h1 with the second line in a span coloured #8CCB72 (clamp 36 to 60px, weight 800, max-width 16ch), Text Editor subhead, two Buttons, then a one-line outcome row (Accent label, 26px number, caption, link to #proof). Below, inside the same navy section: "Start where it hurts" as a Container of five Button widgets styled as pills (horizontal scroll on mobile via custom CSS overflow-x auto and scroll-snap), then a four-column facts strip (label over value). No slider anywhere |
| 3 | Client strip | Container #EEF2F5, 24px padding, bottom border. Heading h2 in Accent style, then nine Image widgets in a flex row, grayscale 100%, opacity 60%, heights 26 to 34px, lazy. Files are in the media library under 2025/03 |
| 4 | Three ways | Heading eyebrow "WHAT WE DO", h2, lead. Three Container links (3 columns desktop, 1 mobile), each 4:3 with a background image (way-1-modernize, way-2-production, way-3-train), a bottom gradient overlay, h3 white 24px, one line, green label with arrow. Hover: label white. Links to #consulting, #consulting, #programs |
| 5 | FDE spotlight | Container #07253C with the radial glow, id fde. Two columns (photo 5:4 spotlight-fde with 14px radius left, text right; stacked on tablet with the photo first). Green pill "FLAGSHIP PROGRAM" (Accent), h2, lead, three facts (26px value over caption, top rule), "WHAT YOU BUILD" and a three-item ordered list, Buttons "Ask about the next cohort" (#contact, presets the "Joining a program" chip) and "All programs" (#programs) |
| 6 | Programs | Heading eyebrow "AI PROGRAMS", h2 "Three more programs, with the details you would ask for anyway.", right-aligned side note. Three rows, each a Container: at 1100 and up a grid of 200px photo / text / 230px stacked meta (label over value) / 150px button; 640 to 1099 a 160px photo beside the text with the meta in a row of three beneath; below 640 stacked with a 16:9 photo and the "What you build" list behind a toggle (Elementor Toggle widget). Then the "Also running" text links |
| 7 | Consulting | Two-column head (eyebrow and h2 left; two point-of-view paragraphs right). Before and after diagram: two Containers side by side (stack below 800), Before white with five dashed rust boxes, After navy with five numbered green boxes joined by 12px vertical lines. Under it one row: the line "Seven questions to ask before your pilot goes live.", a tint Button "Get the one-pager" (#contact, presets "A project or system" and a prefilled message via query string), and a primary Button "Talk to a consultant" (#contact) |
| 8 | Outcomes and mentors | Two columns from 960 (photo 5:4 outcomes-room left; white card right), stacked below with the photo first. Card: Accent eyebrow, h2 "A large UK bank: backlog to production from six months to 90 days.", Accent source line, four stats each as Accent "from" line, big result (clamp 30 to 42px, weight 800), caption; link "Read the case study". Rule, "Who is in the room" h2 in Accent style, one line, three mentors each with a 56px initials disc (#EAF4FB, #175F91 mono) and name, title, credential line. No Counter widget anywhere |
| 9 | Straight answers | Heading eyebrow, h2, intro. Four items in two columns from 700 (one below), each a top-ruled Container with h3 and answer; on mobile an Elementor Accordion with the first item open. FAQPage schema carries the same four |
| 10 | Contact | Container with background image contact-bg under a navy overlay (86% to 92%) plus the radial glow, 88px padding, two columns at 960 (stacked below). Left: Accent eyebrow, h2, intro, four timeline rows, contact links. Right: the Forminator form in a white Container, 14px radius, shadow, max 500px. Section 4 below |
| 11 | Insights | Heading h2 with a right-aligned link and the intro line. Posts widget or Loop Grid: three latest posts as cards, 16:10 featured image, category in Accent style, title 18px 600, arrow. 3 columns at 960, 1 below |
| 12 | Footer | Astra footer builder or Elementor Pro Footer template on #061B2B: five columns at 1100 (logo on a white plate, tagline, legal name, address; Company; Programs; Consulting with the five service links; Reach us), 3 at 800, 2 at 640, 1 below. Bottom bar with copyright and site URL. Text #A7BDCB, links white 80% |
| Sticky bar | Fixed Container on mobile only, bottom 0, two Buttons "Programs" and "Talk to us" at 44px, safe-area padding, aria-label "Quick links"; body padding-bottom 64px on mobile; shown after the facts strip scrolls out and hidden while the form is in view (script in prototype/main.js) |

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
