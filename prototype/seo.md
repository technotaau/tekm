# Homepage SEO: title, meta, headings, schema

Owner: seo-schema. Prepared for TechnoTaau Team (Jakhar Singh) on
4 September 2026. This is the page-level spec that `prototype/index.html`
must follow and that the WordPress/Elementor build is checked against.
Facts come only from the verified section of `docs/02-content-inventory.md`.

## 1. Keyword group

One group for the homepage, per the proposal: AI engineering programs,
corporate AI training India, AI engineer course Gurugram. The homepage
carries the brand plus "AI engineering programs and consulting". Program
pages own "generative AI course for working professionals" and the
"course" phrasing; the corporate training page owns "corporate AI
training" as its head term. Nothing on the homepage is rewritten to fit a
keyword; where a term lands naturally is listed in section 4, and the
three copy proposals for the ux-copywriter are in section 7.

## 2. Head tags

| Tag | Value | Length |
|---|---|---|
| `<title>` | AI engineering programs and consulting \| TEKMentors | 51 |
| `meta name="description"` | AI engineering programs and corporate AI training from Gurugram, taught live by IIT (BHU) engineers with 20-plus years each. Consulting since 2017. | 147 |
| `link rel="canonical"` | https://www.tekmentors.com/ | |
| `meta name="robots"` | index, follow, max-image-preview:large | |
| `html lang` | en | |
| `og:type` | website | |
| `og:site_name` | TEKMentors | |
| `og:url` | https://www.tekmentors.com/ | |
| `og:title` | TEKMentors: AI engineering programs and consulting from Gurugram | 64 |
| `og:description` | TEKMentors, Gurugram, since 2017. Consulting for a large UK bank, an international financial institution and a multinational technology consulting firm serving Fortune 500 clients. AI programs taught live by IIT (BHU) engineers with 20-plus years each. | |
| `og:image` | [INPUT: a 1200 by 630 card built from the type system, navy ground, logo, one line. The visual-designer can produce it without client input. Do not ship the 484 by 226 logo as the share image.] | |
| `og:locale` | en_IN | |
| `twitter:card` | summary_large_image | |
| `twitter:site` | omitted until the X handle is confirmed (inventory input 9) | |

Notes on the choices.

- The title is the brand plus the exact phrase the proposal assigns to the
  homepage. The spec's earlier draft ("... and enterprise consulting |
  TEKMentors") is 62 characters and truncates; "enterprise" was the word
  to lose, the meta carries the enterprise proof instead.
- The meta description uses the hero subhead's approved wording for the
  faculty claim ("IIT (BHU) engineers with 20-plus years each"), which the
  reference analysis clears for plural use and never as a partnership.
- Canonical is the www host: the bare domain 301s to www today.
- The live site's title is "Home - TEKMentors" and the meta reads "Ask
  about AI strategy, cloud modernization ...". Both are replaced; this is
  the week-one metadata fix in the proposal.

## 3. Heading outline

One h1. One h2 per section, h3 inside cards and rows that carry a title.
Mono eyebrows ("WHO WRITES TO US", "AI PROGRAMS", "CONSULTING" and so on)
are `<p class="eyebrow">`, never headings, with three exceptions marked
"mono style" below where a block has no other heading and needs one for
the outline. Sentence case throughout; program names and blog titles keep
their published casing.

Section ids are fixed here because the tracking plan keys on them.

