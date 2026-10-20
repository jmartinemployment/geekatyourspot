# Competitor audit, 2026-10-20

This audit compares geekatyourspot.com with the 19 sites crawled as `consultancy-competitors` on the morning of 2026-10-20, using every installed skill that applies. The site is pre-launch and sends `X-Robots-Tag: noindex, nofollow` on every page, so every finding is something to fix or decide before launch.

It sits alongside three earlier audits, cited by ID:
- `plans/seo-audit-2026-10-20.md` (SA);
- `plans/geo-seo-audit-2026-10-20.md` (GEO);
- `plans/competitor-pages-audit-2026-10-20.md` (CP), which covered all 58 crawled competitor sites through the comparison-page lens.

This audit's findings are CA1 to CA16. Each one names the track evidence behind it (CC, LB, SX, TC or SD, described under Method).

## The state audited, and what changed since

- **Audited.** The deployed site at commit `8ce8b28`: all 426 sitemap URLs, fetched on 2026-10-20.
- **Changed since.** Another session committed fixes as `d6989dc`, and they were deployed on 2026-10-20; SA's completion status lists them. The deployed site now sends the new home title, the three headers and the `founder` node. The **Status** column below says, for each finding, whether `d6989dc` covers it. Checked in the source and on the deployed site on 2026-10-20:
  - **Done in `d6989dc`:** the home title (SA H2), the Organization node on every page with `founder`, `hasMap` and the Business Profile in `sameAs` (SA M5), three of the security headers (CA14), and the approval workflows FAQ (GEO H10).
  - **Not done:** `geo`, the Twitter `sameAs` entry, the founding year, the home statistics, the Tidio and tax claims, the "Editorial Team" bylines, `/contact`, the `vercel.app` host, and every new page type.

## Method

**Data.**
- **The crawl.** The 19 sites' pages were read from the crawl store through GeekAPI. Each run ID is in that site's profile.
- **Live fetches.** These filled the crawl's gaps, at no more than one request a second per domain:
  - Nerd Teks' two AI pages, where the crawler read 17 and 9 words;
  - Adominus, whose text sits in a script bundle;
  - a few Visionary Solutions Group (VSG) articles;
  - `robots.txt`, `llms.txt`, sitemaps and headers for every site;
  - one page each from Pisano Designer and OneWave AI, which turned up in search.
- **Outside the sites.** Web search (49 result sets), one public Google Maps request per business, BBB, Yelp, Clutch, DesignRush and GoodFirms by search, and the Common Crawl web graph.

**What could not be measured.**
- Search volumes, rankings and backlinks: DataForSEO, Search Console, Moz and Ahrefs are not connected.
- Answers from ChatGPT, Perplexity or Gemini: there are no accounts to test them.
- People Also Ask and local pack data.
- Reddit, which was blocked.
- PageSpeed for the rivals. The site's own PageSpeed run finished, but the browser tab group was closed twice before it could be read, so performance is not compared.

**Tracks and skills.**

| Track | Skills | Evidence IDs | Report |
|---|---|---|---|
| Profiles | `competitor-profiling` | none | 19 profiles in `development/competitor-profiles/`, plus `_summary-2026-10-20.md` |
| Local and brand | `seo-local`, `seo-maps` (Tier 0, public data), `geo-brand-mentions`, `seo-backlinks` (free sources) | LB1 to LB9 | scratch `tracks/local-brand.md` |
| Content and citability | `geo-citability`, `geo-content`, `seo-content`, `seo-aeo-best-practices`, `seo-page` | CC1 to CC8 | scratch `tracks/content-citability.md` |
| Technical and AI crawlers | `seo-technical`, `geo-technical`, `geo-crawlers`, `geo-llmstxt` (detection only), `seo-images` | TC1 to TC9 | scratch `tracks/technical-crawlers.md` |
| Search and AI visibility | `seo-sxo`, `ai-seo`, `seo-geo`, `geo-platform-optimizer`, `seo-cluster` (light) | SX1 to SX9 | scratch `tracks/serp-ai-visibility.md` |
| Structured data | `seo-schema` | SD (in CA13) | scratch `tracks/schema-compare.json` |
| Synthesis | `seo-competitor-pages`, `competitors`, `site-architecture`, `pricing` | CA1 to CA16 | this file |

**Skills not run.**
- `seo-dataforseo` and `seo-google` need credentials.
- `geo-schema` was not run separately; its checks overlap `seo-schema`'s.
- `content-strategy` is covered by the cluster sketch in the search track.
- `seo-hreflang`, `seo-ecommerce`, `geo-compare`, `geo-proposal` and `geo-prospect` do not apply.
- The Nimble and Bright Data competitor skills need services that are not connected.

