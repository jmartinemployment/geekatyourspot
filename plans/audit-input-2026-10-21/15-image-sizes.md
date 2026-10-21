# Image `sizes`

Audit reference: GEO L3 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

You asked what is wrong with image sizes. The audit's L3 finding said that no content image sets `sizes`.

- `sizes` is a setting on an image, not the file size. It tells the browser how wide the image will be shown, so a phone can download a smaller file.
- What the repo has (rechecked 2026-10-21):
  - 34 images use Next's image component, in 28 files.
  - Every one of them sets a fixed `width` and `height`.
  - None uses `fill`, the setting for an image that stretches to fill its box, and none sets `sizes`.
- For a fixed-size image, Next.js offers a 1x and a 2x file, and the browser picks one by screen density. `sizes` matters most for `fill` images: without it, the browser assumes the image is as wide as the screen and downloads a bigger file than it needs. The site has no `fill` images.
- Where `sizes` could still help: on an image whose CSS shrinks it well below its set width on phones. Adding `sizes` there makes Next offer more widths, and a phone may download a smaller file. The saving is small.
- The rest of L3 was the image quality setting. `quality={100}` was removed on 2026-10-20 (`d6989dc`).

## What development mode means for it

Nothing about images reaches search before launch, so any change can be made and measured now at no cost.

## What I need from you

Close this part of L3, or keep it open.

- **Close it.** I record in the audit that every image has fixed dimensions, so `sizes` would change little. There's no code change.
- **Keep it open, and add `sizes` where phones shrink an image.** I find the images shown on a 390 px screen at well below their set width, and add `sizes` to those only. Phones download a bit less, at the cost of a few component edits.

## My recommendation

Recommendation: close it. The risk the finding describes applies to images that stretch to fill their box, and the site has none.

## The plan once you decide

- **If you close it:** record the recheck under GEO L3 in `plans/geo-seo-audit-2026-10-20.md`. The SEO audit has no `sizes` finding.
- **If you keep it open:**
  1. Load each page type at 390 px in headless Playwright, and measure each image's shown width against its `width`.
  2. Add a `sizes` value to each image shown at less than about two-thirds of its set width, in the component that renders it.
  3. Record the change under GEO L3.

## How I'll check it, and its status

- **If you close it:** the audit note matches the recheck above.
- **If you keep it open:** compare the bytes each changed image downloads at 390 px, before and after.

**Status:** Open, waiting on your decision.
