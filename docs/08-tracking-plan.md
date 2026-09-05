# 08. Tracking plan: GA4 events for the homepage

Owner: seo-schema. Prepared for TechnoTaau Team (Jakhar Singh) on
4 September 2026. Companion to `docs/03-homepage-spec.md` (page-level
section) and `prototype/seo.md` (section ids). This plan covers every CTA
and interactive element on the homepage, sections 0 to 12 plus the sticky
mobile bar, the `dataLayer` event and parameters each one pushes, and the
GA4 key events they roll up to. It is the acceptance list for "every CTA
fires its GA4 event in the prototype console".

## 1. Principles

- One path into GA4: Google Tag Manager. No second gtag snippet from Rank
  Math, Site Kit or Astra. The live site has no GTM or GA4 tag today, so
  there is nothing to remove yet, only something not to add twice.
- Event names are the ones in the spec, plus the additions in section 3.
  All names and parameter keys are snake_case, values are lowercase slugs.
- No personal data ever enters the `dataLayer`: not the name, email,
  company or message from the form, and no phone number beyond the fact
  that a link was tapped. The consent line under the form ("your details
  go to our consultants and nowhere else") is a promise this plan keeps.
- Key events (GA4's term for conversions) are the ones that mean a lead
  reached TEKMentors: the form, the phone, WhatsApp, email and, once it
  ships, the brochure. Everything else is engagement and is never marked
  as a key event, so the conversion reports are not inflated.
- The prototype and the WordPress build use the same convention: a
  `data-event` attribute on the element and one delegated click listener.
  The build swaps the listener for a GTM trigger and nothing else changes.

## 2. Implementation convention

Markup. Parameter keys use underscores in the attribute name so that
`element.dataset` returns them unchanged:

```html
<a href="#form" data-event="program_enquire" data-program="fde"
   data-need="join_program">Enquire</a>
<a href="tel:+919958777467" data-event="phone_tap" data-location="footer">
   +91 99587 77467</a>
```

Listener, in the prototype's one JavaScript file:

```js
window.dataLayer = window.dataLayer || [];
function track(payload) {
  window.dataLayer.push(payload);
  console.log('dataLayer', payload); // prototype only, removed in the build
}
document.addEventListener('click', function (e) {
  var el = e.target.closest('[data-event]');
  if (!el) return;
  var p = { event: el.dataset.event };
  Object.keys(el.dataset).forEach(function (k) {
    if (k !== 'event') p[k] = el.dataset[k];
  });
  if (!p.cta_text) p.cta_text = el.textContent.trim().slice(0, 60);
  if (!p.link_url && el.getAttribute('href')) p.link_url = el.getAttribute('href');
  track(p);
});
```

Section views use an `IntersectionObserver` at threshold 0.5, firing once
per section per page load:

```js
var seen = {};
new IntersectionObserver(function (entries) {
  entries.forEach(function (en) {
    if (en.isIntersecting && !seen[en.target.id]) {
      seen[en.target.id] = true;
      track({ event: 'section_view', section: en.target.id });
    }
  });
}, { threshold: 0.5 }).observe(/* each of #who #programs #consulting #how #answers #proof #insights #contact */);
```

Form events are pushed from the form script itself (section 4, rows for
section 11), not from click attributes, because they depend on state.

## 3. Event dictionary

| Event | Fires when | Parameters | Key event |
|---|---|---|---|
| `section_view` | A tracked section is 50% visible, once per page load | `section` | no |
| `route_click` | A row in the hero routing card is clicked | `route`, `link_url`, `cta_text` | no |
| `cta_click` | A generic call to action that is not a program, persona or service link: header and menu "Talk to us", the two hero buttons, both sticky bar buttons | `cta_id`, `location`, `link_url`, `cta_text` | no |
| `persona_click` | A "Who writes to us" card button | `persona`, `link_url`, `cta_text` | no |
| `program_click` | A link that leaves the page for a program page: "Syllabus", "For your team", the three "Also running" links, footer program links | `program`, `location`, `link_url`, `cta_text` | no |
| `program_enquire` | A program button that anchors to the form and presets the need chip: "Enquire", "Book" | `program`, `need`, `cta_text` | no |
| `service_click` | One of the five practice rows | `service`, `link_url`, `cta_text` | no |
| `case_study_click` | Any link to the case studies page or the UK bank case | `case_study`, `location`, `link_url` | no |
| `nav_click` | Header, menu or footer navigation links not covered by a more specific event | `location`, `link_url`, `cta_text` | no |
| `menu_open` | The mobile menu sheet opens | none | no |
| `insight_click` | A post row or "Everything on the blog" | `position` (1, 2, 3 or all), `link_url`, `cta_text` | no |
| `social_click` | A LinkedIn (or other network) profile link, company or mentor | `network`, `location`, `link_url` | no |
| `enquiry_start` | First input in any form field, once per page load | `need` (chip selected at that moment) | no |
| `enquiry_need_select` | A need chip is chosen | `need` | no |
| `enquiry_error` | Client validation fails on submit, or the server rejects | `error_field` (name, email, message, server) | no |
| `enquiry_submit` | The form reaches its sent state. In WordPress only after Forminator confirms success | `need`, `audience`, `form_id`, `program` (only when preset by `program_enquire`) | yes, primary |
| `post_submit_click` | One of the three "while you wait" links or "Send another enquiry" in the sent state | `link_url`, `cta_text` | no |
| `phone_tap` | Any `tel:` link | `location` | yes |
| `email_tap` | Any `mailto:` link | `location` | yes |
| `whatsapp_tap` | Any `wa.me` or `api.whatsapp.com` link. Reserved: no WhatsApp link is on the page until the client decides on WhatsApp follow-up (spec section 11 input) | `location` | yes |
| `brochure_download` | The lead-magnet slot's link, once a brochure or guide ships (inventory input 11). Reserved | `asset`, `program` | yes |

Parameter values.

| Parameter | Allowed values |
|---|---|
| `section` | who, programs, consulting, how, answers, proof, insights, contact |
| `route` | pilot, cloud_spend, engineers_to_ai, agile_slow, graduate_job |
| `cta_id` | header_talk, menu_talk, hero_talk, hero_programs, sticky_programs, sticky_talk |
| `persona` | leaders, ld_heads, engineers |
| `program` | fde, genai, leaders, teams, fullstack, devops, adobe |
| `service` | cloud_devops, strategy, agile, analytics, upskilling |
| `case_study` | uk_bank_devops, all |
| `need` | project, training_team, join_program, not_sure (the four chips, in order) |
| `audience` | corporate (need is project or training_team), professional (join_program), unknown (not_sure) |
| `location` | promise_bar, header, menu, hero, programs, proof, contact, sent_state, footer, sticky_bar |
| `network` | linkedin (others only when a URL is verified) |
| `form_id` | homepage_enquiry |
| `error_field` | name, email, message, server |

`audience` is derived from `need` at push time so the brief's split
("I am a professional" against "I represent a company") is a one-line
report rather than a calculation.

## 4. Element map, section by section

| # | Element | Event | Parameters |
|---|---|---|---|
| 0 | Promise bar phone (desktop only) | `phone_tap` | location: promise_bar |
| 0 | Promise bar email (desktop only) | `email_tap` | location: promise_bar |
| 1 | Header logo | none | |
| 1 | Header links: Programs, Consulting, How we work, Answers, Insights | `nav_click` | location: header |
| 1 | Header link: Case studies | `case_study_click` | case_study: all, location: header |
| 1 | Header button "Talk to us" | `cta_click` | cta_id: header_talk, location: header |
| 1 | Header phone icon (below 940px) | `phone_tap` | location: header |
| 1 | Menu button | `menu_open` | |
| 1 | Menu sheet links (five) | `nav_click` | location: menu |
| 1 | Menu "Talk to us" | `cta_click` | cta_id: menu_talk, location: menu |
| 1 | Menu phone, email | `phone_tap`, `email_tap` | location: menu |
| 2 | Hero "Talk to a consultant" | `cta_click` | cta_id: hero_talk, location: hero |
| 2 | Hero "See the AI programs" | `cta_click` | cta_id: hero_programs, location: hero |
| 2 | Routing row "A pilot that works but will not go live" | `route_click` | route: pilot |
| 2 | Routing row "Cloud spend nobody can explain" | `route_click` | route: cloud_spend |
| 2 | Routing row "Engineers who need to become AI engineers" | `route_click` | route: engineers_to_ai |
| 2 | Routing row "Agile on paper, slow in practice" | `route_click` | route: agile_slow |
| 2 | Routing row "A graduate who wants the AI job, not the course" | `route_click` | route: graduate_job |
| 2 | Facts row | none | static |
| 3 | Client logos | none | not links |
| 4 | Section reaches 50% | `section_view` | section: who |
| 4 | Card 01 "Consulting" | `persona_click` | persona: leaders |
| 4 | Card 02 "Team programs" | `persona_click` | persona: ld_heads |
| 4 | Card 03 "Individual programs" | `persona_click` | persona: engineers |
| 5 | Section reaches 50% | `section_view` | section: programs |
| 5 | Row 1 "Enquire" (to #form, presets Joining a program) | `program_enquire` | program: fde, need: join_program |
| 5 | Row 2 "Syllabus" (to the program page) | `program_click` | program: genai, location: programs |
| 5 | Row 3 "Book" (to #form, presets Training my team) | `program_enquire` | program: leaders, need: training_team |
| 5 | Row 4 "For your team" (to the corporate training page) | `program_click` | program: teams, location: programs |
| 5 | "Also running" links: Full stack architect, DevOps engineer, Adobe toolset | `program_click` | program: fullstack, devops, adobe; location: programs |
| 6 | Section reaches 50% | `section_view` | section: consulting |
| 6 | Practice row 1 Cloud and DevOps | `service_click` | service: cloud_devops |
| 6 | Practice row 2 Transformation and tech strategy | `service_click` | service: strategy |
| 6 | Practice row 3 Agile transformation | `service_click` | service: agile |
| 6 | Practice row 4 Data and web analytics | `service_click` | service: analytics |
| 6 | Practice row 5 Upskilling (to #programs) | `service_click` | service: upskilling |
| 7 | Section reaches 50% | `section_view` | section: how |
| 7 | Four phase cells | none | not links |
| 8 | Section reaches 50% | `section_view` | section: answers |
| 8 | Six answers | none | static text, no accordion |
| 9 | Section reaches 50% | `section_view` | section: proof (this is the brief's "scroll depth to the proof section") |
| 9 | "Read the case study" | `case_study_click` | case_study: uk_bank_devops, location: proof |
| 9 | Mentor LinkedIn links (when permission lands) | `social_click` | network: linkedin, location: proof |
| 10 | Section reaches 50% | `section_view` | section: insights |
| 10 | Post rows 1 to 3 | `insight_click` | position: 1, 2, 3 |
| 10 | "Everything on the blog" | `insight_click` | position: all |
| 11 | Section reaches 50% | `section_view` | section: contact |
| 11 | Phone, email links under the timeline | `phone_tap`, `email_tap` | location: contact |
| 11 | LinkedIn link under the timeline | `social_click` | network: linkedin, location: contact |
| 11 | Need chip chosen | `enquiry_need_select` | need |
| 11 | First keystroke in any field | `enquiry_start` | need |
| 11 | Validation or server failure | `enquiry_error` | error_field |
| 11 | "Send it to the team", success | `enquiry_submit` | need, audience, form_id: homepage_enquiry, program if preset |
| 11 | Sent state: "Look at the programs", "Read the straight answers" | `post_submit_click` | link_url |
| 11 | Sent state: "Browse the case studies" | `case_study_click` | case_study: all, location: sent_state |
| 11 | Sent state: "Send another enquiry" | `post_submit_click` | cta_text |
| 12 | Company links: About us, Case studies, Blog, Terms of use | `nav_click` (Case studies is `case_study_click`) | location: footer |
| 12 | Program links (four) | `program_click` | program slug, location: footer |
| 12 | Reach us: phone, email | `phone_tap`, `email_tap` | location: footer |
| 12 | Reach us: LinkedIn | `social_click` | network: linkedin, location: footer |
| 12 | Reach us: X | omitted until the handle is confirmed | |
| Sticky bar | "Programs" (to #programs) | `cta_click` | cta_id: sticky_programs, location: sticky_bar |
| Sticky bar | "Talk to us" (to #form) | `cta_click` | cta_id: sticky_talk, location: sticky_bar |
| Slot | Lead magnet link, when it ships | `brochure_download` | asset, program |

Every `tel:` and `mailto:` link on the page appears above; if the build
adds another, it inherits the same event with its own `location`.

## 5. GA4 key events and how they map to the brief

Mark these as key events in GA4 admin. Counting method in brackets.

| Key event | Counts | Why |
|---|---|---|
| `enquiry_submit` (once per event) | A completed enquiry. Split by `need` and `audience` | The primary conversion. The brief's "enquiry form completions, split by professional vs company" |
| `phone_tap` (once per session) | A phone tap, mostly on mobile | The brief's "phone tap-throughs on mobile"; report with device category |
| `whatsapp_tap` (once per session) | Reserved | The brief names WhatsApp; the event exists so the report does not change when the link is added |
| `email_tap` (once per session) | An email tap | Secondary; some decision makers prefer it |
| `brochure_download` (once per event) | Reserved | The brief's "brochure download conversions" |

How each homepage metric in the brief is read.

| Brief metric | Report |
|---|---|
| Program card click-through rate | Users with `program_click` or `program_enquire` divided by users with `section_view` where section = programs |
| Brochure download conversions | `brochure_download` key event, by `asset` |
| Enquiry completions by audience | `enquiry_submit` by `audience`, then by `need` |
| Phone and WhatsApp tap-throughs on mobile | `phone_tap` plus `whatsapp_tap`, device category = mobile, by `location` |
| Scroll depth to the proof section | Users with `section_view` where section = proof divided by users with `page_view` for the homepage |
| Corporate enquiries (90-day target 3 to 5) | `enquiry_submit` where audience = corporate. Phone taps cannot be attributed to an audience and are reported beside it, not added to it |
| Qualified leads (80 to 100) | All key events, deduplicated by user, then qualified in the CRM, not in GA4 |

Register these event-scoped custom dimensions in GA4 admin, otherwise the
parameters are collected but cannot be reported: `need`, `audience`,
`section`, `program`, `route`, `persona`, `service`, `case_study`,
`cta_id`, `location`, `position`, `network`, `error_field`. Thirteen of
the fifty allowed. `link_url` and `cta_text` are for debugging and are not
registered.

## 6. What the WordPress and Elementor build needs

1. Accounts and ids [INPUT]. A GA4 property owned by TEKMentors' Google
   account with TechnoTaau Team as editor, its measurement id, and a GTM
   web container id. The proposal's week-one task "install GA4 with
   conversion tracking on every form" is this container.
2. GTM installed once. Astra's custom layout hooks or Elementor's custom
   code (site settings, custom code, head) carry the container snippet.
   Rank Math's Analytics module and any Site Kit tag are left off so GA4
   is not loaded twice.
3. GA4 configuration tag in GTM. Enhanced measurement: keep page views,
   outbound clicks and file downloads; turn off form interactions
   (Forminator's AJAX submit makes the automatic `form_submit` unreliable
   and it would double count `enquiry_submit`); the 90% scroll event can
   stay but is not used, `section_view` replaces it.
4. Section ids. Each Elementor container gets the CSS id from
   `prototype/seo.md` section 3: who, programs, consulting, how, answers,
   proof, insights, contact, form, and the program row ids.
5. Data attributes on CTAs. Elementor Pro's custom attributes field on a
   button or link takes `data-event|program_enquire` and
   `data-program|fde`, one per line. One GTM click trigger on
   `[data-event]` and one custom JavaScript variable that reads the
   element's `dataset` reproduce the prototype listener exactly, so the
   element map in section 4 is the build checklist.
6. `tel:` and `mailto:` clicks. Two GTM "click, just links" triggers:
   click URL starts with `tel:` fires `phone_tap`, starts with `mailto:`
   fires `email_tap`, contains `wa.me` or `api.whatsapp.com` fires
   `whatsapp_tap`. `location` comes from the same `data-location`
   attribute. The promise bar, header phone icon, menu sheet, contact
   section and footer all carry one.
7. Scroll depth to the proof section and the other sections. One GTM
   element visibility trigger, CSS selector
   `#who, #programs, #consulting, #how, #answers, #proof, #insights, #contact`,
   minimum 50% visible, fire once per element, pushing `section_view`
   with `section` = the element id.
8. Forminator. Build the need chips as a Forminator single-choice (radio)
   field with the four slug values, styled as chips in CSS, rather than
   buttons writing to a hidden field: the value then travels with the
   submission, drives Forminator's conditional email routing (consulting
   enquiries to the consulting inbox, training to the programs inbox,
   inventory input 7) and needs no custom JavaScript. If the visual chips
   must be buttons, they set a Forminator hidden field named `need` and
   the same routing applies. `program_enquire` presets the radio through
   the URL fragment or a small script; either way the visible chip and the
   submitted value are the same field.
9. Forminator submit hook. With AJAX submission on, Forminator triggers a
   jQuery event on success, `forminator:form:submit:success`, with the
   form id. A GTM custom HTML tag listens for it, reads the checked need
   value and pushes `enquiry_submit` with `need`, `audience` and
   `form_id`. Verify the event name against the installed Forminator
   version in the browser console before relying on it; if it has changed,
   the fallback is Forminator's own "after submit" behaviour set to show
   the inline success message plus a mutation observer on the success
   element. Do not use a thank-you page redirect: the spec keeps the sent
   state inline.
10. Server-side rules from the spec, restated because they affect the
    numbers: honeypot plus timestamp check (Forminator's spam protection
    settings), server-side validation mirroring the client rules, no
    autoresponder that pretends to be the promised human reply. A rejected
    submission pushes `enquiry_error` with `error_field: server` and does
    not push `enquiry_submit`.
11. Sticky bar. An Elementor container fixed to the bottom, hidden from
    940px up, two buttons with `data-event="cta_click"` and the sticky
    `cta_id` values. It anchors to `#programs` and `#form`, never to a
    phone modal.
12. Insights rows come from the WordPress posts query; the position
    attribute is set by the loop index.
13. Optional, when the marketing side supplies ids [INPUT]: a Meta pixel
    Lead event and a LinkedIn Insight Tag conversion, both fired by GTM on
    `enquiry_submit`, so paid and organic social report the same lead.
14. Campaign links from LinkedIn, Meta and YouTube posts carry
    `utm_source`, `utm_medium=social` and `utm_campaign`, otherwise the
    channel split in the 90-day report is guesswork.
15. Privacy. Analytics data is separate from the form data the consent
    line describes; the plan keeps form contents out of GA4 entirely. Ask
    TEKMentors whether they want a cookie notice for analytics under the
    DPDP Act; the plan works with or without one, and GTM consent mode can
    gate the GA4 tag if they do.

## 7. QA before Gate 3

- Prototype: open the console, click every row in section 4, confirm
  the push and its parameters. Submit the form with a bad email and
  confirm `enquiry_error`, then a good one and confirm `enquiry_submit`
  carries `need` and `audience`. Scroll to the proof card and confirm
  `section_view` with `section: proof` fires once.
- Build: GTM preview and GA4 DebugView on a phone at 360px and on
  desktop, same list. Confirm no personal data in any event, and that
  `enquiry_submit` fires once per successful submission and never on a
  rejected one.
- Both: every `tel:`, `mailto:` and social link has a `location`.

## 8. Inputs still needed

| Item | Blocks |
|---|---|
| GA4 property, measurement id, GTM container id (owned by TEKMentors) | Everything in section 6 |
| Which inbox receives consulting and which receives program enquiries (inventory input 7) | Forminator routing by `need` |
| WhatsApp follow-up yes or no, and the number (spec section 11) | `whatsapp_tap` link and the consent line |
| First lead magnet (inventory input 11) | `brochure_download` |
| Meta pixel and LinkedIn Insight Tag ids | Section 6 item 13 |


## Addendum, 4 September 2026: hero slider

New event `hero_slide_view`, pushed on every slide change:
`{event: "hero_slide_view", slide_index: 1|2|3, slide_label: "Who we are"|"Consulting"|"AI programs", trigger: "auto"|"tab"|"arrow"|"swipe"}`.
Register `slide_label` and `trigger` as custom dimensions. Read it as an
engagement signal, not a conversion: the share of sessions with a `tab` or
`swipe` trigger tells us whether visitors use the slider at all.

New `cta_id` values on the slide buttons: `hero2_talk`, `hero2_how`,
`hero3_programs`, `hero3_enquire`. Slide 1 keeps `hero_talk` and
`hero_programs`. The photo band has no CTA and is not in the `section_view`
list.


## Addendum, 4 September 2026: revision 2

New events:

- `faq_toggle {question_index}` when an answer is opened on the mobile accordion. Engagement signal for audience A on phones.
- `program_builds_toggle {program}` when a program row's "What you build" list is opened on a phone. Tells us which program's detail people actually open.

New `cta_id` values: `hero_outcome_card` (the number card on slide 1, to the outcomes section) and `checklist_onepager` (the "Send me this as a one-pager" button, which opens the form with the consulting chip and a prefilled message). Treat `checklist_onepager` followed by `enquiry_submit` as a lead-magnet conversion in GA4, since the checklist is the first lead magnet the marketing plan asked for.


## Addendum, 5 September 2026: revision 3

New `cta_id` values: `way_modernize`, `way_production`, `way_train` (the three "what we do" cards), `fde_enquire` and `fde_all` (the spotlight buttons; `fde_enquire` also pushes `program_click {program: fde}`). The photo band's `section_view` entry is retired.