**Rules kept.**
- The profiling skill asks for every page to be saved as a Markdown scrape. That would convert HTML to Markdown, which CLAUDE.md forbids, so the profiles cite the crawl run ID and page URLs instead.
- No form was submitted and no one was contacted.
- Text aimed at AI systems was recorded and not followed: Softico's `/ai-use` page, Adominus's "Company facts for AI assistants", three `llms.txt` files, and one search result title.

## The scores against the rivals

Each score uses its own skill's formula. They are heuristics, not Google signals.

| Measure | The site | The rivals | Source |
|---|---|---|---|
| AI citability, mean of sampled pages | 36 (8 pages; home 22, the lowest of all 32 pages) | 56 (24 pages; median 61.5) | CC |
| Content quality (`seo-page`) | 55 | 54 | CC |
| Business E-E-A-T (`geo-content`) | 39 | DeepRails 66, The AI Consulting Lab 59, Perceptive 58, Softico 54, C&W 51, VSG 48 | CC |
| Local SEO (`seo-local`) | 23 | C&W 74, Capstone 66, CPT 54 | LB |
| Brand authority (`geo-brand-mentions`, Reddit excluded) | 4 | C&W 32, Capstone 26, Nerd Teks 14; every AI-first rival 0 to 4 | LB |
| Google reviews | 0 | C&W 95, Capstone 73, CPT 67, Nerd Teks 46, Gold Coast AI 9 | LB |
| AI crawler access (`geo-crawlers`) at launch | 95 | 10 of 19 at 100 | TC |
| `geo-technical`, measurable 53-point slice, at launch | 49 | median 47 | TC |
| Search result sets in which the business appears (of 49) | none: the site is noindexed | VSG 3, Perceptive 1, Gold Coast AI 1, the other 16 none | SX |

**The picture.** The site is level with or ahead of the rivals on the build: server rendering, host hygiene, honest sitemap dates, clean name, address and phone, and content structure. It is behind on proof:
- no reviews;
- no defining sentence;
- no published number of its own;
- no named author outside `/about`;
- no directory listings;
- no page for a place.

The rivals that win on proof are mostly the IT firms that have added AI, not the AI specialists.

## The 19 sites

Closeness is a 1 to 5 judgement from the profiles. Reviews are Google ratings from the public Maps data. Each site's profile is `development/competitor-profiles/<domain with dots as hyphens>.md`.

| Site | Where | What they sell | Closeness | Published prices | Google reviews | AI page for Delray Beach or Boca Raton |
|---|---|---|---|---|---|---|
| visionarysolutionsgroup.com | Boca Raton, a suite with a mailbox number | AI training, strategy and builds; serves small and mid-size businesses | 5 | Audit $2,500; workshops from $2,500; builds $15,000 to $45,000 | none found | No. Miami, Fort Lauderdale and South Florida pages |
| nerdteks.com | Plantation mailbox; Orlando on BBB and Yelp | IT firm with packaged AI agents | 4 | AI agents $699, $1,495 and $2,950+ a month | 5.0 from 46 | No |
| aicspro.com | Miami, city only | One consultant, German G. Lopez, 30 years in IT | 3 | A fixed fee, no figure | none | No. Miami page |
| softico.ai | None | AI consulting and custom builds | 3 | Blueprint from $4,500 | none (Clutch and DesignRush profiles) | No |
| goldcoastai.pro | Wellington on its profile, a mailbox; West Palm Beach in schema | n8n and GoHighLevel agents, websites | 3 | Sites $297 to $1,997; chatbot $397 a month; voice receptionist $697 a month | 5.0 from 9 | No |
| adominus.ai | San Antonio, Texas | National AI consultancy for small and mid-size businesses | 3 | Behind a checkout; its articles give $2,000 to $25,000 a project | none | No. Miami page |
| azuldigital.ai | Hialeah | Bilingual AI marketing studio | 3 | Sites $3,500 to $7,500; funnels $2,500 to $5,000 | none | No |
| theaiconsultinglab.com | St. Petersburg, a post office box | AI builds, audits and training | 3 | Training from $15,000 | 5.0 from 44 | No |
| cpt-florida.com | Fort Lauderdale, a suite | Phones and IT, with AI inside the phone systems | 3 | Phones from $19.95 a month; IT from $25 a day; no AI price | 4.9 from 67 | IT pages only; AI appears in blog titles that list six or more cities |
| cwnow.com | Stuart, a street office | IT firm with a Copilot-centred AI service | 3 | None | 4.7 from 95 | No; its city pages stop at Palm Beach Gardens |
| nextekit.com | Coral Springs, a street office | IT firm with an AI page | 3 | None | 5.0 from 6 | IT pages only |
| spotlightdigitalfl.com | Stuart, address hidden | Marketing agency reselling a GoHighLevel CRM with "AI employees" | 3 | CRM $297 to $997 a month | 5.0 from 7 | Marketing pages only |
| cybercon-solutions.com | Cooper City and Davie (a Miami Beach mailbox) | IT firm with thin AI pages | 2 | Websites $750 to $1,500 | none | No |
| capstoneitservices.com | Palm Beach Gardens, a suite | IT firm with one generic AI page | 2 | None | 5.0 from 73 | IT pages for Boca Raton only |
| perceptive-analytics.com | New York; headquartered in Hyderabad | National analytics and AI firm with a Miami page | 2 | Miami AI pilot $25,000 to $75,000 | 5.0 from 2 | No |
| deeprails.com | None | AI agency and an AI quality software product | 2 | Software $49 to $499 a month; agency from $10,000 | none | No |
| artificialintelligencefl.com | None, a toll-free number | Anonymous statewide AI services site, likely lead generation | 2 | "$500/month ... to $8,000+" | none | Lists cities only |
| insouthflorida.com | None | Miami digital marketing, two AI pages | 2 | None | none | No |
| boomi.com | Conshohocken, Pennsylvania | Enterprise integration software | 1 | $99 a month, pay as you go | not applicable | No |

