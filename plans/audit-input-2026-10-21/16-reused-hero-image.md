# One hero image on three pillars

Audit reference: GEO L3 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

One image, `/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-pillar-hero.avif`, is the hero on three pages (rechecked 2026-10-21):

| Page | Hero setting | Article markup `image` |
|---|---|---|
| `/use-cases/marketing` | `page.tsx:117` | `page.tsx:23` |
| `/use-cases/marketing/ai-content-creation-workflow` | `page.tsx:146` | `page.tsx:25` |
| `/use-cases/marketing/automated-ad-spend-optimization` | `page.tsx:268` | `page.tsx:25` |

- `SharedHeroSection` (`src/components/shared/shared-hero-section.tsx:73-80`) shows the image at 460 by 460 in the desktop hero. Phones don't see it.
- Each page's Article markup also names the same file as its `image`.
- The ad spend page says so in a code comment at `page.tsx:267`: "SharedHeroSection requires an image. Swap once the pillar hero is generated."
- The file is named for AI Marketing Systems, which is now `/use-cases/marketing`.
- Your exports in `content-writer-output/marketing/` have no image prompts for any of these three pages (rechecked 2026-10-21).

Why it matters:
- Google Images and AI answers tie an image to one page.
- Two of the three pages show a picture made for a different topic, and their Article markup describes them with an image of something else.

## What development mode means for it

Images can be swapped now at no cost. Nothing reaches search before launch.

## What I need from you

1. **Should the content creation workflow page and the ad spend page get images of their own?**
2. **If yes, where do they come from?**
   - **Generated from a prompt.** Fast and matched to each topic, but it needs a prompt for each page, because the exports don't have one.
   - **Your own screenshots or photos.** The most original option, but they need you to take them.
   - **A diagram of the workflow on each page.** Clear and specific to the page, but each one has to be drawn.
3. **Or keep the shared image.** No work, and the problem above stays.

## My recommendation

Recommendation: new images for the content creation workflow page and the ad spend page, and keep the current image on `/use-cases/marketing`.

Reason: the file was made for the marketing systems page and fits it. The other two pages are the ones described by someone else's picture.

## The plan once you decide

1. Add each new image under `public/images/marketing/use-cases/<page>/`, as `<page>-pillar-hero.avif`, at least 1200 px wide.
2. In each page's `page.tsx`, point `heroImage` and the Article `image` URL at the new file, and set an `imgAlt` that describes it.
3. Delete the "Swap once the pillar hero is generated" comment on the ad spend page.

## How I'll check it, and its status

- The three pages show three different hero images at 1440 px.
- Each Article `image` URL returns 200, and each image has alt text.

**Status:** Open, waiting on your decision.
