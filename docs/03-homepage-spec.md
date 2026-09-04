# 03. Homepage spec

Section-by-section specification for the new tekmentors.com homepage.
Copy shown is a working draft for the ux-copywriter to refine, not final.
Slots marked [INPUT] depend on items in `02-content-inventory.md`.

## Page-level

- Title: "AI engineering programs and enterprise consulting | TEKMentors"
- Meta description (under 155 characters): "Production AI training and
  enterprise consulting from practitioners. 16-week GenAI, Agentic AI and
  FDE programs, corporate training, cloud and DevOps consulting. Gurugram."
- One `<h1>` only, in the hero.
- Schema: Organization (with sameAs for socials, address, telephone),
  WebSite, and FAQPage for section 13. Course schema lives on program pages,
  not here.
- Sticky mobile bottom bar with two actions: "Programs" and "Talk to us"
  (WhatsApp deep link or tel:). Hidden on desktop.
- GA4 events: `program_card_click` (program name), `brochure_download`
  (program), `enquiry_submit` (audience type, program), `phone_tap`,
  `whatsapp_tap`, `webinar_register`, `case_study_click`.

## Section order and rationale

| # | Section | Serves | Why it sits here |
|---|---|---|---|
| 0 | Announcement bar | A | Next batch or webinar date is the highest-intent hook |
| 1 | Header | A, B | Programs mega-menu plus a corporate path |
| 2 | Hero, dual path | A, B | Both buyers pick a lane in the first screen |
| 3 | Trust strip | A, B | Founded 2017, IIT/IIM practitioners, enterprise clients |
| 4 | Programs hub | A | The main conversion surface for professionals |
| 5 | Who it is for | A, B | Self-qualification, reduces junk leads |
| 6 | Why TEKMentors | A, B | Four verified pillars |
| 7 | How you learn | A, B | The Initiation to Perform framework, proprietary and real |
| 8 | Proof | B, A | Real outcome numbers from the UK bank case |
| 9 | Consulting and corporate training | B | Service menu and corporate CTA |
| 10 | Faculty | A, B | Credibility engine per the marketing plan |
| 11 | Free webinar or lead magnet | A | Low-commitment capture for the nurture flow |
| 12 | Insights | A, B | Three latest posts, feeds SEO clusters |
| 13 | FAQ | A | Objection handling with FAQ schema |
| 14 | Enquiry form | A, B | Single form with an audience switch |
| 15 | Footer | all | Contact, links, social, address |

Testimonials are deliberately not in the order. They enter between 8 and 9
only when real ones exist.

## 0. Announcement bar

- Height 40px, navy background, white text, one link.
- Copy: "Next batch: Agentic AI and Production LLM Systems starts [INPUT date].
  [INPUT n] seats left." Fallback when no batch: "Free webinar on [INPUT
  topic], [INPUT date]. Register."
- Dismissible, remembers dismissal for the session.

## 1. Header

- Left: horizontal logo. Right (desktop): Programs (mega-menu: the three new
  programs, GenAI Developer Training, Compare programs), Corporate training,
  Consulting (dropdown: five services), Case studies, Insights, About.
  Then phone as a text link and a primary button "Talk to us".
- Mobile: logo, phone icon, hamburger. Menu is a full-screen sheet with
  programs first.
- Header turns solid white with a 1px slate-300 bottom border after 80px
  of scroll; transparent over the hero before that.

## 2. Hero

- Layout: two columns on desktop (text 7/12, visual 5/12); stacked on mobile
  with the visual below the CTAs.
- Background: navy to blue-700 gradient, subtle node-and-edge pattern echoing
  the logo at 8% opacity.
- Eyebrow (label style, blue-400): "AI engineering programs and enterprise
  consulting, Gurugram".
- H1 (display): "Production AI skills, taught by the people who ship it."
  Alternates for testing: "Learn AI engineering from practitioners who ran
  enterprise transformations." / "From prompts to production systems, with
  mentors who have done it."
- Subhead (body-lg, slate-300 on navy): "16-week programs in GenAI engineering,
  agentic AI and forward deployed engineering, plus corporate training and
  consulting, from IIT and IIM alumni with 20+ years in product engineering."
- Two CTAs side by side: primary "Explore programs" (anchors to section 4),
  secondary outline "Corporate training and consulting" (anchors to section 9).
