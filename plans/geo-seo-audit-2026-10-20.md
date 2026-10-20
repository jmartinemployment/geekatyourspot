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

## Method

- **Crawl.** A local `next build` at commit `921d3b8` served on `localhost:3311`: all 432 sitemap URLs plus the query-string listing pages. Vercel confirmed the deployed site was built from the same commit, so the findings apply to both.
- **Deployed-site checks.** Headers, robots.txt, the sitemap, PageSpeed Insights through Google's own web interface, and Lighthouse.
- **Outside the site.** Web search, Wikipedia and Wikidata APIs, Common Crawl, the public Google Maps payload, Bing Maps, BBB, and the published GTM container.
- **No edits.** No track changed the repo.
- **Verification.** I checked the main claims in the source before including them; anything not confirmed is marked "reported".
- **Since the crawl.** Two of the findings are already fixed in commits `7a1388a` (new hero H1) and `6696a93` (footer hub links, SA C1).

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

1. **robots.txt, done.** `src/app/robots.ts` now serves `Disallow: /` until `ALLOW_INDEXING=true`, and `public/robots.txt` is deleted (SA H1).
2. **Keep `geekatyourspot.vercel.app` noindexed after launch.** It serves the whole site with 200. It is noindexed today only because the `ALLOW_INDEXING` header covers every host, and setting the variable removes that header there too. Options:
   - a host-scoped `X-Robots-Tag: noindex` header in `next.config.ts`, outside the `ALLOW_INDEXING` branch;
   - removing the domain in Vercel.

   Either one avoids a redirect. The GitHub repo's homepage field also points at this host.
3. **Keep security headers out of the `ALLOW_INDEXING` branch.** `next.config.ts` returns `[]` when the variable is `true`, so any header added to that list disappears at launch. The deployed site sends HSTS and no other security headers (no CSP, `X-Content-Type-Options`, `Referrer-Policy` or `Permissions-Policy`).
4. **Bing.** Verified in Bing Webmaster Tools on 2026-10-20 through `public/BingSiteAuth.xml`, which must stay in place because Bing re-checks it. At launch, submit `/sitemap.xml` in Bing Webmaster Tools and add an IndexNow key file.
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

### H4. Nobody is behind the business, and no sentence says what it is

- **No person.** There is no named person anywhere: on a page, in a byline or in schema. Blog authors are 17 "Editorial Team" Person nodes.
- **Hidden experience claim.** "40 years of engineering expertise" exists only in the home meta description.
- **No defining sentence.**
  - The home body never names the business.
  - 31 pages use the third-person boilerplate "...as an AI implementation consultancy, plays a crucial role... they".
- **Missing pages.** `/about` and `/contact` return 404. There is no email address on the site, and booking works only with JavaScript.
- **What competitors do.** Every local competitor names a founder with Person schema, shows testimonials, or shows case results.
- **Fix.**
  - One visible sentence on the home page, in both breakpoint copies, saying who the business is, where it is and what it does.
  - An About page with the founder.
  - A Contact page.
  - A Person entity linked from the Organization.

  The structured data track drafted a founder template with every unknown value left `null`.

### H5. Made-up people read as real case studies

- **Unlabelled personas.** "Lisa Anderson, the owner of a boutique marketing agency in Miami" (`bill/overview-section.tsx:8`), "Maria Sanchez", "Lisa" and "Jane" appear with no "hypothetical" label at first mention.
- **How common.** 40 pages open with "Picture" or "Imagine", 99 sections open with a scene instead of an answer, and only 30 pages say "hypothetical" anywhere.
- **Fix.** Label each persona in its first sentence, or replace it with an anonymized real result. Put the answer before the story.

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
  - Create Clutch, DesignRush, GoodFirms, UpCity and TechBehemoths profiles with one name and one NAP.
  - Refresh the GBP category, photos and description.
  - Claim the brand handles.
  - Add each profile to `sameAs`.

### H8. Two blog posts have broken structured data

Both are verified.

- **Automated Content Generation post.** The JSON-LD in `backup/marketing/Automated Content Generation/blog/automated-content-generation-transforming-small-business-marketing.html` has no `@context`, so parsers read nothing from it.
- **AI Content Repurposing post.** `backup/marketing/AI Content Repurposing/blog/ai-content-repurposing.html:87-94` mixes `@graph` with node keys at the root. That creates an empty BlogPosting wrapping a TechArticle with a different `wordCount`.
- **Why nothing caught them.** The blog route inserts these blocks unchecked (`src/lib/content-writer-disabled2/content-disabled.ts:130-133`, `src/app/(site)/blog/[department]/[...slug]/page.tsx:66-69`).
- **This corrects SA.** SA's "JSON is valid on every page" is true only as JSON, not as JSON-LD.
- **Fix.** Repair both blocks. The structured data track's drafts 06 and 07 are corrected versions.

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

### H10. The approval workflows pillar's FAQ is about data entry

This is verified.

