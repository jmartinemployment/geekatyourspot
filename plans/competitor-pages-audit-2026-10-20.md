# Competitor pages audit, 2026-10-20

The site is pre-launch, and every page sends `X-Robots-Tag: noindex, nofollow`. Everything below is something to build or decide before launch.

This audit compares the site with the consultancy-competitors crawl, using the `seo-competitor-pages` skill. No skill named "seo-competitors" is installed, and `seo-competitor-pages` is the closest match. That skill is built to plan comparison, alternatives and roundup pages, so this audit asks three questions:
- which comparison and local pages the competitors have;
- which of them the site is missing;
- which of the missing pages the site can win.

It sits alongside `plans/seo-audit-2026-10-20.md` (SA) and `plans/geo-seo-audit-2026-10-20.md` (GEO). It rechecks GEO C2 and GEO H12 with far more data than those audits had, and it adds competitor evidence to SA H2, SA M4 and SA M5.

## Data and method

- **Competitor crawl.** Every `consultancy-competitors` run in the crawl store, read through GeekAPI: 59 runs and 9,187 pages from 58 sites.
  - 39 runs are from 2026-10-14. They are the sites already profiled in `development/competitor-profiles/`.
  - 20 runs are from this morning, 2026-10-20. Those 19 sites have no profiles yet. DeepRails was crawled twice, and the first run returned no pages.
  - Each page's title, meta description, headings, JSON-LD types, word count and text came from the stored `html` and `blocks`.
- **This site.** All 426 sitemap URLs of the deployed site were fetched on 2026-10-20. The deployed commit is `8ce8b28`, the same as `main`. Every URL returned 200, and every URL sent `noindex, nofollow`.
- **Search samples.** Four web searches were run from one engine. They show who holds a query today, but they are not ranking data.
- **Not available.** There are no search volumes, rankings or backlinks, because DataForSEO is not connected.
- **Crawler limits.**
  - Adominus is drawn by script, and the crawler read about 19 words a page, so it cannot be assessed.
  - Three of AI-Powered Consulting's city pages (Boca Raton, Jupiter and West Palm Beach) read as 21 to 55 words. That may be the crawler, not the pages.
  - Premier AI Advisors and The AI Store were profiled on 2026-10-14 from their own code. They have no crawl run.

## Summary

| ID | Finding | Priority | Related |
|---|---|---|---|
| CP1 | The comparisons exist inside 41 tool pages, but no page stands alone, and the 15 tool group paths return 404 | High | GEO H12 |
| CP2 | No Delray Beach page, while rivals hold city pages in all three counties | High | GEO C2, SA H2 |
| CP3 | No decision pages, such as "doing it yourself versus hiring help" or "what an AI consultant costs" | Medium | SA H6 |
| CP4 | 10 of 22 AI implementers publish prices, and this site publishes none | Medium | GEO decision 10 |
| CP5 | The skill's rating schema cannot be used. Comparison pages need ItemList and Article markup instead | Medium | GEO C3, GEO H9, SA H4b |
| CP6 | Comparison pages need dates, an author, a method and a statement of vendor ties, and the site has no such statement | Medium | SA M4 |
| CP7 | Do not build pages that compare the business with named agencies | Low | GEO H12 |

## The 19 new sites

The 2026-10-14 sites are in `development/competitor-profiles/_summary.md`. This morning's crawl added these 19 sites.

