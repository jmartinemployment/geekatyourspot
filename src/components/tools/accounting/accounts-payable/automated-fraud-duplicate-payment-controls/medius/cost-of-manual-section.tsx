import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function CostOfManualSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In a small Miami-Dade business office, the&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;team wrestles with a
        mountain of invoices. Each piece of paper carries the potential for error, delay, and fraud. The
        challenge is in identifying suspicious invoices and unauthorized supplier changes before they become
        costly mistakes. Medius offers a solution that breaks this cycle of inefficiency by providing a robust
        layer of fraud detection and anomaly monitoring.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual processes struggle to keep pace with the volume of invoices and the complexity of modern fraud
        tactics. A supplier might resubmit an invoice with slight formatting differences, and without a system
        to catch it, the payment might be processed again. This is not just a hypothetical scenario; it&#39;s a
        common issue that costs businesses millions annually. Medius addresses this by employing&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>-driven anomaly detection that flags these discrepancies
        before they result in financial loss.</p>
      <p className="text-md text-white shadow-text pt-3">
        Different branches of a company might process the same supplier invoice independently, leading to
        duplicate payments. Medius&#39;s centralized system ensures that all invoices are checked against a
        single source of truth, preventing such costly errors. This not only saves money but also frees up
        time for the team to focus on more strategic tasks rather than chasing down errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Changes in vendor payment details can also slip through the cracks without proper oversight. Medius
        monitors for unauthorized changes in supplier information, triggering alerts when such changes occur.
        This proactive approach means that potential fraud is caught early, reducing the risk of financial
        exposure.</p>
      <p className="text-md text-white shadow-text pt-3">
        Even large invoices from familiar suppliers can be a source of risk. It&#39;s easy for a team to
        overlook an unusually large invoice if they trust the supplier. Medius&#39;s risk detection
        capabilities analyze invoice patterns and flag anything out of the ordinary, ensuring that every
        transaction is scrutinized for potential fraud.</p>
      <p className="text-md text-white shadow-text pt-3">
        Medius&#39;s solution adds a layer of security to the approval process, ensuring that only legitimate
        invoices are paid. By integrating risk scoring, anomaly detection, and supplier-change monitoring,
        Medius provides a comprehensive defense against the common pitfalls of manual fraud controls. This not
        only prevents financial loss but also enhances the efficiency and reliability of the accounts payable
        process.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-automated-fraud-duplicate-payment-controls">
                The Cost of Manual Automated Fraud &amp; Duplicate Payment Controls
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-automated-fraud-duplicate-payment-controls">
                The Cost of Manual Automated Fraud &amp; Duplicate Payment Controls
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
