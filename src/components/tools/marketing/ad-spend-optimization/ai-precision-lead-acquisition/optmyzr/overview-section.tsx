import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why am I paying for ads but still have no idea which ones are actually bringing in customers, or if I am
        throwing money away? If you run a small business in South Florida, this is the question that keeps coming up.
        <Link id={`tools-marketing-precision-lead-acquisition-optmyzr-overview-precision-lead-acquisition${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" className="text-[#C83803] hover:underline"> Ad
        Spend Optimization</Link> promises you will see where your budget is going and whether it is working, but the
        reality is more complicated: platforms split up their reporting, it is hard to connect ad clicks to real sales,
        and most teams do not have the technical skills to set up custom rules or scripts that could automate the
        checks. The result is you spend hours in dashboards and spreadsheets, yet you still do not know which ads are
        worth the cost, or what to cut.</p>
      <p className="text-base text-white shadow-text pt-3">
        This hits small businesses hardest. Big brands have the staff, the data, and the budget to run tests and let
        Google or Microsoft&rsquo;s algorithms learn. A small team in Miami-Dade or Broward gets none of that. If you
        try to set up your own scripts or automated rules, you quickly run into a wall: you need to know the right code,
        understand every platform&rsquo;s quirks, and keep up with constant changes. Without those skills, you are stuck
        with manual work, checking reports, updating bids, and trying to spot waste before it drains your account. Most
        teams end up reacting too late, missing signs when an ad set is burning cash or a landing page is broken.</p>
      <p className="text-base text-white shadow-text pt-3">
        The cost goes beyond wasted spend. Every hour your team spends digging through reports is an hour not spent on
        strategy or growth. And every dollar lost on a non-converting ad is money you cannot use elsewhere. Worse, you
        never get a clear answer on what actually drives sales, so decisions come down to guesswork or gut feel. This is
        why so many small businesses see their ad budgets vanish with little to show for it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ad Spend Optimization, when done right, fixes this. It links your ad data to real business outcomes, automates
        the checks that catch waste and errors before they snowball, and gives you the controls that big companies take
        for granted, without needing to hire a developer. For small businesses in West Palm Beach, Broward, and
        Miami-Dade, this means you finally see which ads are working, shift your budget with confidence, and stop the
        leaks before they start. You get back control of your marketing, and see results from every dollar you spend.</p>
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
