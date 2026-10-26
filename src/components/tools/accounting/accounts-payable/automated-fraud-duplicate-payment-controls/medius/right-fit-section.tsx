import Link from "next/link";
export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Medius is particularly well-suited for small to medium-sized businesses in Miami-Dade, Broward, and
        West Palm Beach counties that require robust Automated Fraud &amp; Duplicate Payment Controls.
        Its&nbsp;AI-driven capabilities make it ideal for businesses
        looking to enhance their financial security and streamline&nbsp;
        accounts payable&nbsp;processes.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform is less suited for businesses that do not have a significant volume of transactions or
        those that already have a highly customized accounts payable system in place. For these businesses,
        the cost and effort of integrating a new system like Medius may not justify the benefits.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses considering Medius, the next step involves assessing current accounts payable
        processes and identifying specific areas where fraud and duplicate payments are most likely to occur.
        This assessment will help determine how Medius can be best utilized to address these
        vulnerabilities.</p>
      <p className="text-base text-white shadow-text pt-3">
        Engaging with Geek @ Your Spot LLC can provide additional insights into how Medius can be tailored to fit
        your business needs. As an AI implementation consultancy, they offer expertise in configuring Medius
        to integrate seamlessly with your existing systems. This includes mapping data, setting up workflows,
        and training staff to ensure a smooth transition.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ultimately, deciding whether Medius is right for your business comes down to aligning its
        capabilities with your operational needs and growth plans. Businesses should consider not only the
        immediate benefits of fraud prevention and efficiency but also the long-term advantages of a system
        that evolves with their needs.</p>
      <p className="text-base text-white shadow-text pt-3">
        <a href="#consultationAppointment2xl" id={`tools-accounting-fraud-controls-medius-right-fit-consultation${idSuffix}`} className="text-[#C83803] hover:underline">
          Book your free consultation
        </a>.</p>
      <p className="text-base text-white shadow-text pt-3">
        The claim that Medius trains its models on over a decade of real accounts payable outcomes is examined in our post <Link id={`tools-accounting-accounts-payable-automated-fraud-duplicate-payment-controls-medius-xlink-blog${idSuffix}`} href="/blog/accounting/accounts-payable/how-ai-streamlines-fraud-detection-in-accounts-payable" className="text-[#C83803] hover:underline">AI Accounts Payable Fraud Detection</Link>, which places Medius at the capture stage, reading invoice data with OCR so anomaly detection has accurate fields to work from, and explains why that depth of history matters against duplicates resubmitted with small changes. The post is also direct about the limits: no model prevents every scheme, and incomplete records cause false positives and missed detections. The pilot-first assessment in our <Link id={`tools-accounting-accounts-payable-automated-fraud-duplicate-payment-controls-medius-xlink-pillar${idSuffix}`} href="/use-cases/accounting/accounts-payable/ai-fraud-duplicate-payment-controls" className="text-[#C83803] hover:underline">AI Fraud &amp; Duplicate Payment Controls</Link> guide tests those conditions on your own data before you commit.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-medius-right-for-your-business">
                Is Medius Right for Your Business?
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-medius-right-for-your-business-lg">
                Is Medius Right for Your Business?
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
