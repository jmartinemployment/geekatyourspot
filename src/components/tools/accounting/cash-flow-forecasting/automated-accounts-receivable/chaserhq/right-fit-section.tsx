import Link from "next/link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq is designed to cater to small businesses that need to manage their automated accounts receivable
        efficiently while minimizing manual intervention. Its features are particularly well-suited for businesses
        in Miami-Dade, Broward, and West Palm Beach counties that experience challenges such as frequent small
        transactions and seasonal revenue fluctuations.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform is ideal for businesses that require a high level of customization and integration with
        existing financial systems. If your business already uses tools like Xero or Stripe, Chaserhq offers
        seamless integration, making it easy to incorporate into your current workflow. This integration capability
        helps maintain data accuracy and ensures that financial information is always up-to-date, which is critical
        for making strategic business decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Chaserhq may not be the best fit for businesses that operate on a very tight budget or those that
        do not require the advanced forecasting and integration features it offers. The platform&#39;s pricing
        model, which includes a monthly fee, might be a consideration for businesses with limited financial
        resources. It&#39;s important to weigh the cost against the benefits of improved cash flow management and
        reduced administrative workload.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses unsure about whether Chaserhq is the right fit, Geek @ Your Spot offers consultation services
        to help evaluate its suitability. They can assist in assessing your current accounts receivable processes
        and determine how Chaserhq can address specific pain points. With their expertise, businesses can make an
        informed decision about whether to implement Chaserhq or consider alternative solutions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, Chaserhq is a powerful tool for businesses looking to enhance their automated accounts
        receivable processes through automation and integration. For those in South Florida, partnering with Geek @
        Your Spot can ensure a smooth implementation, allowing businesses to focus on growth and customer
        satisfaction.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-accounts-receivable-chaserhq-right-fit-consultation" href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-chaserhq-the-right-choice-for-your-business">
                Is Chaserhq the Right Choice for Your Business?
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-chaserhq-the-right-choice-for-your-business">
                Is Chaserhq the Right Choice for Your Business?
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
