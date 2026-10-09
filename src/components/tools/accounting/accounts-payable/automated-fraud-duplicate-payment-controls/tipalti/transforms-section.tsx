import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Tipalti transforms the landscape of Automated Fraud &amp; Duplicate Payment Controls by removing the
        manual burdens that plague small businesses. The platform automates the supplier-to-payment chain,
        ensuring that every step is monitored and controlled. This automation means fewer hours spent on manual
        data entry and more time available for strategic tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of Tipalti’s standout features is its <GlossaryLink slug="ai">AI</GlossaryLink>-driven detection
        system, which flags duplicate invoices and anomalies early. This proactive approach prevents fraud
        before it occurs, safeguarding the business’s finances. By automating the approval and payment
        processes, Tipalti eliminates the need for manual intervention, reducing errors and increasing
        efficiency.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;The result is slower processes, increased burnout, and growing operational risk—especially in
        accounts payable (AP).&quot;&nbsp;
        <a id="tools-accounting-fraud-controls-tipalti-transforms-source"
          href="https://tipalti.com/ap-automation/playbook/"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Tipalti
        </a></p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s self-service supplier portal is another critical component. It allows vendors to manage
        their own information, reducing the administrative load on the finance team. Suppliers can update
        their tax forms, banking data, and payment preferences without needing constant oversight from the
        business. This not only streamlines the onboarding process but also enhances supplier relationships by
        giving them greater control over their data.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tipalti also integrates seamlessly with existing <GlossaryLink slug="erp">ERP</GlossaryLink> and
        accounting systems, ensuring that financial records are accurate and up-to-date. This integration
        reduces the need for manual data reconciliation, freeing up the finance team to focus on more valuable
        tasks. The system’s real-time updates provide a clear view of financial operations, enabling better
        decision-making and strategic planning.</p>
      <p className="text-md text-white shadow-text pt-3">
        In addition to these features, Tipalti offers robust compliance and security measures. The platform
        includes built-in fraud detection and regulatory compliance checks, ensuring that all transactions
        adhere to financial regulations. This comprehensive approach reduces the risk of non-compliance and
        potential legal issues, providing peace of mind for business owners.</p>
      <p className="text-md text-white shadow-text pt-3">
        By automating the entire <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink> process,
        Tipalti removes the bottlenecks that slow down payment cycles. Staff no longer need to chase down
        approvals or manually verify invoices; the system handles these tasks automatically. This efficiency
        not only speeds up payment processing but also improves cash flow management, allowing businesses to
        operate more smoothly.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Tipalti revolutionizes Automated Fraud &amp; Duplicate Payment Controls by providing a
        comprehensive, automated solution that enhances efficiency and reduces risk. By removing manual tasks
        and providing real-time insights, Tipalti empowers businesses to focus on growth and strategic
        initiatives, rather than getting bogged down in administrative details.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-tipalti-transforms-automated-fraud-duplicate-payment-controls">
                How Tipalti Transforms Automated Fraud &amp; Duplicate Payment Controls
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-tipalti-transforms-automated-fraud-duplicate-payment-controls">
                How Tipalti Transforms Automated Fraud &amp; Duplicate Payment Controls
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
