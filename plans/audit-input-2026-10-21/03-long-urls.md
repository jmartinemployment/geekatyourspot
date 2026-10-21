# Long URLs

Audit reference: GEO L13 and decision 6 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

The audit flagged long URLs: 98 over 100 characters, the longest 169 (audit count, 2026-10-20). You asked on 2026-10-21: "What's specifically is wrong with Long URLS? They have a target structure, and signify depth, where using taxonomies are overly complicated?"

The facts, rechecked 2026-10-21:

- **How many.** 95 page URLs are over 100 characters: 77 hand-coded pages and 18 blog posts. The longest is 164:
  `https://geekatyourspot.com/blog/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-what-miami-must-know-before-choosing-compliance-solutions`
- **Where the length comes from.** Mostly the last segment, which is the full article headline, not the depth. In `https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses` (162 characters):
  - the structure `/use-cases/marketing/content-creation-workflow/` takes 47 characters;
  - the headline takes 89.
- **What a long URL costs.** Nothing in ranking. Google has said URL length isn't a ranking factor, and the path's structure is what you describe.
  - In search results, Google shows the site name and a shortened path, so the end of a long URL is cut off.
  - In shared links, chat apps and email, people see the whole URL, and it's hard to read or retype.
- **Repeated words.** The headline often repeats words already in the path, such as "content-creation" twice in the example above, and "south-florida" or "small-business" in many slugs.

## What development mode means for it

A URL change costs nothing now: the old URL returns 404, there's no redirect, and nothing has been indexed. After launch, the same change would need a redirect for each URL, or it would lose whatever the old URL had earned. This is the only free window.

## What I need from you

Pick one:
1. **Keep every URL as it is.**
   - No work, and the structure stays exactly as you designed it.
   - The long headline segments stay.
2. **Keep the structure and shorten only the last segment** to the topic, for example `/use-cases/marketing/content-creation-workflow/intelligent-content-generation`.
   - Every level keeps its meaning, and URLs drop by roughly 50 to 90 characters.
   - The cost is updating every link, canonical, JSON-LD id, menu entry and home card that names each URL.
3. **Shorten only the longest ones**, for example those over 140 characters. This is less work, but the site ends up with two slug styles.

## My recommendation

Recommendation: option 2, before launch. It keeps your structure and removes only the repeated headline words.

Reason: the cost is one-time and free only now, and it makes every URL readable where people see it whole.

## The plan once you decide

For option 2 or 3:
1. I send you a table of old URLs and proposed short ones, for your approval. Tool segments follow your existing per-pillar choices.
2. I rename each route folder under `src/app/(site)/` and, for blog posts, the source slug.
3. I update every reference: canonicals, JSON-LD `@id`s and `url`s, `src/data/navigation/site-menus.ts`, the home cards in `src/components/home/use-cases.tsx` (both breakpoint copies), registry fields such as `relatedArticleId` in `src/data/tools/*.ts`, and body links.
4. No redirects are added.

For option 1, nothing changes in the site. Only the audits record your choice.

## How I'll check it, and its status

- A crawl of the local build finds no link to an old URL and no broken internal link.
- The sitemap lists only the new URLs.
- A recount of URLs over 100 characters shows the result.

**Status:** Open, waiting on your decision.
