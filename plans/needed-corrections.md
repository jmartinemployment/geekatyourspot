# Needed Corrections

A running punch list of site corrections to make on geekatyourspot.com. One checkbox per item; keep enough context on each to act on it later without re-investigating.

## Navigation

- [x] **Blog menu — Accounting blog heading resolves.** (noted 2026-10-31, done 2026-10-31)
  - Done: built a hand-coded overview page at `src/app/(site)/blog/accounting/page.tsx` (not an index list) summarizing the three accounting pillars and linking the existing accounting blog posts; the heading already points at `/blog/accounting`. Built an AI Operations blog overview at `src/app/(site)/blog/ai-operations/page.tsx` and added the AI Operations department to `BLOG_MENU`. The static landing coexists with the dynamic `[department]/[...slug]` posts (verified: accounting posts still prerender).
