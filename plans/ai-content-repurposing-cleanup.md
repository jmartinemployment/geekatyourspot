# Remove dangling Top AI Tools section reference from ai-content-repurposing page

## Context

The `ai-content-repurposing` use-case page was being hand-coded to match the
`ai-content-creation-workflow` template's pattern (mobile/desktop dual
`<section>` blocks, alternating `col-span-7` content / `col-span-5` empty or
image column, hand-written JSX with no `.map()`-over-arrays). Investigation
confirmed all of the content sections (hero, lede, benefits, streamlining,
implementing, PAA, and the five tool pages — airia, contentstudio, copyai,
makecom, zapier) are already correctly and completely hand-coded, matching
their raw source content in
`backup/marketing/AI Content Repurposing/` verbatim.

The one remaining problem: `top-tools-section.tsx` was deleted (confirmed via
`git status` showing `D` and recoverable via `git diff HEAD`), and the user
confirmed the "Top AI Tools" section should **not** be used/recreated.
However, the page component at
`src/app/(site)/use-cases/marketing/ai-content-repurposing/page.tsx` still
imports and renders it:

```tsx
import TopToolsSection from '@/components/use-cases/marketing/ai-content-repurposing/top-tools-section'
...
<TopToolsSection />
```

This is a broken import (file doesn't exist) that will fail the build. No
other files need changes — everything else in this page's section stack is
already correct.

## Change

In `src/app/(site)/use-cases/marketing/ai-content-repurposing/page.tsx`:

1. Remove the import line:
   `import TopToolsSection from '@/components/use-cases/marketing/ai-content-repurposing/top-tools-section'`
2. Remove the `<TopToolsSection />` usage from the JSX in `Page()`, so the
   article renders: `LedeSection`, `BenefitsSection`, `StreamliningSection`,
   `ImplementingSection`, `PAASection`, `SchedulerShell` (in that order, with
   `TopToolsSection` simply omitted between `StreamliningSection` and
   `ImplementingSection`).

No other files are touched. Do not recreate `top-tools-section.tsx`, and do
not modify `benefits-section.tsx`, `streamlining-section.tsx`,
`implementing-section.tsx`, `lede-section.tsx`, `paa-section.tsx`,
`hero-section.tsx`, or any of the tool section components — they are already
correct per investigation.

## Verification

- Run `npm run build` (or `next build`) to confirm the page compiles without
  the missing-module error for `top-tools-section`.
- Optionally run the dev server and load
  `/use-cases/marketing/ai-content-repurposing` to visually confirm the
  section order (Hero → Lede → Benefits → Streamlining → Implementing → PAA →
  Scheduler) with no gap or broken layout where Top Tools used to sit.
