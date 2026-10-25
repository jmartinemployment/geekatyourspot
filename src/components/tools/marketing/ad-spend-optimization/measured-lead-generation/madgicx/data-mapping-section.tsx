import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The data decisions you make before deploying Madgicx have a direct impact on how well the platform can
        optimize your measured lead generation. The most important choices are how you map your customer journey,
        define conversion events, and structure your audience segments. If these are not clear and consistent from
        the start, Madgicx cannot deliver the full benefit of its automation and predictive analytics.</p>
      <p className="text-base text-white shadow-text pt-3">
        First, you need a clear event taxonomy, a structured list of every key action a prospect or customer can
        take, from first click to final sale. Madgicx depends on this mapping to track performance accurately and to
        know which touchpoints matter for optimization. Geek @ Your Spot works with you to audit your website,
        landing pages, and CRM to make sure every conversion event is tagged and tracked in a way Madgicx can read.
        This includes standard actions like form submissions and purchases, but also more nuanced signals such as
        repeat visits, content downloads, or calls from ads. If your data is scattered or inconsistent, the first
        task is to standardize these definitions across platforms.</p>
      <p className="text-base text-white shadow-text pt-3">
        Second, audience segmentation must be mapped to reflect your real sales funnel. Madgicx’s automation is
        built to manage multi-tiered funnels, moving prospects from cold acquisition through retargeting to
        conversion. This only works if your data can distinguish between new leads, repeat visitors, and past
        buyers. Geek @ Your Spot helps you define these segments using both your CRM and Madgicx’s own tools, such
        as Audience Launcher and Audience Studio. The goal is to automate strict exclusions (so you do not waste
        budget on past buyers with top-of-funnel ads) and to target each group with the right creative and bid
        strategy. This mapping is not one-size-fits-all: a B2B service will have different funnel stages than an
        e-commerce shop, and Madgicx needs to be configured to match.</p>
      <p className="text-base text-white shadow-text pt-3">
        Third, you have to decide what counts as a successful lead or conversion for your business. Madgicx can
        optimize for any event you define, form fills, phone calls, booked appointments, purchases, but it needs a
        single source of truth for each. If your team tracks leads in spreadsheets, your CRM, and ad platforms
        separately, you risk double-counting or missing key steps in the funnel. Geek @ Your Spot’s job is to
        reconcile these sources, set up server-side tracking where needed, and validate that every conversion is
        logged once and only once. This is especially important for small businesses with limited data science
        resources, as errors here can cause Madgicx to optimize for the wrong outcome.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fourth, you must map out how budget and bid rules should adapt to your business goals. Madgicx supports a
        range of bidding strategies, lowest cost, cost cap, value optimization, but the system needs to know your
        priorities. For example, do you want to maximize lead volume at a set <GlossaryLink slug="cost-per-acquisition">cost
        per acquisition</GlossaryLink>, or are you focused on driving only high-value conversions? Geek @ Your Spot
        configures these parameters based on your historical data and current targets, so Madgicx can adjust spend
        automatically as performance changes. This mapping also includes setting constraints like daily spend caps
        and defining which campaigns should be excluded from automation.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, integration mapping is required for any external data sources you want Madgicx to use. If you rely
        on Google Sheets for custom metrics or need CRM data to feed back into ad optimization, these connections
        must be set up and tested before launch. Madgicx has pre-built connectors for common platforms, but the
        specific fields and mapping logic must be reviewed to ensure accuracy. Geek @ Your Spot handles this
        technical work, making sure all data is synchronized and formatted correctly so the automation can make
        reliable decisions.</p>
      <p className="text-base text-white shadow-text pt-3">
        The upshot is that Madgicx’s automation is only as good as the structure and mapping of your data. The more
        clearly you define your funnel, audience segments, conversion events, and budget rules, the faster and more
        accurately the platform can optimize your campaigns. Geek @ Your Spot’s role is to guide these decisions,
        standardize your data, and ensure every mapping supports your business goals. With the right groundwork,
        Madgicx delivers not just automation but measurable improvements in <GlossaryLink slug="lead-quality">lead
        quality</GlossaryLink>, cost control, and time saved for your team.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-mapping-and-structure" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data mapping and structure
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-mapping-and-structure-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data mapping and structure
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
