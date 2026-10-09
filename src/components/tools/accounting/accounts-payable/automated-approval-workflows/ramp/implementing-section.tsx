import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Ramp in your existing business environment involves a strategic approach to ensure a smooth
        transition from manual to automated processes. Geek @ Your Spot plays a crucial role in this process,
        offering expertise in configuring Ramp to fit your specific needs. The first step is to map out your
        current&nbsp;
        <GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts payable</GlossaryLink>&nbsp;workflows,
        identifying areas where automation can provide the most value. This involves understanding your data
        structure, approval chains, and any existing&nbsp;
        <GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;integrations.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key benefits of Ramp is its pre-built connectors with major ERPs, which significantly
        shorten the go-live timeline. These connectors allow for seamless data transfer between systems,
        eliminating the need for manual data entry and ensuring that all financial information is accurate
        and up-to-date. Geek @ Your Spot assists in setting up these integrations, ensuring that Ramp is
        configured to automatically sync with your existing ERP systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        Configuring Ramp&#39;s approval workflows is another critical aspect of the implementation process.
        Geek @ Your Spot works with your team to define the rules that will govern these workflows, such as
        amount thresholds, vendor types, and departmental approvals. By tailoring these rules to your
        business&#39;s specific needs, Ramp ensures that invoices are routed efficiently and accurately,
        reducing the risk of delays and errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ramp&#39;s automation capabilities extend to its support for multi-entity and multi-currency
        transactions, which is particularly beneficial for businesses operating in multiple regions or dealing
        with international vendors. Geek @ Your Spot helps configure these features to ensure compliance with
        local financial regulations and to streamline your global accounts payable processes. This ensures
        that your business can operate smoothly across different markets without the administrative burden of
        manual processing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the deployment process, Geek @ Your Spot provides training and support to ensure that your
        team is comfortable with the new system. This includes user acceptance testing to verify that Ramp
        meets your business&#39;s needs and to identify any potential areas for improvement. By providing
        ongoing support and monitoring key performance indicators, Geek @ Your Spot ensures that Ramp
        continues to deliver value long after the initial implementation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-ramp-in-your-business-environment">
                Implementing Ramp in Your Business Environment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-ramp-in-your-business-environment">
                Implementing Ramp in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
