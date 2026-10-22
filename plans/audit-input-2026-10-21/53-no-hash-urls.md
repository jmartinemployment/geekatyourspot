# No # URLs

Audit reference: none. You raised it on 2026-10-21. It changes GEO H9 and M14 in `plans/geo-seo-audit-2026-10-20.md`, and H4b, L8 and the author credit under M4 in `plans/seo-audit-2026-10-20.md`.

## The problem

A `#` in a URL points at a spot inside a page. Before this change the site used `#` URLs in three places (counted 2026-10-21):

- **Labels in the structured data.** Each page carries structured data that search engines and AI tools read. Its items were labelled with `#` addresses that nobody visits, and other items pointed at those labels. Examples:
  - `…/ai-accounts-payable#article` and `…#faq` on every pillar and tool page;
  - `https://geekatyourspot.com/#organization` on every publisher and author;
  - `https://geekatyourspot.com/#software-bill` for each tool an article mentions;
  - `/about#jeff-martin`, `/#webpage`, `/#breadcrumb`, `/#primaryimage` and `/glossary#glossary`.

  They took about 1,000 edits in 162 files: page files under `src/app/(site)/`, the shared business entry in `src/lib/seo/organization.ts`, the tool records in `src/data/tools/`, and the blog export files.
- **The 23 pillar Service items.** `pillarService()` gave each pillar a `<pillar url>#service` item. It was added under GEO H9 in `d6989dc`.
- **Jump links to the scheduler.** 122 "book a consultation" and "Get Your Free AI Assessment" links pointed at `#consultationAppointment2xl`, so a click put that in the address bar. 108 were in components and 14 in the blog exports.

Your words on 2026-10-21: "NIX", "I will have a Service Menu Item(s)", "no hash tags in urls", "and # period" and "remove all hashtags".

## What development mode means for it

Nothing is indexed yet, so the structured data can change shape now with nothing to carry over.

## What I need from you

Nothing. You decided it on 2026-10-21.

## My recommendation

None. You decided it.

## What was done

Applied on 2026-10-21 (`cccde1c`).

- **The pillar Service items.** They're deleted, along with `pillarService()`. So is every `about` pointer at a `#service` item, including the methodology page's pointer at the home page's Service item. The services section you plan will describe the services.
- **The business.** `src/lib/seo/organization.ts` prints one business item on every page, with the logo and founder written inside it. Every publisher, author and provider names the business by its name and `https://geekatyourspot.com`.
- **Labels on items.** Every `@id` with a `#` is deleted. That covers articles, FAQs, the About page, the glossary and the tool records. Each item keeps its page address in `url` or `mainEntityOfPage`.
- **Pointers between pages.** `isPartOf` and `subjectOf` name the other page's article by its address, with no `#article`. The tool records' `relatedArticleId` drops `#article` too.
- **Tools an article mentions.** Each `mentions` entry carries the tool's name and website. The separate tool items are deleted.
- **The home page.** Its web page item holds its image and breadcrumb inside it. Its Service item stays, without the `#service` label.
- **Jump links.** Each is now a button that scrolls to the scheduler without changing the address.
  - The scheduler then takes focus, so Tab moves into the calendar.
  - Each button keeps the id it had as a link, such as `gys-link-anchor-consultationappointment2xl-hero-assessment`, so analytics ids don't change.
  - The blog loader carries the button through as its own piece, and it turns any link with a `#` in it into plain text.
- **Not changed.**
  - The raw export files under `content-writer-output/` for tool and use-case pages still hold their `#` labels and 104 jump links. The site doesn't read them.
  - The third-party font README files in `public/fonts/` link Adobe's help page with a `#`.

## How it was checked, and its status

- A production build and `tsc` pass. ESLint's 53 errors are all on lines this change didn't touch.
- A crawl of all 448 pages on the local build finds:
  - no `#` in any link, image, form or structured data value;
  - structured data that parses on every page;
  - all 446 site addresses named in the structured data returning 200.
- In headless Chromium at 1440 and 390 px, four buttons were tested: the hero button on a pillar, the home page's hero button, an in-text button on a tool page, and the button in a blog post.
  - Each one scrolls to the scheduler, leaves the address without a `#` and focuses the section.
  - After the calendar loads, the section settles where the old jump left it.
- **Google Tag Manager needs one trigger from you.** The published container `GTM-K5CXSQRP` (fetched 2026-10-21) has one click trigger. It's a "Just Links" trigger on "Click ID starts with `gys-link-`", and GTM's link listener only sees `<a>` elements.
  - So a click on one of the 122 buttons no longer fires its tag, though the ids are unchanged. That includes the hero's "Get Your Free AI Assessment".
  - Every other `gys-link-` link still fires.
  - The fix: add an "All Elements" click trigger with the same Click ID condition, and attach it to the same tag. Then publish the container.

**Status:** Applied and committed in `cccde1c`. The GTM trigger is waiting on you.
