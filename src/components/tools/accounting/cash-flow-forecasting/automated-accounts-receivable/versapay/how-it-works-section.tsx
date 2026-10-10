import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Versapay automates the automated accounts receivable process by integrating with your existing enterprise
        resource planning (<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>)
        system. This integration allows it to automatically match payments to invoices, eliminating manual data
        entry and reducing reconciliation delays. By capturing remittance and payment data from various sources,
        Versapay uses
        advanced&nbsp;<GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>&nbsp;and
        optical character recognition (OCR) to ensure that payments are correctly applied to the corresponding
        invoices.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process begins when a payment is received. Versapay&#39;s system captures the payment details and
        applies AI-enabled matching capabilities to identify the corresponding invoice. This automation
        significantly reduces the time spent on manual matching and minimizes errors that can occur during the
        reconciliation process. For payments that come in with missing details or discrepancies, Versapay employs
        built-in exception workflows to handle these issues efficiently.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once payments are matched, Versapay updates the ERP system in real-time, providing immediate visibility into
        cash flow. This real-time update is crucial for maintaining accurate financial records and ensuring that all
        transactions are accounted for promptly. The platform&#39;s collaborative tools also allow finance teams to
        communicate directly with customers to resolve any issues that might arise, further streamlining the
        accounts receivable process.</p>
      <p className="text-md text-white shadow-text pt-3">
        Versapay&#39;s platform also includes features for handling complex payment scenarios, such as short-pays or
        disputes. These are routed to the appropriate team members for validation and resolution, ensuring that all
        payments are processed accurately. The platform&#39;s ability to handle a variety of payment types,
        including ACH, wire transfers, and credit card payments, makes it a versatile solution for businesses
        dealing with diverse payment methods.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Versapay&#39;s mechanics revolve around automating the tedious aspects of accounts receivable,
        providing a seamless and efficient process that reduces manual workload and enhances financial control. By
        leveraging AI and OCR, the platform not only speeds up the reconciliation process but also improves accuracy
        and transparency, allowing businesses to focus on more strategic tasks.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-versapay-works-step-by-step-mechanics">
                How Versapay Works: Step-by-Step Mechanics
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-versapay-works-step-by-step-mechanics">
                How Versapay Works: Step-by-Step Mechanics
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
