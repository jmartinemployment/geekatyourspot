# A sentence on the home page saying who the business is

Audit reference: GEO H4 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

No sentence on the home page says who the business is, where it is and what it does.

- The visible text names the business only in the footer copyright, "© 2026 Geek @ Your Spot LLC" (`src/components/layout/footer.tsx:163`). The hero image's alt text also names it (`src/components/home/hero-section.tsx:68`), but visitors don't see alt text. Rechecked 2026-10-21.
- The hero says what is offered but not who offers it. The H1 is "AI Integration & Automation Solutions for Small Businesses", and the line under it is "Scale Your Operations and Boost Efficiency with Artificial Intelligence".
- The scheduler line on the home page, "South Florida technology consultancy serving small businesses in Miami-Dade, Broward, and Palm Beach." (`src/components/shared/scheduler/scheduler-shell.tsx:35`), describes the business without naming it.

Why it matters: when an AI answer describes a local business, it quotes one plain sentence that names it, places it and says what it does. Search engines use the same sentence to connect the page with the business's Google Business Profile. Today the home page leaves them to piece that together from the footer and the meta description.

## What development mode means for it

The change is copy only and can be edited freely before launch. Search engines won't read it until `ALLOW_INDEXING` is set.

## What I need from you

1. Approve, edit or replace this proposed sentence:

   > Geek @ Your Spot LLC is an AI implementation consultancy in Delray Beach, Florida, that helps small businesses in Miami-Dade, Broward, and Palm Beach automate their accounting and marketing work.

2. Choose where it goes:
   - **Under the hero's second line, above the "Get Your Free AI Assessment" button.** It's the first thing read on the page, but it adds a third line to the hero.
   - **As the first paragraph of the next section.** The hero stays as it is, but the sentence is read later.

## My recommendation

Recommendation: use the sentence under the hero's second line. A crawler and a visitor both meet it first. It also names the place and the service area, which the hero doesn't.

## The plan once you decide

1. Add the approved sentence to both hero blocks in `src/components/home/hero-section.tsx`: the phone block (`lg:hidden`, from line 8) and the desktop block (`hidden lg:block`, from line 33). Use the same text and the same placement in each.
2. Style it with the classes the hero's second line already uses in each block, so nothing new is introduced.
3. Change nothing else in the hero.

## How I'll check it, and its status

- On a local build, the sentence appears once in each hero block with identical text, and the two copies of the home page still match.
- At 390 and 1440 px, headless Playwright shows no overflow.

**Status:** Open, waiting on your decision.
