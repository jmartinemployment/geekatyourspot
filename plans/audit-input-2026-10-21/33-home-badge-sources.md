# Sources for the home badges

Audit reference: GEO H3 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

The home page shows two badges, "40% Cost Reduction" and "3x Productivity", with no source. They're in `src/components/home/clone-yourself.tsx`, in both breakpoint copies: lines 25 and 34 in the phone block, and lines 77 and 85 in the desktop block. Rechecked 2026-10-21.

The badges stay. You decided that on 2026-10-20, as the GEO audit records ("Badges decided on 2026-10-20: they stay"). The open question is whether they get a source.

One page restates both badges as fact. The Intelligent Content Generation pillar says "Costs drop by 40%, and productivity can triple, real numbers from the operator's own published figures." That's in `src/components/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses/preparing-section.tsx:45`, rechecked 2026-10-21. No published figures from the business exist on the site for that sentence to point to.

The audit said at least six pages repeat the 40%. Rechecked 2026-10-21, the pillar above is the only page that repeats the badge's claim. The other 40% figures in the source are separate invented scenarios about time saved, such as "a 40% reduction in invoice processing time". They aren't the badge's claim.

Why it matters: a headline number with no source is the first thing an AI answer or a careful buyer checks. When the only backing is a sentence calling it the business's "own published figures", and none are published, the claim reads as circular.

## What development mode means for it

The change is copy only. It can be made freely before launch, and nothing is indexed until `ALLOW_INDEXING` is set.

## What I need from you

Choose one for the 40% badge:
- **Cite an outside source and word the badge to match it.** McKinsey's June 2023 report on generative AI puts the productivity gain in customer care at 30 to 45 percent of current function costs. A badge worded for that function could cite it. The badge becomes narrower than "Cost Reduction".
- **Use measured results from your own clients.** This is the strongest backing, if you have numbers you can publish.
- **Leave it unsourced.** Nothing changes, and the badge stays unchecked.

For the 3x badge: no McKinsey figure supports "3x". The choices are a client result, a different source you name, or leaving it unsourced.

Separately: keep, reword or delete the pillar sentence that calls the figures "the operator's own published figures".

## My recommendation

Recommendation: use client results if you have them. Otherwise, word the 40% badge for customer care and cite McKinsey. Delete the pillar's "operator's own published figures" sentence in either case, because it points to figures the site doesn't publish.

## The plan once you decide

1. Edit the badge text in both breakpoint blocks of `src/components/home/clone-yourself.tsx` and add the source link or note under the badges, identically in each block.
2. Edit or delete the sentence in the pillar's `preparing-section.tsx:45`.
3. Change no other 40% figure. Those are a different claim.

## How I'll check it, and its status

- On a local build, both home blocks show the same badge text and source.
- A text search finds no page stating the badge figures without that source.

**Status:** Open, waiting on your decision.
