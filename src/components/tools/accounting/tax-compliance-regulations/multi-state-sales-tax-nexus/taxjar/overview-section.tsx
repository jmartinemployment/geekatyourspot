import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A South Florida e-commerce owner watches daily orders climb, but an unexpected letter from a state tax
        authority brings everything to a halt. She has crossed the&nbsp;<Link id={`tools-accounting-multi-state-sales-tax-nexus-taxjar-overview-multi-state-sales-tax-nexus${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida" className="text-[#C83803] hover:underline">Multi-State Sales Tax Nexus</Link>&nbsp;threshold. Now
        she must track, collect, and file sales tax in new states, each with its own rules, deadlines and
        reporting formats. She did not plan for this. Her small team is already stretched thin just managing
        local operations. Overnight, she faces a mountain of new compliance work, and any missed detail could
        mean expensive audits or penalties.</p>
      <p className="text-md text-white shadow-text pt-3">
        What makes this worse is the sheer number of moving parts. Most small businesses trigger economic nexus,
        generally $100,000 in revenue or 200 transactions in a state, long before they have the staff or systems
        to handle the extra load. Instead of focusing on growth, they get bogged down in spreadsheets, manual
        reconciliations, and a patchwork of state websites. With over 11,000 separate tax jurisdictions, even a
        small slip can cause costly errors. The process is not just time-consuming; it is risky. Many business
        owners find themselves reacting months too late, forced to pay uncollected tax out of pocket.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is not a theoretical risk. Small businesses in West Palm Beach, Broward and Miami-Dade counties
        face it the moment their remote sales cross state lines. Without dedicated tax staff, compliance becomes
        a constant scramble, chasing changing laws, tracking sales across platforms, and hoping nothing gets
        missed. The risk is not just fines; it is stalled momentum, higher costs, and lost sleep over every
        out-of-state order.</p>
      <p className="text-md text-white shadow-text pt-3">
        AI-driven solutions now give these small teams a fighting chance. Automated sales tax tools track
        economic nexus in real time, apply the right tax rates for every address, and file returns on time
        without hours of manual work. Instead of drowning in complexity, owners get a clear dashboard showing
        exactly where they stand. For small businesses scaling beyond Florida, this is how Multi-State Sales Tax
        Nexus stops being a growth roadblock and becomes just another part of doing business, handled, accurate,
        and out of the way.</p>
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
