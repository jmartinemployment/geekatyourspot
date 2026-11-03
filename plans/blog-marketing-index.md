# Plan: the /blog/marketing index page (applied in commit bee76dc6, not pushed)

One item: a department index page for the Marketing blog. It is a dependency of
`plans/navbar-rebuild.md`, which cannot link the Marketing blog categories until this page exists.

## 1. Why

- `/blog/marketing` returns 404. The blog catch-all route (`blog/[department]/[...slug]`) needs at
  least one slug segment, and `src/app/(site)/blog/marketing/` holds only folders of hand-coded
  posts, no `page.tsx`.
- Accounting and AI Operations each have a department page (`blog/accounting/page.tsx`,
  `blog/ai-operations/page.tsx`). Marketing is the only blog department without one.
- The Blog menu's Marketing heading therefore links to a single post
  (`/blog/marketing/how-ai-marketing-systems-transform-small-business-growth`), and the three
  Marketing blog categories have nowhere to point.
- `BREADCRUMB_LEVELS` already lists `/blog/marketing` ("Marketing"), but `LINKED_LEVELS` only links
  levels that have a page, so every Marketing post's breadcrumb shows "Marketing" as plain text.

## 2. What gets built

`src/app/(site)/blog/marketing/page.tsx`, a hand-coded page that follows
`src/app/(site)/blog/ai-operations/page.tsx` exactly in structure:

- `PAGE_TITLE`, `PAGE_DESCRIPTION`, a `Blog` node in a `Graph` for the JSON-LD (`safeJsonLd`),
  `generateMetadata` with canonical `/blog/marketing`, `SHARE_IMAGE`, the same robots block.
- `SharedHeroSection` with `image=""` and `imgAlt=""`, as the sibling pages do.
- An `<article>` with one full-height `<section>` per category, rotating the same background colours
  the siblings use, each with an `<h2>`, one intro paragraph and a `<ul>` of `<Link>`s to the posts.
- `SchedulerShell` at the end.
- No FAQPage, no images, no `#` ids, no redirects.

## 3. Content for approval

Nothing below is applied until Jeff approves the wording. Copy follows the site rules: full
sentences, no dashes, "small businesses", no figures.

Title: **Marketing**. Department names carry no "AI" (`plans/use-cases-names-without-ai.md`), so
the Blog department pages are "Accounting", "Business Operations" and "Marketing". An earlier draft
said "AI Marketing".

Description: "How South Florida small businesses use AI to capture leads, run marketing automation
and spend ad budgets well. Read the Geek blog on each."

Hero summary: "Marketing is where a small team loses the most hours to work a system can do. These
Geek blog posts show how AI captures leads, runs the content and the email, and finds wasted ad
spend."

Home -> Use Cases has no Lead Capture Pipeline category (`plans/use-cases-names-without-ai.md`,
section 5), so the page has two sections, not three: the four Lead Capture Pipeline posts below are
listed under Marketing Automation Platforms (MAP), and the Lead Capture Pipeline section and intro
are dropped. Where each of those four posts lands is question 2 of that plan.

| Section (h2) | Intro paragraph | Posts (label, href) |
|---|---|---|
| Lead Capture Pipeline | "A lead is easier to win while it is still warm, and a small team cannot watch every form, call and chat. These posts cover how AI captures, enriches and scores leads so the right ones reach you first." | Lead Capture Pipelines for B2B Sales, `/blog/marketing/why-your-b2b-sales-need-an-intelligent-lead-capture-pipeline`; Lead Enrichment to Close More Sales, `/blog/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-how-south-florida-can-turn-more-leads-into-sales`; AI Lead Scoring, `/blog/marketing/lead-capture-pipeline/ai-lead-scoring`; Smart Chatbots That Engage Customers, `/blog/marketing/smart-chatbots-for-marketing-transforming-customer-engagement` |
| Marketing Automation Platforms (MAP) | "Content planning, content creation, email and lead scoring all work from the same contact records. These posts cover how AI runs each of those jobs and how they fit together on one platform." | Content Planning That Saves Hours, `/blog/marketing/content-creation-workflow/intelligent-content-planning-how-south-florida-can-save-hours-and-drive-more-sales`; Content Generation Without New Hires, `/blog/marketing/content-creation-workflow/intelligent-content-generation-for-miami-how-to-save-time-and-scale-without-extra-hires`; Streamline Content Workflows with AI, `/blog/marketing/how-to-streamline-your-content-workflow-with-ai`; AI Content Repurposing, `/blog/marketing/content-creation-workflow/ai-content-repurposing`; AI in SEO Content Creation, `/blog/marketing/unlocking-the-potential-of-ai-in-seo-content-creation`; What Miami Businesses Miss Without AI, `/blog/marketing/marketing-automation-platforms/what-miami-businesses-miss-without-local-ai-automation` |
| Automated Ad Spend Optimization | "Ad budgets leak through weak copy, loose targeting and campaigns nobody has time to watch. These posts cover how AI finds the waste and moves the money to what brings in leads." | How AI Transforms Ad Spend in 4 Ways, `/blog/marketing/how-ai-transforms-ad-spend-4-key-strategies`; Stop Wasting Ad Dollars in Miami, `/blog/marketing/ad-spend-optimization/how-miami-businesses-can-stop-wasting-ad-dollars-now`; Stop Wasting Ad Spend in South Florida, `/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend`; **new:** Stop Wasting Ad Budget and Start Seeing Real Returns, `/blog/marketing/ad-spend-optimization/how-local-miami-small-businesses-can-stop-wasting-ad-budget-and-start-seeing-real-returns` |

Two items in that table need Jeff's yes, because they go beyond what the menu lists today:

1. The fourth Ad Spend post (2026-10-30, the fifth entry in `src/data/blog/hand-coded-posts.ts`) is
   in no menu today. It goes on this page and into `BLOG_MENU` under Automated Ad Spend
   Optimization, so the page and the menu agree. Its short label is proposed, not existing.
2. `/blog/marketing/how-ai-marketing-systems-transform-small-business-growth` is the department
   overview post and sits in no category. Proposed: it opens the page as a "Start here" link under
   the hero summary, ahead of the three sections. The alternative is leaving it off the page and
   keeping it reachable from `/blog` only.

## 4. Side effects

- `/blog/marketing` changes from 404 to 200. Static routes win over the catch-all, so no existing
  post route changes.
- Breadcrumbs on every Marketing blog post start linking "Marketing" to this page, and their
  BreadcrumbList structured data gains that level, because `LINKED_LEVELS` picks up the new
  `page.tsx` at build time.
- The sitemap, which reads page files, gains the page.
- `/llms.txt` is unchanged, because its Blog section lists only `/blog`.
- No redirects, no `#` URLs, no changes to any post.

## 5. Order and dependency

1. Write `blog/marketing/page.tsx` after the wording above is approved.
2. `next build`; `npm run check:faq` is unaffected because the page has no FAQPage.
3. Headless render at 1366 and 390 (after Jeff approves running it): hero, three or four sections,
   links in the colour each ground calls for, no overflow, scheduler present, one BreadcrumbList.
4. Only then does `plans/navbar-rebuild.md` point the Blog menu's Marketing heading and its three
   categories at `/blog/marketing`, so no menu link ever points at a 404.

Rollback: one commit; reverting it returns the route to 404 and the navbar plan's Marketing blog
links go back to `/blog`.
