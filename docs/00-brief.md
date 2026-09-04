# 00. Design brief: TEKMentors homepage

Prepared by TechnoTaau Team for TEKMentors Consulting Private Limited.
Owner: Jakhar Singh. Date: 4 September 2026.

## 1. The one-line goal

Turn tekmentors.com's homepage from a services brochure into a lead engine
for AI training programs and corporate consulting, without leaving
WordPress/Elementor.

## 2. Why now

The 1 September 2026 proposal commits TechnoTaau Team to a 1.5-month
engagement covering website redesign plus digital marketing, fee INR 45,000
excluding GST. The website workstream is:

- Week one fixes needing no inputs: remove placeholder text, fix index rules,
  rewrite metadata, install GA4 with conversion tracking on every form.
- Five new pages modelled on the BITS Pilani Digital reference: a programs hub
  with a comparison table, one page each for the three new programs, and a
  corporate training section with a rebuilt GenAI Developer Training page.
- Course, FAQ, Organization and Person schema on every page.
- Design refresh across existing pages for one consistent brand.

The homepage is the front door to all of that. It must route both buyer
types to the right page within one scroll and one tap.

## 3. Audiences

| Audience | Who they are | What they want on the homepage | Primary CTA |
|---|---|---|---|
| A. Working professionals | Developers, AI/ML engineers, tech leads, data scientists with 2+ years; also recent graduates for the foundations program. NCR and metro India, aged 24 to 40, arriving from LinkedIn, Meta and YouTube on a phone. | Which program fits me, how long, how much, when does the batch start, who teaches it, can I trust it. | Explore programs, download brochure, register for the free webinar. |
| B. Decision makers | CTOs, VPs Engineering, Heads of L&D and Delivery at IT services firms, banks, NBFCs, insurers. Desktop, often arriving from a trainer's LinkedIn post or a Google search like "corporate AI training India". | Proof that TEKMentors has done this at enterprise scale, the service menu, and a fast way to start a conversation. | Talk to us, request a corporate training proposal, read a case study. |

One corporate deal is worth many individual seats, so audience B is never
buried below the fold even though audience A produces more traffic.

## 4. Success metrics

Taken from the July 2026 digital marketing plan, 90-day targets:

| Metric | Target |
|---|---|
| Qualified leads (all channels) | 80 to 100 |
| Corporate enquiries | 3 to 5 |
| Organic traffic | 2x |
| Keywords in Google top 10 | 30+ |
| Webinar leads (Meta forms) | 150+ |

Homepage-specific metrics to instrument in GA4:

- Program card click-through rate
- Brochure download conversions
- Enquiry form completions, split by "I am a professional" vs "I represent a company"
- Phone and WhatsApp tap-throughs on mobile
- Scroll depth to the proof section

## 5. Positioning

Working line: practitioners who have run enterprise transformations at
UK banks, a global financial institution and a Fortune 500 consulting firm,
now teaching production AI engineering the same hands-on way.

Three pillars, in this order:

1. Practitioners, not theorists. IIT and IIM alumni with 20+ years in product
   engineering. Fortune 500 transformation experience.
2. Build-first learning. Labs, capstones, mentoring. The Initiation,
   Immersion, Practice, Perform model from the services deck.
3. Boutique scale, enterprise depth. Founded 2017, Gurugram, 2 to 10 people,
   end-to-end ownership from strategy through implementation.

Existing tagline, keep it: "Enabling minds to explore possibilities".

## 5b. Client direction received 4 September 2026 (via Jakhar Singh)

The client wants the homepage to read like a top-class, premium institution
with legacy experience. Their own words: 80% of flyers in the AI category are
built entirely by AI, "even we are also doing", and they want content and
design that spark the visitor instead. Consequences for the work:

- Positioning leads with institutional weight TEKMentors can prove: IIT (BHU)
  faculty, 20-plus-year careers, founded 2017, engagements at a UK bank, a
  global financial institution and a Fortune 500 consultancy.
- Copy avoids every phrase the AI-flyer genre uses. The banned list in
  `01-brand.md` extends to: "future-proof", "next-gen", "AI-powered" as a
  modifier, "master", "accelerate your journey", "hands-on projects" without
  saying which, "industry experts" without names, rocket and check emoji,
  "build, deploy, solve" triplets, "from zero to hero".
- The register shifts from v4's dry consultant to a senior institution that
  has done this for a long time and does not need to shout. Specific, human,
  a little understated. Thoughtworks and Publicis Sapient are the tone
  references for this; Scaler is not.
- Design stays restrained: type, rules, one diagram, real faces. Premium is
  earned by precision and whitespace, not by gradients or stock imagery.

## 6. Reference and competitive frame

- Structural reference named in the proposal: BITS Pilani Digital,
  Professional Certificate in Generative & Agentic AI. Its page pattern is
  hero, fee and batch strip, who should apply, methodology, curriculum,
  faculty, sample certificate, fee table, FAQ, enquiry modal.
  The homepage borrows the program-card pattern (fee, batch, duration, type)
  and the trust-signal density, not the university tone.
- Comparable programs professionals will compare against: GeeksforGeeks
  16-week AI Engineering course, NextAgile 16-week GenAI foundation for freshers,
  Interview Kickstart and FDE Academy for Forward Deployed Engineer,
  AgileFever Agentic AI bootcamp. TEKMentors' edge is practitioner faculty
  and consulting-grade case studies, so the homepage leads with those.

## 7. Constraints

- Platform: WordPress, Astra theme, Elementor Pro, Forminator forms,
  Popup Maker. The prototype must be buildable with those, so no layouts that
  Elementor cannot reproduce.
- Existing font: Lexend Deca (all weights already loaded). Keep it.
- Existing global palette in Astra: #046bd2, #045cb4, #1e293b, #334155,
  #f0f5fa, #d1d5db, #111111. Logo uses #4fa8de and #569f42. See brand doc
  for the reconciliation.
- Inputs still missing from the client are listed in
  `02-content-inventory.md`. Design around them with clearly marked slots,
  never with fake data.
- Budget and timeline: the whole website workstream fits inside six weeks
  alongside marketing, so the homepage design should be locked in the
  first two weeks.

## 8. Out of scope for this repo

Program detail pages, corporate training page, blog templates, and the
WordPress build itself. Those get their own specs after the homepage
pattern is approved, and reuse its tokens and components.
