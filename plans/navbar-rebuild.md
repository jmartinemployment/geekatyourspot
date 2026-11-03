# Navbar rebuild plan: flattened pure navigation (applied, not pushed)

Status 2026-11-03: applied in commits e79e2d45 (navbar, menu data, llms.txt and tools hub readers),
39c7ca0c (`check:nav`, which `npm run build` now runs first), 89ecee8d and bb2b74f3 (registry and
home page names). Not yet done: a `next build`, `npm run check:faq`, the headless Playwright pass at
1366 and 390 wide (server HTML holds every menu href, open and close, Escape, no overflow, no
duplicate ids, `/llms.txt` returns 200), the page-weight measurement, and the GTM workspace sync
for the changed link ids (new `gys-link-nav-category-<id>` ids, an `-lg` suffix on the desktop
block, section and department ids; the old `gys-btn-nav-category-*` and section buttons are
gone). Each of those needs Jeff's go-ahead; nothing is pushed.

Scope: one item, the site navbar (`src/components/layout/navbar.tsx` and its data in
`src/data/navigation/site-menus.ts`). The footer, breadcrumbs and booking actions are listed at the
end as separate items.

The design in sections 3 to 6 is the plan Jeff pasted on 2026-11-03 (flattened pure navigation),
adopted as given. Sections 1, 2 and 4 are the repo facts it is applied to: the evidence, the files
that read the menu data, and the id table.

Depends on two other plans, both of which land first because this one links to their final URLs and
names:
- `plans/use-cases-names-without-ai.md`: no "AI" in h3 and h4 names, and everything matches.
- `plans/blog-marketing-index.md`: the `/blog/marketing` page.

## 1. What is wrong (evidence)

| # | Defect | Where | Evidence |
|---|---|---|---|
| F1 | The closed menu puts no links in the page. | `navbar.tsx:242` Sheet, `ui/sheet.tsx:51` SheetPortal, no `keepMounted` anywhere | Measured on the existing build (`.next/server/app/index.html`, built Nov 2): 0 navbar link ids, 0 category buttons, 1 menu toggle. |
| F2 | Only the active section's panel exists. Blog and Tools are not in the page until clicked. | `navbar.tsx:293, 307, 321` | `activeSection === "..." &&` |
| F3 | A category's pages exist only while that category is hovered or tapped open. | `navbar.tsx:148, 161` | `category.id === openCategory &&`, `open &&` |
| F4 | All 23 categories (8 Use Cases, 7 Blog, 8 Tools) are `<button>`s with no `href`. A button beside a label also forces chevron layout that wraps badly at 390px, and the two-tap logic that works around it can trap navigation. | `navbar.tsx:80`, `site-menus.ts:12` | `MenuCategory` is `{ id, label, items }`; there is no field that could hold a link. |
| F5 | "Use Cases", "Blog", "Tools" are buttons. Nothing in the navbar links to `/use-cases`, `/blog`, `/tools`, `/glossary`, `/methodology`. | `navbar.tsx:267-290` | Only Home, the three department headings and the items are `<Link>`. |
| F6 | A category's pillar appears only as its first child, under another name, for some categories. MAP has no pillar entry at all. | `site-menus.ts` | Lead Capture Pipeline -> "Intelligent Lead Capture Pipeline"; the MAP pillar is linked from the home cards and `/use-cases` but not the menu. |
| F7 | Duplicate DOM ids when a category is open. The nested list (below lg) and the side list (lg and up) both render `MenuLink` with `id={gtmLinkIdFromHref(href, "nav")}`. | `navbar.tsx:150, 164` | Both render under the same `openCategory` condition. The footer and hero avoid this with a `-lg` suffix. |
| F8 | Department grid is fixed at `md:grid-cols-3`, and the dividers rely on `first:` / `last:` / `:not(:first-child)`. A fourth department (Sales is planned) wraps with a stray left border. | `navbar.tsx:294`, `COLUMN_CLASS` | Not visible today. |
| F9 | `aria-controls="site-menu"` points at an element that does not exist while the menu is closed. | `navbar.tsx:218, 250` | Same cause as F1. |
| F10 | Stale names and ids. The department is "AI Operations" and its category "AI Front Desk"; Marketing Automation Platforms still has `content-creation-workflow` in its id; Ad Spend Optimization is "Automated Ad Spend Optimization". Eleven category ids are stale. | `site-menus.ts` | Names and ids were not updated together. Jeff: stale ids are not kept. See section 4. |

