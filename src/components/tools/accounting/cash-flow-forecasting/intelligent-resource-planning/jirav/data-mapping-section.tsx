import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The foundation of a successful Jirav deployment is set in the first days, before any dashboard lights
        up. The key decisions are about how to structure your data and map it into Jirav’s model. These choices
        determine whether your forecasts are reliable or if you are just automating old mistakes.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is mapping your chart of accounts. Jirav is built to work with accounting data from
        QuickBooks, NetSuite, Sage Intacct, and more, but every business codes income and expenses differently.
        If your accounts have legacy codes, duplicates, or vague labels, Geek @ Your Spot LLC works with you to
        clean and standardize them. The goal is a single, unambiguous set of categories that feed into Jirav’s
        financial models. This is not just an import process, accounts need to be grouped and labeled so that
        revenue, cost of goods sold, payroll, and overhead flow into the right lines for forecasting and
        scenario analysis.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next is deciding how to handle operational drivers. Jirav’s strength is in driver-based modeling, using
        real business activities (like sales calls, units shipped, or headcount) to power forecasts. You need to
        pick which drivers matter most for your business and where that data lives. For some, it is
        the&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;pipeline; for others, inventory or project
        management tools. Geek @ Your Spot LLC helps identify these sources and map them into Jirav, so that changes
        in the real world (like a big deal closing or a new project launching) automatically update the
        forecast. This step avoids the common trap of models that lag behind reality because they rely on manual
        updates.</p>
      <p className="text-md text-white shadow-text pt-3">
        Payroll and workforce data is another critical mapping decision. Jirav can forecast new hires, raises,
        bonuses, and accrued expenses, but only if employee data is structured and connected. If your payroll
        exports are inconsistent or lack key fields, Geek @ Your Spot LLC sets up the mapping so that every hire,
        departure, or pay change flows into the workforce plan. This is what makes it possible to see the true
        cost of a hiring plan or the impact of a raise before committing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Historical data import is not just about bringing in old numbers. Jirav’s rolling forecast and scenario
        engines work best when they can see patterns over time, seasonal swings, payment delays, or expense
        spikes. Geek @ Your Spot LLC helps you decide how far back to go and which data is clean enough to use.
        Where records are patchy or inconsistent, the team fills gaps with the best available data, clearly
        marking estimates so they do not pollute future forecasts.</p>
      <p className="text-md text-white shadow-text pt-3">
        User roles and permissions are part of data structure too. Jirav supports department-level planning and
        access, but only if users are mapped to the right cost centers and budgets. Geek @ Your Spot LLC works with
        you to define who needs to see what, so that sales, operations, and finance teams each get the view they
        need, without exposing sensitive data or creating confusion over who owns which numbers.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, mapping decisions extend to custom metrics and KPIs. Jirav lets you define and track metrics
        unique to your business, but these need clear definitions and data sources. Geek @ Your Spot LLC helps set
        up these metrics so they pull from the right places and update automatically, not by hand. This ensures
        that dashboards reflect reality, not just what someone remembered to update.</p>
      <p className="text-md text-white shadow-text pt-3">
        A well-structured Jirav deployment means your team spends less time fixing errors and more time acting
        on current numbers. The up-front mapping work pays off every month, as forecasts stay accurate and
        dashboards stay trustworthy, no more Friday afternoons spent chasing down why the cash flow projection
        does not match the bank statement.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-data-structure-and-mapping-decisions-matter-most-when-deploying-jirav" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data Structure and Mapping Decisions Matter Most When Deploying Jirav
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
              <h2 id="what-data-structure-and-mapping-decisions-matter-most-when-deploying-jirav" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data Structure and Mapping Decisions Matter Most When Deploying Jirav
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
