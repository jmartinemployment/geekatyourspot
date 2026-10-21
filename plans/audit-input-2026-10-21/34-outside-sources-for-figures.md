# Outside sources for figures site-wide

Audit reference: GEO H3 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

Most pages state figures, such as prices, percentages and market facts, without linking where they come from.

- Audit count, 2026-10-20, from a crawl of the rendered site: about 26 to 27 of 432 pages linked any outside source. That was 0 of 23 pillars, about 3 of 32 posts and 23 of 90 tool pages.
- Rechecked 2026-10-21 in the source:
  - 1 of the 25 use-case component folders links an outside source, the Multi-State Sales Tax Nexus pillar, whose state agency links were added for GEO C1.
  - 28 of the 95 tool component folders contain at least one outside link. This count includes links to a vendor's own site or pricing page.
- The audit's example of a source named but not linked, "as reported in Software Comparison" on Bill's approval workflows page, is now linked, to `https://www.bill.com/listicle`. That's in `src/components/tools/accounting/accounts-payable/automated-approval-workflows/bill/evaluating-section.tsx:16`, rechecked 2026-10-21. The page it links is Bill's own.

Why it matters: AI answers prefer to cite pages that cite their own sources, and they check figures against sources they already know. A page full of unlinked numbers gives them nothing to confirm, so they quote someone else. For a buyer, a dated link is also what makes a price or a percentage believable.

## What development mode means for it

The change is copy and links only. It can be done gradually before launch, and nothing is indexed until `ALLOW_INDEXING` is set.

## What I need from you

"Copy rewrite" here means going through each page, finding each figure, and either linking it to the place it comes from, with the date it was checked, or removing it. No layout changes.

1. Who does the sourcing:
   - **Your content writer**, as new exports with sources built in, which I lay out. It fixes the problem at its origin for future pages too, but it means a new run for each page.
   - **Me, by hand.** I find the primary source for each figure on the existing pages, link it with an "as of" date, and remove figures with no source. It's quicker for the existing pages, but future exports would arrive without sources again.
2. What happens to a figure with no findable source: remove it, or reword the sentence without the number.
3. Whether a vendor's own page counts as a source for that vendor's prices and features. It's authoritative for the price, but not independent.

## My recommendation

Recommendation: source by hand on the existing pages, starting with the 23 pillars, and remove any figure without a source. Separately, ask the content writer to include sources in future exports. The pillars carry the most figures and are the pages AI answers quote most. A vendor's own pricing page is the right source for its price.

## The plan once you decide

1. List every percentage, dollar figure and statistic on each pillar's components under `src/components/use-cases/`.
2. For each figure, link the primary source inline, in the site's existing outside-link style (`target="_blank" rel="noopener noreferrer"`), with an "as of" date. Change both breakpoint copies together.
3. Remove or reword figures with no source, in both copies.
4. Repeat for the tool pages under `src/components/tools/`.

## How I'll check it, and its status

- A script lists every figure on each page and the outside link next to it. No figure is left without a link or a removal.
- A crawl of a local build confirms that every outside link returns a page.

**Status:** Open, waiting on your decision.