| Section | id | Level | Text |
|---|---|---|---|
| 0 Promise bar | `promise` | none | `<p>` inside a `<div role="note">`. Not a heading |
| 1 Header | none | none | Logo is a link with alt "TEKMentors". Nav is `<nav aria-label="Main">` |
| 2 Hero | `hero` | h1 | Recommended: "Twenty years each in enterprise engineering. Now teaching production AI." Fallback: "We build the AI systems, and the people who keep them running." Client picks per spec section 2 |
| 2 Hero routing card | | h2 (mono style) | "Start where it hurts" |
| 2 Hero facts row | | none | `<dl>`: dt is the figure, dd the line |
| 3 Client strip | `clients` | h2 (mono style) | "Teams we have worked with". Fallback text if logos are refused: "Clients in UK banking, global financial services and Fortune 500 consulting" |
| 4 Who writes to us | `who` | h2 | "Three kinds of people land here. Pick yours and skip the rest." |
| | | h3 | "Something is not shipping" |
| | | h3 | "Your team has to become AI capable" |
| | | h3 | "You want the AI job, not the AI course" |
| 5 Programs | `programs` | h2 | "Four programs, with the details you would ask for anyway." |
| | `program-fde` | h3 | "AI Forward Deployed Engineer" |
| | `program-genai` | h3 | "GenAI engineering: foundations to production" |
| | `program-leaders` | h3 | "AI-enabled agile and product leadership" |
| | `program-teams` | h3 | "GenAI developer training for teams" |
| | | none | "Also running" line is a `<p>` with three links |
| 6 Consulting | `consulting` | h2 | "The gap is never the model. It is everything around it." |
| | | h3 | "Disconnected pilots" (before card) |
| | | h3 | "One governed pipeline" (after card) |
| | | h3 (mono style) | "Five practices, one bench". The five row titles are `<span>` inside the links, not headings |
| 7 How we work | `how` | h2 | "Four phases. Each one ends in something you can open." |
| | | h3 | "Scope, then argue" |
| | | h3 | "Build against real data" |
| | | h3 | "Measure and guard" |
| | | h3 | "Hand it over properly" |
| 8 Straight answers | `answers` | h2 | "The questions we get in almost every first meeting." |
| | | h3 | "Where should we actually start with AI?" |
| | | h3 | "Our pilot works. Why can it not go live?" |
| | | h3 | "Do we hire AI engineers or train ours?" |
| | | h3 | "What does the first conversation cost?" |
| | | h3 | "Can you work inside our security rules?" |
| | | h3 | "What happens when you leave?" |
| 9 Outcomes | `proof` | h2 | "A large UK bank: backlog to production from six months to 90 days." The four stat cells are a `<dl>` |
| 9 Mentor bench | `mentors` | h2 (mono style) | "Who is in the room" |
| | | h3 | "Arun Tiwari", "Rahul Singh", "Abinash Kumar Mishra". Renders text only until photos and permission arrive |
| 10 Insights | `insights` | h2 | "What we have been writing about." |
| | | h3 | One per post title, pulled from WordPress, published casing kept |
| 11 Contact | `contact` | h2 | "Bring us the problem you have stopped mentioning in meetings." The four timeline rows are an `<ol>`, not headings |
| 11 Form | `form` | h3 | "Tell us what you need" |
| 11 Form sent state | | h3 | "Got it. Thank you." (replaces the form heading, so still one h3) |
| 12 Footer | none | h2 (mono style) | "Company", "Programs", "Reach us". Column one has no heading; the tagline is a `<p>` |
| Sticky mobile bar | `sticky-bar` | none | `<nav aria-label="Quick actions">` with two links |

Two things the frontend-builder should not do: promote the mono eyebrow
above an h2 to a heading (it would double every section), or wrap the
five practice rows and the four timeline rows in headings (they are links
and list items).

## 4. Where the keyword group lands without changing copy

| Term | Where it already appears |
|---|---|
| AI engineering programs | title, meta, og:title; hero button "See the AI programs"; eyebrow "AI programs"; the four program h3s |
| AI engineer course Gurugram | hero subhead "TEKMentors, Gurugram, since 2017"; facts row "2017: consulting and training from Gurugram since"; h3 "AI Forward Deployed Engineer"; facts row "Live: online, on site in Delhi NCR, or hybrid"; footer registered address; schema PostalAddress |
| corporate AI training India | row 4 "GenAI developer training for teams" and its "For your team" link to the corporate training page; persona card 02 "Your team has to become AI capable"; schema addressCountry IN. "India" does not appear in body copy; see proposal 3 |

That is enough density for a homepage. The proposal's "30+ keywords in
the top 10" target is met by the program and corporate pages, not by
loading this page.

## 5. Schema: what goes in the head

Three `<script type="application/ld+json">` blocks, one per file, pasted
verbatim from:

- `prototype/schema/organization.json`
- `prototype/schema/website.json`
- `prototype/schema/faqpage.json`

They cross-reference by `@id` (`#organization`, `#website`, `#faq`), so
they can be three blocks or merged into one `@graph`; both are valid.
Course schema is not on this page. Person schema for the three mentors
waits for inventory input 3 (permission) and then goes on the mentor
bench, referenced from Organization as `employee`, not `founder`, unless
the client confirms the founder titles for the site.

What each file contains, and why some fields are absent.

