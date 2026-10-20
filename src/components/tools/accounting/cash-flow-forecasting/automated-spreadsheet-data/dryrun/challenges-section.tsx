import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and West Palm Beach counties, managing cash flow with
        traditional spreadsheets is a costly endeavor. The reliance on outdated general ledger data and static
        models often leads to significant financial missteps. Over-committing to project costs without confirming
        milestone deposits can result in cash shortfalls, disrupting operations and leading to potential penalties
        or loss of client trust.</p>
      <p className="text-md text-white shadow-text pt-3">
        Currency conversion issues add another layer of complexity, especially for businesses with international
        branches. When localized accounts need to be rolled up into a primary ledger, the friction from multi-entity
        currency conversions can distort financial clarity. This misalignment often results in inaccurate financial
        reporting and strategic misjudgments.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, relying on backward-looking data to guide volatile sales pipelines renders financial models
        ineffective against market contractions. These models fail to adapt to real-time changes, leaving businesses
        vulnerable to unexpected downturns. This is particularly problematic for companies dealing with heavy
        material costs or specialized labor, where operational thresholds are often miscalculated due to outdated
        data.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, past-due invoices can accumulate without proper re-routing of their financial impacts. This
        passive accumulation can severely disrupt current operational budgets, forcing businesses to scramble for
        alternative funding or delay critical purchases.</p>
      <p className="text-md text-white shadow-text pt-3">
        Dryrun addresses these challenges by bridging the gap between actual ledger balances
        and&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;pipelines. It allows businesses to model volatile
        scenarios with complete transactional control, providing a real-time view of cash flow. By integrating with
        existing systems, Dryrun eliminates the need for manual data entry and reduces the risk of errors, offering
        a more dynamic and accurate forecasting model.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-real-costs-of-manual-cash-flow-management">
                The Real Costs of Manual Cash Flow Management
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-real-costs-of-manual-cash-flow-management-lg">
                The Real Costs of Manual Cash Flow Management
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
