import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Ramp is designed to automate the accounts payable process, transforming it from a manual, error-prone
        task into a streamlined, automated workflow. At its core, Ramp uses&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>-driven solutions
        to handle tasks such as invoice coding, fraud detection, and payment approvals. These capabilities
        allow businesses to manage their payment processes with minimal human intervention, reducing the time
        spent on administrative tasks and the risk of errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s architecture centers around its autonomous AP software, which facilitates
        touchless workflows. By leveraging AI agents, Ramp automates invoice processing from receipt to
        payment. This includes managing invoice coding and approvals, as well as detecting potential fraud.
        The AI&#39;s ability to learn from historical data means that it can improve over time, becoming more
        efficient and accurate in its operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ramp&#39;s Optical Character Recognition (OCR) technology is a key component of its architecture.
        With up to 99% accuracy, the OCR system extracts data from invoices faster than traditional methods,
        significantly speeding up the processing time. This high level of accuracy helps ensure that errors
        are minimized, and financial data remains reliable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another crucial element of Ramp&#39;s system is its real-time&nbsp;
        <GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;integration.
        This feature allows for seamless data synchronization between Ramp and major accounting systems like
        QuickBooks, Xero, and Sage Intacct. The integration ensures that all financial records are up-to-date
        and audit-ready, providing businesses with a clear and accurate picture of their financial status at
        all times.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ramp also includes a vendor portal, which gives vendors the ability to update payment information,
        check payment status, and communicate directly with the accounts payable team. This feature not only
        improves communication but also enhances security by reducing the risk of unauthorized access to
        sensitive financial information.</p>
      <p className="text-md text-white shadow-text pt-3">
        Batch payment processing is another hallmark of Ramp&#39;s architecture. By allowing multiple invoices
        to be combined into a single payment, Ramp reduces transaction fees and simplifies reconciliation. This
        feature is particularly beneficial for businesses that handle a large volume of transactions, as it
        streamlines the payment process and provides clear visibility into cash flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Overall, Ramp&#39;s architecture is built to support Automated Payment Execution by integrating AI,
        real-time data synchronization, and user-friendly interfaces. This combination ensures that businesses
        can manage their accounts payable processes efficiently, freeing up time and resources to focus on
        strategic initiatives.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="ramps-underlying-architecture-and-mechanics">
                Ramp&#39;s Underlying Architecture and Mechanics
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="ramps-underlying-architecture-and-mechanics">
                Ramp&#39;s Underlying Architecture and Mechanics
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