**The closest rivals outside both crawl lists.** The search track found firms that hold more of these searches than any of the 19:
- **Pisano Designer.** Based in Delray Beach. Its `/ai-consultant-delray-beach/` page names Radu Pisano, gives a CISSP credential, and has the H1 "An AI consultant in Delray Beach who will tell you when you don't need AI." It publishes "$750" for a process diagnostic, automation from "$2,500" and an AI receptionist from "$3,000". All three were checked on the page on 2026-10-20.
- **Authority AI** (Fort Lauderdale; in 7 result sets).
- **Raptor Tech** (Wellington).
- **OneWave AI** (Fort Lauderdale and Miami).
- **ActBold** (Miami).
- **Forefront Industries** (Delray Beach, on GoodFirms by a search summary; not opened).

None of these has been crawled or profiled.

## Summary of findings

| ID | Finding | Priority | Builds on | Status at `d6989dc` |
|---|---|---|---|---|
| CA1 | No reviews, while the IT firms selling AI show 46 to 95 | Critical | GEO C3 | Open |
| CA2 | No Delray Beach page. None of the 19 has an AI page for Delray Beach or Boca Raton, but eight other sites do | Critical | GEO C2, CP2, SA H2 | Open (the home title is done) |
| CA3 | No directory profiles, and the AI summaries name firms through them | High | GEO H7 | Open |
| CA4 | No sentence says who the business is, where it is and what it does | High | GEO H4, SA M4 | Open |
| CA5 | The site publishes no result and no number of its own, and shows two unsourced statistics on the home page | High | GEO H3, GEO decision 10 | Open |
| CA6 | Jeff Martin appears on 1 of 426 pages, and no page shows a date | High | GEO H4, SA M4 | Open |
| CA7 | Vendor claims read as the business's own | High | GEO H2, GEO H10 | Partly done (H10's FAQ is gone) |
| CA8 | No page answers the cost, do-it-yourself or IT-provider questions | High | CP3, CP4 | Open |
| CA9 | The first step has three names, and its page has 143 words and no price | Medium | CP4 | Open |
| CA10 | The neutral tool comparison is open, and vendors hold those searches with their own guides | Medium | GEO H12, CP1, GEO M9 | Open |
| CA11 | The Business Profile has changed since GEO H7, and still misdescribes the business | Medium | GEO H7, SA M5 | Open (your action in Google) |
| CA12 | Decide whether clients come to the address | Medium | SA M5 | Your call |
| CA13 | Structured data: three properties missing, one link unconfirmed, and four rival errors to avoid | Medium | SA M5, GEO H9 | Partly done |
| CA14 | At launch: the `vercel.app` duplicate, the headers, the crawler rule and llms.txt | Medium | GEO launch gates 2 and 3, GEO decisions 2 and 11 | Partly done (three headers) |
| CA15 | The name collides with a Miramar IT firm, and there are no local links | Medium | GEO H7, SA M5 | Open |
| CA16 | Stock AI wording is more frequent than on any AI-specialist rival | Low | GEO H6 | Open |

## Critical

### CA1. No reviews, while the IT firms selling AI show 46 to 95

**Evidence (LB1).**
- **The IT firms.** Google ratings from the public Maps data on 2026-10-20: C&W 4.7 from 95, Capstone 5.0 from 73, CPT 4.9 from 67 and Nerd Teks 5.0 from 46.
- **Reviews in front of buyers.** C&W prints "★ 4.7 stars · 95 reviews · Since 1985" on its AI integration page, and Nerd Teks prints "Rated 5.0 on Google Based on 43+ Reviews" on every page.
- **The AI-first rivals.** Of the seven among the 19, only Gold Coast AI has a rating, from 9 reviews.
- **The site.** No rating.
- **The threshold.** The `seo-local` skill puts the review threshold at 10. Ten reviews would put the site ahead of every AI-first rival here.

