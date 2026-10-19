import Link from "next/link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A South Florida retailer sees their product take off across state lines. Overnight, a steady stream of
        out-of-state orders pushes their sales past the $100,000 mark in three new states. But what looks like
        growth quickly turns into a race against the clock. Instead of celebrating, the owner faces a pile of
        confusing tax notices, each one carrying a deadline they do not understand and a risk they cannot
        measure. Without a dedicated CPA or in-house compliance team, they now have to track shifting sales
        thresholds, register in unfamiliar jurisdictions, and respond to a new wave of regulatory mail, while
        still running day-to-day operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the reality of&nbsp;<Link id="tools-accounting-multi-state-sales-tax-nexus-zamp-overview-multi-state-sales-tax-nexus" href="/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida-smbs" className="text-[#C83803] hover:underline">Multi-State Sales Tax Nexus</Link>&nbsp;for small businesses. Economic nexus rules can
        trigger tax obligations after crossing as little as 200 transactions or $100,000 in revenue in a state.
        Most small teams hit these triggers long before they have the staff or systems to handle the fallout.
        The result is a constant scramble, manually tracking sales across more than 11,000 jurisdictions, trying
        to keep up with ever-changing tax rates, and hoping nothing slips through the cracks. Missed filings and
        misclassified products open the door to audits and penalties. Software alone is not enough: when a
        plugin fails, or a state updates its rules, there is no one watching. The risk is real and immediate:
        one missed notice or late registration can put the whole business at risk.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot works with small businesses in West Palm Beach, Broward and Miami-Dade counties who are
        stuck in exactly this bind. We see owners losing nights to spreadsheets, answering state letters they do
        not understand, and spending money on tax tools that still leave them exposed. The answer is not more
        software, it is a managed, AI-powered compliance process that fits the way small teams actually work.
        With the right setup, you get real-time nexus tracking, hands-off filings, and a support team who
        handles state notices before you even see them. Multi-State Sales Tax Nexus does not have to stall your
        growth or bury you in paperwork. The right approach gives you back your time, protects you from costly
        mistakes, and lets you focus on scaling your business with confidence.</p>
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
