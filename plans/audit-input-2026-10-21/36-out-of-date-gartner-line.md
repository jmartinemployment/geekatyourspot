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

## Found on 2026-10-22: the sentence is live

The figure crawl for document 34 found the sentence on a reachable page. It reads "Looking at the data, a report by Gartner predicts that by 2025, 50% of businesses will have adopted AI-driven financial forecasting tools." It is on `/blog/accounting/unlocking-the-secrets-to-effective-cash-flow-forecasting-with-ai`, and it is row F565 in document 34.

The earlier recheck missed it because it searched `src` and `content-writer-output` only. The blog route (`src/app/(site)/blog/[department]/[...slug]/page.tsx`) loads post bodies through `src/lib/content-writer-disabled2/content-disabled.ts`, which reads the current exports from `content-writer-output/` and archived exports from `backup/`. This post's body was `backup/accounting/cash-flow-forecasting/blog/unlocking-the-secrets-to-effective-cash-flow-forecasting-with-ai.html`. On 2026-10-22 the owner ruled that `backup/` is an archive and not a page source, so that file and the ten other posts the loader was serving from `backup/` moved into `content-writer-output/`, and the loader now reads only that store. The body is now `content-writer-output/accounting/cash-flow-forecasting/blog/unlocking-the-secrets-to-effective-cash-flow-forecasting-with-ai.html`, and the page is unchanged.

## What I need from you

1. For the live sentence, choose one:
   - **Source it.** Find the Gartner report, link it with its date, and reword the prediction as a past-tense claim, since 2025 has passed. It only works if the report says what the sentence says.
   - **Reword it without the figure.** The point about adoption stays; the prediction and the 50% go.
   - **Delete it.**
2. What to do with the two unpublished export lines in `content-writer-output/blog/`:
   - **Fix them now,** by removing the 2025 prediction and sourcing or removing the Gartner claim.
   - **Fix them only if those posts are laid out.** `content-writer-output` is the committed raw-content store, so changes there are edits to your writer's output.
   - **Leave them.**

## My recommendation

Recommendation: delete the live sentence, because a prediction for a past year is stale however it is sourced, and fix the two export lines only if those posts are laid out.

## The plan once you decide

1. Edit the sentence in the export file named above. The blog route renders the file, so the page changes with it.
2. Record the change under GEO H3 in `plans/geo-seo-audit-2026-10-20.md` with the commit hash, and tick row F565 in document 34.
3. If you choose to fix the export lines now, edit the two sentences in the two `content-writer-output/blog/*.html` files.

## How I'll check it, and its status

- A text search of `src` and `content-writer-output` for "by 2025" and "Gartner" returns only lines that carry a dated source.
- The page no longer carries the sentence on a local build.

**Status:** Open, waiting on your decision.
