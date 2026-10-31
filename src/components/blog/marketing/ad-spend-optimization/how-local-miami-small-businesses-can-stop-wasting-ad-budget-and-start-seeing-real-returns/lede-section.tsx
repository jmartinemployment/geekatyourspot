export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why am I paying for ads and still not sure which ones are actually bringing in customers, or if I&rsquo;m just
        wasting money? Ad Spend Optimization is supposed to solve this, but most small businesses in Miami-Dade,
        Broward, and Palm Beach are still flying blind. The problem is not just picking the wrong channels or setting
        budgets too low. The real issue is data: fragmented dashboards, reporting that does not match actual sales, and
        platform tools that show only part of the story. If your ad platform says you made $10,000 in sales, but your
        bank shows much less, that gap is not a minor reporting glitch, it is budget leaking out every month (<a id={`blog-marketing-precision-lead-acquisition-lede-source-triplewhale-com${idSuffix}`} href="https://www.triplewhale.com/blog/how-to-reduce-cpa" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Triplewhale</a>,
        as of Oct 29, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        This disconnect between ad spend and real results happens when your data is scattered and your reporting does
        not connect to your sales pipeline. You might see high conversion numbers inside Google or Meta, but if those
        conversions do not match your closed deals or actual revenue, you are making budget decisions based on fiction.
        Most small businesses make choices, like pausing campaigns or increasing spend, based on these incomplete
        signals, which only compounds the waste. The result: you scale up ads that did not really work and cut the ones
        that actually brought in customers, slowly starving your best channels while pouring more money into
        underperformers.</p>
      <p className="text-base text-white shadow-text pt-3">
        The cost of letting this slide goes well beyond a few missed leads. Over months and quarters, you end up
        investing in channels that only look good on paper, while your actual sales flatline or drop. Your competitors,
        meanwhile, are pulling ahead because they have built the data connections needed to see which ads lead to real
        sales, not just clicks or form fills. That is what Ad Spend Optimization is really about: connecting your ad
        data to your actual revenue, so you can see what is working, scale it up, and stop funding campaigns that do
        nothing for your bottom line.</p>
      <p className="text-base text-white shadow-text pt-3">
        This page is for Miami-area small businesses that are tired of guessing and ready to see proof that their ad
        dollars are working. Here, you will see what it takes to get real visibility into your ad performance, how to
        align your budget decisions with actual results, and how to set up your ad systems so you finally have the
        confidence to grow your spend, without the risk of throwing good money after bad.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="whats-draining-your-ad-budget-and-why-most-small-businesses-miss-it" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What&rsquo;s Draining Your Ad Budget and Why Most Small Businesses Miss It
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
              <h2 id="whats-draining-your-ad-budget-and-why-most-small-businesses-miss-it-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What&rsquo;s Draining Your Ad Budget and Why Most Small Businesses Miss It
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
