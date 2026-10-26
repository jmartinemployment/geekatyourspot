# GEO and SEO audit, every installed skill (2026-10-20)

The site is pre-launch. Everything below is something to fix or decide before launch, not damage happening now. The `X-Robots-Tag: noindex, nofollow` header keeps every page out of search until `ALLOW_INDEXING` is set.

This report combines eight parallel audit tracks:
- citability and content quality;
- structured data;
- general and page-level SEO;
- AI crawler access;
- site architecture and strategy;
- technical;
- data and competitors;
- local, brand and backlinks.

It sits alongside `plans/seo-audit-2026-10-20.md` (the first audit, referred to here as "SA"), and does not repeat what that report covers except where these tracks add evidence.

`plans/competitor-pages-audit-2026-10-20.md` (CP) rechecks C2 and H12 against the consultancy-competitors crawl: 9,187 pages from 58 sites, against the deployed commit `8ce8b28`.

`plans/competitor-audit-2026-10-20.md` (CA) audits the site against the 19 sites crawled on 2026-10-20, with every applicable skill, against `8ce8b28`. Its rechecks of this audit, all on 2026-10-20:
- **C2, still open (CA2).** None of the 19 has an AI page for Delray Beach or Boca Raton. Deeper search results show eight other sites with a Delray Beach AI page, one of them (Pisano Designer) based in Delray Beach with published prices. The C2 recheck bullet below is corrected to match.
- **C3, still open (CA1).** The IT firms that now sell AI show 46 to 95 Google reviews (C&W 95, Capstone 73, CPT 67, Nerd Teks 46). Only one AI-first rival has any (Gold Coast AI, 9).
- **H4, still open (CA4, CA6).** No page has a defining sentence, and Jeff Martin appears on 1 of 426 deployed pages.
- **H7, partly changed (CA3, CA11, CA15).** The GBP's primary category is now "Automation company" and its pin is in Delray Beach. Its name reads "Geek @ Your Spot LLC" since 2026-10-23, and the BBB profile exists and is in `sameAs` (`51e3aad`); the other categories and the description are not rechecked, and the Yelp, Clutch and GoodFirms profiles the owner created are not reachable yet. The H7 recheck bullets below have the details.
- **H12, still open (CA10).** The vendors the site reviews hold the specialty searches with their own guides. No South Florida rival compares those tools.
- **Launch gate 2, still open (CA14).** `geekatyourspot.vercel.app` returns 200, protected only by the pre-launch noindex header.
- **Launch gate 3, partly done (CA14).** `d6989dc` adds three security headers outside the `ALLOW_INDEXING` branch, and the deployed site sends them. `X-Frame-Options` and a CSP are still missing.
- **Decisions 2, 10 and 11 (CA14, CA9).** 11 of the 19 rivals publish llms.txt, 10 of 22 AI implementers publish prices, and 16 of the 19 admit every crawler.

## Method

- **Crawl.** A local `next build` at commit `921d3b8` served on `localhost:3311`: all 432 sitemap URLs plus the query-string listing pages. Vercel confirmed the deployed site was built from the same commit, so the findings apply to both.
- **Deployed-site checks.** Headers, robots.txt, the sitemap, PageSpeed Insights through Google's own web interface, and Lighthouse.
- **Outside the site.** Web search, Wikipedia and Wikidata APIs, Common Crawl, the public Google Maps payload, Bing Maps, BBB, and the published GTM container.
- **No edits.** No track changed the repo.
- **Verification.** I checked the main claims in the source before including them; anything not confirmed is marked "reported".
- **Since the crawl.** Two of the findings are already fixed in commits `7a1388a` (new hero H1) and `6696a93` (footer hub links, SA C1).
- **Changes on 2026-10-21 (`cccde1c`).** The SA report records the same two changes under "Changes made after the audit ran".
  - **Shorter use-case URLs (L13, decision 6).** 15 use-case pages have a shorter last segment, at the owner's direction (document 03 in `48c5a66`). URLs quoted from those pages in this report now return 404, and document 03 in `48c5a66` maps each one.
  - **No # URLs (H9, M14).** At the owner's direction, no URL on the site has a `#`: no structured data `@id`, no jump link (document 53, deleted by the owner on 2026-10-22). The `@id`s this report quotes, such as `#software-<slug>` and `#article`, are gone.
    - **Scheduler links restored on 2026-10-22 (`929be59`).** The ban is the structured data `@id`s only. At the owner's direction, the scheduler links are `href="#consultationAppointment2xl"` anchors again: 108 links in 102 component files, the blog renderer's link and the 14 exported posts that `cccde1c` had turned into buttons. The export loader keeps that one `#` anchor, which returns the link to 104 more exported posts that had lost it silently, because the loader had been unwrapping every `#` link. The anchor is the owner's one legitimate `#` ("I use the # anchor for the scheduler, not some random bs"): a real section on every page, and the address an outside listing such as Clutch or the Business Profile sends a visitor to, `https://geekatyourspot.com/#consultationAppointment2xl` (the apex host; www redirects to it and the browser carries the fragment through). Every link id is unchanged, so GTM's "Just Links" trigger fires for them again. The structured data is unchanged: no `@id` has a `#`. Verified on a local build: the FAQ check passes, and headless Chromium lands on the loaded calendar from a hero click, a tool-page link, a blog link and the `/about` fragment. **Plain anchors on 2026-10-23 (`64dbd8c`).** The owner reported "it no longer fills the screen or viewport": the restored links were next/link `Link`s, which do nothing when the address already carries the hash, so a second press, or a press after landing on the fragment, left the page where it was. The links are plain `<a>` now, and the section has `overflow-anchor: none`, because Chrome's scroll anchoring moved the page 85px on blog pages while the calendar loaded. Verified on a local build in headless Chromium: first press, second press with the hash set, blog and tool page links, the fragment landing and the phone all hold the section at the top with the calendar loaded. The same note is SA H4b.
  - **Text sizes, later on 2026-10-21, at the owner's direction.** `text-md` is not a Tailwind class and set nothing, so its 8,380 uses in 1,180 files became `text-base`, and the size rules in `src/app/globals.css` lost their `!important`. A headless comparison of all 87,220 sized text elements on all 447 pages, at 390 and 1440 px, finds no change, and the About timeline years now reach their intended 20 px on desktop. Every orange link on a coloured section carries `text-shadow-2xs text-shadow-white`, chosen by the owner from eight shadows compared side by side. The same note is in SA's change list.
  - **Link shadows and heading links, 2026-10-21, at the owner's direction (L2).** No link carries a text shadow: the thin white shadow is gone from the 428 orange link classes, and a base rule in `src/app/globals.css` stops links inheriting the dark shadow of their paragraph. A link inside a heading keeps the heading's shadow. The 22 navy links inside headings on four use-case pages, such as Tipalti on AI AP Automation Software, are white with a navy hover, and the orange one on `/use-cases/marketing` is white with an orange hover. A crawl of 423 pages finds no link with its own shadow and no heading link that is not white. The same note is in `plans/seo-audit-2026-10-20.md`.
  - **Home card links not bold, 2026-10-21, at the owner's direction (L2).** The black links on the home cards, such as "Accounts Payable" and "AI Document Processing:", and the desktop "Accounting" and "Marketing" card headings are regular weight, keeping the orange hover. The two marketing card links that were navy are black like the rest. The orange tool links stay bold. A browser check of `/` at 390 and 1440 px finds no bold black or navy link.
  - **Reverted later on 2026-10-21, at the owner's direction.** Regular weight looked flat, and the dark shadow added in `4821ac1` smudged the black text on the grey cards, so `src/components/home/use-cases.tsx` is back to its `f818419` version: bold black card headings with no link shadow. Nothing else on the site changed.
  - **Card heading links set by the owner, 2026-10-21.** All 30 "AI X:" heading links on the home cards use the owner's classes: the link is `hover:text-[#C83803] text-[#000000] hover:underline`, and its `h5` is `text-black font-bold shadow-text`, `text-sm` in the phone copy and `text-base` in the desktop copy.
- **Fixes that needed no decision (`d6989dc`).** H8, H9, H10, M8, M10, L1 and L4 to L9 are fixed, and H1, H11, M5, M7, M14, L2 and L3 are partly fixed. Each finding below says what changed. The same work closes SA H2, H4b, M2, M3, M6 to M9, L1 to L4, L6, L8 and L9 in `plans/seo-audit-2026-10-20.md`, and moves SA M5 forward. Verified on a local build of all 448 sitemap pages.

**Vercel challenged the audit itself.** The parallel tracks sent bursts of requests from one IP. For roughly 10 to 30 minutes, Vercel's automatic DDoS mitigation answered every request from this machine with `403 Vercel Security Checkpoint` (`x-vercel-mitigated: challenge`), robots.txt included. Requests from other networks got 200 throughout. The project has no firewall configuration, so this is Vercel's platform default, not a site setting. At launch, check Vercel's Firewall traffic view to confirm verified search and AI crawlers are not being challenged.

## Scores

Each score comes from that skill's own formula. They are heuristics, not Google signals, and many criteria score zero only because the site is deliberately noindexed.

| Area | Score | Skill |
|---|---|---|
| SEO health (first audit) | 62 | searchfit seo-auditor (SA) |
| SEO health | 55 | seo |
| E-E-A-T | 35 ("Weak") | seo |
| Technical SEO | 63 | seo-technical |
| GEO technical, as it will stand at launch | 77 | geo-technical |
| Structured data | 56 | geo-schema |
| AI citability, mean of 17 sample pages | 43 | geo-citability |
| Content quality | 30 / 27 | geo-content / seo-content |
| GEO readiness | 44 | seo-geo |
| AI platform readiness, average | 27 | geo-platform-optimizer |
| AI crawler access | 95 | geo-crawlers (this formula ignores the noindex header) |
| Programmatic quality: tool pages / glossary | 66 / 33 | seo-programmatic |
| Local SEO | 32 | seo-local |
| Maps health | 34 | seo-maps |
| Brand authority | 5 ("Minimal") | geo-brand-mentions |
| Backlink health | Insufficient data | seo-backlinks |
| PageSpeed mobile performance | 58 to 95 | seo-google (PSI web UI) |
| PageSpeed desktop performance | 88 to 100 | seo-google (PSI web UI) |

**The overall picture.**
- **Strong:** the technical base. Every page is server-rendered, TLS grades A+, there are no broken links, CLS is 0, and the site is faster than every local competitor that was tested.
- **Weak:** trust and entity signals. No named person, no reviews, no directory listings, unsourced statistics, and scaled template copy with visible generation artifacts.
- **Missing:** the pages local AI searches reward, such as city service pages, About, Contact, comparison pages and case studies.

## Launch gate, additions to SA's list

These go on top of SA's launch steps.

1. **robots.txt, done.** `src/app/robots.ts` now serves `Disallow: /` until `ALLOW_INDEXING=true`, and `public/robots.txt` is deleted (SA H1). At launch it keeps Bytespider blocked (decision 11).
2. **Keep `geekatyourspot.vercel.app` noindexed after launch.** It serves the whole site with 200. It is noindexed today only because the `ALLOW_INDEXING` header covers every host, and setting the variable removes that header there too. Options:
   - a host-scoped `X-Robots-Tag: noindex` header in `next.config.ts`, outside the `ALLOW_INDEXING` branch;
   - removing the domain in Vercel.

   Either one avoids a redirect. The GitHub repo's homepage field also points at this host.
   - **Done on 2026-10-20 (`8d602e1`), with the header.** `next.config.ts` sends `X-Robots-Tag: noindex, nofollow` to any host ending in `.vercel.app`, outside the `ALLOW_INDEXING` branch, so `geekatyourspot.vercel.app` and every preview URL stay out of search after launch. The domain stays in Vercel. A launch-mode build (`ALLOW_INDEXING=true`) sends the header for `geekatyourspot.vercel.app` and a preview host, and not for `geekatyourspot.com` or `www.geekatyourspot.com`. The same note is in SA's launch gate.
3. **Keep security headers out of the `ALLOW_INDEXING` branch.** `next.config.ts` returns `[]` when the variable is `true`, so any header added to that list disappears at launch. The deployed site sends HSTS and no other security headers (no CSP, `X-Content-Type-Options`, `Referrer-Policy` or `Permissions-Policy`).
   - **Done on 2026-10-20 (`d6989dc`).** `next.config.ts` sends `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` and `Permissions-Policy: camera=(), microphone=(), geolocation=()` on every response, whether or not `ALLOW_INDEXING` is set. Only the `X-Robots-Tag` sits inside the branch. There is still no Content-Security-Policy, because GTM, the scheduler and Next's inline scripts would need nonces first.
   - **CSP and `X-Frame-Options` added on 2026-10-20 (`8d602e1`).** `next.config.ts` sends `X-Frame-Options: DENY` and a `Content-Security-Policy` on every response, before and after launch.
     - The policy allows inline scripts and styles, because a nonce would make every prerendered page render on request.
     - It limits scripts to the site, GTM and the Google tags GTM loads (GA4 and Google Ads), and sets `object-src 'none'`, `base-uri 'self'`, `form-action 'self'` and `frame-ancestors 'none'`. Tag Assistant and the Vercel toolbar are allowed.
     - A headless browser loaded 17 page types at 1440 and 390 px, opened the scheduler and picked a day. It logged no CSP violation and no page error. GA4 and Google Ads requests went through, and the scheduler showed time slots. GA4 sends to `analytics.google.com` itself, which `*.analytics.google.com` does not match, so the policy names it.