**Fix.**
- Run GEO C3's plan with 10 as the first target: the review link, asked of every client, with no pre-screening.
- Once reviews exist, show the count in visible text next to the booking button, as C&W does, and link it to the profile.
- Do not add AggregateRating to the site's own Organization node. Google gives no stars for reviews a business marks up about itself, and CPT's and Spotlight's marked-up counts (10 and 4) already disagree with their profiles (67 and 7).

### CA2. No Delray Beach page. None of the 19 has an AI page for Delray Beach or Boca Raton, but eight other sites do

**Evidence.**
- **The 19 (LB2).** None has an AI page for Delray Beach or Boca Raton.
  - VSG, ten miles away in Boca Raton, has AI pages for Miami, Fort Lauderdale and South Florida, but none for its own town.
  - The Delray Beach pages that exist are for IT support (Nextek, CPT) and marketing (Spotlight).
- **Beyond the 19 (SX1).** Deeper search results return eight sites with a Delray Beach AI page: Raptor Tech, Sentie, Delpuma, Web Palm Beaches, AI-Powered Consulting, TekSorter, DR3AM Systems and Pisano Designer. AI-Powered Consulting was in the 2026-10-14 crawl; the other seven are in neither crawl.
  - Only Pisano Designer and this site are actually in Delray Beach.
  - This corrects CP2, which called Delray Beach "the one the rivals have left nearly empty". That was true of the 58 crawled sites, not of the search results.
- **What wins.** All 27 local result sets are held by city service pages. The site's only candidate is the home page.
- **The shape of the winning pages (SX1):**
  - an H1 that names the place;
  - 1,000 to 2,300 words;
  - `LocalBusiness`, `Offer` and `FAQPage` markup;
  - an entry price;
  - a visible FAQ;
  - a named person or a street address.
- **The local content to match.** The most original city page near Delray Beach is Capstone's Boca Raton IT page (93% unique text). Spotlight's Delray Beach FAQ asks local questions ("How can my business stand out near Atlantic Avenue?").
- **The templates to avoid.**
  - Spotlight: 58 city pages with a median of 0% unique text.
  - CPT: 332 slugs that list cities.
  - Nextek: prints its Coral Springs street address with "Delray Beach" swapped in.

**Fix.**
- Build the Delray Beach and Palm Beach County page first, then the South Florida page GEO C2 proposes.
- Give it what only this business can say:
  - the office at 2025 NW 18th Street, in the body copy;
  - the on-site radius;
  - the local industries served;
  - the first step and its price (CA9);
  - the Person from `/about`;
  - a visible FAQ.
- Give each department its own H2 section, accounting automation and lead capture, linking to the pillars (SX6). That puts "accounts payable automation" next to the place without a page that competes with the pillars (SA H6). None of the eight Delray Beach pages leads with accounting.
- Keep to GEO C2's limit of three area pages.

## High

### CA3. No directory profiles, and the AI summaries name firms through them

**Evidence.**
- **Directories in the search results (SX2).** DesignRush appeared in 9 of 49 result sets, GoodFirms in 9 and Clutch in 7.
  - FloridAI Agency and Startup Miracle appeared only through their profiles.
  - The summaries took rate, team size, founding year and minimum budget from those profiles.
- **Rivals' listings (LB3).** The strongest rivals are on BBB (C&W accredited A+ since 1988, Nerd Teks accredited A+, Capstone A+ but not accredited), Yelp and Clutch. Of the seven AI-first rivals, only Softico (Clutch, DesignRush) and Gold Coast AI (GoodFirms) appear anywhere.
- **The site.** No listing at all (GEO H7).

**Fix.**
- First Yelp and BBB, which `seo-local` lists among the sources ChatGPT draws on. Then Clutch, DesignRush and GoodFirms, under AI consulting with the Delray Beach address.
- Fill the fields the summaries quote: entry price or rate, minimum project, team size, founding year and service area.
- Use one name and one address everywhere, and add each profile to `sameAs`.

### CA4. No sentence says who the business is, where it is and what it does

**Evidence.**
- **The site (CC1).**
  - The home page scores 22 on citability, the lowest of the 32 pages sampled.
  - No site page has a full defining sentence. The nearest is the scheduler line, which carries no business name and omits Miami-Dade.
- **The rivals.** Five rival pages have one. AICS Pro's, VSG's South Florida page, Azul's AI consulting page, C&W's AI page and Spotlight's AI CRM page each name the business, the place and the service in one place. The content track judges these the pages an AI answer would most likely quote for "AI consultant for small business in South Florida".
- **What answer engines do without one (SX4).** They fill missing facts with guesses. One summary called OneWave AI "headquartered in Delray Beach", which its own page never says. The summaries also discounted pages with no local address.

