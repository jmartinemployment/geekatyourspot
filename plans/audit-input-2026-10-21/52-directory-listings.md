# Directory listings

Audit reference: GEO H7 in `plans/geo-seo-audit-2026-10-20.md`, CA3 and CA15 in `plans/competitor-audit-2026-10-20.md`.

## The problem

The business isn't listed in the directories that search engines and AI engines use to identify a business.
- **GEO H7, 2026-10-20.** Not found on Bing Places, BBB, the Greater Delray Beach Chamber directory, Clutch, DesignRush, GoodFirms, UpCity or TechBehemoths.
- **GEO H7 recheck, 2026-10-20.** A directory search found the site on none of BBB, Yelp, Clutch, DesignRush or GoodFirms.
- **CA3, 2026-10-20.**
  - DesignRush appeared in 9 of 49 search result sets, GoodFirms in 9 and Clutch in 7.
  - Two firms appeared in AI summaries only through their directory profiles.
  - The summaries took rate, team size, founding year and minimum budget from those profiles.
- **CA15, 2026-10-20.** The strongest rivals have chamber links, and this business isn't in the Greater Delray Beach Chamber directory.
- **Rechecked 2026-10-21.** The Organization node's `sameAs` in `src/lib/seo/organization.ts` lists only the Google Business Profile map URL, Facebook and LinkedIn.

Why it matters. When an AI answer lists local AI consultants, it often names firms it found through these profiles. A business with no listings gives engines nothing to confirm it with, and nothing to quote.

## What development mode means for it

Directory profiles don't wait for launch. They're live as soon as they're created, and they help whether or not the site is indexed.

## What I need from you

1. **Create the profiles.** Each one uses the same name, address and phone as the site: "Geek @ Your Spot LLC", 2025 NW 18th Street, Delray Beach, and +1-561-526-3512.
2. **Fill the fields summaries quote.** CA3 lists rate or entry price, minimum project, team size, founding year (2024) and service area. Decide what you're willing to publish for each.
3. **Send me each profile's URL.**

The options differ in effort and cost:
- **Bing Places and Apple Business Connect** import from or mirror the Google profile, so they're quick.
- **Yelp and BBB** are free to list. BBB accreditation costs money.
- **Clutch** reviews involve your clients.
- **The Chamber** is a paid membership.

## My recommendation

Recommendation, in this order:
1. Bing Places, imported from the Google profile, and Apple Business Connect. These are fastest.
2. Yelp and BBB. CA3 puts them first among the sources AI answers draw on.
3. Clutch, DesignRush and GoodFirms, under AI consulting, with the Delray Beach address.
4. UpCity and TechBehemoths.
5. The Greater Delray Beach Chamber, if the membership is worth it to you.

## The plan once you decide

1. You create each profile and send me its URL.
2. I add each URL to the Organization node's `sameAs` in `src/lib/seo/organization.ts`. That node prints on every page, so the change appears site-wide.

## How I'll check it, and its status

- The JSON-LD parses.
- Every `sameAs` URL returns 200.
- Each profile's name, address and phone match the site exactly.

**Status:** Open, waiting on you.
