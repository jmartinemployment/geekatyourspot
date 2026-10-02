# Tools Directory Structure

How tool pages are addressed and where their components live. Written 2026-10-02; every
count below was taken from the tree that day, so re-grep before trusting an old number.

---

## The structure

A tool page is addressed by **department, then use case, then tool**:

```
/tools/<department>/<use-case>/<tool>
```

```
/tools/accounting/accounts-payable/dext
/tools/accounting/accounts-payable/bill
/tools/accounting/accounts-payable/avidxchange
/tools/accounting/tax-compliance-regulations/avalara
/tools/marketing/ai-content-creation-workflow/chatgpt
```

The use-case segment is the same slug as the pillar it belongs to. `dext` sits under
`accounts-payable` because the pillar it supports is
`/use-cases/accounting/accounts-payable/automated-data-entry-processing`.

**Why the segment earns its place.** A tool is only ever written up *for* a use case — the
Dext page argues Dext for AP data entry, not Dext in the abstract — and the same vendor can
be written up twice for two different jobs. A flat `/tools/accounting/dext` has nowhere to
put the second write-up and no way to say which pillar the first one serves. The nesting
also makes the URL answer "why am I reading about this tool," which a flat slug cannot.

### Directories

| Concern | Path |
|---|---|
| Route | `src/app/(site)/tools/<department>/<use-case>/<tool>/page.tsx` |
| Sections | `src/components/tools/<department>/<use-case>/<tool>/*-section.tsx` |
| Listing metadata | `src/data/tools/<tool>.ts`, registered in `src/lib/tools-mapper.ts` |
| Shared hero | `src/components/tools/shared/tools-hero.tsx` |

Route path and component path carry the same three segments. When they agree, the file that
renders a URL is reachable from the URL by inspection.

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
4. **Update the registry.** `toolHref()` builds `/tools/${tool.department}/${tool.slug}`
   (`src/app/(site)/tools/accounting/page.tsx:51`, and the same function in the marketing
   index). Adding a use-case segment means adding a field to `ToolPageContent`
   (`src/types/tool.ts`) and filling it in for every `src/data/tools/*.ts` entry — the
   type has `slug` and `department` and nothing between them.
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
