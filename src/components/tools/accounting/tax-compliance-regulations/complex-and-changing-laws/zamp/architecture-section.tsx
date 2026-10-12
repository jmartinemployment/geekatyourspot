import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Zamp&#39;s architecture is designed to seamlessly integrate with a wide range of platforms, providing a
        comprehensive solution
        for&nbsp;<GlossaryLink slug="tax-compliance" className="text-[#0B162A] hover:underline">tax
        compliance</GlossaryLink>&nbsp;across different sales channels. Its robust integration capabilities
        ensure that businesses can easily connect their existing systems to Zamp, enabling smooth data flow and
        accurate tax reporting.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key features of Zamp is its ability to integrate with major e-commerce
        and&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;platforms
        like Shopify, NetSuite, and QuickBooks. These integrations allow Zamp to automatically ingest
        transaction data, ensuring that all sales are accounted for and that tax obligations are accurately
        calculated. This connectivity streamlines the compliance process, reducing the manual work required by
        internal teams.</p>
      <p className="text-md text-white shadow-text pt-3">
        Zamp also
        offers&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;access,
        allowing businesses to connect their custom platforms directly to the compliance system. This
        flexibility means that even businesses with unique tech stacks can benefit from Zamp&#39;s automated tax
        solutions. By standardizing data into a single compliance workflow, Zamp minimizes errors and ensures
        that all transactions are processed according to the latest tax laws.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s architecture supports real-time data synchronization, which is crucial for
        maintaining up-to-date tax records. This feature ensures that any changes in sales data are immediately
        reflected in tax calculations, preventing discrepancies and ensuring compliance accuracy. This level of
        integration is vital for businesses operating in multiple jurisdictions, where tax rates and regulations
        can vary significantly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Zamp&#39;s architecture is not just about integration; it also includes comprehensive support for notice
        management and audit readiness. The platform&#39;s intelligent automation monitors state portals for tax
        notices, ensuring that businesses are alerted to any issues as soon as they arise. This proactive
        approach allows Zamp to handle notices efficiently, resolving potential compliance issues before they
        impact the business.</p>
      <p className="text-md text-white shadow-text pt-3">
        Overall, Zamp&#39;s architecture is built to provide a seamless, end-to-end tax compliance solution. By
        integrating with existing systems and offering robust support for complex tax scenarios, Zamp ensures
        that businesses can focus on growth without being bogged down by compliance challenges.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="zamp-s-architecture-and-integrations-what-it-connects-to" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Zamp&#39;s Architecture and Integrations: What It Connects To
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="zamp-s-architecture-and-integrations-what-it-connects-to" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Zamp&#39;s Architecture and Integrations: What It Connects To
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