**Fix.**
- Write one sentence naming Geek @ Your Spot LLC, Delray Beach, the three counties and what the business does.
- Put it on the home page in both breakpoint copies, and use the same service area everywhere (GEO M4).
- This is GEO H4's first fix, still open.

### CA5. The site publishes no result and no number of its own, and shows two unsourced statistics on the home page

**Evidence.**
- **The rivals (CC2, CC6).**
  - Seven rival pages publish results with numbers. DeepRails names clients; VSG and The AI Consulting Lab publish figures.
  - The rivals' first steps carry prices: VSG $2,500, Softico $4,500, AI-Powered Consulting $2,500, Pisano Designer $750.
- **The site.**
  - Its numbers come from example personas or from vendors.
  - The home page shows "40% Cost Reduction" and "3x Productivity" with no source. They are still in `src/components/home/clone-yourself.tsx` at `d6989dc`.

**Fix.**
- Source the two home figures or remove them. They also undercut any comparison page that faults a rival's unchecked numbers.
- Publish one real result as soon as a client agrees, with the client named or anonymized and the measure stated.
- The price of the first step is CA9.

### CA6. Jeff Martin appears on 1 of 426 pages, and no page shows a date

**Evidence (CC3).**
- The name appears only on `/about`.
- Every article's author is the business. "Editorial Team" is still in five source files at `d6989dc`.
- No sampled page shows a published or reviewed date.
- **The rivals.** Their founders appear on their service pages: AICS Pro's German G. Lopez on every page, and VSG's Ronnie Bailey with credentials on the home page.
- **Where the site scores.** The About page lifted the site's Expertise above every IT firm's except C&W's. Among the AI-specialist rivals, its Trust (8) is the lowest and its Experience (7) ties Gold Coast AI's for the lowest.

**Fix.**
- A byline with Jeff Martin on the pillars, tool pages and posts, linked to `/about#jeff-martin`.
- A visible "reviewed" date on the tool pages (SA M4).

### CA7. Vendor claims read as the business's own

**Evidence (CC4).** These were checked on the deployed site:
- The Tidio page says "Our customers average a 75% resolution rate with our conversational AI", and later cites Tidio's own 67%.
- The tax law pillar says "Our solutions update in real-time, ensuring that your business remains compliant, no matter how often the laws change."
- The approval workflows FAQ said "our solution integrates seamlessly". That one is gone in `d6989dc` (GEO H10). The other two are still in the source.

**Fix.**
- Attribute vendor claims to the vendor ("Tidio reports...").
- Remove promises the business cannot make. It sells no software, so "our solutions" reads as a software vendor.

### CA8. No page answers the cost, do-it-yourself or IT-provider questions

**Evidence (SX3).**
- **Who holds these searches.** No local firm holds "how much does an AI consultant cost", "AI consultant vs doing it yourself" or "AI implementation cost". Small consultancies hold them with plain guides that give numeric ranges: a UK solo consultant in 6 sets, and a Denver and Phoenix firm in 2.
- **What that shows.** A small, new site can hold a decision search.
- **The IT-provider question.** "Should my IT company handle AI" is held by IT providers' own blogs, Mindcore's among them. Eleven of the 58 crawled sites are IT firms now selling AI, and six of them are among the 19.
- **The site.**
  - "Managed IT", "IT provider", "IT company" and "MSP" appear on 0 of its 426 pages.
  - Its decision content sits inside 25 "right fit" sections, each about one workflow.

**Fix.** Build the decision pages CP3 recommends, each answer-first with dated figures and sources:
- what an AI consultant costs;
- what AI implementation costs (no URL appeared in both of those result sets, so `seo-cluster` treats them as two pages);
- doing it yourself or hiring help;
- your IT provider or an AI implementer, naming no firm (CP7).

## Medium

### CA9. The first step has three names, and its page has 143 words and no price

**Evidence (SX7).** The first step goes by three names:
- "Get Your Free AI Assessment", a button on 148 pages, matching the home page's JSON-LD Offer of "Free AI Assessment" at price "0";
- "free consultation", on 422 pages;
- "Architectural Infrastructure Audit", the 143-word page, with two H1s, no JSON-LD and no price.

No page says what the free assessment covers. The readiness searches are won by priced assessment pages ($1,250 at one firm) and by quizzes.

**What the rivals charge for a first step (CA5, `pricing`).**

| Rival | First step | Price |
|---|---|---|
| Pisano Designer | Process diagnostic | $750 |
| AI-Powered Consulting | Assessment | $2,500 |
| VSG | Blueprint audit | $2,500 |
| Softico | Workflow blueprint | $4,500 |
| AICS Pro | Readiness assessment | A fixed fee, no figure |

The site's is free, which is a price, and its markup already says so.

The `pricing` skill treats a competitor's price as a data point, not a target. It also makes a point that holds whatever you decide: an AI answer can quote a price only if it is in the page text and in matching `Offer` markup.

