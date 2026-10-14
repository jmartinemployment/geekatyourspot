import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A small business in Miami-Dade hits its stride, only to find its books tangled in a mess of
        spreadsheets, emails, and outdated software. The owner is up late on a Friday, trying to reconcile
        figures that do not match and chasing down missing invoices. As the team grows, so does the chaos: more
        transactions, more hands in the books, and more places for errors to hide. Every month, the close drags
        out, and the numbers are never quite right. This is not just a nuisance, it is a real drag on growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        The cost of manual Intelligent Resource Planning shows up everywhere. First, there is the time: hours
        lost to copying figures between files, reformatting data, fixing broken formulas, and chasing approvals
        through email. A single error in a spreadsheet can throw off cash flow projections for weeks, leading to
        missed payments or payroll surprises. Without live numbers, decisions are made on guesswork, not facts.
        Staff spend their days on low-value admin instead of building the business. The owner cannot step away,
        because nobody else trusts the numbers. The risk is not just financial, it is operational. If the one
        person who knows how the old system works is out sick, the whole back office can grind to a halt.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual Intelligent Resource Planning breaks down in predictable ways as a business grows. Reporting
        becomes a patchwork: to get a full picture, someone has to export data from one system, paste it into
        another, and hope the columns line up. Each step opens the door to mistakes. Approvals slow down because
        the right person is not always copied on the right thread. Sensitive information like payroll or bank
        balances can end up exposed to staff who should not see it, simply because the system cannot restrict
        access by role. Fraud risks go up when everyone shares the same admin account, and there is no clear
        audit trail. The more people and transactions in the system, the more these gaps add up.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk data entry is another pain point. Processing a stack of invoices by hand eats up entire days. Each
        invoice, bill, or expense has to be entered one at a time, checked for errors, and routed for approval.
        When something goes wrong, an invoice is missed, a payment is duplicated, or a vendor is paid late, the
        fix is always manual. Someone has to dig through emails, spreadsheets, and bank statements to find the
        problem. These are not just annoyances; they cost real money in late fees, missed discounts, and
        strained vendor relationships.</p>
      <p className="text-md text-white shadow-text pt-3">
        Inventory management is no better. For businesses with products in multiple locations, tracking what is
        where quickly gets out of hand. Without a system that ties inventory to financials, it is easy to lose
        sight of what is in stock, what needs to be reordered, and what is costing more than it should. The
        result is overstocking in some places, shortages in others, and a balance sheet that never quite matches
        reality. Every manual workaround, another spreadsheet, another checklist, adds more room for error and
        more hours to the week.</p>
      <p className="text-md text-white shadow-text pt-3">
        The close process is the final straw. With data scattered across tools and people, pulling together a
        month-end or year-end close can take weeks. Numbers are out of date before they are even finalized.
        Decisions are made on stale information, and the business loses its agility. The real risk is not just
        falling behind on paperwork, but missing the opportunity to spot problems early, like a dip in cash flow
        or a spike in expenses, before they become crises.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida, these costs are not theoretical. They show up as overtime, missed
        growth opportunities, and sleepless nights. The fear of moving to a
        &quot;big&quot;&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;keeps many stuck in this cycle,
        worried about the cost and disruption of change. But the longer the status quo holds, the more it costs,
        in time, in money, and in peace of mind. Intelligent Resource Planning done by hand is not just
        inefficient; it is a roadblock to growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
