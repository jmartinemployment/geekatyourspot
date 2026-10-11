import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Dryrun revolutionizes how small businesses handle&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow
        forecasting</GlossaryLink>&nbsp;by removing the burdens associated with traditional spreadsheets. One key
        capability is its ability to synchronize
        real-time&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;data with dynamic scenario modeling. This
        means finance teams can see the immediate impact of operational changes without the need for manual
        recalculations, saving hours each week.</p>
      <p className="text-md text-white shadow-text pt-3">
        By offering transaction-level control, Dryrun eliminates the uncertainty of cash flow timing. Finance teams
        can adjust expected payment dates with a single click, aligning forecasts with actual cash movements. This
        precision helps avoid the common pitfalls of over-committing resources based on inaccurate data.</p>
      <p className="text-md text-white shadow-text pt-3">
        Dryrun also provides multi-entity and multi-currency consolidation, which simplifies complex financial
        structures into a single, coherent view. This feature is particularly beneficial for businesses with
        international operations, as it removes the manual spreadsheet grind associated with currency conversions
        and intercompany transactions.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Accounting software tracks legal due dates, but Dryrun empowers you to change expected payment dates
        with a single click to match actual operational cash movement.&quot;&nbsp;
        <a id="tools-accounting-spreadsheet-data-dryrun-transforms-source"
          href="https://www.dryrun.com/features/cash-management"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Dryrun
        </a></p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, Dryrun&#39;s integration capabilities extend to leading mid-market ERPs and accounting systems
        like NetSuite, Sage Intacct, Microsoft Dynamics 365 Business Central, and QuickBooks Online. This seamless
        integration ensures that all financial data is up-to-date and accurate, removing the need for manual updates
        and reducing the risk of errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, Dryrun transforms the financial management process by providing clear, real-time insights into a
        company&#39;s cash position. This allows business leaders to make informed decisions quickly, optimizing
        cash flow management and strategic planning without the limitations of traditional spreadsheet-based
        methods.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="transforming-automated-spreadsheet-data-with-dryrun">
                Transforming Automated Spreadsheet Data with Dryrun
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="transforming-automated-spreadsheet-data-with-dryrun">
                Transforming Automated Spreadsheet Data with Dryrun
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
