import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma is built for small businesses and agencies that want to reduce wasted ad spend and manual oversight
        across Google, Meta, and Microsoft Ads. The right fit for Adzooma means your ad budget is large enough that
        wasted spend and dashboard fatigue are real costs, but your team is too small to keep up with every channel by
        hand. If you are running ads across multiple platforms and struggling to track performance or make timely
        adjustments, Adzooma&rsquo;s unified dashboard, automation, and alerting are designed for you.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&rsquo;s pricing model is tiered by refresh frequency and rule capacity, not by ad spend or number
        of accounts. The Free plan gives you monthly refreshes, up to three active alerts, and core automation features.
        Silver and Gold plans increase the frequency of data refreshes (weekly or daily), allow more active alerts, and
        unlock custom alert rules and client branding for reports. There is no per-account or per-user charge, every
        plan supports unlimited ad accounts, so you do not pay more as your campaign count grows. This is a critical
        difference from tools that scale price with ad volume, making Adzooma a cost-stable choice for small businesses
        that want to grow without penalty.</p>
      <p className="text-base text-white shadow-text pt-3">
        When evaluating fit, start with the size and complexity of your ad operations. If you run a single campaign on
        one platform, the value is limited; Adzooma shines when you have multiple campaigns or channels and need to see
        everything in one place. The platform&rsquo;s automation is best used by teams that want to catch issues before
        they cost real money, overspend, dead ads, missing tracking, or <GlossaryLink slug="ad-fatigue" className="text-[#0B162A] hover:underline">ad
        fatigue</GlossaryLink>, and do not want to rely on slow, manual spreadsheet reviews. The more often you need to
        shift budget, pause poor performers, or react to changing results, the more value you get from Adzooma&rsquo;s
        real-time alerts and recommendations.</p>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma is not a fit for businesses that want deep custom development, API-level integrations, or scripting. It
        is a configuration-driven tool: all customization is done through its dashboard, not code. This keeps the
        platform simple and reliable for small teams, but means it is not the right choice if your workflow depends on
        custom scripts or external automation. For most South Florida small businesses, this is a strength rather than a
        weakness: you get a stable, low-maintenance system that does not require technical staff to keep running.</p>
      <p className="text-base text-white shadow-text pt-3">
        The pricing model&rsquo;s key strength is predictability. You can start for free and only pay if you need faster
        data refresh, more alerts, or client branding. There are no hidden fees or locked features that force an upgrade
        before you are ready. This lets you match the plan to your real needs, monthly refreshes may be enough for a
        small team with modest spend, while daily refreshes and unlimited alerts suit agencies or businesses that want
        to react to changes as they happen. Because every plan allows unlimited ad accounts, you do not face surprise
        charges as you add more brands or campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        When comparing Adzooma to other platforms, weigh the value of unified cross-channel management, automation, and
        proactive alerting against the cost of manual oversight or more complex tools. Adzooma&rsquo;s fit is strongest
        for teams that want to save hours each week, reduce errors, and make smarter decisions without adding headcount.
        If your ad spend is high enough that a missed optimization costs more than the platform&rsquo;s paid plan, the
        investment pays for itself quickly. For businesses that need more than reporting, actionable recommendations,
        one-click fixes, and real-time protection, Adzooma&rsquo;s automation engine is a practical answer.</p>
      <p className="text-base text-white shadow-text pt-3">
        A buyer should also consider support and implementation. Adzooma&rsquo;s setup is straightforward, but the real
        advantage comes from configuring rules, alerts, and automations to match your business. This is where Geek @
        Your Spot steps in: by handling the initial mapping, rule definition, and ongoing tuning, they ensure you get
        the full value from the platform without the trial and error of going it alone. This is not an extra cost built
        into Adzooma&rsquo;s pricing, but a service that turns a generic tool into a solution tailored for South Florida
        small businesses.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, judge Adzooma by the time and budget it saves you, not just the feature list. If you are losing
        hours to manual checks, missing quick wins, or letting budget slip through unnoticed, the platform&rsquo;s
        automation and unified view are a direct fix. The pricing model is transparent and scales with your need for
        speed and control, not with your ad volume. For small businesses in Miami-Dade, Broward, and Palm Beach, Adzooma
        is a strong fit when you want to get more from your ad spend without adding complexity or cost.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-adzoomas-fit-and-pricing-for-your-small-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge Adzooma&rsquo;s fit and pricing for your small business
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
              <h2 id="how-to-judge-adzoomas-fit-and-pricing-for-your-small-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge Adzooma&rsquo;s fit and pricing for your small business
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
