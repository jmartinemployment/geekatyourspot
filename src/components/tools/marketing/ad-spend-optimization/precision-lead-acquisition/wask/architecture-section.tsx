import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Wask&rsquo;s architecture is built to unify ad performance management for small teams by connecting directly to
        Google Ads and Meta Ads, holding all campaign data in a single dashboard, and surfacing actionable insights
        without the need for multiple logins or manual data pulls. The core of Wask is its AI agent, which acts as both a
        monitoring layer and an execution engine, constantly ingesting live data from both platforms and applying your
        configured rules in real time.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&rsquo;s integration layer connects to your ad accounts using secure API access. This means Wask can
        read campaign, ad set, and ad-level data, as well as push changes, like bid updates, budget reallocations, or
        pausing underperforming ads, directly to your accounts. All data flows into a unified analytics module, where
        performance across Google and Meta is tracked side by side. This removes the fragmentation that happens when
        teams rely on separate dashboards or export reports from each platform. You see spend, conversions, engagement,
        and <GlossaryLink slug="return-on-ad-spend" className="text-[#0B162A] hover:underline">return on ad
        spend</GlossaryLink> (ROAS) in one place, making cross-platform budget decisions straightforward.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wask&rsquo;s rule engine is central to how it operates. You can use pre-built templates or build your own logic
        with an if-this-then-that approach, using metrics like click-through rate (CTR), cost, impressions, or
        conversion rate as triggers. The system supports both simple and multi-step workflows, so you can automate
        everything from daily bid checks to more complex sequences like budget reallocation based on week-over-week ROAS
        changes. Each rule is tied to a specific campaign, ad set, or ad, and you maintain full control over which
        actions execute automatically and which require approval.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform also holds a comprehensive audit log, recording every automated action along with the condition
        that triggered it and the time it was executed. This audit trail is critical for small teams that need to
        explain changes to stakeholders, troubleshoot unexpected results, or ensure compliance with internal controls.
        You do not need to manually pull logs from Google Ads or Meta Ads; Wask surfaces every action in real time, so
        you always know what happened and why.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wask&rsquo;s analytics and reporting modules turn raw data into clear, actionable insights. The performance
        dashboard lets you compare campaigns, analyze creative performance, and track key metrics like CPA, ROAS, and
        conversion rates. Smart widgets and custom graphs let you visualize trends, spot anomalies, and benchmark
        results against industry norms or your own historical data. For teams that need to report up or across the
        business, Wask can generate owner-facing action reports that summarize what&rsquo;s working, what needs
        attention, and where budget should be shifted next.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative analysis is another layer in Wask&rsquo;s architecture. The system can flag ads suffering from creative
        fatigue, identify top-performing creatives, and surface opportunities for A/B testing. This is especially
        important for small teams without the bandwidth to manually review every ad variation. Wask&rsquo;s AI-powered
        analysis ensures weak ads do not keep running simply because nobody owns the optimization task, and it provides
        the evidence needed to justify creative refreshes or testing new approaches.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wask is built for flexibility. You can modify templates or design custom flows from scratch, adapting the system
        as your needs change. The platform supports instant start with pre-built templates, so you can begin optimizing
        right away, but it also allows for deep customization as your team grows more sophisticated. Every business
        maintains full control over rules, actions, and reporting, no black-box automation, no loss of visibility.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="wasks-architecture" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Wask&rsquo;s Architecture
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="wasks-architecture-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Wask&rsquo;s Architecture
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
