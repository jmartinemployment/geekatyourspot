# Pages that open with a slogan

Audit reference: GEO M1 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

Many pages introduce themselves with a slogan verb, "Explore", "Discover how" or "Revolutionize", instead of saying plainly what the topic is.

- Audit count, 2026-10-20, from a crawl of the rendered site: 44 of 158 pages open with "Revolutionize", "Discover how" or "Explore", and only 9 open with a definition. The FAQ, the part most often quoted, sits at about 95% of the way down the page text, and blocks run 364 to 642 words under each heading.
- Rechecked 2026-10-21 in the source:
  - No visible paragraph in the components begins with these words.
  - Where they remain is the page descriptions and summaries, the text that appears in search results, share cards and the hero. "Explore" opens 51 description or summary fields in 14 files, "Discover how" opens 8 in 8 files, and "Revolutionize" opens 4 in 4 files.
  - One page repeats its description in its metadata, Open Graph, Twitter and JSON-LD, so one page accounts for several fields.
  - Examples: "Explore AI Marketing Systems that strengthen small business strategy...", "Explore the Intelligent Lead Capture Pipeline to enhance lead generation..." and "Revolutionize your financial operations with automated accounts payable solutions...".

Why it matters: the description is the sentence search results and AI answers show first. "Explore X" tells a reader nothing about X, while a description that says what X is, who it suits and where is the one that gets quoted and clicked. The same goes for a page's opening paragraph.

## What development mode means for it

The change is copy only. It can be done gradually before launch, and nothing is indexed until `ALLOW_INDEXING` is set.

## What I need from you

"Copy rewrite" here means writing a plain opening for each page: a description and a first paragraph that say what the topic is, who it's for, what it costs where that's known, and where the business works. No layout changes.

1. Scope:
   - **The descriptions only.** It's small and quick, and it fixes what shows in search results.
   - **The descriptions plus a 40 to 60 word answer at the top of each pillar and tool page.** This is the audit's fix. It also gives AI answers a quotable opening, but it's a larger job.
2. Who writes it: your content writer, or me by hand in a voice you name, such as `/methodology`'s.

## My recommendation

Recommendation: do both, starting with the descriptions of the 23 pillars, then add the 40 to 60 word answer to each pillar, by hand. The descriptions are the fastest win and the pillars are the pages AI answers quote most.

## The plan once you decide

1. List every description and summary field that opens with a slogan verb, from `src/app/(site)/**/page.tsx` and `src/data/**`.
2. Rewrite each in full sentences under 160 characters. Change the metadata, Open Graph, Twitter and JSON-LD copies of a page together, so they stay identical.
3. If you choose the larger scope, add the opening answer as the first paragraph of each pillar and tool page, in both breakpoint copies.

## How I'll check it, and its status

- A search of the source finds no description or summary opening with "Explore", "Discover how" or "Revolutionize".
- A crawl of a local build confirms every description is 160 characters or less and identical across its four copies.

**Status:** Open, waiting on your decision.
