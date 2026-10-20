
export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When deploying Dryrun, making informed data structure and mapping decisions is crucial for maximizing the
        tool&#39;s effectiveness. Dryrun&#39;s flexibility allows businesses to customize their financial data
        organization to match their specific operational needs, ensuring accurate and actionable cash flow insights.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the first considerations is how to structure data inputs. Dryrun supports a variety of data sources,
        including direct&nbsp;ERP&nbsp;connections and custom spreadsheet
        imports. This flexibility allows businesses to integrate both structured and unstructured data, offering a
        comprehensive view of financial health. Deciding which data sources to prioritize and how to map them into
        Dryrun&#39;s system is a key step in the setup process.</p>
      <p className="text-md text-white shadow-text pt-3">
        Custom account mapping is another important decision. Dryrun allows users to organize, group, or isolate
        distinct cash accounts and line items to seamlessly match their internal financial reporting structure. This
        capability ensures that forecasts are aligned with real-world financial operations, providing clarity and
        precision in cash flow management.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, configuring transaction-level AR/AP timing adjustments is essential. By setting custom
        &quot;Days Outstanding&quot; parameters for specific clients and vendors, businesses can account for unique
        payment behaviors and mitigate the risk of cash flow disruptions. This granular control over financial data
        helps businesses maintain an accurate view of their liquidity position.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC&#39;s expertise in data mapping and integration is invaluable during this phase. They guide
        businesses through the intricacies of setting up Dryrun, ensuring that all data is accurately mapped and
        that the system is configured to deliver the most relevant insights. With their support, businesses can
        confidently transition to Dryrun, knowing that their financial data is structured for optimal performance
        and strategic decision-making.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-data-structure-and-mapping-decisions-for-dryrun">
                Key Data Structure and Mapping Decisions for Dryrun
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-data-structure-and-mapping-decisions-for-dryrun-lg">
                Key Data Structure and Mapping Decisions for Dryrun
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
