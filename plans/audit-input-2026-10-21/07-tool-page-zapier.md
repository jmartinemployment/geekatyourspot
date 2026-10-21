# The Zapier tool page

Audit reference: GEO M12, L12 and H11 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

Zapier connects apps so work flows between them without manual steps. Its page on this site is about automating content repurposing. The site files it in places that don't match that, and the page sits outside the structure the newer tool pages follow.

Where it stands (rechecked 2026-10-21):
- **URL.** `/tools/marketing/zapier`, directly under `/tools/marketing`, with no use-case segment.
- **Content.** Four H2s, so four sections: Overview, Key Capabilities, Implementation Considerations and When to Use. That's about 1,030 words, with no FAQ and no pricing. A page has one section per H2, and the 77 tool pages under a use-case segment have 7 to 12 H2s, most with an FAQ and a pricing section.
- **Menu.** It's listed twice in the Tools menu: under Content Creation Workflow (`src/data/navigation/site-menus.ts:225`) and under Automated Ad Spend Optimization (`:240`).
- **Home page.** It's on the Ad Spend card under "Automated Rules & Bidding: Top AI Automated Bidding Tools", in both breakpoint copies (`src/components/home/use-cases.tsx:955` and `:1960`). Zapier doesn't bid on ads.
- **Links in.** 16 files, mostly tool pages that mention Zapier as an integration, across accounting, content and lead capture.
- **Links out.** One link, to the AI Content Repurposing blog post. No link to a pillar page.
- **Registry.** `src/data/tools/zapier.ts` has `relatedArticleId` pointing at the AI Content Repurposing blog post and content repurposing keywords. It's entry `"zapier"` in `src/lib/tools-mapper.ts`. Its components are in `src/components/tools/zapier/`.

You said on 2026-10-21: "5 tool pages I'll need to review, see if I can incorporate into Home->Use Case section."

## What development mode means for it

Moving or deleting the page costs nothing now: the old URL returns 404, with no redirect, and nothing has been indexed.

## What I need from you

1. **Where it lives.**
   - Keep it at `/tools/marketing/zapier`. No work.
   - Move it under a use case, for example under Content Creation Workflow. It joins a group and gets a pillar link, and its URL changes.
   - Delete it. Its 16 inbound links become plain text.
2. **Which menu group.** One of the two current groups, or both as today.
3. **The home page item.** Keep it under Automated Rules & Bidding, move it to another card item you name, or remove it from the home page.

## My recommendation

None. You said you'd review this page yourself.

## The plan once you decide

1. **Move:** rename the route folder, set `useCase` in `src/data/tools/zapier.ts`, and move `src/components/tools/zapier/` to the matching use-case folder. Then update every inbound link.
2. **Menu:** edit or remove the two items in `src/data/navigation/site-menus.ts`.
3. **Home:** move or remove the item in both breakpoint copies of `src/components/home/use-cases.tsx`, keeping the `gtmLinkIdFromHref` ids and the `-lg` suffix in the desktop copy.
4. **Pillar link:** add a link from the page to the pillar you choose.
5. **Delete:** remove the route, components, registry file, mapper entry and menu items, and turn the inbound links into plain text.

## How I'll check it, and its status

- A crawl of the local build finds no broken link.
- The menu lists the page where you chose.
- The two home page copies still match.

**Status:** Open, waiting on your decision.
