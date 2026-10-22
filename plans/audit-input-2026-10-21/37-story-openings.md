# Pages that open with a story

Audit reference: GEO H5 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

Many pages and sections begin with a scene, a paragraph starting "Picture..." or "Imagine...", before they say what the page is about or answer the question in its heading.

- Audit count, 2026-10-20, from a crawl of the rendered site: 40 pages open with "Picture" or "Imagine", and 99 sections open with a scene instead of an answer.
- Rechecked 2026-10-21 in the source: 30 paragraphs in 26 component folders begin with "Picture" or "Imagine". This leaves out the ImagineArt tool page, where "Imagine" is the product's name. The source count is lower because it counts each paragraph once, while the crawl counts every page and both breakpoint copies.
- The named people in these stories were already reframed as examples in commit `3879807`, for example "Take the example of Jane...". This item is about what comes first in a page or section, not about the personas.

Why it matters: AI answers and search snippets take the first direct statement under a heading. When the first sentences are a scene, the quotable answer comes later, and a competitor's page with the answer up front gets quoted instead. Readers who skim also decide from the first lines whether the page answers them.

## What development mode means for it

The change is copy only. It can be done gradually before launch, and nothing is indexed until `ALLOW_INDEXING` is set.

## Decided for new pages on 2026-10-22: the writer opens with a question

The owner is instructing GeekBackend to use the Question Lede instead of the story lede, because the story lede is the problem this document describes. New exports arrive with the answer up front, so this item no longer grows. The owner also pointed GeekBackend at the SEO and GEO skills to settle any ambiguity in its prompts, and a pasted citation constraint that would have conflicted with the writer's no-URL rule was disregarded by the writer and is withdrawn.

Still open: the pages already on the site. The 26 component folders that open with "Picture" or "Imagine" do not change until they are rewritten by hand or laid out again from a new export, so the questions below stand for those pages only.

## What I need from you

"Copy rewrite" here means putting the answer first. Each section's opening sentence states the point plainly, and the story, if it stays, moves after it. No layout changes.

1. What happens to the stories:
   - **Keep them after the answer.** The answer goes first and the story follows. Nothing is lost, and the sections stay about as long as they are.
   - **Cut them.** The pages get shorter and more direct, but some lose the local color the stories give.
2. Who writes it: your content writer, or me by hand in a voice you name, such as `/methodology`'s.
3. Where to start: the pillars, the tool pages, or both together.

## My recommendation

Recommendation: keep the stories, move each one after a plain opening answer, and do it by hand, starting with the pillars. The stories carry the South Florida detail that sets the site apart, and only their position is the problem. The pillars are the pages AI answers quote first.

## The plan once you decide

1. List every page and section that opens with a scene, from the source and a local build crawl.
2. For each, write a one or two sentence answer to the section's heading, and place it before the story.
3. Change both breakpoint copies (`lg:hidden` and `hidden lg:block`) together, or the shared section body where the component uses one.

## How I'll check it, and its status

- A crawl of a local build finds no page whose first paragraph begins with "Picture" or "Imagine".
- The phone and desktop copies still match on every page.

**Status:** Open, waiting on your decision.
