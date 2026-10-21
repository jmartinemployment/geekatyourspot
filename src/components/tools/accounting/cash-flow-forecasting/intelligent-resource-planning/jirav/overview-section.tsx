import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Every owner of a growing South Florida business has seen what happens when numbers live in too many
        places at once. Payroll sits in one desktop file, sales in a cloud folder, bills scattered across email
        threads. At month-end, your team rushes to patch it all together, but the numbers never quite line up.
        Hours are lost double-checking mismatched entries. One late update in a spreadsheet throws off your
        forecast, making it impossible to spot a cash crunch before it hits. You spend more time hunting for the
        real number than acting on it. The result is constant stress about whether you can cover payroll or take
        on new work with confidence.</p>
      <p className="text-base text-white shadow-text pt-3">
        This disconnect is more than a bookkeeping nuisance. It blocks every forward-looking decision: when to
        hire, whether to invest, how to manage a seasonal lull. Instead of seeing your runway, you get old data
        that misses what matters now. Even the best team cannot deliver reliable plans if they are stuck
        reformatting and reconciling information from legacy systems and manual processes. For small businesses,
        these delays and errors cost real money. Hundreds of billable hours can vanish just mapping your messy
        records into the structure an&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;system needs, often
        before you see any benefit from the software itself.</p>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`tools-accounting-intelligent-resource-planning-jirav-overview-intelligent-resource-planning${idSuffix}`} href="/use-cases/accounting/cash-flow-forecasting/ai-financial-planning-software" className="text-[#C83803] hover:underline">Intelligent Resource Planning</Link>&nbsp;changes this. By automating the flow of data from your accounting,
        payroll, and sales systems into one real-time platform, you get a single, always-current source of
        truth. Instead of patching together backward-looking reports, your team works from live numbers that
        update as the business moves. This means you can run accurate cash flow forecasts, model what-if
        scenarios, and plan your workforce with the same data everyone else sees, without spending nights
        cleaning up after the fact.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC delivers these results for small businesses across Miami-Dade, Broward, and Palm Beach
        counties. Their method replaces spreadsheets and manual entry with automated accounts receivable,
        real-time spreadsheet data integration, and enterprise planning tools that fit your existing systems.
        The outcome: less wasted time, fewer errors, and decisions based on what is actually happening in your
        business right now. That is what Intelligent Resource Planning makes possible.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
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
