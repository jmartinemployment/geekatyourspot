import Link from "next/link";
export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Floatapp is designed with small businesses in mind, particularly those in West Palm Beach, Broward, and
        Miami-Dade counties looking to optimize their&nbsp;cash flow
        forecasting. It suits businesses that need real-time data integration and streamlined
        forecasting without the complexity of a full&nbsp;ERP&nbsp;system.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses currently struggling with manual spreadsheet management, Floatapp offers a clear advantage.
        By automating data imports and providing real-time updates, it reduces the time spent on data entry and
        minimizes errors. This is especially beneficial for businesses with limited financial staff, as it allows
        them to focus on strategic planning rather than routine data management.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, if your business requires extensive ERP functionalities beyond cash flow forecasting, such as
        inventory management or HR systems, Floatapp might not cover all your needs. In such cases, a comprehensive
        ERP system might be more suitable, although it comes with higher costs and complexity.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that primarily need robust cash flow management without the added layers of ERP systems,
        Floatapp provides a focused and efficient solution. Its scenario planning and real-time updates offer
        significant advantages for businesses looking to make informed financial decisions quickly.</p>
      <p className="text-base text-white shadow-text pt-3">
        To determine if Floatapp is the right fit, consider your business&#39;s specific needs in cash flow
        management. If you need a tool that integrates seamlessly with existing accounting platforms and provides
        accurate, up-to-date forecasts, Floatapp is likely a strong candidate. For those interested in exploring its
        capabilities further, consulting with a specialist like Geek @ Your Spot LLC can provide additional insights
        tailored to your business&#39;s unique requirements.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <a href="#consultationAppointment2xl" id={`tools-accounting-spreadsheet-data-floatapp-right-fit-consultation${idSuffix}`} className="text-[#C83803] hover:underline">
          booking your free consultation
        </a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Who keeps the spreadsheet up to date, and how often?</li>
        <li>Which systems feed it: bank, accounting, billing or manual?</li>
        <li>Who reads the reports?</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Floatapp’s distinctive claim is that a placeholder in a budget line is replaced by the real invoice or bill the moment it hits Xero or QuickBooks Online, and our post <Link id={`tools-accounting-cash-flow-forecasting-ai-spreadsheet-data-floatapp-xlink-blog${idSuffix}`} href="/blog/accounting/cash-flow-forecasting/how-automated-spreadsheet-data-transforms-cash-flow-forecasting" className="text-[#C83803] hover:underline">Automated Spreadsheets for Cash Flow</Link> explains why that matters for a small team whose client payment dates and expenses keep shifting: only reconciled transactions feed the forecast, so the manual adjustments stop. The post also names the limit, which is that an automated forecast inherits whatever is wrong in the books behind it. Our <Link id={`tools-accounting-cash-flow-forecasting-ai-spreadsheet-data-floatapp-xlink-pillar${idSuffix}`} href="/use-cases/accounting/cash-flow-forecasting/ai-spreadsheet-data" className="text-[#C83803] hover:underline">AI Spreadsheet Data</Link> guide covers the data quality review and the quarterly accuracy checks that keep a rolling forecast honest after the connection is made.</p>
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
