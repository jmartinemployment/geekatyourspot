# Automated Content Generation — Blog Layout (Automation-Aligned)

> Source: `backup/marketing/Automated Content Generation/` mirrors the Content Writer v2 export pipeline.
> Renderer: `src/lib/content-writer/content.ts` (walks `backup/**` + `content-writer-output/**`, classifies by `<link rel="canonical">`) → `src/app/(newspaper-blog)/blog/*`

## 1. What was wrong

```
blog/
  unlocking-the-power-of-automated-content-generation.html   ✅ canonical /blog/marketing/...
  blog/
    unlocking-the-potential-of-automated-content-generation-for-small-businesses.html  ❌ canonical /use-cases/blog/...
```

`content.ts` parses `canonical` as `/<collection>/<department>/<slug>`. With `/use-cases/blog/...` the file was classified as `collection=use-cases`, not `blog`, so:

- `listEntries("blog")` hid it (11 posts only)
- `listEntries("use-cases")` showed a phantom entry `/use-cases/blog/unlocking-the-potential...`
- `/blog/marketing/unlocking-the-potential...` 404'd; `/use-cases/blog/...` had no route
- `use-cases/automated-content-generation-transforming-small-business-marketing.html` had the same double-prefix bug: `/use-cases/use-cases/...`

## 2. Fix applied

```bash
# 1. Move nested file up one level and patch canonicals
backup/marketing/Automated Content Generation/blog/blog/unlocking-the-potential...html
  → backup/marketing/Automated Content Generation/blog/unlocking-the-potential...html
  — canonical + og:url + JSON-LD mainEntityOfPage: /use-cases/blog/... → /blog/marketing/...

# 2. Fix pillar duplicate
backup/.../use-cases/automated-content-generation-transforming-small-business-marketing.html
  — canonical: /use-cases/use-cases/... → /use-cases/marketing/...

# 3. Remove empty directory
rmdir backup/.../blog/blog
```

Verification (`npm run urls`):

```
blog (12):
  /blog/marketing/unlocking-the-potential-of-automated-content-generation-for-small-businesses  ← now visible, newest
  /blog/marketing/unlocking-the-power-of-automated-content-generation
  ...

use-cases (16):
  /use-cases/marketing/automated-content-generation-transforming-small-business-marketing  ← fixed
  ...
```

## 3. Canonical layout — follow every other campaign

Reference campaigns (all identical shape): `SEO Blog and Article Generation`, `AI Content Repurposing`, `Automated Ad Spend`, `AI Content Creation Workflow`, `Personalized Email Campaigns`.

```
backup/marketing/Automated Content Generation/
  automated-content-generation.html                          # pillar (canonical /use-cases/marketing/automated-content-generation)
  ads/
    boost-your-business-with-automated-content-generation.txt
  blog/
    unlocking-the-power-of-automated-content-generation.html                         # BlogPosting 923 words — /blog/marketing/...
    unlocking-the-potential-of-automated-content-generation-for-small-businesses.html # BlogPosting 2378 words — /blog/marketing/... ← FIXED
  email/
    automated-content-generation-cold-outreach.html          # cold email (no canonical — excluded from content.ts)
    email/unlock-effortless-content-creation-with-ai.txt
  image-prompts/
    blog/automated-content-generation-blog-hero.txt
    pillar/automated-content-generation-pillar-hero.txt
    sections/automated-content-generation-*.txt
    image-prompts/{ads,blog,email,pillar,sections,social}/...  # per-H2 prompts (nested mirror — kept)
  social/
    facebook/automated-content-generation-facebook.html
    linkedin/automated-content-generation-linkedin.html
    social/linkedin/automated-content-generation.txt
  tools/
    marketing/{copyai,jasper,pictory,synthesia,writesonic}.html  # canonical /tools/marketing/<slug>
  use-cases/
    automated-content-generation-transforming-small-business-marketing.html  # TechArticle — /use-cases/marketing/...

content-writer-output/   # live export target (content.ts prefers this over backup)
  (empty — backup is currently authoritative; next Content Writer run will populate here)
```

