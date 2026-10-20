export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A founder in Miami-Dade, Broward or West Palm Beach may start the week with a win, new orders, new sales
        channels, or a promising wholesale partnership, only to spend Friday buried under a pile of state
        notices and spreadsheets. The moment a small business crosses $100,000 in sales or 200 transactions in a
        state, it triggers the Multi-State Sales Tax Nexus threshold. That means new obligations: register,
        collect, and remit sales tax in states where they have never set foot. This is not just a rule change;
        it is a workload shift that most small teams cannot absorb without breaking something else.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first real cost is time. Tracking which states you have crossed into for economic or physical nexus
        is not a one-time job. Each channel, Shopify, Amazon, wholesale, phone orders, feeds into a different
        system. Basic software only tracks what it sees, so if a sale never hits that system, it does not count
        toward the threshold. That leaves the team guessing, or worse, missing states entirely. When inventory
        moves into a third-party warehouse, like Amazon FBA or a regional 3PL, that creates a physical nexus in
        that state. Most founders miss this until a notice arrives. By then, back taxes and penalties have
        started adding up.</p>
      <p className="text-md text-white shadow-text pt-3">
        The second cost is risk. Filing returns at the state level does not cover you if you miss county or
        local filings, especially in states with complex home-rule jurisdictions like Colorado and Louisiana.
        Each missed local filing is a penalty risk. Every error in data entry, every late payment, every return
        filed with the wrong numbers, increases the chance of an audit. And audits for multi-state compliance
        are not routine. They are disruptive, expensive, and often retroactive. The state will demand every
        dollar you should have collected, plus interest and penalties. If you did not collect tax at the time of
        sale, you pay it out of your own pocket.</p>
      <p className="text-md text-white shadow-text pt-3">
        Cash flow takes a hit too. Many small businesses mix collected sales tax into their main operating
        account. That money gets used for payroll or inventory. When the tax bill comes due, the cash is not
        there. Now the business is not just late; it is exposed to penalties and late fees. Trying to fix this
        after the fact is a scramble, moving money, borrowing, or delaying payments to vendors. This cycle
        repeats every filing period, draining focus from sales and growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        Historical liability is the hidden threat. When a business tries to clean up years of uncollected sales
        tax by self-filing, it often triggers state audits or immediate penalty assessments. Voluntary
        Disclosure Agreements (VDAs) can reduce penalties, but only if handled properly. Most small teams do not
        have the expertise or the time to negotiate these with state departments. The process is slow,
        stressful, and full of traps.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, audit defense is a job in itself. Without structured, archived transaction logs, responding to
        an auditor’s request means hours, sometimes days, spent pulling data from old systems, emails, and
        spreadsheets. Each missing record is a liability. Each gap in documentation is a risk the business owner
        has to absorb. The cost is not just money; it is lost time, lost focus, and in some cases, lost deals.
        Buyers and investors look for clean compliance records. Any red flag can derail an acquisition or lower
        a company’s valuation.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the reality for small businesses scaling across state lines. Every new sales channel, every
        warehouse, every remote employee adds complexity. The manual approach, tracking thresholds by hand,
        patching together reports, and hoping nothing gets missed, leaves teams exposed to penalties, audit
        risk, and operational slowdowns. The cost is not just in dollars; it is in the hours lost each week, the
        stress of uncertainty, and the missed opportunities that come from focusing on compliance instead of
        growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
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
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
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