- **Wrong topic.** All 13 questions in `src/components/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/paa-section.tsx` ask about invoice data entry and extraction, and they are also marked up as FAQPage.
- **Misleading answer.** One says "our solution integrates seamlessly with QuickBooks, Xero, and Sage", although the business sells no product of its own.
- **Missing definition.** The pillar never defines an approval workflow, while the Data Entry pillar has no FAQ at all.
- **Fix.** Move the set to the Data Entry pillar, and give the approval pillar approval-routing questions plus an opening definition.

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
- **M3. No visible dates.**
  - None of the 90 tool pages shows a date, yet 42 quote prices. Bill's "$49 per user per month" has no date and no link.
  - Pillars have dates in JSON-LD only.
  - The hand-coded lead scoring post, the pattern every new post copies, has no date, byline or `article:published_time`.
  - Fix: show "Prices checked <date>" with a matching `dateModified`.
- **M4. The service area is inconsistent.**
  - The scheduler sentence on 428 pages says "serving small businesses in Broward and Palm Beach" (`src/components/shared/scheduler/scheduler-shell.tsx:147-148`, verified) and leaves out Miami-Dade.
  - The GBP description says the same, while the schema and about 60 pages include Miami-Dade.
  - Fix: use one service-area sentence everywhere.
- **M5. The name appears in four forms.**
  - "Geek at Your Spot" in the schema, "Geek @ Your Spot" on the GBP and LinkedIn, "Geek At Your Spot" on Facebook, and "Geek at Your Spot Llc" on 117 tool pages (verified).
  - The comment at `src/app/(site)/page.tsx:9-10` claims the schema matches the GBP, which is not true for the name.
  - `sameAs` still lists `https://twitter.com/geekatyourspot`, which leads to an X profile that returns 404.
  - The founding year is 2024 in the schema and 2025 on LinkedIn.
  - Fix:
    - Use one `name`, and keep the other forms as `alternateName` and `legalName`.
    - Fix "Llc".
    - Add `hasMap` with the GBP map URL.
    - Remove the X entry.
    - Pick one founding year.
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
- **M8. Pillar FAQs carry scraped questions with the wrong intent.**
  - The AP pillar asks job-seeker questions, such as "What are typical AP interview questions?" (`src/components/use-cases/accounting/accounts-payable/faq-section.tsx:37,45,57`).
  - The lead capture pillar asks about project pipelines.
  - The competing post pairs carry identical question sets.
  - Fix: keep only questions a buyer of the service would ask.
  - **Competing pairs fixed on 2026-10-20 (`5f8619d`).** The posts that repeated a question set were deleted under SA H6. The AP and lead capture pillar questions are still open.
- **M9. Titles use your labels, not searchers' words.** Your call, metadata only.
  - The content generation pillar says "intelligent content generation" 40 times and "AI content generation" 0 times.
  - "Intelligent resource planning" returns no coherent search results at all.
  - The AP and Cash Flow pillar H1s match the glossary term H1s.
  - Fix: keep the Intelligent labels, and put the searcher's term in the `<title>`, description and first paragraph.
- **M10. Blog titles are long.**
  - 25 of 32 run over 60 characters.
  - **Partly fixed on 2026-10-20 (`4c15437`).** The SA H7 titles are under 60 with the site name. 11 of the 25 remaining posts still run over 60; none of them was shortened in `df3130d`.
  - Setting `title: { absolute: post.headline }` in `src/app/(site)/blog/[department]/[...slug]/page.tsx:33` fixes 19 of them.
