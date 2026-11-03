import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Going live with Google Performance Max for precision lead acquisition means your campaigns start
        running on AI-driven automation that fits your current ad setup, not a blank slate. The process is short
        because Google Performance Max connects directly to the ad platforms and data sources you already use, and
        the rollout follows a clear sequence: connect, configure, test, and launch. Pre-built connectors and
        templated setups remove the need for custom development, so you can see results in days, not weeks.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is connecting Google Performance Max to your Google Ads, Meta, or other supported ad
        accounts. This step is quick because Google Performance Max is built for direct integration. You do not need
        to move your campaigns or start over. Instead, Google Performance Max plugs in and begins analyzing your
        live campaigns, keywords, and creative assets. Where most platforms require manual export and import of
        data, Google Performance Max works with your existing structure, which shortens the technical setup.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next comes configuration. Here, the system applies your local targeting rules, budget limits, and campaign
        goals. For small businesses in Miami-Dade, Broward, and West Palm Beach counties, this means setting precise
        geographic boundaries, down to zip codes, so your ads only reach buyers in your true service area. Google
        Performance Max’s location-level controls and audience filters make this step fast and reliable. You do not
        have to build complex rules by hand or worry about a missed setting draining your budget on out-of-area
        clicks.</p>
      <p className="text-base text-white shadow-text pt-3">
        After configuration, you move into testing and validation. Google Performance Max runs a live simulation of
        your campaigns, using historical data and real-time signals to check that your ads are being delivered to
        the right audience, with the right message, and at the right time. This test phase is not a dry run on fake
        data, it is a safe, real-world check that catches errors before they cost you. The system flags any creative
        assets or targeting settings that could lead to wasted spend, and you get actionable recommendations before
        launch.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, you launch. Google Performance Max takes over the daily work of adjusting bids, rotating creative,
        and pausing underperforming ads. Unlike a manual process, you do not need to log in every day to check
        performance or make small tweaks. Google Performance Max’s automation monitors performance in real time and
        acts instantly when it detects issues. For example, if a headline starts to lose effectiveness or a certain
        keyword drains budget with no conversions, the system either swaps in a new asset or shifts spend to what is
        working. This is especially important for teams with no dedicated ad manager, Google Performance Max does
        not wait for you to notice a problem.</p>
      <p className="text-base text-white shadow-text pt-3">
        The entire process is designed to minimize downtime. Because Google Performance Max integrates with your
        existing tools and workflows, you do not have to retrain your team or pause ongoing campaigns. Most small
        businesses see their first automated optimizations within days of setup. The phased rollout, connect,
        configure, test, launch, means you are never locked out of your accounts or forced to switch everything at
        once. You can start with one campaign, validate results, and expand as you see fit.</p>
      <p className="text-base text-white shadow-text pt-3">
        What shortens go-live with Google Performance Max is the combination of direct integrations, templated setup
        flows, and automation that adapts to your current environment. There is no need for custom scripts, manual
        data mapping, or third-party middleware. You get a system that understands the realities of running local
        ads on a small budget, and you see the impact in how quickly you move from setup to real results.</p>
      <p className="text-base text-white shadow-text pt-3">
        For clients working with Geek @ Your Spot, the process is even more streamlined. The consultancy handles the
        initial connection and configuration, ensures your <GlossaryLink slug="data-quality">data quality</GlossaryLink> is
        up to standard, and guides you through the testing phase. You do not have to figure out the right campaign
        settings, audience rules, or creative formats on your own. The team applies best practices for local
        targeting, budget pacing, and creative rotation, tailored to your exact market and spend level. The result
        is a faster, safer go-live with no wasted steps.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, launching Google Performance Max in your existing ad environment is a matter of days, not weeks,
        because the system is built for direct integration, fast configuration, and real-time validation. You skip
        the long learning curve and the risk of costly mistakes. Instead, you get a tested, automated setup that
        starts protecting your budget and improving your results from the moment it goes live.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-go-live-with-google-performance-max-in-your-existing-ad-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it takes to go live with Google Performance Max in your existing ad environment
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-go-live-with-google-performance-max-in-your-existing-ad-environment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it takes to go live with Google Performance Max in your existing ad environment
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
