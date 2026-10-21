# The 30% and 85% figures on /use-cases/marketing

Audit reference: GEO H1 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

Two questions in the marketing department page's People Also Ask section state figures with no source. Rechecked 2026-10-21 in `src/components/use-cases/marketing/ai-marketing-systems/faq-section.tsx`:

- **Line 70, "What is the 30% rule for AI?"** The answer says businesses "should expect AI to automate or improve about 30% of tasks initially". It names no study, author or date.
- **Line 79, "Why do 85% of AI projects fail?"** The question asserts the 85% figure. The answer then lists reasons for failure but never says where 85% comes from.

The page has no FAQPage markup, so both figures appear in the visible text only.

A different 30% on the same page, a hypothetical small retailer's "30% increase in targeted ad engagement" (`measuring-sucess-roi.tsx:57`), is an invented scenario. It isn't part of this item.

Why it matters: AI answers and search engines check a figure against the sources they know. A figure that matches no source, or is stated as a rule without one, is dropped, and it makes the rest of the page look less reliable.

## What development mode means for it

The change is copy only. It can be made freely before launch, and nothing is indexed until `ALLOW_INDEXING` is set.

## What I need from you

1. For each question, choose one:
   - **Source it.** Find the primary source and link it, with its date. This keeps the question, but only works if a primary source exists and says what the page says.
   - **Reword it without the figure,** for example "Why do AI projects fail?". The question stays useful and nothing needs a source.
   - **Delete the question.** The section gets shorter, and there's nothing left to source.
2. Who writes any rewording: your content writer, or me by hand in a voice you name, such as `/methodology`'s.

## My recommendation

Recommendation: reword both questions without the figures, unless a primary source turns up that states them as the page does. "Why do AI projects fail?" is a question a buyer asks, and the existing answer already fits it. The answer itself calls the 30% rule something "often mentioned" rather than a finding, so its question is better reworded, for example as "How much of my work can AI automate at first?", or deleted.

## The plan once you decide

1. Edit the two questions and their answers in `src/components/use-cases/marketing/ai-marketing-systems/faq-section.tsx`, keeping each `<h3>` id consistent with its new text.
2. If a question is kept with its figure, link the source inline with its date, in the site's existing outside-link style.
3. Check that no other file on the page repeats the two figures.

## How I'll check it, and its status

- A text search of the marketing page's components finds the 30% rule and the 85% claim either gone, or linked to a dated source.
- The page renders on a local build, with no broken jump links.

**Status:** Open, waiting on your decision.