| File | Included | Deliberately absent |
|---|---|---|
| organization.json | name, legalName, url, logo (full-size PNG on tekmentors.com), slogan, foundingDate 2017, email, telephone in E.164, PostalAddress (Plot 23, Sector 18, Maruti Industrial Area, Gurugram 122015, IN), one sales ContactPoint, sameAs LinkedIn only | aggregateRating, review, award, numberOfEmployees, areaServed, founder, Facebook, Instagram, YouTube and X URLs. The inventory names the networks but gives no URLs, and the X handle is unconfirmed (input 9). Add each URL to sameAs when the client supplies it |
| website.json | url, name, alternateName (legal name), inLanguage, publisher by @id | potentialAction SearchAction. Google retired the sitelinks search box; the live site's Rank Math output still emits one, which is harmless but pointless |
| faqpage.json | the six questions from spec section 8 with answers drafted from the v4 copy, 33 to 40 words each, no em dashes | anything not on the page |

One field is not in the inventory table: `addressRegion: Haryana`. It is
the state of Gurugram 122015, not a claim about TEKMentors, and a
PostalAddress without it is incomplete for an Indian address. Remove it
if the Design Lead prefers a strict reading.

Two answers carry service promises (the free first conversation and one
page recommendation in answer 4; the NDA before scoping in answer 5).
They are inventory input 5. If the client softens them, the page copy and
`faqpage.json` change together; the schema must never say more than the
visible text. When the ux-copywriter finalises `prototype/copy.md`, the
answer strings are regenerated from it, not from v4.

## 6. Validation status and what still needs Google's tools

- All three files pass `python3 -m json.tool` (syntax).
- No em dashes in any file (checked with grep).
- Still to run on the built page, not on the files, because both tools
  read rendered HTML: Google Rich Results test and the Schema Markup
  Validator (validator.schema.org). Expected outcomes:
  - Organization: valid, eligible for the logo and knowledge panel
    fields. The logo file is 484 by 226, above Google's 112 by 112
    minimum; swap the URL for the 2x file when input 10 lands.
  - FAQPage: valid, but do not promise a rich result. Since August 2023
    Google shows FAQ rich results only for government and health sites.
    The markup still describes the section correctly for every engine.
  - WebSite: valid; no rich result is attached to it.
- Live-site conflict to resolve in the build: Rank Math currently emits a
  `@graph` on the homepage with `@type: ["Person","Organization"]` on a
  150 by 150 logo crop, a `WebSite` with SearchAction, a `WebPage`, an
  author `Person` named "TEKMentors" at `/author/wpadmin/`, and an
  `Article` for the homepage. In Rank Math: Titles and Meta, Local SEO,
  set the site to Organization with the full logo, address, phone and
  email; set the homepage schema type to none (or WebPage) so the Article
  node disappears; then compare its output with the three files here.
  Whatever Rank Math cannot emit (legalName, foundingDate, the FAQPage)
  goes in through its custom schema field or an HTML block. There must be
  exactly one Organization and one WebSite node on the page, and no
  Person node for a WordPress admin account.

## 7. Proposals for the ux-copywriter (not applied here)

1. Programs section side note: "All run live from Gurugram, taught by
   people who still do the work." Adds the location where the professional
   audience is scanning for it; costs two words.
2. Row 4 eyebrow: "CORPORATE AI TRAINING" instead of "FOR ENGINEERING
   TEAMS". The row's h3 and the destination page name stay as they are.
   Persona card 02's button could read "Corporate training" for the same
   reason, if it still fits on one line at 360px.
3. Footer address line, already a spec addition: "Plot 23, Sector 18,
   Maruti Industrial Area, Gurugram 122015, India". The word "India"
   appears nowhere else on the page and this is the honest place for it.

## 8. Checks against prototype/index.html once it exists

The qa-reviewer and seo-schema run these together at Gate 3.

1. Exactly one h1; h2 and h3 texts match section 3 (run an outline dump,
   for example `grep -o '<h[1-6][^>]*>[^<]*' index.html`).
2. Section ids match section 3 so `section_view` in the tracking plan
   fires on the right elements.
3. Title, meta, canonical and OG tags match section 2 character for
   character; `twitter:site` absent; `og:image` present only when the
   real card exists.
4. Three JSON-LD blocks present and byte-identical to the files; no
   fourth block.
5. Every `<img>` has alt text: logo "TEKMentors", client logos the client
   name, mentor photos the mentor name. The before-and-after diagram is
   HTML and CSS inside a `<figure>` with `aria-label="Before and after: a
   disconnected pilot compared with one governed pipeline"`.
6. Lighthouse SEO 90 or above on mobile.


Addendum, 4 September 2026: the photo band adds one h2 ("Where the work happens", id "where") between the consulting section and "How an engagement runs". Slides 2 and 3 of the hero use h2 styled as the h1; the page still has exactly one h1.
