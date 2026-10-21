# Publishing prices

Audit reference: GEO decision 10 in `plans/geo-seo-audit-2026-10-20.md`. The evidence is in CP4 of `plans/competitor-pages-audit-2026-10-20.md` and CA9 of `plans/competitor-audit-2026-10-20.md`.

## The problem

- No page states a price for the business's own services. The only price anywhere is in the home page's markup (rechecked 2026-10-21):
  - the "Free AI Assessment" at 0 (`src/app/(site)/page.tsx:37`);
  - the Organization node's `priceRange` of "$$" (`src/lib/seo/organization.ts`).
- 10 of 22 AI implementers in the competitor crawl publish prices (CP4, audit count, 2026-10-20).
- What rivals charge for a first step (CA9):

  | Rival | First step | Price |
  |---|---|---|
  | Pisano Designer | Process diagnostic | $750 |
  | AI-Powered Consulting | Assessment | $2,500 |
  | Visionary Solutions Group | Blueprint audit | $2,500 |
  | Softico | Workflow blueprint | $4,500 |
  | AICS Pro | Readiness assessment | A fixed fee, no figure |

- Other published prices include Gold Coast AI packages from $297, and "$500/month for small business automation to $8,000+" on artificialintelligencefl.com.
- Readiness searches are won by priced assessment pages and quizzes (CA9).

Why it matters: owners and AI assistants asking "how much does AI consulting cost in South Florida" get their answer from pages that state a range. A site with no figure can't be that answer.

## What development mode means for it

Prices can be drafted, published and changed now at no cost. Nothing reaches search before launch.

## What I need from you

1. **Publish prices: yes or no.**
2. **If yes, in what form.**
   - **Fixed packages** are the easiest to compare, and the least flexible.
   - **Ranges per service** are flexible and still answer the question.
   - **Hourly or monthly rates** are simple, and harder for a buyer to total.
3. **Where they go:** beside each service on a services page, or on their own pricing page.
4. **The free assessment:** whether it stays free, and what it covers.

## My recommendation

Recommendation: publish a range for each service with an "as of" date, beside the service it prices, and keep the free assessment.

Reason: ranges answer the cost question while leaving room for each job. Showing a price where the service is described saves the reader a second page.

## The plan once you decide

1. Add the prices in both breakpoint copies where you choose, with the "as of" date.
2. Add matching `offers` to each `Service` node: a `price`, or a `priceSpecification` with `minPrice` and `maxPrice`.
3. Update `priceRange` in `src/lib/seo/organization.ts` if "$$" no longer fits, and keep the home page's "AI Services" catalogue in step.

## How I'll check it, and its status

- Every visible price matches its JSON-LD price, and the date is shown.
- The JSON-LD parses, and there are no dashes in the copy.

**Status:** Open, waiting on your decision.
