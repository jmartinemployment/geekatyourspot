import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A South Florida retailer lands a big new account in New York, pushes a holiday promotion online, and
        watches sales spike. The team celebrates, until the monthly close reveals a problem nobody saw coming.
        Spanning just a few dozen out-of-state orders, their year-to-date total quietly tripped the $100,000
        threshold in two states. That single milestone means they have a&nbsp;<Link id={`tools-accounting-multi-state-sales-tax-nexus-taxcloud-overview-multi-state-sales-tax-nexus${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida" className="text-[#C83803] hover:underline">Multi-State Sales Tax Nexus</Link>. Suddenly,
        they must register, collect, and file sales tax in states where they have no office, no staff, and no
        local accountant. What started as a win now threatens to paralyze the entire back office.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is where the real cost of manual compliance shows up. Most small businesses in Miami-Dade, Broward,
        and West Palm Beach run lean. They do not have a tax department or a dedicated compliance officer.
        Tracking economic nexus means monitoring complicated rules in over 11,000 tax jurisdictions, each with
        its own filing deadlines, transaction tests, and penalty structures. A missed registration or late
        filing triggers automatic fines. Reporting errors or under-collecting tax can leave a business exposed
        to years of back taxes and aggressive audit action. Staff end up spending full days pulling data from
        Shopify, Amazon, and QuickBooks, sorting through mismatched sales reports, and second-guessing whether
        they even owe tax in each state. Each month brings new risk, wasted hours, and mounting anxiety about
        what might have slipped through the cracks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Multi-State Sales Tax Nexus is not a theoretical problem. For small businesses selling online or across
        state lines, it is the single biggest compliance risk that can stall growth overnight. Crossing a
        state’s revenue or transaction threshold happens fast, often long before a team has the systems or
        processes to handle it. Without affordable, automated tax software, managing this manually means falling
        behind. The result: stunted expansion, unexpected costs, and a constant threat of audit that keeps
        owners up at night.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses in South Florida looking to scale across state borders, the answer is to automate nexus
        tracking, rate calculations, and filings. Intelligent compliance platforms now monitor every channel,
        alert you as thresholds approach, and file on time in every state, turning a complex, high-stakes burden
        into a routine workflow. This lets you focus on growth, not on navigating tax traps. Geek @ Your Spot LLC
        helps small businesses in Broward, Miami-Dade, and Palm Beach counties implement these solutions, so
        Multi-State Sales Tax Nexus stops being a roadblock and starts being just another box checked.</p>
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
