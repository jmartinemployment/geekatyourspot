import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced is architected as an AI-native platform, designed to handle the entire invoice-to-cash cycle
        seamlessly. This architecture supports a single, unified system that integrates with
        existing&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>,&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>,
        and accounting systems, eliminating the need for multiple disjointed modules. This integration ensures that
        data flows smoothly across platforms, reducing the need for manual data entry and minimizing errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform offers native integrations with popular systems such as QuickBooks Online, QuickBooks Desktop,
        and NetSuite. These integrations facilitate real-time data synchronization, ensuring that all financial data
        is up-to-date and accurate. This is crucial for maintaining reliable records and making informed business
        decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced also supports a wide range of payment methods, including ACH, credit cards, virtual cards, and more
        than 1,200 additional methods. This flexibility allows businesses to cater to client preferences and
        streamline the payment process. The platform&#39;s embedded global payment network further enhances its
        capabilities, enabling faster, more secure transactions across borders.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another key component of Invoiced&#39;s architecture is its advanced analytics and reporting features. The
        platform includes dashboards and analytics tools that provide real-time insights into cash flow projections,
        collections performance, and other critical financial metrics. These tools enable finance teams to forecast
        cash flow accurately and make proactive financial planning decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced&#39;s architecture is built to support scalability and ease of use. Workflow changes, collection
        rules, and configuration updates can be made directly by the automated accounts receivable team without the
        need for IT intervention. This empowers businesses to adapt quickly to changing needs and maintain efficient
        operations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="invoiceds-architecture-and-integrations">
                Invoiced&#39;s Architecture and Integrations
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="invoiceds-architecture-and-integrations">
                Invoiced&#39;s Architecture and Integrations
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
