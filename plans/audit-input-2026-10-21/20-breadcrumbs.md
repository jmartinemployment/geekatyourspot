# Breadcrumbs

Audit reference: SEO L5 in `plans/seo-audit-2026-10-20.md`, and GEO M14 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

- No page shows a breadcrumb trail (rechecked 2026-10-21). A trail is a line such as "Home > Tools > Accounting > Bill" that shows where a page sits.
- The only breadcrumb markup is a one-item `BreadcrumbList` on the home page (`src/app/(site)/page.tsx:85`). The audit counted 431 pages without one (audit count, 2026-10-20).
- A breadcrumb component already exists at `src/components/ui/breadcrumb.tsx`, and nothing uses it (rechecked 2026-10-21).
- Many levels a trail would name have no page (rechecked 2026-10-21):
  - **20 tools levels**, such as `/tools/accounting/accounts-payable` and `/tools/accounting/accounts-payable/automated-approval-workflows`;
  - **4 use-case levels**, such as `/use-cases/accounting/accounts-payable`;
  - **the blog's department levels**, `/blog/accounting` and `/blog/marketing`, which have no page file.

  The glossary levels all exist.

Why it matters:
- A trail lets readers go up a level without the menu.
- Google can show the trail in search results instead of the URL, and `BreadcrumbList` is one of the rich results the site can still earn.
- AI crawlers use the trail to understand how pages relate.
- Google expects every step in the markup, except the last, to be a working URL. A step with no page can't be linked there.

## What development mode means for it

The trail can be built and changed now at no cost. Nothing reaches search before launch, and levels that gain a page later can become links then.

## What I need from you

1. **Where it shows, and how it looks.** For example, a small line above the main heading in the hero, or a line under the navbar. Both breakpoint copies get it. The font stays as it is.
2. **What a level with no page does.**
   - **Plain text, no link.** The trail is complete for readers, and the markup skips that step.
   - **Left out.** The trail is shorter, and the hierarchy is less visible.
3. **Which pages get it.** Every page except the home page, or only tool, pillar, blog and glossary pages.

## My recommendation

Recommendation: a small line above the main heading, on every page except the home page, with plain text for levels that have no page.

Reason: readers see the full path, the markup only links pages that exist, and each plain step can become a link the day its page is built.

## The plan once you decide

1. Build one breadcrumb component on `src/components/ui/breadcrumb.tsx`.
   - It reads the route path.
   - It takes labels from `src/data/navigation/site-menus.ts` and each page's title.
   - It checks at build time whether each level has a page, the way `hasPage` does in `src/app/(site)/tools/accounting/page.tsx`.
2. Have it print `BreadcrumbList` markup through `safeJsonLd` in `src/lib/seo/json-ld.ts`, linking only the levels that have a page.
3. Add it in the place you choose, in both breakpoint copies.

## How I'll check it, and its status

- A crawl of the local build finds one `BreadcrumbList` on every page that should have one, and every URL in it returns 200.
- The visible trail matches the markup, and the phone and desktop copies match.
- Google's Rich Results Test passes on a sample of five page types.

**Status:** Open, waiting on your decision.