| Site | Where | What they sell | Notes from the crawl |
|---|---|---|---|
| visionarysolutionsgroup.com | Boca Raton (Glades Road, a suite with a mailbox number) | AI training, strategy and builds for small and mid-size businesses | Founder Ronnie Bailey, MBE certified. City pages for Miami, Fort Lauderdale and South Florida, and industry pages that include accounting firms. Audit from $2,500, builds from $15,000 to $45,000. Names QuickBooks and Xero |
| aicspro.com | Miami | AI consulting for small businesses from one consultant | German G. Lopez, "a 30-year IT operator", for businesses of "roughly 10 to 200 employees". A fixed-fee readiness assessment with no published figure. Person schema on every page |
| softico.ai | No address | AI consulting, integration and custom builds | A South Florida page of 292 words. A paid "AI Workflow Blueprint" from $4,500 |
| goldcoastai.pro | West Palm Beach (in its schema) | n8n, GoHighLevel and AI agents | Packages from $297, an AI chatbot at $397 a month, and a voice receptionist at $697 a month |
| artificialintelligencefl.com | No address, statewide | AI services for Florida businesses | Two pages. "$500/month for small business automation to $8,000+" |
| adominus.ai | San Antonio, Texas, with a Miami page | AI consulting; its stated scope is small and mid-size businesses | Drawn by script, so the crawler read about 19 words a page. Its profile read it from the script bundle (corrected by CA) |
| theaiconsultinglab.com | St. Petersburg | AI builds, audits and training | Outside South Florida. Training from $15,000 |
| deeprails.com | No location | AI builds with an ROI guarantee | Outside the area. Eight "DeepRails vs" pages about its own software (corrected by CA) |
| perceptive-analytics.com | New York | National analytics and AI firm | A Miami AI consulting page of 3,469 words, and "AI consulting firms vs in-house AI team" pages for other cities |
| cwnow.com | Stuart | IT support firm, since 1985, selling AI | "Rated 4.7 on Google" in its meta description |
| cybercon-solutions.com | Cooper City and Davie (a Miami Beach mailbox) | IT support firm selling AI | AI integration service page |
| nerdteks.com | Plantation | IT support firm selling AI | AI integration service page, and a page comparing itself with "other Florida managed IT providers" |
| nextekit.com | Coral Springs | IT support firm selling AI | AI services page and a Delray Beach IT support page |
| capstoneitservices.com | Treasure Coast and the Palm Beaches | IT support firm selling AI | An "AI for Businesses" service page and AI blog posts |
| cpt-florida.com | Fort Lauderdale | Phone systems and IT, with an AI integration line | 317 location addresses and a Delray Beach IT support page |
| spotlightdigitalfl.com | Stuart | Marketing agency with AI CRM | Prices from $297 a month; AggregateRating schema |
| insouthflorida.com | Miami | Digital marketing | One "AI Solutions in South Florida" page |
| azuldigital.ai | Hialeah | AI marketing studio, in English and Spanish | Founder Carlos Betancourt |
| boomi.com | None | Enterprise integration software | A software vendor, not a rival |

**Where they rank among the rivals.** Two of the new sites belong near the top of the 2026-10-14 "closest to you" list. The ranking is my judgement.
- **Visionary Solutions Group** is the closest new rival. It sits in Boca Raton, next to Delray Beach. It has an accounting firms page, city pages and published prices. It also serves mid-size businesses, which this site does not, and its accounting page is about CPA firms rather than a small business's own books.
- **AICS Pro** has the positioning nearest to the About page: one named consultant with decades of IT work, selling to small businesses.

## CP1. The comparisons exist inside 41 tool pages, but no page stands alone

**What the site has.**
- 90 tool pages: 77 in 15 tool groups of 3 to 11 tools each, and 13 marketing tools outside any group.
- 41 of the 77 grouped tool pages already have a comparison H2. Examples are "How Gusto Compares to Other Payroll Tax and Worker Classification Solutions" and "Comparing TaxCloud with Other Solutions".
- No page compares two tools head to head, and no page compares a whole group.
- The group paths return 404. Checked on the deployed site: `/tools/accounting/accounts-payable/automated-approval-workflows`, `/tools/accounting/accounts-payable` and `/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification`.

**What the competitors have.**
- None of the 58 sites compares any tool this site reviews. The text of all 9,187 pages was searched for each of these pairs, in either order, with "vs", "versus", "or" and "compared to", and none was found:
  - Bill and Melio, Bill and Ramp, Stampli and Bill;
  - TaxJar and TaxCloud, TaxJar and Avalara;
  - Gusto and Rippling, Gusto and ADP;
  - Tidio and ManyChat, Writesonic and Jasper, Leadfeeder and Snitcher;
  - QuickBooks and Xero, Dext and Hubdoc, Expensify and Ramp.
