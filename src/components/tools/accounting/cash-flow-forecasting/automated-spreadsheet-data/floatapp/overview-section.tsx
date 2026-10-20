import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In the heart of Miami&#39;s bustling business district, a small retail store owner, Maria, sits at her desk,
        staring at a spreadsheet filled with daunting numbers. Her Profit &amp; Loss statement paints a rosy picture
        of growth and success, yet her bank account tells a different story. The discrepancy between the two is more
        than a simple oversight; it reflects a common struggle for small businesses: the gap between paper
        profitability and actual cash flow. Maria&#39;s optimism, based on projected profits, often leads her to
        make financial commitments that her actual cash reserves cannot support. This &quot;over-forecasting
        optimism bias&quot; is a trap many small business owners fall into, mistaking potential profits for
        available liquidity.</p>
      <p className="text-md text-white shadow-text pt-3">
        This disconnect can result in strained supplier relationships, missed payroll, and stunted growth
        opportunities. The reliance on manual&nbsp;<Link id="tools-accounting-spreadsheet-data-floatapp-overview-spreadsheet-data" href="/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting" className="text-[#C83803] hover:underline">spreadsheet data</Link>&nbsp;exacerbates the issue, as outdated figures and human
        errors creep into the forecasting process. Each week, Maria spends hours manually updating her cash flow
        projections, only to find them misaligned with reality. The tedious task of re-keying data, combined with
        the risk of formula errors, leaves her frustrated and financially exposed. It&#39;s a cycle of uncertainty
        that many small businesses in West Palm Beach, Broward, and Miami-Dade counties know all too well.</p>
      <p className="text-md text-white shadow-text pt-3">
        Enter automated spreadsheet data, a game-changer for businesses like Maria&#39;s. By automating
        the&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>&nbsp;process, tools
        like Floatapp integrate directly with accounting platforms such as Xero and QuickBooks Online. This seamless
        connection ensures that Maria&#39;s forecasts are built on real-time, accurate data, eliminating the manual
        grind and reducing the risk of errors. With automated updates, she can see her true cash position at a
        glance, enabling more informed decision-making and strategic planning.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated spreadsheet data doesn&#39;t just save time; it transforms how small businesses manage their
        finances. By providing a live, rolling cash flow forecast that updates automatically, tools like Floatapp
        empower business owners to move beyond reactive financial management. Maria can now predict cash flow
        challenges before they arise, plan for growth with confidence, and ensure her financial decisions are
        grounded in reality, not optimism. For small businesses across the region, embracing automation in cash flow
        forecasting is not just a convenience—it&#39;s a necessity for sustainable success.</p>
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
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