- Under the CTAs, a micro-row: "Live online and on-site  ·  Batches every
  quarter [INPUT]  ·  Mentor-led labs".
- Visual: a card stack showing a program card peeking behind an outcome
  card ("Cycle time: 6 months to 90 days, UK bank"). On mobile the stack
  collapses to the single outcome card.

## 3. Trust strip

- White band, four items in a row, icons plus 14px text:
  "Founded 2017, Gurugram" · "IIT and IIM alumni practitioners" ·
  "Enterprise clients in banking and consulting" · "Live online, on-site and
  hybrid delivery".
- Optional fifth: client logos [INPUT permission]. Without permission use the
  sector line only.

## 4. Programs hub

- Section title (h1 style): "Programs built like production work."
- Intro line: "Every program ends with something you deployed, reviewed by a
  mentor who has shipped it in an enterprise."
- Four cards in a 2x2 grid on desktop, a horizontal snap-scroll on mobile
  (cards 85% viewport width, so the next card peeks).
- Card anatomy, top to bottom: eyebrow chip (audience: "For professionals" /
  "For recent graduates" / "For teams"), title, one-line outcome, meta row
  with three cells (Duration, Mode, Next batch), fee row ("From INR [INPUT]"
  or "Fee on request" until confirmed), two actions: "View program" (primary
  text link with arrow) and "Brochure" (secondary, triggers brochure form).
- Cards:
  1. Agentic AI and Production LLM Systems. 16 weeks. Outcome: "Design, build
     and evaluate multi-agent systems and RAG pipelines that survive
     production."
  2. GenAI Engineering Foundations to Production. 16 weeks. Outcome: "From
     Python and LLM fundamentals to a deployed capstone, built for recent
     graduates."
  3. AI Forward Deployed Engineer. [INPUT duration]. Outcome: "Sit with the
     customer, ship the AI system, own the outcome."
  4. GenAI Developer Training for teams. 6 to 8 weeks. Outcome: "Get an
     engineering team building RAG apps and AI-assisted workflows."
- Below the grid: text link "Compare all programs" to the programs hub page.
- Badge rule: green "Batch open" chip only when a date exists; amber "Few
  seats left" only when TEKMentors confirms the count.

## 5. Who it is for

- Two-column split card, blue-050 background.
- Left, "You are a professional": three bullets. "2+ years in software,
  data or cloud and want to move into AI engineering." "Recent graduate who
  wants a production portfolio, not a certificate of attendance." "Tech lead
  who has to make agentic systems reliable, not just demo well."
  CTA: "Find your program".
- Right, "You lead a team": three bullets. "CTO or VP who needs 20 engineers
  productive with GenAI this quarter." "Head of L&D who needs a program with
  measurable outcomes, not attendance." "Delivery leader who needs DevOps,
  cloud or agile transformation done, not advised."
  CTA: "Talk about corporate training".

## 6. Why TEKMentors

- Title: "Why teams choose a boutique over a brand."
- Four tiles, one per verified pillar. Each has an icon, a 20px heading and
  two lines:
  Practitioners: "Everyone who teaches here has run the transformation they
  teach, inside banks and Fortune 500 consultancies."
  Proven expertise: "Engineering practices that moved a UK bank from ten
  releases a year to fifteen, with defects cut from 25% to 10%."
  Domain experts: "We know what a technocrat is up against: legacy estates,
  regulators, and a board that wants AI by next quarter."
  Mentors: "Coaching is the product. Fortnightly connects, skill matrices and
  feedback until the skill sticks."

## 7. How you learn

- Title: "Initiation, Immersion, Practice, Perform."
- Subline: "The same four-stage method we use to upskill engineering teams
  at global consultancies, applied to every program."
- Horizontal stepper on desktop, vertical on mobile. Each stage: number,
  name, one line from the content inventory, a small "what you get" list of
  two items.
- Closing line under the stepper: "Weekly live sessions, labs on your own
  machine, a capstone reviewed like a pull request."

## 8. Proof

- Navy background section. Title: "Outcomes we have signed our name to."
- Four stat tiles with tabular numbers and a source line "DevOps
  implementation, large UK bank":
  "6 months to 90 days" backlog to production;
  "10 to 15" annual releases;
  "20% to 50%" P1/P2 test automation;
  "25% to 10%" defects in SIT and UAT.
