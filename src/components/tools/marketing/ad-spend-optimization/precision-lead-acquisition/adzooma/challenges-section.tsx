export default function ChallengesSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual ad management across Google, Facebook, and Microsoft Ads costs small businesses in South Florida lost
        hours, wasted budget, and missed sales. The real cost is not just the time spent checking each platform or
        updating spreadsheets, but the money lost to errors, slow reactions, and missed optimization opportunities.
        Without a unified tool, every extra dashboard means another place for mistakes to hide and another delay before
        you catch a problem.</p>
      <p className="text-base text-white shadow-text pt-3">
        A small team can easily overlook dead budgets in secondary channels like Microsoft Ads. When nobody logs in for
        days, campaigns can keep spending long after they have stopped working. The result is budget quietly leaking
        away, often without anyone noticing until the next billing cycle. Even if you check the main platform every
        day, the others get less attention, and that is where money slips through the cracks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Keeping ad variations live past their prime is another hidden drain. Outdated pricing, expired promotions, or
        inventory mismatches can run unchecked if you do not have a system that flags them. The longer these ads run,
        the more budget you burn on clicks that cannot convert. Without an automated scan, it is easy to miss these
        details, especially when you are juggling several accounts and channels at once.</p>
      <p className="text-base text-white shadow-text pt-3">
        Disconnected spreadsheets and late optimization moves mean you are always reacting instead of steering. When
        you only review performance once a month, you catch overspending and underperforming ads after the damage is
        done. A business that waits for a monthly report is stuck playing catch-up, losing out to competitors who adjust
        in real time. The cost is not just in dollars, but in missed chances to push more budget toward the ads that
        actually bring in customers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Complex ad platforms hide settings that quietly waste money. Low-quality partner networks, for instance, can
        drain your budget with clicks that never turn into sales. Manual checks rarely catch these in time, and without
        a tool that spots them, you end up paying for traffic that does nothing for your business. The more platforms
        you use, the more likely it is that some of your spend is going to waste.</p>
      <p className="text-base text-white shadow-text pt-3">
        Dashboard fatigue sets in fast for small teams. With every new campaign or channel, the chance of missing a
        critical issue grows. It is not just about being tired; it is about the real risk of missing a budget cap,
        letting a poor ad run too long, or failing to spot a sudden drop in performance. These mistakes add up, turning
        what should be a growth engine into a source of frustration and lost opportunity.</p>
      <p className="text-base text-white shadow-text pt-3">
        The manual approach also locks you into a cycle of reactive work. Every time you spot a problem, you have to log
        into each platform, hunt for the issue, and make the fix by hand. This eats up time that could go to sales,
        customer service, or strategy. For a small business, every hour spent on admin is an hour not spent growing the
        business.</p>
      <p className="text-base text-white shadow-text pt-3">
        The final price is measured in lost growth. Without automation and a unified view, you cannot see which ads are
        actually bringing in customers. That means you are always guessing where to invest more and where to pull back.
        In a market like South Florida, where competition is fierce and budgets are tight, that guesswork is the
        difference between steady growth and flatlining results.</p>
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
              {body()}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
