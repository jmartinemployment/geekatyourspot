
export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Choosing Fathom for intelligent resource planning is not about picking the most features or the lowest
        sticker price. The right fit comes down to whether the platform matches your business’s size,
        complexity, and appetite for hands-on management. For small businesses in South Florida, the question is
        not just &quot;Can Fathom do it?&quot; but &quot;Does it do it in a way that fits how we actually work,
        and is the price model one we can live with?&quot;</p>
      <p className="text-base text-white shadow-text pt-3">
        Fathom is built for small and medium businesses, business advisors, and franchise groups, teams that
        need to consolidate multiple entities, track both financial and operational KPIs, and deliver actionable
        reports without a finance department behind them. The platform’s entity limits (up to 300 in a
        single-currency group, 50 for multi-currency) are far above what most small businesses will ever need.
        This means even a local group with multiple locations or a holding company structure can bring all its
        data into one dashboard.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real test of fit is not in the headline numbers, but in how Fathom handles your data. If your books
        are spread across QuickBooks, Xero, or MYOB, the platform’s native integrations mean you do not need to
        rekey or manually export data every month. If you are still running on spreadsheets or have operational
        data in Google Sheets, Fathom can bring that in alongside your accounting numbers. This is a major
        advantage for small teams that do not have time to build custom connectors or run manual imports.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Fathom is a good fit if:</li>
        <li>You need to consolidate multiple companies or locations, each with its own books.</li>
        <li>You want to track both financial and non-financial KPIs (like headcount, square footage, or customer satisfaction) in one place.</li>
        <li>You need scenario-based forecasting to plan for growth, slowdowns, or major changes.</li>
        <li>You want automated board-ready reports that do not require hours of formatting or narrative writing.</li>
        <li>Your team is comfortable with point-and-click configuration, but does not want to manage custom code or integrations.</li>
        <li>You want a platform that grows with you, able to handle more entities, more KPIs, and more complexity as you expand.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Fathom is less suited if your business needs deep customization through APIs, scripting, or custom
        workflow logic. The platform’s configuration is deep, but it is not a blank slate for custom
        development. For most small businesses, this is a benefit: fewer moving parts, less risk of breaking
        things, and a setup that is easy to maintain even as staff turns over.</p>
      <p className="text-base text-white shadow-text pt-3">
        On pricing, Fathom offers a 14-day free trial with full access to features. After that, the pricing
        model is not published in detail on its public site, but the free trial is a low-risk way for any small
        business to see if the tool fits before committing. There are no hidden upgrade requirements to access
        core features
        like&nbsp;KPI&nbsp;tracking,
        multi-entity consolidation, or scenario forecasting, these are included out of the box.</p>
      <p className="text-base text-white shadow-text pt-3">
        When weighing Fathom against other options, the question is not just about price per month, but about
        the hours saved, errors avoided, and the ability to make decisions faster. Case studies from Fathom’s
        own site show teams cutting reporting time by up to 75% and gaining the confidence to present numbers to
        banks, directors, and investors. For a small business, this can mean the difference between catching a
        cash shortfall before it hits or scrambling to cover payroll after the fact.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fit also means looking at what the platform does not do. Fathom is not
        an&nbsp;ERP&nbsp;replacement;
        it does not handle inventory, sales orders, or payroll on its own. It is a financial analysis and
        reporting engine that sits on top of your existing systems, pulling data together and making it
        actionable. If your needs are broader,
        full&nbsp;ERP,
        inventory management, or deep operational workflows, you may need to pair Fathom with other tools, or
        consider a different primary system.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in West Palm Beach, Broward, and Miami-Dade, the decision comes down to this:
        Fathom is a fit if you want to stop living in spreadsheets, start seeing your numbers live, and get out
        of the cycle of manual reporting. The price model is transparent at the trial stage, with no risk of
        surprise upgrades just to get the basics working. Fit is about what your team needs to see, how fast you
        need to see it, and whether you want a tool that lets you focus on the business rather than on the
        software. That is the ground Fathom stands on.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="judging-fathom-fit-suitability-and-the-pricing-model-for-small-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Judging Fathom: Fit, Suitability, and the Pricing Model for Small Business
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="judging-fathom-fit-suitability-and-the-pricing-model-for-small-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Judging Fathom: Fit, Suitability, and the Pricing Model for Small Business
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
