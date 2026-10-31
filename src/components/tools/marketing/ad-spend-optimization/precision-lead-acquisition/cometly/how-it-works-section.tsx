import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Cometly&rsquo;s core engine replaces unreliable ad platform dashboards with a single, accurate source of truth
        for every conversion and dollar spent. It does this by capturing every touchpoint from ad click to closed sale,
        using server-side tracking and real-time data sync to remove blind spots and duplication. The process is
        designed to work even when browser restrictions, ad blockers, or privacy changes break traditional tracking.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step in Cometly&rsquo;s system is event capture at the server level. When a user interacts with an ad,
        whether that&rsquo;s a click, a form submission, or a call, the event is recorded directly by your server or a
        dedicated tracking endpoint. This bypasses the browser, so conversion data is not lost to ad blockers or privacy
        updates. Every event is tagged with a unique identifier, such as a Google Click ID (GCLID) or Facebook Click ID
        (fbclid), and paired with first-party data like email addresses or phone numbers. This approach gives you much
        higher match rates and accuracy than relying on browser-side pixels.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, Cometly stitches together the full customer journey. It connects ad clicks to every downstream action,
        site visits, form fills, calls, purchases, by matching these identifiers across systems. This data stitching is
        where Cometly earns its value: it can tell when a single customer has interacted on multiple devices or
        channels, and link those touchpoints back to the original ad. That solves the cross-device attribution problem
        that pixel-based tracking cannot handle.</p>
      <p className="text-base text-white shadow-text pt-3">
        Deduplication is baked in at this stage. When both browser pixels and server-side events are running, Cometly
        uses identifiers like event_id or transaction_id to make sure conversions are only counted once, even if they
        show up in multiple systems. This is especially important for teams running Meta Conversion API or Google
        Enhanced Conversions in parallel with browser-based pixels. Without deduplication, your conversion counts would
        be inflated, and you&rsquo;d end up moving budget based on fiction.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once events are captured and stitched, Cometly pushes enriched conversion data back to the ad platforms. This
        feedback loop is critical: Meta, Google, and TikTok all use conversion signals to train their algorithms. When
        you send them verified, server-side data, complete with revenue amounts, customer lifetime value, and true
        conversion sources, their algorithms get smarter at finding your best customers. This means your campaigns
        optimize toward real revenue, not just vanity metrics like clicks or form fills.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cometly&rsquo;s engine also powers real-time budget reallocation. Instead of waiting for delayed, incomplete
        dashboard reports, the platform analyzes performance across all channels as it happens. Underperforming
        campaigns are flagged and can have their budgets paused or reduced automatically, while top performers get
        increased spend. This is not a static rules engine. Cometly uses AI-driven recommendations and dynamic
        thresholds, so the system adapts as your campaigns and markets change.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative analytics are another key part of the workflow. Cometly breaks down performance at the individual ad
        creative level, not just at the campaign or ad set. You see which images, videos, and copy variations actually
        drive sales, not just engagement. This lets you spot <GlossaryLink slug="ad-fatigue" className="text-[#0B162A] hover:underline">creative
        fatigue</GlossaryLink> early and rotate in new assets before costs spike. Alerts can be set up for significant
        metric changes, so you don&rsquo;t get caught off guard by sudden drops in performance.</p>
      <p className="text-base text-white shadow-text pt-3">
        All of this is surfaced in a unified dashboard. You get <GlossaryLink slug="cost-per-lead" className="text-[#0B162A] hover:underline">cost
        per lead</GlossaryLink>, cost per call, cost per enrollment, and client acquisition cost, broken down by
        campaign, ad set, and creative. The dashboard ties every conversion to real revenue outcomes, not just
        platform-reported numbers. Weekly reporting cycles are supported out of the box, striking the right balance
        between acting fast and avoiding noisy, premature decisions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cometly&rsquo;s tracking and optimization process is built for small businesses that need to know exactly where
        every ad dollar is going. The platform takes the guesswork out of scaling campaigns, pausing losers, and
        doubling down on what works. By automating the hard parts, data capture, stitching, deduplication, feedback
        loops, and budget shifts, Cometly gives you the clarity and speed that manual methods cannot match.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-cometlys-tracking-and-optimization-engine-works-step-by-step" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Cometly&rsquo;s Tracking and Optimization Engine Works, Step by Step
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
              <h2 id="how-cometlys-tracking-and-optimization-engine-works-step-by-step-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Cometly&rsquo;s Tracking and Optimization Engine Works, Step by Step
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
