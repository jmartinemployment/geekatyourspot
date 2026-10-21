# "Gartner predicts that by 2025"

Audit reference: GEO H3 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

The audit found a sentence beginning "Gartner predicts that by 2025...". It's a prediction for a year that has already passed, stated as if it were still ahead.

Rechecked 2026-10-21: no file in `src` or `content-writer-output` contains that sentence or any Gartner prediction for 2025 today. The audit didn't record which page it was on, and `git log -S "Gartner predicts"` finds no commit that removed that exact wording, so I can't say when or how it went.

Two related lines remain, both in blog export files:
- `content-writer-output/blog/how-ai-revolutionizes-bookkeeping-transactions-a-deep-dive.html` says "cybercrime is expected to cost the world $10.5 trillion annually by 2025", credited to "a 2023 report by Cybersecurity Ventures". It's another prediction for a past year, with no link.
- `content-writer-output/blog/why-automated-accounts-payable-is-a-game-changer-for-modern-businesses.html` says "A Gartner study found that 80% of businesses that successfully implemented automation did so with strong vendor partnerships", with no link or date.

Neither post is linked from the deployed blog index (pages 1 and 2, rechecked 2026-10-21), and the bookkeeping post returns 404 at `/blog/accounting/how-ai-revolutionizes-bookkeeping-transactions-a-deep-dive`. So neither line appears on a page visitors can reach today.

Why it matters: a prediction for a past year tells AI answers and readers that a page is stale, and an unlinked "Gartner study" can't be checked. Both cost the page trust if it's ever published.

## What development mode means for it

Nothing here is indexed until `ALLOW_INDEXING` is set. The two export files aren't published, so they matter only if those posts are laid out later.

## What I need from you

1. How the audits record the original finding. The sentence can't be found today, so the choice is to mark it as no longer present in both audits, or to keep it open until the page it was on is identified.
2. What to do with the two export lines:
   - **Fix them now,** by removing the 2025 prediction and sourcing or removing the Gartner claim. The files are clean if those posts are ever published.
   - **Fix them only if those posts are laid out.** No edits now. `content-writer-output` is the committed raw-content store, so changes there are edits to your writer's output.
   - **Leave them.**

## My recommendation

Recommendation: record the original sentence as no longer present in both audits, with today's recheck, and fix the two export lines only if those posts are laid out. Neither line is on a reachable page, and editing the raw export store changes your writer's output for posts that aren't live.

## The plan once you decide

1. Add a dated recheck note under GEO H3 in `plans/geo-seo-audit-2026-10-20.md`, and the matching note in `plans/seo-audit-2026-10-20.md` if it references H3, with the commit hash.
2. If you choose to fix the export lines now, edit the two sentences in the two `content-writer-output/blog/*.html` files: remove the 2025 prediction, and link the Gartner study with its date or remove the claim.

## How I'll check it, and its status

- A text search of `src` and `content-writer-output` for "by 2025" and "Gartner" returns only lines that carry a dated source.
- Both audits carry the same note.

**Status:** Open, waiting on your decision.
