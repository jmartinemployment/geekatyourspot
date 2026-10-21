# Accounting terms in the glossary

Audit reference: GEO L14 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

The glossary leans away from half of the business.
- **Audit count, 2026-10-20.** About 59% of the 274 terms are chat and contact-center vocabulary, and about 2% are accounting.
- **Rechecked 2026-10-21.** Accounting is 46 of the 90 tool pages.
- **Rechecked 2026-10-21.** `src/data/glossary/terms.ts` has no term for:
  - accounts receivable;
  - three-way match;
  - economic nexus;
  - days sales outstanding (DSO);
  - invoice OCR.
- **Rechecked 2026-10-21.** The Accounts Payable term exists, and its own text mentions "three-way matching", which has no term to link to.

Why it matters:
- People search these terms, and a definition page is one of the easiest pages for an AI answer to cite.
- Each new term would also link readers into the accounting pillars that cover it: accounts receivable, the sales tax nexus pillar and the data entry pillar.

The GEO audit records your decision of 2026-10-20 that all 274 existing terms stay (decision 4). This item is only about adding terms.

## What development mode means for it

New terms can be added now. Their pages enter the sitemap automatically and reach search at launch.

## What I need from you

1. **The list.** Approve the five terms above, change them, or add others. Each term added is one more page to keep accurate.
2. **Who writes the definitions.** Either I write them to your H5 definition spec, or your content writer produces them.

## My recommendation

Recommendation: add the five terms, written to your H5 spec. They match the accounting pillars the site already has, so each one has a page to link to.

## The plan once you decide

1. Add each term to `GLOSSARY_TERMS` in `src/data/glossary/terms.ts`, using the schema every term follows since the H5 rewrite:
   - `title` and `slug`;
   - `category: "Accounting"`;
   - a `shortSummary`;
   - a definition of one or two sentences;
   - one `whyItMatters` sentence and one `systemsContext` sentence.
2. Link each term at its first mention on the pillar that covers it, with `GlossaryLink` (`src/components/glossary/glossary-link.tsx`), in both breakpoint copies:
   - accounts receivable and DSO on the accounts receivable pillar;
   - economic nexus on the sales tax nexus pillar;
   - three-way match and invoice OCR on the data entry pillar.
3. The sitemap (`src/app/sitemap.ts` reads `getAllGlossaryTerms`) and the glossary letter pages pick the new terms up with no extra step.

## How I'll check it, and its status

- Each new term page renders, and is listed in the sitemap and on its letter page.
- Each new term shows its related terms.
- The pillar links point at the new terms in both copies.

**Status:** Open, waiting on your decision.
