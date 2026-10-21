export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="people-also-ask" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the software pull live data into the spreadsheet without breaking existing formulas?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Clockwork provides a solution by automatically generating models from your transaction data, avoiding the
              need for manual formula adjustments. It ensures that your financial data is always up-to-date without the
              risk of breaking formulas, as it does not rely on traditional spreadsheet formulas. Instead, it uses its own
              computational models to provide an accurate and seamless forecast.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can it handle multi-currency or multi-entity structures if our spreadsheet rolls them up?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, Clockwork and Dryrun both support multi-currency and multi-entity operations. Clockwork offers
              unlimited consolidation and custom chart of accounts, making it suitable for businesses with multiple
              entities. Dryrun provides automated multi-currency forecasting with real-time exchange rate feeds, offering
              a consolidated view of liquidity across international subsidiaries.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the system account for off-ledger or un-billed variables?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Dryrun allows finance teams to incorporate non-ledger variables by layering offline projections over
              automated data. This capability supports the inclusion of sales pipelines, project budgets, and other
              operational elements that are not yet recorded in the ledger, ensuring a comprehensive forecast.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do we build and compare multiple &quot;what-if&quot; scenarios without duplicating files?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Clockwork and Float provide robust scenario planning tools that allow users to create and compare multiple
              &quot;what-if&quot; scenarios. Clockwork enables instant recalculations across all forecasts when a driver
              is changed, while Float uses scenario layers that stack on top of the base forecast, allowing for easy
              comparison without altering the original data.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How often does the forecast update, and how long does it take to maintain?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Clockwork updates its forecasts automatically from QuickBooks or Xero, requiring minimal manual
              intervention. Float updates daily from QuickBooks Online and allows for manual syncs whenever needed. The
              maintenance time is significantly reduced compared to manual spreadsheets, as these systems automate much of
              the data synchronization and forecasting processes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
