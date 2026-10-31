import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s architecture is built to unify all your marketing performance data in one place, anchored by
        first-party tracking and flexible integrations. At its core is the Triple Pixel, a proprietary server-side pixel
        that collects customer and conversion data from your storefront, most often Shopify, but the model supports
        direct-to-consumer (DTC) brands more broadly. This pixel is not limited by browser restrictions or ad blockers,
        so it captures a more complete and reliable set of events than standard platform pixels.</p>
      <p className="text-base text-white shadow-text pt-3">
        The data Triplewhale collects does not live in isolated silos. Instead, the platform brings in revenue, ad
        spend, customer journeys, and creative performance from all your major channels, Facebook, Google, TikTok,
        email, SMS, and centralizes them in a real-time dashboard. This means you are not jumping between platforms or
        trying to stitch together conflicting reports. Every channel&rsquo;s numbers are reconciled against actual sales,
        so you can trust the totals you see.</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s attribution engine sits on top of this unified data layer. It offers a range of models to
        match how your business thinks about value, from first-touch and last-touch to advanced multi-touch and
        data-driven methods. The system lets you toggle between these views, so you can see, for example, what started
        the customer journey, what closed the sale, and how each channel contributed along the way. This flexibility is
        key for small businesses that need to justify spend across more than one platform or campaign.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform also incorporates post-purchase survey data, which can be gathered through its own survey tool or
        third-party providers like Fairing or Kno. This zero-party data is used to adjust attribution weights and fill
        in gaps that click or view data cannot cover, such as word-of-mouth or offline influences. The result is a more
        complete picture of what really drives conversions, not just what gets tracked online.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative analysis is handled by the Moby AI layer, which plugs directly into the attribution workflow. Moby
        analyzes both quantitative and qualitative signals from your ads, such as click-through rates, <GlossaryLink slug="return-on-ad-spend" className="text-[#0B162A] hover:underline">return
        on ad spend</GlossaryLink>, and customer sentiment, to identify which creative elements are working and why. This
        allows you to audit your creative portfolio, spot fatigue early, and scale up high-performing concepts without
        manual deep dives into each campaign.</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s architecture is not just about data collection, it is designed for speed and reliability.
        Click-based metrics update in real time, so you can check today&rsquo;s results and make same-day changes if
        needed. View-based metrics, like ad impressions, update daily. The system&rsquo;s deduplication logic ensures
        that each conversion is only counted once, even if multiple platforms claim it. This prevents inflated reporting
        and makes sure your revenue numbers match what you see in your bank account.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform supports custom pixel mapping, so you can tailor attribution rules to your own business logic.
        Product analytics, available in the enterprise plan, let you track which products are most often bought together
        and which ads drive those purchases. This helps you plan marketing around true buying patterns, not just
        top-line sales figures.</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale is built to scale with your business. Its architecture is designed to support both lean teams and
        more complex, multi-brand organizations. If you already have a data warehouse or data science team, Triplewhale
        can work alongside those resources rather than replacing them. For small businesses, it removes the need for
        heavy technical setup or manual data wrangling, everything is managed within the platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and data integrity are built in. Triplewhale&rsquo;s server-side pixel reduces the risk of data loss or
        manipulation, and its attribution models are transparent, so you can see exactly how credit is assigned. The
        platform also supports persistent custom metrics, so your reporting preferences are saved even after a page
        refresh.</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s architecture is not just about pulling in more data, it is about making that data usable and
        trustworthy for small businesses. By connecting every key channel, reconciling numbers to actual sales, and
        providing a flexible, action-ready dashboard, Triplewhale gives South Florida businesses the foundation to
        optimize ad spend with confidence and speed.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-architecture-behind-triplewhale" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The architecture behind Triplewhale
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
              <h2 id="the-architecture-behind-triplewhale-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The architecture behind Triplewhale
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
