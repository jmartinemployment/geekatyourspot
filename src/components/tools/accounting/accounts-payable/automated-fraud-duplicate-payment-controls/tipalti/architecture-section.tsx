import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Tipalti is designed to streamline&nbsp;
        <GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts payable</GlossaryLink>
        &nbsp;(AP) processes by integrating several key functions into a single platform. This integration
        supports small businesses in Miami-Dade, Broward, and West Palm Beach counties in implementing effective
        Automated Fraud &amp; Duplicate Payment Controls. At its core, Tipalti offers end-to-end automation that
        covers everything from supplier onboarding to payment reconciliation, significantly reducing manual
        intervention and the associated risks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s architecture is built around&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>-driven automation.
        This includes the Tipalti AI Assistant, which automates tasks like invoice capture, coding, approval,
        and payment. By leveraging AI, Tipalti provides real-time insights that help finance teams make informed
        decisions, thereby enhancing efficiency and reducing errors. This automation is crucial for small
        businesses looking to save time and reduce the risk of fraud and duplicate payments.</p>
      <p className="text-md text-white shadow-text pt-3">
        A standout feature of Tipalti is its Duplicate Bill Detection Agent. This tool flags duplicate invoices
        and anomalies early in the process, preventing fraud and overpayments. This proactive approach to fraud
        detection is essential for maintaining financial integrity and trust with suppliers. The system&#39;s
        ability to connect invoice processing and payments in one unified system further reduces fraud risks by
        ensuring that only verified invoices are processed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tipalti&#39;s architecture also includes a self-service supplier portal, which shifts the
        administrative burden from finance teams to the suppliers themselves. Suppliers can manage their own
        tax forms, banking data, and payment preferences, reducing onboarding errors and manual inquiries. This
        not only streamlines the AP process but also improves supplier satisfaction by giving them greater
        control over their payment information.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses dealing with international transactions, Tipalti offers a Unified Global Infrastructure.
        This feature supports global payments within a single platform, simplifying cross-border transactions
        with built-in currency management and localized compliance. This is particularly beneficial for small
        businesses that work with international vendors, as it ensures that payments are compliant with local
        regulations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, Tipalti&#39;s platform is designed to scale with a business. As invoice volumes increase,
        the system supports more complex approval hierarchies and larger transaction volumes without
        compromising efficiency. This scalability is critical for businesses anticipating growth and looking to
        maintain robust Automated Fraud &amp; Duplicate Payment Controls as they expand.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Tipalti&#39;s architecture is a comprehensive solution for automating AP processes and
        enhancing fraud controls. By integrating AI-driven tools, a self-service supplier portal, and a global
        payment infrastructure, Tipalti provides a robust platform that helps small businesses in South Florida
        manage their accounts payable efficiently and securely.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="tipaltis-architecture-and-mechanics">
                Tipalti&#39;s Architecture and Mechanics
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="tipaltis-architecture-and-mechanics">
                Tipalti&#39;s Architecture and Mechanics
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