4. **Bing.** Verified in Bing Webmaster Tools on 2026-10-20 through `public/BingSiteAuth.xml`, which must stay in place because Bing re-checks it. At launch, submit `/sitemap.xml` in Bing Webmaster Tools and add an IndexNow key file.
   - **IndexNow key file added on 2026-10-20 (`d6989dc`).** `public/3789309429f71c68df37de9e3de0276e.txt` serves the key as plain text. Submitting the sitemap in Bing Webmaster Tools is still a launch step.
5. **GTM container, done.** Version 15 was published on 2026-10-20 (finding M6).

## Critical

### C1. Tax and legal pages state wrong figures

**Fixed on 2026-10-20.**
- Every figure below was corrected against the state agency sites.
- The nexus pillar now has a threshold table dated October 20, 2026, linking the Florida, Texas, New York and California agencies. The blog post has the same thresholds as a list.
- The same county payroll tax claim was also corrected on pages this finding did not list: the payroll pillar, Justworks, and seven more Rippling sections.
- Generic "$100,000 or 200 transactions" examples on the nexus tool pages were left as they are. They describe many states but not all of them.
- The raw tool and use-case exports in `content-writer-output` were not edited, because nothing renders them.

All of this is verified in the source.

- **Nexus thresholds.**
  - The pages say Texas triggers nexus at $100,000. Texas is actually $500,000, with no transaction count.
  - The pages give New York as "200 transactions". New York actually requires both $500,000 in sales and 100 transactions.
  - The errors appear in:
    - the Multi-State Sales Tax Nexus blog post in `content-writer-output/accounting/Multi-State Sales Tax Nexus/blog/`, which also says $500,000 elsewhere, so the post contradicts itself;
    - the nexus pillar's `mechanics-section.tsx:16`;
    - `src/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno/transforms-section.tsx:18`;
    - `.../zamp/challenges-section.tsx:26`.
- **A wrong legal claim.** The same blog post calls an unregistered sale "technically tax fraud". It is not.
- **Gusto and Rippling.**
  - Gusto's FAQ (`.../payroll-tax-worker-misclassification/gusto/faq-section.tsx:45`) credits the Department of Labor with workers' compensation rules. In Florida these come from the Division of Workers' Compensation, under the Department of Financial Services.
  - Gusto's pages promise filing of "local Florida taxes" or "local surtaxes": the FAQ, overview, comparing, implementing, data-mapping and how-it-works sections. So does Rippling's `configuring-section.tsx`. Florida has no local payroll tax.
- **Why it matters.** AI engines check claims like these against state agencies and Avalara before citing them. A page that disagrees with those sources, or with itself, gets dropped.
- **Fix.**
  - Correct each page.
  - Link the state sources.
  - Add a dated threshold table, for example: "Texas: more than $500,000 in the previous 12 months, no transaction count. New York: more than $500,000 and more than 100 transactions in the prior four sales tax quarters. Florida: more than $100,000 in taxable remote sales in the previous calendar year."

### C2. No page targets the core local search

- **What wins these searches.** For "AI consultant Miami", "AI consulting South Florida", "Fort Lauderdale" and "West Palm Beach", the results are city service pages and directory profiles. Examples: ActBold `/ai/miami`, SMB Advantage `/ai-consulting/west-palm-beach`, Clutch, DesignRush and GoodFirms.
- **What the site has.** The only candidate is the home page. Its body uses "consultant" or "consulting" zero times and never mentions Fort Lauderdale.
- **Distance.** The business address is in Delray Beach, about 45 to 50 miles from Miami, so map-pack proximity for Miami searches will be weak. An organic page is the lever.
- **Fix, your call.**
  - One AI consulting service page for South Florida.
  - At most three area pages (Miami-Dade, Broward, Palm Beach), each with genuinely local content: local industries, on-site versus remote, travel radius, and a visible FAQ.
  - Avoid CodeWCG's pattern of hundreds of templated city pages.
  - Link these pages from the footer.
- **Rechecked on 2026-10-20 against the consultancy-competitors crawl and `8ce8b28`, still open.** The details are CP2 in `plans/competitor-pages-audit-2026-10-20.md`, and the title recount is also in SA H2.
- **Area pages dropped, 2026-10-21, at the owner's direction.** Competitor city pages are templates: Zfort's Deerfield Beach page names Boca Raton in its text, and its Miami Beach page changes only the place names. The owner said: "find me a site I respect then will talk, till then delete 22". DataForSEO also shows no measurable volume for AI consulting terms that name a South Florida place (CG8). No area page is planned; the owner will reconsider when shown a site he respects (document 22 in `2f50078`). The same note is in `plans/seo-audit-2026-10-20.md`.
- **Service menu decided on 2026-10-20, postponed.** Comparing the site with competitors, the owner wants a service menu. The work is postponed (decision 3).
  - 25 of 58 crawled competitor sites have a page whose title or H1 names AI and a South Florida place.
  - Among the 58 crawled sites, the only AI page for Delray Beach is AI-Powered Consulting's, and that firm is based in Palm Beach Gardens. **Corrected by CA2:** deeper search results show eight sites with a Delray Beach AI page, seven of them in neither crawl. One, Pisano Designer, is based in Delray Beach.
  - Visionary Solutions Group, in Boca Raton, now has AI consulting pages for Miami, Fort Lauderdale and South Florida.
  - 0 of the 426 deployed titles name a South Florida place.
  - CP2 recommends the Delray Beach and Palm Beach County page as the first area page.
- **Rechecked on 2026-10-21 against `1e90759` and DataForSEO, still open.** The details are CG8 in `plans/content-gap-audit-2026-10-21.md`, and the same note is in SA H2.
  - Google Ads shows no measurable volume for 17 terms that pair an AI consultant, consultancy or agency with a South Florida place. The local demand is in "ai consultant near me" (720 a month in the US, 70 in Florida) and "ai automation near me" (480 and 140).
  - From Delray Beach, the map pack for "ai consultant delray beach" is OneWave AI, Accretive AI Consulting and Aslanian AI, and the Greater Delray Beach Chamber's listing for Aslanian AI ranks fifth. The business is in none of 32 local results.
  - The area page's value is in what the map pack rewards, so it works with the Business Profile (H7), reviews (C3) and listings, not on a city keyword. That supports the limit of three area pages.

### C3. There are no reviews anywhere

- **Evidence.**
  - The Google Business Profile has no rating.
  - BBB returns 0 results.
  - No Yelp, Clutch or Facebook reviews were found.
  - `/reviews` and `/testimonials` return 404.
- **Why it matters.** Reviews carry roughly a fifth of local pack weight, and AI local answers lean on review platforms.
- **Fix.**
  - Ask every client for a review using the GBP review link: `https://search.google.com/local/writereview?placeid=ChIJ0_NMl_5-Y24RH4XyLq8Pg3s`.
  - Never pre-screen who gets asked; Google and the FTC prohibit it.
  - Add Clutch reviews, because Clutch feeds AI answers.

## High

### H1. AI Marketing Systems has merged sentences and AI non-answers

This is verified, and it is the navbar target for Marketing.

- **Merged sentences.**
  - `src/components/use-cases/marketing/ai-marketing-systems/overview-section.tsx:22` reads "...face the uphill battle of In the bustling world of marketing...".
  - `:28` reads "...by automating repetitive Enter AI Marketing Systems, a game-changer...".
  - `introduction-section.tsx:17` reads "...by automating repetitive Many small businesses struggle...".
- **Non-answers.** The PAA answer at `faq-section.tsx:53` reads "The 3 3 3 rule in marketing is not a widely recognized concept and may refer to...". The 30% rule and 85%-of-AI-projects answers are unsourced.
- **Off-intent questions.** "Golden rule", "70 20 10 rule" and "top 5 marketing strategies".
- **Copied text.** Five paragraphs are copied word for word from the lead capture pillar.
- **Extent.** A site-wide scan found no other merged sentences.
- **Fix.** Repair the two paragraphs, delete the non-answer and off-intent questions (and their FAQPage entries), and replace the copied paragraphs.
- **Partly fixed on 2026-10-20 (`d6989dc`).**
  - The three merged sentences are repaired. `overview-section.tsx` now reads "...small businesses are often caught in a whirlwind of tasks: endless spreadsheets..." and "Enter AI Marketing Systems, a game-changer...", and the fragment in `introduction-section.tsx` is gone.
  - The "3 3 3 rule", "golden rule", "top 5 marketing strategies" and "70 20 10 rule" questions are deleted, leaving 8. The pillar never had a FAQPage node, so no markup changed.
  - Still open: the five paragraphs copied from the lead capture pillar, and the unsourced 30% and 85% figures (H3). Both need new copy.

### H2. Tool pages contradict themselves and leak pipeline wording

**Fixed on 2026-10-20.**
- **Jasper.** The sentence saying no public API and the sentence about a "closed extension model" are deleted. The "partner data" pricing sentence now gives the price as of that date, with a link to Jasper's pricing page. The FAQ price, and its FAQPage entry, are dated too.
- **Mailchimp.** The pillar's "Mailchimp doesn't support custom code development" clause is deleted, so it no longer contradicts the tool page.
- **Leaked pipeline wording.** Six pricing sentences said "partner data" or "the research". Floatapp and Jasper are listed in this finding; Hootsuite, Apollo, Factors and Tipalti were not. Each sentence now states the vendor's published price as of October 20, 2026, with a link to the vendor's pricing page.
- **Extent.** A scan of every tool page found no other page that both denies and claims API access.

- **Jasper.**
  - `jasper/evaluating-section.tsx:32` says "Pricing for Jasper is not published in the partner data", while the page's FAQ gives $69 a month.
  - `configuring-section.tsx:58` says Jasper has no public API, while its FAQ says the Business plan includes API access. Jasper does publish an API.
- **"Partner data" elsewhere.** The wording also appears in `floatapp/evaluating-section.tsx:19`.
- **Mailchimp.** The Mailchimp tool page and the AI Marketing Systems pillar disagree on whether Mailchimp supports API work.
- **Why the wrong version wins.** Because both breakpoint copies carry the wrong sentences and the correct FAQ sits at the end, a retrieval system gets two wrong chunks for every right one.
- **Fix.** Delete the contradicting and "partner data" sentences, and state prices with an "as of" date.

### H3. Statistics are unsourced, and some are circular

- **Circular statistics.**
  - The home badges "40% Cost Reduction / 3x Productivity" (`src/components/home/clone-yourself.tsx:25-27`) have no source.
  - The content generation pillar calls them "real numbers from the operator's own published figures", and at least six pages repeat the 40%.
- **Invented scenarios.** 56 sentences on 30 pages rest on them, for example "could hypothetically see a reduction... by up to 30%".
- **Missing source links.**
  - Only 26 to 27 of 432 pages link any outside source: 0 of 23 pillars, about 3 of 32 posts and 23 of 90 tool pages.
  - Some sources are named but not linked, for example "as reported in Software Comparison".
- **Stale and first-person examples.** "Gartner predicts that by 2025..." is now out of date. Glossary examples are written as first-person results, for example `src/data/glossary/terms.ts:26`, "increasing our conversion rate by 15%".
- **Fix.**
  - Remove the badges, or replace them with measured client results.
  - Link every figure to its primary source, with an "as of" date.
  - Rewrite the glossary examples as hypothetical ones.
- **Glossary part fixed on 2026-10-20 (`25926fb`).** The H5 rewrite removed all 35 glossary examples, so none speaks in the first person. The badges, the Gartner line and the missing source links are still open.
- **Badges decided on 2026-10-20: they stay.** The owner ruled out removing "40% Cost Reduction" and "3x Productivity". Whether each gets a cited source is still open. McKinsey's generative AI report (June 2023) puts the productivity gain in customer care at 30 to 45 percent of current function costs, which can source a 40% figure worded for that function. No McKinsey figure supports "3x".
- **Badges sourced on 2026-10-22 (`bb97f4f`), at the owner's direction.** Each of the three badges, in both breakpoint copies, opens a source note on hover or tap, in the owner's wording with each named source linked: IBM's AskHR case study and Nextiva's Tata Play story for 40%, Solnix Media for 3x, and viaSocket for 24/7. The same note is in the page as the badge's hidden description, so crawlers read it. All three sources are vendor-reported, and "zero downtime" in the 24/7 note has no source on viaSocket's site. Document 33 in `plans/audit-input-2026-10-21/` has the quotes and the checks. The pillar's "operator's own published figures" sentence, the Gartner line and the missing source links are still open.
- **Figure list built on 2026-10-22.** Document 34 in `plans/audit-input-2026-10-21/` now lists every figure on the site with an ID, from a headless crawl of all 447 sitemap URLs on a local build at `bb97f4f`: 618 figures on 107 pages, 35 of them in a paragraph that links a source. 22 are the invented scenarios of document 35. The owner's content writer now runs under a mandatory citation rule, and each row waits on a source, a removal or a rewording.
- **Gartner line found on 2026-10-22.** The crawl found "a report by Gartner predicts that by 2025, 50% of businesses..." live on `/blog/accounting/unlocking-the-secrets-to-effective-cash-flow-forecasting-with-ai`, rendered at the time from `backup/accounting/cash-flow-forecasting/blog/unlocking-the-secrets-to-effective-cash-flow-forecasting-with-ai.html`. The blog route was serving archived exports from `backup/`, which the 2026-10-21 recheck did not search; at the owner's direction on 2026-10-22, `backup/` stopped being a page source and the 11 posts it served moved into `content-writer-output/`, so the body is now `content-writer-output/accounting/cash-flow-forecasting/blog/unlocking-the-secrets-to-effective-cash-flow-forecasting-with-ai.html` and the page is unchanged. Document 36 is corrected and waits on the owner.

