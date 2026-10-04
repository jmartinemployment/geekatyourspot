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
/tools/accounting/accounts-payable/automated-approval-workflows-boosting-efficiency-with-ai/approvalmax
/tools/accounting/accounts-payable/automated-approval-workflows-boosting-efficiency-with-ai/bill
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

**The pillar segment is that pillar's slug verbatim** — not a shortened version of it. Where
a pillar shipped with a long slug, its tools inherit it:
`/tools/accounting/.../automated-approval-workflows-boosting-efficiency-with-ai/approvalmax`.
One rule, no per-tool judgement call about how much of the slug to keep.

**Why four segments.** A tool is written up *for* a pillar, and the same vendor is written up
more than once for different jobs. Bill has one write-up for AP data entry and another for AP
approval workflows; they are different arguments about the same product. Three segments gave
Bill one slot and forced a choice between them. Four gives each write-up its own URL, and the
URL says which pillar it is arguing for.

Where a category has no pillar below it — tax compliance is a pillar directly under the
department — the tool sits one level shallower:
`/tools/accounting/tax-compliance-regulations/avalara`. Mirror the use-case tree; do not
invent a segment to pad the depth.

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
`accounting/tax-compliance-regulations/avalara`, and
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
