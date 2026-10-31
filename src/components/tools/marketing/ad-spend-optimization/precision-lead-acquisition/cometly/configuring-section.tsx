import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Configuring Cometly for ad spend optimization means setting up the platform&rsquo;s own automation rules,
        attribution models, and integrations to match your business&rsquo;s real workflow. Cometly is not a
        plug-and-play tool that works out of the box for every small business. It requires deliberate configuration,
        especially if you want to trust its decisions with your real ad budget. Geek @ Your Spot handles the technical
        mapping and connects Cometly to your ad accounts, CRM, and website tracking so the system reflects your actual
        sales funnel, not just the ad clicks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cometly&rsquo;s automation logic starts with attribution. The platform lets you choose and customize
        multi-touch attribution models, which means you can decide how credit is split between multiple ad clicks,
        channels, or campaigns. This is critical if your leads come in through several touchpoints before closing. The
        system supports server-side tracking, so it captures conversions that browser pixels miss, calls, form fills,
        and offline sales included. Cometly&rsquo;s configuration includes setting up deduplication rules, which prevent
        the same sale from being counted twice when different platforms claim credit for the same customer. These rules
        are not optional. If you skip this step, your dashboards will show inflated results and you&rsquo;ll end up
        scaling the wrong campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation in Cometly goes beyond attribution. You configure real-time budget reallocation rules that shift
        spend from underperforming ad sets to those delivering real revenue. These rules operate on live data, not
        delayed platform reports, so your budget moves as soon as a trend appears, not after days or weeks of wasted
        spend. You can set thresholds for cost per lead, cost per sale, or other metrics, and Cometly will automatically
        pause or scale campaigns based on these targets. Geek @ Your Spot works with you to define these thresholds in
        plain language and then implements them in the platform, so you do not have to navigate a maze of technical
        settings.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative analytics is another area where Cometly&rsquo;s logic is set up. The platform tracks performance at the
        individual ad creative level, not just at the campaign or ad set. You can see which images, videos, or copy
        variations drive real conversions, and the system can flag when <GlossaryLink slug="ad-fatigue">creative
        fatigue</GlossaryLink> is driving up your acquisition costs. Alerts for significant metric changes, like a spike
        in cost per call or a sudden drop in <GlossaryLink slug="conversion-rate">conversion rate</GlossaryLink>, are
        configured as part of the onboarding. These alerts are what let you act before wasted spend adds up, rather than
        after the fact.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cometly&rsquo;s extension mechanism is integration-based, not scripting or SDK-driven. The platform offers
        native integrations with over 70 services, including Stripe for revenue tracking and leading CRMs for pipeline
        and closed-won data. There is no open API for custom coding or scripting business logic; all automation and
        extensions happen through configuration and supported integrations. Geek @ Your Spot&rsquo;s role is to connect
        the right data sources, map fields, and validate that the data flows correctly, especially where the
        platform&rsquo;s out-of-the-box integrations do not match your setup exactly. This is where most DIY attempts
        stall: mapping the right fields between your CRM, payment processor, and ad platforms is not a one-click job. The
        consequences of getting it wrong are real, misattributed revenue, broken feedback loops, and wasted ad spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business in South Florida, the value in Cometly&rsquo;s configuration is not just in getting the
        system running, but in making it reflect your actual business logic. Geek @ Your Spot walks you through each
        decision: which events count as conversions, how to handle multi-channel leads, what thresholds to set for
        pausing or scaling spend. The team validates the setup by running parallel tracking with your old dashboards, so
        you can see the difference in conversion counts and attribution before flipping the switch. Once live,
        Cometly&rsquo;s rules and automation keep your ad spend aligned with real business outcomes, not just
        platform-reported metrics.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Multi-touch attribution model selection and customization for your funnel.</li>
        <li>Server-side tracking setup to capture every conversion, including offline and cross-device events.</li>
        <li>Deduplication rules to prevent double-counting when platforms overlap.</li>
        <li>Real-time budget reallocation based on live revenue and cost-per-result thresholds.</li>
        <li>Creative analytics configuration for granular performance tracking and creative fatigue alerts.</li>
        <li>Native integrations with ad platforms, CRMs, and Stripe for unified revenue tracking.</li>
        <li>No open scripting or SDK, extension is through supported integrations and configuration.</li>
        <li>Field mapping and data validation to ensure every dollar and conversion is tracked correctly.</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-cometly" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Cometly
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
              <h2 id="configuring-cometly-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Cometly
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
