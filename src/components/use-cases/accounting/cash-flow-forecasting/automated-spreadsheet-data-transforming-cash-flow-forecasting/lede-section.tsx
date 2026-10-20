import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every Monday morning, Maria, a small business owner in Miami, starts her week by piecing together her
        company&#39;s cash flow. She logs into multiple bank accounts, exports data from
        her&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;system, and wrestles with outdated Excel
        spreadsheets. By the time she sorts through the figures, they’re already stale. This manual process leaves
        her with a rearview mirror perspective, unable to confidently plan her next business move.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated Spreadsheet Data offers a solution by shifting the focus from outdated figures to real-time
        insights. Instead of spending hours on manual data entry and reconciliation, businesses can now access
        up-to-the-minute financial forecasts directly from their ledgers. This means Maria can see her cash runway
        clearly before making decisions that impact her business&#39;s future.</p>
      <p className="text-md text-white shadow-text pt-3">For a shorter overview, read <Link id="use-cases-accounting-spreadsheet-data-lede-blog-2" href="/blog/accounting/cash-flow-forecasting/how-automated-spreadsheet-data-transforms-cash-flow-forecasting" className="text-[#C83803] hover:underline">Automated Spreadsheet Data for Cash Flow</Link> on our blog.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="real-time-clarity-for-better-business-decisions" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Real-Time Clarity for Better Business Decisions
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="real-time-clarity-for-better-business-decisions" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Real-Time Clarity for Better Business Decisions
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
