# Tools Directory Structure

How tool pages are addressed and where their components live. Written 2026-10-02; every
count below was taken from the tree that day, so re-grep before trusting an old number.

---

## The structure

A tool page is addressed by **department, category, pillar, then tool**:

```
/tools/<department>/<category>/<pillar>/<tool>
```

```
/tools/accounting/accounts-payable/automated-data-entry-processing/dext
/tools/accounting/accounts-payable/automated-data-entry-processing/bill
/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax
/tools/accounting/accounts-payable/automated-approval-workflows/bill
/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill
```

It mirrors the use-case tree one level at a time:

| Segment | Is | Example |
|---|---|---|
| department | the card on the home page | `accounting` |
| category | the `<h4>` under it, **without "Automated"** | `accounts-payable` |
| pillar | the `<h5>` under that, slug of the pillar page | `automated-data-entry-processing` |
| tool | the tool named in that pillar's "Top 5" list | `bill` |

**"Automated" belongs to the pillar, not the category.** The home page heading reads
"Automated Accounts Payable" but the category segment is `accounts-payable`; the word lives
in the pillar slug below it (`automated-data-entry-processing`,
`automated-approval-workflows-...`). This matches the use-case routes, which have always been
`/use-cases/accounting/accounts-payable/automated-accounts-payable`.

**The pillar segment is chosen once per pillar, when its tools ship, and recorded here.** It is
the pillar page's slug unless Jeff shortens it. Segments in use:

| Pillar | Tools segment | Note |
|---|---|---|
| Automated Data Entry & Processing | `automated-data-entry-processing` | the slug |
| Automated Approval Workflows | `automated-approval-workflows` | shortened from `automated-approval-workflows-transforming-accounts-payable` by Jeff, 2026-10-09, when its five tool pages shipped |
| Automated Payment Execution | `automated-payment-execution-streamlining-accounts-payable-with-ai` | the slug; shipped 2026-10-09, not shortened |
| Automated Fraud & Duplicate Payment Controls | `automated-fraud-duplicate-payment-controls` | shortened from `automated-fraud-duplicate-payment-controls-boosting-efficiency-for-smbs` on the approval-workflows precedent when its three tool pages (Bill, Medius, Tipalti) shipped, 2026-10-09 |
| Automated Accounts Receivable (under `cash-flow-forecasting`) | `automated-accounts-receivable` | pillar `/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai` shipped 2026-10-10 from a full re-export (eleven sections plus FAQ on every page) that replaced the 2026-10-09 tool pages for Chaserhq, Invoiced, Upflow, Versapay and Bill; segment taken from the home-card `<h5>` and kept across the re-export; their JSON-LD `subjectOf` and registry `relatedArticleId` point at that pillar |
| Automated Spreadsheet Data (under `cash-flow-forecasting`) | `automated-spreadsheet-data` | pillar `/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting-for-smbs` and tools Cashflowfrog, Clockwork, Dryrun, Floatapp, Helmhq shipped together 2026-10-11 (export folder `accounting/Cash-Flow-Forecasting-Automated-Spreadsheet-Data`, eleven sections plus FAQ per page); segment shortened from the home-card `<h5>` on the accounts receivable precedent; JSON-LD `subjectOf` and registry `relatedArticleId` point at the pillar |
| Intelligent Resource Planning (under `cash-flow-forecasting`) | `intelligent-resource-planning` | pillar `/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business` and tools Cashflowfrog, Fathom (`fathomhq`), Jirav, QuickBooks, Take the Helm (`takethehelm`) shipped together 2026-10-14 (export folder `accounting/Intelligent Resource Planning`, eleven sections plus FAQ per page); segment taken from the home-card `<h5>`, which Jeff renamed from "Intelligent Enterprise Resource Planning" the same day. Cashflowfrog and Take the Helm are second write-ups of vendors already under `automated-spreadsheet-data`, so their registry entries are `src/data/tools/<tool>-intelligent-resource-planning.ts`. Blog filed at `/blog/accounting/cash-flow-forecasting/intelligent-resource-planning-for-small-businesses-how-to-fix-cash-flow-headaches-in-south-florida`, the full slug from its JSON-LD; the export's canonical was cut at 80 characters |
| Automating Complex & Changing Laws (under `tax-compliance-regulations`) | `automating-complex-and-changing-laws` | pillar `/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws` and tools Quaderno, TaxCloud, TaxJar, TaxValet (`thetaxvalet`), Zamp shipped together 2026-10-12 (export folder `accounting/Tax-Compliance-Regulations-Complex-Changing-Laws2`, eleven sections plus FAQ per page); segment taken from the home-card `<h5>` on the spreadsheet-data precedent. Shipped as `complex-and-changing-laws` with the pillar at `.../ai-solutions-for-complex-and-changing-tax-laws`; on 2026-10-14 the home card was renamed "Automating Complex & Changing Laws" and both routes moved to `automating-complex-and-changing-laws`, with permanent redirects from the old paths in `next.config.ts`. Avalara sat one level shallower at `/tools/accounting/tax-compliance-regulations/avalara` because it predated the sub-pillar; that page was removed on 2026-10-14 and Avalara is now unlinked text wherever it is mentioned |
| Payroll Tax & Worker Misclassification (under `tax-compliance-regulations`) | `payroll-tax-worker-misclassification` | pillar `/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-smb-compliance` and tools ADP, Deel, Gusto, Justworks, Rippling shipped 2026-10-13, eleven sections plus FAQ per page; segment taken from the home-card `<h5>` on the complex and changing laws precedent. Two export folders carry it: `accounting/Payroll Tax & Worker Misclassification` (pillar and four tools) and `accounting/PayrollTax & Worker Misclassification-blog`, which repeats those five files byte for byte and adds the ADP write-up and the blog post, filed at `/blog/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-what-miami-smbs-must-know-before-choosing-compliance-solutions` |
| Multi-State Sales Tax Nexus (under `tax-compliance-regulations`) | `multi-state-sales-tax-nexus` | pillar `/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida-smbs` and tools Quaderno, TaxCloud, TaxJar, TaxValet (`thetaxvalet`), Zamp shipped 2026-10-13, eleven sections plus FAQ per page; segment taken from the home-card `<h5>`. Two export folders carry it: `accounting/RegulationsMultiStateSalesTaxNexus` (four tools, no pillar) and `accounting/Multi-State Sales Tax Nexus`, which adds the pillar, the TaxJar write-up and the blog post, repeats Quaderno, TaxValet and Zamp byte for byte, and rewrites TaxCloud; the pages are built from the second. All five are second write-ups of vendors already under `automating-complex-and-changing-laws`, so their registry entries are `src/data/tools/<tool>-multi-state-sales-tax-nexus.ts`. Blog filed at `/blog/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-what-south-florida-smbs-need-to-know-and-fix-before-expanding` |
| Intelligent Receptionist (marketing, under `lead-capture-pipeline`) | `intelligent-receptionist` | the first marketing pillar laid out in the four segment shape, 2026-10-15 (export folder `marketing/Lead Capture Pipeline Intelligent Receptionist`, eleven sections plus FAQ per page). Tools LobbyStack (`lobbystack`), My AI Front Desk (`myaifrontdesk`), Nextiva, Smith.ai (`smith`) and Voksha at `/tools/marketing/lead-capture-pipeline/intelligent-receptionist/<tool>`; the export's canonicals used `/tools/marketing/lead-capture-pipeline/<tool>` with no pillar segment, and the segment was added from the home card `<h5>` "Intelligent Receptionist". Pillar at `/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses`, the full slug from its JSON-LD (the canonical was cut at 80 characters). Blog filed at `/blog/marketing/lead-capture-pipeline/intelligent-receptionist-how-miami-small-businesses-can-stop-losing-leads-after-hours`, also the JSON-LD slug |
| Cross-Platform Chatbot (marketing, under `lead-capture-pipeline`) | `cross-platform-chatbot` | laid out 2026-10-16 (export folder `marketing/Cross-Platform Chatbot`, eleven sections per tool page, FAQ on three of the five). Tools BotPenguin (`botpenguin`), Dapta, Manychat, My AI Front Desk (`myaifrontdesk`) and Tidio at `/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/<tool>`; the export's canonicals again had no pillar segment, and the segment was added from the home card `<h5>` "Cross-Platform Chatbot". The Dapta and Tidio exports carry no FAQ, so those pages end at the right fit section and have no `FAQPage` JSON-LD. My AI Front Desk is a second write-up of a vendor already under `intelligent-receptionist`, so its registry entry is `src/data/tools/myaifrontdesk-cross-platform-chatbot.ts` and the navbar labels both write-ups by pillar. The writer's Botpenguin and Myaifrontdesk were corrected to BotPenguin and My AI Front Desk, and ManyChat to Manychat, in display text, prose and the blog export. Pillar at `/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-smb-implementation-guide`. Blog filed at `/blog/marketing/lead-capture-pipeline/cross-platform-chatbot-the-missing-link-in-your-south-florida-lead-capture-pipeline`, the JSON-LD slug (the canonical was cut at 80 characters) |
| Lead Enrichment and Predictive Scoring (marketing, under `lead-capture-pipeline`) | `lead-enrichment-and-predictive-scoring` | laid out 2026-10-17 (export folder `marketing/Lead Enrichment and Predictive Scoring`, eleven sections plus FAQ per tool page). Tools Apollo, Factors, Leadfeeder, Lusha and Snitcher at `/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/<tool>`; the export's canonicals again had no pillar segment, and the segment was added from the home card `<h5>` "Lead Enrichment and Predictive Scoring". Leadfeeder already had a registry entry with no page (`src/data/tools/leadfeeder.ts`, from the old lead capture pipeline export); the new write-up replaced it, which also ends its 404 in the department index. Pillar at `/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida-smbs`, the full slug from its JSON-LD (the canonical was cut at 80 characters). Blog filed at `/blog/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-how-south-florida-smbs-can-turn-more-leads-into-sales`, also the JSON-LD slug |
| Intelligent Content Planning (marketing, under `content-creation-workflow`) | `intelligent-content-planning` | laid out 2026-10-18 (export folder `marketing/Intelligent Content Planning`, eleven sections plus FAQ per tool page). Tools Hootsuite, HyperWrite (`hyperwriteai`), Scalenut and Semrush at `/tools/marketing/content-creation-workflow/intelligent-content-planning/<tool>`; the export's canonicals had no pillar segment, and the segment was added from the home card `<h5>` "Intelligent Content Planning", the first item under Content Creation Workflow. The writer's `Hyperwriteai` and `Marketmuse` were corrected to HyperWrite and MarketMuse in display text and prose. MarketMuse is linked by the pillar and blog but has no write-up, so it is plain text there and on the home card. Pillar at `/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai`. Blog filed at `/blog/marketing/content-creation-workflow/intelligent-content-planning-how-south-florida-smbs-can-save-hours-and-drive-more-sales`, the JSON-LD slug (the canonical was cut at 80 characters). On 2026-10-18 Jeff shortened both titles to "Intelligent Content Planning" (page title, hero, metadata, JSON-LD headline, navbar); the URLs keep the long slugs |