**Fix.**
- Decide whether the free assessment and the audit are one offer or two. Give each one name and one price (GEO decision 10, your call).
- Then make the page say what is reviewed, what is delivered, how long it takes, who does it and what it costs, with an FAQ and `Service` and `Offer` markup.
- Link it from the area pages and the cost page.

### CA10. The neutral tool comparison is open, and vendors hold those searches with their own guides

**Evidence (SX5).**
- **Who holds the specialty searches.** Vendors the site reviews, with their own guides: Stampli, TaxCloud, My AI Front Desk (six near-duplicate posts in one set) and Pipedrive.
  - Each guide favours its author's product, and the summaries said so.
  - Two "best AI receptionist" roundups appear, one from a Palm Beach and Broward agency.
- **What none of the 19 does.** No South Florida rival compares the tools the site reviews (CP1).
  - Adominus, from Texas, names Fathom, Float and Dryrun.
  - Capstone's blog names Xero, Digits, Vic.ai and Ramp.
  - C&W names tax software for CPA firms (Lacerte, ProSeries, Drake).
  - These correct CP1's line that accounting software appears only as QuickBooks and Xero. None of them is a comparison.
- **What a good comparison page carries.** Boomi's 11 "Boomi vs" pages show the pattern: a footnote to the vendor's own page for each claim, readers sorted by situation, and a plain statement of when the other tool fits. They lack dates and authors, which the site's pages should have.

**Fix.**
- The CP1 group pages, starting with the receptionist and chatbot groups, where roundups already win.
- Put the searcher's term in each title next to the Intelligent label, for example "AI Receptionists Compared" (GEO M9, GEO decision 5).

### CA11. The Business Profile has changed since GEO H7, and still misdescribes the business

**Evidence (LB5, from the public Maps data for the place ID).**
- **What has improved.**
  - The primary category is now "Automation company", not "Consultant". It is the most distinctive primary category among these rivals, none of which uses an AI category.
  - The pin is now in Delray Beach (26.48314, -80.09532), not in Collier County.
- **What is still wrong.**
  - The additional categories include "Software company" and "Website designer", and the business sells neither.
  - The description says "Broward and Palm Beach" with no Miami-Dade, and lists "Accounting, Marketing, and Sales" where the site has two departments.
  - The profile's name is "Geek @ Your Spot", without "LLC" (SA M5).

**Fix, in Google Business Profile.**
- Keep "Automation company" as the primary category.
- Replace "Software company" and "Website designer" with categories for services the business sells, chosen from Google's own list.
- Add Miami-Dade and remove "Sales" from the description.
- Add "LLC" to the name.

### CA12. Decide whether clients come to the address

**Evidence (LB4).**
- **The site.** It has the cleanest name, address and phone of the 16 local businesses compared: one street address and one number in the footer, the schema and the profile.
- **The rivals.**
  - Three present mailboxes as offices: VSG, Gold Coast AI and Nerd Teks.
  - Nextek swaps city names into its street address.
  - Nerd Teks and Spotlight run profiles with the address hidden.
- **The rule.** Google's guidelines for representing a business call for a service-area profile with the address hidden when customers do not come to the address.

**Your call.**
- If clients meet you at 2025 NW 18th Street during the posted hours, keep the address showing.
- If they don't, switch the profile to a service area covering Palm Beach, Broward and Miami-Dade. Keep the address in the footer as a mailing address, the way Cybercon labels its own.

### CA13. Structured data: three properties missing, one link unconfirmed, and four rival errors to avoid

**Evidence (`seo-schema` across the 19 and the site; LB6).**
- **Done in `d6989dc`.**
  - The Organization and LocalBusiness node is on every page; the audited deploy, `8ce8b28`, had it on the home page only.
  - It now names Jeff Martin as `founder` and carries `hasMap` and the profile in `sameAs`.
- **Still missing or questionable.**
  - `geo`: GBP pin 26.48314, -80.09532.
  - `sameAs` still lists `https://twitter.com/geekatyourspot`, a handle GEO H7 could not find as the business's. `sameAs` should list only profiles the business controls; this waits on the X handle decision (SA M5, L7).
  - `foundingDate` says 2024, which waits on GEO decision 9.
- **FAQ markup.** Several reports say Google retired FAQ rich results for all sites on 2026-05-07; no Google post confirming it was found.
  - The site's FAQPage markup on 81 pages earns nothing in Google, but it does no harm while the questions are visible.
  - 13 of the 19 rivals use FAQPage too.
