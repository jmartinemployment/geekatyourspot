# Pages at the 5 tool category paths

Audit reference: SEO L5 in `plans/seo-audit-2026-10-20.md`

## The problem

The tools section has three levels: the department hub (`/tools/accounting`, `/tools/marketing`), a category, and a group with the tool pages under it. The department hubs exist, but none of the five category levels has a page. Rechecked 2026-10-21 from the route tree:

| Category path | Groups under it |
|---|---|
| `/tools/accounting/accounts-payable` | 4 |
| `/tools/accounting/cash-flow-forecasting` | 3 |
| `/tools/accounting/tax-compliance-regulations` | 3 |
| `/tools/marketing/content-creation-workflow` | 2 |
| `/tools/marketing/lead-capture-pipeline` | 3 |

Each one returns 404.

Why it matters:
- Anyone who trims a tool URL back two levels lands on a 404.
- Search engines read the URL path as the site's structure, and a level with no page breaks that structure.
- Breadcrumbs can't link these levels while they return 404.

## What development mode means for it

New pages cost nothing to add before launch, and nothing is indexed until `ALLOW_INDEXING` is set. New routes enter the sitemap automatically (`src/app/sitemap.ts`).

## What I need from you

1. Build pages at these five paths: yes or no.
2. If yes, choose what each holds:
   - **A listing of the category's groups**, each linking down to its group, with a short intro. This keeps the page light, but a visitor needs one more click to reach a tool.
   - **A listing of every tool in the category**, grouped under the group names, in the card style of `/tools/accounting`. A visitor reaches any tool in one click, but the page is long for accounts payable.
3. Where the intro copy comes from: your content writer, or me drafting it for you to approve.

## My recommendation

Recommendation: build all five as listings of every tool in the category, grouped under the group names. It matches the department hubs visitors already know, and it puts every tool one click away.

## The plan once you decide

1. Add `page.tsx` at each of the five paths under `src/app/(site)/tools/`.
2. Reuse the department hub pattern in `src/app/(site)/tools/accounting/page.tsx`: `getToolsByDepartment`, `toolHref`, `hasPage`, `toolCardLabel` from `src/data/navigation/site-menus.ts`, the card markup, and the CollectionPage with ItemList JSON-LD.
3. Select the category's tools by the first part of the registry `useCase` field, for example `accounts-payable/...`.
4. Add each page's metadata and canonical, and a link up to its department hub.

## How I'll check it, and its status

- On a local build, all five paths return 200.
- A crawl finds no broken links, and each page lists exactly the tools whose `useCase` starts with its category.
- At 390 and 1440 px, headless Playwright shows no card overflowing.

**Status:** Open, waiting on your decision.