### H4. Nobody is behind the business, and no sentence says what it is

- **No person.** There is no named person anywhere: on a page, in a byline or in schema. Blog authors are 17 "Editorial Team" Person nodes.
- **Hidden experience claim.** "40 years of engineering expertise" exists only in the home meta description.
- **No defining sentence.**
  - The home body never names the business.
  - 31 pages use the third-person boilerplate "...as an AI implementation consultancy, plays a crucial role... they".
- **Missing pages.** `/about` and `/contact` return 404. There is no email address on the site, and booking works only with JavaScript.
- **Contact page added, 2026-10-21, at the owner's direction (SA M4).** `/contact` ("Contact Jeff Martin") has the address, phone, office hours and map link under "Call or Visit", a message form under "Send a Message", and the scheduler, with a `ContactPage` node. The form sends through `src/lib/actions/submit-contact.ts`, which now fails closed: with `RESEND_API_KEY`, `NEXT_PUBLIC_FROM_EMAIL` or `CONTACT_TO_EMAIL` unset, nothing is sent and the visitor is asked to call. The last two are not set in Vercel yet, so the form does not deliver until the owner sets them. At the owner's direction the footer no longer shows the address and phone; it links to Contact under Resources. `/llms.txt` lists the page. The same note is under M4 in `plans/seo-audit-2026-10-20.md`.
- **Contact page deleted, later on 2026-10-21, at the owner's direction.** The business address is the owner's home, behind a gated entry, so there is no contact page and none is planned: the footer phone and the scheduler are how visitors reach the business. `/contact` returns 404, the footer shows the address and phone again, and `/llms.txt` no longer lists the page. The page is in `bc7a0c7`.
- **Email address added, 2026-10-21, at the owner's direction.** The footer's Contact column shows `contact@geekatyourspot.com` as a mailto link under the phone, on every page and in both breakpoint copies. The structured data does not carry it yet (document 26 in `4821ac1`). **Carried since 2026-10-22 (`0b74560`):** the business node's `email` is the same address.
- **Footer Contact column removed, 2026-10-23 (`b9dc3a1`), at the owner's direction.** At the owner's direction ("delete address and contact details from footer"), the footer no longer shows the Contact heading, the street address, the phone or the email, in either breakpoint copy; the desktop hub columns take the width the column held (`col-span-9`). The address, phone and email stay in the business node on every page, so the site still matches the Business Profile, and the privacy policy and terms pages still show the address and the email. The scheduler is the visible contact route. Verified on a local build in headless Chromium at 1366 and 390: the footer text on the home, About, a blog and a tool page carries none of them, and the home page's JSON-LD still carries the address, phone, email and the BBB profile. The same note is under M4, M5 and M6 in `plans/seo-audit-2026-10-20.md`, and CA12 in `plans/competitor-audit-2026-10-20.md`.
- **What competitors do.** Every local competitor names a founder with Person schema, shows testimonials, or shows case results.
- **Fix.**
  - One visible sentence on the home page, in both breakpoint copies, saying who the business is, where it is and what it does.
  - An About page with the founder.
  - A Contact page.
  - A Person entity linked from the Organization.

  The structured data track drafted a founder template with every unknown value left `null`.
- **Rechecked on 2026-10-20 against `62169bd`, still open.** No H4 fix has been made. The same gap is SA M4 in `plans/seo-audit-2026-10-20.md`.
  - The home page still names the business only in its footer copyright, and "40 years of engineering expertise" is still only in its meta description.
  - `/about` and `/contact` still return 404, and there is still no email address on the site.
  - Blog authors are now 11 "Editorial Team" Person nodes and 13 Organization nodes, down from 17 and 14. The seven posts deleted under SA H6 (`5f8619d`) carried the other 6 Person nodes and 1 Organization node.
  - The files that carry the third-person boilerplate are the same ones as at the audit commit. A recount of visible page text finds "AI implementation consultancy" on 17 pages, against the 31 counted above. The site did not change, so the difference is in how the two counts matched the phrase.
- **About page added on 2026-10-20 (`f914eee`), partly fixed.** The same change is SA M4 in `plans/seo-audit-2026-10-20.md`.
  - `/about` names Jeff Martin as founder and CEO of Geek @ Your Spot LLC in Delray Beach, Florida, with his background and a timeline from 1982. "40 years of engineering expertise" is now visible copy there, not only the home meta description.
  - It emits an `AboutPage` node and a `Person` node (`https://geekatyourspot.com/about#jeff-martin`) whose `worksFor` points at `#organization`. The footer's Resources list links it, and the sitemap lists it. The navbar's top row links it too (`09f3a2b`). The navbar builds its links only when the menu opens, so the footer link is the one crawlers see.
  - Still open: the Organization node does not yet name the Person as `founder`, the home page still has no defining sentence, `/contact` still returns 404, there is no email address, and blog authors are still the Editorial Team.
- **Founder linked on 2026-10-20 (`d6989dc`), still partly open.** The site-wide Organization node now names `founder` as `https://geekatyourspot.com/about#jeff-martin` (SA M5). The home page's defining sentence, `/contact`, an email address and the blog authors are still open.
- **Blog authors credited on 2026-10-20 (`f961b5e`), still partly open.** At the owner's direction, the 24 exported blog posts and the hand-coded lead scoring post name Jeff Martin as `author`, the `Person` node `https://geekatyourspot.com/about#jeff-martin`. They replace 11 "Editorial Team" `Person` nodes, 13 "Editorial Team" Organization nodes and the Organization on the lead scoring post. The 113 pages that set the meta author "Development Team" now set "Jeff Martin" (L10). The same change is SA M4. The home page's defining sentence, `/contact` and an email address are still open.

### H5. Made-up people read as real case studies

- **Unlabelled personas.** "Lisa Anderson, the owner of a boutique marketing agency in Miami" (`bill/overview-section.tsx:8`), "Maria Sanchez", "Lisa" and "Jane" appear with no "hypothetical" label at first mention.
- **How common.** 40 pages open with "Picture" or "Imagine", 99 sections open with a scene instead of an answer, and only 30 pages say "hypothetical" anywhere.
- **Fix.** Label each persona in its first sentence, or replace it with an anonymized real result. Put the answer before the story.
- **Personas framed as examples on 2026-10-20 (`3879807`).** Every named persona on the site is now introduced as an example in the sentence that first names it, on 10 pages: Maria Sanchez (Bill accounts receivable), Maria (Float, and the spreadsheet data pillar), Lisa Anderson (Bill approval workflows), Lisa (AvidXchange, Melio, and the payment execution pillar), Jane (the approval workflows pillar), Emma (TaxJar) and Sarah (the data entry pillar).
  - The opening sentence now starts with "Take the example of", as in "Take the example of Jane, the owner of a small but growing business in West Palm Beach", or with "Consider" and an "owner like" phrase, as in "Consider a local boutique owner like Emma". There is no label or disclaimer. The location and the persona's line of work are kept, and the paragraph is shared by both breakpoint blocks, so the mobile and desktop copies both carry it.
  - "Morgan" on the Rytr page is a real client from Rytr's own published case study, so it is unchanged.
  - Still open: the scene-first openings. 40 pages open with "Picture" or "Imagine", and 99 sections open with a scene instead of an answer.

### H6. Scaled template content shows

- **Volume.** 90 tool pages share one H2 skeleton:
  - "Architecture" appears on 68 of them;
  - "Fit and Pricing" on 64;
  - "What it costs to keep doing it by hand" on 44.
- **An unfilled template slot.** Bill's H2 reads "The Cost of Manual Automated Approval Workflows".
- **Stock AI wording.** "Seamless" appears 458 times, "landscape" 98, "revolutioniz..." 46 and "game-changer" 39. 133 of 158 non-glossary pages carry at least one.
- **Readability.** Estimated Flesch scores are 11 to 33 on these pages, against 62 to 66 on `/methodology`.
- **Why it matters.** These match Google's markers for low-value scaled content.
- **Fix.** Edit pillars and tool pages in the voice of `/methodology`, and cut each tool page to what a buyer needs.

### H7. The business barely exists off the site

- **Google Business Profile.** It exists and you manage it, but it has:
  - no reviews (C3);
  - the generic primary category "Consultant";
  - no photos, logo or cover;
    - **Done by the owner on 2026-10-22.** The photos and the logo are on the profile; document 48 is deleted. The same note is SA M5.
  - a description that names HR and Operations work the site no longer covers, omits Miami-Dade, and has a missing space ("first.Led").

  Its map pin sits in inland Collier County, which suggests the service area is wider than the three counties.
- **Not found:**
  - Bing Places;
  - BBB;
  - the Greater Delray Beach Chamber directory;
  - OpenStreetMap;
  - Wikipedia and Wikidata;
  - YouTube, X and TikTok;
  - Clutch, DesignRush, GoodFirms, UpCity and TechBehemoths.
- **Thin.** LinkedIn has 15 followers, no posts since 09-11, and specialties from an older positioning. Facebook shows no public activity.
- **Common Crawl.** It holds zero pages from the site across 14 crawls.
- **Old search results.** Search engines still hold old `www` URLs from the pre-2026 site (HR bots, WordPress, `info@geekatyourspot.com`), and AI summaries describe the business from them. They will drop out as 404s on recrawl, so no redirect is needed.
- **Fix, all before launch.**
  - Claim Bing Places by importing from the GBP, and Apple Business Connect.
  - Create Clutch, DesignRush, GoodFirms, UpCity and TechBehemoths profiles with one name and one NAP. Since 2026-10-20 that name is "Geek @ Your Spot LLC" (M5).
  - Refresh the GBP category, photos and description.
  - Claim the brand handles.
  - Add each profile to `sameAs`.
- **Rechecked on 2026-10-20 from the public Maps data, partly changed.** The details are CA11 and CA3 in `plans/competitor-audit-2026-10-20.md`, and the GBP name is also in SA M5.
  - The primary category is now "Automation company", not "Consultant", and the pin is in Delray Beach, not Collier County.
  - The additional categories include "Software company" and "Website designer", which the business does not sell.
  - The description no longer names HR or Operations, but it still omits Miami-Dade and lists a "Sales" department.
  - The GBP name is "Geek @ Your Spot", without "LLC".
  - A directory search found the site on none of BBB, Yelp, Clutch, DesignRush or GoodFirms. Photos were not rechecked.
- **Rechecked on 2026-10-23, partly done (`51e3aad`).** The owner renamed the profile and created the BBB, Yelp, Clutch and GoodFirms listings (documents 47 and 52).
  - **The GBP name.** The public Maps page for the place ID reads "Geek @ Your Spot LLC", the site's `name`, with the address, phone, hours and site domain matching. The limited public view shows only the primary category, "Automation company", so the other categories and the description are not rechecked.
  - **BBB, verified and in `sameAs`.** `https://www.bbb.org/us/fl/delray-beach/profile/automation-consultants/geek-your-spot-llc-0633-92089707` returns 200 and reads "Geek @ Your Spot LLC", 2025 NW 18th St, Delray Beach, FL 33445-1400, (561) 526-3512, category Automation Consultants, "Mr. Jeff Martin, Founder", file opened 10/21/2026, "Business Incorporated: 8/28/2026", LLC, not rated and not accredited. Two fields on the profile are empty and are the owner's to fill: the website (the profile shows no link to geekatyourspot.com) and "Business Started", which BBB uses for its "Years in Business" line.
  - **Yelp, Clutch and GoodFirms, created but not reachable.** Yelp returns 403 to every request, profile or search, from a headless browser, and no search engine has the profile yet. Clutch has the profile in none of its 46 profile sitemaps (24 MB, fetched 2026-10-23), and the likely addresses return 404 or 410; Clutch publishes a profile after its own review. GoodFirms meets every profile address with a Cloudflare challenge, and `goodfirms.co/company/geek-your-spot` redirects to its home page. Each of the three goes into `sameAs` once its address returns 200 with the site's name, address and phone.
  - **The legal record.** The Florida register (Sunbiz L26000455335) lists GEEK @ YOUR SPOT LLC, filed 2026-08-28, active, at 2025 NW 18th Street, Delray Beach, FL 33445, with Jeffrey A Martin as registered agent and manager, so the legal name and the address match the node (M5).
  - Still open: DesignRush, UpCity, TechBehemoths, Bing Places, Apple Business Connect and the Chamber (CA15). The same note is SA M5 and CA3 in `plans/competitor-audit-2026-10-20.md`.

### H8. Two blog posts have broken structured data

Both are verified.