- **M11. Almost no images.**
  - 422 of 432 pages have no content image.
  - Of 57 article nodes, only 7 have a usable raster image. The rest use the placeholder, the 116 x 48 logo SVG (below Google's minimum), or nothing.
  - Fix: one real 1200 px or wider image per post and pillar, such as a configuration screenshot or a diagram, used in both `image` and `og:image`.
- **M12. The ad spend cluster holds the wrong tools.**
  - Anomalo, Great Expectations, Monte Carlo and Qualytics are enterprise data-observability tools.
  - Pipedrive and Zapier are filed in two categories each, and 6sense is filed under small business lead capture.
  - Removing tool pages costs nothing before launch.
- **M13. The site has two marketing hubs.** `/use-cases/marketing` (about 220 words) and `ai-marketing-systems`, which is the navbar target. Hubs also sit at three different URL levels. Choose one marketing hub.
- **M14. The structured data has broken internal links and no breadcrumbs.**
  - 85 of 90 tool pages point `subjectOf` at the pillar's URL instead of its `#article` node.
  - 35 relative `#software-*` ids make the same product a different entity on each page.
  - There is no BreadcrumbList on 431 pages. Breadcrumbs are one of the few rich results the site can still earn.

## Low

- **L1. Footer icon links have no accessible name.** The Facebook and LinkedIn links (`src/components/layout/footer.tsx:89`, `:111`) contain only an `aria-hidden` SVG. This fails Lighthouse's Agentic Browsing check on every page. Add `aria-label="Geek at Your Spot on Facebook"` and the LinkedIn equivalent. The same file has a stray `justify-center]` class at `:93`.
- **L2. Mobile render defects.**
  - The scheduler heading "Consultation" (`scheduler-shell.tsx:144`) is 408 px wide in a 390 px viewport, so it is clipped on 428 pages.
  - The home page uses 6 px labels (`clone-yourself.tsx:36,44`).
  - `use-cases.tsx:575` and `:1579` render an `<ol>` with non-`<li>` children.
  - `#C83803` link text fails contrast on some grounds.
- **L3. Image delivery.**
  - `quality={100}` (`hero-section.tsx:61`, `hero-image-component.tsx:21`) makes the home hero's 2x AVIF 222 KB.
  - No content image has `sizes`.
  - One hero image is reused on three pillars.
- **L4. The two-copy pattern.** Keep the pattern.
  - 2,280 duplicated HTML ids appear on 153 pages, and jump links land on the hidden phone copy. Adding `-lg` to ids in the desktop copy fixes this.
  - Non-rendering AI crawlers read both copies, so keep them identical.
- **L5. Em dashes.**
  - All 274 glossary titles use one (`src/app/(site)/glossary/[slug]/page.tsx:45`, "Term — Glossary").
  - 14 meta descriptions and 587 places in visible copy also use them.
- **L6. `www` in JSON-LD.** 24 JSON-LD URLs on 6 exported posts use the `www` host, including `mainEntityOfPage`.
- **L7. Glossary definitions are fragments.** Definitions such as "The accounting function responsible for..." have no subject, and on term pages the meta description gives a different definition from the visible one.
  - **Definitions fixed on 2026-10-20 (`25926fb`).** Every definition is now a full sentence with its subject. The meta description still comes from the older `shortSummary`, so it can still differ from the visible definition.
- **L8. The lead scoring model adds up to 120.** The positive criteria in the "100-point model" sum to 120 (verified), and there is no qualifying threshold. It is still the most citable post on the site, so fix it first. Its headings "People Also Ask ?" and "Map every lead source." also need cleaning.
- **L9. Leftover files.** `next.svg`, `vercel.svg`, `file.svg`, `window.svg`, `globe.svg` and an empty `mock-post.json` are served publicly.
- **L10. Metadata gaps.**
  - `twitter:site` is missing on 431 pages and `og:site_name` on 305.
  - 113 pages set the meta author "Development Team".
  - 10 hub pages lack the `googlebot` meta tag.
- **L11. Hub details.**
  - `6sense`, `contentstudio`, `pipedrive` and `zapier` are missing from the `/tools` grid and ItemList.
  - `/use-cases/accounting` is typed Article while its sibling hubs are CollectionPage.
  - `/blog` has no JSON-LD and no RSS feed.
  - `/tools/accounting`'s H1 does not match its title.
- **L12. Old-template tool pages.** 13 flat tool pages under `/tools/marketing/<tool>` use an older template of about 900 to 1,000 words, with no FAQ or pricing.
- **L13. Long URLs.** 98 URLs are over 100 characters, the longest 169. Shortening them is free only before launch, because removed URLs 404. Your call.
- **L14. Glossary topic mismatch.** About 59% of terms are chat and contact-center vocabulary, and 2% are accounting, although accounting is half the tool pages. Accounting terms people search for have no page: accounts receivable, three-way match, economic nexus, DSO and invoice OCR.
- **L15. YMYL payroll pillar.** The payroll misclassification pillar competes with law firms. Frame it as implementation work, cite Florida statute, and add a not-legal-advice note.
- **L16. Smaller local items.**
  - Hours appear only in JSON-LD.
  - There is no bilingual statement, though Miami competitors offer Spanish.
  - Chamber membership would add a local citation. The Greater Delray Beach Chamber is running an AI series.

## Decisions for you

None of these is mine to make.

1. **The `vercel.app` host.** Use a host-scoped noindex header, or remove the domain in Vercel.
2. **llms.txt.** A draft covering 19 pages is in the AI access track's scratch folder. The llms.txt format is Markdown by specification. It is a published site file, not corpus, but your Markdown rule makes this your call. No major engine has confirmed it reads llms.txt.
3. **New page types.** A South Florida service page, up to three area pages, About, Contact, a cost or engagement page, case studies once real ones exist, and comparison pages.
4. **Glossary scope.** Re-scope it to the clusters, and decide whether off-topic terms stay. Decided 2026-10-20: all 274 terms stay, rewritten to your definition spec (SA H5, `25926fb`).
5. **Metadata titles** carrying searcher terms next to the Intelligent labels.
6. **Slugs.** Shorten long ones before launch, or keep them. The twelve slugs that contained "smb" were shortened on 2026-10-20 (`5f8619d`); the rest are unchanged.
7. **One marketing hub.** Choose between `/use-cases/marketing` and `ai-marketing-systems`.
8. **The ad spend cluster.** Re-scope it.
9. **The GBP.** Choose the primary category, the service area and the founding year.
10. **Pricing and language.** Whether to publish price ranges, and whether to state bilingual service.
11. **Bytespider and CCBot.** Whether to block them at launch.

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
| geo-llmstxt | Generation | Draft only, see decision 2 |
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
