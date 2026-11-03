import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ manages digital ad campaigns by using its own AI-powered engine to make real-time decisions about
        where your money goes. The platform watches how each ad and channel performs, then shifts budget and updates
        bids automatically to get more qualified leads for every dollar you spend. This means you are not stuck with
        static settings or waiting for a person to notice problems, LocaliQ&rsquo;s system works around the clock,
        moving your budget to what works and away from what does not.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of LocaliQ&rsquo;s optimization is continuous, data-driven adjustment. As your campaigns run, the
        platform collects signals from clicks, calls, lead forms, and website actions. It uses this live data to spot
        which ads are bringing in real prospects and which are just burning your budget. For search ads,
        LocaliQ&rsquo;s proprietary machine learning engine tests keyword bids by audience before they go live, which
        means you avoid spending on broad, low-converting searches. Only keywords that show strong intent, like
        &ldquo;emergency plumber in Fort Lauderdale&rdquo; instead of &ldquo;how to fix a leaky pipe&rdquo;, get your
        budget. The system then fine-tunes bids, ad copy, and placements within each campaign, so your ads stay
        competitive without overpaying.</p>
      <p className="text-base text-white shadow-text pt-3">
        On social channels, LocaliQ&rsquo;s platform reviews performance across Facebook, Instagram, TikTok, and
        Snapchat, then automatically pushes your spend toward the channels and ad types that are generating real leads
        or sales. If a certain ad or audience segment is underperforming, the system quickly diverts funds away and
        reallocates to what is working. This is not just a scheduled refresh, LocaliQ&rsquo;s technology is always on,
        making micro-adjustments as results come in. The platform&rsquo;s cross-channel optimization means your daily
        or monthly budget is not locked to one network or campaign, but can flow wherever it gets the best outcome.</p>
      <p className="text-base text-white shadow-text pt-3">
        For local businesses, geographic targeting is handled with precision. LocaliQ locks down your service area
        using geofencing and smart-radius controls. Your ads only show to people in the zip codes, cities, or radii
        that match your real business footprint. This prevents wasted impressions and spend on people who are too far
        away to ever buy. If you want to reach only customers within a ten-mile radius, LocaliQ enforces that boundary
        and monitors whether those local impressions are converting.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget controls in LocaliQ are flexible and layered. You can set limits at the account, campaign, or ad set
        level, and choose daily or lifetime caps. The system will never let you overspend beyond these limits, and if
        a campaign hits its cap, spend pauses until you adjust the setting. This is especially useful for small
        businesses with tight budgets that cannot risk a runaway spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ad creative is managed through ongoing optimization, not set-and-forget. LocaliQ uses automated <GlossaryLink slug="a-b-testing" className="text-[#0B162A] hover:underline">A/B
        testing</GlossaryLink> to compare different headlines, images, and calls to action, then gradually shifts
        budget to the combinations that bring in the most leads or sales. Underperforming ads are identified and
        deprioritized automatically, so you do not have to manually review every asset. This keeps your campaigns
        fresh and competitive, even if you do not have time to create new ads every week.</p>
      <p className="text-base text-white shadow-text pt-3">
        All of this optimization is surfaced in a unified dashboard. LocaliQ&rsquo;s reporting shows you which
        channels, keywords, and creatives are producing results, and connects ad activity directly to leads, calls,
        and sales. This means you can see at a glance what is working and what is not, without having to pull reports
        from multiple ad platforms. For businesses that integrate their CRM, LocaliQ&rsquo;s ROAS (Return on Ad Spend)
        reporting ties every dollar spent to actual revenue, so you know which campaigns are paying off and which need
        to be cut.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is a system that does not just automate the busywork of campaign management, it actively works to
        protect your budget and improve your outcomes. Instead of letting underperforming ads run for months or
        missing out on high-intent leads, LocaliQ&rsquo;s engine finds and fixes these issues in real time. This is
        how small businesses in South Florida can keep up with bigger competitors, even on a modest budget.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Real-time bid and budget optimization for search and social ads, driven by live performance data.</li>
        <li>Automated keyword testing and adjustment to focus spend on high-intent, local searches.</li>
        <li>Cross-channel budget reallocation to maximize leads and minimize wasted spend.</li>
        <li>Precise geofencing and smart-radius targeting to match your actual service area.</li>
        <li>Automated A/B testing and creative refresh to keep ads competitive.</li>
        <li>Unified dashboard with direct tie between ad spend and revenue, including ROAS reporting with CRM integration.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ&rsquo;s approach means you do not have to become an ad expert or hire an expensive agency to get
        results. The platform&rsquo;s own AI and automation do the heavy lifting, letting you focus on running your
        business while your ad budget works harder for you.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-localiqs-optimization-engine-actually-runs-campaigns-and-allocates-spend" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How LocaliQ&rsquo;s optimization engine actually runs campaigns and allocates spend
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
              <h2 id="how-localiqs-optimization-engine-actually-runs-campaigns-and-allocates-spend-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How LocaliQ&rsquo;s optimization engine actually runs campaigns and allocates spend
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
