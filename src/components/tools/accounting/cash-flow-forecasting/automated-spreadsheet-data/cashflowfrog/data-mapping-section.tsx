export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Setting up Cashflowfrog requires careful consideration of your data structure and mapping. These decisions
        are critical to ensure that the tool accurately reflects your financial operations and provides meaningful
        insights. The process begins with understanding how your existing accounting data is organized and how it
        can be mapped into Cashflowfrog&#39;s forecasting framework.</p>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog utilizes a flexible data structure that supports breakdowns by vendor, customer, class,
        location, department, and project. This flexibility allows you to maintain the granularity of your financial
        data, which is essential for accurate forecasting. When mapping your data, it&#39;s important to align these
        categories with your business&#39;s operational segments. For instance, if your business uses QuickBooks
        Classes for tracking different departments, this structure should be mirrored in Cashflowfrog to maintain
        consistency and clarity.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another key consideration is the integration of custom tracking categories. Cashflowfrog allows you to
        define custom categories that suit your specific business needs. This feature is particularly useful for
        businesses with unique operational structures that aren&#39;t fully captured by standard accounting
        categories. By setting up these custom categories during the initial mapping process, you ensure that all
        relevant financial activities are included in your forecasts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data synchronization is also a crucial aspect of the setup. Cashflowfrog automatically updates forecasts as
        new transactions are recorded in your accounting system. This real-time synchronization ensures that your
        forecasts are always based on the latest data, providing a current view of your financial health. It also
        reduces the administrative burden of manual updates, allowing your team to focus on analysis rather than
        data entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, the data structure and mapping decisions made during the setup of Cashflowfrog are foundational
        to its effectiveness. By ensuring that your accounting data is accurately represented within the tool, you
        enable precise forecasting and gain insights that drive strategic business decisions. This upfront
        investment in thoughtful mapping pays off with a forecasting system that truly supports your business
        objectives.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-data-structure-and-mapping-considerations">
                Key Data Structure and Mapping Considerations
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-data-structure-and-mapping-considerations-lg">
                Key Data Structure and Mapping Considerations
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
