# A prompt for the second cross-linking pass

Audit reference: GEO H11 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

Internal links tell search engines and AI engines which pages matter and how topics connect. The site's links still point mostly at glossary terms rather than at the pages that sell the work.

You said on 2026-10-21: "Cross linking, I was impressed on our first attempt to address so I think I need a prompt to guide."

What the first pass did (`d6989dc`, 2026-10-20):
- It added the 15 missing hub links.
  - The accounts payable, cash flow and tax hubs link their missing pillars and `/use-cases/accounting`.
  - The payroll pillar links the tax hub.
  - AI Marketing Systems and the lead capture hub link each other.
  - Three marketing pages link the content creation hub, which links Intelligent Content Planning.
- It added the 22 glossary letter pages to the sitemap.
- It linked each glossary term only at its first mention.
- It added up to six related terms at the end of each term page.

What is left:
- **Tool pages to a tools hub (rechecked 2026-10-21).** No tool page component links `/tools`, `/tools/accounting` or `/tools/marketing` in its body. The footer links them on every page.
- **Tool pages to their pillar (audit count, 2026-10-20).** 85 of 90 tool pages link their pillar.
- **Posts to posts (audit count, 2026-10-20).** 28 of 32 posts linked to no other post. That count predates the seven posts deleted under SEO H6.
- **Missing related-posts file (rechecked 2026-10-21).** The pillar layout prompt describes a "More from the Blog" list built by `src/lib/content-writer/related-posts.ts`, and that file doesn't exist in the repo today.
- **Glossary terms to where they apply.** Term pages link only to related terms, home, the glossary and the legal pages. None links to the pillars or tools where the term is used.
- **Link balance (audit count, 2026-10-20).** 66% of 5,475 body links pointed at glossary terms.

## What development mode means for it

Links can be added now at no cost. They count once search is allowed at launch.

## What I need from you

The prompt, in one of two ways:
- **You write your own.** It's in your voice and has your rules, but it takes your time.
- **You edit the draft below.** It's faster, and it starts from the rules that worked in the first pass and from the "Internal links" section of `plans/hand-coded-use-case-page-layout-prompt.md` (your rules of 2026-10-19).

## My recommendation

Recommendation: edit the draft. It already carries your existing link rules, so your edits only need to cover what you want done differently.

### Draft prompt (yours to edit)

> **Cross-linking, second pass**
>
> Link the pages a reader needs next, on words already in the text.
>
> Rules:
> - Link at the first mention in body text only (a paragraph, list item or table cell), never in a heading.
> - When a section has a block for each breakpoint, both blocks carry the same link.
> - Link each target at most once per page.
> - Never link to a URL that returns 404.
> - Use the page's own words as the anchor. Don't add a sentence to create an anchor, except the blog overview sentence the pillar prompt already defines.
> - Glossary links stay first-mention only.
>
> Links to add:
> 1. Every tool page links its pillar at the first mention of the pillar's topic.
> 2. Every blog post links at least one other post in its category where its text names that post's topic.
> 3. Every glossary term page lists the pillars and tool pages that link it, under "Where this applies".
> 4. Every pillar links its tool pages at each tool's first mention.
>
> Output:
> - A log of every link added, by file, anchor and target, like `plans/glossary-linking-log.md`.
> - A crawl of the local build showing no broken links and the new link counts.

## The plan once you decide

1. Apply the final prompt page by page, in both breakpoint copies, and log each link.
2. Build "Where this applies" from the existing term usage in `GlossaryLink` (`src/components/glossary/glossary-link.tsx`) and the term page at `src/app/(site)/glossary/[slug]/page.tsx`, next to its Related Terms block.

## How I'll check it, and its status

- A crawl of all sitemap pages counts the new links.
- It finds no broken link and no target linked twice on one page.
- The phone and desktop copies match.

**Status:** Open, waiting on your decision.
