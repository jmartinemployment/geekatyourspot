import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Bir automates ad spend optimization by running a continuous cycle of checks and actions across all connected ad
        accounts, using custom rules and real-time data. Every 15 minutes, Bir reviews campaign performance, applies
        logic based on your chosen metrics, and executes changes to budgets, bids, and campaign status without waiting
        for manual input (<a id={`tools-marketing-precision-lead-acquisition-bir-how-it-works-source-nothink${idSuffix}`} href="https://bir.ch/case-studies/nothink" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Bir</a>,
        as of Oct 25, 2026). This means underperforming ads are paused, budgets are shifted, and strong performers are
        scaled up as soon as the data supports it.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of Bir&rsquo;s system is its rule engine. Each rule is built from nested conditions that reference both
        standard and custom metrics, such as <GlossaryLink slug="cost-per-acquisition" className="text-[#0B162A] hover:underline">cost
        per acquisition (CPA)</GlossaryLink>, <GlossaryLink slug="return-on-ad-spend" className="text-[#0B162A] hover:underline">return
        on ad spend (ROAS)</GlossaryLink>, or event counts, and can be scoped to the ad, ad set, or campaign level. A
        rule might specify that if an ad set&rsquo;s CPA exceeds a certain threshold over the past three days, its budget
        should be reduced by a set percentage. Or, if a campaign&rsquo;s ROAS is above target for a defined period and
        daily spend is on pace, Bir can automatically increase its budget. These rules are not limited to single
        accounts or platforms; Bir allows you to apply and duplicate them across multiple ad accounts at once, making it
        possible to manage dozens or hundreds of campaigns from a single dashboard.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir&rsquo;s automation is not just about reacting quickly. It is designed to avoid overreacting to short-term
        noise. For example, it uses custom timeframes and performance windows so that budget changes are based on
        multi-day trends, not just one-hour spikes. You can set rules to trigger only after a campaign has hit a certain
        number of conversions or maintained a performance level for a minimum period. This approach prevents the common
        problem of pushing campaigns into unstable learning phases by making abrupt changes based on limited data.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of Bir&rsquo;s key strengths is how it manages creative testing and scaling. At the ad level, rules filter
        out weak creatives early, pausing ads that fail to generate engagement or conversions before they can drain
        budget. At the ad set level, Bir automates budget allocation and scaling decisions, raising spend for ad sets
        that hit performance targets, and duplicating successful ones to expand reach without disrupting the original.
        Campaign-level rules act as guardrails, enforcing spend caps, detecting cost spikes, and pausing campaigns
        showing signs of volatility.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir&rsquo;s automation covers a wide range of optimization tasks:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Pausing underperforming ads, ad sets, and campaigns based on CPA, ROAS, or conversion thresholds.</li>
        <li>Gradually increasing budgets for top performers as they prove consistent results, using step increases tied to custom metrics.</li>
        <li>Reducing or pausing budgets for assets that show declining efficiency, either instantly or through slow, staged reductions.</li>
        <li>Resetting budgets or campaign status daily to avoid overreacting to short-term swings.</li>
        <li>Managing creative fatigue by comparing short-term performance signals to longer-term baselines and rotating out declining assets.</li>
        <li>Enforcing total spend caps, and detecting anomalies in cost-per-click (CPC), cost-per-thousand impressions (CPM), or total spend.</li>
        <li>Triggering actions based on audience activity, such as pausing campaigns during off-peak hours and restarting before peak times.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Bir&rsquo;s rule system is flexible enough to build advanced, layered automations. For example, you can use
        multiple conditions and time windows to ensure that a budget increase only happens when several metrics align,
        such as ROAS above target, spend pacing on track, and conversion volume above a minimum. This reduces the risk
        of making changes based on random fluctuations.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams managing many accounts, Bir&rsquo;s ability to duplicate rules and apply them across accounts is a
        major time saver. Instead of rebuilding logic for every new campaign or client, you set up a rule once and push
        it everywhere it fits. This is especially valuable for agencies or businesses with multiple brands and
        markets.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is a system where your campaigns are checked and adjusted around the clock, with no waiting for
        someone to log in and review the data. Bir&rsquo;s automation does not replace strategic planning or creative
        direction, but it does remove the manual, execution-heavy work that slows down small teams. The focus shifts
        from chasing down performance issues to making higher-level decisions about what to test next and where to
        invest for growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-bir-automates-ad-optimization-across-every-campaign-and-account" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Bir automates ad optimization across every campaign and account
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-bir-automates-ad-optimization-across-every-campaign-and-account-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Bir automates ad optimization across every campaign and account
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