Rules enforced by `src/lib/content-writer/content.ts`:

- Only `.html` with `<link rel="canonical" href="https://geekatyourspot.com/<collection>/<dept>/<slug>">` are indexed. `COLLECTIONS = ["use-cases","blog","tools"]`, exactly 3 path segments.
- Files without canonical (ads `.txt`, social, image-prompts, email) are intentionally skipped.
- `content.ts` strips leading `<h1>` + duplicate `<h2>` and sanitizes to `ALLOWED_TAGS`; the article body is rendered via `dangerouslySetInnerHTML` in `src/app/(newspaper-blog)/blog/[department]/[slug]/page.tsx`.
- Newspaper front page (`src/app/(newspaper-blog)/blog/page.tsx`) paginates `listEntries("blog")` at `POSTS_PER_PAGE=4`; with 12 posts → 3 editions. Lead story = newest blog, wire = next 3, plus 3 rotating pillars and 4 tool ads per page.

## 4. Blog rendering pipeline

```
backup/.../blog/*.html  ─┐
                         ├─► src/lib/content-writer/content.ts ─► listEntries("blog") / getEntry("blog", dept, slug)
content-writer-output/** ─┘                                          │
                                                                    ▼
                                              src/app/(newspaper-blog)/blog/page.tsx         (grid, page-turn)
                                              src/app/(newspaper-blog)/blog/[dept]/[slug]/page.tsx  (article)
                                              src/app/sitemap.ts (blog URLs with weekly priority 0.7)
```

No code changes required — fixing canonicals is sufficient for the newspaper to pick up the new post as lead story on page 1.

## 5. Adding a third blog post (next time)

1. Generate HTML with Content Writer (Jasper/ChatGPT draft → Claude review)
2. Set `<link rel="canonical" href="https://geekatyourspot.com/blog/marketing/<new-slug>">`, `<meta name="slug">`, `<meta name="department" content="marketing">`, `<meta name="date">`, and BlogPosting JSON-LD
3. Drop file as `backup/marketing/Automated Content Generation/blog/<new-slug>.html` (and optionally commit same file to `content-writer-output/blog/<new-slug>.html` to override backup)
4. Verify: `npm run urls` should show `/blog/marketing/<new-slug>` and `getTotalPages()` increments when count crosses multiple of 4

## 6. Use-case page (hand-coded)

Created per `plans/hand-coded-use-case-page-layout-prompt.md`:

- `src/app/(site)/use-cases/marketing/automated-content-generation-transforming-small-business-marketing/page.tsx` — `SharedHeroSection` (title `Automated Content Generation: Transforming Small Business Marketing`, heroSummary from `<meta name="heroSummary">`) + 5 content sections + PAA + `SchedulerShell`, canonical `/use-cases/marketing/automated-content-generation-transforming-small-business-marketing`
- `src/components/use-cases/marketing/automated-content-generation-transforming-small-business-marketing/`
  - `lede-section.tsx` (`#023059`, `The Core Problem: Inconsistent Marketing Output`)
  - `ai-content-to-lead-engine-section.tsx` (`#024059`, `AI Content-to-Lead Engine`)
  - `generate-primary-asset-section.tsx` (`#025E73`, `Generate a Primary Asset`)
  - `repurpose-automatically-section.tsx` (`#8C4E2A`, `Repurpose Automatically` — dark bg links `text-[#0B162A]`)
  - `route-approval-publishing-section.tsx` (`#BF5934`, `Route through approval and publishing` — dark bg)
  - `paa-section.tsx` (single-block PAA, `hr` separators, `#023059`)

Homepage link: `src/components/home/use-cases.tsx` — both mobile (`~line 634`) and desktop (`~line 1787`) `Automated Content Generation:` headings now wrapped in `<Link href="/use-cases/marketing/automated-content-generation-transforming-small-business-marketing">` with `gtmLinkIdFromHref`.

