# Loading Google Tag Manager later

Audit reference: GEO M7 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

- On phones, the main content took 2.1 to 8.2 seconds to appear across PageSpeed runs (audit count, 2026-10-20). Google counts 2.5 seconds or less as good, and page speed is part of how it judges a page.
- 330 to 420 KB of Google tags load before the page settles (audit count, 2026-10-20).
- Tag Manager loads from `src/app/layout.tsx:69`, through `<GoogleTagManager gtmId="GTM-K5CXSQRP" />` from `@next/third-parties/google` (rechecked 2026-10-21).
  - That component uses Next's default script timing, which starts the download as soon as the page becomes interactive.
  - The component has no setting for a later timing.
- Two other speed fixes went in on 2026-10-20 (`d6989dc`): the unused Geist fonts were removed, and the scheduler now loads when it nears the screen. PageSpeed hasn't been rerun since, so it isn't known whether phones are still slow.

## What development mode means for it

- Search is blocked until launch, so slow phone loads cost nothing in search today.
- PageSpeed runs on the deployed site still show what visitors and Google will get at launch, so the measurement can be done now.

## What I need from you

1. **Should I measure first and change nothing unless phones are still slow?**
2. **If a change is needed, which timing is acceptable?**
   - **Keep the current timing.** Every visit is counted. There's no speed gain.
   - **Load Tag Manager when the browser is idle** (Next's `lazyOnload` timing). The main content shows sooner. A visitor who leaves in the first seconds may never be counted in GA4, and a link click before Tag Manager loads isn't tracked.
   - **Load Tag Manager on the first scroll, tap or key press.** This gives the biggest speed gain. A visitor who reads without touching the page and leaves is never counted, and Ads remarketing misses them.

## My recommendation

Recommendation: measure first. If phones show the main content in 2.5 seconds or less on all five page types, keep the current timing. If not, use the idle timing, which still counts most visits.

Reason: the two fixes already made may be enough. Losing analytics data only pays off if there's still a speed problem to fix.

## The plan once you decide

1. Run PageSpeed Insights for mobile on the deployed site, for five page types: the home page, a pillar, a tool page, a blog post and a glossary term. Record the time to main content for each.
2. If you choose a later timing, replace `<GoogleTagManager>` in `src/app/layout.tsx` with one of these:
   - two `next/script` tags, the `dataLayer` setup and `https://www.googletagmanager.com/gtm.js?id=GTM-K5CXSQRP`, using `strategy="lazyOnload"`;
   - a small client component that adds the script on the first scroll, tap or key press.
3. Keep the container ID and the `dataLayer` name unchanged, so the "Link Click - gys-link" trigger and the GA4 tags keep working.
4. Leave the security policy in `next.config.ts` as it is. It already allows `www.googletagmanager.com`.

## How I'll check it, and its status

- PageSpeed mobile results before and after, on the same five pages.
- A headless browser confirms the GA4 and Ads requests still go out after the change. GA4 DebugView still receives `page_view` and `link_click`.

**Status:** Open, waiting on your decision.
