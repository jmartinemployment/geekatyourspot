import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s configuration for ad spend optimization centers on how it collects, attributes, and acts on
        your marketing data. The platform&rsquo;s rules and logic are built around first-party tracking, flexible
        attribution models, and automation layers that translate raw data into budget decisions. Geek @ Your Spot
        configures these elements to fit your business, so you get the right data and automations for your actual
        campaigns, not just a generic setup.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of Triplewhale&rsquo;s logic is its use of the Triple Pixel, a server-side tracking pixel that captures
        ad clicks, post-click actions, and conversions even when browser-based tracking fails. Unlike standard Meta or
        Google pixels, Triple Pixel collects first-party purchase data at the ad level, giving you a complete customer
        journey from the first impression to the final sale. This is especially important for small businesses dealing
        with ad blockers or privacy changes that break native tracking. Geek @ Your Spot makes sure this pixel is
        installed and mapped correctly, so your data is both accurate and actionable.</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s attribution engine is where much of the decision logic lives. You choose from several
        attribution models, first-click, last-click, linear, data-driven, and more, each with its own rules for how
        credit is assigned to different touchpoints. For example, Total Impact Attribution blends multi-touch tracking
        with post-purchase survey responses, so you see not just what was clicked, but what actually influenced a
        customer&rsquo;s purchase. This matters when you want to know if a YouTube ad or a TikTok video was the real
        driver behind a sale, not just what the ad platforms claim. Geek @ Your Spot helps you select and tune the
        attribution model that fits your business goals, and sets up the reporting to match.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation in Triplewhale surfaces in a few places. The platform can automatically generate performance reports,
        flag underperforming creative, and recommend budget shifts based on real-time results. Moby AI,
        Triplewhale&rsquo;s recommendation engine, works directly on top of your attribution data. It reviews campaign
        performance, identifies which ads are bringing in profit, and suggests step-by-step actions, such as pausing
        budget on tired creative or scaling up winners. Automations can be set to trigger alerts, schedule reports, or
        even suggest daily changes to your media buying strategy. Geek @ Your Spot configures these automations according
        to your team&rsquo;s workflow, so you get the right notifications and recommendations without information
        overload.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative optimization is another layer of logic. Triplewhale&rsquo;s Moby Agents analyze hundreds of ad
        variations, rating each by real financial outcomes, conversion value, click-through rate, and <GlossaryLink slug="return-on-ad-spend">return
        on ad spend</GlossaryLink> (ROAS). The platform doesn&rsquo;t just show you which creative is popular; it tells
        you which one drives sales or leads. This is a major shift from platforms that only report surface-level
        engagement. With the Creative Cockpit, you can audit every creative asset, spot fatigue early, and generate new
        high-performing variations in minutes. Geek @ Your Spot sets up creative reporting dashboards and ensures your
        team knows how to use the insights to drive real results.</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s rules for deduplication are critical when you run ads across multiple platforms. The
        platform&rsquo;s logic assigns credit to a single traffic source, preventing double-counting when both Google
        and Meta try to claim the same sale. This is handled through fractional credit distribution and deduplication
        logic in the Clicks &amp; Deterministic Views model. The result is that your reported revenue matches what
        actually lands in your Shopify account, not an inflated total from overlapping dashboards. Geek @ Your Spot
        reviews these settings with you and tests for consistency before you rely on the numbers for budget
        decisions.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with more complex needs, Triplewhale offers advanced segmentation, custom dashboards, and
        product-level analytics (in higher tiers). You can filter data by campaign, channel, product, or customer
        segment, and set up custom metrics that persist across sessions. While Triplewhale does not currently expose a
        public API or scripting environment for custom automation, its configuration options are broad enough for most
        small business use cases. Geek @ Your Spot&rsquo;s role is to make sure your setup matches your business logic,
        mapping data fields, configuring attribution, setting up automations, and training your team to use the
        dashboards effectively.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Triplewhale&rsquo;s configuration is about making sure the platform&rsquo;s tracking, attribution,
        and automation logic fit your actual business, not just the defaults. Geek @ Your Spot closes the gap by handling
        the technical setup, tuning the rules, and connecting the platform to your real-world workflows. The result is a
        system that not only tracks your ad spend, but turns that data into decisions you can trust.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="which-rules-logic-and-automations-get-configured-in-triplewhale-for-ad-spend-optimization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Which rules, logic, and automations get configured in Triplewhale for ad spend optimization
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="which-rules-logic-and-automations-get-configured-in-triplewhale-for-ad-spend-optimization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Which rules, logic, and automations get configured in Triplewhale for ad spend optimization
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
