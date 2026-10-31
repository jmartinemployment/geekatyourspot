import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why do small businesses in South Florida keep spending on ads that never seem to pay off? The answer is that
        most teams can&rsquo;t see which campaigns actually drive revenue and which just drain the budget. <Link id={`tools-marketing-precision-lead-acquisition-cometly-overview-precision-lead-acquisition${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" className="text-[#C83803] hover:underline">Ad
        Spend Optimization</Link> breaks down the walls between your ad platforms and your actual sales data, so you stop
        guessing and start making every dollar count. The right approach connects the dots from click to customer,
        giving you the real numbers you need for smarter, faster decisions.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real cost of flying blind is bigger than a few wasted dollars. You see strong results in your ad dashboards,
        so you put more money behind what looks good, while the campaigns that quietly bring in real customers get cut.
        Over time, those hidden mistakes compound: you lose out on growth, your cost per sale creeps up, and your
        competitors pull ahead because they have better data. This is not about creativity or working harder. It&rsquo;s
        about whether you trust the numbers you see, or if you&rsquo;re making decisions on fiction.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual tracking and basic dashboards just do not cut it anymore. With each ad platform reporting its own
        inflated numbers, and sales happening through forms, calls, and offline deals, the gaps only get wider. Privacy
        changes and browser restrictions now hide up to a third of your conversions. That means you&rsquo;re not only
        moving budget away from what works, you&rsquo;re training the platforms to optimize for the wrong results,
        making your ads less effective with every cycle.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are a small business in Miami-Dade, Broward or Palm Beach, and you are tired of ad spend that feels like a
        black box, Ad Spend Optimization can give you the clear, real-time view you need. You get practical answers:
        which campaigns feed your pipeline, where to pull back, and how to scale with confidence. This is a direct path
        to fewer wasted hours, lower costs, and more sales, not just better reports.</p>
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
