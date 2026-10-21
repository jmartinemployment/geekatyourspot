# Content tables

Audit reference: GEO M2 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

Prices, scoring rules and comparisons on the site are written as paragraphs and bullet lists. AI answer engines and Google's answer boxes pull a figure most reliably from a table, where each number sits beside its label. A figure buried in a paragraph is more often skipped or misread.

What exists today (rechecked 2026-10-21):
- The only content table on the site is the nexus threshold table in `src/components/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida/mechanics-section.tsx:24`, added with the C1 fix on 2026-10-20.
- The other `<table>` matches in `src` are the UI component (`src/components/ui/table.tsx`) and two email templates, which visitors never see as page content.

The three tables the audit asks for, and where that content sits now (rechecked 2026-10-21):
- **Tool pricing on each pillar.** No pillar lists its tools' prices side by side. Prices sit in each tool page's pricing section, in prose.
- **The lead scoring model.** `src/components/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses/scoring-model-section.tsx` gives the six positive criteria (15, 15, 20, 25, 10 and 15 points, which total 100) and the negative criteria as two bullet lists, and the thresholds in a paragraph.
- **Receptionist pricing models.** The intelligent receptionist pillar describes per-call billing in a paragraph, for example Voksha's flat $1 for each extra call (`src/components/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses/decisions-section.tsx:20-26`).

## What development mode means for it

Tables can be added at any time, and none of them reaches search results until launch. Vendor prices change, so any price in a table needs a date. Prices checked now would need a recheck close to launch.

## What I need from you

1. **Which tables to build.**
   - All three: the most facts in a form engines can lift, but the two price tables need rechecking whenever a vendor changes its prices.
   - The lead scoring table only: no prices in it, so nothing goes stale.
   - None: the content stays as it is.
2. **Who checks the prices.**
   - Me, on each vendor's own pricing page, with the date checked and a link.
   - Your content writer, in a new export.

## My recommendation

Recommendation: build all three, and start with the lead scoring table. It has no prices to go stale, and the GEO audit (L8) calls the lead scoring post the most citable post on the site. I'd check the prices on the vendors' own pages, so every figure has a link and a date.

## The plan once you decide

1. **Lead scoring.** Turn the two lists in `scoring-model-section.tsx` into one table with the columns criterion, signal and points, followed by a row for each threshold. The change goes into every breakpoint block that renders the section.
2. **Pillar pricing.** For each pillar, list its tools from the registry (the `useCase` field in `src/data/tools/*.ts`, read through `getToolsByDepartment` in `src/lib/tools-mapper.ts`). Each row gives the plan name, the published price, the date checked and a link to the vendor's pricing page.
3. **Receptionist pricing models.** One table with the billing model, an example tool, its price as of the date checked, and a link.
4. Style every table like the existing nexus table, and put the same table in both breakpoint copies.

## How I'll check it, and its status

- Each table renders in both breakpoint copies, and the copies' text matches.
- Every price has a source link and a date.
- A headless browser at 390 px finds no table wider than the screen.

**Status:** Open, waiting on your decision.
