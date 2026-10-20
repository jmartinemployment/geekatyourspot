import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A local HVAC service in West Palm Beach hits its first $2 million year but still closes its books one
        spreadsheet at a time. Vendor bills wait in email threads. Payroll numbers sit in an old desktop app
        that only one person knows how to use. The owner spends late nights copying figures between mismatched
        files, never sure which version to trust. Every month, the close drags out because the numbers do not
        line up. Errors slip through. Cash flow feels unpredictable. The team wants to grow, but the back office
        cannot keep up.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the wall most small businesses hit with QuickBooks and spreadsheets. As transactions pile up and
        more staff need access, the old tools show their limits. Reporting gets slower. Approvals stall. Audit
        trails go missing. If you have ever tried to wrangle a year’s worth of receipts for your accountant or
        spent hours fixing a broken formula just to see where the money went, you know the cost. The fear is
        real: moving to a big&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;sounds like a budget-busting
        project with months of disruption and training nobody has time for. But sticking with the status quo
        means more hidden errors, more wasted hours, and less control over cash.</p>
      <p className="text-md text-white shadow-text pt-3">
        <Link id="tools-accounting-intelligent-resource-planning-quickbooks-overview-intelligent-resource-planning" href="/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business" className="text-[#C83803] hover:underline">Intelligent Resource Planning</Link>&nbsp;takes the chaos out of your books. Instead of fighting with spreadsheets
        and disconnected apps, you get live numbers, automated data entry, and workflows that route approvals
        without email chains. You see cash flow in real time. Collections get faster, and vendor payments stop
        falling through the cracks. With AI-powered tools, your team works from a single source of truth, no
        more guessing which file is right. You do not need a
        massive&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;migration to get there. For small
        businesses in Miami-Dade, Broward, and West Palm Beach, this means real savings on admin time, fewer
        errors, and the confidence to make decisions with numbers you actually trust.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC specializes in bringing Intelligent Resource Planning to small businesses that have
        outgrown entry-level systems but cannot afford to stop everything for a year-long overhaul. You get a
        plan built around your current tools, zero downtime, and a step-by-step path from messy books to
        automated, reliable reporting. If your team is stuck in spreadsheet limbo, it is time to see what
        intelligent automation can do.</p>
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
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
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
