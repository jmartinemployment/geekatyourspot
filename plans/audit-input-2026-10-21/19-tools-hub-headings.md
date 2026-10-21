# The /tools/accounting and /tools/marketing headings

Audit reference: GEO L11 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

On the two tools department pages, the main heading and the title describe the page differently (rechecked 2026-10-21):

| Page | Main heading (H1) | Title, shown in search results |
|---|---|---|
| `/tools/accounting` | "Accounting & Finance" (`src/app/(site)/tools/accounting/page.tsx:117`) | "Accounting AI Tools & Platforms" (`:15`) |
| `/tools/marketing` | "Marketing & Content" (`src/app/(site)/tools/marketing/page.tsx:117`) | "Marketing AI Tools & Platforms" (`:15`) |

- The heading names the department, and the title names what the page lists, which is tools.
- `/tools` itself matches: its heading and its title are both "AI Tools & Platforms".
- Search engines and AI read the heading as the page's topic. A reader arriving from a search for accounting AI tools lands on a heading that doesn't say "tools".
- When the heading and title disagree, Google sometimes rewrites the title in its results using the heading.

## What development mode means for it

The headings can change now at no cost. Nothing reaches search before launch.

## What I need from you

Which wording to use on the two pages:

- **Keep the headings as they are.** The department names stay, and the mismatch stays.
- **Change the headings to the titles**, "Accounting AI Tools & Platforms" and "Marketing AI Tools & Platforms". The heading says what the page lists, and it's longer, so it may wrap to two lines on phones.
- **Change the titles to match the headings.** The department names stay everywhere, and the search words "AI Tools" leave the titles.

## My recommendation

Recommendation: change the headings to the titles.

Reason: the titles describe what the pages hold, they match how `/tools` already reads, and the summary under each heading names the department anyway.

## The plan once you decide

- **To change the headings:** edit only the H1 text in the two `page.tsx` files. Both pages have one heading block each, so there's no second breakpoint copy to change.
- **To change the titles:** edit `PAGE_TITLE` in the two files. The Open Graph and Twitter titles use it.
- No font or class changes.

## How I'll check it, and its status

- The rendered pages at 390 and 1440 px show the chosen heading with nothing overflowing.
- A check of the title and heading on both pages confirms they match.

**Status:** Open, waiting on your decision.
