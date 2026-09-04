# TEKMentors homepage: final copy

Prepared by TechnoTaau Team (ux-copywriter, reviewed by the Design Lead) for Jakhar Singh, 4 September 2026.
Base: v4 canvas copy (`design/reference/export/TEKMentors Homepage.dc.html`),
revised against `docs/03-homepage-spec.md`, the Design Lead's Gate 1 and Gate 2
decisions, the claims audit in `docs/06-reconciliation-memo.md` and the pulls in
`docs/07-reference-analysis.md`. Every fact is in `docs/02-content-inventory.md`.

How to read this file: one heading per spec section, in page order. Each opens
with the reader it serves. Copy is given element by element as it will appear.
Anything in square brackets marked INPUT is a slot TEKMentors must fill; the
degraded state that ships if it is not filled is written beside it. Mono
eyebrows are shown in capitals because that is how they render; everything
else is sentence case. Where two headlines are offered, A is the recommended
line and B the A/B test alternate.

---

## Page-level: title and meta

Serves: both readers, before they arrive. This is what Google and LinkedIn show.

- Title tag: AI engineering programs and enterprise consulting | TEKMentors
- Meta description (spec wording, 171 characters): Practitioner-led AI programs and enterprise consulting from Gurugram. AI Forward Deployed Engineer, GenAI foundations to production, cloud, DevOps and agile transformation.
- Meta description, alternate if the seo-schema agent wants it under 160: AI programs and enterprise consulting from Gurugram since 2017, taught by IIT (BHU) engineers with 20-plus years each. Cloud, DevOps and agile transformation.
- Logo alt text: TEKMentors
- Skip link (visually hidden, first in tab order): Skip to content

---

## 0. Promise bar

Serves: both. A CTO reads it as an operating standard; a professional reads it as proof the form is not a dead end.

- Left, after the green dot: Enquiries are read by a consultant, not a bot. Replies within one working day.
- [INPUT: confirm the one-working-day promise. If it cannot be operated, the second sentence becomes "Replies within two working days."]
- Right, mono, hidden on phones: +91 99587 77467 · info@tekmentors.com
- [INPUT: confirm which phone line and inbox receive homepage leads. The flyers show 7296800884 and purva.menaria@tekmentors.com.]

---

## 1. Header

Serves: everyone. Six links so a CTO can go straight to proof and a professional straight to programs.

