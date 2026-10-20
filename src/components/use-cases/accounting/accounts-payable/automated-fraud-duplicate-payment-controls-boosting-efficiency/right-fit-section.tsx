import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing Automated Fraud &amp; Duplicate Payment Controls can be transformative, but it isn&#39;t
        a one-size-fits-all solution. For businesses in Miami-Dade, Broward, and West Palm Beach counties,
        understanding when this approach is appropriate is crucial. The right call hinges on several factors,
        including the volume of transactions, the complexity of your&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;processes, and your
        current risk exposure to fraud and errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses with high transaction volumes and complex vendor networks often benefit the most.
        The automation of fraud detection and duplicate payment controls can significantly reduce manual
        errors and streamline operations. If your team spends a considerable amount of time manually
        verifying invoices or if you&#39;ve experienced financial losses due to fraud, automation could be a
        game-changer. Tools like&nbsp;
        <Link id="use-cases-accounting-fraud-controls-fit-medius"
          href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius" className="text-[#C83803] hover:underline">
          Medius
        </Link>&nbsp;and&nbsp;
        <Link id="use-cases-accounting-fraud-controls-fit-tipalti"
          href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti" className="text-[#C83803] hover:underline">
          Tipalti
        </Link>&nbsp;offer robust solutions that integrate seamlessly with existing workflows, providing
        real-time anomaly detection and automated approval processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, if your business handles a low volume of invoices or if your current processes are
        straightforward and effective, the investment in such sophisticated systems might not yield
        significant returns. For these businesses, the cost and effort to implement such systems may outweigh
        the benefits. It&#39;s essential to conduct a thorough cost-benefit analysis to determine if the
        potential savings and efficiencies justify the investment.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you decide to proceed with automation, the next steps involve choosing the right technology and
        planning for integration. This is where the expertise of Geek @ Your Spot becomes invaluable. They
        offer a structured approach that begins with a free consultation to align the automation strategy
        with your business objectives. This ensures that the tools selected are not only suitable but also
        scalable to meet future needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Expectations from implementing Automated Fraud &amp; Duplicate Payment Controls should be clear from
        the outset. Businesses can anticipate a reduction in processing times, enhanced accuracy in payments,
        and improved compliance with financial regulations. Moreover, the ability to prevent fraud
        proactively can safeguard financial assets and enhance trust with stakeholders.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the decision to implement these controls should be based on a comprehensive
        understanding of your business&#39;s specific needs and the potential impact of automation. Engage
        with a partner like Geek @ Your Spot to ensure that the transition is smooth and that the systems put
        in place are tailored to deliver tangible results.</p>
      <p className="text-md text-white shadow-text pt-3">
        <Link id="use-cases-accounting-fraud-controls-fit-consultation"
          href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
          Book your free consultation
        </Link>.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="determining-the-right-fit-for-automated-fraud-duplicate-payment-controls" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Determining the Right Fit for Automated Fraud &amp; Duplicate Payment Controls
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="determining-the-right-fit-for-automated-fraud-duplicate-payment-controls" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Determining the Right Fit for Automated Fraud &amp; Duplicate Payment Controls
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
