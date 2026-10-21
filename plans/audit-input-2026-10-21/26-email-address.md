# An email address

Audit reference: GEO H4 in `plans/geo-seo-audit-2026-10-20.md`, and SEO M4 in `plans/seo-audit-2026-10-20.md`

## The problem

- No email address appears on any page, either in the visible text or in the markup (rechecked 2026-10-21).
- The only addresses in the code are `noreply@geekatyourspot.com`, used server-side as the sender in `src/lib/actions/submit-contact.ts:25` and `src/services/booking-confirmation.service.ts:102`. Visitors never see it.
- The Organization node in `src/lib/seo/organization.ts` has a phone and an address, and no `email`.
- The privacy policy and terms pages tell readers to call, or to write to the street address (`src/components/privacy-policy/contact-section.tsx:10`, `src/components/terms-and-conditions/contact-section.tsx:10`).
- Old search results still show `info@geekatyourspot.com` from the site before 2026 (GEO H7, audit 2026-10-20).

Why it matters:
- Some owners would rather write than call or book.
- AI assistants and directories look for a contact email when they describe a business.
- A privacy policy with no email gives readers no easy way to send a privacy request.

## What development mode means for it

An address can be added now at no cost. Nothing reaches search before launch.

## What I need from you

1. **Which address to publish**, and whether `info@geekatyourspot.com` still receives mail.
2. **Where it shows.**
   - **The contact page only.** One place, and the least spam.
   - **The contact page plus the privacy and terms contact sections.** Covers privacy requests, with a little more exposure.
   - **Also the footer, on every page.** The easiest to find, and the most exposed to spam.
3. **A link that opens the visitor's email app, or plain text.**

## My recommendation

Recommendation: one address you check daily, on the contact page and in the privacy and terms contact sections, as a link, plus `email` on the Organization node.

Reason: it covers the places readers look for it, and it keeps the address off every page's footer.

## The plan once you decide

1. Add `email` to the Organization node in `src/lib/seo/organization.ts`.
2. Add the address to the components you name, such as `src/components/privacy-policy/contact-section.tsx` and `src/components/terms-and-conditions/contact-section.tsx`.
3. If it's a link, give it an id through `gtmLinkIdFromHref`. `src/lib/gtm/link-id.ts:41` already handles email links.

## How I'll check it, and its status

- The rendered pages and the JSON-LD show the same address.
- A test email to it arrives.

**Status:** Open, waiting on your decision.
