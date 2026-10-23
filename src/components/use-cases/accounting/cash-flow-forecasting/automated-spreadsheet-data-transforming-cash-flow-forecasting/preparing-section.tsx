export default function PreparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Once the decision to automate is made, preparing for implementation is crucial. For small businesses in
        South Florida, this means aligning the process with their specific needs and setting realistic expectations
        for the transition.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is a thorough assessment of current systems and&nbsp;data
        quality. Understanding the existing data landscape helps in choosing the right tools. For
        instance, if a business uses QuickBooks or Xero, integrating Clockwork offers a seamless transition with its
        one-click connection and real-time updates, minimizing disruption.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, businesses should define clear objectives and KPIs. This involves setting specific goals, such as
        reducing the time spent on manual data entry or
        improving&nbsp;cash flow forecasting&nbsp;accuracy
        by a certain percentage. These goals will guide the selection of tools and the overall implementation
        strategy.</p>
      <p className="text-base text-white shadow-text pt-3">
        Training and support are essential components of a successful rollout. Teams need to be trained not just on
        how to use the new tools, but also on how to interpret and act on the data insights they provide. Tools like
        Dryrun and Cashflowfrog offer intuitive interfaces, but understanding their full capabilities requires
        dedicated learning sessions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Businesses should anticipate a period of adjustment. Initial implementation might reveal unforeseen
        challenges, such as data discrepancies or integration issues. It is crucial to have a responsive support
        system in place, either from the tool provider or an internal IT team, to address these issues promptly.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, set a timeline for assessing the system’s impact. This could be quarterly reviews of cash flow
        accuracy or monthly checks on the time saved in data processing. Adjustments should be made based on these
        evaluations to ensure the system continues to meet the business&#39;s evolving needs.</p>
      <p className="text-base text-white shadow-text pt-3">
        By preparing thoroughly and setting clear expectations, businesses can ensure a smoother transition to
        automated spreadsheet data systems. For Maria and small business owners like her, this means moving from
        reactive to proactive financial management, enabling better decision-making and strategic planning.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <a href="#consultationAppointment2xl" id={`use-cases-accounting-spreadsheet-data-preparing-consultation${idSuffix}`} className="text-[#C83803] hover:underline">
          booking your free consultation
        </a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Offer a free &quot;Cash Flow Fragility Audit&quot; to prospects. Have them send you their current manual Excel forecast. Point out the broken links, the hard-coded numbers that are already out of date, and the formulas that will break if they add a new row. Then, show them a video mockup of how that exact same spreadsheet looks when powered seamlessly by your partner software&#39;s live data feed.</li>
        <li>How much time does your team spend manually collecting, consolidating, and updating cash flow data each week or month?</li>
        <li>What is your current error rate or frequency of broken formulas and version control issues when multiple team members edit your forecasting sheets?</li>
        <li>How far out can you reliably forecast right now (e.g., 13 weeks, 12 months) before the manual spreadsheet maintenance becomes too overwhelming?</li>
        <li>What specific data sources (e.g., ERPs, bank accounts, billing platforms, CRMs) do you need to stitch together to get an accurate cash flow picture?</li>
        <li>Who needs to see these reports, and how much time do you spend formatting spreadsheet data so it is presentable for executives, board members, or lenders?</li>
        <li>What specific business event (e.g., rapid scaling, tightening margins, upcoming capital raise, or a recent forecasting error) prompted you to look into automated alternatives?</li>
        <li>What is the single biggest risk to your business if your cash flow forecast is inaccurate next month?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="preparing-for-implementation-and-setting-expectations" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Preparing for Implementation and Setting Expectations
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="preparing-for-implementation-and-setting-expectations-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Preparing for Implementation and Setting Expectations
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
