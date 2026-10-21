# The Great Expectations tool page

Audit reference: GEO L12 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

Every tool page has the same layout: the hero, one full-height section for each H2 in its content, then the scheduler. So a page has as many sections as its content has H2s, and a shorter page means shorter content, not an older layout.

Great Expectations's content is shorter than the other tool pages' (rechecked 2026-10-21 on a local build):
- **Its H2s.** Four: Overview, Key Capabilities, Implementation Considerations and When to Use. None of them covers pricing or cost, and there's no FAQ.
- **Length.** About 990 words.
- **The other tool pages.** The 77 tool pages under a use-case segment have 7 to 12 H2s, and 58 of them have 12. 65 have an FAQ, 73 have a pricing or cost section, and they run about 1,900 to 9,100 words.
- **No export.** `content-writer-output/` has no export for Great Expectations.

Where the page stands (rechecked 2026-10-21):
- **URL.** `/tools/marketing/great-expectations`, directly under `/tools/marketing`, with no use-case segment.
- **Menu.** It's under Automated Ad Spend Optimization in the Tools menu (`src/data/navigation/site-menus.ts:234`).
- **Home page.** Linked from the Use Cases section, in both breakpoint copies.
- **Links in.** The ad spend pillar's data quality assessments and data validation sections.
- **Links out.** The pillar page, `/use-cases/marketing/automated-ad-spend-optimization`.
- **Registry.** `src/data/tools/great-expectations.ts`, entry `"great-expectations"` in `src/lib/tools-mapper.ts`.

The page answers less of what a buyer asks, such as what it costs, who it fits and how it connects. AI engines and search engines favor pages that answer those questions directly.

Whether it belongs in the ad spend group is its own item, in document 04. If you delete or move the page there, this item closes with it.

## What development mode means for it

New content changes nothing in search until launch. A re-export laid out now is in place before launch.

## What I need from you

Pick one:
1. **Re-export it through your content writer**, then I lay it out like the other tool pages.
   - The export's H2s set the page's sections, so it gets the depth of the other tool pages, with pricing and fit.
   - It costs one content writer run and a layout pass.
2. **Leave it as it is.** No work, but it stays thinner than the other tool pages.

## My recommendation

Recommendation: re-export it, if you keep the page.

Reason: a buyer comparing tools on this site meets two levels of depth today, and the longer content is the one that answers cost and fit.

## The plan once you decide

1. You run the content writer for Great Expectations, and the export lands in `content-writer-output/marketing/`.
2. I lay out the export the way the other tool pages are laid out:
   - one section component per H2, under `src/components/tools/marketing/...`, in both breakpoint blocks;
   - the page under `src/app/(site)/tools/marketing/great-expectations/`;
   - the registry entry in `src/data/tools/great-expectations.ts` updated.
3. The URL stays `/tools/marketing/great-expectations` unless you also decide to move it.
4. Prices are stated with an "as of" date and a link to the vendor's pricing page.
5. The export's `#article` and `#faq` ids and its `#consultationAppointment2xl` links are dropped, since the site uses no `#` URLs.

## How I'll check it, and its status

- A local build renders the page with one section per H2 in the export.
- Its FAQ matches its FAQPage markup, the phone and desktop copies match, and every stated price has a date and a source link.
- A crawl finds no broken link and no `#` URL.

**Status:** Open, waiting on your decision.
