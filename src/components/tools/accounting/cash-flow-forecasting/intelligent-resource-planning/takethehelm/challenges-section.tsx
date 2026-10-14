import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A small business in South Florida faces the same scene every Friday. The owner opens a spreadsheet,
        hoping the numbers match reality. Payroll is due, but a big client’s payment is late. A surprise utility
        bill lands in the inbox. The team scrambles to cover costs, only to realize that a supplier invoice
        slipped through the cracks last week. The owner spends hours chasing down numbers, not growing the
        business.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is not just about inconvenience. The cost of manual resource planning runs deeper. Teams waste
        hours each week copying figures from emails, invoices, and bank portals into separate spreadsheets. Each
        handoff multiplies the chance for mistakes. When a customer’s payment is late, the team does not see it
        until it hits payroll. Bills pile up without warning, and the business misses early-payment discounts or
        racks up late fees. There is no warning before a cash crunch, just a notification from the bank that the
        account is overdrawn.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real problem is the lack of a single, live view. Sales, expenses, and payroll each live in their own
        file or system. The owner cannot see when cash will actually arrive or leave. Instead, they guess. A
        single missed invoice or an unexpected expense can derail plans for weeks. The team spends valuable time
        running down numbers, checking and rechecking, instead of focusing on customers or new business.</p>
      <p className="text-md text-white shadow-text pt-3">
        This cycle is not a one-off. It repeats every month. When accounts receivable cycles are unpredictable,
        cash flow becomes a guessing game. The business cannot plan for growth, invest in new equipment, or even
        guarantee payroll without risk. The cost is not just late fees or missed opportunities. It is the
        constant stress of not knowing. Owners and staff lose sleep over the next big payment or the next
        surprise bill.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual processes also make it easy to overlook key
        deadlines.&nbsp;<GlossaryLink slug="accounts-payable">Accounts payable</GlossaryLink>&nbsp;gets lost in
        the shuffle, leading to damaged supplier relationships and extra costs. Even when the business tries to
        get ahead, the effort to clean up and map messy data into a new system can feel overwhelming. Hundreds
        of billable hours go into scrubbing spreadsheets, with little to show for it except more confusion.</p>
      <p className="text-md text-white shadow-text pt-3">
        When the team tries to build a forecast, they hit another wall. Each scenario, what if a client pays
        late, or a big expense hits, means hours spent rebuilding spreadsheets. Every change means
        double-checking numbers, hoping nothing was missed. There is no easy way to see the impact of a delayed
        payment or a new hire. The result: decisions are made on gut feeling, not data, and the business stays
        reactive, not proactive.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm breaks this cycle. Instead of scattered spreadsheets and endless manual updates, it pulls
        all the moving parts, sales, payables, receivables, into one live dashboard. When a client pays late,
        the impact shows up immediately. When a bill is due, it is visible on the timeline, not buried in an
        email. The owner can drag and drop transactions to see what happens if a payment date changes. No more
        guessing, no more last-minute scrambles.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm uses historical payment data to predict when invoices will actually clear, not just when
        they are due. This means the team can plan for real cash, not just the numbers on paper. It flags
        overdue payments, highlights bills coming due, and gives a clear picture of the next 7, 30, or 90 days.
        The result is fewer surprises and more control.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and West Palm Beach, the cost of manual resource planning
        is measured in lost time, missed opportunities, and constant worry. Take the Helm offers a way out,
        replacing chaos with clarity and giving teams back the hours they need to run and grow their business.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-resource-planning-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Resource Planning by Hand
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
              <h2 id="what-it-costs-to-keep-doing-resource-planning-by-hand" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Resource Planning by Hand
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
