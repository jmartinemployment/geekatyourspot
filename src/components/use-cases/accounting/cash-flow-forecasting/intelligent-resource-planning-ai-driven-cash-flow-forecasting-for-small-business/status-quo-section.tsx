export default function StatusQuoSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every hour spent wrangling spreadsheets or chasing down invoice statuses is a cost, but for most small
        businesses, it is a hidden one. The time lost to manual processes does not show up as a line item, but
        it drains capacity from every team member who touches the books. In the typical South Florida back
        office, a manager spends Friday afternoon updating a cash flow sheet, only to find on Monday that new
        invoices and payments have already made it obsolete. This is not just frustrating, it is expensive.</p>
      <p className="text-md text-white shadow-text pt-3">
        The most obvious cost is labor. When each transaction is touched twice, once in the source system, again
        in the forecast, those minutes add up fast. For a twelve-person team, even a few minutes per invoice or
        bill creates a full day lost every week. Take the Helm was built to cut this waste. By pulling open AR
        and AP balances directly from accounting software and mapping them onto an interactive timeline, it
        eliminates double entry, slashes the time spent reconciling, and gives the owner a view of their true
        cash position in minutes, not hours.</p>
      <p className="text-md text-white shadow-text pt-3">
        Errors multiply in manual workflows. Every handoff, every formula change, is a chance for a broken link
        or transposed number. These are not just small mistakes, they can mean missing a payment, overdrawing an
        account, or misjudging cash on hand. Cashflowfrog tackles this by generating real-time cash flow
        projections from live ledger data, flagging low cash points and highlighting which customers routinely
        pay late. The cost of a missed warning can be a bounced payroll or an urgent loan, costs that far
        outweigh the effort to prevent them.</p>
      <p className="text-md text-white shadow-text pt-3">
        Delay is another silent killer. By the time a team has exported data, built the report, and circulated
        it for review, the numbers have already shifted. This lag makes it impossible to act on emerging trends,
        like a sudden dip in collections or a spike in expenses. Jirav’s rolling forecast engine and unified
        dashboards close this gap by updating projections as soon as new actuals are available. The result is a
        team that can see a cash crunch coming weeks out, not days after the fact, and adjust hiring or
        purchasing decisions before the damage is done.</p>
      <p className="text-md text-white shadow-text pt-3">
        The risk is not just operational, but strategic. Presenting outdated or fractured reports to a lender or
        investor undermines credibility and can cost access to capital. Fathom’s visual dashboards and entity
        consolidation solve this by turning dense ledgers into clear, actionable stories, tailored to each
        division or stakeholder. The cost of confusion here is real: delayed approvals, missed funding windows,
        and a leadership team that spends its time arguing over whose numbers are right instead of planning the
        next move.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and control break down when manual workarounds become the norm. Shared admin logins, untracked
        changes, and exported spreadsheets create openings for fraud or accidental data leaks. QuickBooks now
        offers granular role-based permissions, so each user can access only what they need, reducing the risk
        of internal errors or external breaches. It also automates batch processing and workflow approvals, so
        high-volume operations can scale without adding headcount or losing oversight.</p>
      <p className="text-md text-white shadow-text pt-3">
        The people who pay for these failures are not just the finance team, they are every employee waiting on
        a reimbursement, every vendor chasing a late payment, and every owner left guessing about whether they
        can afford to hire or expand. The status quo asks everyone to absorb the uncertainty, patch over the
        gaps, and make do with numbers that are always just out of date. Intelligent Resource Planning is not
        just about saving time or reducing errors, it is about shifting those hidden costs off your people and
        onto a system built to handle complexity, speed, and risk at scale.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="manual-processes-stack-up-hidden-costs-where-the-time-errors-and-risk-land" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Manual Processes Stack Up Hidden Costs: Where the Time, Errors, and Risk Land
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="manual-processes-stack-up-hidden-costs-where-the-time-errors-and-risk-land" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Manual Processes Stack Up Hidden Costs: Where the Time, Errors, and Risk Land
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
