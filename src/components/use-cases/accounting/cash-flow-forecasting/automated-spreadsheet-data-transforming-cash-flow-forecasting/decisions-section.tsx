
export default function DecisionsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        When automating&nbsp;cash flow
        forecasting&nbsp;through automated spreadsheet data, the initial choices you make can have a
        lasting impact on the success of the implementation. For small businesses in Miami-Dade, Broward, and West
        Palm Beach counties, these decisions are crucial to ensure that the automated system integrates seamlessly
        with existing processes and delivers tangible benefits.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of the first decisions is selecting the right technology partner. This choice influences how well the
        automation fits into your current systems and workflows. For example, choosing a tool like Clockwork, which
        is designed to integrate with QuickBooks and Xero, ensures that you have a seamless flow of financial data.
        Clockwork automates the creation of 52-week cash flow forecasts and 5-year financial models directly from
        your general ledger, reducing the need for manual data entry and minimizing errors.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another critical decision involves setting clear objectives for the automation project. Define what success
        looks like for your business. Are you aiming to reduce the time spent on cash flow forecasting by 50%? Or is
        your goal to improve accuracy and reduce the margin of error? Establishing these objectives upfront guides
        the project and helps measure its success post-implementation.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data quality&nbsp;assessment is another decision that
        cannot be overlooked. Before implementing any automated system, it&#39;s essential to evaluate the quality
        of your existing data. Tools like Dryrun offer
        real-time&nbsp;ERP&nbsp;data synchronization and dynamic scenario
        modeling, which can highlight discrepancies in your current data setup. Addressing these issues early on
        ensures that the automation process is built on a solid foundation, free from the inaccuracies that plague
        spreadsheet-based forecasts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, consider the scalability of the chosen solution. As your business grows, your cash flow forecasting
        needs will evolve. A platform like Take the Helm, which supports multi-entity and multi-currency operations, offers
        the flexibility needed to scale operations without the need for complex reconfigurations. This foresight
        prevents the need for costly overhauls as your business environment changes.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="early-decisions-that-shape-cash-flow-automation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Early Decisions That Shape Cash Flow Automation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="early-decisions-that-shape-cash-flow-automation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Early Decisions That Shape Cash Flow Automation
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