- Logo: TEKMentors lockup, alt text "TEKMentors", links to /
- Links, in order: Programs (with mono pill "NEW"), Consulting, Case studies, How we work, Answers, Insights
- Anchors: #programs, #consulting, /case-studies/ (live page), #how-we-work, #answers, #insights
- Button: Talk to us (to #contact)
- Below 940px: logo, phone icon link (aria-label "Call TEKMentors", tel:+919958777467), menu button labelled "Menu" (aria-expanded). The sheet lists the six links, then the "Talk to us" button, then "+91 99587 77467" and "info@tekmentors.com" as text links.
- Menu close button label: Close

---

## 2. Hero

Serves: both, in one screen. The headline and subhead are for the CTO on a desktop; the routing card is for a professional on a phone, who reaches a program in one tap.

- Eyebrow: CONSULTING · CLOUD · AGILE · AI UPSKILLING

- H1, option A (chosen by the Design Lead): Twenty years each in enterprise engineering. Now teaching production AI.
- H1, option B (A/B alternate, the v4 line the client reviewed): We build the AI systems, and the people who keep them running.

- Subhead, used under either headline: TEKMentors, Gurugram, since 2017. Consulting for a large UK bank, an international financial institution and a multinational technology consulting firm serving Fortune 500 clients. AI programs taught live by IIT (BHU) engineers with 20-plus years each.

- Primary button: Talk to a consultant (to #contact)
- Secondary button: See the AI programs (to #programs)

Routing card, right column.

- Eyebrow: START WHERE IT HURTS
- Row 1: A pilot that works but will not go live (to #consulting)
- Row 2: Cloud spend nobody can explain (to #consulting)
- Row 3: Engineers who need to become AI engineers (to #program-fde)
- Row 4: Agile on paper, slow in practice (to #program-leaders)
- Row 5: A graduate who wants the AI job, not the course (to #program-genai)

Facts row, below both columns. Static text, never a counter.

- 20+ years. What each mentor brings from industry.
- IIT (BHU). Where the senior faculty trained.
- 2017. Consulting and training from Gurugram since.
- Live. Online, on site in Delhi NCR or hybrid.

---

## 3. Client strip

Serves: the CTO. It answers "who else has let them in" before the page asks for anything.

- Label: TEAMS WE HAVE WORKED WITH
- Nine logos from the WordPress media library, grayscale. Alt text per logo is the company name, nothing else.
- [INPUT: written confirmation that the nine logos on tekmentors.com may stay.]
- Fallback if refused, replacing label and logos with one line of text: Clients in UK wealth and private banking, international financial services and technology consulting for Fortune 500 clients.
- Never dashed placeholder boxes on the live page.

---

## 4. Who writes to us

Serves: both. Three cards, one per buyer, so each reader finds their own next step and can ignore the other two.

- Eyebrow: WHO WRITES TO US
- H2: Three kinds of people land here. Pick yours and skip the rest.

Card 1

- Index: 01 · TECHNOLOGY LEADERS
- H3: Something is not shipping
- Body: A pilot stuck short of production, a migration that stalled, a bill that grew. You want an engineer's read before you commit more budget.
- First step: A 45 minute scoping session and a one page recommendation. [INPUT: confirm promise. Softer wording: "A scoping session and a written recommendation."]
- Button: Consulting (to #consulting)

Card 2

- Index: 02 · ENGINEERING AND L&D HEADS
- H3: Your team has to become AI capable
- Body: You would rather train the engineers who already know your systems than hire strangers, and you need a program that ends in shipped work.
- First step: A skills read across the team, then a private cohort plan.
- Button: Team programs (to #program-teams)

Card 3

- Index: 03 · INDIVIDUAL ENGINEERS
- H3: You want the AI job, not the AI course
- Body: A few years in, or just out of college. You want to finish with work you can show and defend in an interview, and someone to help you get in the room.
- First step: A fifteen minute call to pick the right program and batch. [INPUT: confirm promise. Softer wording: "A short call to pick the right program and batch."]
- Button: Individual programs (to #programs)

---

## 5. Programs roster

Serves: the professional first, the L&D head second. It is a comparison table because the question is comparative: which one fits me, how long, how much, when.

- Eyebrow: AI PROGRAMS
- H2, option A: Four programs, with the details you would ask for anyway.
- H2, option B (A/B alternate): Four programs, each one ending in something you can show.
- Side note, right aligned: All run live, taught by people who still do the work. Dates and fees come back with your enquiry.
- [INPUT: the second sentence of the side note is removed the moment batch dates and fees land in the rows below. Until then the per-row date and fee lines do not render.]
- Column headers, mono, desktop only: PROGRAM · WHO IT IS FOR · LENGTH · FORMAT

Row 1, flagship, navy. Anchor #program-fde.

- Label: FLAGSHIP · ENROLLING [INPUT: "ENROLLING" only while a batch is open; otherwise "FLAGSHIP"]
- Title: AI Forward Deployed Engineer
- Body: LLM, RAG and agentic engineering on one real enterprise problem, with evaluation, security and governance in the build. Plus the customer-facing half of the job: discovery calls, design reviews and briefing an executive who has eight minutes. Ends with a working system and an executive demo.
- What you build, 01: RAG on your enterprise data. LangChain, pgvector, OpenSearch.
- What you build, 02: An agent with real integrations. LangGraph, MCP, FastAPI.
- What you build, 03: An evaluated, governed deployment. Docker, GitHub Actions, Terraform, OpenTelemetry.
- Who it is for: Engineers with 3 to 8 years behind them, individually or as a company cohort.
- Length: 6 to 8 weeks
- Format: Live, project led
- Date and fee line: Next batch starts [INPUT: date]. Fee [INPUT: fee], instalments if offered [INPUT: confirm whether instalments are offered].
- Button: Enquire (to #contact, presets the chip "Joining a program")

Row 2. Anchor #program-genai.

- Label: JOB READY
- Title: GenAI engineering: foundations to production
- Body: A RAG assistant, an MCP-enabled agent and a multimodal pipeline, each one deployed rather than simulated in a notebook. Ends with mock interviews, an industry panel viva, placement assistance and a capstone you can walk someone through line by line.
- [INPUT: how placement assistance is delivered, so the two words can be made exact before launch. If unconfirmed, the phrase "placement assistance" is cut and the sentence reads "Ends with mock interviews, an industry panel viva and a capstone you can walk someone through line by line."]
- What you build, 01: RAG assistant, v1 and v2.
- What you build, 02: MCP-enabled AI agent.
- What you build, 03: Multimodal AI pipeline.
- Who it is for: Final-year students and graduates up to two years in. Basic programming, no AI background.
- Length: 16 weeks, 144 hours
- Format: Live, 60% labs
- Date and fee line: Next batch starts [INPUT: date]. Fee [INPUT: fee].
- Button: Syllabus (to the program page [INPUT: URL])

Row 3. Anchor #program-leaders.

- Label: NO CODE REQUIRED
- Title: AI-enabled agile and product leadership
- Body: For Scrum Masters, Product Owners and delivery leads. Enough AI to back the right idea, question the wrong one and stop nodding along in vendor meetings. Ends with your own team showing what they built.
- What you build, 01: Product discovery and a backlog worked through with AI.
- What you build, 02: Your agile ceremonies with AI in the loop.
- What you build, 03: A workflow automated by an AI agent, as the team capstone.
- Tools line under the builds: ChatGPT, Claude, Gemini, Copilot, Perplexity, NotebookLM, with Jira, Confluence, Miro and Mural.
- Who it is for: Agile and product leaders, run privately for a team. [INPUT: minimum team size, and whether individuals can book a seat.]
- Length: 2 days
- Format: Live online
- Date and fee line: Next date [INPUT: date]. Fee [INPUT: fee].
- Button: Book (to #contact, presets the chip "Training my team")

Row 4. Anchor #program-teams.

- Label: FOR ENGINEERING TEAMS
- Title: GenAI developer training for teams
- Body: Six to eight weeks that get an existing team building RAG apps and AI-assisted workflows on your own stack. Eight modules, four labs, your codebase.
- What you build, 01: AI-assisted coding in your own repositories. GPT, Gemini, Claude.
- What you build, 02: A RAG app on your documents. LangChain and a vector database.
- What you build, 03: An AI workflow deployed through your DevOps pipeline.
- Who it is for: Engineering teams of [INPUT: minimum size] or more, with basic Python.
- Length: 6 to 8 weeks
- Format: Live online, on site or hybrid
- Date and fee line: Starts when your team can. Fee [INPUT: team pricing].
- Button: For your team (to the corporate training page [INPUT: URL])

Footer row

- Label: ALSO RUNNING
- Links: Full stack architect · DevOps engineer · Adobe toolset for corporate teams [INPUT: URLs for the three pages]

---

## 6. Consulting

Serves: the CTO. The diagram is the one place the page shows it knows the difference between a demo and a deployment.

- Eyebrow: CONSULTING
- H2: The gap is never the model. It is everything around it.
- Intro: Most AI pilots we are shown work perfectly and will never go live. Here is what that usually looks like, and what we replace it with.

Before card, white

- Label: BEFORE
- H3: Disconnected pilots
- Notebook prototype. Runs on one laptop. No owner after the demo.
- Data pulled by hand. Exports and spreadsheets. Nothing repeatable.
- Quality judged by vibes. No eval set, so no way to prove it improved.
- Security consulted last. Review arrives after the build, and blocks it.
- No path to production. The pilot succeeds. The rollout never starts.

After card, navy

- Label: AFTER
- H3: One governed pipeline
- 1. Scoped business problem. Named owner, measurable outcome, agreed baseline.
- 2. Governed data access. Permissions and lineage handled in the pipeline.
- 3. Agent in the real workflow. Integrated where the work already happens.
- 4. Evaluation as a gate. Regression caught before release, not after.
- 5. Production, run by your team. CI/CD, monitoring and engineers who own it.

Five practices

- Label: FIVE PRACTICES, ONE BENCH
- 01 Cloud and DevOps. Pipelines that hold up under real load, and a bill you can explain at the end of the quarter. (to the cloud and DevOps service page)
- 02 Transformation and tech strategy. A roadmap tied to how the business makes money, with the legacy estate honestly accounted for. (to the strategy service page)
- 03 Agile transformation. Agile that survives contact with your org chart. Coaching for the teams, and for the managers above them. (to the agile service page)
- 04 Data and web analytics. Instrumentation you can trust on Adobe and Google stacks, so the next argument is about strategy rather than the numbers. (to the analytics service page)
- 05 Upskilling. Live programs on your own stack that leave your team able to build the thing without us. Four of them are above. (to #programs)
- [INPUT: re-verify the four service page URLs at build.]

---

## 7. How an engagement runs

Serves: the CTO and the L&D head. Four phases, each ending in a thing they can open, which is what a buying committee asks for.

- Eyebrow: HOW AN ENGAGEMENT RUNS
- H2: Four phases. Each one ends in something you can open.

- 01. Scope, then argue. We interview the people doing the work, size the problem and drop the ideas that do not survive the conversation. Deliverable: A scoped brief with a baseline number.
- 02. Build against real data. Your documents, your permissions, your awkward integrations. The parts a vendor demo quietly skips. Deliverable: A working service, not a slide.
- 03. Measure and guard. Evaluation set, regression runs and the security posture written down where your risk team can read it. Deliverable: An eval harness and a report.
- 04. Hand it over properly. Deployed with CI/CD and monitoring, documented and walked through with the engineers who will own it. Deliverable: A live system with a named owner.

---

## 8. Straight answers

Serves: both. The CTO's six objections, answered in the open; the professional reads question three and knows where they stand.

- Eyebrow: STRAIGHT ANSWERS
- H2: The questions we get in almost every first meeting.
- Intro: Answered the way we would across a table, without the hedging. If yours is missing, it is probably the interesting one, so put it in the form.
- Schema: FAQPage, six entries, question and answer text exactly as below.

1. Where should we actually start with AI?
With the process your best people complain about most. It is usually unglamorous, already has a number attached, and nobody has offered to fix it because it is boring. That is exactly why it is the right first project.

2. Our pilot works. Why can it not go live?
Because a pilot proves the model and production needs everything else: governed data access, an evaluation set, a deployment path, monitoring and a named owner on Monday morning. We build those in from week one.

3. Do we hire AI engineers or train ours?
Train the ones who already know your systems, your data and who to call when something breaks at nine on a Friday. That knowledge takes years to rebuild. The AI part takes weeks, and that is the part we teach.

4. What does the first conversation cost?
Nothing, including the one page recommendation that follows it. It is the fastest way for both sides to find out whether the work is a fit, and you keep the page either way. [INPUT: confirm promise. If the one page recommendation is not offered, the answer becomes "Nothing. It is the fastest way for both sides to find out whether the work is a fit."]

5. Can you work inside our security rules?
Yes, and we would rather meet your risk and security people in week one than week six. We will sign your NDA before the scoping session if that is easier. Online, on site in Delhi NCR or a mix. [INPUT: confirm the NDA promise. If not, cut the second sentence.]

6. What happens when you leave?
Your engineers keep running it, because they built most of it with us watching rather than the other way round. Handover is a phase with a date on it, not a conversation we have when the invoice is due. If you still need us in a year, something went wrong.

---

## 9. Outcomes and mentor bench

Serves: the CTO first (one signed number with its baseline), then the professional (who will be in the room).

Case card, white

- Eyebrow: ONE ENGAGEMENT, FOUR NUMBERS
- Title: A large UK bank: backlog to production from six months to 90 days.
- Source line, mono: DEVOPS AND AGILE TRANSFORMATION · WEALTH AND PRIVATE BANKING
- Stat 1: 6 months to 90 days. Backlog to production.
- Stat 2: 10 to 15. Releases a year.
- Stat 3: 20% to 50%. P1 and P2 test automation.
- Stat 4: 25% to 10%. Defects in SIT and UAT.
- Link: Read the case study (to the case study page [INPUT: URL])
- Numbers are static text, never animated.

Mentor bench, under a rule

- Label: WHO IS IN THE ROOM
- Line under the label: The people who teach the programs and lead the consulting.

- Arun Tiwari. Senior consultant and trainer, co-founder. B.Tech, IIT (BHU) Varanasi. 24 years in product engineering for startups and enterprises. [INPUT: LinkedIn URL and permission to publish name, credentials and link.]
- Rahul Singh. Senior consultant and trainer. B.Tech, IIT (BHU) Varanasi. 20 years in cloud, microservices and event-driven architecture. [INPUT: LinkedIn URL and permission.]
- Abinash Kumar Mishra. Founder and CTO. Master's in Computer Science, PEC / Panjab University. 20 years building production AI and ML systems. [INPUT: LinkedIn URL and permission.]
- Until permission arrives the bench renders as text only. No ratings, no counts, no placeholder avatars.

Client quote

- [INPUT: one named client quote with title and company. The slot does not exist on the page until the quote does.]

---

## 10. Insights

Serves: both. A dated, signed article says the faculty think in public. The CTO checks the byline; the professional checks the topic.

- H2: What we have been writing about.
- Intro line: Written by the people who teach and consult here.
- Link, right aligned: Everything on the blog (to /blog/)
- Three rows, every field pulled from WordPress at build, never typed: {category, mono} · {post title, published casing} · {author} · {month year}
- Current examples of what will fill the rows, for layout only:
  - DATA AND AGILITY · From data silos to business agility: how financial leaders turn information into competitive advantage · [author] · [month year]
  - TRANSFORMATION · Why 70% of digital transformation projects fail: five critical success factors for financial services leaders · [author] · [month year]
  - CLOUD · The hidden costs of cloud migration: seven pitfalls financial services leaders must avoid · [author] · [month year]
- [INPUT: none from the client. The frontend-builder pulls category, title, author and date from the three most recent posts. If a post has no author set, the row shows the date only.]

---

## 11. Contact

Serves: both. The left column removes the CTO's hesitation with a timeline; the form is short enough to complete on a phone.

Left column

- Eyebrow: TALK TO US
- H2: Bring us the problem you have stopped mentioning in meetings.
- Intro: Nobody likes sending a form into the dark, so here is exactly what follows. You can stop at any step without an awkward phone call.

What happens next, four rows

- WITHIN 1 DAY. A real reply. From the consultant who will handle it, with their name and two or three questions about what you sent. [INPUT: confirm promise. Softer: "WITHIN 2 DAYS".]
- DAY 2 TO 4. A 45 minute session. Bring the engineers. We ask questions and take notes rather than present. We will ask about the process that hurts, the number attached to it, who owns it and what has been tried. [INPUT: confirm promise. If the day counts are dropped, the label becomes "THEN" and the agenda line stays.]
- 2 DAYS LATER. A one page recommendation. What we heard, what we would do first, what it would take. Yours to keep and circulate. [INPUT: confirm promise. If dropped, the label becomes "AFTER THAT" and "one page" becomes "a written".]
- IF YOU WANT IT. A proposal. Scope, team, timeline and cost on one page. If the recommendation was enough on its own, that is fine too.

Contact links, under the rows

- +91 99587 77467 (tel link) [INPUT: confirm lead line]
- info@tekmentors.com (mailto link) [INPUT: confirm lead inbox]
- LinkedIn (to the company page)

Right column: the form

- Title: Tell us what you need
- Line: Four fields, about a minute. It goes to a consultant, not a queue.

- Chip group label: What is this about?
- Chip 1 (default): A project or system
- Chip 2: Training my team
- Chip 3: Joining a program
- Chip 4: Not sure yet
- The chip sets the hidden field `need` and routes the email: chips 1 and 4 to the consulting inbox, chips 2 and 3 to the programs inbox. [INPUT: the two inbox addresses.]

- Field 1 label: Your name. Placeholder: Priya Nair. Required.
- Field 2 label: Work email. Placeholder: priya@company.com. Required.
- Field 3 label: Company (optional). Placeholder: Where you work.
- Field 4 label: What is stuck? Placeholder: One or two lines is plenty. Plain language beats a spec. Required, three-row textarea.
- Honeypot field: visually hidden, label "Leave this empty", never announced to screen readers.

Validation, on submit only, one block above the button

- Name empty: We need a name to reply to.
- Email malformed: That email does not look right. Check it and send again.
- Message under eight characters: A line or two about what is stuck helps us route this properly.

- Button: Send it to the team
- Button while sending: Sending
- Failure block: That did not send. Email us at info@tekmentors.com and we will pick it up from there. [INPUT: use the confirmed lead inbox.]
- Consent line, under the button: Your details go to our consultants and nowhere else. No newsletter, no automated sequence, no third parties. [INPUT: if WhatsApp follow-up is used, add "We may follow up on WhatsApp if you give us a number."]

Success state, replaces the form body

- Check mark, then H3: Got it. Thank you.
- Body: A consultant will read it, not a system. You will have a reply within one working day, from a person with a name. [INPUT: confirm promise; mirrors the promise bar wording.]
- Panel label: WHILE YOU WAIT
- Link 1: Look at the four programs (to #programs)
- Link 2: Read the straight answers (to #answers)
- Link 3: Browse the case studies (to /case-studies/)
- Reset link: Send another enquiry

---

## 12. Footer

Serves: everyone. Registered name and address for the CTO's procurement check; programs and phone for the professional.

Column 1

- Logo, alt text "TEKMentors"
- Tagline: Enabling minds to explore possibilities.
- Line: Consulting and upskilling for teams that have to ship.
- Legal: TEKMentors Consulting Private Limited
- Address: Sector 18, Plot 23, Maruti Industrial Area, Gurugram 122015

Column 2, label COMPANY

- About us · Case studies · Blog · Terms of use

Column 3, label PROGRAMS

- AI Forward Deployed Engineer · GenAI engineering · Agile and product leadership · GenAI developer training for teams · DevOps engineer

Column 4, label REACH US

- +91 99587 77467
- [INPUT: second phone line, 7296800884, if TEKMentors wants it listed]
- info@tekmentors.com
- LinkedIn
- X [INPUT: confirm x.com/mentorstek or drop the link]

Bottom row

- © 2026 TEKMentors Consulting Private Limited. All rights reserved.
- www.tekmentors.com

---

## Sticky mobile bar

Serves: the professional on a phone. Appears once the hero scrolls away, below 940px only. Both buttons anchor to page sections, never to a phone modal.

- Button 1: Programs (to #programs)
- Button 2: Talk to us (to #contact)
- aria-label on the bar: Quick links


## 2 (revised). Hero slider copy

Added 4 September 2026 by the Design Lead after the client asked for a
slider and photography. Slide 1 is the section 2 copy above. Tabs: "Who we
are", "Consulting", "AI programs". Arrow labels: "Previous slide", "Next
slide". Screen reader count: "1 of 3".

Slide 2, "Consulting"

- Eyebrow: ENTERPRISE CONSULTING
- Heading: The gap is never the model. It is everything around it.
- Subhead: Most AI pilots we are shown work perfectly and will never go live. We build the governed pipeline around the model, then hand it to your engineers with a named owner.
- Buttons: Talk to a consultant (#contact) · How an engagement runs (#how)
- Photo alt: A consultant presenting to a leadership team in a boardroom

Slide 3, "AI programs"

- Eyebrow: LIVE PROGRAMS, GURUGRAM AND ONLINE
- Heading: Four programs. Each one ends in something you can show.
- Subhead: AI Forward Deployed Engineer for engineers with 3 to 8 years. GenAI foundations to production for graduates, 16 weeks and 144 hours. Two days of AI-enabled agile leadership. GenAI developer training for whole teams. All live, taught by IIT (BHU) engineers with 20-plus years each.
- Buttons: See the AI programs (#programs) · Enquire about a batch (#contact, presets "Joining a program")
- Photo alt: A live technical workshop with participants at laptops

Slide 1 photo alt: Two engineers reviewing code at their desks

## 6b. Photo band

- Eyebrow: WHERE THE WORK HAPPENS
- Line: Consulting and training from Gurugram since 2017. Live online, on site in Delhi NCR, or hybrid.

## Program row and insight thumbnails

- Program alt text: Engineer working on production systems · Graduates working together at a laptop · Team planning at a whiteboard · Engineering team in an open office
- Insight thumbnails are decorative (empty alt); WordPress featured images replace them at build.