- None of the 58 names Bill, Melio, Gusto, Rippling, TaxJar, TaxCloud, Dext or Stampli on any page. QuickBooks and Xero are the accounting software named most, on 14 sites, usually inside a list of systems they connect to. **Corrected by CA:** a few other names appear. Adominus, from Texas, names Fathom, Float and Dryrun; Capstone's blog names Xero, Digits, Vic.ai and Ramp; C&W names CPA tax software. None is a comparison, and no South Florida rival names the eight tools above.
- The rivals' comparison pages compare other things:
  - **concepts:** "AI Agents vs Traditional Automation" (Mindcore, Bot Pros), "AI vs Hiring" (My Total Tech Support), "Agentic AI vs Generative AI" (Accelirate);
  - **IT products:** "AWS vs Azure" (Mindcore), "Vonage vs RingCentral" (CPT), "Microsoft Teams vs Google Meet" (Nextek).
- **Rechecks GEO H12.** GEO H12 said "no local competitor has tool-level reviews". That holds across all 58 sites.

**Who holds these searches today.** Search samples for "Bill vs Melio for small business" and "Gusto vs Rippling small business payroll comparison" return national review and comparison sites: G2, TrustRadius, FitSmallBusiness, TechRepublic, CB Insights and Nickel, which sells a rival product. A new site will not outrank G2 for the bare pair soon. A comparison page earns its place here in three ways:
- the narrower searches the tool pages already serve, such as "Bill vs Melio for approval workflows";
- AI answers that draw on a clear, dated, sourced comparison;
- buyers already on the site who are choosing between two tools the site reviews.

None of the 58 local rivals can offer that last one.

**Fix.**
1. **One group page at each of the 15 group paths that return 404.**
   - Each one names its tools, says who each one fits, and links to each tool page.
   - It summarizes the tool pages' comparison sections rather than repeating them, so the group page and its tool pages do not compete for the same searches (SA H6).
   - Each tool page's comparison section links up to its group page.
2. **Three head-to-head pages first:** Bill vs Melio, Gusto vs Rippling and TaxJar vs TaxCloud. Public autocomplete already shows searches for each pair (GEO H12), and the site reviews both tools in every pair.
3. **Every price and plan comes from the vendor's own page, with the date it was checked.** Today's search results disagree on Bill's entry price ($45 against $49 per user per month). GEO C1 showed what an unchecked figure costs.

The paths of the head-to-head pages are your call. The group pages use the existing tool segments, but the tool segment is chosen per pillar, so a head-to-head page needs its path confirmed before it is laid out.

## CP2. No Delray Beach page, while rivals hold city pages in all three counties

**What the competitors have.**
- 25 of the 58 sites have at least one page whose title or H1 joins AI with a South Florida place.
- Among the 58 crawled sites, the only AI page that names Delray Beach in its title belongs to AI-Powered Consulting (`/ai-consulting-delray-beach`, 1,016 words). It is based in Palm Beach Gardens.
- **Corrected by CA2.** Deeper search results return eight sites with a Delray Beach AI page, seven of them in neither crawl. One, Pisano Designer, is based in Delray Beach and publishes prices. See `plans/competitor-audit-2026-10-20.md`.
- Mindcore has an office at 55 SE Second Ave in Delray Beach and four Delray Beach pages: cloud migration, co-managed IT, cybersecurity and IT consulting. None is about AI.
- QIT, Nextek, CPT, My Total Tech Support and Spotlight Digital each have a Delray Beach page, all for IT support or marketing.
- Visionary Solutions Group, in Boca Raton, now has AI consulting pages for Miami, Fort Lauderdale and South Florida.
- A search sample for "AI consultant Delray Beach small business" returned no local provider at all, only national guides.

