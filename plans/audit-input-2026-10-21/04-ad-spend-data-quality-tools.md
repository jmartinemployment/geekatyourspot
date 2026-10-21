# Data-quality tools in the ad spend group

Audit reference: GEO M12 and decision 8 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

Four tools are presented as ad spend tools, but they're built for data engineering teams that test data pipelines and data warehouses:
- **Anomalo** monitors data quality in warehouses.
- **Great Expectations** is an open-source framework for writing data validation tests.
- **Monte Carlo** is a data observability platform.
- **Qualytics** is a data quality platform.

A small business optimizing its ad spend wouldn't buy any of them. Presenting them as ad spend tools makes the site look like it doesn't know the category, which matters to buyers and to AI engines checking claims.

Where they appear (rechecked 2026-10-21):
- **Tools menu.** All four are under "Automated Ad Spend Optimization" in `src/data/navigation/site-menus.ts:233`, `:234`, `:236` and `:239`.
- **Home page.** The Ad Spend card lists all four under "Data Quality Assessments: Top AI Data Quality Tools", in both breakpoint copies (`src/components/home/use-cases.tsx`, around lines 1003 to 1022 and 2007 to 2026).
- **The ad spend pillar.**
  - All four are linked in `src/components/use-cases/marketing/automated-ad-spend-optimization/data-quality-assessments-section.tsx`.
  - Anomalo, Great Expectations and Qualytics are also linked in `data-validation-cleaning-section.tsx`.
- **Their own pages.** `/tools/marketing/anomalo`, `/tools/marketing/great-expectations`, `/tools/marketing/monte-carlo` and `/tools/marketing/qualytics`. Each has components in `src/components/tools/<tool>/`, a registry entry in `src/data/tools/<tool>.ts`, and an entry in `src/lib/tools-mapper.ts`.
- **How the registry describes them.** As ad spend tools, for example "Optimize ad spend with Anomalo's automated data quality assurance, ensuring reliable insights for better ROI."

## What development mode means for it

Deleting a page costs nothing now: it returns 404, with no redirect, and nothing has been indexed.

## What I need from you

Pick one:
1. **Delete the four tool pages.**
   - The menu, home card and pillar stop pointing at tools that don't fit.
   - The pillar's data-quality sections lose their links, and the home card's "Data Quality Assessments" item loses its tool line.
2. **Keep the pages and rewrite them** as data-foundation tools for companies with a data team. They stay accurate, but they stay outside what the site sells to small businesses.
3. **Keep everything as it is.** No work, and the mismatch stays.

If you choose deletion, also say what happens to the home card's "Data Quality Assessments" item:
- keep the item without a tool line;
- or remove the item.

## My recommendation

Recommendation: delete the four pages. Keep the pillar's point that ad spend decisions need clean data, with the tool names as plain text. You decide the home card item.

Reason: the pillar's point is sound, and the tools behind it aren't something the business would set up for a small business client.

## The plan once you decide

For option 1:
1. Delete `src/app/(site)/tools/marketing/<tool>/`, `src/components/tools/<tool>/` and `src/data/tools/<tool>.ts` for each of the four.
2. Remove the four imports and entries from `src/lib/tools-mapper.ts`.
3. Remove the four items from the ad spend group in `src/data/navigation/site-menus.ts`.
4. Turn the links in the two pillar sections into plain text.
5. Apply your choice for the home card item in both breakpoint copies.

Option 2 is a copy rewrite of the four pages. Option 3 changes nothing.

## How I'll check it, and its status

- A crawl of the local build finds no link to the four URLs and no other broken link.
- `/tools` lists 86 cards and `/tools/marketing` 40.
- The phone and desktop copies of the home page still match.

**Status:** Open, waiting on your decision.