The earlier wording here — "the slug verbatim, no judgement call" — is withdrawn. What survives
of it: a pillar's tools all share one segment, and that segment is never decided per tool.

**Why four segments.** A tool is written up *for* a pillar, and the same vendor is written up
more than once for different jobs. Bill has one write-up for AP data entry and another for AP
approval workflows; they are different arguments about the same product. Three segments gave
Bill one slot and forced a choice between them. Four gives each write-up its own URL, and the
URL says which pillar it is arguing for.

Where a category has no pillar below it the tool sits one level shallower. Avalara was laid out
that way (`/tools/accounting/tax-compliance-regulations/avalara`) while tax compliance had no
sub-pillar; the 2026-10-12 tax export added one, and its tools take the four-segment shape above.
The Avalara page was removed on 2026-10-14, along with its registry entry and the
`/tools/accounting/avalara` redirect that pointed at it.
Mirror the use-case tree; do not invent a segment to pad the depth.

### Marketing

The same rule, not a second scheme. Marketing's tools are still flat at
`/tools/marketing/<tool>` and are expected to move in the week after 2026-10-03. Read the
segments off the home page's marketing card exactly as above: the `<h4>` is the category, the
`<h5>` above each "Top 5" list is the pillar, and the links in that list are the tools. For
example a ContentStudio page written up for the content-repurposing pillar becomes
`/tools/marketing/ai-content-creation-workflow/ai-content-repurposing/contentstudio` once
those pillars' slugs are confirmed against `src/app/(site)/use-cases/marketing/`.

### Directories

| Concern | Path |
|---|---|
| Route | `src/app/(site)/tools/<department>/<category>/<pillar>/<tool>/page.tsx` |
| Sections | `src/components/tools/<department>/<category>/<pillar>/<tool>/*-section.tsx` |
| Listing metadata | `src/data/tools/<tool>.ts`, registered in `src/lib/tools-mapper.ts` |
| Shared hero | `src/components/tools/shared/tools-hero.tsx` |

Route path and component path carry the same segments. When they agree, the file that renders
a URL is reachable from the URL by inspection.

A tool written up twice needs two data entries, because `src/data/tools/<tool>.ts` is keyed by
slug and `toolHref()` builds one href per entry. Name the second for its pillar
(`bill-approval-workflows.ts`) rather than overloading one entry with two URLs.

