# content-writer-v2 has no database

content-writer-v2 (separate repo, `~/development/content-writer-v2`) has no database — its only durable output is `.html` files committed to this repo's `content-writer-output/` directory via GitHub's Git Data API. (Migrated from `.mdx` — the body was always raw HTML, `.mdx` was a misnomer. `content.ts` still reads legacy `.mdx` files as a fallback until this directory is fully regenerated.)

This repo (`src/lib/content-writer/content.ts`, `src/components/content-writer/content-page.tsx`) only ever reads those already-committed files. It never talks to content-writer-v2's API, and there is no database anywhere in this pipeline to query or reconcile against.
