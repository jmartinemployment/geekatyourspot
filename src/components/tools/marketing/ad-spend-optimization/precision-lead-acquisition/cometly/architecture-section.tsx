import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Cometly&rsquo;s architecture is designed to unify fragmented marketing data into a single, reliable system that
        connects ad spend directly to actual sales outcomes. It works by integrating with your ad platforms, website,
        CRM, and payment processors, bringing all touchpoints and revenue data into one place. This approach eliminates
        the confusion of conflicting dashboards and makes budget decisions evidence-based, not guesswork.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the core is server-side tracking infrastructure. Instead of relying on browser events, Cometly captures
        conversions at the server level, storing every key action, clicks, form fills, purchases, with a persistent
        identifier. This setup bypasses browser privacy restrictions and ad blockers, ensuring that conversion data is
        complete and accurate. For Meta, Cometly connects through the Conversion API; for Google, it uses Enhanced
        Conversions. Both allow the platform to send enriched, first-party data directly to the ad platforms&rsquo;
        APIs, improving signal quality and match rates.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cometly supports over 70 native integrations, including Stripe for revenue data. This means you can connect your
        ad accounts, CRM, and payment processor, so every conversion is tied back to the campaign, ad set, and creative
        that drove it. For teams running self-serve or e-commerce models, Stripe integration closes the loop between ad
        clicks and real revenue without manual intervention. CRM integration transforms marketing data into revenue
        data, so you see not just leads or signups, but which campaigns actually close deals and generate cash flow.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&rsquo;s data model is built around identity persistence and data stitching. Every user
        interaction, across devices, sessions, and channels, is tracked using unique identifiers. When a prospect
        clicks an ad, Cometly stores the click ID server-side and links it to every future action, even if the user
        switches devices or returns days later. This solves the cross-device attribution problem that plagues
        pixel-based tracking. Data stitching matches identifiers across ad platforms, website events, CRM entries, and
        payment records, creating a unified customer journey from first ad click to closed-won deal.</p>
      <p className="text-base text-white shadow-text pt-3">
        Deduplication is handled at the infrastructure level. When both <GlossaryLink slug="tracking-pixel" className="text-[#0B162A] hover:underline">pixel
        tracking</GlossaryLink> and server-side events are running, Cometly uses event_id and transaction_id fields to
        ensure that conversions are only counted once, even if they show up in multiple systems. This prevents inflated
        numbers and gives you a true read on campaign performance. Validation tools like Meta&rsquo;s Events Manager and
        Google&rsquo;s Tag Assistant are used to confirm that events are firing correctly and that deduplication is
        working as intended.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cometly&rsquo;s architecture includes automated feedback loops to ad platforms. Once enriched conversion data is
        captured and stitched, it is sent back to Meta, Google, and TikTok through their server-side APIs. This keeps
        the ad platforms&rsquo; algorithms fed with timely, accurate signals, so they can optimize targeting and bidding
        toward real business outcomes. Conversion data is sent within 24-48 hours of the event, ensuring that feedback
        is fast enough to make a difference in ongoing campaigns (<a id={`tools-marketing-precision-lead-acquisition-cometly-architecture-source-cometly-com${idSuffix}`} href="https://www.cometly.com/post/centralized-ad-performance-dashboard" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Cometly</a>,
        as of Oct 29, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        The dashboard layer brings all this data together. You get a unified view of cost per lead, cost per call, cost
        per enrollment, and <GlossaryLink slug="customer-acquisition-cost" className="text-[#0B162A] hover:underline">client
        acquisition cost</GlossaryLink>, broken down by channel, campaign, and creative. Alerts can be configured for
        significant changes in key metrics, so teams can act quickly if something shifts. Weekly reporting cycles are
        built in, balancing the need for fast action with the risk of overreacting to daily noise.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cometly&rsquo;s architecture is designed for extensibility and reliability. The platform can be configured to
        match your attribution model, business rules, and reporting needs. It scales from a handful of campaigns to
        complex, multi-channel setups without losing accuracy or speed. By connecting every system, ad platforms, CRM,
        payment processor, and website, Cometly delivers a single source of truth that small businesses can trust for
        every budget decision.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="cometlys-architecture-integrations-and-data-handling-explained" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Cometly&rsquo;s Architecture, Integrations, and Data Handling Explained
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
              <h2 id="cometlys-architecture-integrations-and-data-handling-explained-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Cometly&rsquo;s Architecture, Integrations, and Data Handling Explained
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
