import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ForecastingReceivablesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Forecasting fixes the delayed visibility crisis and the broken spreadsheet dependency at the same
        time. Instead of a workbook someone updates once a month, these tools read your ledger directly and
        update the forecast as transactions arrive. Our <Link id={`use-cases-accounting-forecasting-p-cff${idSuffix}`} href="/use-cases/accounting/cash-flow-forecasting/ai-cash-flow-forecasting" className="text-[#0B162A] hover:underline">Cash
        Flow Forecasting</Link> guide covers <GlossaryLink slug="cash-flow-forecasting" className="text-[#0B162A] hover:underline">cash
        flow forecasting</GlossaryLink> in depth.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Planning Engines That Replace the Workbook
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`use-cases-accounting-forecasting-jirav${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav" className="text-[#0B162A] hover:underline">Jirav</Link> links
        accounting, payroll, and sales data for <strong>driver based forecasting</strong>, so the plan changes
        when the business changes. <Link id={`use-cases-accounting-forecasting-fathom${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq" className="text-[#0B162A] hover:underline">Fathom</Link> combines
        data across locations or divisions, tracks the <GlossaryLink slug="kpi" className="text-[#0B162A] hover:underline">KPIs</GlossaryLink> that
        matter, and turns reports into a story leaders can act on. <Link id={`use-cases-accounting-forecasting-cff-irp${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog" className="text-[#0B162A] hover:underline">Cashflowfrog</Link> builds
        cash charts from your synced ledger, flags <strong>low cash points</strong> ahead of time, and grades
        customers by how quickly they pay. <Link id={`use-cases-accounting-forecasting-helm-irp${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm" className="text-[#0B162A] hover:underline">Take
        the Helm</Link> lays out a timeline where you can see how moving one payment date changes your <strong>cash
        runway</strong>. <strong>Pulse</strong> is a simpler option for owners who want a daily cash
        projection without a full planning suite. The <Link id={`use-cases-accounting-forecasting-p-irp${idSuffix}`} href="/use-cases/accounting/cash-flow-forecasting/ai-financial-planning-software" className="text-[#0B162A] hover:underline">Intelligent
        Resource Planning</Link> guide shows how these tools work together.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Scenario Planning Without the Spreadsheet
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        For businesses whose forecast still lives in a spreadsheet, a second group of tools takes over the
        model itself. <Link id={`use-cases-accounting-forecasting-floatapp${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp" className="text-[#0B162A] hover:underline">Floatapp</Link> and <Link id={`use-cases-accounting-forecasting-dryrun${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun" className="text-[#0B162A] hover:underline">Dryrun</Link> build <strong>multiple
        scenarios</strong> side by side, so you can compare a slow summer, a hurricane closure, and a strong
        season before any of them happens. <Link id={`use-cases-accounting-forecasting-clockwork${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork" className="text-[#0B162A] hover:underline">Clockwork</Link> generates
        forecasts from your ledger data, and <Link id={`use-cases-accounting-forecasting-cff-sheet${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog" className="text-[#0B162A] hover:underline">Cashflowfrog</Link> and <Link id={`use-cases-accounting-forecasting-helm-sheet${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm" className="text-[#0B162A] hover:underline">Take
        the Helm</Link> replace manual updates with live connections to your books. The <Link id={`use-cases-accounting-forecasting-p-sheet${idSuffix}`} href="/use-cases/accounting/cash-flow-forecasting/ai-spreadsheet-data" className="text-[#0B162A] hover:underline">Intelligent
        Spreadsheet Data</Link> guide explains how to retire the fragile workbook safely.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Receivables That Collect Themselves
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        A forecast is only as good as the cash that actually arrives. <Link id={`use-cases-accounting-forecasting-chaserhq${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq" className="text-[#0B162A] hover:underline">Chaserhq</Link> sends
        automated, polite payment reminders on a schedule you control. <Link id={`use-cases-accounting-forecasting-invoiced${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced" className="text-[#0B162A] hover:underline">Invoiced</Link> and <Link id={`use-cases-accounting-forecasting-upflow${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow" className="text-[#0B162A] hover:underline">Upflow</Link> give
        customers a portal to view and pay their invoices, and they show your team which accounts need
        attention. <Link id={`use-cases-accounting-forecasting-versapay${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay" className="text-[#0B162A] hover:underline">Versapay</Link> matches
        incoming payments to open invoices, which removes one of the slowest manual tasks in accounting. <Link id={`use-cases-accounting-forecasting-bill-ar${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill" className="text-[#0B162A] hover:underline">Bill</Link> sends
        invoices and collects payments in the same system many businesses already use for payables. Our <Link id={`use-cases-accounting-forecasting-p-ar${idSuffix}`} href="/use-cases/accounting/cash-flow-forecasting/ai-accounts-receivable-software" className="text-[#0B162A] hover:underline">Intelligent
        Accounts Receivable</Link> guide covers the full process.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="cash-flow-forecasting-and-receivables-that-stay-current" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Cash Flow Forecasting and Receivables That Stay Current
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="cash-flow-forecasting-and-receivables-that-stay-current-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Cash Flow Forecasting and Receivables That Stay Current
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
