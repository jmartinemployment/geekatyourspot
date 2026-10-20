import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For many small businesses in West Palm Beach, Broward, and Miami-Dade counties, the daily grind of
        managing cash flow through manual processes is all too familiar. Picture a typical finance team,
        burdened by the relentless task of logging into various bank accounts, exporting CSVs from
        multiple&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems, and wrestling with complex Excel
        spreadsheets. The process is not only time-consuming but fraught with errors. By the time all data has
        been reconciled, it&#39;s often outdated, rendering any business decisions based on it ineffective or
        even risky. This lag can mean the difference between seizing a business opportunity and missing it
        entirely.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated&nbsp;<Link id={`tools-accounting-spreadsheet-data-takethehelm-overview-spreadsheet-data${idSuffix}`} href="/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting" className="text-[#C83803] hover:underline">Spreadsheet Data</Link>&nbsp;offers a compelling solution to this bottleneck. By integrating tools like
        Take the Helm, businesses can streamline their data entry processes, ensuring that cash flow forecasts are
        not only accurate but also up-to-date. This automation allows financial teams to focus on strategic
        decision-making rather than getting bogged down in manual data entry, which often leads to errors and
        inefficiencies. With up-to-the-minute insights, businesses can quickly adapt to changing conditions,
        making informed decisions that drive growth and stability.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm automates the collection and analysis of financial data, syncing with platforms like
        QuickBooks, Xero, and Sage to generate forecasts in seconds. This not only saves valuable time but also
        reduces the risk of human error. The automated system ensures that the data used for&nbsp;<GlossaryLink
        slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>&nbsp;is always current, allowing
        businesses to respond swiftly to market changes. By freeing up resources from manual tasks, companies
        can reallocate their efforts to areas that directly impact their bottom line, such as customer service
        or expansion efforts.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses aiming to stay competitive, embracing automated spreadsheet data is not just an
        option but a necessity. It transforms the way financial data is handled, providing a clear, real-time
        view of cash flow status. This shift not only enhances accuracy and speed but also empowers business
        owners with the insights needed to make proactive and informed decisions. The days of playing catch-up
        with financial data are over, opening up new possibilities for growth and efficiency.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview-lg">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
