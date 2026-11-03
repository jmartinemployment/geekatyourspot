export default function EvaluatingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Judging whether Cometly is the right fit for your small business comes down to two questions: does it solve your
        real attribution and budget problems, and does its pricing model make sense for your scale and needs? Cometly is
        purpose-built for teams who have outgrown basic ad dashboards and want a single, reliable source of truth
        connecting ad spend to actual revenue. If your marketing budget is tight and every dollar matters, the
        platform&rsquo;s automation and data accuracy can mean the difference between scaling what works and wasting
        budget on what only looks good on paper.</p>
      <p className="text-base text-white shadow-text pt-3">
        The strongest fit for Cometly is a business that runs ads across multiple platforms, Meta, Google, TikTok, and
        more, and needs to see how those channels work together to drive real sales. If you have sales coming in through
        forms, phone calls, or offline deals, and you are frustrated by the gap between what your ad platforms report
        and what your bank account shows, Cometly&rsquo;s unified tracking and attribution closes that gap. The platform
        is especially valuable if you have a longer sales cycle or high-ticket sales, where the real conversion may
        happen days or weeks after the first ad click. In these cases, platform dashboards are often misleading, and
        Cometly&rsquo;s ability to connect every touchpoint to closed-won revenue is its core advantage.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cometly&rsquo;s pricing is not published in the research provided, so you cannot compare it on cost alone.
        Instead, weigh its value by the time it saves, the errors it prevents, and the budget it rescues from being
        wasted on phantom conversions or misattributed sales. The platform is not a fit if you are running
        single-channel, low-volume campaigns where the ad platform&rsquo;s own reporting is good enough. It is also not
        built for businesses that want to customize logic with code, Cometly&rsquo;s configuration is integration-driven
        and does not support custom scripting or SDK extensions.</p>
      <p className="text-base text-white shadow-text pt-3">
        To judge Cometly&rsquo;s fit, use this checklist:</p>
      <ol className="list-decimal list-outside pl-5 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Do you run ads on more than one platform and need a unified view of results?</li>
        <li>Are you losing confidence in the numbers your ad dashboards show, especially when sales lag behind reported conversions?</li>
        <li>Does your sales process include offline steps or multiple touchpoints that standard browser pixels miss?</li>
        <li>Is your team spending time reconciling ad data with CRM or payment data to understand what is really working?</li>
        <li>Would automated budget reallocation and creative analytics save you time and prevent costly mistakes?</li>
        <li>Are you ready to invest in a platform that requires configuration and integration, not just a login and go?</li>
      </ol>
      <p className="text-base text-white shadow-text pt-3">
        If you answer yes to most of these, Cometly is likely a strong fit. If your needs are simple or you want to
        experiment without connecting your CRM or revenue data, a lighter tool or native platform reporting may suffice.
        The main risk with Cometly is under-configuring it, if you do not connect all your data sources or set up
        attribution rules properly, you will not see the value. This is where Geek @ Your Spot&rsquo;s implementation
        work matters: the consultancy ensures the system reflects your real-world sales process, not just ad clicks, and
        validates the setup before you rely on the numbers.</p>
      <p className="text-base text-white shadow-text pt-3">
        On pricing, since details are not published, focus your evaluation on the cost of not fixing your attribution
        and optimization problems. For a small business, the waste from scaling losing campaigns or pausing real winners
        can easily exceed the cost of a specialized tool. Cometly&rsquo;s promise is not a lower software bill, but a
        higher return on every ad dollar by removing the guesswork and error from your budget decisions. Where other
        platforms charge by ad spend, seat, or feature tier, Cometly&rsquo;s value is in the time and budget it frees
        up, not just in the line item on your expense sheet.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you want to see Cometly in action, the vendor offers a free demo. This is your chance to test how its
        tracking, attribution, and automation work with your actual ad accounts and data. Geek @ Your Spot recommends
        using this demo to walk through real scenarios, how the platform handles a multi-touch sale, flags duplicate
        conversions, or reallocates budget in real time. Bring your toughest questions about attribution gaps and
        fragmented reporting. The right fit is not just about features, but about whether Cometly can solve your version
        of the ad spend problem at a price that makes sense for your business.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="judging-cometly-on-fit-and-pricing-for-small-business-ad-spend-optimization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Judging Cometly on Fit and Pricing for Small Business Ad Spend Optimization
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="judging-cometly-on-fit-and-pricing-for-small-business-ad-spend-optimization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Judging Cometly on Fit and Pricing for Small Business Ad Spend Optimization
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
