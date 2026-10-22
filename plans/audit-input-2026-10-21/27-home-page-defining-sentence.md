# A sentence on the home page saying who the business is

Audit reference: GEO H4 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

No sentence on the home page says who the business is, where it is and what it does.

- The visible text names the business only in the footer copyright, "© 2026 Geek @ Your Spot LLC" (`src/components/layout/footer.tsx:164`). The hero image's alt text also names it (`src/components/home/hero-section.tsx:65`), but visitors don't see alt text. Rechecked 2026-10-21.
- The hero says what is offered but not who offers it. The H1 is "AI Automation for Business", with "Business" on its own line, and the line under it is "Scale Your Operations and Boost Efficiency with Artificial Intelligence". Rechecked 2026-10-21.
- The scheduler line on the home page, "South Florida technology consultancy serving small businesses in Miami-Dade, Broward, and Palm Beach." (`src/components/shared/scheduler/scheduler-shell.tsx:38`), describes the business without naming it.

Why it matters: when an AI answer describes a local business, it quotes one plain sentence that names it, places it and says what it does. Search engines use the same sentence to connect the page with the business's Google Business Profile. Today the home page leaves them to piece that together from the footer and the meta description.

## What development mode means for it

The change is copy only and can be edited freely before launch. Search engines won't read it until `ALLOW_INDEXING` is set.

## The direction, set by the owner on 2026-10-22

Five plain one-line sentences were offered on 2026-10-22 and rejected as flat. The owner wants a mission statement instead, probably as its own section, and sketched it:

> Connecting companies to what really matters
> Most companies use tools that don't talk to each other. Geek @ Your Spot LLC brings them together, so every action builds on the last, and nothing gets lost between channels.
> Content that doesn't convert. Campaigns without reach. Emails that carry no message.
> Geek @ Your Spot LLC connects the three levers that drive growth, in one continuous flow.

The drafts below keep that voice and that argument. The business name appears only as the subject of its own sentence, as in the sketch. The first set of drafts carried the place inside an appositive, "Geek @ Your Spot LLC, an AI consultancy in Delray Beach, Florida,"; the owner rejected that on 2026-10-22 as something no website does, so the place is out of the mission and is carried by the scheduler line instead, as proposed below. Three things changed from the sketch, each the owner's call to reverse:

- **The three levers are leads, content, and the books.** The sketch's three pain points are all marketing. Accounting is half the site, so the levers are mapped to the three home cards: AI Sales Force Automation Software is the leads, AI Content Marketing Platforms is the content, and AI Accounting is the books.
- **The body says small businesses, not companies.** The site serves small businesses only. The heading keeps the owner's "companies"; an alternative heading is offered.
- **Full sentences and no dashes.** The site's copy rule. The three fragments in the sketch are written as sentences.

### Draft 1, closest to the sketch

**Connecting companies to what really matters**

Most small businesses run on tools that don't talk to each other. Geek @ Your Spot LLC brings them together, so every action builds on the last, and nothing gets lost between channels.

Content that doesn't convert, campaigns without reach, and emails that carry no message all come from the same gap. Geek @ Your Spot LLC connects the three levers that drive growth, the leads you capture, the content you publish, and the books you run on, in one continuous flow.

### Draft 2, shortest

**Connecting companies to what really matters**

Your tools don't talk to each other, so your leads, your content, and your books each sit in their own silo. Geek @ Your Spot LLC wires them into one continuous flow. Every action builds on the last, and nothing gets lost between channels.

### Draft 3, the three pain points carry the argument

**One flow instead of three silos**

Content that doesn't convert is content nobody followed up on. A campaign without reach is a campaign the data never saw. An email that carries no message was written without the customer in view. Each one is a tool working alone. Geek @ Your Spot LLC connects the three levers that drive growth, the leads you capture, the content you publish, and the books you run on, into one continuous flow.

### Alternative heading

"Connecting your business to what really matters" says small business without the words, and reads to the visitor as about them.

### Where the place goes

H4 wants the home page to name the business, place it and say what it does. The mission now names it and says what it does. The scheduler line already places it and says what it does on every page, but doesn't name it:

> South Florida technology consultancy serving small businesses in Miami-Dade, Broward, and Palm Beach.

Proposed, one edit in `src/components/shared/scheduler/scheduler-shell.tsx:38`:

> Geek @ Your Spot LLC is a South Florida technology consultancy serving small businesses in Miami-Dade, Broward, and Palm Beach.

That one sentence then does the quoting job for AI answers and the profile match, where a plain sentence is expected, and the mission section stays a mission.

## What I need from you

1. Pick a draft, edit it, or write the version you want.
2. Confirm it is its own section. The proposal is a new section between the hero and "Clone Yourself", so the hero stays exactly as it is.
3. Say yes or no to the heading alternative.
4. Say yes or no to naming the business in the scheduler line.

## My recommendation

Recommendation: Draft 1 as its own section directly under the hero, and yes to the scheduler line. Draft 1 keeps the most of the owner's sketch and names all three levers, so accounting is in the home page's first screen of copy. The scheduler line carries the place without putting it in the mission.

## The plan once you decide

1. Add a section component in `src/components/home/`, with two blocks, one `lg:hidden` and one `hidden lg:block`, each carrying the same heading and paragraphs.
2. Style the heading and paragraphs with the classes the "Clone Yourself" section already uses for its `h2` and its first `p`, so nothing new is introduced. Show the section on a local build before committing it, since it changes how the home page looks.
3. Render it in `src/app/(site)/page.tsx` between `HeroSection` and `CloneYourselfSection`.
4. Change nothing in the hero.
5. If yes to the scheduler line, change that one sentence in `scheduler-shell.tsx`. It renders on every page.
6. If you say yes to it, put the scheduler sentence in the Organization node's `description` in `src/lib/seo/organization.ts` and in document 46's profile draft, so the page, the profile and the structured data carry one wording.

## How I'll check it, and its status

- On a local build, the section appears once in each breakpoint block with identical text, and the two copies of the home page still match.
- At 390 and 1440 px, headless Playwright shows no overflow.
- `/llms.txt` is unaffected, because no page is added.

**Status:** Open, waiting on your decision.
