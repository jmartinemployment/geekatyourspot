# Partner benchmark, 2026-10-22

geekatyourspot.com measured against the 105 technology partners in `plans/partner-keyword-research-2026-10-21/partners.csv`, on technical structure, metadata and content depth. Every number is a measurement taken on 2026-10-22 from the live pages with the scripts in `plans/partner-benchmark-2026-10-22/`. Each gap names the skill or audit item that makes it one. Nothing on the site was changed.

This is the second version. The first ranked the two-copy page layout as the top gap; it is not one, and the corrections are listed at the end.

## What was measured

| | Pages |
|---|---|
| geekatyourspot.com | 19: home, about, methodology, the use-case index, the accounting department page, four pillars (AP automation software, approval workflow, cash flow forecasting, receptionist), three tool pages (Ramp, BILL, Tipalti), three blog posts, the tools, blog and glossary indexes, one glossary term |
| Partner home pages | 98 of 105 by plain HTTPS fetch; 7 read in a browser (appendix B) |
| Partner product pages | 177: up to two per partner from `partners.csv`, skipping pricing, about and sign-up pages |
| Partner guides | 62: for each partner, its highest-ranking page in Google's top ten for a relevant keyword in the keyword research, when that page is a blog post, guide, glossary entry or resource |

**How.** Raw HTML over HTTPS, desktop Chrome user agent, no JavaScript run. One parser and one set of checks for every page. "Content region" is `<main>`, else `<article>`, else the body without header, nav, footer and aside. Word counts are given two ways: as the HTML carries them, and with each text block counted once, because the site renders every section twice (below). "Numbers per 500 words" counts digit tokens, percentages and dollar amounts in the content region, so a pricing table or a year counts. "Outside hosts" are hosts linked from the content region other than the page's own site and share or social hosts (LinkedIn, X, Facebook, YouTube, G2, Trustpilot, HubSpot redirects and the like). Flesch reading ease uses a syllable heuristic, comparable between pages here, not to a published score. A partner median is a median of pages. Site level: robots.txt, llms.txt, the sitemaps robots.txt names or `/sitemap.xml`, http to https, response headers.

**Reproduce.** `python3 fetch.py all`, `python3 extra.py`, `python3 measure.py`, `python3 aggregate.py` in the benchmark folder. `measured.json.gz` holds every page's record; `aggregate-output.txt` holds the tables.

## The gaps, in order

Each is below the partner norm and named by one of your skills or audit items.

1. **Figures and their sources.** The pillars state 0.0 to 1.2 numbers per 500 words, the tool pages 0.7 to 2.1, the blog posts 0.6 to 1.3. Partner guides: 7.5 at the median; partner product pages 5.8. The pillars link to no outside host; the tool pages link only to the partner; two blog posts link to one partner each. 41 of 62 partner guides link to at least one outside host, 2 at the median, and the hosts linked most are quickbooks.intuit.com (6 guides), then state revenue departments (ncdor.gov, floridarevenue.com), the IRS, Nacha, Investopedia, Statista, Forrester and HBR (2 guides each). Skills: geo-citability category 4, statistical density ("5+ specific statistics per 500 words. All claims backed by named sources or dates"); ai-seo ("Cite sources: add authoritative references with links", "Add dates to all statistics"). Audit: H3, items 34 and 35.
2. **Tables.** None on any site page measured. 22 of 62 partner guides and 13 of 177 product pages have one. Skill: geo-citability category 3 ("Tables for comparisons"). Audit: item 40.
3. **Titles over 60 characters on the tool pages.** Ramp 62, BILL 62, Tipalti 81; the suffix " | Geek @ Your Spot LLC" is 23 of each. Partners over 60: 17 of 98 home pages, 34 of 177 product pages, 17 of 62 guides. Skill: seo-page ("Title tag: 50-60 characters"). The other 89 tool pages follow the same title pattern and were not measured.
4. **Descriptions under 130 characters, and slogan openings.** 9 of 19 site pages: the three tool pages (87, 114, 104), two pillars (112, 113), the three blog posts (111, 103, 97), the glossary term (128). Partners under 130: 17 of 98, 27 of 177, 11 of 62. 8 of 19 site descriptions open on "Explore" (6), "Learn" or "Streamline"; partners 34 of 337. Skills: seo-page ("150-160 characters"), seo-content-brief as applied in the meta description rule of 2026-10-22 (130 to 150, a verb and the outcome, never "Explore" or "Discover"). Audit: item 38.
5. **No visible author or date.** No site page has a byline or a `<time>` element; the JSON-LD carries dates on 10 of 19 pages and on none of the tool pages. Partner guides: 47 of 62 carry a date in JSON-LD, 19 a visible byline, 12 a `<time>`. Skills: geo-content, Expertise, scores "Author credentials visible (bio, degrees, certifications)" and flags "No visible author" as weak; ai-seo ("Add dates to all statistics"). The about page exists, and the JSON-LD names Jeff Martin as author on the three posts; on the pillars, the tool pages and methodology the author is the company.
6. **Readability, advisory.** Flesch 7 to 28 on three pillars, all three tool pages and all three posts; 54 on the receptionist pillar. Partner guides 41 at the median, 19 of 62 at 50 or over. Paragraphs average 51 to 92 words on the pillars against 30 on partner guides; sentences are level (18 to 21 words against 19). seo-content says Flesch reading ease "is NOT a direct Google ranking factor" and is a content quality indicator; the GEO audit's H6 lists it (Flesch 11 to 33 on these pages against 62 to 66 on the methodology page). Advisory here for the same reason.
7. **Images.** The tool pages and blog posts carry three images, all the site logo (header and footer). Two pillars carry 9 and 11 content images; the other two carry none. Partner guides: 24 images at the median; product pages 40. Audit: item 41.
8. **robots.txt at launch.** The file today blocks every agent and names no sitemap, which is right until `ALLOW_INDEXING` is set. 85 of 105 partners name a sitemap in robots.txt. 101 of 105 admit GPTBot, 2 block it (Adobe Firefly blocks every AI crawler; Midjourney blocks the training crawlers and admits the retrieval ones), and 2 (TaxConnex, Lightyear) answered no robots.txt request. 6 block Bytespider. Skill: geo-technical 1.1 and 1.2. Already a launch gate in the 2026-10-20 audit; this is the partner count.

