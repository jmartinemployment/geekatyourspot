# Local area pages

Audit reference: GEO C2 and decision 3 in `plans/geo-seo-audit-2026-10-20.md`. Supporting evidence is in CP2 of `plans/competitor-pages-audit-2026-10-20.md` and CA2 of `plans/competitor-audit-2026-10-20.md`.

## The problem

- The site has no page for a South Florida place. None of the 426 deployed titles names one (audit count, 2026-10-20).
- 25 of 58 crawled competitor sites have a page whose title or H1 names AI and a South Florida place (audit count, 2026-10-20).
- All 27 local result sets checked are held by city service pages. The site's only candidate is the home page (CA2).
- Eight sites have a Delray Beach AI page. Only Pisano Designer and this business are actually in Delray Beach (CA2). Visionary Solutions Group, ten miles away in Boca Raton, has AI pages for Miami, Fort Lauderdale and South Florida, but not for its own town.
- The business address is about 45 to 50 miles from Miami, so map results for Miami searches will favour closer firms. An ordinary page is the way into those searches.
- What the winning pages have (CA2):
  - an H1 that names the place;
  - 1,000 to 2,300 words;
  - `LocalBusiness`, `Offer` and `FAQPage` markup;
  - an entry price;
  - a visible FAQ;
  - a named person or a street address.
- What to avoid (CA2): Spotlight's 58 city pages with a median of 0% unique text, CPT's 332 city slugs, and Nextek's page that swaps "Delray Beach" into its Coral Springs address. Google treats pages like these as doorway pages.

## What development mode means for it

Area pages can be built and reworked now at no cost. They reach search at launch.

## What I need from you

1. **Which areas, at most three.** For example, Delray Beach and Palm Beach County, then Broward, then Miami-Dade.
2. **What's local about your work in each area.** The industries you serve there, the kinds of clients, and whether you visit on site. This is what keeps a page from being a template.
3. **Your travel radius.**
4. **The URL pattern**, for example `/ai-consulting/delray-beach`.

## My recommendation

Recommendation: start with one page for Delray Beach and Palm Beach County, as CP2 recommends, built to the shape above with your own local material. Add Broward and Miami-Dade only once each has local material of its own.

Reason: this is the one area where the business is actually local and few rivals have a page. A page with nothing local on it is the template Google discounts.

## The plan once you decide

1. Build each page under the URL pattern you choose, in the two-block breakpoint pattern, with its FAQ built from the same array as its `FAQPage` markup, as on the pillars.
2. Give each page a `Service` node for its area. `pillarService` in `src/lib/seo/organization.ts` sets the whole service area today, so it needs an optional area setting.
3. Link each page from the footer in `src/components/layout/footer.tsx`. `src/app/sitemap.ts` lists them automatically.

## How I'll check it, and its status

- A crawl of the local build shows each page reachable from `/`.
- The JSON-LD parses, and the FAQ markup matches the visible questions.
- The phone and desktop copies match.
- Once there's a second page, a text comparison shows the pages share no paragraphs.

**Status:** Open, waiting on your decision.