**What the site has.**
- Every page names Delray Beach in the footer address. Only `/about` and the two legal pages name it in body copy.
- No page is built for a place, and no title names one: 0 of the 426 deployed titles name a South Florida place. SA H2 counted 9 of 432 before the titles changed.
- The home title is the brand twice (SA H2).
- Of the home titles of 24 rivals that sell AI, 20 put AI, automation or consulting in the title, and 9 name a place. Examples are "AI Consulting Palm Beach | AI-Powered Consulting" and "AI Consultant for Small Business in Miami | German Lopez".

**What the templated pages look like.**
- Visionary Solutions Group's seven city and industry pages share the same H2s, such as "Four ways VSG transforms your business" and "Real automations. Real numbers.".
- Hive Forensics has 32 city and city-plus-service pages of 307 to 483 words each.

These are the patterns to avoid.

**Rechecks GEO C2, still open.** GEO C2 found that city service pages win the core local searches. The crawl confirms it at scale. It also shows that Delray Beach, where the business actually is, has only one AI page from any rival, and that rival is based in Palm Beach Gardens, at the far north end of the county.

**Fix.**
- Build the South Florida AI consulting page that GEO C2 proposes.
- Then make the first area page a Delray Beach and Palm Beach County page, before Miami-Dade or Broward. It is the one place where proximity favors this site. The crawled rivals have left it nearly empty, but the wider search results do not (CA2).
- Give it local content: the office, the on-site radius, the kinds of local businesses served, and a visible FAQ.
- Set the home title per SA H2.

## CP3. No decision pages

**What the competitors publish.** These pages answer the questions owners ask before they hire anyone:
- "AI Automation for Small Business, DIY vs Professional" (Mindcore);
- "AI vs Hiring: When Automation Makes More Sense Than a New Employee" (My Total Tech Support);
- "What Does an AI Consultant Actually Do?" (Elevate AI Consulting, and an article of the same name listed by Visionary Solutions Group);
- "What AI Actually Costs for Small Businesses" (listed by Visionary Solutions Group), and AI Solutions Guru's pricing page;
- "Agentic AI vs traditional automation" (Bot Pros).

**What the site has.** One glossary term, "Personalization vs Customization". The pillars explain each workflow, but none answers "should I do this myself, hire someone, or keep doing it by hand".

**A comparison only this field invites.** Eleven of the 58 sites are IT support firms now selling AI. Six of them were added this morning, and five of the eleven name Delray Beach in a page title. An owner's IT provider is the rival most likely to be in the room. A page comparing "your IT provider" with "an AI implementer" as categories, naming no firm, answers that directly.

**Fix.** Two or three decision pages, chosen by you. Check each one against the pillars before it ships, so it does not repeat a pillar's FAQ (SA H6). The best candidates are:
- doing it yourself against hiring help, for small businesses;
- what AI implementation costs (see CP4);
- an IT provider against an AI implementer.

## CP4. 10 of 22 AI implementers publish prices

- **The 2026-10-14 crawl.** The summary counts 6 of 16 AI implementers that publish prices.
- **This morning's crawl.** 4 of the 6 new AI implementers that target South Florida publish prices: Visionary Solutions Group, Softico, Gold Coast AI and Artificial Intelligence Florida.
- **The field's entry offers.** A fixed-fee first step is now common: Visionary Solutions Group from $2,500, Softico from $4,500, AI-Powered Consulting $2,500 for an assessment, and AICS Pro a fixed fee with no published figure.
- **This site.** No price for its own work.

**Why it matters for comparison pages.** A comparison page has a price row for each vendor. Without it, the page fails the skill's own checklist. That row is the vendor's price, not this site's, so it needs no pricing decision.

**Your call.** Whether to publish your own engagement prices is GEO decision 10, still open. The crawl shows that local buyers comparing AI implementers now see prices on almost half the sites.

## CP5. The skill's rating schema cannot be used