Step 0, done (read-only): Base UI's `DialogPortal` does take a `keepMounted` prop (default false),
but `FloatingPortal` only creates its portal node in a layout effect (`useState(null)`, then
`useIsoLayoutEffect`), and it renders its children with `ReactDOM.createPortal` only once that node
exists. Effects do not run on the server, so even with `keepMounted` the links are not in the server
HTML. The inline menu is therefore required. The measurement in F1 agrees.

## 2. What else reads `site-menus.ts` (consumers to update in the same commit)

A search of `src` and `scripts` finds four importers. The flattened data model changes the shape
they read, so each is updated together with the data:

- `src/app/llms.txt/route.ts` (lines 34 to 46) reads `department.href`, `department.items`,
  `department.categories`, `category.label` and `category.items`, and returns 404 for the whole file
  if any listed page's title or description cannot be read as a literal or an upper-case constant.
  It is updated to the new shape and lists `category.href` ahead of `category.items`, so a pillar
  that leaves `items` stays in `/llms.txt`. Adding the MAP pillar to the menu puts it in the file, so
  its metadata is confirmed readable first.
- `src/components/tools/shared/tools-department-sections.tsx` (lines 8, 40, 47) finds a department
  by `href`, builds the tools hub cards from `category.items` and uses `category.id` as `<h2 id>`.
  It is updated to read `TOOLS_MENU.departments`. Renamed Tools category ids rename those heading
  ids; no link to them exists (a search of `src`, `scripts` and `plans` found none).
- `src/components/layout/navbar.tsx` imports `BLOG_MENU`, `TOOLS_MENU`, `USE_CASES_MENU`,
  `MenuCategory` and `MenuDepartment`. It is rewritten (section 3).
- `src/app/(site)/tools/page.tsx` imports only `toolCardLabel`, which is unchanged, so it is not
  edited.

All nine departments hold `items: []` today (`site-menus.ts` lines 54, 92, 115, 156, 192, 207, 277,
348, 384), so the department-level `items` field goes with nothing lost; the one line in the
`/llms.txt` route that maps over it goes too.

`src/app/(site)/use-cases/page.tsx` says its cards are "in navbar order" and "keep both in step with
the navbar". After this change and the naming plan, they match.

GTM ids use the `gys-link-` and `gys-btn-` prefixes (`src/lib/gtm/link-id.ts`). The prefixes must
not change, because blockers hide `gtm-` prefixed ids.

## 3. Target design (flattened pure navigation)

### Core interaction rules
- No sidebars, no chevrons, no dropdowns, no toggles.
- Every element is a direct text `<Link>`: the section headings (Use Cases, Blog, Tools), the
  department headings, the categories and the items.
- All three sections are shown at once, stacked, fully expanded. There is no section button and no
  per-category state.
- Mobile (below lg): a structured, fully expanded, vertically scrolling tree, a table of contents.
  Long names such as "Marketing Automation Platforms (MAP)" wrap naturally inside block containers,
  because nothing sits beside a label.
- Desktop (lg and up): a multi-column CSS mega-menu grid showing all items at once. Each section is a
  row of department columns, and each column holds its department heading, then its categories, each
  with its items.
- Data Infrastructure has no page of its own yet. Its categories link to their parent department
  page (for example `/use-cases/business-operations`), so there are no dead labels and no 404
  targets. When a Data Infrastructure page is built, only that one string changes.
- The names follow the naming plan: the department is "Business Operations", the category "Front
  Desk", the category "Ad Spend Optimization", in all three menus.

### Data (`site-menus.ts`)