- **HowTo.** It was retired in 2023 and still appears on Artificial Intelligence Florida, Perceptive and Nerd Teks. Do not add it.
- **Rival errors to avoid.**
  - Spotlight ships the placeholder `"hasMap": "https://maps.app.goo.gl/YourGBPLink"`.
  - CPT's city nodes use a positive longitude, which puts the pin in the Eastern Hemisphere, and put 18 ZIP codes in one `postalCode`.
  - VSG sets `addressLocality` to "Accounting Firms" and similar labels on its industry pages.
  - Nextek's location node carries Boynton Beach coordinates for a Coral Springs office.
- **What rivals do better.**
  - VSG and Spotlight put priced `Offer` nodes on their service pages (17 and 15 nodes).
  - C&W puts a full local node on all 129 of its pages.

  The site has one `Service` node, on the home page (GEO H9).

**Fix.**
- Add `geo`.
- Drop the Twitter entry until the handle exists.
- Settle the founding year.
- When the area, assessment and group pages ship, give each a `Service` node with `provider` pointing at `#organization`, and an `Offer` only where a price is visible.

### CA14. At launch: the `vercel.app` duplicate, the headers, the crawler rule and llms.txt

**Evidence (TC1 to TC5, checked by hand on 2026-10-20).**
- **The duplicate host.** `https://geekatyourspot.vercel.app/` returns 200, protected only by the pre-launch noindex header. At launch the whole site would be served on a second host (GEO launch gate 2). Five rivals already show host or canonical conflicts of this kind.
- **Security headers.**
  - The audited deploy, `8ce8b28`, sent HSTS only.
  - `d6989dc` adds `X-Content-Type-Options`, `Referrer-Policy` and `Permissions-Policy`, kept outside the `ALLOW_INDEXING` branch, so they survive launch. The deployed site sends all three.
  - Five rivals send all five core headers, two of them on Vercel. Still missing: `X-Frame-Options`, and a Content-Security-Policy. Start the policy as `Content-Security-Policy-Report-Only`, because the page has inline scripts, GTM and the scheduler.
- **The crawler rule.** At launch, `robots.ts` admits every crawler, as 16 of the 19 do, 12 of them through the bare wildcard. C&W's split, with answer and search bots allowed and training-only bots such as Bytespider blocked, is the rule closest to what the skills recommend (GEO decision 11).
- **llms.txt.**
  - 11 of the 19 rivals publish one, and only Cybercon also has `llms-full.txt`.
  - Two of the 11 files are plugin boilerplate.
  - Two rivals answer `/llms.txt` with their home page.
  - It is the only gap between the site's 95 and the rivals' 100 on `geo-crawlers`.
  - No major engine has confirmed it reads the file. The format is Markdown, so it is your call (GEO decision 2). Until then, the site's clean 404 is the right answer.
- **Rendering.** Keep every new page server-rendered. Adominus, built with an app builder, shows crawlers that do not run JavaScript about 19 words a page.

**Fix.**
- Close the `vercel.app` host with a host-scoped noindex header or by removing the domain.
- Add `X-Frame-Options` and a report-only CSP.
- Decide the crawler rule.
- After the flip, fetch `/robots.txt` and confirm it serves `Allow: /` and the sitemap.

### CA15. The name collides with a Miramar IT firm, and there are no local links

**Evidence (LB7, LB8).**
- **The name.** Search engines drop the "@", so an exact search for "Geek @ Your Spot" reached "Geeks On The Spot", an IT repair business in Miramar, and returned nothing about this business.
- **Local links.** The strongest rivals have them:
  - Nerd Teks in the Palm Beach Chamber and Fort Lauderdale Chamber directories;
  - Capstone with two chamber links;
  - C&W with an investor profile at the Business Development Board of Martin County.
- **The site.** It is not in the Greater Delray Beach Chamber directory.
- **Common Crawl.** The site is now a node in its web graph, near the bottom of the rank range.
- **Platforms.** The biggest YouTube channel among these rivals has 146 subscribers, and LinkedIn followings run from 38 to about 1,500. The site has 15.

**Fix.**
- Pair the name with "Delray Beach" on every profile.
- Set `alternateName` to the spelled-out "Geek at Your Spot".
- Join the Greater Delray Beach Chamber.
- Look for a speaking or sponsor slot at a local AI event; one Boca Raton series turned up in search.

## Low

### CA16. Stock AI wording is more frequent than on any AI-specialist rival

**Evidence (CC7).**
- The site's sampled pages carry "seamless", "landscape", "revolutionize" and "game-changer" up to 8 times a page.
- Most rival pages sampled carry none.
- The site's median Flesch score is 41.5 against the rivals' 54.5.
- `/methodology` is the one site page inside the rivals' range, at 67.

**Fix.** GEO H6's edit, in the voice of `/methodology`.

## What the site does better than the 19

