import Link from "next/link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Bill is particularly well-suited for small to midsize businesses that need to streamline their automated
        accounts receivable processes without investing in overly complex systems. Its automated features reduce the
        manual workload, allowing business owners to focus on growth rather than administrative tasks. For companies
        like Maria&#39;s graphic design firm in Miami, this means more time spent on creative work and less on
        chasing payments.</p>
      <p className="text-md text-white shadow-text pt-3">
        Businesses that already use accounting software like QuickBooks or Xero will find Bill&#39;s integration
        capabilities especially beneficial. The two-way sync ensures that all financial activities are automatically
        updated across platforms, reducing the risk of errors and improving financial accuracy. This is ideal for
        businesses that need to maintain tight control over their cash flow without dedicating additional resources
        to manual data entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Bill might not be the best fit for enterprises with highly specific needs that require extensive
        customization. While it offers a robust set of features, companies with complex financial operations may
        require a more tailored solution. In such cases, exploring platforms that offer customizable workflows and
        integrations could be more appropriate.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses considering Bill, the next step is to evaluate how its features align with their specific
        needs. Geek @ Your Spot can assist with this assessment, ensuring that the implementation process is smooth
        and tailored to the business&#39;s existing systems. By leveraging Geek @ Your Spot&#39;s expertise,
        businesses can maximize the benefits of Bill&#39;s capabilities, ensuring a successful integration and
        improved financial management.</p>
      <p className="text-md text-white shadow-text pt-3">
        In conclusion, Bill offers a compelling solution for businesses seeking to automate their automated accounts
        receivable processes. By partnering with Geek @ Your Spot, businesses can ensure that they are making the
        most of this powerful tool, leading to improved cash flow and reduced administrative burdens.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-accounts-receivable-bill-right-fit-consultation" href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="who-benefits-most-from-bill-and-next-steps">
                Who Benefits Most from Bill and Next Steps
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="who-benefits-most-from-bill-and-next-steps">
                Who Benefits Most from Bill and Next Steps
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
