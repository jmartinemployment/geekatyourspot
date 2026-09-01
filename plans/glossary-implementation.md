# Add a Glossary section to geekatyourspot

## Context

The site (Next.js 16 App Router, TypeScript, no CMS — fully static content
driven either by hand-coded JSX pages or by typed/parsed data files) has no
glossary/dictionary feature today. `plans/glossary_terms_alphabetized.txt`
holds 259 alphabetized kebab-case term slugs (e.g. `a-b-testing`,
`chatbot`, `zero-shot-learning`) pulled from a competitor's glossary sitemap
— **only the slugs are usable; every definition must be written fresh** for
this site, nothing may be copied.

Two content patterns already exist in this codebase:
- **Hand-coded pages** (`src/data/tools/*.ts` + `src/components/tools/*`) —
  one file per item, full manual JSX sections. Fits ~50 marketing pages, not
  259 short reference entries.
- **HTML-export pipeline** (`src/lib/content-writer/content.ts`) — parses
  `.html` exports with a `<link rel="canonical">` of shape
  `/{collection}/{department}/{slug}`. Hard-requires a `department`
  segment, which a flat glossary doesn't have, and there's no external
  pipeline generating glossary HTML anyway.

Neither pattern fits directly, so the glossary gets its **own lightweight
typed-data pattern**: a single data file of `GlossaryTerm` records, a static
index route, and a dynamic `[slug]` detail route — modeled structurally on
the blog's `[department]/[slug]` route (for `generateStaticParams` /
`generateMetadata` / JSON-LD shape) but flattened to drop the department
dimension.

### Decisions (confirmed with user)

1. **All 259 terms get pages** — no pruning/merging, even near-duplicates
   (e.g. `average-handling-time` vs `average-response-time`) each get a
   distinct, accurate definition.
2. **Definitions get inline links to other glossary terms**, not just a
   trailing "related terms" list.
3. **No dedicated footer link.** The site-wide auto-linker (below) already
   surfaces the glossary everywhere a term is mentioned in body copy, which
   covers discoverability without a standing nav/footer entry. The
   `/glossary` index page itself is still a normal indexed route (reachable
   directly, included in the sitemap) — it's just not pinned in the footer.
4. **Existing tool/use-case/blog body copy gets retrofitted** with links
   into the new glossary terms, in this same pass.

Decisions 2–4 all point at the same mechanism: rather than hand-authoring
markup links in 259 definitions *and* manually editing dozens of existing
pages, build **one reusable glossary auto-linker** that scans rendered text
for known term phrases and wraps the first occurrence per page in a link to
`/glossary/{slug}`. Apply it everywhere text is rendered: glossary
definitions (linking term-to-term), blog article body HTML (via the
existing sanitize pipeline), and tool/use-case hand-coded body copy (via a
small wrapper component existing section components opt into). This keeps
definitions as plain authored strings — no per-entry markup to hand-write —
and makes the "link throughout the entire site" requirement one mechanism
applied in a few places, not 50+ manual edits.

## Implementation phases

### Phase 1 — Data model and lookup layer

**Where terms and definitions actually live:** a single new TypeScript
source file, `src/data/glossary.ts`, committed to the repo like any other
source file (not a database, not a JSON file fetched at runtime, not the
`content-writer`/`backup` HTML pipeline). It exports one plain array
literal, hand-authored/edited directly in that file:

```ts
// src/data/glossary.ts
import type { GlossaryTerm } from "@/types/glossary";

export const glossaryTerms: GlossaryTerm[] = [
  {
    title: "A/B Testing",
    slug: "a-b-testing",
    definition: "", // filled in during Phase 5
  },
  {
    title: "Agent Interface",
    slug: "agent-interface",
    definition: "",
  },
  // ...257 more, one object per line in plans/glossary_terms_alphabetized.txt
];
```

This is the single source of truth — routes, sitemap, and the auto-linker
all read from this one array (via the accessors below), so there's exactly
one place to add, edit, or remove a term.

- `src/types/glossary.ts` — new `GlossaryTerm` interface:
  `{ title: string; slug: string; definition: string; category?: string; shortSummary?: string }`.
  No `relatedTerms` field needed — the auto-linker derives relations from
  definition text itself, so no separate manually-maintained list to keep
  in sync.
- `src/data/glossary.ts` — single array of all 259 `GlossaryTerm` records,
  seeded from `plans/glossary_terms_alphabetized.txt` (Title-Cased `title`
  from each slug, `definition: ""` placeholder initially, per the sketch
  above). One file, not one-per-term — 259 entries of 2-4 sentences is a
  large but reasonably scannable single data file, and avoids a 259-line
  hand-maintained import registry the way `src/data/tools/*` would require.
- `src/lib/glossary.ts` — pure accessor functions built on top of that
  array: `getAllGlossaryTerms()` (returns `glossaryTerms`),
  `getGlossaryTerm(slug)` (finds one by slug), `getGlossaryTermsGroupedByLetter()`
  (buckets `glossaryTerms` by first letter of `title` for the index page).
  These are the only functions the routes, sitemap, and auto-linker are
  allowed to import from — nothing reaches into `src/data/glossary.ts`
  directly.

