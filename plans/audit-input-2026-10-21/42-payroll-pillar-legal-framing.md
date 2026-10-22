# The payroll pillar's legal framing

Audit reference: GEO L15 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

The payroll misclassification pillar, at `/use-cases/accounting/tax-compliance-regulations/ai-payroll-software`, covers worker classification and payroll tax.
- That's a legal and money topic, where Google holds pages to a higher standard of expertise and sourcing.
- Its search results are dominated by law firms and government agencies.
- AI answers on legal questions favor pages that cite the law itself.

What the page has today (rechecked 2026-10-21), in the 12 section files in `src/components/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-compliance/`:
- no link to any outside source;
- no citation of a Florida statute;
- the IRS named in 9 of the 12 files, and Florida Department of Revenue reemployment tax named in the text, all without links.

The C1 fix on 2026-10-20 already corrected this page's wrong claim about a county payroll tax.

The audit suggests three things:
- frame the page as implementation work;
- cite Florida statute;
- add a not-legal-advice note.

The third conflicts with your rule on disclaimers. On 2026-10-20 you said "I don't like the disclaimer bs", and since then nothing illustrative or cautionary has carried a separate label.

## The decision, 2026-10-22

The rule was settled in the GeekBackend session, and the owner agreed with the line as written there:

> A point of law is stated only as a passage in the evidence states it; where the piece turns on one and the evidence is silent, the writer names the agency that decides it, the IRS or the state's department of revenue, and says the reader's accountant or employment attorney makes the call, in the sentence, never as a note. That matches the auditor's in-sentence framing and your rule against disclaimers. No code can check the first half, as none checks it now.

The owner's addition: such a passage is set in a `<blockquote>` whose `cite` is the source URL.

Against the three questions below:
1. Citations: yes, and stronger than a link. A point of law appears only as the source's own words, quoted in a blockquote with the source URL as its `cite`.
2. The not-legal-advice point: inside the sentence, never as a note. Where the piece turns on a point of law the evidence does not state, the sentence names the agency that decides it and says the reader's accountant or employment attorney makes the call.
3. Implementation framing: that sentence is the framing.

The rule belongs to the writer, in GeekBackend, and governs what it produces for pillars, blog posts and tool pages. This page is unchanged by the decision. Nothing in code checks the first half of the rule, as nothing checks it now.

## What development mode means for it

There's no deadline before launch. The changes reach search only when indexing is turned on.

## What I need from you

1. **Citations.** Link the page's legal claims to the primary sources (IRS worker classification guidance, the Florida Department of Revenue's reemployment tax pages and the Florida Statutes): yes or no. Yes adds credibility. No keeps the page lighter, but its claims stay unsupported.
2. **The not-legal-advice point.** Pick one:
   - Leave it out entirely.
   - Write it into a sentence in the page's own voice, the way the personas are framed. For example: "We set up the systems that track classification, and your accountant or employment attorney makes the call on each worker."
   - Add a separate note. The audit suggests this, but it goes against your rule.
3. **Implementation framing.** Recast the opening so it's clear the business sets up the systems and doesn't give legal opinions: yes or no.

## My recommendation

Recommendation:
- Cite the primary sources, and frame the page as implementation work.
- If the legal point is made at all, make it inside a sentence, never as a note.

Citations are what separate this page from the generic articles it competes with, and an in-sentence framing keeps to your rule. I'd confirm each statute and agency page before linking it, and cite no section number I haven't opened.

## The plan once you decide

1. Edit `lede-section.tsx` for the framing, in both breakpoint copies.
2. In each section that makes a legal claim, link that claim to its source at first mention, in both copies.
3. Update the FAQ in `paa-section.tsx` and its FAQPage entries together, so the visible answers and the markup match.

## How I'll check it, and its status

- Every legal claim on the page links to a primary source that I've opened.
- No label or small-print element is added.
- The phone and desktop copies match.
- The FAQ text matches its FAQPage markup.

**Status:** Closed 2026-10-22, by your decision: the rule above, kept here as the note. The page is unchanged and the plan above was not executed.
