import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Tipalti is designed to streamline Automated Payment Execution by automating complex financial
        processes. At its core, Tipalti integrates seamlessly with existing&nbsp;
        <GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;and
        accounting systems, ensuring that payment data flows smoothly without manual intervention. This
        integration is crucial for small businesses aiming to reduce errors and save time. By connecting
        directly to platforms like QuickBooks Online, Tipalti automates the entire accounts payable process,
        from invoice capture to payment reconciliation.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform supports multi-currency transactions, enabling businesses to handle payments in over 120
        currencies across 200 countries. This global reach is facilitated by Tipalti&#39;s built-in foreign
        exchange (FX) capabilities, which offer competitive conversion rates and reduce the complexity of
        managing international payments. By automating currency conversions and compliance checks, Tipalti
        helps businesses avoid costly errors and regulatory penalties.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tipalti&#39;s architecture includes a robust set of features designed to enhance financial
        operations. The system automates invoice data capture using optical character recognition (OCR)
        and&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">artificial intelligence</GlossaryLink>,
        minimizing the need for manual data entry. This not only speeds up the process but also increases data
        accuracy, reducing the risk of duplicate payments and compliance issues.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another key component of Tipalti&#39;s architecture is its self-service supplier portal, which
        facilitates supplier onboarding and management. Suppliers can input their information, choose their
        preferred payment methods, and track payment statuses independently. This reduces the administrative
        burden on finance teams and enhances supplier relationships by providing transparency and control over
        payment processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses with multiple subsidiaries, Tipalti offers multi-entity management capabilities. This
        allows companies to standardize processes across different entities while accommodating local
        compliance and currency requirements. By providing a unified platform for managing diverse financial
        operations, Tipalti supports scalability and growth without adding operational complexity.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and compliance are integral to Tipalti&#39;s design. The platform includes features like
        fraud detection, compliance screening, and audit trails to ensure that all transactions are secure and
        meet regulatory standards. By automating these processes, Tipalti reduces the risk of fraud and
        enhances the overall integrity of financial operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Tipalti&#39;s architecture is built to handle the complexities of Automated Payment
        Execution. By integrating with existing systems, supporting global transactions, and automating
        critical processes, Tipalti offers a comprehensive solution for small businesses looking to optimize
        their accounts payable operations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="tipaltis-core-mechanics-and-architecture">
                Tipalti&#39;s Core Mechanics and Architecture
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="tipaltis-core-mechanics-and-architecture">
                Tipalti&#39;s Core Mechanics and Architecture
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