- **Name, address and phone.** The cleanest of the 16 local businesses (LB4).
- **Technical build.** It is server-rendered, with no extra hops between hosts, sitemap dates that are only real post dates, and the most consistent time to first byte of the 20 (TC5, TC6).
- **Tool depth.** It names and reviews the accounting tools: Bill, Melio, Gusto, Rippling, TaxJar, TaxCloud, Dext and Stampli. No South Florida rival names them, and none compares them (CP1, CA10).
- **Expertise.** The About page puts it above every IT firm except C&W (CC).
- **Place.** It is one of only two businesses actually in Delray Beach with an AI offer. The other is Pisano Designer.
- **Scope.** It serves small businesses only. VSG, AICS Pro, Adominus and others state a small and mid-size business scope, and their pages are pitched wider.

## Where the new pages go (`site-architecture`)

**The pages.** Every page these findings call for, beside the sections that exist today. Paths marked "your call" are suggestions; the tool segment is set per pillar.

```
Home (/)
├── About (/about)
├── Contact (/contact)                                        new, SA M4
├── AI consulting, South Florida (path your call)             new, CA2, GEO C2
│   ├── Delray Beach and Palm Beach County (path your call)   new, CA2, first
│   ├── Broward (path your call)                              new, optional
│   └── Miami-Dade (path your call)                           new, optional
├── First step: the assessment (path your call)               rebuilt from /architectural-infrastructure-audit, CA9
├── Use Cases (/use-cases)                                    existing hubs and pillars
├── Tools (/tools)
│   └── 15 group pages at the existing group paths            new, CA10, CP1, SA L5
│       └── 77 grouped tool pages                             existing
├── Decision guides (path your call)                          new, CA8
│   ├── What an AI consultant costs
│   ├── What AI implementation costs
│   ├── Doing it yourself or hiring help
│   └── Your IT provider or an AI implementer
├── Blog (/blog), Glossary (/glossary), Methodology (/methodology)
└── Privacy Policy, Terms of Service
```

**Links.**
- **The area pages.** Each links to the pillars from its department sections, to the assessment page and to `/about`. The footer links them (GEO C2).
- **The group pages.** Each links to its tools, and each tool page's comparison section links back up.
- **The decision guides.** The cost guides link to the assessment page and the area pages, and the do-it-yourself guide links to the pillars' "right fit" sections.
- **Breadcrumbs.** They follow the URL path once the group pages fill the 404 parents (SA L5).

**Paths.** Moving the assessment page to a new path makes its old address return 404. That is the rule before launch, and there is no redirect unless you ask for one.

## Decisions for you

1. Whether to publish the price of the first step, and whether the free assessment and the audit are one offer (CA9, GEO decision 10).
2. Whether clients come to the office, which decides how the address is shown (CA12).
3. The Business Profile categories, description and name (CA11).
4. The paths of the area pages, the assessment page and the decision guides (CA2, CA8, CA9).
5. Which decision guides to build (CA8).
6. The crawler rule at launch, and llms.txt (CA14, GEO decisions 11 and 2).
7. The X handle and the founding year (CA13, SA M5).
8. Whether to crawl and profile Pisano Designer, Authority AI, Raptor Tech, OneWave AI, ActBold and Forefront Industries, which hold more of these searches than any of the 19.

## Corrections to CP

- **CP2.** "The only AI page that names Delray Beach in its title" holds for the 58 crawled sites only. Deeper search results show eight sites with a Delray Beach AI page, seven of them in neither crawl (CA2).
- **CP1.** Accounting software is not named "only as QuickBooks and Xero". Adominus names Fathom, Float and Dryrun; Capstone's blog names Xero, Digits, Vic.ai and Ramp; C&W names CPA tax software. No South Florida rival names the tools the site reviews, and none compares them.
- **CP7.** DeepRails has eight "DeepRails vs" pages in the crawl, not nine.
- **The CP site table.** Adominus could be read from its script bundle after all. It is based in San Antonio, Texas.
- **CP4.** Nerd Teks also publishes AI prices. It is an IT firm, so the count of AI implementers that publish prices is unchanged.

These corrections are also made in CP itself.

## Where the evidence is

- **The profiles.** `development/competitor-profiles/`, one file per site, with the batch summary in `_summary-2026-10-20.md`. Each profile lists its crawl run ID and every page read.
- **The track reports, scripts and raw results.** These are in this session's scratch folder, which is temporary:
  - `/private/tmp/claude-501/-Users-jeffmartin-development-geekatyourspot/c0f94495-a4e4-4323-a6cd-a9d41e1b6a41/scratchpad/tracks/`. This holds `local-brand.md`, `content-citability.md`, `technical-crawlers.md`, `serp-ai-visibility.md`, `schema-compare.json`, and the search results in `serp-work/results.tsv`.
  - `/private/tmp/claude-501/-Users-jeffmartin-development-geekatyourspot/c0f94495-a4e4-4323-a6cd-a9d41e1b6a41/scratchpad/crawl/`. This holds the compact crawl.

  If you want any of it kept, I'll copy it into the repo.
