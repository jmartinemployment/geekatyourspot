# Needed Corrections

A running punch list of site corrections to make on geekatyourspot.com. One checkbox per item; keep enough context on each to act on it later without re-investigating.

## Navigation

- [x] **Blog menu — Accounting blog heading resolves.** (noted 2026-10-31, done 2026-10-31)
  - Done: built a hand-coded overview page at `src/app/(site)/blog/accounting/page.tsx` (not an index list) summarizing the three accounting pillars and linking the existing accounting blog posts; the heading already points at `/blog/accounting`. Built an AI Operations blog overview at `src/app/(site)/blog/ai-operations/page.tsx` and added the AI Operations department to `BLOG_MENU`. The static landing coexists with the dynamic `[department]/[...slug]` posts (verified: accounting posts still prerender).

- [x] **AI Front-Office sub-category: relocate Receptionist + Chatbot to AI Operations.** (noted 2026-10-31, done 2026-10-31)
  - Done: physically moved the Intelligent Receptionist and Cross-Platform Chatbot use-case pages and their two tool groups (10 vendor pages) out of `marketing/lead-capture-pipeline` into `ai-operations`, grouped under a new navbar sub-category **AI Front-Office**. New URLs: `/use-cases/ai-operations/ai-receptionist`, `/use-cases/ai-operations/ai-chatbot`, `/tools/ai-operations/intelligent-receptionist/*`, `/tools/ai-operations/cross-platform-chatbot/*`. Updated `USE_CASES_MENU`/`TOOLS_MENU`, `use-cases/page.tsx`, the AI Operations landing, `breadcrumb-levels.ts`, the 10 tool data files (`department: ai-operations`), and repointed all internal links (home card, Marketing pillar tools section). Lead Enrichment & Predictive Scoring stays in Marketing. Data Quality Assessments left as-is (no "AI Data Automation" grouping — Jeff's call). The two companion blog posts (Intelligent After-Hours Receptionist, Cross-Platform Chatbot Lead Capture) moved to `/blog/ai-operations/<slug>` (canonical change in `content-writer-output`), regrouped in `BLOG_MENU` under a blog "AI Front-Office" category, added to the `/blog/ai-operations` overview, with `LINK_OVERRIDES` remapping their in-body links to the relocated pages. The general `smart-chatbots-for-marketing` post stays in Marketing. Build: 528 pages, 0 findings.

- [ ] **Field Service Dispatch sub-category — pending content.** (noted 2026-10-31)
  - Jeff asked earlier for a "Field Service Dispatch" sub-category under AI Operations, but no use case or tools were specified. Left out for now because an empty navbar category renders a dead toggle (opens to nothing). Add it to `USE_CASES_MENU`/`TOOLS_MENU` AI Operations once there is at least one use-case page to put under it.