```ts
export interface MenuLink {
  label: string;
  href: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  href: string; // required: every category links to a page that exists
  items: MenuLink[];
}

export interface MenuDepartment {
  id: string;
  name: string;
  href: string; // the department page, so its heading is a link
  categories: MenuCategory[];
}

export interface SiteMenuConfiguration {
  departments: MenuDepartment[];
}

export const USE_CASES_MENU: SiteMenuConfiguration = { departments: [ /* ... */ ] };
export const BLOG_MENU: SiteMenuConfiguration = { departments: [ /* ... */ ] };
export const TOOLS_MENU: SiteMenuConfiguration = { departments: [ /* ... */ ] };
```

- `MenuCategory.href` is a required string. The "pillar as first sub-item" entries are removed.
- `MenuDepartment.href` is the one field added to the pasted interface. The rule that every
  department heading is a link needs a target, and the value is the one each department holds today
  (for example `/use-cases/marketing`).
- `toolCardLabel` stays exported and unchanged.
- The pasted example showed the shape of one category. Its two item links are written with the real
  routes, from the current menus and the final URLs in the naming plan:

```ts
{
  id: "use-cases-marketing-marketing-automation-platforms",
  label: "Marketing Automation Platforms (MAP)",
  href: "/use-cases/marketing/marketing-automation-platforms",
  items: [
    { label: "AI Lead Enrichment & Predictive Scoring", href: "/use-cases/marketing/marketing-automation-platforms/ai-lead-enrichment-predictive-scoring" },
    { label: "AI Content Generation", href: "/use-cases/marketing/marketing-automation-platforms/ai-content-generation" },
    // the remaining MAP items carry over from the current menu with their final URLs
  ],
}
```

### Component (`navbar.tsx`)
- Rendered inline in the header, not in a portal, so every link is in the server HTML. Nothing in
  the layout depends on client JavaScript running.
- Loops over `USE_CASES_MENU.departments`, `BLOG_MENU.departments` and `TOOLS_MENU.departments`, and
  renders each department, category and item as `<Link href>` (`next/link`).
- The one control left is the existing menu button in the header, which shows or hides the whole
  panel (a single boolean). It is not a section or category toggle. Hidden state is the HTML
  `hidden` attribute and nothing is left out of the markup. Tailwind's preflight forces `[hidden]`
  to `display: none`, so hidden links are out of the tab order and the accessibility tree with no
  `tabIndex` handling. The panel closes when a link is followed and on Escape. `openCategory`,
  hover and pointer-type code, and the two-tap handling are deleted.
- Two blocks per breakpoint, the project's convention: a one-column tree below lg (`lg:hidden`) and
  the department grid from lg (`hidden lg:block`). The lg block's ids carry the `-lg` suffix, so no
  id repeats between the blocks.
- Ids: items keep `gtmLinkIdFromHref(href, "nav")`, so unchanged links keep their ids. Categories
  and department headings can share an href (all three Accounting tools categories and the
  Accounting heading link `/tools/accounting`), so they take ids from their own unique ids:
  `gtmLinkId(["nav", "category", category.id])` and `gtmLinkId(["nav", "department", department.id])`,
  with `lg` as the suffix in the grid block. The section headings take `gtmLinkIdFromHref`.
- Department columns are self-delimited (their own border and padding) and the grid is auto-fit, so
  any number of departments lays out without first/last tricks. The existing colours are kept
  (`text-black`, hover `#8C2703`).
- The dimmed backdrop and every visual change (bordered department columns, the stacked sections)
  are shown as exact before and after at 1366 and 390 before they are committed.

### Use Cases mapping (each category label is this link; its old first child is removed)

URLs are the final ones from the naming plan.

