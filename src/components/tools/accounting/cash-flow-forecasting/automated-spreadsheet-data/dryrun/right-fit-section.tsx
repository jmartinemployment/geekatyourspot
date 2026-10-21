export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Dryrun is particularly well-suited for mid-market businesses looking to enhance their cash flow management
        without the limitations of traditional spreadsheets. Its robust features, such as real-time data
        synchronization and dynamic scenario modeling, make it an ideal choice for companies that require precise
        and adaptable forecasting tools. Businesses operating in volatile markets or those with complex financial
        structures will find Dryrun&#39;s capabilities especially beneficial.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, Dryrun may not be necessary for very small businesses with simple cash flow needs or those that do
        not require the advanced features it offers. For these businesses, the cost and complexity of implementing a
        tool like Dryrun might outweigh the benefits. In such cases, simpler tools or even enhanced spreadsheet
        methods might suffice.</p>
      <p className="text-base text-white shadow-text pt-3">
        For those considering Dryrun, the next step is to evaluate how its features align with your specific
        business needs. Consider the level of integration required with your existing systems and the extent to
        which you need to model various financial scenarios. Geek @ Your Spot LLC can assist in this evaluation,
        providing insights into how Dryrun can be configured to meet your unique requirements and ensuring a smooth
        implementation process.</p>
      <p className="text-base text-white shadow-text pt-3">
        Engaging with Geek @ Your Spot LLC offers the advantage of expert guidance in deploying Dryrun. Their local
        expertise in Miami-Dade, Broward, and West Palm Beach counties ensures that your implementation is tailored
        to the regional market conditions and business practices. This personalized approach can significantly
        enhance the effectiveness of Dryrun, making it a valuable asset in your financial management toolkit.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <button type="button" data-scheduler-link id={`tools-accounting-spreadsheet-data-dryrun-right-fit-consultation${idSuffix}`} className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">
          booking your free consultation
        </button>.</p>
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
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-dryrun-right-for-your-business">
                Is Dryrun Right for Your Business?
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-dryrun-right-for-your-business-lg">
                Is Dryrun Right for Your Business?
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
