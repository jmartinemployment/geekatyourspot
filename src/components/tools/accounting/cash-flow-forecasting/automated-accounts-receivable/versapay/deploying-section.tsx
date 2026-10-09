import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DeployingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing Versapay in your business environment involves several key steps that Geek @ Your Spot can
        expertly guide you through. The first step is to ensure seamless integration with your existing&nbsp;
        <GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;system.
        Versapay offers pre-built connectors that simplify this process, allowing for a quicker go-live. These
        connectors minimize the technical hurdles typically associated with integrating new software, ensuring
        that your team can start benefiting from Automated Accounts Receivable without extensive delays.</p>
      <p className="text-md text-white shadow-text pt-3">
        A critical aspect of deploying Versapay is the configuration of data structures and mapping. This step
        involves aligning your current data formats with Versapay&#39;s system to ensure accurate and efficient
        processing. Geek @ Your Spot assists in this process by mapping data fields and setting up automation
        logic tailored to your business needs. This customization ensures that the system operates smoothly and
        aligns with your existing workflows, reducing the potential for errors and maximizing efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the system is configured, attention turns to setting up approval chains and routing workflows.
        Versapay&#39;s platform allows for the creation of automated workflows that handle invoice approvals and
        payment processing. These workflows are designed to match your business&#39;s specific requirements,
        ensuring that invoices are routed to the correct approvers and processed in a timely manner. This
        automation reduces the need for manual intervention, freeing up your team&#39;s time for more strategic
        tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Versapay also provides an extension mechanism through its&nbsp;
        <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;connectors,
        which allows for further customization and integration with other business systems. This flexibility
        means that if your business has unique requirements or additional systems to integrate, Versapay can
        accommodate these needs. Geek @ Your Spot&#39;s expertise in this area ensures that any additional
        integrations are handled smoothly, maintaining the integrity and efficiency of your financial
        operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        In conclusion, deploying Versapay with the help of Geek @ Your Spot involves a structured approach that
        includes integration, data mapping, workflow configuration, and potential extensions via APIs. This
        comprehensive deployment strategy ensures that your business can fully leverage the benefits of Automated
        Accounts Receivable, leading to improved cash flow management and operational efficiency.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-versapay-in-your-business-environment">
                Deploying Versapay in Your Business Environment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-versapay-in-your-business-environment">
                Deploying Versapay in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
