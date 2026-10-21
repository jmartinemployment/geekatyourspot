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

**Applied on 2026-10-21 (`cccde1c`).** You chose option 2, in your words: "Option 2 but do this, for example `/use-cases/marketing/content-creation-workflow/ai-content-generation`", and "Heading should match". You also asked for two pages by name: "/use-cases/accounting/accounts-payable/ai-accounts-payable" with its heading unchanged, and "/use-cases/accounting/cash-flow-forecasting/ai-cash-flow-forecasting".
- **Step 1 was skipped.** I renamed the pages before sending you the table. The table is below, and any row can still change.
- **The new URLs.** The paths below all start with `/use-cases/accounting/` or `/use-cases/marketing/`. Lengths count the full address with `https://geekatyourspot.com`.

| Section | Old last part | New last part | Length (old → new) |
|---|---|---|---|
| accounts-payable | automated-approval-workflows-transforming-accounts-payable | ai-invoice-approval-workflows | 123 → 94 |
| accounts-payable | automated-fraud-duplicate-payment-controls-boosting-efficiency | ai-fraud-duplicate-payment-controls | 127 → 100 |
| accounts-payable | automated-payment-execution-streamlining-accounts-payable-with-ai | ai-payment-execution | 130 → 85 |
| accounts-payable | automated-accounts-payable | ai-accounts-payable | 91 → 84 |
| cash-flow-forecasting | automated-cash-flow-forecasting | ai-cash-flow-forecasting | 101 → 94 |
| cash-flow-forecasting | automated-accounts-receivable-boost-cash-flow-with-ai | ai-accounts-receivable | 123 → 92 |
| cash-flow-forecasting | automated-spreadsheet-data-transforming-cash-flow-forecasting | ai-spreadsheet-data | 131 → 89 |
| cash-flow-forecasting | intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business | ai-resource-planning | 150 → 90 |
| tax-compliance-regulations | multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida | ai-multi-state-sales-tax | 141 → 99 |
| tax-compliance-regulations | payroll-tax-worker-misclassification-ai-implementation-for-local-compliance | ai-payroll-tax | 150 → 89 |
| content-creation-workflow | intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses | ai-content-generation | 162 → 94 |
| content-creation-workflow | intelligent-content-planning-for-small-businesses-real-results-with-ai | ai-content-planning | 143 → 92 |
| lead-capture-pipeline | cross-platform-chatbot-for-lead-capture-local-implementation-guide | cross-platform-chatbot-setup-guide | 135 → 103 |
| lead-capture-pipeline | intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses | ai-receptionist | 152 → 84 |
| lead-capture-pipeline | lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida | lead-enrichment-predictive-scoring | 146 → 103 |

- **What moved with them.** Every link, canonical, Open Graph URL, menu entry, home card and use-case index card names the new URL. No redirect is added, so the old URLs return 404.
- **Unchanged.** Tool URLs, blog post URLs, headings and component folder names.
- **The `@id`s in step 3.** Step 3 named "JSON-LD `@id`s" without saying what they were: addresses ending in `#article`, `#service` and so on, built from the page URL, so renaming a page renamed them. None is left. Document 53 covers that.
- **Checked on a production build.**
  - A crawl of all 448 pages finds no link to an old URL and no broken internal link.
  - The 15 old URLs return 404, and the sitemap and `/llms.txt` list only the new ones.
- **The recount.** 83 URLs in the sitemap are still over 100 characters: 64 pages, almost all tool pages, and 19 blog posts. Their URLs weren't part of this change. Two of the renamed pages are still over 100, at 103 each.

**Status:** Applied and committed in `cccde1c`. The table is with you for review.
