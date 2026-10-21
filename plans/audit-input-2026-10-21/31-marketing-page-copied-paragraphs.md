# Five copied paragraphs on /use-cases/marketing

Audit reference: GEO H1 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

The marketing department page, `/use-cases/marketing`, repeats five paragraphs word for word from the lead capture hub, `/use-cases/marketing/intelligent-lead-capture-pipeline`. Rechecked 2026-10-21 by comparing the two pages' benefits sections paragraph by paragraph. All five are in `src/components/use-cases/marketing/ai-marketing-systems/benefits-section.tsx`, and they match `src/components/use-cases/marketing/intelligent-lead-capture-pipeline/benefits-section.tsx`:

| Line | Opens with |
|---|---|
| 100 | "Geek @ Your Spot LLC, as an AI implementation consultancy, plays a crucial role..." |
| 106 | "Integration is another area where Geek @ Your Spot LLC excels..." |
| 112 | "Ultimately, the implementation of AI in lead capture not only streamlines operations..." |
| 121 | "Correctly mapping data models is foundational to effective AI implementation..." |
| 135 | "Workflow configuration is critical to maximize the benefits of AI in lead capture..." |

Two of them talk about lead capture on a page about marketing systems. The section renders once on the page, with no separate phone copy.

Why it matters: when two pages carry the same paragraphs, search engines and AI answers pick one page to show for that text and pass over the other. The marketing page is the navbar's target for Marketing, so it's the page that loses most from looking like a copy.

## What development mode means for it

The change is copy only. It can be rewritten freely before launch, and nothing is indexed until `ALLOW_INDEXING` is set.

## What I need from you

"Copy rewrite" here means replacing these five paragraphs with new text written for the marketing page. No code or layout changes.

1. Who writes the replacement:
   - **Your content writer**, as a new export for this section that I lay out. It matches the rest of the site's generated copy, but it takes a writer run.
   - **Me, by hand**, in a voice you name, such as the voice of `/methodology`. It's quicker, and you review the wording before it goes in.
2. Whether the replacement keeps the same five topics (the firm's role, integration, a closing summary, data mapping, workflow configuration) told for marketing, or covers different ground.

## My recommendation

Recommendation: replace them with text about marketing systems specifically, such as email, ad spend and content, that the lead capture hub doesn't cover, written by hand in the voice of `/methodology`. Five paragraphs is a small job, and new topics remove the overlap rather than paraphrasing it.

## The plan once you decide

1. Replace the five paragraphs in `src/components/use-cases/marketing/ai-marketing-systems/benefits-section.tsx`, keeping the section's headings, classes and links.
2. Leave the lead capture hub's paragraphs as they are.
3. Follow the site's copy rules: full sentences, no dashes, "small businesses".

## How I'll check it, and its status

- The same paragraph comparison between the two benefits sections finds no shared paragraph.
- A 10-word passage comparison against every other component finds no long shared run.
- The page renders on a local build.

**Status:** Open, waiting on your decision.
