# The Pipedrive tool page

Audit reference: GEO M12, L12 and H11 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

Pipedrive is a sales CRM, and its page on this site is about lead scoring. The site files it in three places that don't match that, and the page sits outside the structure the newer tool pages follow.

Where it stands (rechecked 2026-10-21):
- **URL.** `/tools/marketing/pipedrive`, directly under `/tools/marketing`, with no use-case segment.
- **Template.** The older one: a hero plus Overview, Key Capabilities, Implementation and When to Use. The newer tool pages have seven sections after the hero, including cost and fit and pricing.
- **Menu.** It's listed twice in the Tools menu: under Content Creation Workflow (`src/data/navigation/site-menus.ts:219`) and under Automated Ad Spend Optimization (`:238`).
- **Home page.** It's on the Ad Spend card under "Dynamic Creative Optimization: Top AI Dynamic Optimization Tools", next to Madgicx, in both breakpoint copies (`src/components/home/use-cases.tsx:934` and `:1939`). Dynamic creative optimization is about ad creative, not CRM.
- **Links in.** 14 files, including:
  - the lead enrichment pillar's mechanics section;
  - six sections of the lead scoring blog post;
  - several lead capture tool pages.
- **Links out.** No link to a pillar page or a blog post.
- **Registry.** `src/data/tools/pipedrive.ts` has the keyword "Lead Scoring" and `relatedArticleId` pointing at the lead scoring blog post. It's entry `"pipedrive"` in `src/lib/tools-mapper.ts`.

You said on 2026-10-21: "5 tool pages I'll need to review, see if I can incorporate into Home->Use Case section."

## What development mode means for it

Moving or deleting the page costs nothing now: the old URL returns 404, with no redirect, and nothing has been indexed.

## What I need from you

1. **Where it lives.**
   - Keep it at `/tools/marketing/pipedrive`. No work.
   - Move it under a use case, for example `/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/pipedrive`. It joins a group and gets a pillar link, and its URL changes.
   - Delete it. Its 14 inbound links become plain text.
2. **Which menu group.** One of the two current groups, a different one such as Lead Capture Pipeline, or both as today.
3. **The home page item.** Keep it under Dynamic Creative Optimization, move it to another card item you name, or remove it from the home page.

## My recommendation

None. You said you'd review this page yourself.

## The plan once you decide

1. **Move:** rename the route folder, set `useCase` in `src/data/tools/pipedrive.ts`, and move its components from `src/components/tools/marketing/pipedrive/` to the matching use-case folder. Then update every inbound link.
2. **Menu:** edit or remove the two items in `src/data/navigation/site-menus.ts`.
3. **Home:** move or remove the item in both breakpoint copies of `src/components/home/use-cases.tsx`, keeping the `gtmLinkIdFromHref` ids and the `-lg` suffix in the desktop copy.
4. **Pillar link:** add a link from the page to the pillar you choose.
5. **Delete:** remove the route, components, registry file, mapper entry and menu items, and turn the inbound links into plain text.

## How I'll check it, and its status

- A crawl of the local build finds no broken link.
- The menu lists the page where you chose.
- The two home page copies still match.

**Status:** Open, waiting on your decision.
