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

## 6. Files touched in this layout pass

- `backup/marketing/Automated Content Generation/blog/unlocking-the-potential-of-automated-content-generation-for-small-businesses.html` — moved + patched (3 URLs)
- `backup/marketing/Automated Content Generation/use-cases/automated-content-generation-transforming-small-business-marketing.html` — patched canonical (1 URL + JSON-LD)
- `backup/marketing/Automated Content Generation/blog/blog/` — removed
- This file (`_LAYOUT.md`) — added as living doc