| Department | Category | Link target | Old first child removed |
|---|---|---|---|
| Marketing | Lead Capture Pipeline | removed: Home -> Use Cases has no such category (`plans/use-cases-names-without-ai.md`, section 5) | its item "Lead Enrichment & Predictive Scoring" moves into Marketing Automation Platforms (MAP) as "AI Lead Enrichment & Predictive Scoring" |
| Marketing | Marketing Automation Platforms (MAP) | `/use-cases/marketing/marketing-automation-platforms` | none (new) |
| Marketing | Ad Spend Optimization | `/use-cases/marketing/ad-spend-optimization` | "Automated Ad Spend Optimization" |
| Accounting | Accounts Payable | `/use-cases/accounting/accounts-payable` | "Accounts Payable" |
| Accounting | Cash Flow Forecasting | `/use-cases/accounting/cash-flow-forecasting` | "Intelligent Cash Flow Forecasting" |
| Accounting | Tax Compliance & Regulations | `/use-cases/accounting/tax-compliance-regulations` | "Tax Compliance & Regulations" |
| Business Operations | Front Desk | `/use-cases/business-operations/front-desk` | "AI Front Desk" |
| Business Operations | Data Infrastructure | `/use-cases/business-operations` (temporary hub link) | none |

### Tools mapping

| Department | Categories | Link target |
|---|---|---|
| Marketing | Marketing Automation Platforms (MAP) (now including the Lead Capture Pipeline tools: Apollo, Factors, Leadfeeder, Lusha, Snitcher, 6sense), Ad Spend Optimization | `/tools/marketing` |
| Accounting | Accounts Payable, Cash Flow Forecasting, Tax Compliance & Regulations | `/tools/accounting` |
| Business Operations | Front Desk | `/tools/business-operations` |
| Business Operations | Data Infrastructure | `/tools/business-operations` (temporary hub link) |

The hub already renders one `<h2>` per category from this same menu. No fragment is used.

### Blog mapping

| Department | Categories | Link target |
|---|---|---|
| Accounting | Accounts Payable, Cash Flow Forecasting, Tax Compliance & Regulations | `/blog/accounting` |
| Business Operations | Front Desk | `/blog/business-operations` |
| Business Operations | Data Infrastructure | `/blog/business-operations` (temporary hub link) |
| Marketing | Marketing Automation Platforms (MAP) (now including the four Lead Capture Pipeline posts, pending question 2 of the naming plan), Ad Spend Optimization | `/blog/marketing` (built first, see `plans/blog-marketing-index.md`) |

`BLOG_MENU` has no Data Infrastructure category today (its seven categories are in section 4), so
this row adds one: `blog-business-operations-data-infrastructure`, with `items: []`. After the plan
the menus hold 21 categories: 7 Use Cases, 7 Blog, 7 Tools.

## 4. Decisions

Settled by Jeff:
- Main categories are links; no category is left as a dead label. Blog and Tools categories link to
  their department page (tables above).
- The Marketing blog gets a real department page first. Nothing links to `/blog` as a stopgap.
- The department is Business Operations and the category is Front Desk. No Use Cases category name
  has "AI". Everything matches: labels, ids, titles, URLs (`plans/use-cases-names-without-ai.md`).
- Stale ids are not kept. All eleven are renamed (next table).
- Flattened pure navigation, as pasted: all links, no chevron or toggles, stacked and fully expanded
  on mobile, a multi-column mega-menu grid on desktop, Data Infrastructure linked to its department
  page. This settles the earlier open choices about showing one section at a time and about a
  hover bar versus a panel.
- The menu renders inline, not in the portal. Step 0 settled it: `keepMounted` cannot put the links
  in the server HTML.
- The build check (`check:nav`) runs ahead of `next build` in `npm run build`.
- No tool is moved by this plan. Zapier and Pipedrive stay under Tools "Data": the home page files
  them there as "AI Workflows" and "AI Customer Relationship Management (CRM)".
- Lead Capture Pipeline is removed as a category, because Home -> Use Cases does not have it. Its
  Lead Enrichment & Predictive Scoring item, tools and posts move under Marketing Automation
  Platforms (MAP).
- Menu item labels equal the home h5 names, so "Intelligent Data Entry & Processing" becomes "AI
  Data Entry & Processing", "Intelligent Approval Workflows" becomes "AI Invoice Approval
  Workflows", and so on for all 18 use cases (`plans/use-cases-names-without-ai.md`, section 3).
