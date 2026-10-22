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

## Done, 2026-10-22 (`c966130`)

The owner's standing instruction settles both questions: terms are to be added when they are missing, and written at the fuller length he asked for most recently. So the five terms are in, written to the H5 definition spec, each with a definition of two sentences, one Why It Matters sentence, one Systems Context sentence and a short summary, filed under Accounting, in alphabetical order with the rest.

Each is linked at its first mention where a page already uses the words, in both breakpoint copies where the section has two:
- accounts receivable, in the accounts receivable pillar's lede;
- Days Sales Outstanding (DSO), in the same pillar's decisions section;
- economic nexus, in the sales tax nexus pillar's challenges section;
- optical character recognition (OCR), in the accounts payable pillar's key features section, to Invoice OCR;
- three-way matching, in the accounts payable pillar's FAQ, to Three-Way Match.

The data entry pillar does not use the words "three-way match" or "OCR", so those two links sit on the accounts payable pillar, where the words are. The Accounts Payable term's own text names three-way matching, and the term pages now show each other as related: Accounts Receivable with Accounts Payable, Cash Flow Forecasting and Days Sales Outstanding; Days Sales Outstanding with Accounts Receivable, Cash Flow Forecasting and KPI; Economic Nexus with Tax Compliance; Invoice OCR with Accounts Payable, Data Quality, Machine Learning and Three-Way Match; Three-Way Match with Accounts Payable, ERP and Invoice OCR.

Verified on a local build: the five term pages return 200, the sitemap holds 452 URLs including all five, each letter page lists its term, and the pillar links render.

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

**Status:** Closed 2026-10-22 (`c966130`). The five terms are added and linked; the glossary holds 279 terms.
