# Business Profile description

Audit reference: GEO H7 and M4 in `plans/geo-seo-audit-2026-10-20.md`, CA11 in `plans/competitor-audit-2026-10-20.md`.

## The problem

The Google Business Profile describes a different business from the one the site describes.
- **CA11, from the public Maps data on 2026-10-20.**
  - The description names "Broward and Palm Beach" with no Miami-Dade.
  - It lists "Accounting, Marketing, and Sales" as the departments.
- **The site, rechecked 2026-10-21.**
  - It names Miami-Dade, Broward and Palm Beach everywhere. The scheduler sentence on every page reads "South Florida technology consultancy serving small businesses in Miami-Dade, Broward, and Palm Beach." (`src/components/shared/scheduler/scheduler-shell.tsx:35`).
  - The Organization node lists Miami-Dade County in its service area (`src/lib/seo/organization.ts`).
  - The site has two departments, Accounting and Marketing.

Why it matters. Google and AI engines compare the profile with the site. When the two disagree on where the business works and what it sells, they trust both less, and the profile can be left out of Miami-Dade searches entirely.

## What development mode means for it

The profile is live now and doesn't depend on the site being indexed. The fix helps from the day it's saved.

## What I need from you

1. **Edit the description in Google Business Profile** to add Miami-Dade and remove "Sales".
2. **Use my draft, or write your own.** Here's a draft that matches the site's wording:

   > Geek @ Your Spot LLC is an AI implementation consultancy in Delray Beach, Florida. We help small businesses in Miami-Dade, Broward, and Palm Beach automate their accounting work, such as accounts payable, cash flow forecasting and tax compliance, and their marketing work, such as lead capture and content creation.

   **The field caps at 300 characters (owner, 2026-10-22), and the draft above is 315.** The same wording fitted to the cap, at 298:

   > Geek @ Your Spot LLC is an AI implementation consultancy in Delray Beach, serving small businesses in Miami-Dade, Broward, and Palm Beach. We automate accounting work, such as accounts payable, cash flow forecasting and tax compliance, and marketing work, such as lead capture and content creation.

## Services on the profile, 2026-10-22

The profile's services take a description each, also capped at 300 characters. The services are not a new list: they match the site's use cases, under the two departments. Which services the profile already lists is not recorded here, so the descriptions are written once the owner names them.

## My recommendation

Recommendation: use wording that matches the site's service-area sentence word for word, so the two sources agree exactly. Name only the two departments the site has.

## The plan once you decide

1. You paste the final text into the profile's description field and save it. Google may review the edit before it shows.
2. Tell me when it's live, and I compare it with the site's wording.

## How I'll check it, and its status

I compare the public profile's description with the scheduler sentence and the Organization node's service area. They name the same three counties and the same two departments.

**Status:** Open, waiting on you.