- "Data" is renamed "Data Infrastructure" (Jeff asked for it), here and on the home page heading.
  Its Use Cases list holds the one page, "AI Data Quality Assessments"; its Tools list holds
  Anomalo, Great Expectations, Monte Carlo, Qualytics, Zapier and Pipedrive.

Other open items are outside this plan: the two questions at the end of
`plans/use-cases-names-without-ai.md` and the wording of `plans/blog-marketing-index.md`.

### Category id renames (every name)

The category `id` in `site-menus.ts` follows `<menu>-<department>-<category>`. Eleven ids no longer
match the department or category they name, and stale ids are not kept:
- Marketing Automation Platforms still says `content-creation-workflow` (3 menus).
- Ad Spend Optimization still says `automated-ad-spend-optimization` (3 menus).
- Front Desk still says `ai-front-office`, and the department segment says `ai-operations` while the
  department is Business Operations (3 menus).
- Data becomes Data Infrastructure and carries the `ai-operations` department segment (Use Cases and
  Tools).

| Menu | Line | Old id | New id |
|---|---|---|---|
| Use Cases | 36 | `use-cases-marketing-content-creation-workflow` | `use-cases-marketing-marketing-automation-platforms` |
| Use Cases | 46 | `use-cases-marketing-automated-ad-spend-optimization` | `use-cases-marketing-ad-spend-optimization` |
| Use Cases | 99 | `use-cases-ai-operations-ai-front-office` | `use-cases-business-operations-front-desk` |
| Use Cases | 108 | `use-cases-ai-operations-data` | `use-cases-business-operations-data-infrastructure` |
| Blog | 135 | `blog-marketing-content-creation-workflow` | `blog-marketing-marketing-automation-platforms` |
| Blog | 147 | `blog-marketing-automated-ad-spend-optimization` | `blog-marketing-ad-spend-optimization` |
| Blog | 199 | `blog-ai-operations-ai-front-office` | `blog-business-operations-front-desk` |
| Tools | 229 | `tools-marketing-content-creation-workflow` | `tools-marketing-marketing-automation-platforms` |
| Tools | 260 | `tools-marketing-automated-ad-spend-optimization` | `tools-marketing-ad-spend-optimization` |
| Tools | 355 | `tools-ai-operations-ai-front-office` | `tools-business-operations-front-desk` |
| Tools | 372 | `tools-ai-operations-data` | `tools-business-operations-data-infrastructure` |

New (1): `blog-business-operations-data-infrastructure`, the Blog row in section 3.

No id is changed in code yet. All are done together, in step 2 of the order of work, once Jeff says
to build.

Retired with the Lead Capture Pipeline category (3): `use-cases-marketing-lead-capture-pipeline`,
`blog-marketing-lead-capture-pipeline`, `tools-marketing-lead-capture-pipeline`.

Unchanged, so each name is on record (9 of the 23 current ids): `use-cases-accounting-accounts-payable`,
`use-cases-accounting-cash-flow-forecasting`, `use-cases-accounting-tax-compliance-regulations`,
`blog-accounting-accounts-payable`, `blog-accounting-cash-flow-forecasting`,
`blog-accounting-tax-compliance-regulations`, `tools-accounting-accounts-payable`,
`tools-accounting-cash-flow-forecasting`, `tools-accounting-tax-compliance-regulations`.

Checked before renaming: the old strings appear only on these lines. The longer
`tools-marketing-content-creation-workflow-...` ids in the tool pages' right-fit sections are link
ids built from page paths, a different thing; they follow the URL moves in the naming plan, not this
table.

## 5. Side effects to expect

- Analytics: link ids in the lg grid block gain the `-lg` suffix
  (`gys-link-<path>-nav` becomes `gys-link-<path>-nav-lg`). Every category is now a link, so it gets
  a link id in place of the button id `gys-btn-nav-category-<id>`, and that button id no longer
  exists anywhere. The section buttons also go (the three sections are always shown), so their ids
  go with them; the menu button keeps its id. GTM itself is outside the repo, so every trigger built
  on an old id has to be synchronised in the GTM workspace in the same sitting as the commit.
