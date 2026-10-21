# A services page

Audit reference: GEO C2 and decision 3 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

- No page says what services the business sells. There is no `/services` route (rechecked 2026-10-21).
- The services exist only in the home page's markup, as an "AI Services" catalogue at `src/app/(site)/page.tsx:20-80` (rechecked 2026-10-21):
  - Free AI Assessment, at a price of 0;
  - AI System Design;
  - AI Implementation;
  - Business Automation;
  - AI Consulting for South Florida Small Businesses.

  No visible page describes them.
- The first step goes by three names (CA9 in `plans/competitor-audit-2026-10-20.md`, audit count, 2026-10-20):
  - "Get Your Free AI Assessment", a button on 148 pages;
  - "free consultation", on 422 pages;
  - "Architectural Infrastructure Audit", a 143-word page at `src/app/(site)/architectural-infrastructure-audit/page.tsx` with two H1s and no price.
- The old llms.txt on the Seagate drive listed:
  - a free AI strategy consultation;
  - AI implementation and process automation;
  - business objectives analysis, data quality assessment and technology selection.
- Searches like "AI consultant Miami" and "AI consulting South Florida" are won by service pages and directory profiles. The home page uses "consultant" or "consulting" zero times (audit count, 2026-10-20).
- On 2026-10-20 you said a service menu is needed and postponed it. On 2026-10-21 you said: "Pricing we will need to work on, as well as contact, and services."
- The Business Profile's extra categories wait on this page. Your words, 2026-10-21: "NO you will not replace the two ill-fitting extras.  The yet to be written service section will address!" You also told me Google Business Profile has no AI category.

## What development mode means for it

The page can be built, renamed or moved now at no cost. It reaches search at launch.

## What I need from you

1. **The services you sell, and what each one includes.** The markup list above is a starting point, and it may not match how you sell today.
2. **One page with a section per service, or a page per service.**
   - **One page** is quicker and gathers everything in one place.
   - **A page per service** gives each service its own search target, and each page needs enough to say.
3. **On-site, remote, or both.**
4. **The URL**, for example `/services`.
5. **The first step's one name.** "Free AI Assessment", "free consultation" or "Architectural Infrastructure Audit", and whether that page stays, joins this one, or is deleted.

## My recommendation

Recommendation: one page at `/services`, with a section per service, a visible FAQ, and the first step under a single name.

Reason: one complete page is easier to keep accurate than five thin ones. It also gives the markup that already lists these services a visible page to describe.

## The plan once you decide

1. Build `src/app/(site)/services/page.tsx`, or the URL you choose, with its sections under `src/components/services/` in the two-block breakpoint pattern.
2. Give each service a `Service` node, written for it, with the business as provider and the service area served. These are the first Service nodes on the site: `pillarService` and the pillar Service nodes were deleted in `cccde1c`, and none is added before this section exists.
3. Update the home page's "AI Services" catalogue so the markup matches the visible services, and give the first step its one name everywhere it appears.
4. Link the page from the footer in `src/components/layout/footer.tsx`. `src/app/sitemap.ts` lists it automatically.
5. Choose the Business Profile categories from the finished service list, as you directed.

## How I'll check it, and its status

- A crawl of the local build shows the page reachable from `/`.
- The JSON-LD parses, and its services match the visible text.
- The phone and desktop copies match, and the copy follows the site's copy rules.

**Status:** Open, waiting on your decision.
