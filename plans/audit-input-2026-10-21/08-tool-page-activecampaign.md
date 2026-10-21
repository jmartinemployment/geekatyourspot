# The ActiveCampaign tool page

Audit reference: GEO L12 and H11 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

ActiveCampaign is an email marketing automation platform with a built-in CRM. Its page on this site is titled "ActiveCampaign for AI Lead Scoring". The site files it under content and email topics, and the page sits outside the structure the newer tool pages follow.

Where it stands (rechecked 2026-10-21):
- **URL.** `/tools/marketing/active-campaign`, directly under `/tools/marketing`, with no use-case segment.
- **Content.** Four H2s, so four sections: Overview, Key Capabilities, Implementation Considerations and When to Use. That's about 630 words, with no FAQ and no pricing. A page has one section per H2, and the 77 tool pages under a use-case segment have 7 to 12 H2s, most with an FAQ and a pricing section.
- **Menu.** It's under Content Creation Workflow in the Tools menu (`src/data/navigation/site-menus.ts:205`).
- **Home page.** It's on the Content Creation Workflow card under "Personalized Email Campaigns: Top AI Email Campaign Tools", next to Mailchimp, in both breakpoint copies (`src/components/home/use-cases.tsx:902` and `:1908`).
- **Links in.** 14 files, including:
  - the lead enrichment pillar's preparing section;
  - five sections of the lead scoring blog post;
  - several lead capture tool pages.
- **Links out.** No link to a pillar page or a blog post.
- **Registry.** `src/data/tools/active-campaign.ts`:
  - `relatedArticleId` points at `/use-cases/marketing`;
  - `heroSummary` is empty;
  - the card description was added on 2026-10-21 in `8d602e1`;
  - it's entry `"active-campaign"` in `src/lib/tools-mapper.ts`;
  - its components are in `src/components/tools/marketing/active-campaign/`.

You said on 2026-10-21: "5 tool pages I'll need to review, see if I can incorporate into Home->Use Case section."

## What development mode means for it

Moving or deleting the page costs nothing now: the old URL returns 404, with no redirect, and nothing has been indexed.

## What I need from you

1. **Where it lives.**
   - Keep it at `/tools/marketing/active-campaign`. No work.
   - Move it under a use case that matches its page, for example lead scoring under Lead Capture Pipeline. It joins a group and gets a pillar link, and its URL changes.
   - Delete it. Its 14 inbound links become plain text.
2. **Which menu group.** Keep Content Creation Workflow, or move it to the group that matches its page.
3. **The home page item.** Keep it under Personalized Email Campaigns, move it to another card item you name, or remove it from the home page.

## My recommendation

None. You said you'd review this page yourself.

## The plan once you decide

1. **Move:** rename the route folder, set `useCase` in `src/data/tools/active-campaign.ts`, and move its components to the matching use-case folder. Then update every inbound link.
2. **Menu:** edit the item in `src/data/navigation/site-menus.ts`.
3. **Home:** move or remove the item in both breakpoint copies of `src/components/home/use-cases.tsx`, keeping the `gtmLinkIdFromHref` ids and the `-lg` suffix in the desktop copy.
4. **Pillar link:** add a link from the page to the pillar you choose, and point `relatedArticleId` at that pillar.
5. **Delete:** remove the route, components, registry file, mapper entry and menu item, and turn the inbound links into plain text.

## How I'll check it, and its status

- A crawl of the local build finds no broken link.
- `/tools` shows the page with the right name.
- The two home page copies still match.

**Status:** Open, waiting on your decision.