- **Automated Content Generation post.** The JSON-LD in `backup/marketing/Automated Content Generation/blog/automated-content-generation-transforming-small-business-marketing.html` has no `@context`, so parsers read nothing from it.
- **AI Content Repurposing post.** `backup/marketing/AI Content Repurposing/blog/ai-content-repurposing.html:87-94` mixes `@graph` with node keys at the root. That creates an empty BlogPosting wrapping a TechArticle with a different `wordCount`.
- **Why nothing caught them.** The blog route inserts these blocks unchecked (`src/lib/content-writer-disabled2/content-disabled.ts:130-133`, `src/app/(site)/blog/[department]/[...slug]/page.tsx:66-69`).
- **This corrects SA.** SA's "JSON is valid on every page" is true only as JSON, not as JSON-LD.
- **Fix.** Repair both blocks. The structured data track's drafts 06 and 07 are corrected versions.
- **Fixed on 2026-10-20 (`d6989dc`).**
  - The AI Content Repurposing post's JSON-LD is one `BlogPosting` with `@context`, the word count of the visible post (2,315), the publisher pointing at `#organization`, `about` pointing at the Intelligent Content Generation pillar's Service node, and the tools as `mentions`.
  - The Automated Content Generation post was deleted under SA H6 (`5f8619d`), so its block no longer renders.

### H9. The structured data describes products and services inconsistently

- **Products.**
  - 321 SoftwareApplication nodes describe 101 products. None has `sameAs` or the vendor's `url`, and 178 have no `@id`.
  - Bill alone has 16 nodes with 6 different `@id`s, and 13 `@id`s carry conflicting names or descriptions across pages.
  - 192 descriptions repeat the site's South Florida pitch instead of describing the software.
- **Services.** The 23 pillars are typed only as Article, with no Service, provider or area served.
- **Organization.** It is described in full only on `/`.
- **Fix.**
  - One site-wide `@id` per product, carrying the vendor `url` and `sameAs`.
  - A Service node on each pillar.
  - The Organization node site-wide.

  Drafts 01, 02, 04 and 05 show each pattern, and file 10 maps all 101 products.
- **Fixed on 2026-10-20 (`d6989dc`).** The same change is SA H4b and M5.
  - **Products.** No SoftwareApplication node is left. Every product reference uses one site-wide id, `https://geekatyourspot.com/#software-<slug>`, typed `Thing`, with the name and the vendor's own URL and no description, so the South Florida pitch no longer describes the software. Bill is one entity on every page. The nodes have no `sameAs`.
  - **Services.** Each of the 23 pillars carries a `Service` node (`<pillar url>#service`) with the business as provider and the South Florida area served, and the pillar's Article is `about` it.
  - **Organization.** One Organization and LocalBusiness node is printed on every page from `src/lib/seo/organization.ts`, and every publisher references it.
- **Changed on 2026-10-21, at the owner's direction (`cccde1c`).** The site uses no `#` URLs (document 53, deleted by the owner on 2026-10-22). The same change is SA H4b, L8 and M4.
  - **Services.** The 23 pillar Service nodes are deleted, along with the Articles' `about` pointers to them. The owner said "NIX" and "I will have a Service Menu Item(s)", so the services section will describe the services.
  - **Products.** No node has an `@id` now. Each `mentions` entry and each tool page's `about` carries the product's name and vendor URL in place, so a product is the same name and URL on every page instead of one shared id.
  - **Organization.** It's still printed in full on every page, without an `@id`. Every publisher, author and provider names it by its name and `https://geekatyourspot.com`.
- **Scheduler links restored on 2026-10-22 (`929be59`), at the owner's direction.** At the owner's direction, the scheduler links are `href="#consultationAppointment2xl"` anchors again: 108 links in 102 component files, the blog renderer's link and the 14 exported posts that `cccde1c` had turned into buttons. The export loader keeps that one `#` anchor, which returns the link to 104 more exported posts that had lost it silently, because the loader had been unwrapping every `#` link. The anchor is the owner's one legitimate `#` ("I use the # anchor for the scheduler, not some random bs"): a real section on every page, and the address an outside listing such as Clutch or the Business Profile sends a visitor to, `https://geekatyourspot.com/#consultationAppointment2xl` (the apex host; www redirects to it and the browser carries the fragment through). Every link id is unchanged, so GTM's "Just Links" trigger fires for them again. The structured data is unchanged: no `@id` has a `#`. Verified on a local build: the FAQ check passes, and headless Chromium lands on the loaded calendar from a hero click, a tool-page link, a blog link and the `/about` fragment. **Plain anchors on 2026-10-23 (`64dbd8c`).** The owner reported "it no longer fills the screen or viewport": the restored links were next/link `Link`s, which do nothing when the address already carries the hash, so a second press, or a press after landing on the fragment, left the page where it was. The links are plain `<a>` now, and the section has `overflow-anchor: none`, because Chrome's scroll anchoring moved the page 85px on blog pages while the calendar loaded. Verified on a local build in headless Chromium: first press, second press with the hash set, blog and tool page links, the fragment landing and the phone all hold the section at the top with the calendar loaded. The same note is SA H4b.

