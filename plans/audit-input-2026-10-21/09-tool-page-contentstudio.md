# The ContentStudio tool page

Audit reference: GEO L12 and H11 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

ContentStudio is a content discovery, repurposing and social scheduling platform. Its page on this site is titled "ContentStudio for AI Content Repurposing". It isn't on the home page, and it sits outside the structure the newer tool pages follow.

Where it stands (rechecked 2026-10-21):
- **URL.** `/tools/marketing/contentstudio`, directly under `/tools/marketing`, with no use-case segment.
- **Content.** Four H2s, so four sections: Overview, Key Capabilities, Implementation Considerations and When to Use. That's about 1,000 words, with no FAQ and no pricing. A page has one section per H2, and the 77 tool pages under a use-case segment have 7 to 12 H2s, most with an FAQ and a pricing section.
- **Menu.** It's under Content Creation Workflow in the Tools menu (`src/data/navigation/site-menus.ts:208`).
- **Home page.** Not linked.
- **Links in.**
  - The Content Creation Workflow hub, `/use-cases/marketing/ai-content-creation-workflow`, in five of its sections: lede, bulk social media scheduling, SEO blog article generation, personalized email campaigns and AI content repurposing.
  - Zapier's overview section.
- **Links out.** One link, to the AI Content Repurposing blog post. No link to a pillar page.
- **Registry.** `src/data/tools/contentstudio.ts` has `relatedArticleId` pointing at the AI Content Repurposing blog post. It was added on 2026-10-21 in `8d602e1`, and it's entry `"contentstudio"` in `src/lib/tools-mapper.ts`. Its components are in `src/components/tools/contentstudio/`.

You said on 2026-10-21: "5 tool pages I'll need to review, see if I can incorporate into Home->Use Case section."

## What development mode means for it

Moving or deleting the page costs nothing now: the old URL returns 404, with no redirect, and nothing has been indexed.

## What I need from you

Pick one:
1. **Keep it where it is.** No work. It stays outside the use-case structure, with no pillar link.
2. **Move it under a use case**, for example a Content Creation Workflow group. It joins a group and gets a pillar link, and its URL changes.
3. **Add it to the home page's Use Cases section.** You'd name the card and the item it goes under, and it gains a home link.
4. **Delete it.** The hub's five links and Zapier's link become plain text.

Options 2 and 3 can be combined.

## My recommendation

None. You said you'd review this page yourself.

## The plan once you decide

1. **Move:** rename the route folder, set `useCase` in `src/data/tools/contentstudio.ts`, and move `src/components/tools/contentstudio/` to the matching use-case folder. Then update the links in the hub sections and Zapier's overview.
2. **Home:** add a link in both breakpoint copies of `src/components/home/use-cases.tsx`, using `gtmLinkIdFromHref` like the other items, with the `-lg` id suffix in the desktop copy.
3. **Pillar link:** add a link from the page to the pillar you choose.
4. **Delete:** remove the route, components, registry file, mapper entry and menu item, and turn the inbound links into plain text.

## How I'll check it, and its status

- A crawl of the local build finds no broken link.
- `/tools` shows the page with the right name, or no longer shows it if deleted.
- The two home page copies still match.

**Status:** Open, waiting on your decision.
