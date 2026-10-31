import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Bir automates the parts of ad spend optimization that drain your team&rsquo;s time and expose your budget to
        risk. Instead of chasing performance or reacting to problems late, you get a system that checks every campaign,
        every fifteen minutes, and acts before issues become costly. For small businesses in Miami-Dade, Broward, and
        Palm Beach, this means more hours for strategy and less stress over what happens when no one is watching the
        accounts.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first thing Bir takes off your plate is the need for constant manual reviews. You no longer have to log in
        every morning, run reports, and comb through ad-level data to spot what needs pausing or scaling. Bir&rsquo;s
        automation rules scan across all your campaigns, using data from the last three, seven, or even fourteen days to
        spot trends and take action. Underperforming ads are paused automatically, so you do not waste budget on
        creative that is not delivering. High-performing campaigns are scaled up, not left capped at a flat budget just
        because no one checked in time.</p>
      <p className="text-base text-white shadow-text pt-3">
        This system does not just look at one platform. Bir can connect to Google Analytics, Google Sheets, Hyros,
        AppsFlyer, Adjust, and Wicked Reports, pulling in data from every channel you use. That means rules can be set
        to react to cross-channel signals, if your cost per acquisition jumps on Google, Bir can shift spend or pause
        campaigns on Meta, all without waiting for a human to spot the trend. For a team managing multiple brands or
        products, this brings all your optimization into one place, with unified logic and fewer gaps for waste to slip
        through.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget management becomes proactive instead of reactive. Bir&rsquo;s rules do not just pause ads, they adjust
        budgets up or down based on real-time performance. If a campaign is hitting its <GlossaryLink slug="cost-per-acquisition">cost-per-acquisition</GlossaryLink>
        target, Bir can boost the budget by a set percentage, as often as every twelve hours, ensuring you capitalize on
        winning ads while they are hot. If performance dips or costs spike, budgets are cut automatically, protecting
        your bottom line without manual intervention. This approach avoids the instability of big, sudden changes that
        push campaigns into learning phases; instead, Bir makes micro-adjustments that keep everything running
        smoothly.</p>
      <p className="text-base text-white shadow-text pt-3">
        <GlossaryLink slug="ad-fatigue">Creative fatigue</GlossaryLink> and ad rotation are handled without extra effort
        from your team. Bir&rsquo;s automation rules compare short-term performance signals against longer baselines,
        spotting when an ad is starting to lose its edge. Declining assets are rotated out before they drag down
        results. For teams that run frequent creative tests, Bir can instantly increase budgets for ads that show strong
        early conversion signals, or duplicate winning setups across accounts to scale what works, without disrupting
        what is already performing.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir also builds in financial guardrails that operate around the clock. Stop-loss rules protect your margins by
        automatically pausing campaigns or reducing budgets when costs rise above set thresholds. Spend caps and anomaly
        detection rules catch sudden spikes in cost-per-click or cost-per-thousand-impressions, shutting down runaway
        spend before it becomes a problem. This safety net means you do not have to worry about budget blowouts on
        weekends or holidays when no one is monitoring the accounts.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams managing more than one ad account, Bir lets you apply and duplicate rules across all of them from a
        single place. This saves hours each week and ensures that every account benefits from the same best practices,
        no more copy-pasting or risking that one account gets left behind. The system&rsquo;s advanced logic means you
        can filter, rank, and apply conditions using custom metrics and even external data, so your automation is as
        precise as your business needs.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir&rsquo;s approach to <GlossaryLink slug="predictive-analytics">predictive analytics</GlossaryLink> for
        advertising goes beyond standard reporting. You can build custom metrics, set exact performance windows, and
        track trends over time with visual tools. The platform&rsquo;s AI can audit your current setup, highlight rules
        that are not firing, and find opportunities to prevent wasted spend. This gives you the confidence that your
        system is not just running, but running efficiently, without the risk of overfiring rules or missed
        triggers.</p>
      <p className="text-base text-white shadow-text pt-3">
        The results are clear in the time and effort saved. Cocosolis, a beauty brand managing over twenty ad accounts,
        saved up to 102 hours of manual work each month after switching to Bir (<a id={`tools-marketing-precision-lead-acquisition-bir-transforms-source-cocosolis${idSuffix}`} href="https://bir.ch/case-studies/cocosolis" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Bir</a>,
        as of Oct 25, 2026). Webtopia scaled ad spend from $1,000 a day to $30,000 a day by using structured automation
        to adjust budgets and pause underperformers without manual checks (<a id={`tools-marketing-precision-lead-acquisition-bir-transforms-source-webtopia${idSuffix}`} href="https://bir.ch/case-studies/webtopia" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Bir</a>,
        as of Oct 25, 2026). Loop Earplugs saw campaign scaling speed up by 200 percent, with budgets and bids adjusted
        in real time to match performance (<a id={`tools-marketing-precision-lead-acquisition-bir-transforms-source-loop-earplugs${idSuffix}`} href="https://bir.ch/case-studies/loop-earplugs" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Bir</a>,
        as of Oct 25, 2026).</p>
      <blockquote cite="https://bir.ch/case-studies/webtopia" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Birch is a safety net that runs in the background ensuring nothing goes wrong with your account at any time of
        the day.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        For a small team, this means you do not have to be &ldquo;always on&rdquo; to keep your accounts safe and
        growing. You get weekends back, avoid late-night emergencies, and spend more time on creative and strategic
        work. Bir&rsquo;s automation does not replace the need for human insight, it handles the execution-heavy tasks so
        your team can focus on what drives the business forward. The more of your manual routine Bir takes over, the more
        predictable and scalable your results become.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-bir-removes-from-your-week-with-ad-spend-optimization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Bir removes from your week with Ad Spend Optimization
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-bir-removes-from-your-week-with-ad-spend-optimization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Bir removes from your week with Ad Spend Optimization
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
