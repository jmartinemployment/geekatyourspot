# Plan: every name matches Home -> Use Cases (URLs and titles applied, not pushed)

Status 2026-11-03: applied, not pushed. URL moves in 34a16a0b (Accounts Payable), 847a65e3
(Cash Flow Forecasting), eaea4536 (Tax), 500692a8 (Marketing Automation Platforms), f01f63ea (Ad
Spend Optimization) and ca211c47 (Business Operations); the home page in bb2b74f3; page titles,
breadcrumb levels, index cards and link texts in c40cc26e; descriptions, keywords, JSON-LD, section
headings, link texts, element ids, registry files and pillar component folders in 7ce692f2; the blog
exports, names split across wrapped lines, the home Top 5 lines, the Marketing overview and the
Marpipe and ad spend blog pages in efab7ac2. Both audit files carry the rename together.

Left on purpose, each with its reason:
- `ai-sales-force-automation-software` is deleted (2026-11-03, at Jeff's word): it belonged to no home
  heading, so it could not take a home name. Its page, its components, its `/use-cases` index card, the
  links to it and its `NOT_IN_MENU` entry are gone; no redirect.
- Lowercase phrases that are ordinary English rather than names stay as written: "personalized
  email campaigns", "data quality assessments", "precision lead acquisition", "multi-state sales
  tax nexus", "payroll tax and worker misclassification", "automated accounts payable". Their
  Title Case forms are renamed.
- `LINK_OVERRIDES` keys in `src/lib/content-writer/content.ts` are the old paths the exports still
  link to; they map to the real routes, so they keep the old names.
- Image file names under `public/images` (for example `ai-marketing-systems-pillar-hero.avif`) and
  the writer's image prompts under `content-writer-output` are assets, not names a visitor reads.
- `src/components/tools/marketing/ai-content-creation-workflow/chatgpt` is unreferenced and has no
  route; delete it or restore the page, Jeff's call.

One item: a naming rule and every place it reaches. It is a dependency of
`plans/navbar-rebuild.md` and `plans/blog-marketing-index.md`, which link to the final URLs and
names below. Work is committed in small steps (section 8); no page layout changes.

## 1. The rule (Jeff, 2026-11-03)

The headings in Home -> Use Cases are the source of truth:
- h3, the departments: no "AI". Accounting, Marketing, Business Operations.
- h4, the categories: no "AI". Accounts Payable, Cash Flow Forecasting, Tax Compliance &
  Regulations, Marketing Automation Platforms (MAP), Ad Spend Optimization, Front Desk, Data
  Infrastructure (renamed from "Data" at Jeff's direction).
- h5, the use cases: "AI" at the start.
- Everything else matches the home heading: the page title, the hero H1, the JSON-LD headline, the
  Open Graph and Twitter titles, the meta description, the keywords, the section headings, the label
  in the navbar, the `/use-cases` index, the tools hubs and the breadcrumbs, the ids built from the
  name, and the URL slug, including the folders under `/tools` and `/blog`.
- Blog and Tools follow the same rule, and so does the Tools index ("Tools & Platforms").
- Old names in descriptions, keywords and section headings change to the new name.
- No redirects. Pre-launch, a renamed URL stops existing and 404s; every link to it is rewritten in
  the same commit.

This replaces two earlier decisions: that the navbar says "Intelligent X" while titles say "AI X",
and that slugs are search terms. The slug is now the home heading as a slug (lowercase, "&" and
punctuation dropped, spaces to hyphens, the way `tax-compliance-regulations` is made).

## 2. The names (from `src/components/home/use-cases.tsx`)

Departments: Accounting, Marketing, Business Operations (the mobile copy reads "AI Operations" at
line 932 and is wrong; the desktop copy at 2084 is right).

| Category (h4) | Use cases (h5) |
|---|---|
| Accounts Payable | AI Data Entry & Processing; AI Invoice Approval Workflows; AI Payment Execution; AI Fraud & Duplicate Payment Controls |
| Cash Flow Forecasting | AI Accounts Receivable; AI Spreadsheet Data; AI Resource Planning |
| Tax Compliance & Regulations | AI Tax Law; AI Payroll Tax; AI Multi-State Sales Tax |
| Marketing Automation Platforms (MAP) | AI Content Planning; AI Content Generation; AI Personalized Email Campaigns; AI Lead Enrichment & Predictive Scoring |
| Ad Spend Optimization | AI Precision Lead Acquisition (the home card omits "AI"; the rule adds it) |
| Front Desk | AI Receptionist; AI Chatbot (the home card says "Cross-Platform Chatbot"; the page says "AI Chatbot") |
| Data Infrastructure (the home h4 reads "Data" at lines 1063 and 2205 and changes to this) | AI Data Quality Assessments (the home card omits "AI"); "AI Workflows" and "AI Customer Relationship Management (CRM)" are group headings with tool links and no page |

Lead Capture Pipeline is not on the home page, so under this rule it is not a category: see section 5.

## 3. Use Cases pages: title and URL, old to new

Category and department pages:

| Name | Old URL | Old title | New URL | New title |
|---|---|---|---|---|
| Accounting | `/use-cases/accounting` | AI Accounting | unchanged | Accounting |
| Marketing | `/use-cases/marketing` | AI Marketing Systems | unchanged | Marketing |
| Business Operations | `/use-cases/business-operations` | Business Operations | unchanged | unchanged |
| Cash Flow Forecasting | `.../cash-flow-forecasting/ai-cash-flow-forecasting` | AI Cash Flow Forecasting | `/use-cases/accounting/cash-flow-forecasting` | Cash Flow Forecasting |
| Marketing Automation Platforms (MAP) | `/use-cases/marketing/ai-content-marketing-platforms` | AI Marketing Automation Platforms | `/use-cases/marketing/marketing-automation-platforms` | Marketing Automation Platforms (MAP) |
| Ad Spend Optimization | `/use-cases/marketing/automated-ad-spend-optimization` | Automated Ad Spend Optimization | `/use-cases/marketing/ad-spend-optimization` | Ad Spend Optimization |
| Front Desk | `/use-cases/business-operations/front-desk` | AI Front Desk | unchanged | Front Desk |

Use case pages (the 18 h5 pages). A "-" in the last column means the URL already matches:

| Home name | Old URL (last segments) | Old title | New URL | New title |
|---|---|---|---|---|
| AI Data Entry & Processing | `accounts-payable/automated-data-entry-processing` | AI Data Entry & Processing | `accounts-payable/ai-data-entry-processing` | - |
| AI Invoice Approval Workflows | `accounts-payable/ai-approval-workflow` | AI Approval Workflow | `accounts-payable/ai-invoice-approval-workflows` | AI Invoice Approval Workflows |
| AI Payment Execution | `accounts-payable/ai-automatic-bill-pay` | AI Automatic Bill Pay | `accounts-payable/ai-payment-execution` | AI Payment Execution |
| AI Fraud & Duplicate Payment Controls | `accounts-payable/ai-fraud-duplicate-payment-controls` | same | - | - |
| AI Accounts Receivable | `cash-flow-forecasting/ai-accounts-receivable-software` | AI Accounts Receivable Software | `cash-flow-forecasting/ai-accounts-receivable` | AI Accounts Receivable |
| AI Spreadsheet Data | `cash-flow-forecasting/ai-spreadsheet-data` | same | - | - |
| AI Resource Planning | `cash-flow-forecasting/ai-financial-planning-software` | AI Financial Planning Software | `cash-flow-forecasting/ai-resource-planning` | AI Resource Planning |
| AI Tax Law | `tax-compliance-regulations/ai-tax-law` | same | - | - |
| AI Payroll Tax | `tax-compliance-regulations/ai-payroll-software` | AI Payroll Software | `tax-compliance-regulations/ai-payroll-tax` | AI Payroll Tax |
| AI Multi-State Sales Tax | `tax-compliance-regulations/ai-multi-state-sales-tax` | same | - | - |
| AI Content Planning | `marketing/content-creation-workflow/ai-content-planning` | same | `marketing/marketing-automation-platforms/ai-content-planning` | - |
| AI Content Generation | `marketing/content-creation-workflow/ai-seo-content-generator` | AI SEO Content Generator | `marketing/marketing-automation-platforms/ai-content-generation` | AI Content Generation |
| AI Personalized Email Campaigns | `marketing/marketing-automation-platforms/ai-personalized-email-campaigns` | same | - | - |
| AI Lead Enrichment & Predictive Scoring | `marketing/lead-capture-pipeline/ai-lead-enrichment-scoring` | Lead Enrichment & Predictive Scoring | `marketing/marketing-automation-platforms/ai-lead-enrichment-predictive-scoring` | AI Lead Enrichment & Predictive Scoring |
| AI Precision Lead Acquisition | `marketing/ad-spend-optimization/ai-precision-lead-acquisition` | same | - | - |
| AI Receptionist | `business-operations/ai-receptionist` | same | - | - |
| AI Chatbot | `business-operations/ai-chatbot` | same | - | - |
| AI Data Quality Assessments | `business-operations/data-quality-assessments` | same | `business-operations/ai-data-quality-assessments` | - |

The three category folders that already exist (`cash-flow-forecasting/`,
`marketing-automation-platforms/`, `ad-spend-optimization/`) take their category page the way
`accounts-payable/` does. Moving the cash flow page there also makes the `LINK_OVERRIDES` entry for
`/use-cases/accounting/cash-flow-forecasting` in `src/lib/content-writer/content.ts` unnecessary.

## 4. Tools and Blog

Departments and their titles:

| Section | Old | New |
|---|---|---|
| `/tools/marketing` | Marketing AI Tools & Platforms | Marketing Tools & Platforms |
| `/tools/accounting` | Accounting AI Tools & Platforms | Accounting Tools & Platforms |
| `/tools/ai-operations` | AI Operations Tools & Platforms | `/tools/business-operations`, Business Operations Tools & Platforms |
| `/tools` | AI Tools & Platforms | Tools & Platforms |
| `/blog/accounting` | AI Accounting | Accounting |
| `/blog/ai-operations` | AI Operations | `/blog/business-operations`, Business Operations |
| `/blog/marketing` (new page) | - | Marketing |

URL segments under `/tools` and `/blog` follow the use case slugs in section 3. Each tool page sits
under its use case: `/tools/<department>/<category>/<use-case-slug>/<tool>`. So the use case folder
is renamed to the new slug, the category folder follows the home category, and the department folder
follows the home department. In summary:

- `content-creation-workflow` -> `marketing-automation-platforms`: 19 tool pages
  (`intelligent-content-generation` x14, `intelligent-content-planning` x5), 2 use case pages, and
  the blog posts filed under it.
- `lead-capture-pipeline` -> `marketing-automation-platforms`: 5 tool pages (Apollo, Factors,
  Leadfeeder, Lusha, Snitcher), 1 use case page, the hand-coded blog post `ai-lead-scoring` and the
  exported lead enrichment post.
- `ai-operations` -> `business-operations`: the `/tools/ai-operations` and `/blog/ai-operations`
  departments, 16 tool pages and two exported blog posts.
- The use case folders under the tool pages are renamed to match section 3 (for example
  `automated-approval-workflows` -> `ai-invoice-approval-workflows`,
  `automated-payment-execution-streamlining-accounts-payable-with-ai` -> `ai-payment-execution`,
  `intelligent-receptionist` -> `ai-receptionist`, `cross-platform-chatbot` -> `ai-chatbot`,
  `data-quality-assessments` -> `ai-data-quality-assessments`).

Lines found in `src` (TypeScript and TSX only) that mention the strings being renamed: about 300 for
`ai-operations` (162 in the Tools route files, 62 in the home cards, 31 and 17 in the use case
components, 29 in the navigation data, 28 in the tools registry, 11 in the tool components, 10 in
`content.ts`, 9 in the blog pages, 1 in `types`), about 46 for `automated-ad-spend-optimization`, 17
for `ai-cash-flow-forecasting` and 12 for `ai-content-marketing-platforms`. Counts for the other
segments are produced by the move script in section 7 before it runs, since they are not measured yet.

The two blog exports that carry the old department in their canonical are
`content-writer-output/marketing/Cross-Platform Chatbot/blog/cross-platform-chatbot-the-missing-link-in-your-south-florida-lead-capture-pipel.html`
and
`content-writer-output/marketing/Lead Capture Pipeline Intelligent Receptionist/blog/intelligent-receptionist-how-miami-small-businesses-can-stop-losing-leads-after.html`.
The loader takes a post's route from its canonical link, so the canonical and any in-text link to a
renamed URL are edited in each export that carries one (Jeff approved: everything matches). The
exports under the renamed category segments are edited the same way.

## 5. Lead Capture Pipeline is not in Home -> Use Cases

The home page has no Lead Capture Pipeline category. Its one use case, Lead Enrichment & Predictive
Scoring, is an h5 under Marketing Automation Platforms (MAP). So the navbar, the `/use-cases` index
and the Tools and Blog menus drop the Lead Capture Pipeline category, and Lead Enrichment & Predictive
Scoring moves into Marketing Automation Platforms (MAP) (section 3, the tools and the posts in
section 4). The page `/use-cases/marketing/ai-sales-force-automation-software` ("AI Sales Force
Automation Software", labelled "Intelligent Lead Capture Pipeline" in the menu) belongs to no home
heading. Deleted 2026-11-03 at Jeff's word, with the index card and every link to it.

## 6. Ids (stale ids are not kept)

- Navbar category ids: `plans/navbar-rebuild.md` lists every one (eleven renamed, three retired
  with the Lead Capture Pipeline category).
- Home card ids and suffixes: `components/home/use-cases.tsx` lines 929 and 2082 (the id suffix
  "AI Operations"), 949 and 2091 (`home-use-cases-ai-operations-ai-front-office`), and the 26 other
  explicit `home-use-cases-...` ids that predate the current names, such as
  `home-use-cases-accounting-automated-accounts-payable`. All are rebuilt from the new names.
- Link ids built from a path (`gtmLinkIdFromHref`) follow the new URLs automatically.
- Any GTM trigger or report built on a renamed id stops matching. A search of `src`, `scripts` and
  `plans` found no trigger definition, but GTM is outside the repo.

## 7. How the move is done

One mapping file (old path -> new path, old name -> new name) is the single source. A script, run
once and not kept, moves the folders, rewrites every reference in `src`, `scripts`, the navigation
and registry data and the export canonicals, and prints a count per rule before it writes anything.
Nothing is renamed by hand twice. `next build` and the `check:nav` guard from the navbar plan then
fail the commit on any link that no longer resolves.

## 8. Order and checks

1. The mapping file, reviewed by Jeff as a table before anything runs.
2. Run the move for one cluster at a time and commit each separately: Accounts Payable, Cash Flow
   Forecasting, Tax Compliance & Regulations, Marketing Automation Platforms (including the
   `content-creation-workflow` and `lead-capture-pipeline` folders), Ad Spend Optimization, Business
   Operations (Use Cases, then Tools and Blog), then the department titles.
3. After each commit: `next build`; `check:faq`; every internal link resolves; `/llms.txt` returns
   200 and lists the pages under their new titles (it 404s as a whole if a listed page's title cannot
   be read).
4. Update `plans/seo-audit-2026-10-20.md` and `plans/geo-seo-audit-2026-10-20.md` together, cross
   referenced by ID, because every URL and title change belongs in both.
5. Headless render of the changed pages at 1366 and 390, after Jeff approves running it: the hero H1,
   breadcrumb trail, navbar label and home heading agree.

Rollback: revert the cluster's commit.

## 9. Questions for Jeff

1. Answered: the Lead Capture Pipeline pillar page (`ai-sales-force-automation-software`) is deleted.
2. Four blog posts sit in the Lead Capture Pipeline category of the Blog menu: Lead Capture Pipelines
   for B2B Sales, Lead Enrichment to Close More Sales, AI Lead Scoring, and Smart Chatbots That Engage
   Customers. With the category gone they list under Marketing Automation Platforms (MAP) unless you
   say otherwise. Smart Chatbots could instead go to Front Desk.
