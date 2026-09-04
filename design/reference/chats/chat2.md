# Content editing guidelines

_Started 2026-09-03 05:11 UTC_

---

## User

Continuing from "Website redesign project".

## Assistant

We've been rebuilding the TEKMentors homepage with a focus on impact-first minimalist design for enterprise audiences. The site needed to prominently feature new program add-ons (FDE flagship, GenAI Foundations, AI-Enabled Agile & Product Leadership) while preserving existing content and maintaining premium positioning.

**Key decisions made:**
- Applied SIP principle (Show, Illustrate, Prove) adapted for B2B services, not SaaS — translated to deliverable timelines, architecture diagrams, and verifiable credentials rather than UI recordings
- Replaced client template runtime (JavaScript logic wouldn't serve) with native markup — three stacked program rows with anchor chips instead of tabbed switcher
- Swapped rotating ticker for static proof strip to read more premium for senior professionals
- Left proof section data slots visibly open (engagement metrics, mentor details, credentials) rather than fabricating numbers that would destroy credibility

**Current state:**
Hero, programs block, "Show/Illustrate/Prove" framework sections, services, Why Us, clients, blog feed, and footer are all live and rendering. The page loads cleanly with no runtime dependencies. Three new proof sections structure the messaging as architectural clarity (before/after pipeline diagram), specific deliverable timeline, and credential placeholders.

**Next steps:**
- Fill proof slots: one verifiable client case study (baseline → intervention → result), three mentor names with titles/employers/LinkedIn, any partner certifications or accreditation logos
- Optional: consider tabbed program switcher for WordPress implementation when moving to live environment
- Final QC check once proof data is provided

**Files involved:** TEKMentors Home.dc.html (primary page file)

## User

Please remove all the em-dashes, use sentence case instead of tittle case for hte headings (what do you think best?)
it must look like the content is created by a real human , no robotic style, the content must have some purpose, add some personality to it, please active your best role and do the highest side of work. replace all the AI related words, phrases, the client must never know that it's AI written.

## Assistant

_[tool: read_file]_

_[tool: run_script]_

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Copy pass done. Zero em dashes left (section labels and the CTA bullet glyph included).

On casing: I used **sentence case for headings, nav and buttons**, which is the right call here. Title case reads like a brochure; sentence case reads like a person wrote it, and it suits the type you already have. Left untouched: uppercase mono eyebrow labels (they're a design element, not headings), proper nouns (DevOps, Adobe, Google, Scrum), and the three blog post titles since those are real published article names.

Removed the marketing-speak tells throughout: "harness the full potential", "unlock the power of data", "leverage the platform", "empower clients to thrive", "drive innovation". Replaced with specifics and a bit of dry attitude, e.g. "Agile that survives contact with your org chart", "If you still need us in a year, something went wrong", "reporting your marketing team will actually open", "briefing an executive who has eight minutes".

Two things worth your eye: the hero headline is now "We build the AI systems, and the people who keep them running", and the CTA headline is "Have a problem worth a conversation?" instead of the old "Want to transform your business with TEKMentors?" Both are bigger swings than the rest, so say the word if you want them dialled back.

## User

what about color selections?
since the existing https://www.tekmentors.com website have differnet colors for text, background etc. attached is logo.
why you choosed other colors any reason?
how we can improve the hero section with slider?
QC and give your best stunning result

## Assistant

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: ready_for_verification]_

**On the colours.** Fair challenge. I pulled the earlier palette from the design direction rather than the logo, so the indigo (#2E52E0) and mint green were adjacent to your brand but not actually it. I sampled the logo you attached: blue **#4FA8E4**, green **#57A445**. The page is now built on those:

- **#4FA8E4** logo blue for hero buttons, the slider indicator and accents on dark
- **#1B7CBE** a darkened version of the same blue for links and CTAs on light backgrounds, because the logo blue itself fails contrast on white
- **#57A445 / #8CCB72** the logo green as the secondary accent, light variant on dark panels
- **#07253C** deep hero navy, which is the logo blue taken far down in lightness rather than a generic navy, so the logo sits on it cleanly
- Neutrals shifted from warm grey to cool blue-grey so nothing fights the brand hue

**Hero slider.** Three slides on a 7 second auto-rotate, crossing horizontally. Each one sells a different thing to a different reader: consulting, the FDE flagship, and transformation delivery. Below them is a labelled tab row rather than anonymous dots, so a visitor can see all three propositions at a glance and jump straight to the one that applies to them. Clicking a tab resets the timer. The stats strip stays fixed under the slider as a constant.

One QC note for you: the client logo images load from tekmentors.com, so they will appear once this is on the live domain.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Inactive tabs raised to 74% white with the per-span dimming almost removed, so all three labels stay readable and the active one is still clearly the brighter of the set. The support.js fetch error is the preview environment, not the page.

## User

The client said, let create a one more version of this homepage. I am giving you this full ownershiop to you so create a stunning one more version of the hompage with different design + content.

## User

Found issues — fixing…

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: str_replace_edit]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Fixed both. The Practice block moved from #1B7CBE to a deeper #0F5B8C so white body copy clears 6:1, with the descriptions, eyebrow and numerals all lifted and the hover state changed to a light tint instead of navy. Mono labels and placeholder text on the light sections were darkened too.

Roster table now shares one column grid across the header and all four rows, including a fixed 108px action column, so the labels sit over the data they describe. The flagship row lost its negative margin, which was pushing it 24px out of line with the rest.

## User

Found issues — fixing…

## User

One more revision focusing on lead form submission. What the end users would like to read while landed on the website.

## User

One more revision focusing on lead form submission. What the end users would like to read while landed on the website.

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

**TEKMentors Home v3** is built around the enquiry, not around the company.

The form sits in the hero and stays sticky as you scroll the first screen, so it never has to be hunted for. Four fields plus a one-tap "what is this about" chip, a working validation state, and a thank-you state that tells the visitor what to expect instead of just saying sent. Every button on the page points at it.

**What a landing visitor actually wants to read**, in the order they want it:

- What you do, in one line, and what the next 45 minutes costs them (nothing)
- Whether this is for them: three routes for technology leaders, engineering and L&D heads, and individual engineers
- **What happens after they press send.** This is the section most B2B sites skip and it is the one that removes the hesitation: a real reply in a working day, a 45 minute session, a one page recommendation they keep whether they hire you or not, and a proposal only if they ask
- Straight answers to the things nobody types into a form: will I be sold to, are we too small, can you meet our security rules, who will actually turn up
- Risk removal right under the button: details go to consultants only, no newsletter, no sequence, no third parties

Two things need your side. The form currently validates and confirms in the browser but is not wired to anything, so it needs connecting to your CRM or WordPress mail on implementation. And two open slots are marked in the record block: one named client quote, and a photo and short bio of the consultant who reads the enquiries. A face beside a form measurably lifts completion, and it is the cheapest improvement available to this page.

## User

Found issues — fixing…

## User

Found issues — fixing…

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Form card now uses `margin-inline:auto` instead of `justify-self:end`, so it stays paired on the right at desktop width and centres itself once the hero stacks. The support.js error is the preview environment.

## User

I HAVE CHANGED THE MODEL TO FABLE 5.1 HIGHT.
Can you put all these three homepage together and then conduct a reverse engeneering based on the end user behaviour and build a revised homepage. Please do not assume make it one the greatest homeapge.

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

**TEKMentors Home v4** is the synthesis. Here is the behavioural read that shaped it, kept short.

**Who lands, and what they do in the first ten seconds**
- A technology leader from a referral or LinkedIn: reads the headline, checks the logos, looks for one thing that sounds like their problem, then looks for how to contact you. Scroll depth is shallow.
- A head of engineering or L&D: skips straight to programs, wants format, length, audience and whether it runs privately for a team.
- An individual engineer or graduate, probably the largest share of search traffic: wants programs, syllabus, duration, placement, and a low-effort way to ask about fees.

**What that ruled out from v1, v2 and v3**
- The auto-rotating slider. Almost nobody sees slide two or three, and the people who do are usually waiting for slide one to come back. Replaced with a static hero plus a "start where it hurts" list that routes each visitor by their actual problem.
- The form in the hero from v3. Strong for a campaign landing page, but on a corporate homepage senior visitors read it as being sold to before they know who you are. The form now sits at the end, next to "what happens after you press send", with every CTA on the page anchored to it and the nav button always in reach.
- The serif from v2. Beautiful, but it fights the logo. Kept v2's ruled discipline for the roster and answers instead.

**What survived**
- v1's before and after pipeline, the single most clarifying piece for a leader deciding whether you understand production.
- v2's roster table and its six questions, merged with v3's straight answers into one section with no repeats.
- v3's persona routing, the "what happens next" sequence, and the risk-removal line under the button.

Everything reflows on narrow screens. Two boolean tweaks are not needed here, one is: **Show open slots** hides the pending case, mentor and quote placeholders for client presentations. The form still needs wiring to your CRM or WordPress mail on implementation.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: update_todos]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

