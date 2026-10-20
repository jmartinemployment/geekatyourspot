import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Zamp automates&nbsp;tax
        compliance&nbsp;by integrating intelligent automation with a dedicated team of tax
        professionals. This combination ensures that businesses can manage complex tax requirements without the
        need for extensive in-house expertise. At its core, Zamp handles everything from nexus determination to
        audit readiness, providing a comprehensive solution for tax compliance.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process begins with Zamp&#39;s AI-powered platform. This platform continuously monitors sales
        transactions to identify any potential tax obligations. It tracks economic and physical nexus thresholds
        across multiple states, ensuring that businesses remain compliant with varying local laws. When nexus is
        established, Zamp automatically handles state registrations, filings, and remittances, taking the burden
        off the client&#39;s internal team.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once nexus is determined, Zamp&#39;s platform takes over the registration process. It submits all
        necessary documentation to state and local tax authorities, maintaining compliance with all regulatory
        requirements. This automated process eliminates the risk of human error and ensures that all filings are
        accurate and timely.</p>
      <p className="text-md text-white shadow-text pt-3">
        Zamp also provides real-time data synchronization, integrating seamlessly with
        existing&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;and
        accounting systems. This integration allows for continuous monitoring of sales transactions and ensures
        that all tax calculations are up-to-date. By syncing with platforms like Shopify, NetSuite, and
        QuickBooks, Zamp provides a unified view of compliance across all sales channels.</p>
      <p className="text-md text-white shadow-text pt-3">
        Audit and notice management is another critical aspect of Zamp&#39;s service. The platform automatically
        ingests and classifies state notices, using intelligent automation to address any discrepancies before
        they escalate into larger issues. Zamp&#39;s dedicated tax specialists are available to resolve notices
        and manage communications with tax authorities, ensuring that businesses are never left to interpret or
        handle these issues on their own.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses expanding internationally, Zamp supports global VAT/GST compliance alongside U.S. sales
        tax. This unified approach means that businesses can manage their entire tax compliance process through
        a single platform, reducing the complexity and risk associated with cross-border sales.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-mechanics-of-zamp-how-it-works" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Mechanics of Zamp: How It Works
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-mechanics-of-zamp-how-it-works-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Mechanics of Zamp: How It Works
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
