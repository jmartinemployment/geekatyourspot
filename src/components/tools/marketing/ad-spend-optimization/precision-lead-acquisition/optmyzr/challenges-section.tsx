export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual ad spend management drains time, creates errors, and rarely gives small businesses the clarity they need
        to make smart decisions. Small teams in Miami-Dade, Broward, and Palm Beach counties face a unique challenge:
        limited staff, fragmented data, and the constant risk of wasted budget. The more time you spend checking
        dashboards and updating bids by hand, the less time you have to grow your business or serve customers.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core problem is that most small businesses do not have the technical skills or resources to build and
        maintain custom scripts or automation rules. Setting up automated checks inside Google or Microsoft Ads
        requires a working knowledge of code, platform quirks, and constant updates as interfaces change. Without this,
        you are left to check reports manually, often after the damage is done. When a campaign spends too much on
        irrelevant clicks, or a landing page goes down, you may not notice until you have lost hundreds of dollars and
        missed sales.</p>
      <p className="text-base text-white shadow-text pt-3">
        This lack of automation creates a cycle of reactive management. You see a spike in spend, dig into the numbers,
        and try to adjust bids or pause keywords after the fact. But by then, the budget is gone. If a competitor raises
        their bids and pushes your ads off the first page, you may not realize until your leads dry up. If a landing
        page breaks or throws a 404 error, you could waste days of spend driving visitors to a dead end (<a id={`tools-marketing-precision-lead-acquisition-optmyzr-challenges-source-landing-pages${idSuffix}`} href="https://www.optmyzr.com/blog/are-your-adwords-ads-losing-money-on-bad-landing-pages/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026). Every missed alert is money and opportunity lost.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual processes also make it hard to spot patterns or optimize for real sales outcomes. Most teams end up
        guessing which ads are working, relying on platform-reported metrics that do not always connect to actual
        revenue. When search term reports are not reviewed often, profit-draining keywords slip through, and budgets
        bleed away on traffic that never converts. Even when you try to keep up, the sheer volume of data and the need
        to check multiple platforms makes it nearly impossible to stay ahead.</p>
      <p className="text-base text-white shadow-text pt-3">
        As a result, small businesses pay twice: once in hard dollars spent on non-performing ads, and again in staff
        time wasted on repetitive, low-value work. Every hour spent managing ad budgets by hand is an hour not spent on
        strategic growth, customer service, or new campaigns. Worse, the lack of clear attribution between ad spend and
        real sales means decisions are often based on gut feel or incomplete data. This is why many small businesses
        find their ad budgets vanish without a clear sense of what is working.</p>
      <p className="text-base text-white shadow-text pt-3">
        The risks go beyond budget waste. When you cannot react quickly to changes, like sudden competitor bid spikes,
        broken landing pages, or shifts in local demand, you are left exposed. A single missed alert can mean days of
        lost visibility, missed leads, or campaigns running out of control. Manual intervention is simply too slow to
        keep up with the pace of digital advertising today.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
