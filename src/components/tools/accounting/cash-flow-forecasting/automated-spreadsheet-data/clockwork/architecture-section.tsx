export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Clockwork&#39;s architecture is designed to seamlessly integrate with existing financial systems, ensuring
        that data flows smoothly and accurately. The platform&#39;s ability to connect with QuickBooks Online,
        QuickBooks Desktop, and Xero is central to its functionality. These integrations allow Clockwork to pull
        live data directly from your general ledger, keeping financial forecasts current and aligned with real-world
        financial activity.</p>
      <p className="text-md text-white shadow-text pt-3">
        Beyond accounting software, Clockwork integrates with major payroll providers, bringing in employee-level
        visibility for comprehensive resource planning. This integration means that payroll changes, such as hiring
        new staff or adjusting salaries, are immediately reflected in your financial models. This real-time data
        synchronization is crucial for maintaining accurate and actionable forecasts.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s architecture also supports the import of non-financial data. This means that businesses
        can incorporate external datasets, like sales pipelines or product details, into their financial models.
        This capability enhances the depth and accuracy of forecasts, providing a more holistic view of the business
        environment.</p>
      <p className="text-md text-white shadow-text pt-3">
        Clockwork&#39;s computational models, including the 5-year driver-based financial model and the 52-week cash
        flow forecast, are generated automatically. This automation is a key differentiator, as it removes the need
        for manual spreadsheet maintenance and allows businesses to focus on interpreting data rather than compiling
        it.</p>
      <p className="text-md text-white shadow-text pt-3">
        The architecture is built to scale, accommodating the needs of small businesses and accounting firms alike.
        With firm plans priced on functionality and complexity rather than client count, Clockwork offers
        flexibility and cost-effectiveness, making it a viable solution for a wide range of businesses.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="clockworks-architecture-and-integrations">
                Clockwork&#39;s Architecture and Integrations
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="clockworks-architecture-and-integrations">
                Clockwork&#39;s Architecture and Integrations
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
