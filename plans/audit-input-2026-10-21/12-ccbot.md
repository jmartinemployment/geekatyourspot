# Blocking CCBot at launch

Audit reference: GEO decision 11 in `plans/geo-seo-audit-2026-10-20.md`, and CA14 in `plans/competitor-audit-2026-10-20.md`.

## The problem

CCBot is the crawler for Common Crawl, a nonprofit that publishes a free, open archive of the web. Many AI models are trained on datasets built from that archive, so being in it is one way a business becomes known to AI systems. It respects `robots.txt`.

- **Where the site stands in Common Crawl.**
  - The GEO audit found the archive held zero pages from the site across 14 crawls.
  - The competitor audit found the site is now a node in Common Crawl's web graph, near the bottom of the rank range.

  Both are audit findings from 2026-10-20.
- **What the site does at launch.** `src/app/robots.ts` admits every crawler, CCBot included, once `ALLOW_INDEXING=true` (rechecked 2026-10-21).
- **What rivals do.** 16 of the 19 rivals in the competitor audit admit every crawler (audit count, 2026-10-20).
- **Why it matters here.** The GEO audit scored brand authority at 5 out of 100. The business has little presence in the sources AI models learn from, and the archive is one of the widest of them.

## What development mode means for it

Nothing changes now. Until launch, `robots.ts` disallows every crawler, CCBot included, so Common Crawl can't archive the site yet. A rule takes effect only once `ALLOW_INDEXING=true` is set.

## What I need from you

Pick one:
1. **Allow CCBot at launch, as today's launch rule does.**
   - The site's pages can enter the archive and the AI datasets built from it.
   - The trade-off is that its content is used for model training without any say over which models.
2. **Block CCBot at launch.** The site's content stays out of Common Crawl, and one of the main routes into AI models' knowledge of the business is cut off.

## My recommendation

Recommendation: allow it.

Reason: the business needs AI systems to know it exists, and the archive is one of the widest routes to that.

## The plan once you decide

- For option 1, nothing changes in `src/app/robots.ts`. The wildcard `allow: "/"` already admits CCBot at launch, and only the audits record your choice.
- For option 2, add a rule for `userAgent: "CCBot"` with `disallow: "/"` to the launch branch of `src/app/robots.ts`, ahead of the wildcard rule. Leave the development branch unchanged.

## How I'll check it, and its status

- Run a local build with `ALLOW_INDEXING=true` and read `/robots.txt` to confirm the CCBot rule matches your choice.
- A build without the variable still serves `Disallow: /` for every crawler.

**Status:** Open, waiting on your decision.
