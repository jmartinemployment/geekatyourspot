export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Ad Spend Optimization is the right move when your business has a steady stream of ad spend, enough data to show
        real outcomes, and the internal commitment to stick to a structured process. It is not the right call when your
        campaigns are too small to generate meaningful data, your team cannot commit to routine checks, or your
        business model is too unpredictable for automation to make sound decisions.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business in South Florida, the tipping point usually comes when ad costs and wasted spend start to
        outweigh the time you can afford to spend manually watching campaigns. If you run ads across Google, Meta, or
        even local service platforms, and you find yourself logging in several times a week just to keep up with
        changes, that is a clear signal. When you have reached the point where you are reacting to problems rather than
        steering results, automated optimization is likely overdue.</p>
      <p className="text-base text-white shadow-text pt-3">
        But automation is not a cure-all. If your ad budget is less than $1,000 a month, the savings from automation
        may not cover the setup and oversight it requires (<a id={`use-cases-marketing-precision-lead-acquisition-right-fit-source-bir-ch${idSuffix}`} href="https://bir.ch/case-studies/webtopia" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Bir</a>,
        as of Oct 25, 2026). Platforms like Wask and Adzooma simplify multi-account management and automate routine
        checks, but they still depend on a base level of spend and activity to generate results worth optimizing. Below
        that threshold, you are better off focusing on nailing your creative and targeting by hand, and only moving to
        automation when your campaigns start to scale.</p>
      <p className="text-base text-white shadow-text pt-3">
        The other boundary is data quality. If your business has never set up proper tracking, if you do not know what
        counts as a lead, or your sales data lives in spreadsheets that are never reconciled with your ad platforms, no
        tool can fix that for you. Cometly and Triplewhale both address the core problem of unreliable conversion data,
        but they depend on you having clean, connected data sources. If you cannot trace a sale back to a click, or if
        your CRM and ad accounts never talk to each other, you will not get meaningful optimization. You will just
        automate the same bad decisions faster.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ad Spend Optimization is best suited for businesses that run campaigns in more than one channel, face the risk
        of wasted spend from broad targeting or overlapping audiences, and have a regular review process (even if it is
        just monthly). For these businesses, platforms like Bir and Optmyzr add value by running automated checks every
        15 minutes, pausing runaway spend, and reallocating budget to proven winners (<a id={`use-cases-marketing-precision-lead-acquisition-right-fit-source-optmyzr-com${idSuffix}`} href="https://www.optmyzr.com/ppctownhall/pmax-campaign-optimization/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026). If your business relies on seasonality or runs bursts of campaigns for special offers,
        solutions like LocaliQ and Plai can help focus your spend only on high-intent local searches and automate the
        heavy lifting of tracking and reporting, but only if you can supply accurate campaign goals and tracking
        parameters.</p>
      <p className="text-base text-white shadow-text pt-3">
        In some cases, the wrong time to optimize ad spend is when your internal processes are still in flux, such as
        when you are changing how you capture leads, switching CRMs, or have not standardized your sales tracking.
        Trying to automate during upheaval often leads to more confusion, not less. Likewise, if your business model is
        so new or your market so untested that there are no reliable benchmarks for what a good lead or sale looks like,
        you may need a few cycles of manual management to establish a baseline first.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, automation delivers the most value when you have the discipline to act on its insights. Adzooma and
        Optmyzr both flag budget drains and performance drops instantly, but if your team ignores those alerts or lacks
        the authority to make changes, the system cannot protect your budget. This means the best candidates for ad
        spend optimization are small teams with a clear workflow for approving changes and a willingness to let the
        system make routine adjustments without second-guessing every move.</p>
      <p className="text-base text-white shadow-text pt-3">
        Done at the right time, with the right data and buy-in, ad spend optimization can give a small business the
        same discipline and efficiency as a much larger competitor. Rushed or forced onto a business that is not ready,
        it can just add another layer of noise. The difference is in readiness: a clear goal, reliable tracking, and
        the commitment to let the system work, those are the signs that now is the right time to make the move.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-ad-spend-optimization-is-the-right-move-and-when-it-is-not" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Ad Spend Optimization Is the Right Move, and When It Is Not
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-ad-spend-optimization-is-the-right-move-and-when-it-is-not-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Ad Spend Optimization Is the Right Move, and When It Is Not
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
