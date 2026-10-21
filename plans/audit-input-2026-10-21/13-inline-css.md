# Inlining the stylesheet for phone speed

Audit reference: GEO M7 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

On phones, the time until the main content appears (Largest Contentful Paint, LCP) ranged from 2.1 to 8.2 seconds across PageSpeed runs. The AI Marketing Systems pillar scored 58 and 61, and other pages scored 90 to 95 (audit count, 2026-10-20). Google uses LCP as a ranking signal and treats anything over 2.5 seconds as needing improvement.

- **Part of the cause.** A 26 KB stylesheet that blocks rendering: the phone downloads the HTML, finds the stylesheet link, and waits for that second file before it draws anything (audit count, 2026-10-20).
- **What's already done.** In `d6989dc`, the unused Geist fonts were removed and the scheduler loads only when it nears the screen. LCP hasn't been measured since.
- **The option.** Next.js 16.2.10, the version installed, has an experimental setting, `experimental.inlineCss` (rechecked 2026-10-21 in `node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/inlineCss.md`). It puts the styles inside each page's HTML as a `<style>` tag instead of a separate file, which removes that wait.
- **Its limits, per the Next.js docs.**
  - It applies to every page and can't be set per page.
  - It only works in production builds, not in development.
  - Styles are sent twice on the first load: once in the `<style>` tag and once in the page data.
  - Moving between pages inside the site still uses a stylesheet link.
- **It works with the site's setup.** `next.config.ts` has no `experimental` block today. The security policy already allows inline styles (`style-src 'self' 'unsafe-inline'`), so it needs no change.

## What development mode means for it

The change can be tried and measured now on a production build of the site. Visitors and search engines see the effect only after launch, so there's time to measure it and undo it if it doesn't help.

## What I need from you

Pick one:
1. **Measure first, then try it** only if phones still take longer than 2.5 seconds.
   - First-time visitors on phones get faster pages.
   - The costs are bigger HTML on every page, no separately cached stylesheet for returning visitors, and an experimental Next.js setting.
2. **Try it now**, measuring before and after. You get the answer sooner, with the same trade-offs.
3. **Don't try it.** Nothing changes, and the stylesheet keeps blocking the first paint.

## My recommendation

Recommendation: option 1.

Reason: the two fixes already made may be enough. The setting is experimental, so it's worth turning on only if a measurement shows the need.

## The plan once you decide

1. Run PageSpeed Insights for phones on five page types: home, a pillar, a tool page, a blog post and a glossary term. Record LCP for each.
2. If you choose to try it, add `experimental: { inlineCss: true }` to `next.config.ts`.
3. Build for production, deploy to a preview URL, and rerun the same five PageSpeed tests.
4. Keep the setting only if LCP improves without hurting Time to First Byte. Otherwise remove it.

## How I'll check it, and its status

- PageSpeed results for the five pages before and after, with LCP, First Contentful Paint and Time to First Byte.
- A production build serves a `<style>` tag in place of the stylesheet link.
- The headless browser shows no security-policy error and no layout change at 390 and 1440 px.

**Status:** Open, waiting on your decision.
