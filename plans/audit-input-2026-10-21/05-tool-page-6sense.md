# The 6sense tool page

Audit reference: GEO M12, L12 and H11 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

6sense is an account-based marketing and predictive lead scoring platform built for larger B2B sales teams. The audit noted it's filed under small business lead capture (M12). Its page sits outside the structure the newer tool pages follow.

Where it stands (rechecked 2026-10-21):
- **URL.** `/tools/marketing/6sense`, directly under `/tools/marketing`, with no use-case segment.
- **Content.** Four H2s, so four sections: Overview, Key Capabilities, Implementation Considerations and When to Use. That's about 550 words, with no FAQ and no pricing. A page has one section per H2, and the 77 tool pages under a use-case segment have 7 to 12 H2s, most with an FAQ and a pricing section.
- **Menu.** It's under Lead Capture Pipeline in the Tools menu (`src/data/navigation/site-menus.ts:183`).
- **Home page.** Not linked.
- **Links in.** Snitcher's and Leadfeeder's comparing sections, and three sections of the lead scoring blog post.
- **Links out.** No link to a pillar page or a blog post.
- **Registry.** `src/data/tools/6sense.ts` has the keyword "Lead Scoring" and `relatedArticleId` pointing at the lead scoring blog post. It's entry `"6sense"` in `src/lib/tools-mapper.ts`.

You said on 2026-10-21: "5 tool pages I'll need to review, see if I can incorporate into Home->Use Case section."

## What development mode means for it

Moving or deleting the page costs nothing now: the old URL returns 404, with no redirect, and nothing has been indexed.

## What I need from you

Pick one:
1. **Keep it where it is.** No work, but it stays outside the use-case structure, with no pillar link.
2. **Move it under a use case**, for example `/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/6sense`.
   - It joins a group and gets a pillar link.
   - Its URL changes, so every link to it is updated.
3. **Add it to the home page's Use Cases section.** You'd name the card and the item it goes under. It gains a home link.
4. **Delete it.** That removes a tool built for larger companies, and the five links to it become plain text.

Options 2 and 3 can be combined.

## My recommendation

None. You said you'd review this page yourself.

## The plan once you decide

1. **Move:** rename the route folder, set `useCase` in `src/data/tools/6sense.ts`, and move its components under the matching `src/components/tools/marketing/...` folder. Then update the menu item in `site-menus.ts` and the links in the five files that point at it.
2. **Home:** add a link in both breakpoint copies of `src/components/home/use-cases.tsx`, using `gtmLinkIdFromHref` like the other items, with the `-lg` id suffix in the desktop copy.
3. **Pillar link:** add a link from the page to the pillar you choose.
4. **Delete:** remove the route, components, registry file, mapper entry and menu item, and turn the five inbound links into plain text.

## How I'll check it, and its status

- A crawl of the local build finds no broken link.
- `/tools` shows the page with the right name, or no longer shows it if deleted.
- The two home page copies still match.

**Status:** Open, waiting on your decision.
