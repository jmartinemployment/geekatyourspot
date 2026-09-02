# Glossary (superseded)

This document is **superseded**. Glossary terms are stored in PostgreSQL (`geek_glossary` schema) and served via Geek-Repository → Geek-API.

## Status: complete (Sep 2026)

| Area | Status |
|------|--------|
| SQL schema + seed (`0034`–`0037`) | Applied via Railway on GeekRepository deploy |
| GeekRepository + GeekAPI layers | Live — `GET /api/glossary/terms` returns 267 terms |
| geekatyourspot API client + ISR pages | Deployed — `/glossary/[slug]` |
| Manual linking (use cases, tools, blogs) | Complete — see `glossary-linking-log.md` |
| Static glossary data + auto-linker | Removed |
| `next build` E2E | Passes with `GEEK_API_URL=https://api.geekatyourspot.com` |
| Sitemap | Includes glossary term URLs |

**Preview:** https://geekatyourspot.com/glossary/chatbot

## Architecture

- **Database:** `GeekBackend/GeekRepository/Migrations/Sql/0034`–`0037`
- **API:** `GET /api/glossary/terms`, `GET /api/glossary/terms/{slug}` (public reads)
- **Frontend:** `src/lib/geek-api/glossary.ts` with ISR (`revalidate: 3600`, `dynamicParams: true`)
- **Linking:** Manual `<GlossaryLink>` / `<a href="/glossary/{slug}">` only

## Admin writes

`POST/PUT/DELETE /api/glossary/terms` require `X-API-Key`. Writes optionally trigger on-demand revalidation via `POST /api/revalidate` on the Next.js site.

## Environment variables

| Service | Variable | Purpose |
|---------|----------|---------|
| geekatyourspot | `GEEK_API_URL` | `https://api.geekatyourspot.com` |
| geekatyourspot | `REVALIDATION_SECRET` | Bearer token for `/api/revalidate` |
| GeekAPI | `GlossaryRevalidation:SiteUrl` | geekatyourspot URL for cache invalidation |
| GeekAPI | `GlossaryRevalidation:Secret` | Same as `REVALIDATION_SECRET` |
