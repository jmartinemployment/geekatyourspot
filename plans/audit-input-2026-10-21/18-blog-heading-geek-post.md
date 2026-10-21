# The blog's "Geek Post" heading

Audit reference: GEO L11 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

You asked what is wrong with "Geek Post". Nothing is wrong with the name. The point is how it sits next to the page's title (rechecked 2026-10-21):

| Part of `/blog` | Text | Where |
|---|---|---|
| Main heading (H1) | "Geek Post" | `src/app/(site)/blog/page.tsx:155`, rendered at `src/components/blog/blog-hero-section.tsx:47-48` |
| Title, shown in search results and tabs | "AI for Small Business Blog" | `page.tsx:20` |
| Summary under the heading | "Dispatches from the actual work on what AI does for a South Florida small business in content, campaigns, lead capture, cash flow and compliance, and where it falls short." | `page.tsx:18-19` |

- Search engines and AI read the main heading as the page's topic. "Geek Post" names the blog, but not what it covers.
- When a page's heading and title disagree, Google sometimes rewrites the title in its results using the heading.
- The summary under the heading does state the topic.
- The audit rates this low priority. The title was changed on 2026-10-20, and the heading wasn't.

## What development mode means for it

The heading can change now at no cost. Nothing reaches search before launch.

## What I need from you

Keep the heading, or change it.

- **Keep "Geek Post".** The blog keeps its name as its heading. The topic rests on the title and the summary.
- **Make the heading the title, "AI for Small Business Blog".** The heading and title agree, and the name "Geek Post" leaves the page unless it goes in the summary.
- **Keep "Geek Post" as a small line above a heading that names the topic.** You get both, at the cost of one more line in the hero.

## My recommendation

Recommendation: keep "Geek Post".

Reason: it's the blog's name, the title already carries the search words, and the summary under the heading states the topic. The gain from changing it is small.

## The plan once you decide

- **To keep it:** no change.
- **To change the heading:** edit only the `title` passed to `BlogHeroSection` at `src/app/(site)/blog/page.tsx:155`.
- **For a name line above the heading:** add the line in `src/components/blog/blog-hero-section.tsx`, above the `<h1>`, without touching font classes.

## How I'll check it, and its status

- The rendered `/blog` shows the chosen heading at 390 and 1440 px.
- The page title is unchanged.

**Status:** Open, waiting on your decision.
