import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every month, small business owners in Miami-Dade, Broward, and West Palm Beach counties brace themselves for
        the tedious task of managing cash flow through spreadsheets. For many, it&#39;s a painstaking process filled
        with manual data entry, unpredictable cash gaps, and the constant worry of missing a critical payment
        deadline. A single typo can lead to erroneous forecasts, affecting crucial business decisions. These
        spreadsheets, with their static data, fail to account for the real-time fluctuations and unique payment
        behaviors of clients and suppliers, leaving businesses vulnerable to cash flow disruptions.</p>
      <p className="text-md text-white shadow-text pt-3">
        The stakes are high. Inaccurate cash flow forecasts can lead to missed opportunities or costly mistakes.
        Businesses often find themselves scrambling to cover a sudden shortfall or struggling to understand why
        their bank balance doesn&#39;t match up with their projections. The reliance on outdated general ledger data
        and macro-level assumptions creates a persistent gap between projected cash flow and actual liquidity,
        making it difficult for finance teams to make informed decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated&nbsp;<Link id={`tools-accounting-spreadsheet-data-dryrun-overview-spreadsheet-data${idSuffix}`} href="/use-cases/accounting/cash-flow-forecasting/ai-spreadsheet-data" className="text-[#C83803] hover:underline">Spreadsheet Data</Link>&nbsp;offers a solution. By integrating real-time data and transaction-level
        adjustments, businesses can gain a precise view of their cash position. Tools like Dryrun allow for dynamic
        scenario modeling and real-time&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;synchronization,
        eliminating the need for manual data entry and reducing the risk of errors. Finance leaders can now layer
        hypothetical shifts over live data, providing them with a clear picture of daily liquidity and future cash
        flow, allowing them to make confident, informed decisions.</p>
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
