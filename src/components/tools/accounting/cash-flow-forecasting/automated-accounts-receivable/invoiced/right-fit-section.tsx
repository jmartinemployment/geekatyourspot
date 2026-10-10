import Link from "next/link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced is particularly well-suited for small to mid-sized businesses in sectors such as technology,
        healthcare, and professional services. These businesses often face challenges with manual accounts
        receivable processes, which can be time-consuming and prone to errors. By automating these tasks, Invoiced
        helps businesses save time and reduce the risk of human error, allowing them to focus on strategic growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Invoiced may not be the best fit for businesses that require highly customized solutions or those
        with complex billing needs that go beyond standard accounts receivable processes. For these companies, a
        more tailored solution might be necessary to meet specific operational requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses considering Invoiced, it&#39;s essential to evaluate how the platform integrates with
        existing systems and whether its features align with their financial objectives. Small businesses in the
        specified counties can benefit from Geek @ Your Spot&#39;s expertise in implementing Invoiced, ensuring a
        smooth transition and effective use of the platform&#39;s capabilities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot offers comprehensive support, from initial setup to ongoing management, helping businesses
        leverage Invoiced to its full potential. This includes configuring the platform to match specific business
        needs, training staff, and providing insights into optimizing accounts receivable processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, businesses should weigh the benefits of automation against their current processes and consider
        the long-term impact on efficiency and cash flow. Invoiced provides a robust solution for those looking to
        streamline their automated accounts receivable operations, but it&#39;s crucial to ensure it aligns with the
        company&#39;s overall financial strategy.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-accounts-receivable-invoiced-right-fit-consultation" href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
          booking your free consultation
        </Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>How does automated AR improve the accuracy of a cash flow forecast?</li>
        <li>What is a &quot;Payment Predictor&quot; or &quot;Customer Risk Score&quot;?</li>
        <li>Can automated forecasting account for unbilled revenue or recurring disputes?</li>
        <li>What data does an automated AR system need to build a cash flow forecast?</li>
        <li>How does automated invoice matching impact cash visibility?</li>
        <li>How do automated AR tools handle &quot;What-If&quot; scenario planning?</li>
        <li>How does forecasting integration optimize collection strategies?</li>
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="who-benefits-most-from-invoiced-and-what-to-consider">
                Who Benefits Most from Invoiced, and What to Consider
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="who-benefits-most-from-invoiced-and-what-to-consider">
                Who Benefits Most from Invoiced, and What to Consider
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