**What the skill suggests.** The skill's comparison schema is `Product` with an `aggregateRating`, filled from G2, Capterra or Trustpilot ratings.

**Why it cannot be used.** Google's review snippet guidelines say "Don't aggregate reviews or ratings from other websites", and marked-up ratings must be visible on the page. The site has no reviews of its own (GEO C3).

**What to use instead.**
- An `Article` or `TechArticle` with `author` pointing at `https://geekatyourspot.com/about#jeff-martin`, plus `dateModified` and `about`.
- An `ItemList` whose items point at the site's own tool pages. Each item reuses the single product `@id` that GEO H9 asks for.
- A `BreadcrumbList`. The group pages in CP1 are what make breadcrumbs possible (SA L5).
- No `SoftwareApplication` node unless its `offers` are filled from the vendor's own page (SA H4b).

**What the rivals mark up.** Across the 58 sites:
- FAQPage on 25 sites;
- Service on 21;
- Offer on 17;
- ProfessionalService on 9;
- AggregateRating on 5: Axiant, Polish Your Image, CPT, C&W and Spotlight Digital.

This site has FAQPage on 81 pages but only one Service node and one LocalBusiness node, both on the home page. That matches GEO H9's call for a Service node on each pillar.

**A draft for the first head-to-head page.**
- It reuses the existing tool page `@id`s.
- `datePublished` and `dateModified` are added when the page ships.
- The page's own `@id` waits on the path decision in CP1.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "headline": "Bill vs Melio for Approval Workflows",
      "author": { "@id": "https://geekatyourspot.com/about#jeff-martin" },
      "publisher": { "@id": "https://geekatyourspot.com/#organization" },
      "about": [
        { "@id": "https://geekatyourspot.com/tools/accounting/accounts-payable/automated-approval-workflows/bill" },
        { "@id": "https://geekatyourspot.com/tools/accounting/accounts-payable/automated-approval-workflows/melio" }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Tools compared",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://geekatyourspot.com/tools/accounting/accounts-payable/automated-approval-workflows/bill" },
        { "@type": "ListItem", "position": 2, "url": "https://geekatyourspot.com/tools/accounting/accounts-payable/automated-approval-workflows/melio" }
      ]
    }
  ]
}
```

## CP6. Comparison pages need dates, an author, a method and a statement of vendor ties

The skill's trust checklist asks for four things. The site has some of them:
- **A "last checked" date.** The site has none. Tool review dates are already open under SA M4.
- **An author with relevant experience.** The site has one now: `/about` and its Person node (SA M4, GEO H4).
- **A method.** `/methodology` exists, and every comparison page should link to it.
- **A statement of ties to vendors.** The site has none. No page on the site mentions affiliate links, commissions, referral fees or vendor partnerships. The 2026-10-14 summary calls the tools "the partner tools your site does", so the relationship needs settling before a comparison page ships.
  - If any vendor pays a referral fee or has a partnership with the business, the FTC's endorsement rules require the page to say so, near the comparison.
  - If none does, one sentence saying so is a trust signal that no rival offers.

**Your call.** Which vendors, if any, the business has a referral or partner arrangement with.

## CP7. Do not build pages that compare the business with named agencies

- **What one rival does.** Nerd Teks has "How Nerd Teks Compares to Other Florida Managed IT Providers". The vendors DeepRails and Boomi compare themselves with other software by name.
- **Why not here.** The local rivals are not searched by name in any volume the search samples show. A page naming them carries legal risk for every claim. GEO H12 reached the same conclusion.
- **Where the difference shows instead.** The site's advantage over the 58 sites is the tools it names and reviews (CP1). That difference belongs in the comparison pages and the About page, not in a page about rivals.

## Keyword targets

There are no volumes, because DataForSEO is not connected. The evidence is the autocomplete pairs in GEO H12, the four search samples, and what the rivals target.

| Page | Primary target | Secondary and long tail |
|---|---|---|
| Approval workflows group page | approval workflow software for small business | accounts payable approval tools compared; Bill, Melio, Ramp, Stampli, ApprovalMax |
| Bill vs Melio | bill.com vs melio | bill vs melio for approval workflows; bill vs melio pricing; melio or bill for a small business |
| Gusto vs Rippling | gusto vs rippling | gusto vs rippling for small business payroll; gusto vs rippling contractors |
| TaxJar vs TaxCloud | taxjar vs taxcloud | sales tax software for small business; taxjar vs taxcloud pricing |
| Delray Beach page | AI consultant Delray Beach | AI automation Delray Beach; AI consulting Palm Beach County; AI for small businesses in Delray Beach |
| Cost page | AI consultant cost for small business | AI automation cost South Florida; what AI implementation costs |

**Title suggestions.** They fit the 60-character limit with the " | Geek @ Your Spot LLC" suffix, and none has a colon prefix:
- "Approval Workflow Tools Compared" (55 characters with the suffix);
- "Bill vs Melio for Approval Workflows" (59);
- "Gusto vs Rippling for Payroll Tax" (56);
- "TaxJar vs TaxCloud for Sales Tax" (55).

## Outline of a head-to-head page

This is the skill's page template, cut to what this site's tool pages already support. The skill sets a 1,500-word floor. GEO H6 argues against padding, so the page should be as long as the comparison needs.

1. **H1 and the answer first.** One paragraph saying which tool fits which business, in full sentences, before any detail (GEO M1).
2. **The comparison table.** Each cell is checked on the vendor's site and dated in the table caption. Use "Not published" where a vendor gives no figure. The rows are:
   - payables;
   - receivables;
   - multi-step approvals;
   - accounting sync (QuickBooks, Xero, NetSuite);
   - payment methods (ACH, card, check, international);
   - entry price;
   - free tier;
   - the business it fits.
3. **Where each one is stronger.** Each strength is a sentence, and each links to the matching section of the tool page.
4. **What each one costs to run.** Fees per payment and per user, from the vendor's page, with the date checked.
5. **Which to choose.** Two or three scenarios drawn from the pillar, framed as examples in the sentence that introduces them (GEO H5).
6. **How this comparison was made.** The method, the date checked, and the statement of vendor ties (CP6).
7. **Related comparisons and the group page.** Links to the other head-to-head pages and up to the group page.
8. **A call to book.** One call to action after the table and one at the end, none inside a vendor's section.

## Decisions for you

1. The paths of the head-to-head pages (CP1).
2. Which head-to-head pages come first. The recommendation is Bill vs Melio, Gusto vs Rippling and TaxJar vs TaxCloud (CP1).
3. Whether the Delray Beach and Palm Beach County page comes first among the area pages (CP2).
4. Which decision pages to build (CP3).
5. Whether to publish your own prices. This is GEO decision 10 (CP4).
6. Which vendors, if any, the business has a referral or partner arrangement with (CP6).

## Where the evidence is

Everything below is in this session's scratch folder, which is temporary. If you want any of it kept, I'll copy it into the repo.
- **The compact crawl.** One JSONL file per run, with title, meta, headings, JSON-LD and text: `/private/tmp/claude-501/-Users-jeffmartin-development-geekatyourspot/c0f94495-a4e4-4323-a6cd-a9d41e1b6a41/scratchpad/crawl/`.
- **Per-site counts.** Page types, schema, prices and tools: `/private/tmp/claude-501/-Users-jeffmartin-development-geekatyourspot/c0f94495-a4e4-4323-a6cd-a9d41e1b6a41/scratchpad/competitor-summary.json`.
- **The deployed site.** All 426 pages: `/private/tmp/claude-501/-Users-jeffmartin-development-geekatyourspot/c0f94495-a4e4-4323-a6cd-a9d41e1b6a41/scratchpad/site-deployed.jsonl`.
- **The scripts.** `/private/tmp/claude-501/-Users-jeffmartin-development-geekatyourspot/c0f94495-a4e4-4323-a6cd-a9d41e1b6a41/scratchpad/scripts/`.
