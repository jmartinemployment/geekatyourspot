
export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Going live with Dryrun in a business environment involves a series of strategic steps designed to shorten
        the implementation timeline and ensure seamless integration with existing systems. The process begins with a
        thorough assessment of the client&#39;s current financial setup, identifying key areas where Dryrun can add
        value. This is followed by a phased rollout, leveraging pre-built connectors and templated setups to
        streamline the transition.</p>
      <p className="text-md text-white shadow-text pt-3">
        Dryrun&#39;s integration capabilities are a major advantage. It connects seamlessly with
        leading&nbsp;ERP&nbsp;and accounting platforms like NetSuite, Sage
        Intacct, Microsoft Dynamics 365 Business Central, and QuickBooks Online. This eliminates the need for
        extensive manual data entry and reduces the risk of errors. By automating data synchronization, Dryrun
        ensures that financial forecasts are always based on the most current data, allowing businesses to make
        informed decisions quickly.</p>
      <p className="text-md text-white shadow-text pt-3">
        A critical step in the implementation process is the configuration of Dryrun to align with the client&#39;s
        specific operational needs. This includes setting up custom dashboards, configuring transaction-level
        overrides, and defining entity-specific collection and payment lag timelines. These features allow
        businesses to tailor Dryrun to reflect their unique financial behaviors, providing a more accurate picture
        of cash flow and liquidity.</p>
      <p className="text-md text-white shadow-text pt-3">
        The phased rollout approach is particularly beneficial for small businesses with limited resources. By
        breaking the implementation down into manageable stages, Dryrun minimizes disruption to daily operations.
        Initial phases focus on core functionalities like real-time data synchronization and basic forecasting,
        while later stages introduce more advanced features such as dynamic scenario modeling and multi-entity
        consolidation. This gradual approach ensures that users become comfortable with the system before adding
        complexity.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC plays a crucial role in this process, providing expert guidance and support at every stage.
        Their team assists with data mapping, integration, and user training, ensuring that Dryrun is fully
        optimized for the client&#39;s environment. With their help, businesses in Miami-Dade, Broward, and West
        Palm Beach counties can leverage Dryrun&#39;s capabilities to improve financial management and strategic
        planning without the typical headaches of a new software deployment.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-dryrun-in-your-environment">
                Implementing Dryrun in Your Environment
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-dryrun-in-your-environment-lg">
                Implementing Dryrun in Your Environment
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
