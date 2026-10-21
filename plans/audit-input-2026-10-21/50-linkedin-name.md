# LinkedIn name

Audit reference: GEO M5 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

The LinkedIn company page uses a different name from the site.
- **GEO M5, 2026-10-20.** LinkedIn names the business "Geek @ Your Spot".
- **Rechecked 2026-10-21.** The site names it "Geek @ Your Spot LLC" on every page, and the Organization node in `src/lib/seo/organization.ts` lists the LinkedIn page, `https://www.linkedin.com/company/geekatyourspot`, in `sameAs`.

Why it matters. `sameAs` tells engines that the LinkedIn page and the site are the same business. When the names on the two differ, that link is weaker. AI engines that describe a business often draw on its LinkedIn page.

## What development mode means for it

LinkedIn is live now, and the rename doesn't depend on the site being indexed.

## What I need from you

Rename the LinkedIn company page "Geek @ Your Spot LLC" in its page settings. LinkedIn may limit how often a company page's name can change, so make the change once, in its final form.

## My recommendation

Recommendation: use "Geek @ Your Spot LLC", exactly as the site and the Organization node write it.

## The plan once you decide

1. You rename the page on LinkedIn.
2. Tell me when it's done. I compare the public page with the site. The `sameAs` URL stays the same, so the site needs no change.

## How I'll check it, and its status

The public LinkedIn page's name matches the `name` in `src/lib/seo/organization.ts`, and the `sameAs` URL still opens the page.

**Status:** Open, waiting on you.