**Two smaller things, backed by a skill, not ranked above:** three of the seven site pages with a questions section (the AP automation pillar's and the cash flow pillar's "People Also Ask", the fraud post's "Frequently Asked Questions") emit no FAQPage while the other four do. seo-schema says Google retired FAQ rich results for all sites on May 7, 2026 and flags an existing FAQPage at Info rather than for removal, so this is consistency between pages, not ranking. The tool pages describe a partner's product as TechArticle with no SoftwareApplication; 49 of 177 partner product pages describe their product as SoftwareApplication, and 20 of the 101 tool data files already hold such an object (seo-competitor-pages gives a SoftwareApplication block for software comparison pages).

## Where the site is above the partner norm

- **Structured data.** JSON-LD on all 19 pages, two or three blocks a page with one `@graph`, 52 to 237 properties a page: Organization and LocalBusiness with address, hours, a founder and three sameAs links, WebSite, BreadcrumbList and Person on all 19, WebPage on 13, and Article, TechArticle or BlogPosting with an author on 12 of 19 (Jeff Martin on the three posts; the company on the pillars, the tool pages and methodology). Partners: JSON-LD on 77 of 98 home pages, 130 of 177 product pages, 54 of 62 guides; 41, 36 and 43.5 properties at the median of the pages that carry it; Organization on 67 of 98 home pages, WebSite on 50, WebPage on 34, BreadcrumbList on 21. 21 partner home pages carry none, among them Gusto, BILL, Deel, Xero, FreshBooks, Hootsuite and Semrush.
- **Metadata completeness.** All 19 pages have a title, a description, a self canonical, all six Open Graph tags and a summary_large_image card. Partners: all six Open Graph tags on 43 of 98 home pages, 72 of 177 product pages and 28 of 62 guides; a description missing on 5, 13 and 1; a self canonical on 86 of 98.
- **Technical hygiene.** Six of six security headers (partner median 3; Permissions-Policy on 23 of 105). Every image has alt text and width and height (partners: all images with alt on 8 of 98 home pages and 29 of 177 product pages; alt coverage 66 to 74 percent at the median). Text server-rendered on every page (89 of 98 partner home pages). No heading level skipped. Time to first byte 149 to 622 ms on 18 pages (the blog index took 2,409 ms on this fetch) against partner medians of 267 to 406.
- **llms.txt**, 8.2 KB with 32 links. 51 of 105 partners publish one (49 by fetch; ADP's and NetSuite's were read in the browser).
- **Length.** With each block counted once, a pillar is 2,630 to 3,607 words (the receptionist pillar 7,811), a tool page 2,591 to 3,058, a blog post 2,039 to 2,724. Partner guides are 2,074 at the median (1,374 to 2,723); product pages 574; home pages 597.
- **Question headings and lists.** Three pillars carry 9 to 12 distinct question headings and the receptionist pillar 4; partner guides 4 at the median. Lists: 14 and 18 on two pillars against 6.

## Measured, and not a gap

- **Every section is rendered twice**, a `lg:hidden` block for phones and a `hidden lg:block` block for desktops, with the same text in both (`plans/hand-coded-use-case-page-layout-prompt.md`). So 15 of 19 pages have two H1s with the same text, on every page but the four index pages 42 to 54 percent of the text blocks are exact repeats, and a body sentence appears four times in the HTML, twice in markup and twice in the Next.js payload. The first SEO audit (M7, 2026-10-20) kept both blocks and judged identical duplicate H1s as sending no conflicting signal, and Googlebot Smartphone indexes the phone copy (seo-technical, mobile-first indexing). Partners: one H1 on 79 of 98 home pages, 155 of 177 product pages, 51 of 62 guides; two partner home pages repeat as much or more (GoCardless 75 percent of blocks, and 70 percent on its product page; OnPay 48 percent). Recorded as data. The one measurable effect is bytes: a 2,630-word pillar is 196 KB.
- **hreflang.** None on the site; on 34 of 98 partner home pages (Stripe 89 alternates, OpenAI 69, Sage 40, Adobe Firefly 31, Rippling 27; QuickBooks 28 and ADP 26 read in the browser; Tipalti 6, Ramp 5). One language, one market; item 24 (a bilingual statement, and possibly Spanish versions of key pages) is open.
- **Sitemap in one file**, 452 URLs, lastmod on the 25 blog posts only. 44 of 105 partners use an index; 71 of 105 stamp lastmod; median 255 URLs. A pillar's JSON-LD already carries `dateModified`, which the sitemap could carry too; small.
- **Page weight.** 62 to 365 KB a page against partner medians of 199 to 310 KB; the text-to-HTML ratio of 0.19 to 0.34 on content pages is two to seven times the partner medians of 0.05 to 0.09. Inline script is 84 to 134 KB on the content pages against partner medians of 26 to 34 KB, almost all of it the Next.js payload, which is 46 to 56 percent of every page's bytes.
- **Hosting and stack.** Vercel and Next.js; partners sit behind Cloudflare (65), Vercel (14), nginx (7), CloudFront (5), Fastly (3), and show HubSpot scripts (34), Next.js (24), Webflow (24), WordPress (19).

## The tables

### Technical structure

| Measure | geekatyourspot.com (19 pages) | Partner home pages (98) | Partner product pages (177) | Partner guides (62) |
|---|---|---|---|---|
| Server-rendered text, 150+ words in the HTML | 19 | 89 | 176 | 62 |
| `<main>` landmark | 19 | 67 | 107 | 37 |
| Self canonical | 19 | 86 | 162 | 59 |
| Exactly one H1 | 4 | 79 | 155 | 51 |
| Text blocks that are exact repeats, median | 42 to 54 percent on 15 pages, 3 to 8 percent on the four index pages | 1 percent | 0 | 3 percent |
| All images have alt | 19 | 8 | 29 | 13 |
| All images have width and height | 19 | 10 | 31 | 7 |
| Security headers of six | 6 | median 3 across 105 sites | | |
| http redirects to https | yes | 103 of 105 | | |
| HTML bytes, median | 62 to 365 KB | 310 KB | 222 KB | 199 KB |
| Text to HTML ratio, median | 0.19 to 0.34 content, 0.05 to 0.06 index | 0.047 | 0.055 | 0.09 |
| Inline script bytes, median | 35 to 193 KB | 34 KB | 32 KB | 26 KB |
| Time to first byte, median | 149 to 622 ms; the blog index 2,409 | 406 | 267 | 335 |

### Metadata

| Measure | geekatyourspot.com (19) | Home pages (98) | Product pages (177) | Guides (62) |
|---|---|---|---|---|
| Title 50 to 60 characters | 4 | 41 | 57 | 25 |
| Title over 60 | 3 | 17 | 34 | 17 |
| Title ends with the brand | 19 | 205 of 337 pages | | |
| Description present | 19 | 93 | 164 | 61 |
| Description 130 to 160 | 10 | 51 | 90 | 40 |
| Description under 130 | 9 | 17 | 27 | 11 |
| Description opens on Explore, Discover, Learn, Streamline, Unlock, Transform, Elevate, Empower | 8 | 2 | 15 | 17 |
| All six Open Graph tags | 19 | 43 | 72 | 28 |
| og:image | 19 | 87 | 147 | 59 |
| Twitter card | 19 | 89 | 160 | 58 |
| hreflang | 0 | 34 | 59 | 19 |
| JSON-LD present | 19 | 77 | 130 | 54 |
| JSON-LD properties, median of pages that carry it | 52 to 237 | 41 | 36 | 43.5 |
| Organization | 19 | 67 | 94 | 46 |
| WebSite, WebPage, BreadcrumbList | 19, 13, 19 | 50, 34, 21 | 52, 61, 67 | 22, 43, 34 |
| Person | 19 | 17 | 14 | 39 |
| Article, TechArticle or BlogPosting | 12 | 2 | 8 | 45 |
| datePublished or dateModified | 10 | 24 | 38 | 47 |
| FAQPage | 4 | 15 | 48 | 16 |
| SoftwareApplication, WebApplication or Product | 0 | 36 | 49 | 4 |
| sameAs | 19 | 61 | 78 | 28 |
| Visible byline | 0 | 8 | 19 | 19 |
| `<time>` element | 0 | 1 | 7 | 12 |

### Content depth

Site values are per page: the four pillars, then the three tool pages, then the three blog posts. Site word counts are with each block counted once.

| Measure | Pillars | Tool pages | Blog posts | Partner guides, median (p25 to p75) | Partner product pages, median |
|---|---|---|---|---|---|
| Words | 2,630 / 2,796 / 3,607 / 7,811 | 2,591 / 2,825 / 3,058 | 2,724 / 2,039 / 2,609 | 2,074 (1,374 to 2,723) | 574 |
| Distinct H2 in the content | 7 / 8 / 8 / 13 | 8 / 8 / 9 | 9 / 8 / 8 | 10 (6 to 12) | 6 |
| Distinct H3 in the content | 22 / 14 / 28 / 4 | 0 / 0 / 10 | 4 / 0 / 0 | 11 (4 to 18) | 7 |
| Question headings | 9 / 9 / 12 / 4 | 1 / 0 / 11 | 4 / 0 / 0 | 4 (2 to 8); 58 of 62 have one | 0; 65 of 177 have one |
| Questions section (FAQ, People Also Ask, Q&A heading) | 4 of 4 | 1 of 3 | 1 of 3 | 32 of 62 | 65 of 177 |
| Paragraph, average words | 54 / 56 / 51 / 92 | 58 / 64 / 55 | 62 / 61 / 61 | 29.7 (23 to 39) | 19.7 |
| Sentence, average words | 20 / 18 / 20 / 21 | 19 / 19 / 18 | 17 / 17 / 17 | 18.9 | 16.5 |
| Flesch reading ease | 7 / 28 / 9 / 54 | 23 / 23 / 22 | 27 / 28 / 25 | 41 (34 to 52); 19 of 62 at 50+ | 41; 44 of 177 at 50+ |
| Numbers per 500 words | 1.2 / 0.0 / 1.0 / 0.4 | 2.1 / 2.1 / 0.7 | 1.3 / 1.0 / 0.6 | 7.5 (3.4 to 10.6) | 5.8 |
| Outside hosts linked from the content | 0 / 0 / 0 / 0 | 1 / 1 / 1, the partner | 1 / 1 / 0, a partner | 2 (0 to 4); 41 of 62 have one | 0; 53 of 177 have one |
| Tables | 0 | 0 | 0 | 0 (0 to 1); 22 of 62 have one | 0; 13 of 177 |
| Lists | 14 / 4 / 18 / 4 | 6 / 4 / 2 | 1 / 3 / 3 | 6 (3 to 12) | 1 |
| Images | 12 / 3 / 14 / 3 | 3 / 3 / 3 | 3 / 3 / 3 | 24 (14 to 49) | 40 |
| Visible byline, `<time>` | none | none | none | 19 of 62, 12 of 62 | 19 of 177, 7 of 177 |
| "According to" | 1 / 0 / 0 / 0 | 0 / 0 / 0 | 2 / 4 / 0 | 18 of 62 use it | 4 of 177 |

**The partner guides that carry the most of these features**, from the measurements, words counted once a block: Zamp's Florida sales tax guide (2,141 words, 5 tables, 38 numbers per 500 words, a byline, links to floridarevenue.com), Numeral's North Carolina sales tax guide (2,557 words, 4 tables, 19 numbers per 500, a byline, links to ncdor.gov, files.nc.gov and streamlinedsalestax.org), Frase's AI agents for SEO (4,034 words, 3 tables, 14 numbers per 500, a questions section, links to bcg.com), Leadfeeder's B2B sales guide (3,696 words, a byline, a questions section, links to forrester.com, hbr.org and contentmarketinginstitute.com), Ramp's purchase order guide (3,135 words, 4 tables, a questions section, no outside link), Upflow's days sales outstanding guide (2,781 words, a table, a byline, 12 numbers per 500, no outside link). Each is in appendix A with its URL.

### Site level

| Measure | geekatyourspot.com | Partners (105) |
|---|---|---|
| robots.txt answers | yes | 97 by fetch and 6 more in the browser; TaxConnex and Lightyear not read |
| robots.txt names a sitemap | no | 85 |
| robots.txt blocks every agent | yes, pre-launch | 1 |
| Names an AI crawler in robots.txt | no | 22 (21 by fetch, Midjourney in the browser) |
| Blocks GPTBot | yes, with everything else, pre-launch | 2: Adobe Firefly, Midjourney |
| Blocks ClaudeBot or PerplexityBot | same | 1: Adobe Firefly |
| Blocks Bytespider | same | 6 |
| llms.txt | yes | 51 (49 by fetch; ADP and NetSuite in the browser) |
| Sitemap reachable | one file, 452 URLs | 90; 44 indexes; median 255 URLs; 18 over 1,000 |
| lastmod | 25 of 452 | 71 of 105 |
| X-Robots-Tag noindex | yes, pre-launch | 0 |
| HSTS, CSP, X-Content-Type-Options, Referrer-Policy, X-Frame-Options, Permissions-Policy | all six | 78, 60, 56, 53, 48, 23 |

## Corrections to the first version

- The two-copy layout and its two H1s were ranked the top gap and put to you as a decision. They are not a gap: your first audit settled it (M7), and Googlebot Smartphone indexes the phone copy. They are data now, in "Measured, and not a gap".
- "No FAQ section on the pillars" was wrong. All four pillars have a "People Also Ask" section; the first check looked only for the words "FAQ" and "Frequently Asked". The questions-section row now matches FAQ, Frequently Asked, People Also Ask, Common Questions and Q&A on both sides.
- "52 of 62 partner guides link out" counted share buttons (LinkedIn, X, Facebook) inside the content region. Without share and social hosts it is 41 of 62, 2 hosts at the median.
- "Six Open Graph tags on about a third of partner pages" was a guess; it is 43 of 98, 72 of 177 and 28 of 62.
- The tool pages' and posts' three images were described as two logos and a hero; they are the site logo three times.
- The descriptions of the exemplar guides now say only what was measured on each, and their word counts are with each block counted once, as the site's are.
- Partner JSON-LD property medians were 30, 25 and 38.5 with pages that carry no JSON-LD counted as zero; they are now the medians of the pages that carry it.

## Appendix A: every partner

One row per partner, home page first, from `appendix.md` in the benchmark folder. Words are the raw count in the content region. "Guide" is the best-ranking guide page from the keyword research where one was found. "AI agents named in robots" lists the AI user agents the robots.txt names, almost always to allow; a block is said in brackets. "Outbound links" in the last column counts every link to another host, share buttons included.

| Partner | Category | Home words | Content page words | Guide words | Title len (home) | Desc len (home) | JSON-LD types on home | H1s (home) | hreflang | llms.txt | AI agents named in robots | Security headers (of 6) | Sitemap URLs | Guide: FAQ / outbound links / byline |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 6sense.com | Lead generation, prospecting and sales data | not fetched (403) | | | | | | | | no | | | | |
| acumatica.com | ERP, inventory and operations | 992 | 708 | 2153 | 48 | 175 | Organization | 1 | 6 | no | - | 4 | 15 | FAQ / 0 / - |
| adp.com | Payroll, HR and contractor payments | not fetched (403) | | | | | | | | no | | | | |
| ahrefs.com | SEO and search visibility | 1406 | 719 | 3202 | 48 | 128 | Organization | 1 | 14 | no | - | 5 | 7 | - / 38 / byline |
| airbase.com | Expense and spend management | 148 | - | - | 51 | 403 | - | 0 | 0 | no | - | 2 | 0 | - |
| anrok.com | Sales tax and tax compliance | 1163 | 375 | - | 71 | 118 | FAQPage, Organization, SoftwareApplication, WebPage, WebSite | 3 | 0 | yes | - | 0 | 668 | - |
| anyword.com | Content writing and copywriting | 1551 | 842 | 1853 | 44 | 157 | - | 63 | 0 | no | - | 3 | 289 | - / 4 / - |
| apollo.io | Lead generation, prospecting and sales data | 872 | 313 | 2897 | 49 | 141 | AggregateRating, Organization, Person, WebSite | 1 | 4 | yes | CCBot, ChatGPT-User, ClaudeBot, GPTBot, Google-Extended, OAI-SearchBot, PerplexityBot, anthropic-ai | 3 | 155 | FAQ / 18 / byline |
| approvalmax.com | Accounts payable and bill pay | 631 | 587 | 4380 | 11 | 147 | Article, BusinessAudience, Corporation, ItemList, OfferCatalog, OnlineBusiness,  | 1 | 0 | yes | - | 5 | 98 | FAQ / 35 / - |
| avalara.com | Sales tax and tax compliance | 1228 | 895 | 4180 | 33 | 150 | schema:ContactPoint, schema:ListItem, schema:Organization, schema:PostalAddress, | 1 | 10 | no | - | 5 | 709 | FAQ / 61 / - |
| avidxchange.com | Accounts payable and bill pay | 441 | 167 | 1243 | 47 | 132 | BreadcrumbList, Corporation, Organization, PropertyValue, PropertyValueSpecifica | 1 | 0 | no | - | 6 | 14 | - / 0 / - |
| bill.com | Accounts payable and bill pay | 820 | 880 | 3409 | 59 | 163 | - | 1 | 0 | no | - | 1 | 1,843 | FAQ / 11 / - |
| botpenguin.com | Chatbots and customer support | 177 | 1551 | - | 57 | 160 | Organization, Person, SoftwareApplication, VideoObject, WebPage, WebSite | 1 | 0 | yes | CCBot, ChatGPT-User, GPTBot, Google-Extended, PerplexityBot, anthropic-ai | 3 | 1,910 | - |
| cashflowfrog.com | Cash flow forecasting and FP&A | 957 | 792 | 2811 | 58 | 156 | AggregateOffer, Organization, SoftwareApplication, WebSite | 1 | 1 | yes | Applebot-Extended, ChatGPT-User, ClaudeBot, GPTBot, Google-Extended, OAI-SearchBot, PerplexityBot | 1 | 338 | FAQ / 0 / - |
| castmagic.io | Content writing and copywriting | 40 | 1296 | - | 37 | 182 | AggregateOffer, Organization, SoftwareApplication, WebSite | 1 | 5 | yes | - | 1 | 904 | - |
| centime.com | Accounts payable and bill pay | 734 | 736 | 1177 | 55 | 154 | OfferCatalog, Organization, Person, Service, WebPage, WebSite | 1 | 0 | yes | - | 3 | 538 | - / 8 / - |
| chaserhq.com | Accounts receivable and collections | 991 | 490 | 1567 | 48 | 155 | AggregateRating, Organization, SoftwareApplication, WebPage, WebSite | 1 | 0 | no | - | 4 | 593 | FAQ / 0 / byline |
| clearscope.io | SEO and search visibility | 704 | 475 | 1853 | 49 | 242 | - | 1 | 0 | no | - | 5 | 0 | - / 5 / - |
| clockwork.ai | Cash flow forecasting and FP&A | 7157 | 5180 | 2468 | 54 | 211 | FAQPage | 1 | 0 | no | - | 3 | 155 | - / 6 / byline |
| copy.ai | Content writing and copywriting | 653 | 468 | - | 38 | 148 | - | 1 | 0 | no | - | 3 | 3,291 | - |
| corpay.com | Accounts payable and bill pay | 1000 | 797 | 4582 | 44 | 59 | FinancialService, GeoShape, Organization, Service, WebPage, WebSite | 0 | 18 | yes | CCBot, ClaudeBot, GPTBot, Google-Extended, PerplexityBot | 1 | 3,655 | FAQ / 0 / - |
| cubesoftware.com | Cash flow forecasting and FP&A | 111 | 1111 | 9277 | 28 | 154 | Organization, Person | 1 | 0 | yes | - | 3 | 701 | - / 90 / - |
| dapta.ai | Phone answering and AI receptionist | 1597 | 509 | 2660 | 58 | 117 | BreadcrumbList, Organization, PropertyValueSpecification, ReadAction, SoftwareAp | 1 | 3 | yes | Bytespider, CCBot, ClaudeBot, GPTBot, Google-Extended, PerplexityBot (blocks Bytespider) | 1 | 11 | FAQ / 1 / - |
| datarails.com | Cash flow forecasting and FP&A | 1002 | 891 | - | 61 | 167 | BreadcrumbList, Organization, PropertyValueSpecification, ReadAction, SoftwareAp | 1 | 0 | yes | ChatGPT-User, GPTBot, OAI-SearchBot | 5 | 19 | - |
| deel.com | Payroll, HR and contractor payments | 746 | 1437 | 583 | 54 | 154 | - | 1 | 12 | yes | CCBot, ChatGPT-User, ClaudeBot, GPTBot, Google-Extended, OAI-SearchBot, PerplexityBot, anthropic-ai | 4 | 18,619 | - / 0 / - |
| dext.com | Document capture and data extraction | 1732 | 1503 | 1167 | 106 | 156 | AggregateRating, FAQPage, MobileApplication, Organization, WebApplication | 1 | 8 | no | - | 4 | 148 | FAQ / 3 / - |
| dryrun.com | Cash flow forecasting and FP&A | 415 | 1917 | 1130 | 51 | 198 | Organization, SoftwareApplication | 1 | 0 | no | - | 3 | 271 | - / 1 / byline |
| erp.intuit.com | ERP, inventory and operations | 1558 | 1102 | 2359 | 69 | 172 | AggregateRating, BreadcrumbList, BusinessAudience, FAQPage, Organization, PriceS | 1 | 0 | no | - | 3 | 320 | FAQ / 5 / - |
| factors.ai | Lead generation, prospecting and sales data | 1493 | 3571 | 3464 | 59 | 150 | AggregateRating, Organization, Person, Review, SoftwareApplication | 1 | 0 | yes | - | 1 | 815 | FAQ / 3 / byline |
| fathomhq.com | Cash flow forecasting and FP&A | 644 | 1029 | 2916 | 57 | 161 | AggregateRating, Organization, WebApplication | 1 | 0 | yes | Bytespider (blocks Bytespider) | 3 | 544 | - / 5 / - |
| firefly.adobe.com | Video, image and design generation | 37 | - | - | 49 | 176 | Organization, WebApplication | 1 | 31 | no | - (blocks Applebot-Extended, Bytespider, CCBot, ChatGPT-User, ClaudeBot, GPTBot, Google-Extended, OAI-SearchBot, PerplexityBot, anthropic-ai) | 5 | 30 | - |
| float.com | ERP, inventory and operations | 714 | 651 | 2192 | 61 | 160 | Organization | 1 | 0 | no | - | 5 | 530 | FAQ / 9 / - |
| floatapp.com | Cash flow forecasting and FP&A | 923 | 1189 | 1013 | 41 | 179 | AggregateRating, Organization, Person, Review, SoftwareApplication | 3 | 0 | no | - | 1 | 94 | - / 2 / - |
| frase.io | SEO and search visibility | 1882 | 1669 | 4603 | 0 | 153 | AggregateRating, FAQPage, Organization, SoftwareApplication, WebSite | 1 | 0 | yes | Applebot-Extended, CCBot, ChatGPT-User, ClaudeBot, GPTBot, Google-Extended, OAI-SearchBot, PerplexityBot, anthropic-ai | 6 | 219 | FAQ / 8 / - |
| freshbooks.com | Bookkeeping and accounting software | 1868 | 1352 | - | 65 | 154 | - | 1 | 24 | no | Bytespider, ChatGPT-User, ClaudeBot (blocks Bytespider) | 4 | 15 | - |
| gocardless.com | Payments and payment processing | 2330 | 1285 | 840 | 47 | 115 | - | 1 | 0 | no | - | 4 | 238 | - / 0 / - |
| gusto.com | Payroll, HR and contractor payments | 1235 | 1185 | - | 65 | 96 | - | 1 | 0 | yes | - | 2 | 21 | - |
| helmhq.ai | SEO and search visibility | 2298 | 1720 | - | 59 | 221 | - | 2 | 0 | no | - | 3 | 92 | - |
| highradius.com | Accounts receivable and collections | 1397 | 1236 | 3515 | 60 | 131 | BreadcrumbList, Organization, WebPage, WebSite | 2 | 5 | yes | Applebot-Extended, Bytespider, CCBot, ChatGPT-User, ClaudeBot, GPTBot, Google-Extended, OAI-SearchBot, PerplexityBot, anthropic-ai (blocks Bytespider, CCBot) | 5 | 199 | FAQ / 1 / - |
| hootsuite.com | Social media management | 1368 | 1434 | - | 54 | 131 | - | 1 | 6 | yes | Applebot-Extended, ChatGPT-User, ClaudeBot, GPTBot, Google-Extended, OAI-SearchBot, PerplexityBot | 4 | 4,034 | - |
| hyperwriteai.com | Content writing and copywriting | 1221 | 611 | - | 33 | 299 | - | 1 | 0 | yes | - | 3 | 898 | - |
| imagine.art | Video, image and design generation | 1382 | 1923 | - | 51 | 149 | FAQPage, SoftwareApplication | 1 | 0 | yes | - | 2 | 15 | - |
| invoiced.com | Accounts receivable and collections | 1713 | 3644 | 1793 | 49 | 137 | BreadcrumbList, Organization, PropertyValueSpecification, ReadAction, WebPage, W | 1 | 0 | yes | - | 1 | 10 | - / 12 / - |
| jasper.ai | Content writing and copywriting | 1529 | 505 | 3256 | 44 | 118 | AggregateRating, FAQPage, Organization, SoftwareApplication, WebSite | 1 | 0 | yes | Applebot-Extended, Bytespider, CCBot, ChatGPT-User, ClaudeBot, GPTBot, Google-Extended, OAI-SearchBot, PerplexityBot, anthropic-ai | 3 | 830 | FAQ / 12 / byline |
| jirav.com | Cash flow forecasting and FP&A | 1025 | 451 | 1626 | 47 | 152 | AccountingService, GeoCoordinates, VideoObject | 1 | 0 | no | - | 3 | 365 | - / 3 / - |
| justworks.com | Payroll, HR and contractor payments | 737 | 626 | 1910 | 67 | 194 | Organization, WebPage | 1 | 0 | yes | - | 0 | 2,560 | - / 7 / - |
| koala.sh | SEO and search visibility | 1404 | 880 | - | 50 | 180 | AggregateRating, OnlineBusiness, SoftwareApplication | 1 | 0 | no | - | 3 | 175 | - |
| leadfeeder.com | Lead generation, prospecting and sales data | 1651 | 1527 | 3967 | 47 | 105 | AggregateRating, FAQPage, Organization, WebSite | 1 | 2 | yes | - | 3 | 6 | FAQ / 13 / byline |
| lightyear.cloud | Accounts payable and bill pay | 1358 | 938 | - | 59 | 116 | AggregateRating, BreadcrumbList, Organization, SoftwareApplication, VideoObject, | 1 | 1 | no | - | 4 | 0 | - |
| liveflow.com | Bookkeeping and accounting software | 18 | 986 | - | 57 | 144 | Organization, SoftwareApplication | 1 | 0 | no | - | 2 | 1,085 | - |
| liveplan.com | Cash flow forecasting and FP&A | 541 | 1342 | 2460 | 59 | 147 | Organization, Person, WebSite | 1 | 0 | no | - | 5 | 1,664 | FAQ / 11 / - |
| lobbystack.com | Phone answering and AI receptionist | 1162 | 983 | - | 58 | 155 | AggregateOffer, CreativeWork, FAQPage, Organization, Product, SoftwareApplicatio | 1 | 5 | yes | - | 6 | 2 | - |
| lusha.com | Lead generation, prospecting and sales data | 2555 | 644 | - | 63 | 137 | BreadcrumbList, Organization, PropertyValueSpecification, ReadAction, WebPage, W | 1 | 7 | no | - | 6 | 24 | - |
| manychat.com | Chatbots and customer support | not fetched (403) | | | | | | | | no | | | | |
| marketmuse.com | SEO and search visibility | 945 | 592 | 2765 | 58 | 142 | Article, Organization, Person, WebPage, WebSite | 1 | 0 | no | - | 0 | 8 | - / 21 / - |
| medius.com | Accounts payable and bill pay | 1543 | 1128 | 3908 | 48 | 157 | - | 1 | 4 | yes | - | 3 | 4 | FAQ / 0 / - |
| melio.com | Accounts payable and bill pay | 932 | 1528 | 2173 | 63 | 116 | BreadcrumbList, Organization, ReadAction, WebPage, WebSite | 1 | 0 | yes | CCBot, ChatGPT-User, ClaudeBot, GPTBot, Google-Extended, OAI-SearchBot, PerplexityBot | 3 | 6 | FAQ / 11 / - |
| microsoft.com | AI platform or model | 24 | 3116 | - | 70 | 0 | - | 0 | 0 | no | - | 0 | 62 | - |
| midjourney.com | Video, image and design generation | not fetched (403) | | | | | | | | no | | | | |
| myaifrontdesk.com | Phone answering and AI receptionist | 2546 | 2304 | - | 56 | 149 | FAQPage, Organization, SoftwareApplication, WebSite | 1 | 0 | yes | - | 2 | 10,105 | - |
| netsuite.com | ERP, inventory and operations | not fetched (403) | | | | | | | | no | | | | |
| nextiva.com | Phone answering and AI receptionist | 2515 | 925 | - | 52 | 156 | Organization, ReadAction, WebPage, WebSite | 1 | 0 | yes | Applebot-Extended, CCBot, ChatGPT-User, ClaudeBot, GPTBot, Google-Extended, OAI-SearchBot, PerplexityBot, anthropic-ai | 4 | 165 | - |
| numeral.com | Sales tax and tax compliance | 703 | 294 | 2751 | 47 | 104 | Organization | 1 | 0 | yes | - | 0 | 439 | FAQ / 33 / byline |
| odoo.com | ERP, inventory and operations | 2977 | 2451 | - | 0 | 0 | - | 0 | 0 | no | - | 3 | 0 | - |
| onpay.com | Payroll, HR and contractor payments | 1518 | - | - | 47 | 120 | BreadcrumbList, Organization, Person, PropertyValueSpecification, ReadAction, Un | 1 | 0 | no | - | 0 | 16 | - |
| openai.com | AI platform or model | 247 | 467 | - | 30 | 126 | - | 0 | 69 | no | - | 3 | 43 | - |
| parseur.com | Document capture and data extraction | 1655 | 1502 | 2223 | 38 | 177 | AggregateRating, Certification, FAQPage, Organization, Person, PropertyValue, So | 1 | 13 | yes | - | 3 | 5,806 | FAQ / 20 / - |
| paystand.com | Accounts receivable and collections | 863 | 1069 | 1525 | 55 | 146 | Corporation, FinancialService, WebPage, WebSite | 1 | 0 | yes | - | 3 | 623 | - / 9 / - |
| perplexity.ai | AI platform or model | 0 | 909 | - | 10 | 117 | - | 0 | 0 | no | - | 6 | 6 | - |
| pictory.ai | Video, image and design generation | 104 | 1785 | - | 51 | 154 | AggregateRating, BreadcrumbList, Organization, PropertyValueSpecification, ReadA | 1 | 0 | yes | Applebot-Extended, CCBot, ChatGPT-User, ClaudeBot, GPTBot, Google-Extended, OAI-SearchBot, PerplexityBot | 1 | 18 | - |
| plooto.com | Accounts payable and bill pay | not fetched (403) | | | | | | | | yes | | | | |
| prophix.com | Cash flow forecasting and FP&A | 509 | 1223 | 2982 | 54 | 131 | BreadcrumbList, Corporation, WebPage | 0 | 10 | yes | - | 5 | 25 | FAQ / 11 / - |
| pulseapp.com | Cash flow forecasting and FP&A | 833 | 361 | - | 5 | 0 | - | 1 | 0 | no | - | 0 | 0 | - |
| quaderno.io | Sales tax and tax compliance | 933 | 2143 | 1708 | 63 | 155 | AggregateOffer, FAQPage, Organization, SoftwareApplication, WebSite | 1 | 4 | yes | CCBot, GPTBot, Google-Extended | 2 | 642 | - / 4 / - |
| quickbooks.intuit.com | Bookkeeping and accounting software | not fetched (no answer) | | | | | | | | no | | | | |
| ramp.com | Expense and spend management | 830 | 693 | 3512 | 69 | 192 | Organization | 1 | 5 | no | - | 4 | 278 | FAQ / 7 / - |
| remote.com | Payroll, HR and contractor payments | 788 | 365 | 206 | 55 | 158 | Organization, Person, Review, WebPage, WebSite | 1 | 24 | no | - | 6 | 42,626 | - / 2 / byline |
| rippling.com | Payroll, HR and contractor payments | 1243 | 1886 | - | 58 | 120 | AggregateRating, Organization, Product | 1 | 27 | yes | - | 2 | 7,152 | - |
| rytr.me | Content writing and copywriting | 2466 | 304 | - | 51 | 198 | AggregateOffer, BreadcrumbList, FAQPage, Organization, SoftwareApplication, WebS | 1 | 0 | no | - | 1 | 160 | - |
| sage.com | Bookkeeping and accounting software | 599 | 614 | 2145 | 47 | 170 | Corporation, WebSite | 2 | 40 | no | - | 5 | 25 | FAQ / 0 / - |
| scalenut.com | SEO and search visibility | 1311 | 1528 | - | 50 | 136 | Organization | 0 | 0 | no | - | 3 | 1,376 | - |
| semrush.com | SEO and search visibility | 3663 | 7318 | - | 0 | 0 | - | 0 | 0 | no | - | 3 | 0 | - |
| smith.ai | Phone answering and AI receptionist | 41 | 1001 | 2672 | 50 | 202 | AggregateRating, Audience, FAQPage, OfferCatalog, Organization, Service, Service | 1 | 0 | yes | - | 3 | 2,675 | - / 10 / byline |
| snitcher.com | Lead generation, prospecting and sales data | 944 | 364 | - | 58 | 153 | Organization, WebSite | 1 | 0 | yes | GPTBot, Google-Extended, PerplexityBot, anthropic-ai | 1 | 101 | - |
| sovos.com | Sales tax and tax compliance | 330 | 173 | 932 | 32 | 138 | BreadcrumbList, Organization, PropertyValueSpecification, ReadAction, WebPage, W | 2 | 0 | no | - | 6 | 17 | FAQ / 7 / - |
| stampli.com | Accounts payable and bill pay | 495 | 2307 | 1413 | 51 | 138 | BreadcrumbList, Organization, PropertyValueSpecification, ReadAction, WebPage, W | 1 | 2 | yes | ChatGPT-User, ClaudeBot, GPTBot, Google-Extended, OAI-SearchBot, PerplexityBot | 5 | 14 | FAQ / 2 / - |
| stripe.com | Payments and payment processing | 1757 | 1357 | 2411 | 54 | 149 | Organization, Person, WebSite | 2 | 89 | yes | - | 5 | 9 | - / 5 / - |
| takethehelm.app | Cash flow forecasting and FP&A | 302 | 295 | 1563 | 4 | 0 | - | 0 | 0 | no | - | 1 | 5 | - / 0 / byline |
| tax1099.com | Sales tax and tax compliance | 1951 | 1303 | - | 76 | 193 | AggregateRating, BreadcrumbList, Product, SoftwareApplication | 1 | 0 | yes | - | 0 | 358 | - |
| taxcloud.com | Sales tax and tax compliance | 1983 | 608 | 1440 | 63 | 136 | BreadcrumbList, Organization, PropertyValueSpecification, ReadAction, WebApplica | 1 | 0 | yes | - | 0 | 13 | - / 2 / byline |
| taxconnex.com | Sales tax and tax compliance | 1129 | 970 | 705 | 53 | 150 | BreadcrumbList, Organization, WebPage, WebSite | 1 | 0 | no | - | 3 | 0 | - / 4 / - |
| taxjar.com | Sales tax and tax compliance | 582 | 685 | 579 | 48 | 102 | BreadcrumbList, Organization, PropertyValueSpecification, ReadAction, WebPage, W | 1 | 0 | no | - | 6 | 5 | - / 5 / byline |
| thetaxvalet.com | Sales tax and tax compliance | 848 | 1719 | 1809 | 29 | 154 | Organization, VideoObject, WebPage, WebSite | 1 | 0 | no | - | 3 | 533 | - / 2 / - |
| tidio.com | Chatbots and customer support | 1483 | 254 | - | 57 | 146 | AggregateOffer, AggregateRating, BreadcrumbList, CreativeWork, Organization, Pro | 1 | 8 | no | - | 3 | 4 | - |
| tipalti.com | Accounts payable and bill pay | 820 | 1316 | - | 56 | 158 | Organization, Person, WebPage, WebSite | 1 | 6 | no | - | 5 | 3 | - |
| trends.google.com | SEO and search visibility | 380 | 1336 | - | 13 | 93 | Organization, WebSite | 1 | 0 | no | - | 4 | 0 | - |
| upflow.io | Accounts receivable and collections | 1118 | 1122 | 3115 | 56 | 151 | Organization, Person | 1 | 4 | yes | - | 2 | 1 | FAQ / 8 / byline |
| venasolutions.com | Cash flow forecasting and FP&A | 801 | 318 | 1515 | 73 | 157 | Organization | 1 | 0 | no | - | 4 | 1,754 | - / 3 / - |
| versapay.com | Accounts receivable and collections | 528 | 2074 | 1402 | 47 | 151 | OfferCatalog, Organization, Person, Service, SoftwareApplication, WebPage, WebSi | 1 | 0 | no | - | 6 | 7 | - / 7 / - |
| voksha.com | Phone answering and AI receptionist | 2275 | 1654 | - | 62 | 171 | AggregateOffer, BreadcrumbList, FAQPage, Organization, SoftwareApplication, WebP | 1 | 0 | yes | Applebot-Extended, Bytespider, CCBot, ChatGPT-User, ClaudeBot, GPTBot, Google-Extended, OAI-SearchBot, PerplexityBot, anthropic-ai | 2 | 1,605 | - |
| waveapps.com | Bookkeeping and accounting software | 1651 | 623 | 3514 | 46 | 137 | Corporation, Product | 2 | 0 | no | - | 1 | 939 | FAQ / 1 / byline |
| writesonic.com | SEO and search visibility | 587 | 951 | 2063 | 56 | 173 | AggregateRating, Organization, SoftwareApplication, WebSite | 1 | 1 | yes | - | 1 | 102 | FAQ / 9 / - |
| xero.com | Bookkeeping and accounting software | 795 | 299 | 1605 | 50 | 152 | - | 1 | 14 | yes | - | 2 | 13 | FAQ / 3 / byline |
| zamp.com | Sales tax and tax compliance | 559 | 413 | 2075 | 51 | 158 | BusinessAudience, OfferCatalog, Organization, Service, SoftwareApplication, WebP | 1 | 0 | yes | - | 3 | 4,471 | - / 9 / byline |
| zoho.com | Workflow automation and integrations | 592 | 873 | 2852 | 42 | 178 | Organization, Person, WebSite | 1 | 0 | yes | - | 3 | 540 | - / 1 / - |

## Appendix B: the seven partners read in a browser

These hosts answer a plain HTTPS request with 403 or not at all, so they were read in Chrome on the rendered page, which is the page after JavaScript, not the raw HTML the other rows use. robots.txt and llms.txt were fetched from inside the page.

| Partner | Title (length) | Description length | H1s | JSON-LD types | hreflang | llms.txt | AI agents named in robots |
|---|---|---|---|---|---|---|---|
| adp.com | Payroll, HR and Tax Services \| ADP Official Site (48) | 115 | 1, empty text | Organization, Person, Place, DefinedTerm, BusinessAudience | 26 | yes ("ADP LLM DATA FILE") | none; 4 sitemaps, 55 disallow lines |
| 6sense.com | 6sense - The ABM Platform Powered by Revenue Intelligence (57) | 151 | 1 | WebSite, Organization, FAQPage, SoftwareApplication, Review, Person | 0 | no | none |
| netsuite.com | Business Software, Business Management Software \| NetSuite (58) | 129 | 1 | none | 0 | yes ("NetSuite - LLM Guidelines (Minimal)", August 2025) | none |
| quickbooks.intuit.com | QuickBooks: Official Site \| Smart Tools. Better Business. (58) | 158 | 1 | Organization, Corporation, Website, VideoObject, SearchAction | 28 | not read | none; 33 sitemaps |
| manychat.com | Chat Marketing Made Easy with Manychat (38) | 120 | 1 | Organization, WebSite, WebPage, FAQPage, DefinedTerm | 4 | no | none; 91 disallow lines |
| midjourney.com | Midjourney (10) | 119 | 4 (navigation items) | none | 0 | not read | GPTBot, CCBot, anthropic-ai, Bytespider, Amazonbot, Google-Extended, Applebot-Extended, meta-externalagent, blocked as training bots while retrieval bots are allowed |
| plooto.com | Plooto: Your Business Payments Streamlined & Simplified (55) | 137 | 1 | Organization, WebSite, WebPage, SoftwareApplication, Offer, AggregateRating, Person | 0 | yes | OAI-SearchBot, PerplexityBot, Amazonbot, Applebot-Extended, CCBot, ClaudeBot, Google-Extended, GPTBot, meta-externalagent allowed; Bytespider blocked |

Lightyear (home 318 KB, WordPress) and Perplexity (home a 17 KB JavaScript shell) answered curl with browser headers and are in appendix A.
