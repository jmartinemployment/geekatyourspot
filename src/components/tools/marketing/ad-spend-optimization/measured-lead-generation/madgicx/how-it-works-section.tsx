import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Madgicx automates lead generation by mapping, optimizing and managing every stage of your ad funnel, from
        audience discovery to budget allocation. Its system breaks down the entire flow into clear, data-driven
        steps that replace manual guesswork with targeted, AI-powered actions. For a small business, that means
        Madgicx continuously runs, tests and adapts campaigns on Meta, Google and TikTok, using live signals to
        decide what to spend, who to show ads to, and when to rotate creative.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process starts with tracking and validation. Madgicx requires all event and conversion signals to be
        mapped and verified before it touches a live ad account. It deploys server-side <GlossaryLink slug="tracking-pixel" className="text-[#0B162A] hover:underline">tracking
        pixels</GlossaryLink> across connected ad networks and checks that every conversion, form fill, click,
        purchase, feeds back cleanly. This step is non-negotiable: no optimization or automation is switched on
        until the data is accurate and complete. This baseline protects your spend from being wasted on bad signals
        or broken <GlossaryLink slug="marketing-attribution" className="text-[#0B162A] hover:underline">attribution</GlossaryLink>.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once tracking is solid, Madgicx connects to your ad platforms and CRM. It authenticates through secure <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink> connections,
        pulling in pipeline and sales data so the system can see not just clicks, but which leads actually turn into
        revenue. This is crucial for businesses with longer sales cycles or high-consideration purchases. Instead of
        optimizing only for cheap clicks, Madgicx learns from the data on who buys, how long it takes, and what
        touchpoints matter along the way.</p>
      <p className="text-base text-white shadow-text pt-3">
        Campaigns are then launched and monitored in what Madgicx calls copilot mode. Here, strict daily spend caps
        and safety boundaries are set, and every optimization is surfaced as a recommendation before going live. The
        platform flags which <GlossaryLink slug="ad-set" className="text-[#0B162A] hover:underline">ad sets</GlossaryLink> are
        underperforming, suggests budget reallocations, and even pauses or scales campaigns based on real-time
        results. Nothing runs wild: every change is logged, and manual approval is required before automation takes
        over. This builds trust in the system’s logic and lets you see exactly how each decision is made.</p>
      <p className="text-base text-white shadow-text pt-3">
        Madgicx’s automation engine then goes to work on segmentation and creative. Audience Launcher lets you
        deploy over 100 pre-built audiences across your <GlossaryLink slug="sales-funnel" className="text-[#0B162A] hover:underline">sales
        funnel</GlossaryLink>, prospecting, <GlossaryLink slug="retargeting" className="text-[#0B162A] hover:underline">retargeting</GlossaryLink>, <GlossaryLink slug="customer-retention" className="text-[#0B162A] hover:underline">retention</GlossaryLink>,
        and more (<a id={`tools-marketing-measured-lead-generation-madgicx-how-it-works-source-madgicx-com${idSuffix}`} href="https://madgicx.com/blog/how-to-scale-facebook-ads" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Madgicx</a>,
        as of Oct 24, 2026). These are not static lists: the system uses AI to analyze historical data, current
        trends, and live user behavior to predict which segments will convert. It pauses unprofitable groups
        instantly and expands or contracts audiences based on performance. For example, a business can avoid burning
        budget on cold leads that never convert, or stop showing intro ads to repeat buyers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative production is handled by the AI Ad Generator, which bulk-creates image, video and copy variants in
        minutes. Instead of waiting for a designer or writer to produce new ads, Madgicx combines proven elements,
        top headlines, best visuals, trending formats, into dozens of launch-ready options. This keeps ad fatigue at
        bay, since the platform rotates fresh creative as soon as performance drops. Every variant is tested, with
        results fed back into the system to guide the next round of production.</p>
      <p className="text-base text-white shadow-text pt-3">
        The system’s automation logic is not limited to creative or targeting. Madgicx manages bids, budgets and
        exclusions at every level. It coordinates bidding across campaigns to avoid internal competition,
        reallocates spend from underperformers to winners, and applies strict exclusion rules to prevent wasted
        impressions on past buyers or irrelevant segments. <GlossaryLink slug="bid-cap" className="text-[#0B162A] hover:underline">Bid
        caps</GlossaryLink>, <GlossaryLink slug="cost-cap" className="text-[#0B162A] hover:underline">cost caps</GlossaryLink> and <GlossaryLink slug="value-optimization" className="text-[#0B162A] hover:underline">value
        optimization</GlossaryLink> rules ensure every dollar is spent for maximum return, not just lowest <GlossaryLink slug="cost-per-click" className="text-[#0B162A] hover:underline">cost
        per click</GlossaryLink>.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting is unified and real-time. Madgicx’s dashboards combine data from Meta, Google, TikTok, Shopify and
        more into a single view. One-Click Reports are generated on demand, showing which campaigns, creatives and
        audiences are driving leads and sales. The platform benchmarks performance against your own history and
        across clients, so you see not only what is working, but why. Every optimization and automation step is
        documented, giving a clear audit trail for every change.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, this step-by-step automation means you spend less time on manual
        checks, creative <GlossaryLink slug="customer-churn" className="text-[#0B162A] hover:underline">churn</GlossaryLink> and
        guesswork. Madgicx’s process replaces the daily grind of tweaking bids, building audiences, and rotating ads
        with a system that adapts in real time to market shifts and platform changes. The result is stable cost per
        lead, predictable scaling, and a pipeline that grows without burning out your team or your budget.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="every-step-in-madgicxs-automation-process-is-built-for-real-time-full-funnel-control" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Every step in Madgicx’s automation process is built for real-time, full-funnel control
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
              <h2 id="every-step-in-madgicxs-automation-process-is-built-for-real-time-full-funnel-control-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Every step in Madgicx’s automation process is built for real-time, full-funnel control
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
