# A bilingual statement

Audit reference: GEO decision 10 and L16 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

- The site says nothing about what languages the business works in.
  - The only mentions of Spanish are on tool pages, describing what those tools can write, such as Rytr and Writesonic (rechecked 2026-10-21).
  - The Organization node in `src/lib/seo/organization.ts` has no `knowsLanguage`.
- The audit's L16 notes that Miami competitors offer Spanish. The competitor crawl lists azuldigital.ai, in Hialeah, as an AI marketing studio working in English and Spanish (`plans/competitor-pages-audit-2026-10-20.md`).
- Miami-Dade is part of the service area the site names.

Why it matters: an owner who wants to work in Spanish, searching or asking an AI assistant, only finds a business that says so. Silence reads as "English only".

## What development mode means for it

A sentence and a markup field can be added now at no cost. Nothing reaches search before launch.

## What I need from you

1. **Do you serve clients in Spanish?**
2. **If yes, how far does it go?** Consultations and calls only, or written materials and training too.
3. **If yes, how to say it.**
   - **One sentence on the pages where people decide to contact you.** Little work, and it answers the question.
   - **The same, plus Spanish versions of key pages.** It reaches Spanish searches directly, but it's a translation project that needs language tags on every page.
   - **Say nothing.** That's the right choice if you don't offer it.

## My recommendation

Recommendation: if you serve clients in Spanish, add one sentence where people decide to contact you, plus `knowsLanguage` on the Organization node, and leave translated pages for later. If you don't, say nothing.

Reason: one true sentence gets the business found by people looking for it. Translating pages is a large commitment to make before demand is known.

## The plan once you decide

1. Add the sentence in both breakpoint copies of the pages you name.
2. Add `knowsLanguage: ["en", "es"]` to the Organization node in `src/lib/seo/organization.ts`.

## How I'll check it, and its status

- The sentence renders in both copies, and the two copies match.
- The JSON-LD parses, with `knowsLanguage` on the Organization node.

**Status:** Open, waiting on your decision.
