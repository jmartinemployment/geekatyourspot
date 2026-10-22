# Sources for the home badges

Audit reference: GEO H3 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

The home page shows two badges, "40% Cost Reduction" and "3x Productivity", with no source. They're in `src/components/home/clone-yourself.tsx`, in both breakpoint copies: lines 25 and 34 in the phone block, and lines 77 and 85 in the desktop block. Rechecked 2026-10-21.

The badges stay. You decided that on 2026-10-20, as the GEO audit records ("Badges decided on 2026-10-20: they stay"). The open question is whether they get a source.

One page restates both badges as fact. The Intelligent Content Generation pillar says "Costs drop by 40%, and productivity can triple, real numbers from the operator's own published figures." That's in `src/components/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses/preparing-section.tsx:45`, rechecked 2026-10-21. No published figures from the business exist on the site for that sentence to point to.

The audit said at least six pages repeat the 40%. Rechecked 2026-10-21, the pillar above is the only page that repeats the badge's claim. The other 40% figures in the source are separate invented scenarios about time saved, such as "a 40% reduction in invoice processing time". They aren't the badge's claim.

Why it matters: a headline number with no source is the first thing an AI answer or a careful buyer checks. When the only backing is a sentence calling it the business's "own published figures", and none are published, the claim reads as circular.

## What development mode means for it

The change is copy only. It can be made freely before launch, and nothing is indexed until `ALLOW_INDEXING` is set.

## Decided on 2026-10-22: each badge gets a source note as a tooltip

The owner wrote the three notes and asked for them as tooltips. They are applied as written, with each named source linked:

- **40% Cost Reduction.** "Enterprises achieve a 40% cost reduction via automated operations, a benchmark proven by IBM HR Automation and Tata Play's WhatsApp integration." IBM's AskHR case study (`ibm.com/case-studies/ibm-askhr`) says "The AI agent helped contribute to a 40% reduction in the HR team's operational costs over the past four years." Nextiva's Tata Play story (`nextiva.com/customer-story/tata-play-broadcasting`) says "Adding the WhatsApp integration and AI bots reduced support costs by 40%." Both are the vendor's own figures, with no period on the Tata Play one.
- **3x Productivity.** "Customer support teams resolve tickets 3x faster and manage 3x the ticket volume without adding headcount by using AI, according to data from Solnix Media." Solnix Media's post (`blogs.solnixmedia.com/blog/Enterprise/customersupport_and_csm/`, dated 2026-10-20) says "resolve tickets 3x faster" and "handle 3x ticket volume with the same team size". It is a vendor's post with no method behind the figures.
- **24/7 Automated.** "Workflows run 24/7 automated operations around the clock. Next-generation tools from viaSocket handle routine data syncing, scheduling, and emailing with zero downtime." viaSocket (`viasocket.com`) sells the syncing, scheduling and emailing; nothing on its site says "zero downtime", so those three words have no source.

Two later notes from the owner on 2026-10-22 were checked and not applied:
- **Valoir** on tripling output in repeatable micro-tasks: no Valoir research on this could be found, so it can't be cited.
- **C.H. Robinson and Loadsure** for 24/7: C.H. Robinson's newsroom (2025-06-12) confirms agents that read emailed tenders and parse carrier emails to match trucks, 3 million tasks automated and a 30% productivity rise since 2023, and its CFO's blog post is titled "Engineering Performance Through Lean AI and Relentless Improvement". Loadsure's site confirms AI-priced instant quotes and certificates in under 60 seconds. Neither site says 24/7, shift-free or around the clock, and neither mentions the other. A 24/7 note citing them would need wording that stays inside what they say.

Still open from this document: the pillar sentence that calls the figures "the operator's own published figures" (`preparing-section.tsx:45`). The owner has not decided it, so it is unchanged.

## What was built

`src/components/home/stat-badge.tsx` is a client component that makes a badge the trigger of a popover from the site's `@base-ui/react` dependency. It opens on hover, with a short delay, and on tap, so the source is reachable on a phone, and it stays open while the pointer moves onto its link. The popup is the site's navy, `#0B162A`, with white text and the brand orange for the links, which open in a new tab with `rel="noopener noreferrer"`. The same note, without links, is in the page as a visually hidden description of the badge button, so crawlers and screen readers get the source without opening anything. The three notes are constants in `src/components/home/clone-yourself.tsx`, so the phone and desktop blocks render identical text by construction. The badge markup keeps every class it had; the two `p` elements inside each badge became `span` elements, because a button can't contain a paragraph.

## How it was checked

Headless Playwright against a local dev server, 2026-10-22:
- The server HTML carries all three notes and all six badge buttons.
- At 390 px with touch, a tap on each badge opens its popup inside the viewport, and a tap elsewhere closes it. At 1440 px, hovering each badge opens its popup inside the viewport, the popup stays open while the pointer is over its link, and it closes on leaving.
- No horizontal overflow at either width, before or after opening.
- `eslint` and `tsc` pass on both files.

**Status:** Applied. The pillar sentence is still waiting on your decision.