- **Structured data hardened on 2026-10-22 (`0aab340`), at the owner's direction.** The same note is SA M5.
  - **Blog exports.** The loader in `src/lib/content-writer/content.ts` (the owner restored the folder's name; the files are `content.ts` and `article-sections.ts`) now parses each export's `ld+json` block into an object, and the blog route prints it through `safeJsonLd` like every hand-written node. A block that is not JSON prints nothing. Before, the string was cut out with a regular expression and printed as it was.
  - **Home page.** It serialises through `safeJsonLd` too; it was the last page using `JSON.stringify`.
  - **Business node.** `geo` is the Business Profile pin, 26.48314, -80.09532, as `GeoCoordinates` (CA13).
  - **Dead files.** The five `.html` files under `src/components/tools/marketing/ai-content-creation-workflow/` that carried their own `ld+json` and that nothing imported are deleted.
  - **A check.** `scripts/check-faq-schema.ts` reads every prerendered page after `next build`, parses each `ld+json` block, and fails when a FAQPage question is not in the page's visible text or a block is not JSON, the mismatch H10 found by hand. `npm run build` runs it: 428 pages, 82 with FAQPage, 852 questions, 0 findings.
  - **Email in the markup, 2026-10-22 (`0b74560`).** The business node carries `email`, `contact@geekatyourspot.com`, the address the owner decided on 2026-10-21 and the footer already showed. The earlier line here calling it open was wrong: the decision was made, only the node was missing.

### H10. The approval workflows pillar's FAQ is about data entry

This is verified.

- **Wrong topic.** All 13 questions in `src/components/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/paa-section.tsx` ask about invoice data entry and extraction, and they are also marked up as FAQPage.
- **Misleading answer.** One says "our solution integrates seamlessly with QuickBooks, Xero, and Sage", although the business sells no product of its own.
- **Missing definition.** The pillar never defines an approval workflow, while the Data Entry pillar has no FAQ at all.
- **Fix.** Move the set to the Data Entry pillar, and give the approval pillar approval-routing questions plus an opening definition.
- **Fixed on 2026-10-20 (`d6989dc`).**
  - The 13 data entry questions moved to a new `paa-section.tsx` on the Data Entry pillar, which renders them above the scheduler.
  - Two answers were corrected on the way. The misleading one now reads "Dext and Bill both sync with QuickBooks, Xero, and Sage. Which connections a tool offers varies, so we confirm the connector for your accounting system before setup."
  - The approval pillar has 9 new questions about approval routing.
  - Each pillar builds its FAQPage from the same array its section renders, so the markup and the visible questions cannot drift apart.
  - The approval pillar's opening now defines the term: "An invoice approval workflow is the set of rules that sends each invoice to the right people for sign-off before it is paid."

### H11. Internal links point away from the business

- **Where body links go.** Of 5,475 body links, 66% point at glossary terms, 24% at vendor tool pages, 8% at use cases and 2% at posts.
- **Missing hub-and-spoke links.** 15 mandatory links are missing (full list in the architecture plan, section 1.3). Examples:
  - the cash flow hub does not link the spreadsheet or resource planning pillars;
  - the tax hub does not link the nexus or payroll pillars;
  - no accounting category hub links up to `/use-cases/accounting`.
- **Isolated pages.** 28 of 32 posts link to no other post, and no tool page links to any hub.
- **Dead-end glossary.** 218 of the 274 glossary terms are reachable only through `/glossary?letter=B` to `?letter=Z`, which are not in `src/app/sitemap.ts` (verified). Term pages themselves link nowhere but home, the glossary and the legal pages.
- **Fix.**
  - Add the missing hub links.
  - Add breadcrumbs.
  - Link each glossary term only on its first mention (SA M9).
  - Add "related terms" and "where this applies" links on term pages.
  - Add the letter pages to the sitemap.
- **Partly fixed on 2026-10-20 (`d6989dc`).**
  - **Hub links.** All 15 missing mandatory links from the architecture plan now render in page bodies. The accounts payable, cash flow and tax hubs link their missing pillars and `/use-cases/accounting`; the payroll pillar links the tax hub; AI Marketing Systems and the lead capture hub link each other; AI Marketing Systems, Intelligent Content Planning and SEO Blog and Article Generation link the content creation hub, which links Intelligent Content Planning.
  - **Glossary.** The 22 letter pages are in the sitemap, each term is linked only at its first mention (SA M9), and each term page ends with up to six related terms: terms its own text names first, then terms whose text names it.
  - **Still open:** breadcrumbs (M14, SA L5), "where this applies" links on term pages, links between posts, and links from tool pages up to their hubs.
  - **Tool page links rechecked on 2026-10-20 against the local build.** Every page's footer links `/tools`, `/tools/accounting` and `/tools/marketing` (SA C1), so crawlers reach the tool hubs from every tool page. In the page body, none of the 90 tool pages links to a tools hub, and 85 link to their use-case pillar. The other five are flat pages under `/tools/marketing`: Zapier, Pipedrive, ActiveCampaign, 6sense and ContentStudio. They link to no pillar, and four of them are also missing from the `/tools` grid (L11).
  - **New cluster, 2026-10-24 (`1316638`).** The Budget Ad Copy & Message Validation pillar, its six tool pages and its blog post, laid out at the owner's direction under `ad-spend-optimization`, link each other at first mention: every tool page links the pillar, the pillar links each tool and the post, the post links the pillar and the tools, and the pillar and the post link the other site tools they name (Great Expectations, Anomalo, Qualytics and Factors). The home card item the owner named, "Budget Local Ad Spending (Under $500/Month)", links the pillar, and its tools line lists the six. The writer's vendor citations stay as outbound links in the ground's colour. SA records the same change in "Changes made after the audit ran".
  - **Second cluster, 2026-10-25 (`1cd15f5`).** The Measured Lead Generation pillar, its four tool pages (Madgicx, Marpipe, Optmyzr, Wrench) and its blog post, laid out at the owner's direction under the same `ad-spend-optimization` segment, link each other at first mention the same way: every tool page links the pillar, the pillar links each tool and the post, the post links the pillar and the tools, and the pillar and the post link the Performance Max page from the first cluster, which the writer had named "Business". The owner ruled that it is stated as Performance Max, so that page's title, H1, navbar and home card labels and the two mentions nodes that named it drop the Google prefix; its route and prose stay. The home card item links the pillar and its Top tools line lists the five. Verified on a local build: 494 pages, 96 with FAQPage, 1073 questions, 0 findings; a headless render at 1366 and 390 shows ground-matched link colours and no overflow on all seven pages.
  - **Third cluster, 2026-10-26 (`405d589`).** The Personalized Email Campaigns pillar, its four tool pages (GetResponse, Mailchimp, MailerLite, Moosend) and its blog post, laid out at the owner's direction and filed under the writer's `marketing-automation-platforms` segment (first under `content-creation-workflow`, moved in `a111a77` when the owner confirmed the writer's segment: "The MAP is correct"), link each other at first mention the same way: every tool page links the pillar, the pillar links each tool and the post, and the post links the pillar and the tools. The existing ActiveCampaign page is kept and linked wherever it is named, since the export carries no write-up for it; the flat Mailchimp page is deleted and the two pages that linked it now link the new write-up. The home card item links the pillar and its Top tools line lists the five pages, and the category page's first mention links the pillar as its lede does for the sibling pillars. Verified on a local build: 523 pages, 102 with FAQPage, 1139 questions, 0 findings; a headless render at 1366 and 390 showed balanced blocks, heading weights, link colours per ground, no overflow and the scheduler on each page. In `fc7865f` the cluster gained deliberate cross-links at the owner's direction ("use some real thought"): the pillar's right-fit section points at the post for the vendors' evidence and its limits, the post's right-fit section names the five tool pages for the business each suits and points at the pillar for the assessment, and each tool page's right-fit section points at the post in its own terms; the pillar's one-line pointer in the lede is gone. The same commit regroups the home card (Marketing Automation Platforms (MAP) absorbs the content items and Lead Enrichment, a new AI Operations card holds the receptionist and chatbot) and relabels the navbar's Content Creation Workflow categories Marketing Automation Platforms (MAP). In `e1e0d5e` the category page those labels point at, `/use-cases/marketing/ai-content-marketing-platforms`, is rewritten as the Marketing Automation Platforms (MAP) page at the owner's direction ("I meant re-write specifically for with the right title talking about the correct tools"): the route is unchanged, the title and H1 read AI Marketing Automation Platforms, and the seven Content Creation Workflow sections are replaced by eight hand-coded sections that define the platform, set the four jobs on one set of contact records in the order to adopt them, and give one section each to AI Content Planning, the AI SEO Content Generator, AI Personalized Email Campaigns and AI Lead Enrichment & Predictive Scoring, each linking its pillar at first mention and every tool page it names (twenty-four tool pages and the vendor-claims post in all), then a choosing section ending in the booking questions and a six-question People Also Ask; the Article data lists the four pillars as hasPart. The page left the use case menu in `fc7865f`, so `/llms.txt`, which is built from the menus, no longer lists it. Verified on a local build: 523 pages, 103 with FAQPage, 1145 questions, 0 findings; a headless render at 1366 and 390 showed the new title and H1, eight section H2s, forty-three links in the colour each ground calls for, one FAQPage, one BreadcrumbList and no overflow.

### H12. There are no comparison pages

- **The searches.** "Best accounts payable software for small business", "best AI receptionist" and "Bill vs Melio" are won by comparison lists and G2 or Capterra.
- **What the site has.** Nothing of that type. The only `<table>` on any page is the booking calendar.
- **Demand.** Public autocomplete shows real tool-versus-tool searches for pairs the site already reviews:
  - bill.com vs melio, bill.com vs ramp;
  - stampli vs bill.com;
  - taxjar vs taxcloud;
  - gusto vs rippling;
  - tidio vs manychat;
  - writesonic vs jasper;
  - leadfeeder vs snitcher.
- **Your edge.** No local competitor has tool-level reviews, so this is the one area where the site has something they cannot match.
- **Fix, your call.**
  - A comparison page for each tool group, at the group paths that return 404 today, such as `/tools/accounting/accounts-payable/automated-approval-workflows`.
  - Start with Bill vs Melio, TaxJar vs TaxCloud and Gusto vs Rippling.
  - Do not build agency-versus-agency pages.
- **Rechecked on 2026-10-20 against the consultancy-competitors crawl and `8ce8b28`, still open.** The details are CP1, CP5 and CP7 in `plans/competitor-pages-audit-2026-10-20.md`.
  - "Your edge" holds across all 58 crawled competitor sites. None compares any pair above, and none names Bill, Melio, Gusto, Rippling, TaxJar, TaxCloud, Dext or Stampli on any page.
  - 41 of the 77 grouped tool pages already have a comparison H2, so the group pages can summarize and link to existing content.
  - The 15 group paths still return 404.
  - The rating schema the comparison skill suggests is not usable here (CP5).

## Medium

- **M1. Answers come last, and openings are slogans.**
  - 44 of 158 pages open with "Revolutionize", "Discover how" or "Explore", and only 9 open with a definition.
  - Blocks run 364 to 642 words under each heading.
  - The FAQ, which is the most citable part, sits at about 95% of the page text.
  - Fix: open each pillar and tool page with a 40 to 60 word answer (what it is, who it suits, the cost, where), and put a short "key facts" block near the top in both copies.
- **M2. No content tables.** Build tables for:
  - tool pricing per pillar;
  - state nexus thresholds;
  - the lead scoring model;
  - receptionist pricing models.
  - **Receptionist pricing table struck on 2026-10-22, at the owner's direction.** The intelligent receptionist pillar carries one price, Voksha's flat $1 for each extra call, and one paragraph on billing models, so there is nothing to tabulate. Document 40 keeps the pillar price table and the lead scoring table only.
- **M3. No visible dates.**
  - None of the 90 tool pages shows a date, yet 42 quote prices. Bill's "$49 per user per month" has no date and no link.
  - Pillars have dates in JSON-LD only.
  - The hand-coded lead scoring post, the pattern every new post copies, has no date, byline or `article:published_time`.
  - Fix: show "Prices checked <date>" with a matching `dateModified`.
- **M4. The service area is inconsistent.**
  - The scheduler sentence on 428 pages says "serving small businesses in Broward and Palm Beach" (`src/components/shared/scheduler/scheduler-shell.tsx:147-148`, verified) and leaves out Miami-Dade.
  - The GBP description says the same, while the schema and about 60 pages include Miami-Dade.
  - Fix: use one service-area sentence everywhere.
  - **Fixed on the site on 2026-10-20 (`f961b5e`).** At the owner's direction, the service-area wording names Miami-Dade.
    - The scheduler sentence reads "South Florida technology consultancy serving small businesses in Miami-Dade, Broward, and Palm Beach." on 445 of 447 pages.
    - 33 more files change in 54 places, counting both breakpoint copies, to the "Miami-Dade, Broward, and (West) Palm Beach" form the other pages already use: the marketing department page's description in its metadata, Open Graph, Twitter and JSON-LD; the ledes of the content creation workflow, ad spend, SEO blog and payroll pillars; 14 tool pages; seven `src/data/tools` entries with the same copy; two blog posts; and two unrendered export copies under `src/components/tools`.
    - Left as written, because they do not state the service area: examples set in one place (a Broward retailer, a West Palm Beach HVAC team), the contractor moving from Broward to Palm Beach, the payroll persona with two workers who live in Broward, the Writesonic line quoting what agencies in Broward and West Palm Beach charge, and the Terms page's Palm Beach County court venue.
    - Still open off the site: the GBP description omits Miami-Dade (H7).
- **M5. The name appears in four forms.**
  - "Geek at Your Spot" in the schema, "Geek @ Your Spot" on the GBP and LinkedIn, "Geek At Your Spot" on Facebook, and "Geek at Your Spot Llc" on 117 tool pages (verified).
  - The comment at `src/app/(site)/page.tsx:9-10` claims the schema matches the GBP, which is not true for the name.
  - `sameAs` still lists `https://twitter.com/geekatyourspot`, which leads to an X profile that returns 404.
  - The founding year is 2024 in the schema and 2025 on LinkedIn.
  - **Name fixed on the site on 2026-10-20 (`cc57675`), partly fixed.** At the owner's direction every rendered page names the business "Geek @ Your Spot LLC": the schema, publisher and author nodes, titles, metadata, alt text and the footer. A crawl of all 426 pages finds 7,536 mentions and no other form. The same change is SA M5 in `plans/seo-audit-2026-10-20.md`.
    - Still open: the GBP and LinkedIn say "Geek @ Your Spot" and Facebook "Geek At Your Spot", so the comment at `src/app/(site)/page.tsx:9-10` is still untrue for the name until those profiles are renamed by hand. The X profile and the founding year are also still open.
  - Fix:
    - Use one `name`, and keep the other forms as `alternateName` and `legalName`.
    - Fix "Llc".
    - Add `hasMap` with the GBP map URL.
    - Remove the X entry.
    - Pick one founding year.
  - **Entity details fixed on the site on 2026-10-20 (`d6989dc`).** The Organization node now has `legalName` "Geek @ Your Spot LLC", `alternateName` "Geek @ Your Spot" (the GBP and LinkedIn form) and `hasMap` with the GBP place URL, which is also in `sameAs`. The home page comment that claimed the schema matched the GBP is gone; the node lives in `src/lib/seo/organization.ts`. Still open, as decisions: the X entry in `sameAs` and the founding year.
  - **Founding year decided on 2026-10-20.** The owner confirmed 2024, which is what `foundingDate` already says. LinkedIn's 2025 is the year the LinkedIn page was created, so neither changes. The X entry is the one decision left. The same decision is SA M5.
  - **Founding year decided again on 2026-10-23 (`861f337`).** 2006 is the year the owner first did business under the name ("2006"), so `foundingDate` in `src/lib/seo/organization.ts` is "2006" and the home page's JSON-LD carries it. The LLC filing of 2026-08-28 (Florida register L26000455335) is the incorporation date, which BBB shows separately as "Business Incorporated". The four directory profiles carry 2026 as the founding year until the owner changes them, which he said he will; BBB's empty "Business Started" takes 2006 too. LinkedIn's 2025 is the page's creation year. Nothing else on the site states the business's founding year; the only other "since" and "founded" lines describe a vendor. The same decision is SA M5 and decision 9.
  - **LinkedIn name, 2026-10-22.** The owner appended LLC to the LinkedIn page's name, so it reads "Geek @ Your Spot LLC" like the site, and deleted document 50. The same note is SA M5.
  - **Facebook name, 2026-10-22.** Facebook refused the rename on 2026-10-22: "Creating content with this name is not allowed. Try: Geek at Your Spot LLC". The `@` is not allowed in a Facebook page name, so the page cannot carry the site's form. The owner deleted document 51 the same day; the Facebook name stays as it is until the owner renames it "Geek at Your Spot LLC". **Alternate name added on 2026-10-22 (`2b21167`):** the business node's `alternateName` now lists "Geek at Your Spot LLC" beside "Geek @ Your Spot", so the Facebook page can carry the form Facebook allows and still match the site. The same note is SA M5.
  - **Business Profile name, 2026-10-23.** The owner renamed the profile ("47 is updated"). The public Maps page for the place ID reads "Geek @ Your Spot LLC", the site's `name`, with the address, phone, hours and site domain matching. With LinkedIn renamed on 2026-10-22, Facebook is the one profile left, waiting on the owner's rename to "Geek at Your Spot LLC". The Florida register (Sunbiz L26000455335) lists GEEK @ YOUR SPOT LLC, filed 2026-08-28, active, at 2025 NW 18th Street, Delray Beach, FL 33445, with Jeffrey A Martin as registered agent and manager, so the legal name and the address match the node. **Founding year reopened by the owner on 2026-10-23:** the name has been in use on and off for about 20 years, and the LLC was filed in 2026; `foundingDate` stays 2024 until he decides; later on 2026-10-23 he said the four directory profiles carry 2026 and that he has used the name for over 20 years, so the site's 2024 matched none of them; decided later that day: 2006 (`861f337`). Document 47 is done. The same note is SA M5.
  - **X entry removed on 2026-10-20 (`f961b5e`).** The owner has no X account, so the site no longer claims one. `https://twitter.com/geekatyourspot` is gone from the Organization's `sameAs` (`src/lib/seo/organization.ts`). The home page's `twitter:site` and `twitter:creator` ("@geekatyourspot") are removed, and so is the `twitter:creator` "Geek @ Your Spot LLC" that 116 other page files set. A crawl of all 447 pages finds no `twitter:site`, no `twitter:creator` and no link to an X profile, and `twitter:card` and `twitter:image` still on every page. The same change is SA M5 and L7. What is left of M5 is off the site: the GBP, LinkedIn and Facebook names.
- **M6. The GTM container is misconfigured.** This is in the GTM interface, not the repo. Verified in the published `GTM-K5CXSQRP`:
  - One Google tag uses the Page URL as its tag ID, which loads an extra copy of gtag (about 89 KB) on content pages.
  - Two Google tags use the Click ID as their tag ID.
  - A GA4 event tag uses the Page Hostname as its event name.
  - The track also reported a "HomePageView" conversion firing on non-home pages and an Ads remarketing cookie. Neither is in the container file, so I have not confirmed them.
  - Fix: replace those tags with GA4 event tags that have constant names, such as `contact_click`.
  - **Fixed on 2026-10-20 in container version 15.**
    - Built from version 14 in a new workspace (22). Workspace 21, with its 297 unpublished changes, was left untouched and now shows as out of date.
    - The four broken tags are deleted. The Google tag `G-WL9NJH8FLH` stays.
    - New trigger "Link Click - gys-link" fires when the Click ID starts with `gys-link-`. New tag "GA4 Event - link_click" sends `click_id` and `link_url`. It was tested in Tag Assistant and arrived in GA4 DebugView.
    - The trigger only sees links built with `gtmLinkId` (navbar, footer, heroes, home page, blog index). Body links on pillar and tool pages have other ids or none, so they are not tracked.
    - Both reported items are now confirmed. `HomePageView` is a GA4 key event, not a GTM tag, and it fires on every page view, including `/use-cases/accounting`. The Ads remarketing hits come from the Google tag's `AW-18291254305` destination.
- **M7. Mobile LCP is inconsistent.**
  - PageSpeed mobile LCP ranged from 2.1 to 8.2 seconds across runs. The AI Marketing Systems pillar scored 58 and 61, and other pages scored 90 to 95.
  - The H1 paints at first paint, so the delay comes from what loads before it:
    - four preloaded fonts, including the two unused Geist fonts (SA M8);
    - a 26 KB render-blocking CSS file;
    - 330 to 420 KB of Google tags.
  - Fix:
    - Remove the Geist preloads.
    - Try `experimental.inlineCss`.
    - Load the scheduler dynamically.
    - Load GTM later.

    None of this touches Sora.
  - **Partly fixed on 2026-10-20 (`d6989dc`).** The Geist fonts and their preloads are removed, and the scheduler loads with `next/dynamic` when it nears the viewport (SA M8). `experimental.inlineCss` and loading GTM later are not tried yet, and LCP was not remeasured in PageSpeed.
  - **Remeasured and `inlineCss` tried on 2026-10-21, at the owner's direction.** Lighthouse 13.5 with PageSpeed's phone settings, five runs each, finds median LCP on the deployed site of 1.32 to 1.92 seconds across a home, pillar, tool, blog and glossary page, all under 2.5. PageSpeed's own API was over its daily quota, and the Mac running Lighthouse is faster than PageSpeed's servers. Side by side on two production builds, `inlineCss` made LCP the same or worse on all five and added about 80 KB of compressed HTML to every page, so it is not kept. Loading GTM later is still untried. The details are in document 13 in `48c5a66`, and the same note is under M8 in `plans/seo-audit-2026-10-20.md`.
  - **Tag Manager timing kept, 2026-10-21, at the owner's direction.** Phones already show the main content in under 2.5 seconds on all five page types, so `<GoogleTagManager>` in `src/app/layout.tsx` keeps Next's default timing and every visit is still counted (document 14 in `bf1a9ab`). The same note is under M8 in `plans/seo-audit-2026-10-20.md`.
- **M8. Pillar FAQs carry scraped questions with the wrong intent.**
  - The AP pillar asks job-seeker questions, such as "What are typical AP interview questions?" (`src/components/use-cases/accounting/accounts-payable/faq-section.tsx:37,45,57`).
  - The lead capture pillar asks about project pipelines.
  - The competing post pairs carry identical question sets.
  - Fix: keep only questions a buyer of the service would ask.
  - **Competing pairs fixed on 2026-10-20 (`5f8619d`).** The posts that repeated a question set were deleted under SA H6. The AP and lead capture pillar questions are still open.
  - **Pillar questions fixed on 2026-10-20 (`d6989dc`).** The AP pillar no longer asks the interview, "difficult" or skills questions. The lead capture pillar no longer asks "How to develop a project pipeline", "What are the three types of pipelines?" or "What are the 5 stages of pipeline?", in the visible section or its FAQPage, which leaves 9 questions.
- **M9. Titles use your labels, not searchers' words.** Your call, metadata only.
  - The content generation pillar says "intelligent content generation" 40 times and "AI content generation" 0 times.
  - "Intelligent resource planning" returns no coherent search results at all.
  - The AP and Cash Flow pillar H1s match the glossary term H1s.
  - Fix: keep the Intelligent labels, and put the searcher's term in the `<title>`, description and first paragraph.
  - **Titles and H1s changed on 2026-10-21 (`c63a97f`).** At the owner's direction, the 14 pillars titled "Intelligent X" are now "AI X" in the title tag, the H1 (both breakpoint copies), the Open Graph and Twitter titles and the JSON-LD headline. The approval workflows pillar is "AI Invoice Approval Workflows". The home card, navbar and index labels keep "Intelligent". Description and first-paragraph wording are unchanged. The same change is SA H7.
    - A check of the local build finds the five fields matching on all 14 pages. Every title is 59 characters or fewer with the suffix except "AI Fraud & Duplicate Payment Controls", at 60. On 2026-10-21 the owner declined a 58-character rename ("NIX"), so it stays at 60 (SA H7).
    - **Home card headings changed on 2026-10-21 (`cccde1c`).** At the owner's direction, the 13 home card headings that read "Intelligent X:" read "AI X:", matching the titles. The "Top 5 Intelligent … Tools:" lines, the navbar and the index cards keep "Intelligent" (SA H7).
  - **Titles changed again on 2026-10-21 (`f818419`), at the owner's direction.** 16 use-case titles now use the search terms in `plans/partner-keyword-research-2026-10-21.md`, such as "AI AP Automation Software" (3,600 searches a month) and "AI SEO Tools" (2,400), in the title, both H1 copies, og and twitter titles, JSON-LD headline and home card heading. The research's suggestions were replaced where they did not fit the page or the business, as listed in document 03 in `48c5a66`. Navbar labels, index cards and the "Top 5" lines keep their wording. Every title is 59 characters or fewer with the suffix. The same note is SA's pillar title note under H7.
  - **Third rename on 2026-10-22 (`8963460`), at the owner's direction.** The hand-coded lead scoring post's title, both H1 copies, JSON-LD headline, blog menu label and blog index entry become "AI Lead Scoring", dropping "for Small Businesses". The home card for the lead enrichment use case reads "AI Lead Enrichment & Predictive Scoring" in both copies; that page's own title and navbar label are unchanged. The same note is SA's H7 note.
  - **Home titles, later on 2026-10-21, at the owner's direction.** The site's default title and its Open Graph and Twitter copies (`src/app/layout.tsx`) read "AI Consultancy for South Florida Business", and the home page's WebPage name reads "AI Consulting for South Florida Business"; "Small Businesses" is gone from both. The home page's own title, "AI Integration in South Florida", is unchanged. The same note is under H7 in `plans/seo-audit-2026-10-20.md`.
  - **Home hero heading, 2026-10-21, at the owner's direction.** The H1 reads "AI Integration & Automation Solutions for Business" in both breakpoint copies, in place of "…for Small Businesses" (`src/components/home/hero-section.tsx`). The same note is under H7 in `plans/seo-audit-2026-10-20.md`.
  - **Home hero heading shortened, 2026-10-21, at the owner's direction.** The H1 reads "AI Automation for Business" in both breakpoint copies, because the longer heading took five lines on desktop. It carries "ai automation" (from "ai automation agency", 4,400 a month) and "ai for business" (8,100 a month) from the DataForSEO research of 2026-10-21; "AI integration" and "automation solutions" did not appear in that research. The same note is under H7 in `plans/seo-audit-2026-10-20.md`.
  - **"Business" on its own line, 2026-10-21, at the owner's direction.** The home H1 breaks after "AI Automation for" in both breakpoint copies.
- **M10. Blog titles are long.**
  - 25 of 32 run over 60 characters.
  - **Partly fixed on 2026-10-20 (`4c15437`).** The SA H7 titles are under 60 with the site name. 11 of the 25 remaining posts still run over 60; none of them was shortened in `df3130d`.
  - Setting `title: { absolute: post.headline }` in `src/app/(site)/blog/[department]/[...slug]/page.tsx:33` fixes 19 of them.
  - **Recounted on 2026-10-20 after the name change (GEO M5).** The suffix is now " | Geek @ Your Spot LLC", 23 characters. 19 of the 25 posts run over 60, and 9 of the 17 SA H7 titles now run 61 to 63, so SA H7 is partly undone. Site-wide, 118 of 426 titles run over 60, up from 69.
  - **SA H7 fixed again on 2026-10-20 (`cc57675`).** Ten SA H7 titles were shortened again, so all 17 are 59 characters or fewer. 11 of the 25 posts still run over 60, and 109 of 426 titles site-wide.
  - **Fixed on 2026-10-20 (`d6989dc`).** 11 more blog titles were shortened in the title, H1, Open Graph and Twitter titles and the JSON-LD headline, and the menus and pillar links that name them. No blog title is over 59 characters with the suffix. Site-wide, 82 of 448 titles are still over 59: 81 tool pages and one use case, which is SA H3's territory.
- **M11. Almost no images.**
  - 422 of 432 pages have no content image.
  - Of 57 article nodes, only 7 have a usable raster image. The rest use the placeholder, the 116 x 48 logo SVG (below Google's minimum), or nothing.
  - Fix: one real 1200 px or wider image per post and pillar, such as a configuration screenshot or a diagram, used in both `image` and `og:image`.
  - **Share card carries the logo, 2026-10-22 (`19e3d4f`), at the owner's direction.** The 1200 x 630 card every page names as its `og:image` shows the footer's white wordmark on the navy ground above the tagline and the domain. It is still one card for every page. Per-page pictures are document 41, where the owner has set the hero as the priority: the shared hero's 460 x 460 slot, which five pillars fill today. The same note is under SA M3.
    - **Profile text on the card, 2026-10-22 (`ea47eff`), at the owner's direction.** The tagline under the wordmark is now the Business Profile's two lines, verbatim: "Geek @ Your Spot LLC - Future-Proof Your Business" and "Increase efficiency and reduce costs. Let's automate your processes." The `og:image:alt` and `twitter:image:alt` say the same. Verified on a local build; the route stays static. The same note is under SA M3.
- **M12. The ad spend cluster holds the wrong tools.**
  - Anomalo, Great Expectations, Monte Carlo and Qualytics are enterprise data-observability tools.
  - Pipedrive and Zapier are filed in two categories each, and 6sense is filed under small business lead capture.
  - Removing tool pages costs nothing before launch.
- **M13. The site has two marketing hubs.** `/use-cases/marketing` (about 220 words) and `ai-marketing-systems`, which is the navbar target. Hubs also sit at three different URL levels. Choose one marketing hub.
  - **Decided and fixed on 2026-10-20 (`dbd8cd8`).** At the owner's direction, AI Marketing Systems is the marketing department page at `/use-cases/marketing`, as the accounting guide is at `/use-cases/accounting`. The old 220-word card list is deleted, and `/use-cases/marketing/ai-marketing-systems` returns 404, with no redirect.
    - The canonical, Open Graph URL, JSON-LD `@id`s and Service node use the new URL. The page is an Article like the accounting guide, so L11's Article and CollectionPage mismatch no longer applies to the department pages.
    - The other 17 references to the old URL, in 10 files, now point at `/use-cases/marketing`: the navbar, the home card in both copies, the lead capture hub link (H11), body links on two pillars and the Mailchimp tool page, two tool data files and the AI Marketing Systems blog post. The `/use-cases` index dropped its AI Marketing Systems card, because the Marketing heading above it already links there, as Accounting's does.
    - On the same page the "Top AI Tools for Marketing Automation" section is deleted, with the Marketo, Mailchimp and ActiveCampaign `mentions` it alone supported, and the People Also Ask section uses the one-column layout of the other pillars. Its questions and answers are unchanged.
    - A crawl of all 447 pages finds no link to the old URL, no internal link that fails, every page reachable from `/`, and no duplicated id. The tool group levels are still open.
- **M14. The structured data has broken internal links and no breadcrumbs.**
  - 85 of 90 tool pages point `subjectOf` at the pillar's URL instead of its `#article` node.
  - 35 relative `#software-*` ids make the same product a different entity on each page.
  - There is no BreadcrumbList on 431 pages. Breadcrumbs are one of the few rich results the site can still earn.
  - **Partly fixed on 2026-10-20.** `subjectOf` points at the pillar's `#article` node on all 90 tool pages (`4f36efd`), and no relative `#software` id is left (`d6989dc`; see H9). BreadcrumbList is still open.
  - **Changed on 2026-10-21 (`cccde1c`).** There are no `#` ids now (H9). `subjectOf` and `isPartOf` name the pillar's Article by the pillar's URL, and a crawl of all 448 pages finds every site URL in the structured data returning 200.
  - **Breadcrumbs added on 2026-10-21, at the owner's direction (SA L5).** Every page except the home page shows a hierarchy-based trail above its H1, in both breakpoint copies: Home, one step per level of the URL, then the page. The 9 levels that have a page are links, and the 31 that do not, such as `/tools/accounting/accounts-payable`, are plain text. Each page carries one `BreadcrumbList` naming Home, the linked levels and the page. The names are in `src/data/navigation/breadcrumb-levels.ts`, and `src/components/shared/breadcrumb-trail.tsx` checks at build time which levels have a page. A crawl of the local build finds one `BreadcrumbList` on each of 424 pages, the two copies matching on every page, and every URL in the markup returning 200. Google's Rich Results Test cannot fetch the site until robots.txt allows it at launch, so it runs then (document 20 in `4821ac1`). On 2026-10-26 (`ce95e5c`) the visible trail moved into the navbar as a second row under the logo at the owner's direction, naming Home and the levels above the page in one weight on one line that scrolls sideways on a narrow screen; the page itself stays the H1 below, and the BreadcrumbList structured data stays in the hero unchanged. Later the same day (`0e35a62`) it moved back into the hero at the owner's direction, as the hero grid's first row spanning every column, at 0.75rem in one weight, still naming the levels above the page only; the navbar is its old height again and the structured data is unchanged.

## Low

- **L1. Footer icon links have no accessible name.** The Facebook and LinkedIn links (`src/components/layout/footer.tsx:89`, `:111`) contain only an `aria-hidden` SVG. This fails Lighthouse's Agentic Browsing check on every page. Add `aria-label="Geek at Your Spot on Facebook"` and the LinkedIn equivalent. The same file has a stray `justify-center]` class at `:93`.
  - **Fixed on 2026-10-20 (`d6989dc`).** The links are labelled "Geek @ Your Spot LLC on Facebook" and "Geek @ Your Spot LLC on LinkedIn", and the stray class is fixed.
- **L2. Mobile render defects.**
  - The scheduler heading "Consultation" (`scheduler-shell.tsx:144`) is 408 px wide in a 390 px viewport, so it is clipped on 428 pages.
  - The home page uses 6 px labels (`clone-yourself.tsx:36,44`).
  - `use-cases.tsx:575` and `:1579` render an `<ol>` with non-`<li>` children.
  - `#C83803` link text fails contrast on some grounds.
  - **Fixed on 2026-10-20 (`d6989dc`), except contrast.** At 390 px the scheduler heading measures 358 px in a 358 px column and nothing overflows the page. The home labels are 10 px, and the two lists are `<div>`s. Link contrast is still open.
  - **Links changed on 2026-10-21, at the owner's direction.** Every link in `main` is bold, through one base rule in `src/app/globals.css`, and links on teal `#025E73` sections are navy `#0B162A`, as they already were on `#8C4E2A` and `#BF5934`. Navy on teal is 2.45 to 1, up from 1.41 for orange, and orange on the two blue sections stays at 2.56 and 2.14, so contrast is still under 4.5 to 1 on every section. The owner accepted it: "Orange is my color." The details are in document 17 in `09d006b`, and the same note is in SA's change list.
- **L3. Image delivery.**
  - `quality={100}` (`hero-section.tsx:61`, `hero-image-component.tsx:21`) makes the home hero's 2x AVIF 222 KB.
  - No content image has `sizes`.
  - One hero image is reused on three pillars.
  - **Partly fixed on 2026-10-20 (`d6989dc`).** `quality={100}` is removed from both components, and `next.config.ts` allows only quality 75. `sizes` and the reused hero image are still open.
  - **Alt text, 2026-10-21 (`c5c8c24`).** The reused hero image had two different alts across its three pages, and 13 section images described something else or had two alts. Each now has one alt that describes it. The image itself is still reused; the details are under SEO L3 in `plans/seo-audit-2026-10-20.md`.
  - **Image sizing rechecked on 2026-10-21.** Every image sets a fixed `width` and `height`, 460 by 460 in a section's desktop block and 211 by 211 in its phone block, and Tailwind's base style (`max-width: 100%`, `height: auto`) scales it down to its column. A headless browser shows the section images at 452 px at 1440 and 140 px at 390, square. The one exception, the SEO blog diagram on AI Content Creation Workflow, carried an inline `width: 100%` that stretched it; that style is removed. Closed on 2026-10-21 at the owner's direction, with no `sizes` added: each block already loads its own file, so a phone never downloads the 460 px image (document 15 in `48c5a66`). SA has no counterpart.
  - **Reused hero removed on 2026-10-21, at the owner's direction.** AI Content Marketing Platforms (the old AI Content Creation Workflow) and Automated Ad Spend Optimization no longer show the AI Marketing Systems hero, and their Article markup names no image, so the image belongs to `/use-cases/marketing` alone. The two pages show no hero image, like the other pillars without art. The same note is under L3 in `plans/seo-audit-2026-10-20.md`.
- **L4. The two-copy pattern.** Keep the pattern.
  - 2,280 duplicated HTML ids appear on 153 pages, and jump links land on the hidden phone copy. Adding `-lg` to ids in the desktop copy fixes this.
  - Non-rendering AI crawlers read both copies, so keep them identical.
  - **Fixed on 2026-10-20 (`d6989dc`).**
    - Every id in a desktop copy ends in `-lg`. Shared section bodies take the suffix as an argument, and so do the footer and the blog route. Links repeated inside one copy, on the home cards and in the lead scoring post, also carry the card or section name. A crawl of all 448 pages finds no duplicated id and no jump link to one.
    - GTM: desktop `click_id` values now end in `-lg`. The "Link Click - gys-link" trigger matches on the `gys-link-` prefix, so it still fires.
    - The two copies' text is identical on all 444 two-block pages (SA M7).
- **L5. Em dashes.**
  - All 274 glossary titles use one (`src/app/(site)/glossary/[slug]/page.tsx:45`, "Term — Glossary").
  - 14 meta descriptions and 587 places in visible copy also use them.
  - **Fixed on 2026-10-20 (`d6989dc`).** A crawl of all 448 pages and the 404 finds no em dash in any title, description, visible text, alt or aria text, or JSON-LD.
    - Glossary titles read "<Term> Definition", or the term alone when that would run long.
    - 557 em dashes in 132 files were rewritten as commas, colons, parentheses or separate sentences: 443 on the five payroll pages and the rest on tool pages, pillars, hubs and 11 blog exports. Quoted vendor text kept its words and changed only punctuation.
    - FAQ answers changed in the visible section and the FAQPage together, and a check of all 852 FAQ questions finds every one matching its visible text.
    - Not changed: code comments, and the title of the temporary hold the scheduler puts on Jeff's own calendar ("HOLD — AI Consultation"), which visitors never see.
- **L6. `www` in JSON-LD.** 24 JSON-LD URLs on 6 exported posts use the `www` host, including `mainEntityOfPage`.
  - **Fixed on 2026-10-20 (`d6989dc`).** All 88 `www` URLs in 11 blog exports now use the apex host. A JSON-LD crawl finds none.
- **L7. Glossary definitions are fragments.** Definitions such as "The accounting function responsible for..." have no subject, and on term pages the meta description gives a different definition from the visible one.
  - **Definitions fixed on 2026-10-20 (`25926fb`).** Every definition is now a full sentence with its subject. The meta description still comes from the older `shortSummary`, so it can still differ from the visible definition.
  - **Meta descriptions fixed on 2026-10-20 (`d6989dc`).** A term page's description is now its visible definition, cut at a sentence end at 160 characters or less, so the two cannot differ. The DefinedTerm's `description` uses the same text.
  - **Correction, rechecked on 2026-10-20.** The line above is true for 50 of the 274 terms only. `definitionSummary` (`src/lib/glossary.ts:55`) keeps whole sentences when they fit in 160 characters. For the other 224 terms the first sentence alone is longer, so it is cut at a word boundary and ends in an ellipsis. The description still quotes the visible definition. SA L1 has the recheck of the other descriptions.
- **L8. The lead scoring model adds up to 120.** The positive criteria in the "100-point model" sum to 120 (verified), and there is no qualifying threshold. It is still the most citable post on the site, so fix it first. Its headings "People Also Ask ?" and "Map every lead source." also need cleaning.
  - **Fixed on 2026-10-20 (`d6989dc`).** The positive criteria now weigh 15, 15, 20, 25, 10 and 15, which adds up to 100. A new paragraph sets the thresholds: 60 points or more gets a sales call the same day, 30 to 59 stays in nurture, and below 30 leaves the active list. The headings read "People Also Ask" and "Map every lead source".
- **L9. Leftover files.** `next.svg`, `vercel.svg`, `file.svg`, `window.svg`, `globe.svg` and an empty `mock-post.json` are served publicly.
  - **Fixed on 2026-10-20 (`d6989dc`).** All six files are deleted.
- **L10. Metadata gaps.**
  - `twitter:site` is missing on 431 pages and `og:site_name` on 305.
  - 113 pages set the meta author "Development Team".
  - 10 hub pages lack the `googlebot` meta tag.
  - **Rechecked on 2026-10-20.** `og:site_name` is now on all 448 pages (SA M3, `d6989dc`). Still open: `twitter:site` is on the home page only and waits on the X handle decision, 113 pages set the author "Development Team", and 32 of 448 pages have no `googlebot` meta tag.
  - **Author fixed on 2026-10-20 (`f961b5e`).** The 113 page files that set "Development Team" now set the meta author "Jeff Martin", linked to `/about` (SA M4, H4). Still open: `twitter:site` and the `googlebot` tag.
  - **`twitter:site` resolved on 2026-10-20 (`f961b5e`).** The owner has no X account, so no page should set `twitter:site`. The home page's `@geekatyourspot` is removed, along with every `twitter:creator` (SA M5, L7). Still open: 32 of 448 pages have no `googlebot` meta tag.
- **L11. Hub details.**
  - `6sense`, `contentstudio`, `pipedrive` and `zapier` are missing from the `/tools` grid and ItemList.
  - `/use-cases/accounting` is typed Article while its sibling hubs are CollectionPage.
  - `/blog` has no JSON-LD and no RSS feed.
  - `/tools/accounting`'s H1 does not match its title.
  - **Rechecked on 2026-10-20 against the local build.**
    - The four tools are still missing from both `/tools` and `/tools/marketing`. Pipedrive and Zapier are linked from the home page's AI Use Cases section. 6sense and ContentStudio are linked only from inside other tool pages.
    - Since `dbd8cd8` the marketing department page is an Article too, so `/use-cases/accounting` matches it and the type needs no change.
    - `/blog` still has no JSON-LD. Its H1 is still "Geek Post" while its title is "AI for Small Business Blog" (SA L4 changed only the title).
      - **Changed on 2026-10-21, at the owner's direction.** The H1 and the title are both "Geek Blog Posts", so they agree; the owner did not want "Small Business" in the title ("change both to Geek Blog Posts"). The same note is under L4 in `plans/seo-audit-2026-10-20.md`.
    - `/tools/accounting`'s H1 is "Accounting & Finance" against the title "Accounting AI Tools & Platforms". `/tools/marketing` has the same gap: "Marketing & Content" against "Marketing AI Tools & Platforms".
      - **Changed on 2026-10-21, at the owner's direction.** Both pages open with the `/tools` hero, and their H1s are their titles, "Accounting AI Tools & Platforms" and "Marketing AI Tools & Platforms". Their cards sit in one section per H2, by the navbar's Tools categories, and each page ends with the scheduler. A list of the platforms the tools connect to, such as QuickBooks and HubSpot, is on hold at the owner's direction ("not today"). Document 19 is in `5bc2b6c`. The footer's hub links are white with an orange hover, as the footer phone link is, in place of orange. SA has no counterpart for the tools hubs.
  - **Tools grid fixed on 2026-10-20 (`8d602e1`).**
    - 6sense, ContentStudio, Pipedrive and Zapier now have registry entries (`src/data/tools/`) built from their own pages: title, meta description, hero summary, keywords, and each section's heading and opening sentence. `/tools` lists all 90 tool pages and `/tools/marketing` all 44, in both the grid and the ItemList.
    - At the owner's direction, a tool with more than one page is named with its use: "Bill for Data Entry", "Bill for Accounts Receivable" and so on. The cards on `/tools`, `/tools/accounting` and `/tools/marketing` take the use from the navbar's label (`toolCardLabel` in `src/data/navigation/site-menus.ts`), so no two cards share a name. Tools on only one page keep their names.
    - **Changed on 2026-10-21 (`181ed7a`).** `8d602e1` wrote the use in parentheses, as the navbar does ("Bill (Data Entry)"). The owner asked for "for", so the 33 cards for tools with more than one page now read "Bill for Data Entry". The navbar keeps the parentheses. No two of the 90 cards share a name, and a headless browser finds no card name overflowing at 390 or 1440 px. The home page's AI Use Cases section is unchanged, because each tool there sits under the use-case heading it belongs to.
    - ActiveCampaign's card showed no description. It now shows the page's meta description, as the other 89 cards do.
    - A headless browser finds no card name overflowing at 390 or 1440 px.
- **L12. Old-template tool pages.** 13 flat tool pages under `/tools/marketing/<tool>` use an older template of about 900 to 1,000 words, with no FAQ or pricing.
  - **Correction, rechecked on 2026-10-21 on a local build.** It isn't an older template. Every tool page has the same layout, one section per H2 in its content, so the 13 differ in their content.
    - Each has four H2s (Overview, Key Capabilities, Implementation Considerations and When to Use), about 500 to 1,040 words, no FAQ and no pricing. Mailchimp has four H2s too, not three.
    - The 77 tool pages under a use-case segment have 7 to 12 H2s and about 1,900 to 9,100 words.
    - Each page has its own plan document: 05 to 09 and 54 to 61 in `plans/audit-input-2026-10-21/`. SA has no counterpart for this finding.
    - **Adobe Mix Modeler, decided 2026-10-22.** The owner's decision on document 54: "Old Content not applicable." No re-export and no layout pass; the page is unchanged and the document is deleted.
    - **Anomalo, decided 2026-10-22.** The same decision on document 55, "old content": no re-export, the page unchanged, the document deleted.
    - **Great Expectations, Madgicx, Mailchimp, Monte Carlo, Optimove and Qualytics, decided 2026-10-22.** The same decision on documents 56 to 61, old content: no re-export, the six pages unchanged, the six documents deleted. Of the 13 pages in this finding, 05 to 09 remain open as documents.
  - **Layout fixed on 2026-10-21 (`c5c8c24`).** The correction above held for the section count but not for the layout. Mailchimp, 6sense, Pipedrive and ActiveCampaign had single-block sections, with no separate phone and desktop blocks.
    - All four now have both blocks for every section, alternate sides by H2, and take the colors in H2 order.
    - The same pass fixed `/use-cases/marketing` and four pillars: AI Accounts Payable and AI Cash Flow Forecasting (wrong start color, off-palette `#8C2703`, `#0A080D` and `#0C1A26` grounds, single blocks), Automated Ad Spend Optimization (single blocks, `#023859`) and AI Content Creation Workflow (`#023859`). Two FAQ headings sat in `col-span-9` and are now `col-span-12`.
    - The copy is unchanged. A word-by-word comparison of the 36 rebuilt section files against the committed versions finds no difference.
    - A headless browser check of all 139 tool, pillar and blog pages at 390 and 1440 px finds every section on the rule: two blocks, the heading in the 7-column side, alternating sides, colors by H2, weight 900 headings, link colors matching the ground, no duplicate id and no sideways scroll. The same change is under "Changes made after the audit ran" in `plans/seo-audit-2026-10-20.md`.
- **L13. Long URLs.** 98 URLs are over 100 characters, the longest 169. Shortening them is free only before launch, because removed URLs 404. Your call.
  - **Applied on 2026-10-21 (`cccde1c`).** The owner chose to keep the structure and shorten the last segment to the page heading, which is decision 6. 15 use-case pages moved, for example `/use-cases/marketing/content-creation-workflow/ai-content-generation`. The full table is in document 03 in `48c5a66`.
  - No redirect is added. A crawl of all 448 pages finds no link to an old URL.
  - 83 sitemap URLs are still over 100 characters: 64 pages, almost all tool pages, and 19 blog posts. Their URLs weren't part of the decision.
  - **Second rename on 2026-10-21 (`f818419`), at the owner's direction.** 16 use-case pages take a title from the partner keyword research, and 13 of them move to that title as their last segment, for example `/use-cases/marketing/ai-seo-tools`. The table is in document 03 in `48c5a66`. A crawl of all 448 pages finds no broken internal link and no link to an old URL, and the 13 old URLs return 404 with no redirect. 82 sitemap URLs are over 100 characters now: 61 tool pages, 19 blog posts and 2 use-case pages. The same change is in SA's change list.
  - **Third rename on 2026-10-22 (`8963460`), at the owner's direction.** The lead scoring post moves to `/blog/marketing/lead-capture-pipeline/ai-lead-scoring` and the lead enrichment use case to `/use-cases/marketing/lead-capture-pipeline/ai-lead-enrichment-scoring`. Every link, canonical, JSON-LD, menu, index and registry reference follows, including the one link in the blog source HTML. The use case's component folder keeps its name and element ids are unchanged. Both old URLs return 404 with no redirect. Verified on a local build: 447 sitemap URLs, both new URLs 200, both old URLs 404. The same change is in SA's change list.
  - **Closed on 2026-10-21, at the owner's direction.** Use-case URLs reached 162 characters before the renames, and the longest is now 103. The 80 tool and blog URLs still over 100 characters were not part of the decision. The same note is in SA's change list.
- **L14. Glossary topic mismatch.** About 59% of terms are chat and contact-center vocabulary, and 2% are accounting, although accounting is half the tool pages. Accounting terms people search for have no page: accounts receivable, three-way match, economic nexus, DSO and invoice OCR.
  - **Fixed on 2026-10-22 (`c966130`), at the owner's standing direction.** The five terms are added, written to the H5 definition spec at its fuller length and filed under Accounting, and each is linked at its first mention where a page already uses the words: the accounts receivable pillar (accounts receivable, DSO), the sales tax nexus pillar (economic nexus) and the accounts payable pillar (OCR to Invoice OCR, three-way matching to Three-Way Match). The glossary holds 279 terms and the sitemap 452 URLs. Document 43 is closed. The same note is under SA H5.
  - **20 advertising terms added on 2026-10-24 (`1316638`), at the same standing direction.** Ad Copy, Ad Fatigue, Broad Match, Call Tracking, Click Through Rate, Conversion Rate, Conversion Tracking, Cost Per Click, Cost Per Lead, Daily Budget, Impressions, Landing Page, Marketing Attribution, Negative Keywords, Pay Per Click, Performance Max, Retargeting, Return on Ad Spend, Smart Bidding and Synthetic Persona Testing, written to the H5 spec at its fuller length, filed under Marketing, Marketing Metrics and Analytics, and linked at their first mention on the new ad spend pages. The glossary holds 299 terms (SA H5).
  - **32 advertising terms added on 2026-10-25 (`1cd15f5`), at the same standing direction.** Ad Auction, Ad Group, Ad Placement, Ad Set, Audience Overlap, Audience Segmentation, Automation Rules, Automation Scripts, Bid Cap, Budget Pacing, Catalog Ads, Cost Cap, Cost Per Acquisition, Creative Assets, Creative Testing, Custom Audience, Customer Acquisition Cost, Customer Churn, Customer Retention, Dynamic Product Ads, Impression Share, Lead Form Ads, Lead Quality, Lookalike Audience, Multivariate Testing, Offline Conversions, Qualified Lead, Return on Investment, Search Terms Report, Shopping Ads, Tracking Pixel and Value Optimization, written to the H5 spec and filed under Marketing, Marketing Metrics or Analytics, each linked at its first mention on the Measured Lead Generation pages that use the words. The glossary holds 331 terms (SA H5).
  - **25 email marketing terms added on 2026-10-26 (`405d589`), at the same standing direction.** Abandoned Cart Email, Automation Workflow, Contact Tagging, Custom Field, Dynamic Content, Email Automation, Email Deliverability, Email Segmentation, Email Sequence, Engagement Score, Generative AI, Lead Magnet, Lead Nurturing, Lifecycle Marketing, List Hygiene, Marketing Automation Platform, Merge Tag, Open Rate, Opt In, Product Recommendations, Re-Engagement Campaign, Send Time Optimization, Sender Reputation, Transactional Email and Welcome Series, written to the H5 spec and filed under Marketing, Marketing Metrics or Technology, each linked at its first mention on the Personalized Email Campaigns pages that use the words. The glossary holds 356 terms (SA H5).
- **L15. YMYL payroll pillar.** The payroll misclassification pillar competes with law firms. Frame it as implementation work, cite Florida statute, and add a not-legal-advice note.
  - **Closed on 2026-10-22, by the owner's decision.** The rule, settled in GeekBackend and recorded in document 42: a point of law is stated only as a passage the evidence states, set in a blockquote whose `cite` is the source URL; where the piece turns on one and the evidence is silent, the sentence names the agency that decides it and says the reader's accountant or employment attorney makes the call, never as a note. The rule governs what the writer produces; the page is unchanged. SA has no counterpart finding.
- **L16. Smaller local items.**
  - Hours appear only in JSON-LD.
  - There is no bilingual statement, though Miami competitors offer Spanish.
  - Chamber membership would add a local citation. The Greater Delray Beach Chamber is running an AI series.

## Decisions for you

None of these is mine to make.

1. **The `vercel.app` host.** Use a host-scoped noindex header, or remove the domain in Vercel. Decided 2026-10-20: the host-scoped header (launch gate 2, `8d602e1`).
2. **llms.txt.** A draft covering 19 pages is in the AI access track's scratch folder. The llms.txt format is Markdown by specification. It is a published site file, not corpus, but your Markdown rule makes this your call. No major engine has confirmed it reads llms.txt. Decided 2026-10-21: build it (`ea9040f`). `src/app/llms.txt/route.ts` generates it at build time from the Use Cases and Tools menus, 32 pages, each with its own metadata title and description, and the exception is in the Markdown rule in CLAUDE.md (`ea9040f`).
3. **New page types.** A South Florida service page, About, Contact, a cost or engagement page, case studies once real ones exist, and comparison pages. About is done (`f914eee`). On 2026-10-20 the owner said a service menu is needed and postponed it (C2). On 2026-10-21 the owner dropped the area pages (C2). Rechecked on 2026-10-21 against `1e90759` in `plans/content-gap-audit-2026-10-21.md`; SA has no counterpart for this decision.
   - **The engagement page's questions (CG3).** Close rivals answer what working with them costs, how long it takes, whether staff must be technical, what happens to staff roles, support after launch, contract terms, industries served and on-site or remote work. The site answers five engagement questions, all on `/methodology`, and none of these.
   - **Industry pages (CG1).** Dropped by the owner on 2026-10-21: the use cases are organized by department, and an industry page narrows the audience instead of widening it. Most rival industry pages are IT firms' "IT support for law firms" pages, and the national searches go to vertical software and large publishers.
   - **A cost page (CG9).** Its search terms show no measurable volume, but cost questions appear in "People also ask" on 9 of 32 local results, so the engagement FAQ answers them first.
4. **Glossary scope.** Re-scope it to the clusters, and decide whether off-topic terms stay. Decided 2026-10-20: all 274 terms stay, rewritten to your definition spec (SA H5, `25926fb`).
5. **Metadata titles** carrying searcher terms next to the Intelligent labels. Decided 2026-10-21: the 14 "Intelligent X" pillar titles and their H1s become "AI X", and the labels stay (M9, `c63a97f`).
6. **Slugs.** Shorten long ones before launch, or keep them. The twelve slugs that contained "smb" were shortened on 2026-10-20 (`5f8619d`). Decided 2026-10-21: the use-case pages keep their structure, and the last segment becomes the page heading as a slug. 15 pages moved (L13, `cccde1c`, document 03 in `48c5a66`).
7. **One marketing hub.** Choose between `/use-cases/marketing` and `ai-marketing-systems`. Decided 2026-10-20: AI Marketing Systems moves to `/use-cases/marketing` (M13, `dbd8cd8`).
8. **The ad spend cluster.** Re-scope it.
9. **The GBP.** Choose the primary category, the service area and the founding year. Decided 2026-10-20: the service area is Miami-Dade, Broward and Palm Beach (M4), and the founding year is 2024 (M5). The primary category is still yours to confirm (H7), and the GBP description needs Miami-Dade added by hand. **The name was fixed by the owner on 2026-10-23 (H7, M5).** On 2026-10-23 the owner reopened the founding year: the name has been in use on and off for about 20 years, and the LLC was filed on 2026-08-28 (Sunbiz L26000455335); 2024 stays until he decides. Later that day he said the four directory profiles carry 2026, so the site's 2024 matched none of them; decided later that day: 2006, the first year of business under the name (M5, `861f337`).
10. **Pricing and language.** Whether to publish price ranges, and whether to state bilingual service.
11. **Bytespider and CCBot.** Whether to block them at launch.
   - **Bytespider decided 2026-10-21 (`bd38ff5`): blocked at launch.** The launch branch of `src/app/robots.ts` disallows Bytespider ahead of the wildcard allow (document 11 in `48c5a66`). The same note is under H1 in `plans/seo-audit-2026-10-20.md` and CA14 in `plans/competitor-audit-2026-10-20.md`. CCBot was decided on 2026-10-21: allowed at launch, at the owner's direction ("taking your recommendation...no change"), so the wildcard `allow: "/"` admits it and `robots.ts` is unchanged (document 12 in `48c5a66`).

## Skills run

| Skill | Status | Notes |
|---|---|---|
| searchfit seo-auditor | Ran | The first audit, SA |
| seo | Partial | Health score and E-E-A-T done by hand. Its `claude-seo` scripts are not installed, and its Google, backlink and DataForSEO modules need credentials |
| seo-audit | Ran | Hreflang and Search Console checks do not apply |
| seo-page | Ran | 10 representative pages |
| seo-technical | Ran | Core Web Vitals are lab data only, because there is no field data |
| geo-technical | Ran | Scored as the site will stand at launch |
| seo-sitemap | Ran | Validation mode. Generation does not apply |
| seo-images | Partial | Image SERP needs DataForSEO, and exiftool is not installed |
| seo-hreflang | Not applicable | One `en` locale |
| seo-drift | Baseline only | 432 rows in the technical track's scratch `drift/baselines.db`. Compare by `content_hash` |
| seo-schema, schema | Ran | |
| geo-schema | Ran | Its page-fetch script is missing, so it was replaced with an equivalent |
| geo | Partial | Used for discovery and weights. Its sub-skills ran separately |
| geo-citability | Ran | 17 sample pages, plus site-wide pattern counts |
| geo-platform-optimizer | Ran | Bing Webmaster Tools and GBP data need credentials |
| geo-content, seo-content | Ran | |
| geo-crawlers | Ran | 27 user agents tested against the deployed site |
| geo-llmstxt | Generation | Built on 2026-10-21 in `src/app/llms.txt/route.ts` (`ea9040f`), see decision 2 |
| seo-aeo-best-practices | Ran | Checklists, no score |
| seo-geo | Partial | Brand mentions came from web search, because DataForSEO is unavailable |
| ai-seo | Partial | No ChatGPT or Perplexity query testing (no accounts, and the site is noindexed). Third-party checkers were skipped |
| site-architecture | Ran | |
| seo-cluster | Partial | SERP overlap from web search samples, with no volumes |
| seo-sxo | Partial | 38 queries. No ads, PAA or local pack data |
| content-strategy | Ran | |
| seo-programmatic, programmatic-seo | Ran | |
| seo-plan | Partial | Adapted for pre-launch, with no competitor traffic data |
| seo-flow | Partial | Generic prompt templates |
| seo-google | Partial | No API key, and the keyless PSI API returned quota 0. PSI ran through Google's web UI. CrUX has no data for a new noindexed site. GSC and GA4 need OAuth |
| seo-dataforseo | Not run | No DataForSEO server or credentials |
| competitor-profiling | Partial | Six competitors, from web search and their own pages |
| competitors, seo-competitor-pages | Assessed | Tool-versus-tool pages recommended (H12). No agency comparisons |
| seo-ecommerce | Not applicable | No products |
| seo-local | Partial | No DataForSEO, so no local pack positions |
| seo-maps | Tier 0 | No Maps or Geoapify key. The GBP was read from the public Maps payload |
| geo-brand-mentions | Ran | |
| seo-backlinks | Partial | No Moz, Bing or DataForSEO access. Common Crawl was checked by hand |
| geo-audit, geo-report, geo-report-pdf | Not run separately | They orchestrate or format the skills above, which ran individually. This file is the report |
| seo-image-gen, seo-content-brief | Not applicable | They generate images and briefs, not audits |
| geo-proposal, geo-prospect, geo-compare, geo-update | Not applicable | Agency sales and monitoring tools for client work |
| directory-submissions | Not run | It submits listings, which is your action (H7) |

## Corrections to SA

- **H1 is rewritten and fixed.** `src/app/robots.ts` overrode your file and served `Allow: /`. It now serves `Disallow: /` until launch, and your `public/robots.txt` is deleted at your direction.
- **M1 is fixed.** Each blog index page canonicalizes to itself.
- **L9's backlink bullet is removed.** No outside link to an old path could exist, because those pages were never findable in search.
- **"JSON-LD hygiene" needs a qualifier.** The JSON parses on every page, but two blog blocks are invalid JSON-LD (H8), and 19 `@id`s are typed inconsistently across pages (M14).
- **"Core Web Vitals pass"** holds under DevTools-style throttling only. PageSpeed's simulated runs put mobile LCP in the poor range on some pages (M7).

## Where the evidence is

The raw crawl data, scripts, Lighthouse JSON, JSON-LD drafts, cluster maps, competitor HTML and the llms.txt draft are in this session's scratch folder, under `geo-seo-audit/<track>/`. That folder is temporary. If you want any of it kept, I'll copy it into the repo.
