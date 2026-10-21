# Template wording and readability

Audit reference: GEO H6 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

The tool pages and pillars read as if they were produced from one template, with the same headings, the same stock words and long, dense sentences.

- **One heading skeleton.** Audit count, 2026-10-20: of the 90 tool pages, "Architecture" headings appear on 68, "Fit and Pricing" on 64, and "What it costs to keep doing it by hand" on 44.
- **Unfilled template slots.** Rechecked 2026-10-21: "Manual Automated" appears 45 times in 30 source files. 30 of those are inside a heading, such as "The Challenges of Manual Automated Accounts Receivable" (`src/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill/challenges-section.tsx:49`). That's a template slot filled with the pillar's name.
- **Stock wording.** Audit count, 2026-10-20, on rendered pages: "seamless" 458 times, "landscape" 98, "revolutioniz..." 46 and "game-changer" 39, and 133 of 158 non-glossary pages carry at least one.
- **Rechecked 2026-10-21 in the source** (prose only, leaving out ids and imports): "seamless" 538 times in 387 files, "landscape" 100 in 86, "revolutioniz..." 43 in 40, and "game-changer" or "game changer" 26 in 26. The source counts run higher because the registry files in `src/data` repeat page text, and some files don't render.
- **Readability.** Audit count, 2026-10-20: estimated reading-ease scores of 11 to 33 on these pages, against 62 to 66 on `/methodology`.

Why it matters: Google's guidance on content produced at scale looks for exactly these signs: repeated structure, filler words and slots left unfilled. AI answers also prefer short, plain sentences they can quote whole. The site's own `/methodology` page shows the plainer voice already works here.

## What development mode means for it

The change is copy only. It can be done in batches before launch, and nothing is indexed until `ALLOW_INDEXING` is set.

## What I need from you

"Copy rewrite" here means editing the existing pages so they read like a person wrote them for that tool: removing the stock words, fixing headings like "Manual Automated", varying the headings where a section doesn't need them, and shortening sentences. No layout changes.

1. Who edits it:
   - **Your content writer**, as new exports with the voice fixed at the source. Future pages come out right too, but every page needs a new run.
   - **Me, by hand**, in the voice of `/methodology`. The existing pages are fixed directly, but future exports would still arrive in the old voice.
2. How far to go:
   - **Light.** Fix the wording, the unfilled headings and the long sentences, and keep every section.
   - **Deeper.** Also cut each tool page down to what a buyer needs, dropping sections that repeat across tools, such as the architecture section. The pages become shorter and more distinct, but you lose text that was written for them.

## My recommendation

Recommendation: fix the "Manual Automated" headings first, because they're plain errors. Then do a light edit by hand in the voice of `/methodology`, starting with the pages that use the stock words most. Ask the content writer to drop those words in future exports. A light edit keeps the work you've already laid out, and the voice can be fixed at the source for what comes next.

## The plan once you decide

1. Rename each "Manual Automated ..." heading to read naturally, such as "The Challenges of Manual Accounts Receivable", keep its heading id consistent, and fix the same phrase where it appears in body text or registry data.
2. List pages by stock-word count from a local build crawl, and edit in that order. Change both breakpoint copies (`lg:hidden` and `hidden lg:block`) together, and the matching `src/data/tools/*.ts` entry where it repeats the text.
3. If you choose the deeper scope, agree the section list for a tool page with you first, then apply it page by page.

## How I'll check it, and its status

- After each batch, recount the stock words and the "Manual Automated" headings in the source and on a local build crawl.
- Re-score readability on the edited pages.
- The phone and desktop copies still match.

**Status:** Open, waiting on your decision.
