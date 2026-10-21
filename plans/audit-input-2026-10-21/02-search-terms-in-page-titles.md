# Search terms in page titles

Audit reference: GEO M9 and decision 5 in `plans/geo-seo-audit-2026-10-20.md`.

## The problem

A page's title tag is the blue headline in search results, and it's the strongest on-page signal of what the page covers. Most pillar titles use the site's own "Intelligent" labels, which aren't the words people type into search.

- **Content generation.** The pillar's title is "Intelligent Content Generation" (`src/app/(site)/use-cases/marketing/content-creation-workflow/ai-content-generation/page.tsx:21`).
  - Its components use "intelligent content generation" 21 times and "AI content generation" 0 times (rechecked 2026-10-21).
  - The audit counted 40 and 0 on the rendered page (audit count, 2026-10-20).
- **Resource planning.** "Intelligent resource planning" returns no coherent search results (audit, 2026-10-20). The pillar's title is "Intelligent Resource Planning".
- **The other pillars.** 14 pages under `/use-cases` have a title that starts with "Intelligent", such as "Intelligent Approval Workflows", "Intelligent Payroll Tax" and "Intelligent Spreadsheet Data" (rechecked 2026-10-21).
- **One title is too long.** Every title gets " | Geek @ Your Spot LLC" from the template in `src/app/layout.tsx:22`. The site keeps titles at 59 characters or less, which leaves 36 for the topic. "Intelligent Fraud & Duplicate Payment Controls" comes to 69 characters with the suffix, and search results cut it off (rechecked 2026-10-21).
- **Labels stay where they are.** The "Intelligent" labels on the home card, navbar and indexes are your naming choice from 2026-10-14, and this item doesn't touch them.

## What development mode means for it

Search engines aren't reading the site yet, so titles can change freely until launch. The new titles take effect in search results only after launch and a recrawl.

## What I need from you

1. **Approach.** Pick one:
   - Put the search term in the title tag only, and keep the H1, labels and menus as they are. This gets you search wording without renaming anything visible.
   - Change the H1 as well. This keeps the title and heading matching, but changes what visitors see.
   - Leave the titles as they are. They stay consistent with the labels and keep the current search wording.
2. **The titles themselves.** If you change them, approve or edit a title for each page.

## My recommendation

Recommendation: change the title tag only, along with the Open Graph and Twitter titles that repeat it, and keep the H1 and every label. Examples:
- "Intelligent Approval Workflows" becomes "AI Invoice Approval Workflows".
- "Intelligent Content Generation" becomes "AI Content Generation".

Reason: the labels are your naming, and the title tag is where the search term earns the most.

## The plan once you decide

1. I send you a table of the 25 pages under `/use-cases`, with each one's current title, proposed title, length with the suffix, and the search term behind it.
2. You mark it up.
3. I change only the `title` fields in each page's metadata: the `TITLE` constant's use in `generateMetadata`, `openGraph.title` and `twitter.title`. The H1 keeps `TITLE`.
   - Where one constant drives both the title and the H1, I add a separate title constant, so the H1 doesn't move.
4. There are no colon prefixes, and every title is 59 characters or less with the suffix.

## How I'll check it, and its status

- A crawl of the local build lists every `<title>` under `/use-cases` with its length, and confirms:
  - every title is 59 characters or less;
  - no title has a colon prefix;
  - every H1 and menu label is unchanged.
- The Open Graph and Twitter titles match the title tag.

**Done on 2026-10-21 (`c63a97f`).** You chose: "Change the H1 as well. This keeps the title and heading matching, but changes what visitors see & implement your recommendation, "becomes "AI X"".
- The 14 pillars titled "Intelligent X" are now "AI X" in the title tag, the H1 (both breakpoint copies), the Open Graph and Twitter titles and the JSON-LD headline. 13 change their `TITLE` constant. The lead capture pipeline page changes the six places that held its title.
- The approval workflows pillar is "AI Invoice Approval Workflows", as in the recommendation's example. The others follow "AI X" exactly.
- Unchanged: the "Intelligent" labels on the home card, navbar and indexes, the descriptions, keywords and body copy.
- Checked on a production build: all five fields match on all 14 pages, and `/llms.txt` lists the new titles.
- Every title is 59 characters or fewer with the suffix except "AI Fraud & Duplicate Payment Controls", at 60. That breaks step 4's limit.
- **Step 1 was skipped.** The table of titles for your markup wasn't sent before the change. I sent it on 2026-10-21, after you asked, built from the titles on the deployed site.

- **The home card headings, 2026-10-21 (`cccde1c`).** You asked to finish it: "change Intelligent Accounts Receivable: to AI Accounts Receivable:".
  - The 13 home card headings that read "Intelligent X:" now read "AI X:" in both breakpoint copies, matching each pillar's title. Approval workflows reads "AI Invoice Approval Workflows:".
  - Each heading links its pillar's URL. 11 of them follow the heading. "AI Data Entry & Processing:" links `automated-data-entry-processing` and "AI Tax Law:" links `automating-complex-and-changing-laws`, because their URLs weren't in the URL table.
  - Unchanged: the "Top 5 Intelligent … Tools:" line under each heading, the navbar and the index cards.
- **The fraud controls title stays at 60.** I offered "AI Fraud & Duplicate Payment Checks" at 58, and you said "NIX" on 2026-10-21.

**Status:** Done and committed in `c63a97f`. The fraud controls title stays at 60 characters, by your decision.
