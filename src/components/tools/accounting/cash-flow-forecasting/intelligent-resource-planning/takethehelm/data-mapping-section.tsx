import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The biggest risk in rolling out a new resource planning tool is garbage data. Take the Helm’s
        forecasting and scenario planning are only as good as the numbers that feed them. That is why the
        initial data structure and mapping decisions matter more than any other technical step. The platform is
        built to handle messy, real-world data, but getting the most out of it means making smart choices about
        what comes in, how it is coded, and what gets left out.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm pulls data directly from QuickBooks Online, Xero, or Sage. This means the chart of
        accounts, open invoices, bills, and bank accounts are imported as they exist in the accounting system.
        The first decision is which accounts to include in the cash flow forecast. Not every account matters for
        near-term planning. For example, a reserve account or a rarely used credit line may clutter the forecast
        without adding value. Excluding these from the initial import keeps the dashboard focused on active cash
        flows, money that moves in and out every week.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next is mapping transactions to the right categories. Take the Helm uses the coding from the accounting
        system, but inconsistencies in the source data can skew the forecast. If payroll is sometimes coded as a
        direct expense and sometimes as overhead, the cash flow graph will not reflect reality. The platform’s
        setup wizard flags these inconsistencies, but it is up to the team, often with Geek @ Your Spot’s help,
        to standardize the mapping. This is not a one-time fix. As new transactions are added, keeping the
        coding consistent ensures forecasts stay accurate and trends are meaningful.</p>
      <p className="text-md text-white shadow-text pt-3">
        Receivables and payables mapping is where many small businesses stumble. Take the Helm lets users view
        accounts receivable and&nbsp;<GlossaryLink slug="accounts-payable">accounts
        payable</GlossaryLink>&nbsp;by age, by contact, or by average days to pay, calculated from historical
        data. This means the system does not just show what is due; it predicts when each client or vendor will
        actually pay based on their past behavior. For this to work, invoice dates and payment terms must be
        accurate in the accounting system. If old invoices are left open or payment terms are set
        inconsistently, the forecast will overstate available cash. Cleaning up these records before going live
        makes the predictions much more reliable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual adjustments are possible at every stage. Take the Helm’s drag-and-drop interface lets users shift
        payment dates, split transactions, and test the impact of different scenarios. But the value of these
        tools depends on the underlying data structure. If all revenue is lumped into one account, it is
        impossible to see which clients or projects drive cash inflow. If expenses are not broken out by
        category, cost overruns go unnoticed. Taking the time to map revenue and expense streams to meaningful
        categories pays off in more actionable forecasts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scenario planning is another area shaped by data structure choices. Take the Helm allows unlimited
        scenarios, each with its own set of assumptions and adjustments. If the base data is clean and
        well-mapped, building a scenario, like hiring a new employee or delaying a major purchase, takes
        minutes. If the data is inconsistent, every scenario becomes a guessing game. The platform’s
        side-by-side comparison feature works best when each scenario draws from the same, well-structured
        dataset.</p>
      <p className="text-md text-white shadow-text pt-3">
        Reporting is only as good as the mapping behind it. Take the Helm exports forecasts and transaction
        details to PDF and CSV. Stakeholders, owners, accountants, lenders, rely on these reports for decisions.
        If the mapping is sloppy, reports mislead rather than inform. This is why Geek @ Your Spot spends time
        up front reviewing the client’s chart of accounts, transaction coding, and open items. They help set
        rules for which accounts feed which forecast lines, and which transactions should be excluded from
        planning altogether.</p>
      <p className="text-md text-white shadow-text pt-3">
        A common pain point for small businesses is old, un-audited spreadsheets that do not match the
        accounting system. Take the Helm does not require every legacy record to be perfect before going live,
        but mapping key historical data, like past payment patterns or recurring expenses, improves the accuracy
        of the first forecast. Geek @ Your Spot often helps clients import these critical data points, mapping
        them to the right accounts and categories so trends and seasonality are visible from the start.</p>
      <p className="text-md text-white shadow-text pt-3">
        The upfront mapping decisions also affect user roles and permissions. Take the Helm supports unlimited
        users, but not everyone needs access to every account or scenario. Deciding who sees what, and who can
        edit which transactions, is part of the initial setup. This keeps sensitive data secure and ensures each
        user works with the information relevant to their job.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Take the Helm’s value for Intelligent Resource Planning depends on getting the data
        structure right from the start. Clean, consistently coded data feeds accurate forecasts, actionable
        dashboards, and reliable scenario planning. Geek @ Your Spot’s implementation support is crucial here,
        they know where small businesses’ data gets messy, and how to map it to Take the Helm’s requirements
        without dragging out the project. The result is a live system that reflects the real business, not just
        a theoretical model. Every decision made at this stage shapes what the owner and team will see on their
        dashboard every Friday afternoon.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-decisions-shape-take-the-helm-s-value-from-day-one" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Decisions Shape Take the Helm’s Value from Day One
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-decisions-shape-take-the-helm-s-value-from-day-one" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Decisions Shape Take the Helm’s Value from Day One
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
