# Business Profile name

Audit reference: GEO H7 and M5 in `plans/geo-seo-audit-2026-10-20.md`, CA11 and CA15 in `plans/competitor-audit-2026-10-20.md`.

## The problem

The profile and the site use different names.
- **CA11, from the public Maps data on 2026-10-20.** The Google Business Profile's name is "Geek @ Your Spot", without "LLC".
- **Rechecked 2026-10-21.** Every page of the site names the business "Geek @ Your Spot LLC". In the Organization node in `src/lib/seo/organization.ts`, "Geek @ Your Spot LLC" is the name and the legal name, and "Geek @ Your Spot" is only the `alternateName`.
- **CA15, 2026-10-20.** Search engines drop the "@", so an exact search for "Geek @ Your Spot" reached "Geeks On The Spot", an IT repair business in Miramar, and returned nothing about this business.

Why it matters. Engines match a business across its profile, its site and its directory listings by name. Two forms of the name make them less sure these are the same business. A name that's already easy to confuse with another firm makes every mismatch cost more.

## What development mode means for it

The profile is live now, and the rename doesn't depend on the site being indexed.

## What I need from you

1. **Rename the profile** "Geek @ Your Spot LLC" in Google Business Profile. Google can hold a name edit for review, and may ask you to verify again.
2. **Keep extra words out of the name field.** Google's guidelines don't allow additions such as "Delray Beach" or "AI Consulting" in the name. CA15 suggests pairing the name with "Delray Beach" in each profile's description and address, not in the name.

## My recommendation

Recommendation: rename it to "Geek @ Your Spot LLC", exactly as the site writes it. Then the profile, the site and the structured data carry one name.

## The plan once you decide

1. You make the rename in Google Business Profile.
2. Tell me when it shows publicly. I compare it with the site.

## How I'll check it, and its status

The public profile's name matches the `name` in `src/lib/seo/organization.ts` and the business name on the site's pages.

**Status:** Open, waiting on you.
