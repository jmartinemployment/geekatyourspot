# Rippling affiliate link: where it was added (applied in commit 0376e62d, not pushed)

One item. The navbar plan is a
separate item and stays in `plans/navbar-rebuild.md`.

## 1. The link

`https://try.rippling.com/edk9ps3wz4w4-02q7tm`

- Jeff found it in PartnerStack, on the Rippling program's page, the same place as the earlier
  template link. It is his finished link: a short link on Rippling's own domain, with no
  `{partner_key}` to fill. It is used exactly as given, with no parameters added.
- The earlier link
  (`https://www.rippling.com/lp/paid-payroll?...&utm_campaign={partner_key}`) is the unfilled
  template. `{partner_key}` is a PartnerStack shortcode for the partner's own key (PartnerStack
  support articles "Tracking partner traffic through UTMs" and "Updating a partner's partner key"),
  so that link is not used anywhere. No partner key and no API key is needed; Jeff pasted an API
  key in chat by mistake and was told to regenerate it. It is not in the repo or this plan.
- Jeff opened the short link (screenshot, 2026-11-03). It lands on Rippling's payroll page, titled
  "One-click Compliant Payroll Software - Rippling Payroll | Rippling", headed "Full-service payroll
  software", with a "Schedule a personalized demo" form. It shows no prices. I have not opened it
  myself (a request would log a click against his account). The wording in section 3 is accurate for
  this page: B says Rippling describes its payroll offer, and does not promise prices.

## 2. Where the site links to Rippling today (evidence)

| Kind | Where | Today |
|---|---|---|
| Internal link to the review page | Home page "Top 5 Intelligent Payroll Tax Tools" list, `src/components/home/use-cases.tsx:506` (mobile block) and `:1653` (desktop block). This is the Rippling highlighted in Jeff's screenshot. | internal |
| Internal link | `src/data/navigation/site-menus.ts:336` (Tools menu) | internal |
| Internal links | QuickBooks FAQ (`.../quickbooks/faq-section.tsx:116`), use-case mechanics section (`.../mechanics-section.tsx:15`), accounting guide (`.../accounting-guide/tax-payroll-nexus-section.tsx:49`) | internal |
| `rippling.com` strings | JSON-LD `url: "https://www.rippling.com/"` in three `page.tsx` files; a blockquote `cite` to a Rippling blog post in `.../rippling/transforms-section.tsx:73` | structured data and a citation, not links a visitor sees |
| Visible outbound link to Rippling | none, on any page | none |

Also found: no `rel="sponsored"` anywhere in `src`, and no affiliate disclosure on the site (the 12
"affiliate" hits are tool-topic prose, for example "affiliate marketing"). This would be the site's
first affiliate link.

## 3. Recommendation: two places on the Rippling review page, nothing else

The review page (`.../tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/rippling/page.tsx`)
has 13 sections. The two where a reader is deciding whether to act:

A. Right-fit section, `right-fit-section.tsx`. After the paragraph that begins "The next step, if
   you are considering Rippling, is to map your actual workforce complexity". The reader has just
   read the verdict, so this is the conversion point. The section already builds its body as
   `body(idSuffix)`, so a link id fits the existing `-lg` pattern with no restructuring. Ground
   `#023059`, so the link is orange (`text-[#C83803] hover:underline`), as this section's other
   links already are.

B. Evaluating section, `evaluating-section.tsx`. At the end of the paragraph on Rippling's
   per-employee, per-month pricing. The reader is weighing cost. The section builds its body as a
   constant shared by both breakpoint blocks, so an id inside it would repeat; it becomes
   `body = (idSuffix = "")` with `{body()}` and `{body("-lg")}`, the same shape as the right-fit
   section. Ground `#8C4E2A` (brown), so the link is navy (`text-[#0B162A] hover:underline`), per the
   brand rule that navy goes on teal, brown and orange grounds.

Both links: `<a href={RIPPLING_AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer">`,
an id in the page's existing style (for example
`tools-accounting-payroll-tax-worker-misclassification-rippling-right-fit-affiliate${idSuffix}`).
`rel="sponsored"` is what search engines ask of paid or affiliate links. The URL is defined once, in
a new `rippling/affiliate-link.ts` exporting `RIPPLING_AFFILIATE_URL`, so a later change is one edit.

Proposed wording, shown before anything is applied, one full sentence each, no dashes, and with the
link text just "Rippling" so it does not claim anything about the page it opens:
- A: "If your workforce matches that profile, take a look at <a>Rippling</a> directly. Geek @ Your
  Spot LLC earns a commission if you sign up through this link."
- B: "You can see how <a>Rippling</a> describes its own payroll offer before you decide. Geek @ Your
  Spot LLC earns a commission if you sign up through this link."
  (The disclosure is a second sentence directly after each link sentence, in the page's own voice,
  not a label or small print, per Jeff's rule. It sits at both links because a reader may reach
  only one. B claims a page about payroll, which the site's whole Rippling page is about.)

## 4. What stays unchanged, and why

- The five internal links (home x2, menu, QuickBooks, mechanics, nexus) stay internal. Every other
  vendor in the home list opens its review page on this site; Rippling alone leaving the site would
  break that pattern, and the home page and three content pages would stop leading to the review
  page (only the menu would still link to it). If Jeff wants them pointed at the affiliate URL
  anyway, it is the two home lines plus the three content links, each opening in a new tab, and it
  is a separate decision.
- The JSON-LD `url` fields stay the plain homepage: structured data names the vendor entity, and a
  tracking link does not belong there.
- The blockquote `cite` stays: it credits a Rippling blog post.
- The shared tools hero (`tools-hero.tsx`) gets no button: it renders on all 115 tool pages, so a
  Rippling link there would either appear on every vendor's page or need a per-tool prop.

## 5. Needed from Jeff before building

1. Done: Jeff approved the two placements ("sounds like two good spots", 2026-11-03). The
   sentences are applied as proposed above unless he gives his own wording.
2. Done: Jeff said yes to a disclosure (2026-11-03), written as the second sentence after each
   link sentence (section 3). The site has none. FTC guidance expects a clear disclosure near an affiliate link,
   and the PartnerStack program terms may require one; check them in the PartnerStack dashboard.
   Under Jeff's no-disclaimer-labels rule it would be written into the sentence ("Geek @ Your Spot
   LLC earns a commission if you sign up through this link"), never a small-print label. His call.

## 6. Order of work (one commit, direct to main, no co-author line)

1. Add `rippling/affiliate-link.ts` with `https://try.rippling.com/edk9ps3wz4w4-02q7tm`.
2. Edit the right-fit section (placement A).
3. Edit the evaluating section (placement B, body to a function).
4. Verify with headless Playwright (never Jeff's Chrome), after he approves running it: both links
   in the server HTML with `rel` containing `sponsored`; no duplicate ids between the two blocks;
   link colours per ground; `next build` and `check:faq` pass. The check reads the `href` and does
   not follow it, so no click is logged against his account.
5. GTM: the two new link ids need a trigger only if Jeff wants the clicks tracked; GTM is outside
   the repo.

Rollback: one commit, reverts cleanly.
