# 10. First-visit audit: the page through a CTO's, an HR leader's and a professional's eyes

Prepared by TechnoTaau Team, Design Lead, 4 September 2026, at Jakhar
Singh's request. Method: the revision 1 prototype read cold, three times,
in three chairs, answering the eleven questions the client listed. Verdicts
are blunt on purpose. Changes marked "done" are in revision 2.

## The three reads

### A CTO, desktop, arrived from a LinkedIn post

First screen: the promise bar earns trust before anything else; the
headline "Twenty years each in enterprise engineering. Now teaching
production AI." tells me who they are, not what they will do for me; the
eyebrow "CONSULTING · CLOUD · AGILE · AI UPSKILLING" is a category list; the
stock photo of two engineers is ignored; the subhead is 45 words and I catch
"UK bank" and "IIT (BHU)". Verdict: credible, not yet valuable. Curiosity
arrives at the before-and-after pipeline, which describes my own stalled
pilot better than I have in meetings, and at the six straight answers.
Trust arrives at the UK bank numbers and the named mentors with degrees and
years. The form's "What is stuck?" is the right question for me.

### A head of L&D or HR, desktop, searching for corporate AI training

I want format, length, whether it runs privately, who teaches, and how it is
priced. The roster gives the first four. Nothing says how a private cohort
works or is priced. The persona cards speak engineering ("ends in shipped
work"). The form asks "What is stuck?", which is not my situation; I have a
mandate and a budget. I would still enquire, but the page made me translate.

### A working professional, phone, arrived from an ad

The page is about 18,000 pixels tall at 360. The programs section runs
several screens per row (body, three builds, three meta cells, button), then
six long answers written for a CTO. I lose patience in the answers. If I
reach the form, "What is stuck?" again does not fit someone asking about a
batch. The sticky "Programs" button is the thing that saves the visit.

## The eleven questions

| Question | Honest answer |
|---|---|
| First impression | Calm and senior, which is right. Not yet interesting: the first screen is about the firm |
| Impact in 5 to 10 seconds | Credible yes, valuable not yet. The proof number is two screens down |
| Curiosity | Weak until the consulting section. Nothing on the page teaches |
| Confidence to keep scrolling | Moderate on desktop, low on a phone by the third program row |
| Clarity | Good on who it is for (the three cards). Weaker on what it does, because the headline does not say |
| Professional credibility | Strong: named mentors with credentials, real numbers with a baseline, no counters, no awards |
| Content I would read | The pipeline diagram, the straight answers, the outcomes card, the program rows (professional only) |
| Engagement moments | Two: "Three kinds of people land here" and "The gap is never the model". The rest is well written but does not pull |
| Differentiation | The voice is distinct and the refusal to invent proof is rare. The first screen does not show either |
| Trust | Enough for a CTO. An L&D head would want cohort mechanics and pricing |
| Conversion | The form is short and honest, better than a contact form. It asks one question written for one of the three visitors |

## The eight answers

1. Above the fold: what they do for me in one line; the legacy facts as
   the eyebrow, not the headline; one number with its baseline visible
   without scrolling; the two doors. The routing pills stay.
2. What makes me scroll: a promise that the next screen shows my problem.
   The pipeline diagram delivers that, so the hero should point at it.
3. What I would read: the pipeline, a checklist I can use tomorrow, the
   answers, the outcomes and mentors, my program row.
4. What makes it memorable: the voice ("Bring us the problem you have
   stopped mentioning in meetings"), the before-and-after diagram, and one
   useful thing I take away for free.
5. What makes me trust it: a number with a baseline and a client type,
   named people with degrees and years, no counters, a promise about the
   reply that is specific enough to be checkable.
6. What makes me leave: the length on a phone, a headline about the firm,
   a form question that does not fit me, and, once the site is live, any
   whiff of the old "0+" placeholders.
7. The form: short and honest, but not good enough. It should change with
   the intent chip: title, the long-answer question, the company label and
   the placeholder. It should also let a visitor ask for the checklist
   without composing anything.
8. Top five changes, below.

## Top five changes (done in revision 2)

1. Hero, slide 1. Eyebrow "GURUGRAM · SINCE 2017 · IIT (BHU) FACULTY".
   Headline "We get AI into production. Then we train your engineers to
   run it." Subhead "Enterprise consulting and live AI engineering
   programs from a small team with twenty-plus years each inside banks and
   Fortune 500 delivery. One number we can show you: a UK bank's
   backlog-to-production time, cut from six months to 90 days." An outcome
   card over the slide-1 photo carrying that number. The previous headline
   moves to the A/B list.
2. A teaching moment: "Seven questions before an AI pilot goes live", a
   checklist inside the consulting section after the diagram, with a
   one-tap "Send me this as a one-pager" that opens the form with the chip
   and message preset.
3. The form adapts to the chip: "A project or system" keeps "What is
   stuck?"; "Training my team" asks who the team is and what they should be
   able to build; "Joining a program" asks which program and where the
   visitor is now, and relabels company as "Current employer or college";
   "Not sure yet" asks what is on their mind.
4. Mobile length: the six answers become an accordion below 640px (first
   open); each program row folds its "What you build" list behind a toggle
   below 640px; the persona "First step" lines stay.
5. Facts row: "Since 2017 / Consulting and training from Gurugram", "IIT
   (BHU) / Where the senior faculty trained", "20+ years / What each mentor
   brings from industry", "Delhi NCR / On site, or live online and hybrid".

Also done: persona card 2 body rewritten for an L&D reader ("a program
your engineers finish with something running, and a cohort plan you can
put in front of finance"); the slide 1 tab label becomes "What we do".

## Left alone, and why

- The slider. Requested by the client; built with visible tabs so nothing
  depends on waiting.
- The photographs. Requested; they carry pacing, not proof, and the copy
  never leans on them.
- The straight answers on desktop. They are the voice of the page.
- The counters that are not there. Still the right call.

## Claims check on the new copy

"Twenty-plus years each": verified on the flyer. "Inside banks and Fortune
500 delivery": the UK bank, the international financial institution, the
consultancy serving Fortune 500 clients. "Six months to 90 days": the Drive
case study. The seven questions are practitioner guidance, not claims about
TEKMentors. Nothing new is asserted about clients, partners or outcomes.


## Outcome of revision 2 (build 3, 5 September 2026)

All five changes shipped and verified: zero axe violations, zero layout
shift, no overflow at nine widths, Lighthouse mobile 95 to 96 performance
with the rest at 100. Full report in `docs/qa/build-3/`.

The phone height did not fall the way the audit hoped. The two folds
removed about 1,300px but the checklist and the outcome card put 1,100px
back, so the page at 360 is 19,539px against 19,723px before. The Design
Lead's call: keep it. The added height is content a visitor chose to
expand or asked for, not filler, and the folds mean the two heaviest
sections now read in a third of the space. If a later analytics read shows
phone visitors dropping in the consulting section, the first lever is to
fold the checklist behind its heading on phones.
