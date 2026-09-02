# Glossary (superseded)

This document is **superseded**. Glossary terms are stored in PostgreSQL (`geek_glossary` schema) and served via Geek-Repository → Geek-API.

## Current architecture

- **Database:** `GeekBackend/GeekRepository/Migrations/Sql/0034_geek_glossary_schema.sql` + `0035_seed_geek_glossary.sql`
- **API:** `GET /api/glossary/terms`, `GET /api/glossary/terms/{slug}` (public reads)
- **Frontend:** `geekatyourspot` fetches terms at build/runtime via `src/lib/geek-api/glossary.ts` with ISR (`revalidate: 3600`, `dynamicParams: true`)
- **Linking:** Manual `<Link>` / `<a href="/glossary/{slug}">` only — no auto-linker

## Admin writes

`POST/PUT/DELETE /api/glossary/terms` require `X-API-Key`. Writes optionally trigger on-demand revalidation via `POST /api/revalidate` on the Next.js site.

## Environment variables

| Service | Variable | Purpose |
|---------|----------|---------|
| geekatyourspot | `GEEK_API_URL` | Geek-API base URL |
| geekatyourspot | `REVALIDATION_SECRET` | Bearer token for `/api/revalidate` |
| GeekAPI | `GlossaryRevalidation:SiteUrl` | geekatyourspot URL for cache invalidation |
| GeekAPI | `GlossaryRevalidation:Secret` | Same as `REVALIDATION_SECRET` |