- 100% native server rendering: every route is in the raw server HTML, and the layout does not
  depend on client JavaScript.
- Length: about 190 links in one panel (156 items, 9 department headings, 21 categories, the section
  headings). The phone panel scrolls through all of them; the number is re-measured by the check
  below, not asserted.
- `/llms.txt`: gains the MAP pillar; the other pillars stay (the route reads `category.href`). If any
  listed page's metadata cannot be read, the whole file would 404, so it is checked in step 3.
- No broken links, ever. Every category `href` is a page that exists today; a category with no page
  of its own links to its department page, which exists, and is never a 404. Every target above
  must exist when this plan builds: the naming plan and the `/blog/marketing` plan land first.
  `check:nav` enforces it before the build.
- No redirects, no `#` URLs, no font changes.

## 6. Order of work (one commit each, direct to main, no co-author line)

0. Done: F1 confirmed on the existing build, and Base UI's portal confirmed client-only (section 1).
1. Prerequisites, each its own plan: `plans/use-cases-names-without-ai.md` (final names and URLs)
   and `plans/blog-marketing-index.md` (`/blog/marketing`). Nothing below starts until both build.
2. Data model: implement the interfaces in section 3, remove the duplicated first children, insert
   the required `href` on every category and department, add MAP and the Blog Data Infrastructure
   category, execute the eleven id renames, set the department and category names.
3. Consumers: update `llms.txt/route.ts` and `tools-department-sections.tsx` to the new shape (list
   `category.href` ahead of `category.items`); confirm the MAP page metadata is readable by
   `readPage` and `/llms.txt` returns 200 and lists the page. Steps 2 and 3 ship together, because
   the shape change breaks both readers until they are updated.
4. Guard: add `scripts/check-nav.ts` and wire it ahead of the build. In `package.json`:
   `"check:nav": "node --no-warnings --experimental-strip-types scripts/check-nav.ts"` and
   `"build": "npm run check:nav && next build && npm run check:faq"`. It reads only source files and
   fails when a menu or category `href` has no `page.tsx`, a page under `use-cases` or `tools` is
   missing from the menus (index pages allow-listed), an item `href` appears twice, or a category id
   appears twice. A category may share an `href` with its own department (the temporary hub links),
   so that is not a duplicate.
5. Component: implement the loops in `navbar.tsx` per section 3, after the before and after is
   approved. Smaller than the current file: no per-category state, hover, pointer-type or two-tap
   code.
6. Verification with headless Playwright (never Jeff's Chrome), after he approves running it:
   - prerendered HTML (`.next/server/app/index.html`) contains every menu href;
   - at 1366 and 390: the menu opens and closes, a link navigates on the first tap or click and
     closes the panel, Escape closes it, and hidden links are not reachable by Tab;
   - no horizontal overflow at 390 (long labels wrap), no duplicate ids, and the link colours per
     ground;
   - every link resolves to a 200 page;
   - `/llms.txt` 200; `next build` passes; `check:faq` unchanged.

Rollback: each step is its own commit and reverts cleanly. Steps 2 and 3 revert together.

## 7. Not in this plan (separate items)

- Footer: Privacy Policy and Terms of Service are raw `<a href>` (`footer.tsx:139-153`); its hub
  column has no Business Operations hubs (`/use-cases/business-operations`,
  `/tools/business-operations`) and no blog department indexes.
- Breadcrumb names disagree with the navbar despite the comment saying they match: the
  `content-creation-workflow` levels read "Content Creation Workflow". The naming plan moves those
  URLs if Jeff says yes to its question 1.
- Blog menu: the 2026-10-30 hand-coded post is not in `BLOG_MENU` (decided in
  `plans/blog-marketing-index.md`).
- Booking actions (`create-booking.ts`, `hold-slot.ts`, `google-calendar.service.ts`,
  `booking-confirmation.service.ts`): unescaped client values in the confirmation email and ICS file,
  no validation on the recipient, and a client-supplied `holdEventId` patched or deleted without
  checking it is a hold.