### Phase 2 — Auto-linker utility

- `src/lib/glossary-linker.ts` — exports `linkGlossaryTerms(html: string, opts?: { skipSlug?: string }): string`.
  - Builds a longest-match-first regex/trie over all glossary `title`
    strings (case-insensitive, whole-word boundaries) once per build (module-level cache, same lazy-load style as `content.ts`'s `getCache()`).
  - Wraps only the **first** matching occurrence per page in
    `<a href="/glossary/{slug}">…</a>`; skips text already inside an `<a>`,
    heading, or `<script>`/`<style>` block; never links a term to itself
    (`skipSlug` — e.g. the `chatbot` glossary page shouldn't self-link
    "chatbot" inside its own definition).
  - Operates on HTML strings, so it composes directly with
    `content-writer/content.ts`'s existing sanitize step and with glossary
    definitions (which get rendered from plain text into a paragraph, then
    piped through the linker before `dangerouslySetInnerHTML`).
- For hand-coded tool/use-case JSX (plain string props, not HTML strings):
  add a small `<AutoLinkedText text={string} />` component under
  `src/components/shared/` that renders `linkGlossaryTerms(escapeHtml(text))`
  via `dangerouslySetInnerHTML` on a `<span>`. Existing section components
  swap their raw `{paragraph}` text output for `<AutoLinkedText text={paragraph} />`
  where body copy is rendered — this is the mechanical, repetitive part of
  the retrofit (touches each section component's paragraph-rendering
  lines, not their structure).

### Phase 3 — Routes and components

- `src/app/(site)/glossary/page.tsx` — static index page: A-Z grouped
  listing (using `getGlossaryTermsGroupedByLetter()`), sticky letter-jump
  nav, `DefinedTermSet` JSON-LD (`hasDefinedTerm` array of
  `{ "@type": "DefinedTerm", name, url }` — name/url only, omit
  description to keep payload light), standard `generateMetadata`.
- `src/app/(site)/glossary/[slug]/page.tsx` — detail page, modeled on
  `src/app/(newspaper-blog)/blog/[department]/[slug]/page.tsx`'s shape:
  `generateStaticParams()` over all 259 slugs, `generateMetadata()` per
  term, `notFound()` on unknown slug, single `DefinedTerm` JSON-LD
  (`name`, `description`, `url`, `inDefinedTermSet`), definition rendered
  through `linkGlossaryTerms(definition, { skipSlug: term.slug })`.
- `src/components/glossary/letter-jump-nav.tsx`,
  `src/components/glossary/glossary-index.tsx`,
  `src/components/glossary/term-detail.tsx` — presentational pieces for
  the two routes.

### Phase 4 — Wire into the rest of the site

- `src/app/sitemap.ts` — add a `glossaryPages` block (same shape as the
  existing `listEntries("blog")` block) covering all 259 detail URLs,
  `priority: 0.5`, `changeFrequency: "monthly"`. The static `/glossary`
  index is auto-picked-up by the existing `staticRoutes()` walk once its
  `page.tsx` exists — no extra code needed for that one.
- No footer/navbar changes — the auto-linker (Phase 2) makes glossary
  terms discoverable from wherever they're mentioned in body copy, and the
  `/glossary` index is reachable directly and via the sitemap without a
  standing nav entry.
- `src/lib/content-writer/content.ts` — pipe `bodyHtml` through
  `linkGlossaryTerms()` in `sanitizeBody()` (or immediately after) so blog
  articles get auto-linked without touching the parser's core logic.
- Retrofit existing hand-coded tool/use-case section components to use
  `<AutoLinkedText>` for their paragraph copy (Phase 2's mechanical work) —
  do this in batches by department, verifying the build after each batch
  rather than as one giant diff.

### Phase 5 — Author the 259 definitions

- With routing/rendering verified against the empty-definition skeleton
  from Phase 1, author definitions in batches of ~20–30 terms, in the same
  order as `plans/glossary_terms_alphabetized.txt`, writing 2-4 original
  sentences per term. Distinct entries even for near-duplicate concepts
  (per decision #1).
- Because definitions now feed the auto-linker, write them so they
  naturally reference other glossary terms by name where relevant (e.g.
  the `chatbot` definition mentioning "natural language processing" and
  "machine learning" will auto-link those phrases) — no manual markup
  needed, just natural prose.

## Verification

- `next build` after Phase 3 (with empty definitions) to confirm all 259
  static params generate and both routes render without error.
- `next build` again after Phase 5 to confirm no build-breaking content
  (unescaped HTML chars, etc.) in authored definitions.
- Spot-check in dev server: `/glossary` index (letter nav jumps work,
  terms grouped correctly), a handful of `/glossary/[slug]` pages
  (definition renders with inline links, JSON-LD present, no self-link),
  one retrofitted tool/use-case page (existing body copy now shows
  glossary links, page layout unchanged), one blog post (auto-linked
  terms appear in body).
- Check generated `sitemap.xml` (`/sitemap.xml` in dev) includes all 259
  glossary URLs plus the `/glossary` index.
