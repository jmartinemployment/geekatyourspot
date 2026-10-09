import Link from "next/link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq is designed to suit small businesses in Miami-Dade, Broward, and West Palm Beach counties that
        are looking to streamline their Automated Accounts Receivable processes. But is it the right fit for every
        business? The answer depends on your specific needs and operational challenges.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses experiencing frequent small transactions, high staff turnover, or seasonal revenue
        fluctuations, Chaserhq can be a game-changer. Its ability to automate payment reminders and manage
        receivables in real-time helps maintain cash flow stability, which is critical for businesses with
        unpredictable income streams. The software&#39;s integration with platforms like Stripe and Xero further
        enhances its appeal by providing a cohesive financial management system.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Chaserhq might not be the best choice for businesses that require highly customized solutions
        or those that operate in industries with unique compliance requirements. In such cases, a more tailored
        approach might be necessary, potentially involving bespoke software or additional consultancy services
        to meet specific regulatory standards.</p>
      <p className="text-md text-white shadow-text pt-3">
        If your business is ready to transition from manual to automated accounts receivable processes, Chaserhq
        offers a solid foundation. The next step is to evaluate your current systems and identify integration
        opportunities. Geek @ Your Spot can assist with this assessment, ensuring that Chaserhq is implemented in
        a way that maximizes its benefits while minimizing disruption to your operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the decision to adopt Chaserhq should be based on a thorough understanding of your business
        needs and the potential for improved efficiency and cash flow management. With the right support and
        implementation strategy, Chaserhq can transform your accounts receivable processes, freeing up valuable
        time and resources to focus on growth and innovation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-accounts-receivable-chaserhq-right-fit-consultation"
          href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
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
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-chaserhq-right-for-your-business">
                Is Chaserhq Right for Your Business?
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-chaserhq-right-for-your-business">
                Is Chaserhq Right for Your Business?
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
