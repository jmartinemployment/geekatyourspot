# Blocking Bytespider at launch

Audit reference: GEO decision 11 in `plans/geo-seo-audit-2026-10-20.md`, and CA14 in `plans/competitor-audit-2026-10-20.md`.

## The problem

Bytespider is the web crawler run by ByteDance, the company behind TikTok. It's reported to collect training data for ByteDance's AI models, and it's widely reported to crawl heavily. It's a training crawler, not a search engine. Letting it in doesn't put the site in any search results that South Florida buyers use.

- **What the site does at launch.** `src/app/robots.ts` returns `userAgent: "*", allow: "/"` once `ALLOW_INDEXING=true`, so Bytespider is admitted with every other crawler (rechecked 2026-10-21).
- **What rivals do.** 16 of the 19 rivals in the competitor audit admit every crawler, 12 of them through a bare wildcard. One rival, C&W, admits answer and search bots and blocks training-only bots such as Bytespider. The competitor audit calls that split the rule closest to what the audit skills recommend (audit count, 2026-10-20).
- **A limit worth knowing.** `robots.txt` is a request, not a lock. A crawler that ignores it isn't stopped by it.

## What development mode means for it

Nothing changes now. Until launch, `robots.ts` disallows every crawler, Bytespider included. A rule for Bytespider takes effect only once `ALLOW_INDEXING=true` is set.

## What I need from you

Pick one:
1. **Block Bytespider at launch.**
   - Its crawl load is gone, and the site's content stays out of ByteDance's training data.
   - The cost is close to nothing for search and AI answer visibility in the United States.
2. **Allow it, as today's launch rule does.** No work, and the site may appear in ByteDance's models.

## My recommendation

Recommendation: block it.

Reason: it brings no search traffic, and blocking it matches the split the competitor audit found closest to best practice.

## The plan once you decide

For option 1:
1. Add a rule for `userAgent: "Bytespider"` with `disallow: "/"` to the launch branch of `src/app/robots.ts`, ahead of the wildcard rule, which stays `allow: "/"`.
2. Leave the development branch (`disallow: "/"` for everyone) unchanged.

For option 2, nothing changes in the site. Only the audits record your choice.

## How I'll check it, and its status

- Run a local build with `ALLOW_INDEXING=true` and read `/robots.txt`. It shows the Bytespider block and the wildcard allow, with the sitemap line unchanged.
- A build without the variable still serves `Disallow: /` for every crawler.

**Status:** Open, waiting on your decision.
