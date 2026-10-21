# Facebook name

Audit reference: GEO M5 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

The Facebook page uses a third form of the name.
- **GEO M5, 2026-10-20.** Facebook names the business "Geek At Your Spot".
- **Rechecked 2026-10-21.** The site names it "Geek @ Your Spot LLC" on every page, and the Organization node in `src/lib/seo/organization.ts` lists the Facebook page, `https://www.facebook.com/geekatyourspot`, in `sameAs`.

Why it matters. `sameAs` tells engines the Facebook page and the site are the same business. A different name on the page weakens that match, and with the other forms already in use, the business appears under three spellings.

## What development mode means for it

Facebook is live now, and the rename doesn't depend on the site being indexed.

## What I need from you

Rename the Facebook page "Geek @ Your Spot LLC" in the page's settings. Facebook reviews page name changes, so the new name can take a few days to appear.

## My recommendation

Recommendation: use "Geek @ Your Spot LLC", exactly as the site and the Organization node write it, so the page matches everywhere else.

## The plan once you decide

1. You request the rename on Facebook.
2. Tell me when the new name shows. I compare the public page with the site. The `sameAs` URL stays the same, so the site needs no change.

## How I'll check it, and its status

The public Facebook page's name matches the `name` in `src/lib/seo/organization.ts`, and the `sameAs` URL still opens the page.

**Status:** Open, waiting on you.
