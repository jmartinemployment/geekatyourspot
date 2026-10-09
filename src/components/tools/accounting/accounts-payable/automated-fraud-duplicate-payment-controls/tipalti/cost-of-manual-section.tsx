import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function CostOfManualSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Imagine a small business in Miami-Dade County, where a finance team spends countless hours manually
        entering vendor information received through email. This approach is not just time-consuming; it
        exposes the business to significant risks. Duplicate payments and fraud are more likely when each
        branch or entity processes the same supplier invoice independently. Without a consolidated view, a
        vendor’s payment details could change without proper investigation, leading to unauthorized payments.
        This manual process is fraught with inefficiencies, draining resources and increasing the chance of
        errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        In such a scenario, an unusually large invoice might slip through the cracks simply because the
        supplier is familiar. Staff might approve exceptions without the owner having a clear view of emerging
        risks. This lack of visibility is a breeding ground for fraud and duplicate payments, as there is no
        unified system to flag anomalies early. The cost of these manual processes is not just financial; it
        can damage supplier relationships and erode trust.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tipalti addresses these challenges head-on with its Automated Fraud &amp; Duplicate Payment Controls.
        By securing the entire supplier-to-payment chain, Tipalti ensures that growth does not translate to
        more duplicate bills or risky vendor changes. The platform’s capabilities extend beyond just invoice
        entry, offering a comprehensive approach to managing and mitigating risks throughout the payment
        lifecycle.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real issue lies in the fragmented nature of manual processes. When different departments handle
        the same invoices without a centralized system, errors multiply. Tipalti’s solution integrates all
        aspects of <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>, from supplier
        onboarding to payment execution. This integration prevents the recurrence of duplicate payments and
        fraudulent activities, ensuring that all transactions are legitimate and verified.</p>
      <p className="text-md text-white shadow-text pt-3">
        Without Tipalti, businesses face a constant battle against inefficiencies and risks. Manual entry of
        vendor information not only wastes time but also increases the likelihood of errors. Tipalti automates
        these processes, providing real-time visibility and control over financial operations. This automation
        reduces the administrative burden, allowing staff to focus on strategic initiatives rather than mundane
        tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        In essence, the cost of manual processes in Automated Fraud &amp; Duplicate Payment Controls is high,
        both in terms of financial loss and operational inefficiency. Tipalti breaks this cycle by offering a
        robust solution that secures the entire payment process, from start to finish. Businesses can finally
        move away from reactive measures and embrace a proactive approach that safeguards their financial
        interests.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-payment-processes-in-automated-fraud-duplicate-payment-controls">
                The Cost of Manual Payment Processes in Automated Fraud &amp; Duplicate Payment Controls
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-payment-processes-in-automated-fraud-duplicate-payment-controls">
                The Cost of Manual Payment Processes in Automated Fraud &amp; Duplicate Payment Controls
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
