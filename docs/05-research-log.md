# 05. Research log

What was reviewed on 4 September 2026 to build this context, and what each
source contributed. Nothing in the docs is asserted without a line here.

## The Claude Design link (blocked)

`https://claude.ai/design/p/79f4aba1-10cf-42e8-ab28-867207d83146?via=share`

- Public fetch returns HTTP 403 (the share view is behind login).
- DesignSync `get_project` and `list_projects` both refuse: the tool needs a
  design-system authorization created by `/design-login` in an interactive
  session, which a headless Claude Code on the web session cannot run.
- No copy of the canvas exists in Drive, in this org's other repositories,
  or in the artifact list.

Unblock options are listed in `04-workflow.md`, Phase 1. Until one of them
happens, the visual direction here is reconstructed from the sources below
and must be reconciled with the canvas.

## Google Drive (TechnoTaau account)

| File | Date | Used for |
|---|---|---|
| TechnoTaau-Proposal-TEKMentors | 1 Sep 2026 | The actual engagement scope: WordPress/Elementor redesign, lead generation goal, BITS reference, three new programs, claims policy, commercials |
| TekMentors-Digital-Marketing-Plan | Jul 2026 | Two-audience model, channel priorities, KPIs, content clusters, lead magnets, 90-day plan |
| Case Study: TEKMentors | Apr 2025 | Verified outcome numbers for the UK bank, international financial institution, and upskilling cases |
| TEKMentors - Service Offerings.pptx | Mar 2025 | Why-us pillars, Initiation/Immersion/Practice/Perform method, engagement models, Kenya bank case, voice samples |
| TEKMentors - GenAI Training Program | Mar 2025 | Corporate GenAI program structure, unverified claims to exclude |
| TEKmentors - Main and Service Pages | Mar 2025 | Old homepage copy (superseded; useful as a list of phrases to avoid) and Canva stock picks (rejected) |
| Website Redesign Proposal for TEKMentors | Feb 2025 | Earlier 12 to 15 page sitemap idea, superseded by the 2026 proposal |
| TekMentors-Social-Media-Plan | Jul 2026 | Not read in detail; covered by the marketing plan |
| FullStack Architect, DevOps Engineer, Adobe Tools program docs | Mar to Apr 2025 | Titles only; read when program pages are specified |
| WP Login, Invoice, Billing spreadsheets | 2026 | Not opened. Credentials and billing are out of scope for design |

## Live site tekmentors.com

- Homepage, About, GenAI Training Program, Case Studies pages fetched.
- Stack detected from HTML: WordPress, Astra theme, Elementor and Elementor
  Pro, ElementsKit Lite, Prime Slider Lite, Forminator, Popup Maker.
- Font loaded: Lexend Deca, all weights.
- Astra global colors: #046bd2, #045cb4, #1e293b, #334155, #ffffff, #f0f5fa,
  #111111, #d1d5db.
- Logo files and favicon located under `/wp-content/uploads/2025/02/`.
  Logo colors sampled: #4fa8de blue, #569f42 green.
- Heading outline shows the current page has an h3 above the h1, duplicate
  h2s per service, and "0+" stat counters. All addressed in the spec.
- Meta description is a chatbot prompt, not a description. Replaced in the
  spec.

## Public profiles

- LinkedIn company page: tagline, founded 2017, 2 to 10 staff, address,
  specialties, recent posts naming the 16-week programs, the FDE program and
  the 2-day Agile and Product Leadership program.
- CB Insights and Crunchbase: services list, "IIT and IIM alumni" description.
- Company registry listings: directors Nitu Yadav, Rajashree Patry, Arun
  Shankar Tiwari. LinkedIn search: Arun Tiwari, Co-Founder, IT-BHU.
- LinkedIn posts page itself requires login and was not read.

## Reference and competitors

- BITS Pilani Digital, Professional Certificate in Generative & Agentic AI:
  full section structure recorded in the brief. Fee INR 96,000 + GST, 30
  weeks, batch 3 October 2026, 31-question FAQ, faculty, sample certificate.
- Web search for comparable 16-week and FDE programs: GeeksforGeeks,
  NextAgile, Interview Kickstart, FDE Academy, AgileFever.

## TechnoTaau conventions

- Sibling repo `technotaau/loksankalp-1` reviewed for house conventions:
  hand-written HTML, one CSS file, one small JS file, no build step, SEO and
  accessibility rules stated in the README, docs folder with BUILD-SPEC and
  PLAN. This repo follows the same pattern.

## Sources

- https://tekmentors.com/ and its About, GenAI Training Program and Case Studies pages
- https://in.linkedin.com/company/tekmentors
- https://www.cbinsights.com/company/tekmentors
- https://www.crunchbase.com/organization/tekmentors
- https://www.linkedin.com/in/arun-tiwari-03a96414/
- https://bitspilani-digital.edu.in/certification/generative-ai-agentic-ai-course
- https://github.com/technotaau/loksankalp-1
