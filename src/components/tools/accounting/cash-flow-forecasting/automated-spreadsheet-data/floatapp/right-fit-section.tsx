import Link from "next/link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Floatapp is designed with small businesses in mind, particularly those in West Palm Beach, Broward, and
        Miami-Dade counties looking to optimize their&nbsp;cash flow
        forecasting. It suits businesses that need real-time data integration and streamlined
        forecasting without the complexity of a full&nbsp;ERP&nbsp;system.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses currently struggling with manual spreadsheet management, Floatapp offers a clear advantage.
        By automating data imports and providing real-time updates, it reduces the time spent on data entry and
        minimizes errors. This is especially beneficial for businesses with limited financial staff, as it allows
        them to focus on strategic planning rather than routine data management.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, if your business requires extensive ERP functionalities beyond cash flow forecasting, such as
        inventory management or HR systems, Floatapp might not cover all your needs. In such cases, a comprehensive
        ERP system might be more suitable, although it comes with higher costs and complexity.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that primarily need robust cash flow management without the added layers of ERP systems,
        Floatapp provides a focused and efficient solution. Its scenario planning and real-time updates offer
        significant advantages for businesses looking to make informed financial decisions quickly.</p>
      <p className="text-md text-white shadow-text pt-3">
        To determine if Floatapp is the right fit, consider your business&#39;s specific needs in cash flow
        management. If you need a tool that integrates seamlessly with existing accounting platforms and provides
        accurate, up-to-date forecasts, Floatapp is likely a strong candidate. For those interested in exploring its
        capabilities further, consulting with a specialist like Geek @ Your Spot LLC can provide additional insights
        tailored to your business&#39;s unique requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id={`tools-accounting-spreadsheet-data-floatapp-right-fit-consultation${idSuffix}`} href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
          booking your free consultation
        </Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-floatapp-right-for-your-business">
                Is Floatapp Right for Your Business?
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-floatapp-right-for-your-business-lg">
                Is Floatapp Right for Your Business?
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
