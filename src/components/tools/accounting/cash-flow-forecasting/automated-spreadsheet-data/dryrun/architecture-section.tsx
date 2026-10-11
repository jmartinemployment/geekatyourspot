import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Dryrun&#39;s architecture is designed to offer seamless integration with existing financial systems,
        providing a robust platform for cash flow management and forecasting. Its architecture is built around
        flexibility, scalability, and precision, making it suitable for small to mid-sized businesses.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the heart of Dryrun&#39;s architecture is its universal data integration capability. This feature allows
        Dryrun to connect effortlessly with
        major&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;and
        accounting platforms like NetSuite, Sage Intacct, Microsoft Dynamics 365 Business Central, and QuickBooks
        Online. These integrations ensure that Dryrun can continuously sync live financial data, maintaining an
        accurate and up-to-date view of a business&#39;s financial health.</p>
      <p className="text-md text-white shadow-text pt-3">
        Dryrun also supports custom spreadsheet imports and manual overrides, which are crucial for incorporating
        data from non-standard sources or when specific adjustments are necessary. This flexibility allows finance
        teams to integrate peripheral data from CRMs, POS systems, or project management tools, ensuring that all
        relevant financial information is captured and reflected in the forecasts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another key aspect of Dryrun&#39;s architecture is its multi-entity and multi-currency consolidation
        feature. This allows businesses operating across multiple regions and currencies to view a unified cash
        position. Dryrun&#39;s live exchange rate feeds automatically convert international transaction data into a
        base currency, providing a real-time, consolidated view of group-wide liquidity. This feature is
        indispensable for businesses looking to manage global cash flows effectively.</p>
      <p className="text-md text-white shadow-text pt-3">
        Dryrun&#39;s architecture is further enhanced by its user-defined forecasting rules and transparent logic
        automation. Finance teams can establish custom &quot;if-then&quot; rules to model complex operational
        relationships and financial ripple effects. This level of customization ensures that forecasts remain
        dynamic and reflective of real-world conditions, providing businesses with the clarity and control needed to
        navigate financial complexities.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="dryruns-architecture-and-integrations-building-a-robust-financial-platform">
                Dryrun&#39;s Architecture and Integrations: Building a Robust Financial Platform
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="dryruns-architecture-and-integrations-building-a-robust-financial-platform">
                Dryrun&#39;s Architecture and Integrations: Building a Robust Financial Platform
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
