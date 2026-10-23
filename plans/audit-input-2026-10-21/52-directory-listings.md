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

**Checked 2026-10-23, partly done.** The owner reports BBB, Yelp, Clutch and GoodFirms created ("52 Completed BBB, Yelp, Clutch, GoodFirms").
- **BBB, verified and on the site (`51e3aad`).** `https://www.bbb.org/us/fl/delray-beach/profile/automation-consultants/geek-your-spot-llc-0633-92089707` returns 200 and reads "Geek @ Your Spot LLC", 2025 NW 18th St, Delray Beach, FL 33445-1400, (561) 526-3512, category Automation Consultants, "Mr. Jeff Martin, Founder", file opened 10/21/2026, "Business Incorporated: 8/28/2026", LLC, not rated and not accredited. Two fields on the profile are empty and are the owner's to fill: the website (the profile shows no link to geekatyourspot.com) and "Business Started", which BBB uses for its "Years in Business" line. The profile is in the Organization node's `sameAs` in `src/lib/seo/organization.ts`, so it prints on every page; the build and the FAQ check pass.
- **Yelp, not reachable.** Every request to yelp.com, profile or search, returns 403 to a headless browser, and no search engine has the profile yet.
- **Clutch, not public yet.** The profile is in none of Clutch's 46 profile sitemaps (24 MB, fetched 2026-10-23), and the likely addresses return 404 or 410. Clutch publishes a profile after its own review.
- **GoodFirms, not reachable.** Every profile address meets a Cloudflare challenge, and `goodfirms.co/company/geek-your-spot` redirects to the home page.
- **Founding year.** The profiles carry 2026. The site says 2006 since `861f337`, the year you first did business under the name, and you will change the profiles to match; BBB's empty "Business Started" takes 2006 too, and its incorporation date, 8/28/2026, stays.

Send me the Yelp, Clutch and GoodFirms addresses. Each goes into `sameAs` once it returns 200 with the site's name, address and phone.

**Status:** Partly done. BBB is on the site; three addresses are waiting on you.
