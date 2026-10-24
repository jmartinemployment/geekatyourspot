import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ runs every ad campaign through a proprietary optimization engine that makes real-time decisions on
        spend, targeting, and message. For a small business working with a limited budget, this means the platform
        automatically shifts dollars away from underperforming ads and keywords, and toward those that are actually
        generating leads. It does not just set and forget, LocaliQ reviews every campaign’s performance data as it
        comes in, and makes changes before your <GlossaryLink slug="daily-budget" className="text-[#0B162A] hover:underline">daily
        budget</GlossaryLink> gets wasted.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the core is LocaliQ’s machine learning system, which uses data from millions of past campaigns to spot
        patterns that signal when an ad or keyword is likely to work. When you launch a campaign, LocaliQ pre-tests
        keyword bids by audience before spending real money on them. This reduces the expensive learning period that
        drains micro-budgets in the first few days on Google or Meta. The engine then fine-tunes bids, ad copy, and
        budgets in real time, so spend is always moving toward what is working.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s optimization does not stop at keywords. LocaliQ also rotates and tests multiple versions of
        ad copy and creative, automatically shifting budget to the combinations that drive clicks and conversions.
        If a banner or text ad is not pulling its weight, LocaliQ diverts spend to higher-performing variants
        without waiting for manual intervention. This is crucial for budget ad copy and message validation, where
        every wasted dollar comes out of a small team’s pocket.</p>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ’s approach to targeting is just as precise. The system locks down geofencing and radius targeting,
        so your ads only show to users inside your actual service area. This prevents your budget from leaking out
        to clicks from neighboring counties or people who will never become customers. You can target by zip code,
        city, or a custom radius, and LocaliQ’s optimization ensures that only high-intent, local searches see your
        ads. For example, a plumber in Fort Lauderdale will have their ads shown to people searching for emergency
        plumbing nearby, not to DIYers looking for tips in another state.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cross-channel optimization is built in. LocaliQ’s engine allocates and reallocates spend not just within a
        single channel, but across search, display, and social platforms. If Facebook is pulling more leads at a
        lower cost than Google on a given day, the platform shifts dollars accordingly. This cross-platform agility
        means your $500 monthly budget is always chasing the best possible outcome, not stuck in a static allocation
        that made sense last week but not today (<a id={`tools-marketing-budget-ad-copy-message-validation-localiq-how-it-works-source-localiq-com${idSuffix}`} href="https://localiq.com/blog/local-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        Automated budget controls are layered at every level. You can set daily or lifetime limits for campaigns, ad
        sets, or the entire account. LocaliQ respects these caps and actively prevents overspend, pausing campaigns
        or creative as soon as a limit is hit. This is especially important for small businesses who cannot afford
        to go over budget, even by a few dollars.</p>
      <p className="text-base text-white shadow-text pt-3">
        Lead management is fully integrated into the optimization process. Every click, call, or form fill is
        tracked back to its source, Google, Meta, or organic, so you know exactly which ad or keyword generated the
        lead. LocaliQ’s dashboard unifies reporting for all channels, making it easy to see what is working and
        where your money is going. This unified view is essential for validating which messages and offers are
        driving real business, not just empty clicks.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s AI lead management tools go further by engaging with leads automatically. Dash by LocaliQ
        uses AI agents to respond to web forms, SMS, and calls around the clock, qualifying leads and booking
        appointments even when your team is off the clock. This means hot leads do not drop off because nobody was
        available to answer a comment or phone call.</p>
      <p className="text-base text-white shadow-text pt-3">
        All of this happens without the need for a dedicated in-house ad manager or agency retainer. LocaliQ’s
        optimization engine takes on the heavy lifting, acting as a 24/7 guardrail that protects your spend,
        validates your ad copy, and ensures only the best-performing messages get funded. For a South Florida small
        business, this is the difference between burning through your budget on junk traffic and turning every
        dollar into a real opportunity.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Real-time machine learning adjusts bids, copy, and budgets automatically.</li>
        <li>Cross-channel spend reallocation ensures dollars go to the best-performing platform each day.</li>
        <li>Automated message and creative testing shifts budget to what actually converts.</li>
        <li>Geofencing and radius targeting keep spend locked to your real service area.</li>
        <li>Unified dashboard shows which message, keyword, or channel drove every lead.</li>
        <li>AI-powered lead management engages and qualifies prospects instantly, not hours later.</li>
        <li>Daily and lifetime budget caps prevent accidental overspend.</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-localiqs-optimization-engine-controls-every-dollar-and-message-in-real-time" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How LocaliQ’s optimization engine controls every dollar and message in real time
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
              <h2 id="how-localiqs-optimization-engine-controls-every-dollar-and-message-in-real-time-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How LocaliQ’s optimization engine controls every dollar and message in real time
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
