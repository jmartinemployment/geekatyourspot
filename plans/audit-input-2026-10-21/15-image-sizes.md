# Image `sizes`

Audit reference: GEO L3 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

You asked what is wrong with image sizes. The audit's L3 finding said that no content image sets `sizes`.

- `sizes` is a setting on an image, not the file size. It tells the browser how wide the image will be shown, so a phone can download a smaller file.
- **How the site sizes its images (rechecked 2026-10-21).** Every image sets a fixed `width` and `height`, and none sets `sizes`.
  - A section image is set twice, once per block: 460 by 460 in the desktop block and 211 by 211 in the phone block. 41 images follow this, the shared hero's 460 included.
  - The browser scales each one down to fit its column, keeping its shape. That comes from Tailwind's base style for every image, `max-width: 100%` with `height: auto` (`node_modules/tailwindcss/preflight.css:225`), so no image needs its own class for it.
  - The home hero, the About images and the logos set their own size and use `h-auto w-full`, or no class at all for the logos.
  - One image broke the rule: the SEO blog diagram on AI Content Creation Workflow carried `style={{ width: '100%', height: '460' }}`, which stretched it to the full width of its column. The style was removed on 2026-10-21, so it scales like the others.
- **What Next.js serves for this.** For an image with a fixed width, Next offers two files, one for normal screens and one for sharp phone and laptop screens, and the browser picks by screen density.
- **Where `sizes` could still help.** On a 390 px phone, the phone block's 211 px image is shown at about 140 px, so a phone may download a little more than it shows. Adding `sizes` would let Next offer more widths. The saving is small.
- The rest of L3 was the image quality setting. `quality={100}` was removed on 2026-10-20 (`d6989dc`).

## What development mode means for it

Nothing about images reaches search before launch, so any change can be made and measured now at no cost.

## What I need from you

Close this part of L3, or keep it open.

- **Close it.** I record in the audit that every image has fixed dimensions, so `sizes` would change little. There's no code change.
- **Keep it open, and add `sizes` where phones shrink an image.** I find the images shown on a 390 px screen at well below their set width, and add `sizes` to those only. Phones download a bit less, at the cost of a few component edits.

## My recommendation

Recommendation: close it. Every image has a set size for each block and scales down to its column, so `sizes` would save only a little on phones.

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
