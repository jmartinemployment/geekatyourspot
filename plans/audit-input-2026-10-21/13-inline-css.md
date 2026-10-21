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

**Measured and tried on 2026-10-21.** You said: "It seems to be logical to go ahead an implement Option 1, although, is their a downside...test and implement".
- **How it was measured.** PageSpeed's API had used up its daily quota for requests without a key, so every run used Lighthouse 13.5, the engine PageSpeed runs, with the same phone settings: a mobile screen, simulated slow 4G and four times slower CPU. Each figure is the median of five runs. The Mac running it is faster than PageSpeed's servers, so PageSpeed itself reports somewhat slower times.
- **Step 1, the deployed site.** Every page type is under the 2.5 second line:

| Page | Score | LCP | FCP | TTFB |
|---|---|---|---|---|
| Home | 99 | 1.69 s | 1.24 s | 30 ms |
| Pillar (`/use-cases/marketing`) | 99 | 1.55 s | 1.24 s | 29 ms |
| Tool page (Mailchimp) | 100 | 1.32 s | 1.09 s | 28 ms |
| Blog post | 100 | 1.54 s | 1.24 s | 29 ms |
| Glossary term (CRM) | 99 | 1.92 s | 1.09 s | 30 ms |

  Lighthouse estimates the render-blocking stylesheet costs about 0.3 seconds on the home page. The stylesheet is 166 KB, 25 KB compressed, not the 26 KB the audit gave.
- **Steps 2 and 3, tried anyway.** The two production builds, without and with `inlineCss`, were measured the same way, side by side. Inlining made LCP the same or worse on every page type, and it made the compressed HTML about 80 KB heavier on every page. Next.js sends the styles twice on a first load, once in the `<style>` tag and once in the page data.

| Page | LCP without | LCP with | Compressed HTML without | Compressed HTML with |
|---|---|---|---|---|
| Home | 3.38 s | 3.46 s | 45 KB | 124 KB |
| Pillar | 2.79 s | 3.01 s | 40 KB | 119 KB |
| Tool page | 3.22 s | 3.29 s | 17 KB | 96 KB |
| Blog post | 2.71 s | 3.44 s | 35 KB | 114 KB |
| Glossary term | 3.14 s | 3.29 s | 12 KB | 91 KB |

  These two builds were served locally, so their times run slower than the deployed site's. Only the difference between them counts.
- **Step 4.** LCP didn't improve, so the setting is removed. `next.config.ts` is unchanged.
- **Above-the-fold CSS, asked about on 2026-10-21.** Inlining only the styles the first screen needs, and loading the rest without blocking, is called critical CSS.
  - Next.js has a setting for it, `experimental.optimizeCss`, but only its older Pages Router renderer runs it (`node_modules/next/dist/server/render.js`). This site uses the App Router, whose renderer never calls it, so the setting would do nothing here.
  - Its best case is what the `inlineCss` test already gave: no stylesheet to wait for. That test moved first paint by about 0.1 seconds and didn't move LCP, so the main content is held by something after first paint, not by the stylesheet.
  - The stylesheet's size is real use. The site's own code uses 1,450 of its 1,535 classes, and the utility classes are 148 KB of its 166 KB. Only 16 come from files outside `src`.

**Status:** Done. Measured, tried and not kept: the deployed site is under 2.5 seconds on phones, and inlining made it slower.
