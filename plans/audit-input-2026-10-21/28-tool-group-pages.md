# Pages at the 15 tool group paths

Audit reference: GEO H12 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

Each tool page sits under a group path, and none of those 15 group paths has a page of its own. Rechecked 2026-10-21 from the route tree:

| Group path | Tool pages under it |
|---|---|
| `/tools/accounting/accounts-payable/automated-approval-workflows` | 5 |
| `/tools/accounting/accounts-payable/automated-data-entry-processing` | 3 |
| `/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls` | 3 |
| `/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai` | 5 |
| `/tools/accounting/cash-flow-forecasting/automated-accounts-receivable` | 5 |
| `/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data` | 5 |
| `/tools/accounting/cash-flow-forecasting/intelligent-resource-planning` | 5 |
| `/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws` | 5 |
| `/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus` | 5 |
| `/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification` | 5 |
| `/tools/marketing/content-creation-workflow/intelligent-content-generation` | 11 |
| `/tools/marketing/content-creation-workflow/intelligent-content-planning` | 5 |
| `/tools/marketing/lead-capture-pipeline/cross-platform-chatbot` | 5 |
| `/tools/marketing/lead-capture-pipeline/intelligent-receptionist` | 5 |
| `/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring` | 5 |

Each path returns 404. On 2026-10-21 you wrote: "/tools/accounting/accounts-payable/automated-approval-workflows = Needs a page".

Why it matters:
- Anyone who trims a tool URL back one level lands on a 404.
- Searches that compare tools in one group, such as "Bill vs Melio", "TaxJar vs TaxCloud" and "Gusto vs Rippling", are won by comparison pages. The site has none, and no South Florida competitor in the crawl compares these tools. That is audit count, 2026-10-20, from the competitor pages audit.
- 41 of the 77 grouped tool pages already have a comparison section to draw on. That is also an audit count from 2026-10-20. The 77 is rechecked from the registry.

## What development mode means for it

New pages cost nothing to add or change before launch, and nothing is indexed until `ALLOW_INDEXING` is set. The sitemap picks up new routes automatically (`src/app/sitemap.ts` reads the app folder).

## What I need from you

1. What a group page holds:
   - **A tool listing:** a short intro, the tool cards and a link up to the pillar. It's quick to build from what the site has, but it gives comparison searches little to work with.
   - **A comparison:** the intro, a table comparing the tools (price, what each does in this use, accounting or CRM integrations), the cards and the pillar link. It answers "X vs Y" searches, but every price and feature has to be checked on the vendor's site and dated.
2. Where the copy comes from:
   - your content writer, as a new export that I lay out; or
   - text drawn from what the site already has, such as each tool page's comparison section and meta description.
3. Whether to start with one group for you to review, or build all 15.

## My recommendation

Recommendation: build comparison pages, starting with approval workflows (ApprovalMax, Bill, Melio, Ramp and Stampli), and review that one on the site before the other 14. Comparison is what these searches reward, and it's the one kind of page local competitors don't have.

## The plan once you decide

1. Build one shared group-page component, so all 15 pages share one layout. Reuse the pattern in `src/app/(site)/tools/accounting/page.tsx`: `getToolsByDepartment`, `toolHref`, `hasPage`, the card markup, and the CollectionPage with ItemList JSON-LD.
2. Select each group's tools by the registry `useCase` field in `src/data/tools/*.ts`, for example `accounts-payable/automated-approval-workflows`.
3. On a group page, show the cards with the plain tool name ("Bill"), because every card on the page shares the same use.
4. Add `page.tsx` at each group path, with metadata, the canonical and a link up to the group's pillar page.
5. For a comparison page, add the table with each price linked to its source and dated.

## How I'll check it, and its status

- On a local build, each built group path returns 200.
- A crawl finds no broken links, and the ItemList URLs match the cards.
- Every table price has a source link and a date.

**Status:** Open, waiting on your decision.
