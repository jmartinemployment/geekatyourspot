import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The data structure and mapping decisions you make at the start of a Triplewhale deployment shape how accurately
        you can track, attribute, and optimize your ad spend. Triplewhale is built to centralize first-party data from
        Shopify, Meta, Google, TikTok, email, and SMS, but the way you map your sources and choose attribution rules
        determines how much clarity you get on what drives sales. For a small business, this is not a technical
        afterthought, it&rsquo;s the difference between trusting your numbers and chasing ghosts in your reporting.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first decision is which platforms and channels to connect, and how to assign each to a channel in
        Triplewhale&rsquo;s system. Triplewhale supports direct integration with Shopify and the major ad platforms, but
        you need to confirm that every ad account, store, and marketing tool is mapped to the right channel. If you run
        Facebook and Instagram ads from the same Meta account, both should be linked, but each campaign must be tagged
        so you can break out performance by platform. For Google, ensure all relevant campaigns, Search, Display,
        Shopping, are mapped, and email/SMS tools like Klaviyo or Mailchimp are connected for a full-funnel view.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next is the installation and configuration of the Triple Pixel. This is not just a code drop: the pixel must be
        placed on every page where customer actions happen, and configured to capture events like add-to-cart,
        checkout, and purchase. For businesses used to browser-based pixels, Triplewhale&rsquo;s server-side approach
        means you catch conversions that standard pixels miss (especially when ad blockers are active). You also need to
        decide whether to use custom pixel mapping for advanced attribution, essential if you have unique conversion
        events or want to tie offline actions (like phone orders or in-store pickups) back to digital campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Attribution model selection is the core mapping decision for ad spend optimization. Triplewhale offers multiple
        models, Total Impact, Clicks &amp; Deterministic Views, Triple Attribution, Linear, First Click, Last Click, and
        more. Each model splits conversion credit differently: Total Impact blends tracked digital touchpoints with
        customer-reported survey data, while Clicks &amp; Deterministic Views combines ad clicks and verified ad
        impressions. The right choice depends on your business goals. If you want to see which campaigns drive
        first-time awareness, First Click is useful. If your focus is on what closes sales, Last Click or Clicks &amp;
        Deterministic Views may be better. For most small businesses, a blended approach (like Total Impact) gives the
        most actionable answer, especially when paired with post-purchase surveys.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mapping post-purchase survey data is another step that sets Triplewhale apart. You can use built-in tools like
        Fairing or Kno to collect zero-party data, customers telling you directly what influenced their purchase. This
        data is then mapped to orders in Triplewhale, allowing the platform to adjust channel weights in its attribution
        models. For businesses that rely on word-of-mouth, influencer campaigns, or offline touchpoints, this mapping is
        the only way to capture those influences in your reporting. Without it, you risk undercounting the true impact of
        these channels.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data normalization and deduplication are handled by Triplewhale&rsquo;s backend, but you need to confirm that
        imported orders, customer records, and campaign IDs match across all sources. If you have duplicate orders from
        Shopify imports or mismatched customer emails between platforms, your attribution will be off.
        Triplewhale&rsquo;s validation tools help spot these issues early, but the setup phase is where you define the
        rules for how to treat duplicates, missing data, or edge cases (like refunds or multi-channel purchases). Geek @
        Your Spot will walk you through these decisions, so your dashboard reflects real revenue, not inflated or missing
        numbers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Custom metric mapping is available for businesses with unique reporting needs. You can define columns for metrics
        like average order value, <GlossaryLink slug="customer-acquisition-cost">new customer acquisition
        cost</GlossaryLink>, or blended ROAS, and ensure they persist across dashboard refreshes. This is especially
        useful if your team tracks KPIs that standard dashboards miss, or if you need to report on contribution margin,
        product journey, or other advanced metrics. Setting these up at the start saves hours of manual reporting
        later.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Map every ad account, store, and channel to the right source in Triplewhale.</li>
        <li>Install the Triple Pixel on all key pages and configure custom events as needed.</li>
        <li>Choose attribution models that answer your business questions about spend and sales.</li>
        <li>Integrate post-purchase survey tools and map responses to order data.</li>
        <li>Validate imported orders and customer records for duplicates and mismatches.</li>
        <li>Set up custom metrics for reporting on KPIs beyond standard ad platform data.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        The upfront mapping work in Triplewhale is what lets you trust your ad spend numbers. When done right, you get a
        single, reliable answer to which campaigns drive sales, how much each channel really costs to acquire a
        customer, and where to move budget for the highest return. For small businesses in Miami-Dade, Broward, and Palm
        Beach, this is the foundation for ad spend optimization that actually grows the business, not just reports on it.
        Geek @ Your Spot&rsquo;s role is to guide these decisions, ensure the mapping fits your real-world workflow, and
        troubleshoot any data mismatches before they become reporting headaches.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-mapping-choices-that-set-up-triplewhale-for-reliable-ad-spend-optimization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The data mapping choices that set up Triplewhale for reliable ad spend optimization
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-mapping-choices-that-set-up-triplewhale-for-reliable-ad-spend-optimization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The data mapping choices that set up Triplewhale for reliable ad spend optimization
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
