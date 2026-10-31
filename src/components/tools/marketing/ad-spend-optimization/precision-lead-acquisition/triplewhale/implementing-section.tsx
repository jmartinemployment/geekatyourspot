import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Going live with Triplewhale starts with connecting your existing ad accounts and ecommerce platform, mapping
        your data, and selecting the right attribution models. For a small business already on Shopify and running ads
        on Meta or Google, the process is usually measured in days, not weeks, because Triplewhale is built for direct
        integration with these platforms and comes with pre-built connectors and dashboards. The steps are
        straightforward: connect your ad and store accounts, set up the Triple Pixel for first-party tracking, select
        your attribution approach, and validate your data. Most of the heavy lifting is handled by the platform&rsquo;s
        own onboarding flows, with Geek @ Your Spot configuring the details so you avoid common pitfalls that drag out
        go-live dates.</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s setup process is designed to avoid the slowdowns that plague manual reporting tools or
        generic analytics platforms. Instead of building a new data pipeline from scratch or writing custom scripts,
        most South Florida small businesses can use the product&rsquo;s native Shopify connection and direct ad platform
        integrations. This means no waiting for a developer to build a connector, and no need to clean up data exports
        before you see your first reports. For teams used to exporting CSVs and stitching together spreadsheets, the
        shift is immediate: you move from delayed, error-prone reporting to a real-time dashboard that updates as soon as
        your campaigns do.</p>
      <p className="text-base text-white shadow-text pt-3">
        The order of operations matters for a smooth rollout. First, you connect your Shopify store and ad accounts
        (Meta, Google, TikTok, and email/SMS platforms if you use them). Next, you install the Triple Pixel, which is
        Triplewhale&rsquo;s proprietary first-party tracking code. This step is critical: it replaces standard <GlossaryLink slug="tracking-pixel">browser
        pixels</GlossaryLink> with server-level tracking, so you get a complete record of customer journeys even when ad
        blockers are in play. Once the pixel is live, you select your attribution models, choosing from options like
        Total Impact (which combines tracked and survey data), Clicks &amp; Deterministic Views, Triple Attribution,
        Linear, and others. Each model answers a different business question; Geek @ Your Spot will guide you to the one
        that matches your goals and ad mix.</p>
      <p className="text-base text-white shadow-text pt-3">
        After attribution is set, the final step is validating your data. Triplewhale&rsquo;s dashboards let you compare
        tracked conversions against your Shopify order data and ad platform reports, so you can spot discrepancies early.
        This is where the platform&rsquo;s deduplication logic and flexible attribution views save you from
        double-counting conversions or missing out on post-click sales. For most small businesses, this validation phase
        is quick, especially when handled by an implementation partner who knows the common mismatches between Meta,
        Google, and Shopify reporting. Once validated, you&rsquo;re able to make real budget decisions based on unified,
        trusted numbers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s templated setup and phased rollout options help smaller teams go live without the risk of
        downtime or data loss. You can start with a single channel or campaign, review the results, and then expand to
        full cross-channel measurement, avoiding the all-at-once switch that can overwhelm internal teams or break
        existing reporting. This staged approach is especially helpful for businesses in Miami-Dade, Broward, and Palm
        Beach that can&rsquo;t afford to pause campaigns or lose track of spend during the transition. Geek @ Your Spot
        manages the rollout, monitors for tracking gaps, and ensures that every metric in your dashboard matches what
        you see in your store, so you&rsquo;re not left reconciling numbers after the fact.</p>
      <p className="text-base text-white shadow-text pt-3">
        The biggest shortcut for getting Triplewhale live is its out-of-the-box support for Shopify and major ad
        platforms. There are no custom integrations required for most small businesses, and the platform&rsquo;s
        dashboards are designed for immediate use. The main variables that affect your timeline are the complexity of
        your existing campaigns and the number of channels you want to measure. Even with multiple ad platforms, the
        process is still faster than building a comparable system with spreadsheets or a generic BI tool. Geek @ Your
        Spot&rsquo;s role is to keep the setup moving, catch mismatched data before it becomes a problem, and train your
        team on what each attribution model means for your budget decisions.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Connect Shopify and ad accounts using Triplewhale&rsquo;s native integrations.</li>
        <li>Install the Triple Pixel for accurate, server-side tracking.</li>
        <li>Select attribution models that fit your marketing mix and goals.</li>
        <li>Validate tracked data against store orders and platform reports.</li>
        <li>Roll out in phases if needed, starting with one channel or campaign.</li>
        <li>Train your team on dashboard use and attribution views.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        A typical small business in South Florida can expect to be live on Triplewhale in under a week if they have their
        logins and store access ready. The main delays come from missing credentials, unclear ownership of ad accounts,
        or legacy tracking code conflicts, which Geek @ Your Spot resolves as part of the onboarding. Once live, you move
        from manual, delayed reporting to a real-time, unified view of your ad spend, so you can cut wasted budget and
        reinvest in what works.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-launching-triplewhale-looks-like-for-a-small-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What launching Triplewhale looks like for a small business
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
              <h2 id="what-launching-triplewhale-looks-like-for-a-small-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What launching Triplewhale looks like for a small business
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
