import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Maria&#39;s situation is not unique. Many small business owners in West Palm Beach, Broward, and Miami-Dade
        counties face the same challenges with manual spreadsheet management. The over-forecasting optimism bias
        often leads them to believe their business is more liquid than it actually is, resulting in financial
        missteps. The illusion of profitability on a Profit &amp; Loss statement can quickly unravel when the actual
        cash flow is examined.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first pitfall is the misallocation of cash assets. Business owners may unknowingly spend funds that are
        already spoken for, such as those allocated to un-billed vendor invoices. This oversight can lead to severe
        shortfalls when tax or payroll deadlines arrive, leaving businesses scrambling to cover essential expenses.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invisible recurring costs, like subscription services, can also quietly deplete operational reserves over
        time. These small, often overlooked expenses accumulate, creating a significant drain on cash flow that is
        not immediately apparent in static spreadsheets. Without automated tracking, these expenses can become a
        silent financial burden.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual financial management is labor-intensive. Each time an invoice is partially paid or modified,
        financial budgets must be manually adjusted, consuming valuable time and resources. This process is not only
        tedious but prone to errors, further complicating financial planning and decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, navigating native&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;forecasting modules can be
        daunting, leading business owners to make blind commitments to expenditures. The complexity of these systems
        often restricts visibility of critical cash positions to a select few, resulting in siloed decision-making
        that can harm overall financial health.</p>
      <p className="text-md text-white shadow-text pt-3">
        Floatapp addresses these issues by providing a clear, cash-only decision layer. It replaces assumptions with
        real-time bank data, offering a transparent view of cash flow that protects businesses from the pitfalls of
        over-forecasting. By integrating directly with accounting platforms like Xero and QuickBooks Online,
        Floatapp ensures that forecasts are based on actual bank realities, not optimistic projections.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-spreadsheet-data-management">
                The Cost of Manual Spreadsheet Data Management
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-spreadsheet-data-management-lg">
                The Cost of Manual Spreadsheet Data Management
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
