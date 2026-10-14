import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Jirav takes the manual, error-prone steps out of intelligent resource planning by connecting all your
        key financial and operational data into a single, live platform. Instead of waiting for the month to
        close and then patching together numbers, your team sees real-time updates as soon as sales are booked,
        payroll is run, or bills are paid. This means the business owner and the team can make decisions based
        on what is happening now, not what happened last quarter.</p>
      <p className="text-md text-white shadow-text pt-3">
        Driver-based budgeting is at the core of Jirav’s approach. Rather than building plans around static
        categories or past assumptions, Jirav lets you set up models based on the actual drivers of your
        business, like new hires, contract wins, or recurring expenses. When a variable changes, the impact
        flows through the entire model immediately. This removes the need for manual recalculation and lets you
        see instantly how a change in sales, staffing, or costs will affect your cash flow and bottom line. The
        result: you spend less time checking formulas and more time acting on the numbers.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jirav’s integration with accounting, payroll,
        and&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;systems means you never have to enter the same
        data twice. Invoices, payments, and payroll details flow automatically into your forecasts and
        dashboards. This eliminates double data entry, reduces the risk of human error, and frees up staff to
        focus on analysis and action instead of data wrangling. The platform supports over 200 integrations,
        including QuickBooks, NetSuite, Sage Intacct, ADP, Paychex, Salesforce, and HubSpot, so it fits into the
        systems most small businesses in South Florida already use.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rolling forecasts are another area where Jirav changes the game. Rather than relying on a fixed annual
        budget that goes stale within months, Jirav lets you update your forecast as new data comes in. Actual
        results automatically replace projections, and the model rolls forward to keep your outlook current.
        This means you can spot trends, react to changes, and plan for the future with confidence. When the
        market shifts or a major contract lands, you see the impact right away, not after the fact.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jirav’s dashboards take the guesswork out of executive decision-making. Instead of spending hours
        building and formatting reports in Excel, you get visual, interactive dashboards that show cash flow,
        profitability, and other key metrics at a glance. These dashboards are not just for show, they pull
        directly from the same data used in your forecasts and models, so they are always up to date. This makes
        it easy to share clear, executive-ready presentations with banks, investors, or your own leadership team
        without scrambling to update numbers at the last minute.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scenario planning is built in. Jirav lets you run what-if analyses across all your financial statements,
        income, balance sheet, and cash flow, in minutes, not days. Want to see what happens if a client pays
        late, or if you need to hire early? Change the assumptions and watch the impact flow through every part
        of your plan. This lets you prepare for surprises and make decisions before a problem becomes a crisis.</p>
      <p className="text-md text-white shadow-text pt-3">
        Collaboration is easier, too. Jirav centralizes your annual operating plan and allows live updates and
        input from team members, so everyone works from the same numbers. Access controls mean you can give
        department heads or outside advisors the right level of visibility without risking data integrity. This
        keeps everyone on the same page and reduces the bottlenecks that come from version control headaches and
        lost files.</p>
      <p className="text-md text-white shadow-text pt-3">
        For accounts receivable, Jirav’s automated&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow
        forecasting</GlossaryLink>&nbsp;means you do not have to wait for the end of the month to see how
        outstanding invoices affect your runway. The system pulls in real-time data from your accounting and
        invoicing tools, giving you a live view of what is owed, what is overdue, and what is likely to come in.
        This lets you plan payroll, investments, and expenses with much more confidence.</p>
      <p className="text-md text-white shadow-text pt-3">
        Spreadsheet data is no longer a liability. With Jirav, you replace static grids and broken formulas with
        automated data consolidation. Numbers from multiple sources, bank accounts, payroll, invoicing tools,
        flow into the model without manual intervention. This reduces errors, ensures you are always working
        from the latest figures, and lets you close the books faster each month.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual enterprise planning, with its endless copying and pasting, is replaced by automated, connected
        workflows. Jirav’s platform lets you build and adjust operating plans, budgets, and forecasts in one
        place. When a new hire is approved or a bill comes in, the impact appears in your plan automatically.
        This means you can scale your transaction volume and reporting needs without having to add more
        headcount just to keep up with the admin.</p>
      <blockquote cite="https://www.jirav.com/business-planning-budgeting-forecasting" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Automate your data by seamlessly integrating your accounting, workforce, and operational data in a
        dynamic driver-based financial model.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        For the team in the opening, this means Friday afternoons do not have to be spent fixing spreadsheets
        and chasing down missing numbers. Instead, they work from a live dashboard that shows exactly where cash
        stands, what is coming in, and what needs attention. The owner can see at a glance whether it is safe to
        hire, take on a new project, or weather a seasonal dip. Stress about missing payroll or misjudging cash
        flow fades, replaced by clear, actionable insight.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jirav does not just make the work easier; it makes it possible to do more with less. By automating the
        flow of data and removing manual steps, it gives back time, reduces errors, and lets small businesses in
        South Florida plan and grow with confidence. Intelligent Resource Planning is not just a buzzword here,
        it is a practical, daily reality that frees up your team to focus on what matters most.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-jirav-removes-the-manual-burden-from-intelligent-resource-planning" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Jirav Removes the Manual Burden from Intelligent Resource Planning
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
              <h2 id="how-jirav-removes-the-manual-burden-from-intelligent-resource-planning" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Jirav Removes the Manual Burden from Intelligent Resource Planning
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