Three label colours darkened: the client band eyebrow, the green "no code required" tag, and the dashed-slot labels. All now clear 4.5:1. The support.js error is the preview environment.

One note: the usage quota is at 92%, so this is a sensible stopping point. v4 is out for your review. Remaining items on your side are wiring the form to your CRM or WordPress mail, and filling the three open slots (one case record, three named mentors, one client quote).

## User

Save this design as a PDF: `TEKMentors Home v4.dc.html`

## Assistant

_[tool: copy_starter_component]_

_[tool: copy_files]_

_[tool: dc_write]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: show_pdf_export_dialog]_

The export dialog is open. Click **Print or save as PDF** there, choose your paper size, and save.

v4 is now a print-based document that paginates properly: hero and stats block, the three audience routes, the programs table with a repeating header, the before and after pipeline on a fresh page, the five practices, the four engagement phases, the six answers in two flowing columns, the record numbers, and a closing contact block. Running footer on every page carries your phone, email and site.

The interactive web version is preserved as **TEKMentors Home v4 (web).dc.html** with the working form and navigation intact.

## User

Send this design to Canva: `TEKMentors Home v4.dc.html`

## Assistant

_[tool: show_to_user]_

_[tool: tool_search_tool_bm25]_

_[tool: bundle_project]_

_[tool: dc_html_str_replace]_

_[tool: bundle_project]_

## Assistant

_[tool: list_files]_

_[tool: view_image]_

_[tool: copy_files]_

## Assistant

_[tool: dc_html_str_replace]_

_[tool: bundle_project]_

_[tool: canva__import-design-from-url]_

Imported. **[Open in Canva](https://www.canva.com/d/YpGsMHA3YMPLiT1)**

One note: Canva brought it in as a single page. The logo now loads from a local copy (`assets/tekmentors-logo.png`) since the wordpress.com URL was not publicly fetchable, so replace it with your high-resolution file when convenient.

## User

Send this design to Canva: `TEKMentors Home v3.dc.html`

## Assistant

_[tool: show_to_user]_

_[tool: run_script]_

_[tool: bundle_project]_

_[tool: run_script]_

_[tool: bundle_project]_

_[tool: canva__import-design-from-url]_

Imported. **[Open in Canva](https://www.canva.com/d/aBY3WRILn6MuxVM)**

Two changes were needed to make v3 bundle: the logo now points at the local `assets/tekmentors-logo.png`, and the six client logos in the hero were not publicly fetchable, so they are dashed placeholder slots labelled IBM, L&T and clients 3 to 6. Drop your logo files in and they will bundle next time.