---

## What the tree actually looks like today

**Routes are still flat.** All 44 tool pages live at `/tools/<department>/<tool>` — 4 under
`accounting`, 40 under `marketing`. None has a use-case segment yet. The structure above is
the target, not a description of `src/app`.

**Components are already in three shapes**, which is the mess this is meant to end:

| Shape | Count | Example |
|---|---|---|
| `tools/<tool>/` | 30 | `src/components/tools/canva/` |
| `tools/<department>/<tool>/` | 16 | `src/components/tools/marketing/contentstudio/` |
| `tools/<department>/<use-case>/<tool>/` | 5 | `src/components/tools/accounting/accounts-payable/dext/` |

The five already-correct ones are `accounting/accounts-payable/{dext,bill,avidxchange}`,
`accounting/tax-compliance-regulations/avalara` (removed 2026-10-14), and
`marketing/ai-content-creation-workflow/chatgpt`. Build new tools in that shape; the other
two shapes are legacy.

Note the split this creates today: `accounting/accounts-payable/dext` renders at
`/tools/accounting/dext`. The components moved first and the routes did not follow.

---

## Moving a tool page

1. **Move the route.** `src/app/(site)/tools/<dept>/<tool>/` →
   `src/app/(site)/tools/<dept>/<use-case>/<tool>/`. The sitemap walks the app directory
   (`src/app/sitemap.ts`), so it needs no edit.
2. **Move the components** to the matching three-segment path and fix the page's imports.
3. **Update the page's own URLs.** Each `page.tsx` hardcodes its path in `CANONICAL`, in
   `openGraph.url`, and in the JSON-LD `mainEntityOfPage.@id` and `@id`. All four change.
4. **Update the registry.** `toolHref()` (`src/app/(site)/tools/accounting/page.tsx:51`, and
   the same function in the marketing index) builds the href from `ToolPageContent`
   (`src/types/tool.ts`). It carries an optional `useCase` field holding the segments between
   department and slug; a tool without it stays at the flat `/tools/<department>/<slug>`, which
   is how marketing still renders.
5. **Update every inbound link by hand.** There are **707** hardcoded `"/tools/..."` strings
   across roughly 50 files: `src/components/layout/navbar.tsx`, `src/components/home/use-cases.tsx`,
   and the pillar section components under `src/components/use-cases/**`. They are hand-written
   `<Link>`s by design — there is no helper to change once.
6. **Add a redirect** from the old path in `next.config.ts` `redirects()`, which already
   holds one for `/glossary/artificial-intelligence` and is the precedent to copy.
7. **Check the exported HTML.** `LINK_OVERRIDES` in `src/lib/content-writer/content.ts`
   rewrites in-article links whose path does not match a built route; a moved tool may need
   an entry until its exports are regenerated.

---

## Cost, stated plainly

This is a 44-page move touching 707 link sites, and step 5 has no shortcut. Two things make
it cheaper now than later:

- **The site is not indexed yet.** `next.config.ts` sends `X-Robots-Tag: noindex, nofollow`
  on every path unless `ALLOW_INDEXING=true`, so no ranking depends on the current URLs.
  After launch this becomes an SEO migration rather than a refactor.
- **Accounting is only 4 pages.** It can move first and prove the shape before the 40
  marketing pages follow.

Do not do it halfway. A tree where some tools are two segments deep and some are three is
worse than either, because nothing tells you which a given tool is without looking.

---

## Known inconsistencies to settle first

- **`/tools/marketing/active-campaign` and `/tools/marketing/activecampaign` both exist** as
  routes. Pick one, delete the other, redirect it. The navbar links only the hyphenated one.
- **`avidxchange` was lowercased** from `avidXchange` on 2026-10-02. Slugs are lowercase
  kebab-case; a capital letter in a path is a 404 waiting for whoever types it from memory.
- **14 of the 43 registered tools have no page at all.** `src/lib/tools-mapper.ts` registers
  43 entries; 14 have no route directory, so the department indexes link to 404s today:
  `adaptive-insights`, `anaplan`, `basware`, `board`, `coupa`, `drift`, `kyriba`, `leadfeeder`,
  `medius`, `rillion`, `sovos`, `thomson-reuters-onesource`, `tipalti`, `vertex`. Settle
  whether the registry is a list of built pages or a catalogue of tools we mention, before
  adding a segment to the href it builds — `toolHref()` will happily produce a
  three-segment 404 as readily as a two-segment one.
