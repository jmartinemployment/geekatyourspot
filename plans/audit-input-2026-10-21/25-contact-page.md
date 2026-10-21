# A contact page

Audit reference: GEO H4 in `plans/geo-seo-audit-2026-10-20.md`, and SEO M4 in `plans/seo-audit-2026-10-20.md`

## The problem

- `/contact` has no page in this repo (rechecked 2026-10-21).
- The footer's Contact link is commented out at `src/components/layout/footer.tsx:11`, inside an empty `navLinks` list.
- How visitors can reach you today (rechecked 2026-10-21):
  - The phone number and street address show in the footer (`footer.tsx:146` and `:153`), and on the privacy policy and terms pages.
  - Booking works only through the scheduler, which needs JavaScript.
  - The hours appear only in the markup (`src/lib/seo/organization.ts`).
- You said you may have a contact page. Here's what exists:
  - **This repo** has a server action, `src/lib/actions/submit-contact.ts`, that emails a contact request through Resend. It takes first name, last name, phone and email. Nothing on the site calls it. If its sender or recipient setting is missing, it falls back to `noreply@geekatyourspot.com`.
  - **The older site on the Seagate drive** has no contact route.
    - `components/contact/` holds a slide-out "Contact Us" form, with name, email, optional phone, optional company, a message and a hidden anti-spam field, plus a section with a button that opens it.
    - The form sends through a server action to `ORDERSTACK_API_URL/api/contact`, which defaults to `get-order-stack-restaurant-backend.onrender.com`.
    - `geekatyourspot-r/backup/contact/` holds hero, FAQ, case study, score card and tech badge sections. The hero's copy is commented out.
- The security policy in `next.config.ts` sets `form-action 'self'`.
  - A form that submits to this site, including through a server action, is allowed.
  - A form that posts straight to an outside service is blocked unless that service is added.

Why it matters: Google and AI engines look for a contact page, with a name, address and phone that match the Business Profile, before they trust a local business. Visitors who don't want to book a call have no form to use.

## What development mode means for it

The page and form can be built and tested now at no cost. Nothing reaches search before launch.

## What I need from you

1. **Which contact page you meant**, if it's somewhere other than the two places above.
2. **A form: yes or no.**
   - **Yes, through this site's server action.** It works with the current security policy, and it needs a working Resend key.
   - **No form.** The page shows phone, address, hours, map and the scheduler only. It's simpler, and gives visitors one less way to reach you.
3. **If there's a form, its fields, and where submissions go.**

## My recommendation

Recommendation: a page with these, wired to the existing `submit-contact.ts` action:
- the name, address, phone and hours, exactly as in `src/lib/seo/organization.ts`;
- the map link and the scheduler;
- a short form.

The action should fail with a clear error, rather than fall back, when a setting is missing.

Reason: the action is already in this repo and passes the security policy. Showing the hours fixes the only detail that's in the markup alone.

## The plan once you decide

1. Build `src/app/(site)/contact/page.tsx` in the two-block breakpoint pattern, with a `ContactPage` node that names the business by its name and site URL, as every node does since document 53.
2. If there's a form, add a client form component that calls `submitContact`, and remove the fallback addresses from `submit-contact.ts`.
3. Restore the Contact link in `src/components/layout/footer.tsx`. `src/app/sitemap.ts` lists the page automatically.

## How I'll check it, and its status

- A crawl of the local build shows the page reachable from `/`, with the name, address and phone matching the Organization node.
- If there's a form, a test submission arrives, and the console shows no security-policy errors.

**Changed on 2026-10-21.** You said "go for it", with a form, and "remove contact info from footer then".
- `src/app/(site)/contact/page.tsx` is "Contact Jeff Martin": the hero, "Call or Visit" with the address, phone, office hours and Google Maps link, "Send a Message" with the form, and the scheduler. It carries a `ContactPage` node and the breadcrumb.
- The form (`src/components/contact/contact-form.tsx`) takes first and last name, email, phone and a message, with a hidden field that only bots fill in. It sends through `submitContact`, which escapes what visitors type, sets the reply-to to their email, and has no fallback addresses. With `RESEND_API_KEY`, `NEXT_PUBLIC_FROM_EMAIL` or `CONTACT_TO_EMAIL` unset, it sends nothing and the page asks the visitor to call.
- The footer no longer shows the address and phone. Contact is a link under Resources, and the empty `navLinks` list is gone. `/llms.txt` and the sitemap list the page.
- A local build shows the page on phone and desktop, the breadcrumb, the footer link, no security-policy errors, and the form failing closed with the two email settings unset.
- **Yours to do:** set `NEXT_PUBLIC_FROM_EMAIL` (a sender on the domain Resend has verified) and `CONTACT_TO_EMAIL` (where messages go) in Vercel. Until then the form tells visitors to call.

**Deleted later on 2026-10-21.** You said "Delete contact or hide, maybe I can think of something", then: the address "is not an office it is my home address, with a gated entry", "And now you know why there is no contact".
- The page and its form are deleted. They are in `bc7a0c7` if you want them back.
- The footer shows the phone and address again, and `/llms.txt` no longer lists the page.
- `submit-contact.ts` keeps the fail-closed version, with no fallback addresses. Nothing calls it.
- If a contact page comes back, it shows no street address, never calls the address an office, and its map shows the service area, not the house.

**Status:** Closed. No contact page, by your decision.
