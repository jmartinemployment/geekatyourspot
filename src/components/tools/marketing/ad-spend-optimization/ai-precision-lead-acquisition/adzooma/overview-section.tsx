import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why am I spending so much on ads but still unsure which ones are actually bringing customers in? Manual ad
        management drains time and leads to wasted spend for small businesses in Miami-Dade, Broward and Palm Beach.
        When you juggle Google, Facebook and Microsoft Ads in separate dashboards, it becomes nearly impossible to see
        what is working, where your money is going, or which channel deserves more budget. This is dashboard fatigue in
        action: too many screens, too little clarity, and no quick way to fix what is not working.</p>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`tools-marketing-precision-lead-acquisition-adzooma-overview-precision-lead-acquisition${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" className="text-[#C83803] hover:underline">Ad
        Spend Optimization</Link> changes this. With the right platform, you get a single view of every campaign, so you
        can see instantly where your budget is wasted, which ads are underperforming, and what actions will actually
        move the needle. Automated tools like Adzooma do more than show you numbers; they surface real optimization
        opportunities, flag pacing issues before they cost you, and let you reallocate spend to high-performing ads in
        minutes instead of hours. For a small team, this means less manual checking, fewer errors, and more time focused
        on sales and service, not spreadsheets.</p>
      <p className="text-base text-white shadow-text pt-3">
        The stakes are real. Relying on monthly reviews and disconnected spreadsheets means you are always a step
        behind: late to catch overspending, slow to pause poor ads, and likely to miss out on quick wins. Without
        automated Ad Spend Optimization, every missed adjustment is money left on the table. In a local market as
        competitive as South Florida, that difference is what separates a business that grows from one that just gets
        by.</p>
      <p className="text-base text-white shadow-text pt-3">
        This page is for small businesses in West Palm Beach, Broward and Miami-Dade counties who want to stop guessing
        at what works and start running ads with confidence. Here, you will see how modern Ad Spend Optimization tools
        help you save time, cut wasted budget, and finally tie your spend to real results.</p>
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
