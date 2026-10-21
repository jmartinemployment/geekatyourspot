export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Floatapp revolutionizes the way small businesses manage their cash flow by automating processes that were
        once manual and error-prone. By connecting directly to accounting platforms such as Xero and QuickBooks
        Online, Floatapp eliminates the need for manual data entry, reducing errors and freeing up valuable time for
        business owners.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of the most significant benefits of Floatapp is its ability to provide a real-time view of a
        business&#39;s cash position. This live visibility means that business owners like Maria can make informed
        decisions based on current data, not outdated spreadsheets. The automatic integration of bank balances,
        invoices, and bills ensures that the financial picture is always up-to-date, removing the guesswork from
        cash flow management.</p>
      <p className="text-base text-white shadow-text pt-3">
        Floatapp&#39;s scenario planning tools allow businesses to test different financial outcomes without
        altering their base forecasts. This feature is particularly useful for assessing the impact of potential
        business decisions, such as hiring new staff or investing in new equipment. By modeling these scenarios,
        businesses can anticipate cash flow needs and avoid financial pitfalls.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform also enhances collaboration across teams by providing role-based permissions. This means that
        different team members can access the information they need without compromising the integrity of the
        financial data. With Floatapp, the finance team has a single source of truth, reducing the risk of siloed
        decision-making and ensuring that everyone is working from the same data set.</p>
      <p className="text-base text-white shadow-text pt-3">
        Furthermore, Floatapp&#39;s automated updates mean that the finance team spends less time on data
        maintenance and more time on strategic planning. The platform&#39;s ability to sync with accounting software
        every 24 hours ensures that all financial data is current, allowing for accurate and timely decision-making.</p>
      <p className="text-base italic text-white shadow-text pt-3">
        &quot;It connects to Xero, QuickBooks Online, and FreeAgent, pulls live bank balances, invoices, and bills,
        and builds a rolling forward-looking cash position using the direct method.&quot;&nbsp;
        <a id={`tools-accounting-spreadsheet-data-floatapp-transforms-source${idSuffix}`}
          href="https://floatapp.com/ai-info-page"
          target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">
          Float
        </a></p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-floatapp-transforms-automated-spreadsheet-data-management">
                How Floatapp Transforms Automated Spreadsheet Data Management
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-floatapp-transforms-automated-spreadsheet-data-management-lg">
                How Floatapp Transforms Automated Spreadsheet Data Management
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
