# The flat tool pages on the older template

Audit reference: GEO L12 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

Thirteen tool pages sit directly under `/tools/marketing/<tool>` and use an older, shorter template.
- **The older template** (rechecked 2026-10-21): a hero plus Overview, Key Capabilities, Implementation and When to Use. Mailchimp has only the first three.
- **The newer template**, for example Bill on the approval workflows pillar, has seven sections after the hero: Overview, the cost of doing it by hand, how the tool changes the work, architecture, implementing, evaluating fit and pricing, and right fit.
- **Length and content.** The audit measured the older pages at about 900 to 1,000 words, with no FAQ and no pricing (audit count, 2026-10-20).

The older pages answer less of what a buyer asks, such as what it costs, who it fits and how it connects. AI engines and search engines favor pages that answer those questions directly.

The 13 pages (rechecked 2026-10-21):

| Page | Registry file |
|---|---|
| Adobe Mix Modeler | `src/data/tools/adobe-mix-modeler.ts` |
| ActiveCampaign | `src/data/tools/active-campaign.ts` |
| Anomalo | `src/data/tools/anomalo.ts` |
| ContentStudio | `src/data/tools/contentstudio.ts` |
| Great Expectations | `src/data/tools/great-expectations.ts` |
| Madgicx | `src/data/tools/madgicx.ts` |
| Mailchimp | `src/data/tools/mailchimp.ts` |
| Monte Carlo | `src/data/tools/monte-carlo.ts` |
| Optimove | `src/data/tools/optimove.ts` |
| Pipedrive | `src/data/tools/pipedrive.ts` |
| Qualytics | `src/data/tools/qualytics.ts` |
| 6sense | `src/data/tools/6sense.ts` |
| Zapier | `src/data/tools/zapier.ts` |

No export for any of the 13 exists in `content-writer-output` (rechecked 2026-10-21).

## What development mode means for it

Replacing a page's content changes nothing in search until launch. A re-export laid out now is in place before launch.

## What I need from you

Pick one:
1. **Re-export them through your content writer**, then I lay them out like the newer tool pages.
   - Every tool page then has the same depth, with pricing and fit.
   - It costs a content writer run per page and a layout pass.
2. **Leave them as they are.** No work, but the 13 stay thinner than the other tool pages.
3. **Re-export only some of them.** Name which.

If you delete or move any of these pages, the re-export covers only the pages you keep.

## My recommendation

Recommendation: re-export the pages you keep.

Reason: a buyer comparing tools on this site meets two levels of depth today, and the newer template is the one that answers cost and fit.

## The plan once you decide

1. You run the content writer for each page you choose, and the export lands in `content-writer-output/marketing/`.
2. I lay out each export the way the other tool pages are laid out:
   - section components under `src/components/tools/marketing/...`;
   - the page under `src/app/(site)/tools/marketing/...`;
   - the registry entry updated in `src/data/tools/<tool>.ts`.
   - Both breakpoint blocks are kept.
3. Prices are stated with an "as of" date and a link to the vendor's pricing page.

## How I'll check it, and its status

- A local build renders each new page.
- Each page's FAQ matches its FAQPage markup, the phone and desktop copies match, and every stated price has a date and a source link.
- A crawl finds no broken link.

**Status:** Open, waiting on your decision.
