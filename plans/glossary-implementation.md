# Glossary (superseded)

This document is **superseded**. Glossary terms are stored in PostgreSQL (`geek_glossary` schema) and served via Geek-Repository → Geek-API.

## Current status (Sep 2026)

| Area | Status |
|------|--------|
| SQL schema + seed (`0034`–`0036`) | Written, pending DB apply |
| Definition quality (`0037`) | Written for top 10 linked terms, pending DB apply |
| GeekRepository + GeekAPI layers | Implemented |
| geekatyourspot API client + ISR pages | Implemented, pushed to `main` |
| Manual linking (use cases, tools, blogs) | Complete — see `glossary-linking-log.md` |
| Static glossary data + auto-linker | Removed |
| `next build` E2E | Blocked until GeekAPI is running with migrations applied |
| Deploy | Waiting until crawls finish |

## Current architecture

- **Database:** `GeekBackend/GeekRepository/Migrations/Sql/0034_geek_glossary_schema.sql` through `0037_glossary_definition_quality.sql`
- **API:** `GET /api/glossary/terms`, `GET /api/glossary/terms/{slug}` (public reads)
- **Frontend:** `geekatyourspot` fetches terms at build/runtime via `src/lib/geek-api/glossary.ts` with ISR (`revalidate: 3600`, `dynamicParams: true`)
- **Linking:** Manual `<GlossaryLink>` / `<a href="/glossary/{slug}">` only — no auto-linker

## Admin writes

`POST/PUT/DELETE /api/glossary/terms` require `X-API-Key`. Writes optionally trigger on-demand revalidation via `POST /api/revalidate` on the Next.js site.

## Environment variables

| Service | Variable | Purpose |
|---------|----------|---------|
| geekatyourspot | `GEEK_API_URL` | Geek-API base URL |
| geekatyourspot | `REVALIDATION_SECRET` | Bearer token for `/api/revalidate` |
| GeekAPI | `GlossaryRevalidation:SiteUrl` | geekatyourspot URL for cache invalidation |
| GeekAPI | `GlossaryRevalidation:Secret` | Same as `REVALIDATION_SECRET` |

## Go-live (after crawls)

1. Start GeekRepository (applies SQL migrations `0034`–`0037`)
2. Start GeekAPI; set `GEEK_API_URL` in geekatyourspot
3. `next build` and verify `/glossary/chatbot`
4. Deploy geekatyourspot
