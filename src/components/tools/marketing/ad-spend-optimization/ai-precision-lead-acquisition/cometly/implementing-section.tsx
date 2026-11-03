import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Launching Cometly for ad spend optimization means connecting your ad platforms, CRM, and website tracking into
        one system that delivers a unified, revenue-linked view of every touchpoint. The process is shorter for small
        businesses with standard tools, thanks to Cometly&rsquo;s pre-built connectors and native integrations. Most of
        the work is in mapping your real conversion events and cleaning up data, not in custom code or lengthy IT
        projects.</p>
      <p className="text-base text-white shadow-text pt-3">
        Going live with Cometly starts by identifying every system that touches your marketing data. For most small
        businesses in Miami-Dade, Broward, or Palm Beach, this means your ad accounts (like Meta and Google), your CRM,
        your website forms, and any payment processors like Stripe. Cometly&rsquo;s 70+ native integrations, including
        direct Stripe connections, mean you do not wait for custom integrations or manual data exports. This shortens
        setup by letting you connect each source through a guided process in the Cometly interface.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next step is server-side tracking. Cometly replaces unreliable browser pixels with server-level event
        capture, so you do not lose conversions to ad blockers or privacy updates. This is not a heavy lift for most
        teams. The platform provides pre-built scripts and clear instructions for capturing events like purchases, form
        fills, or calls directly from your server. For Meta, you set up the Conversion API; for Google, Enhanced
        Conversions. Cometly walks you through event deduplication, which prevents double-counting when both pixel and
        server events fire. You test each event with tools like Meta Events Manager or Google Tag Assistant before
        pushing live.</p>
      <p className="text-base text-white shadow-text pt-3">
        Phased rollout is the best approach for most small teams. Start by connecting your highest-value conversion
        events, those that drive revenue or qualified leads. Once you see accurate, real-time data for these, expand
        tracking to secondary actions. This lets you validate results and spot errors early, instead of troubleshooting
        across your entire funnel at once. Weekly check-ins during rollout keep the process on track and let you address
        any gaps in data capture or mapping.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cometly&rsquo;s templated dashboards speed up reporting. Instead of building custom views from scratch, you
        select from pre-configured templates that show <GlossaryLink slug="cost-per-lead">cost per lead</GlossaryLink>,
        cost per enrollment, or client acquisition cost by source. For most small businesses, this means you can see the
        numbers that matter in days, not weeks. Alerts flag sudden metric changes, like a spike in cost per call, so you
        can act before budget is wasted.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data validation is part of go-live, not an afterthought. Cometly recommends running browser-based and
        server-side tracking in parallel for two to four weeks. This lets you compare conversion counts and spot what
        browser tracking missed. You confirm deduplication is working before switching fully to server-side data as your
        source of truth. Once validated, Cometly automates the process of sending enriched conversion events back to ad
        platforms, so algorithms train on real results, not modeled guesses.</p>
      <p className="text-base text-white shadow-text pt-3">
        The last step is connecting Cometly to your budget allocation process. With all channels and conversions
        unified, the platform&rsquo;s AI recommendations can identify which campaigns are producing real revenue and
        which are wasting spend. Dynamic budget reallocation can be enabled, letting Cometly shift spend toward top
        performers automatically based on real-time data. For small teams, this means you do not need to check
        dashboards daily or make manual adjustments, Cometly handles the tactical moves, and you focus on strategy.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, the fastest path to launch is: connect your key data sources using Cometly&rsquo;s integrations,
        implement server-side tracking for high-value events, validate data accuracy with parallel tracking, use
        templated dashboards for reporting, and enable automated budget reallocation once you trust the numbers. Small
        teams with standard systems and clean data can go live in days. The work is front-loaded into setup and
        validation, not ongoing manual effort.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-launch-cometly-in-your-environment-and-what-shortens-the-timeline" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it takes to launch Cometly in your environment and what shortens the timeline
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-launch-cometly-in-your-environment-and-what-shortens-the-timeline-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it takes to launch Cometly in your environment and what shortens the timeline
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
