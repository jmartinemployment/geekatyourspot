import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses in South Florida lose more than just money when they manage ad spend manually, they lose
        time, control, and the ability to grow safely. The actual cost shows up in wasted budget, missed sales, and late
        reactions to problems that snowball over nights and weekends. Bir breaks these patterns by automating the checks
        and adjustments that teams cannot keep up with on their own.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual ad management means chasing performance across too many accounts and platforms, with no way to see
        everything in one place. Teams spend hours each week logging into different dashboards, exporting reports, and
        trying to spot which ads are draining budget or missing their mark. Even with the best intentions, fragmented
        data and slow reporting make it nearly impossible to connect ad spend to real business results. By the time
        someone spots a problem, like a spike in customer acquisition cost or an ad that has burned through budget with
        no conversions, the money is already gone.</p>
      <p className="text-base text-white shadow-text pt-3">
        The risk grows when ad accounts scale up. A shop running fifty ads across three platforms faces a constant
        threat: a sudden jump in <GlossaryLink slug="cost-per-click">cost-per-click</GlossaryLink> or a platform glitch
        can eat through hundreds of dollars in hours. On weekends or holidays, when no one is watching, these issues can
        drain budget before anyone notices. Manual checks and platform alerts often come too late or not at all. Teams
        are left to clean up after the fact, trying to explain budget overruns or missed targets to the business
        owner.</p>
      <p className="text-base text-white shadow-text pt-3">
        Even when someone does catch a problem, the fix is slow and reactive. Adjusting budgets or pausing
        underperforming ads takes time, time that small teams do not have. Worse, making large manual changes can push
        campaigns into unstable &ldquo;learning phases,&rdquo; disrupting the platform&rsquo;s own optimization and
        making results even less predictable. The cycle repeats: missed opportunities, wasted spend, and a team that
        spends more time firefighting than building strategy.</p>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses also struggle with cross-channel complexity. Each platform reports different numbers, uses
        different attribution windows, and connects to sales data in its own way. Without custom checks that scan across
        all campaigns and channels, it is easy to miss trends or fail to spot when a shift in one platform should
        trigger a change in another. For example, if Google Ads costs spike but Meta performance holds steady, the team
        may not notice until the next reporting cycle, by then, the budget has already been wasted.</p>
      <p className="text-base text-white shadow-text pt-3">
        The cost is not just in dollars. Every hour spent on manual checks or late-night troubleshooting is an hour not
        spent on strategy, creative, or customer experience. Teams burn out trying to keep up. The business loses
        momentum, and the risk of human error climbs. Even experienced marketers end up second-guessing their decisions
        or missing the window to scale up a winning ad before it goes stale.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir breaks this cycle by automating the guardrails that small businesses need but cannot build themselves. It
        runs checks every fifteen minutes, catching sudden spikes in cost or performance dips before they become
        expensive problems. Instead of reacting after the fact, teams can rely on Bir to pause underperformers, adjust
        budgets in real time, and keep spend focused on what is working. This is not just about saving money, it is
        about reclaiming the hours and headspace that manual ad management eats up. For a twelve-person team, that means
        more time for creative work, faster growth, and fewer surprises when the monthly numbers come in.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-managing-ad-spend-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep managing ad spend by hand
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
              <h2 id="what-it-costs-to-keep-managing-ad-spend-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep managing ad spend by hand
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
