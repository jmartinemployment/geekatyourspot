import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Most small business owners in South Florida have seen the same story play out: a team spends days
        copying numbers from one place to another, only to find that the forecast missed the mark when it
        mattered. The core problem is not laziness or lack of effort, it is the structure of the work itself. At
        each step, the process relies on manual handoffs, static data, and backward-looking sheets that cannot
        keep pace with the business. The breakdowns start early and compound as the business grows.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first major failure is the disconnect between real-time activity and the numbers used for planning.
        Forecasts are often built on last quarter’s data, trailing averages, and static assumptions that ignore
        real changes in sales, hiring, or costs. When a business expands or contracts, maybe adding a location
        in Broward or holding off on new hires until a contract clears, the forecast lags behind. This is how a
        team ends up over-hiring or moving too slow on staffing, burning payroll through a slow summer, or
        missing the moment to scale up for a busy
        season.&nbsp;<Link id="use-cases-accounting-intelligent-resource-planning-challenges-jirav" href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav" className="text-[#C83803] hover:underline">Jirav</Link>&nbsp;addresses
        this by linking accounting, payroll, and&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;data for
        driver-based forecasting, so the plan updates as reality changes, not a month later.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another pain point is the illusion of control in spreadsheets. Teams try to model complex scenarios,
        what if a key client cuts spend, or a vendor bill comes due early, by copying tabs and editing formulas
        by hand. This is not just slow; it is fragile. A single error or missed update, especially when pulling
        data
        from&nbsp;<Link id="use-cases-accounting-intelligent-resource-planning-challenges-quickbooks" href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks" className="text-[#C83803] hover:underline">QuickBooks</Link>&nbsp;or
        a payroll system, can throw off an entire budget. When finance teams present fractured spreadsheets to a
        bank, the lack of a unified, professional view undermines their credibility. Jirav’s pre-built
        frameworks and rolling forecast engines replace this patchwork with templates and dashboards that
        eliminate manual errors and bring scenario planning into a single, reliable place.</p>
      <p className="text-md text-white shadow-text pt-3">
        Meanwhile, cash flow visibility gets trapped in the details of&nbsp;<Link id="use-cases-accounting-intelligent-resource-planning-challenges-accounts-receivable" href="/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai" className="text-[#C83803] hover:underline">accounts receivable</Link>&nbsp;and payable cycles.
        Revenue on paper does not match money in the bank, especially when customers pay late or bills stack up
        unexpectedly.&nbsp;<Link id="use-cases-accounting-intelligent-resource-planning-challenges-take-the-helm" href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm" className="text-[#C83803] hover:underline">Take
        the Helm</Link>&nbsp;was built for this exact pain, it gives a live, drag-and-drop timeline where you
        can see how changing one payment date changes your cash runway. Sudden&nbsp;<Link id="use-cases-accounting-intelligent-resource-planning-challenges-payroll-tax-worker-misclassification" href="/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-smb-compliance" className="text-[#C83803] hover:underline">payroll taxes</Link>, local compliance
        fees, or a late-paying client no longer catch you off guard, because the system predicts clearance dates
        and shows cash positions for the next week, month, or quarter.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next trap is the hidden cost of manual data entry and fragmented data sources. When teams spend
        hours keying invoices into QuickBooks, then exporting and cleaning the data for analysis, errors creep
        in and the view is always outdated. This is
        where&nbsp;<Link id="use-cases-accounting-intelligent-resource-planning-challenges-cashflowfrog" href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog" className="text-[#C83803] hover:underline">Cashflowfrog</Link>&nbsp;steps
        in, by automatically generating real-time cash charts from synced ledgers, it removes the need for
        technical accounting expertise and lets the owner see their real cash position, not just what should be
        there on paper. It flags low cash points and grades customers by payment speed, so you know which
        relationships are draining your working capital.</p>
      <p className="text-md text-white shadow-text pt-3">
        Even with the right numbers, many businesses get lost in the reporting. Dense general ledgers and basic
        dashboards hide the levers that drive profit and
        cash.&nbsp;<Link id="use-cases-accounting-intelligent-resource-planning-challenges-fathom" href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq" className="text-[#C83803] hover:underline">Fathom</Link>&nbsp;solves
        this by consolidating data across locations or divisions, tracking KPIs that matter, like unit economics
        for each storefront, and turning flat reports into step-by-step stories that leaders can actually use.
        It models the exact breakeven and sensitivity points for operations, so decisions are based on what
        moves the needle, not just what happened last month.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, there is the migration panic: the fear that outgrowing a basic system like QuickBooks means a
        costly, disruptive leap to a full&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>. Too often,
        businesses limp along with manual workarounds, exporting to Excel for custom views or sharing generic
        admin logins that expose them to fraud. QuickBooks now offers deeper automation, user permissions, and
        batch processing without forcing a change in how the team works day-to-day. You get the control and
        visibility of a bigger system, but in the familiar interface your staff already knows.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real problem is not a lack of financial data, but the way that data remains siloed, stale, or buried
        under manual effort. Intelligent Resource Planning, using tools that automate the handoffs, surface live
        insights, and adapt to your actual business drivers, closes these gaps. The result is not just more
        accurate forecasts, but a shift from reacting to surprises to steering the business in real time.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-breaks-down-in-manual-cash-flow-forecasting-and-resource-planning" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Breaks Down in Manual Cash Flow Forecasting and Resource Planning
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
              <h2 id="what-breaks-down-in-manual-cash-flow-forecasting-and-resource-planning" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Breaks Down in Manual Cash Flow Forecasting and Resource Planning
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
