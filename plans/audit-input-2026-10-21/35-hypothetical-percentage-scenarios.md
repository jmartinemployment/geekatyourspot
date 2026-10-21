# Invented percentage scenarios

Audit reference: GEO H3 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

Many pages state a precise result for an imagined company, such as "a mid-sized company could hypothetically see a 40% reduction in invoice processing time". That example is from `src/components/use-cases/accounting/accounts-payable/benefits-section.tsx:31`. Other examples, rechecked 2026-10-21:

- "In a hypothetical scenario, a small retailer could see a 30% increase in targeted ad engagement..." (`src/components/use-cases/marketing/ai-marketing-systems/measuring-sucess-roi.tsx:57`)
- "In an illustrative example, a hypothetical manufacturing firm might see a 40% reduction in processing..." (`src/components/use-cases/accounting/tax-compliance-regulations/challenges-section.tsx:60`)
- "Illustratively, a company implementing Basware might achieve a 40% reduction in invoice processing times and a 30% improvement in payment accuracy." (`src/data/tools/basware.ts:121`)

The counts:
- Audit count, 2026-10-20, from a crawl of the rendered site: 56 sentences on 30 pages.
- Rechecked 2026-10-21 in the source: about 22 sentences in 16 files mark a case as hypothetical, illustrative or representative and give a percentage. The two counts measure different things. The source count lists a shared component once, while the crawl counts every page it appears on. The crawl also caught scenario sentences that don't use those marker words.

Why it matters: a precise percentage reads as a measured result even when the sentence calls it hypothetical. AI answers lift the number and drop the word "hypothetical", and a buyer who checks finds no study behind it. The business has no published client results these could stand for, so they weaken trust instead of building it.

## What development mode means for it

The change is copy only. It can be done gradually before launch, and nothing is indexed until `ALLOW_INDEXING` is set.

## What I need from you

"Copy rewrite" here means editing each of these sentences so it no longer states an invented number. No layout changes.

1. What to do with each sentence:
   - **Rewrite it without the number,** for example "can cut invoice processing time substantially". The point stays, and nothing reads as a measured result.
   - **Delete it.** The text gets shorter, and some paragraphs may need a new closing sentence.
   - **Replace it with a sourced figure** where a real study exists. It's the strongest version, but every one needs a primary source and a date.
2. Who writes it: your content writer, or me by hand in a voice you name, such as `/methodology`'s.

## My recommendation

Recommendation: rewrite each sentence without the number, by hand, and use a sourced figure only where a primary source already exists. Most of these sentences make a reasonable point that only the invented number spoils, so removing the number is the smallest change that fixes the problem.

## The plan once you decide

1. Generate the full list of sentences from the source, with file and line, and recount them against a local build crawl.
2. Edit each sentence in both breakpoint copies where the component has two, and in the matching `src/data/tools/*.ts` entry where the registry repeats it.
3. Leave the personas framed as examples (from commit `3879807`) as they are. Only the invented percentages change.

## How I'll check it, and its status

- A text search for "hypothetical", "illustrative" and "representative scenario" next to a percentage finds none, except figures that now carry a source link.
- A crawl of a local build confirms the same.

**Status:** Open, waiting on your decision.
