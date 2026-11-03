export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Floatapp&#39;s architecture is designed to seamlessly integrate with leading accounting platforms like Xero
        and QuickBooks Online. This integration is facilitated through a one-way, read-only connection that ensures
        security while maintaining the integrity of your accounting data. By pulling data from these platforms,
        Floatapp eliminates the need for manual data entry, reducing errors and saving time.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&#39;s data management capabilities are robust, offering automatic imports of bank transactions,
        invoices, and bills every 24 hours. This ensures that your cash flow forecasts are built on the most current
        and reconciled data available. For businesses that require more frequent updates, Floatapp also offers an
        on-demand sync feature, allowing users to refresh their data whenever necessary to reflect recent changes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Floatapp&#39;s data architecture supports detailed AR/AP visibility, allowing users to see outstanding bills
        and invoices directly from their connected accounting platform. This feature provides a clear picture of
        what is owed and when payments are due, aiding in effective cash management. By presenting this information
        within the cash flow forecast, businesses can plan payment runs and confirm available funds without leaving
        the platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        The system&#39;s scenario planning tools further enhance its data management capabilities. These tools allow
        businesses to create what-if scenarios to test different financial strategies. For example, users can
        simulate the impact of a delayed payment or a new hire on their cash flow. This helps businesses prepare for
        various financial outcomes and make informed decisions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Floatapp does not directly connect to banks but retrieves transaction data through the accounting platform
        it integrates with. This approach ensures that Floatapp can work with any bank that your accounting software
        already supports, providing flexibility and broad compatibility. The platform&#39;s architecture is built to
        handle multiple entities, allowing for consolidated cash flow views across different business units.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-architecture-of-floatapp-integrations-and-data-management">
                The Architecture of Floatapp: Integrations and Data Management
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-architecture-of-floatapp-integrations-and-data-management-lg">
                The Architecture of Floatapp: Integrations and Data Management
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