## 7. Tools layout — `backup/marketing/AI Content Creation Workflow/tools/`

Source folder (excluding the two aggregate/empty entries per prompt):

```
backup/marketing/AI Content Creation Workflow/tools/
  chatgpt.html          → <title>ChatGPT</title>          slug=chatgpt        canonical /tools/marketing/chatgpt
  claude.html           → <title>Claude</title>           slug=claude         canonical /tools/marketing/claude
  contentstudio.html    → <title>ContentStudio</title>     slug=contentstudio  canonical /tools/marketing/contentstudio
  copyai.html           → <title>Copy.ai</title>           slug=copyai         canonical /tools/marketing/copyai
  jasper-ai.html        → <title>Jasper AI</title>         slug=jasper-ai      canonical /tools/marketing/jasper-ai
  (excluded) ai-content-creation-workflow/                — empty dir, not a tool
  (excluded) top-ai-tools-for-ai-content-creation-workflow.html — aggregate list page, not a distinct tool
```

Distinctness check (5 distinct `slug` values, no duplicates; normalized `copyai` not `copy-ai`, `jasper-ai` not `jasper` — the Automated campaign's `tools/marketing/jasper.html` (`slug=jasper`) is a separate campaign artifact and is **not** merged here):

```
chatgpt, claude, contentstudio, copyai, jasper-ai — 5/5 unique
```

Each has a hand-coded page under `src/app/(site)/tools/marketing/<slug>/page.tsx` (verified: `chatgpt`, `claude`, `contentstudio`, `copyai`, `jasper-ai` all exist).

Homepage wiring — `src/components/home/use-cases.tsx` → `Automated Content Generation:` → `Top AI Automated Content Generation Tools:`:

```tsx
<h6>Top AI Automated Content Generation Tools:</h6>
<p className="text-xs">
  <Link href="/tools/marketing/chatgpt">ChatGPT</Link>,
  <Link href="/tools/marketing/claude">Claude</Link>,
  <Link href="/tools/marketing/contentstudio">ContentStudio</Link>,
  <Link href="/tools/marketing/copyai">Copy.ai</Link>,
  <Link href="/tools/marketing/jasper-ai">Jasper AI</Link>.
</p>
```

Both mobile and desktop blocks updated; display names match `<title>` exactly, `href` matches `<meta name="slug">`/`canonical`, `id={gtmLinkIdFromHref(...)}` for analytics. The previous list (`Writesonic`, `Jasper`, `Synthesia`, `Pictory`, `Copy.ai`) is retired from this position — those remain distinct tools under `backup/marketing/Automated Content Generation/tools/marketing/` (`copyai`, `jasper`, `pictory`, `synthesia`, `writesonic`) and are still indexed via `content.ts` for the blog/use-cases that reference them.

## 8. Files touched in this layout pass

- `backup/marketing/Automated Content Generation/blog/unlocking-the-potential-of-automated-content-generation-for-small-businesses.html` — moved + patched (3 URLs)
- `backup/marketing/Automated Content Generation/use-cases/automated-content-generation-transforming-small-business-marketing.html` — patched canonical (1 URL + JSON-LD)
- `backup/marketing/Automated Content Generation/blog/blog/` — removed
- `src/components/use-cases/marketing/automated-content-generation-transforming-small-business-marketing/*` (6 sections) — created
- `src/app/(site)/use-cases/marketing/automated-content-generation-transforming-small-business-marketing/page.tsx` — created
- `src/components/home/use-cases.tsx` — `Automated Content Generation:` now links to new use-case; `Top AI Automated Content Generation Tools:` now lists `ChatGPT`/`Claude`/`ContentStudio`/`Copy.ai`/`Jasper AI` matching the 5 distinct slugs above (both responsive blocks)
- This file (`_LAYOUT.md`) — updated