- Below, three compact case cards (title, client type, one outcome line,
  "Read case study"): UK bank DevOps, international financial institution
  agile, Fortune 500 consultancy upskilling.
- Kenya bank roadmap goes on the case studies page, not here.

## 9. Consulting and corporate training

- Title: "For organisations: consulting and corporate training."
- Left column (7/12): five service rows, each a title plus a 14px coverage
  line from the inventory, chevron to the service page.
- Right column (5/12): sticky card "Corporate training, built for your stack."
  Three lines: "Curriculum mapped to your codebase and tools." "Cohorts of
  8 to 25, live online or at your office." "Outcomes measured on value, speed,
  quality and team happiness." CTA: "Request a proposal" (opens enquiry form
  with audience preset to company).
- Engagement models as a small three-chip row under the services: Projects
  (3 to 6 months), Programs (6 to 18 months), Partnership (multi-year).

## 10. Faculty

- Title: "Learn from practitioners, not presenters."
- Two to four profile cards [INPUT]: photo, name, one-line credential
  ("Co-founder, IT-BHU, 20+ years in product engineering"), two tags of
  expertise, LinkedIn icon link.
- Until names are confirmed, the section renders with the title and a single
  line of verified text ("A small team of IIT and IIM alumni who have spent
  their careers inside IT organisations, now teaching what they built.") and
  no cards. Never placeholder avatars.

## 11. Free webinar or lead magnet

- Blue-050 band, two columns. Left: "Free monthly webinar" [INPUT topic and
  date], one line on what will be shown, CTA "Save my seat". Right: the lead
  magnet card ("AI engineer career roadmap, PDF") [INPUT which one ships],
  CTA "Get the roadmap".
- Both CTAs open a short form: name, email, phone, consent checkbox.
  Consent copy names WhatsApp explicitly since the nurture flow uses it.

## 12. Insights

- Title: "Insights". Three latest posts as cards: category chip, title,
  reading time, date. Pulled from the WordPress blog. Link "All insights".

## 13. FAQ

- Six questions, accordion, FAQPage schema. Draft set:
  1. Who are these programs for?
  2. Are sessions live, and what if I miss one?
  3. What do I need to know before starting?
  4. Is there a certificate, and what is it worth?
  5. Do you run these programs for companies?
  6. What is the fee and are there instalments? [INPUT]
- Answers under 60 words each, first line answers directly (AI-search rule
  from the marketing plan).

## 14. Enquiry form

- Title: "Tell us what you are trying to do."
- Toggle at the top: "I am a professional" / "I represent a company".
  The toggle sets a hidden field and swaps one question:
  professional gets "Program of interest" (select), company gets "Team size"
  (select) and "What do you need" (training / consulting / both).
- Fields: name, work email, phone with country code, the swapped question,
  message (optional), consent.
- Submit button: "Send enquiry". Success state inline, with "We reply within
  one working day" [INPUT confirm SLA].
- Right of the form on desktop: phone, WhatsApp, email, address, and a line
  "Prefer a call? Book 20 minutes" [INPUT scheduling link].
- Built in Forminator on WordPress; the prototype form posts nowhere and
  shows the success state for review.

## 15. Footer

- Four columns: About (About, Case studies, Insights, Contact, Careers if
  wanted), Programs (four programs, Compare), For organisations (five
  services, Corporate training), Contact (address, phone, email, social row).
- Bottom row: copyright "© 2026 TEKMentors Consulting Private Limited",
  Privacy, Terms of use, and "Website by TechnoTaau Team" as a text link if
  TEKMentors agrees.

## Responsive rules

- Breakpoints: 360 (base), 640, 960, 1280. Container max 1200px, 24px gutters
  on mobile, 32px from 960.
- Tap targets 44px minimum. Cards full-width below 640.
- Hero display type scales with clamp(); never below 36px.
- Images lazy-loaded below the fold; hero visual is CSS and SVG, no photo, so
  LCP is text.

## Acceptance checklist for this page

- Every [INPUT] is either filled with verified data or its section degrades
  as specified (no fake data on screen).
- Both audiences can reach their CTA within one scroll on a 360px phone.
- Lighthouse mobile: performance, accessibility, best practices, SEO all 90+.
- Copy passes the house-style check.
- Schema validates in Google's Rich Results test.
- Every CTA fires its GA4 event in the prototype's console.
