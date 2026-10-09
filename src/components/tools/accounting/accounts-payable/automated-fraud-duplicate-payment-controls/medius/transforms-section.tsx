import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Medius revolutionizes the way businesses handle Automated Fraud &amp; Duplicate Payment Controls by
        removing the tedious and error-prone tasks from the&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;team&#39;s workload.
        Its&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>-powered system automates the detection of
        anomalies and duplicates, effectively reducing the time spent on manual invoice checks.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key benefits of Medius is its ability to process invoices with minimal human intervention.
        The software&#39;s touchless invoice processing feature captures and verifies invoice data
        automatically, which means the accounts payable team no longer needs to manually enter and
        cross-check information. This not only speeds up the process but also significantly reduces the risk
        of human error.</p>
      <p className="text-md text-white shadow-text pt-3">
        Medius also enhances security through its real-time monitoring capabilities. It continuously scans
        for changes in supplier information and flags any modifications that could indicate fraudulent
        activity. This proactive approach ensures that potential threats are addressed before they can cause
        harm.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s intelligent anomaly detection identifies unusual patterns in invoice data, such as
        unexpected charges or duplicate submissions. By catching these issues early, Medius prevents them
        from escalating into larger problems that require extensive investigation and resolution. This not
        only saves time but also protects the business from financial losses.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, Medius supports a seamless workflow by integrating with existing financial systems. This
        means that businesses can implement Medius without overhauling their current processes. The
        integration capability of Medius ensures that all financial data is synchronized and accessible,
        providing a comprehensive view of the company&#39;s financial health.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Medius removes the burdens of manual processing and fraud detection, allowing businesses
        to operate more efficiently and securely. By automating routine tasks and providing advanced
        monitoring tools, Medius not only reduces the risk of fraud but also frees up valuable time for the
        accounts payable team to focus on strategic initiatives.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Medius Fraud &amp; Risk Detection is here to help you catch fraud earlier and reduce your risk
        exposure.&quot;&nbsp;
        <a id="tools-accounting-fraud-controls-medius-transforms-source"
          href="https://www.medius.com/solutions/fraud-risk-detection/"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Medius
        </a></p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-medius-transforms-automated-fraud-duplicate-payment-controls">
                How Medius Transforms Automated Fraud &amp; Duplicate Payment Controls
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-medius-transforms-automated-fraud-duplicate-payment-controls">
                How Medius Transforms Automated Fraud &amp; Duplicate Payment Controls
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
