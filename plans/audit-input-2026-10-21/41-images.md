# Content images

Audit reference: GEO M11 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

Almost no page has an image of its own.
- **Audit count, 2026-10-20.**
  - 422 of 432 pages had no content image.
  - Of the 57 article nodes in the structured data, 7 had a usable raster image. The rest used a placeholder, the 116 x 48 logo SVG (below Google's minimum size for article images), or nothing.
- **Since then.** SEO M3 (`d6989dc`) gave all 448 pages one shared 1200 x 630 share image, `SHARE_IMAGE` in `src/lib/seo/share-image.ts`. Every page now has a valid `og:image`, but it's the same picture everywhere, so it says nothing about any single page. On 2026-10-22 (`19e3d4f`), at the owner's direction, that card took the logo: the footer's white wordmark on the navy ground, above the tagline and the domain, in place of the name set in type. It is still the one card for every page.

Why it matters:
- Google shows a large image beside a result, and in Discover, only for pages that have one of their own.
- AI answers and social shares show the page's image.
- An original image, such as a setup screenshot or a workflow diagram, is also evidence that the work is real.

Source material already exists. Your content writer's exports include image prompts: 19 `image-prompts` folders in `content-writer-output`, with 1,315 prompt files between them (rechecked 2026-10-21).

## What development mode means for it

Images can be made and added now. Nothing changes in search until launch.

## What I need from you

1. **Where the images come from.**
   - **Generated from the existing prompts.** This is fastest, and the prompts already exist. Generated images can look generic, and each one needs your review.
   - **Your own screenshots** of tool setups and dashboards. These are the most original and credible. They take your time, and any client data has to be hidden.
   - **Diagrams of each workflow,** for example invoice to approval to payment. They're clear and original, and I can draw them. They show the process rather than the product.
2. **Where it goes and what goes first: decided 2026-10-22.** The owner: the layout supports pictures, and the hero is his priority. The shared hero already has the slot, a 460 x 460 `next/image` in its right column (`src/components/shared/shared-hero-section.tsx:73-79`), drawn when a page passes `image`. 27 pages use that hero: the 23 use-case pages plus about, methodology, privacy and terms. Five pillars pass a picture today (accounts payable, cash flow forecasting, tax compliance, marketing, lead capture) and the other 22 pages pass an empty string. The blog hero has no picture slot. So the hero pictures come first, on the 18 pillars without one.

## My recommendation

Recommendation: diagrams or your screenshots for the 23 pillars first. Each pillar is the page its topic's other pages point to, and an original image there does the most for trust. Generated images can follow on the blog posts, after your review.

## The plan once you decide

1. Make one image per page, at least 1200 px wide. Export it as AVIF with a WebP fallback, the way the home hero is served (`b42697d`), and save it under `public/images/<department>/...`.
2. Pass it to the shared hero as `image`, with alt text that describes what it shows; the hero draws it at 460 x 460.
3. Set that page's JSON-LD `image`, `og:image` and `twitter:image` to the new image in place of `SHARE_IMAGE`.

## How I'll check it, and its status

- A crawl of the local build lists every post and pillar with its content image, the image's width, its alt text and its `og:image`. The two must match on every page.
- PageSpeed on a pillar shows that phone load time is no worse.

**Status:** Open on where the pictures come from. The slot and the order are decided (2026-10-22).
