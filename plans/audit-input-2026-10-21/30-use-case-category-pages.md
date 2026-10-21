# Pages at the 4 use-case category paths

Audit reference: SEO L5 in `plans/seo-audit-2026-10-20.md`

## The problem

Four use-case category paths return 404, while each category's hub page lives at a different URL. Rechecked 2026-10-21 from the route tree:

| Category path (404) | Where the category's hub lives today | Files that link the hub |
|---|---|---|
| `/use-cases/accounting/accounts-payable` | `/use-cases/accounting/accounts-payable/automated-accounts-payable` | 16 |
| `/use-cases/accounting/cash-flow-forecasting` | `/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting` | 13 |
| `/use-cases/marketing/content-creation-workflow` | `/use-cases/marketing/ai-content-creation-workflow` | 17 |
| `/use-cases/marketing/lead-capture-pipeline` | `/use-cases/marketing/intelligent-lead-capture-pipeline` | 13 |

The tax category already works the way the other four don't. Its hub sits at its own category path, `/use-cases/accounting/tax-compliance-regulations`, with its pillars under it.

Why it matters:
- Anyone who trims a pillar URL back one level lands on a 404.
- Two of the hubs sit outside the folder their pillars live in, so the URLs don't show which pages belong together.
- Breadcrumbs can't link these levels while they return 404.

## What development mode means for it

Moving a hub to a new URL costs nothing before launch. The old URL returns 404 with no redirect, and nothing is indexed until `ALLOW_INDEXING` is set. After launch, a move would need redirects.

## What I need from you

For each of the four categories, choose one:
- **Move the hub up to the category path.** The hub becomes `/use-cases/accounting/accounts-payable`, and so on. The structure then matches the tax hub, and there's one page per category. Every link to the old URL changes (13 to 17 files each), and the old URL returns 404.
- **Build a separate page at the category path** that lists the category's pillars and links to the hub. No URL changes, but the category has two overview pages, a hub and a listing, that cover the same ground.
- **Leave it as it is.** The path keeps returning 404.

## My recommendation

Recommendation: move each hub up to its category path. It's the pattern the tax hub already uses, it costs nothing before launch, and it avoids two overview pages competing for the same searches.

## The plan once you decide

For each hub you choose to move:
1. Move the route folder under `src/app/(site)/use-cases/` to the category path.
2. Update its canonical, Open Graph URL, JSON-LD `@id`s and the Service node from `pillarService` in `src/lib/seo/organization.ts`.
3. Update every link to the old URL: the navbar and menus in `src/data/navigation/site-menus.ts`, the home card in `src/components/home/use-cases.tsx` (both breakpoint copies), the `/use-cases` and department index cards, pillar and tool body links, and the `src/data` files that carry the URL.

For a separate page instead, add a `page.tsx` at the category path listing the category's pillars, with CollectionPage and ItemList JSON-LD as in `src/app/(site)/tools/accounting/page.tsx`.

## How I'll check it, and its status

- A local crawl finds no link to an old hub URL, no broken internal links, and every page reachable from `/`.
- The moved hub's canonical and JSON-LD use the new URL.

**Status:** Open, waiting on your decision.
