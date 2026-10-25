import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr lets you configure rules, automations, and monitoring logic that handle the core pain points of
        scaling lead generation campaigns. Everything runs on a schedule you set, using your business’s own targets
        and safety lines. You do not need to code or hire a developer, Optmyzr’s interface is built for direct
        configuration, with prebuilt templates and a clear step-by-step setup for each rule. Where custom logic is
        needed, you can connect external data through spreadsheets, but the platform itself is config-driven, not a
        developer tool or SDK.</p>
      <p className="text-base text-white shadow-text pt-3">
        The foundation of Optmyzr’s automation is the Rule Engine. This is where you define what to watch for, what
        counts as a problem, and what action to take. For example, you can set up a rule to pause keywords that have
        spent more than three times your normal cost per conversion without a single lead in the last 90 days (<a id={`tools-marketing-measured-lead-generation-optmyzr-configuring-source-optmyzr-com${idSuffix}`} href="https://www.optmyzr.com/automation-layering-masterclass/manage-small-google-ads-accounts/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026). You decide the thresholds, the lookback window, and what happens next, pause the
        keyword, apply a label for later review, or send an alert to your team. The same approach works for pausing
        underperforming ad groups, flagging high-cost search terms, or scaling budgets up and down based on
        performance.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr’s automation logic covers more than just pausing and budget shifts. You can schedule rules to run
        daily, weekly, or on custom intervals, so you are not tied to the ad platform’s own timing. This is critical
        for small businesses without a dedicated ad manager, Optmyzr keeps watch even on weekends or outside
        business hours, reducing the risk of budget overruns or missed opportunities. Every rule can send
        notifications by email, Slack, or Teams, so you know when something needs attention without logging in every
        day.</p>
      <p className="text-base text-white shadow-text pt-3">
        What makes Optmyzr distinct is its ability to layer rules and strategies. You can build multi-condition
        automations that look at spend, conversions, click-through rates, and even inventory or margin data if you
        connect a Google spreadsheet. For example, you might set up a rule to increase bids on high-performing
        keywords only when inventory is available, or to pause ads for products that go out of stock. This is not
        just for Google Ads, Optmyzr supports Microsoft Ads, Meta (Facebook and Instagram), LinkedIn, and Amazon
        Ads, all from the same dashboard. Each platform can have its own rules, but you can reuse logic and
        reporting across them for consistency.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr’s extension mechanism is its spreadsheet integration, not a developer API or SDK. You can import
        business data, like inventory levels, profit margins, or seasonality flags, by connecting a Google Sheet.
        The Rule Engine can then use these external data points in its logic, allowing for advanced automations like
        adjusting bids only when margins are above a certain percentage or scaling back spend during slow periods.
        There is no need to write code; the system guides you through connecting and mapping the data, and prebuilt
        templates help you get started.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses worried about losing control, Optmyzr’s preview mode is key. Every strategy runs in preview
        first, so you see exactly which changes would be made before anything goes live. You can approve, adjust, or
        reject individual items, nothing happens automatically unless you turn on full automation. This balance
        between control and automation is what makes Optmyzr usable for small teams who cannot afford mistakes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot’s role in making Optmyzr work is configuring these rules to fit your environment. That
        means mapping your ad account structure, setting up the right thresholds for your business, connecting any
        external data sources you have, and making sure notifications go to the right people. Geek @ Your Spot also
        handles the initial audit, reviewing your current campaigns, identifying where automation will have the
        biggest impact, and building a rule set that fits your goals. The result is a system that runs reliably in
        the background, catching problems and making adjustments before they cost you money.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are used to manual checks, script-based fixes, or ad hoc reporting, Optmyzr’s config-driven
        automation is a step change. It removes the need for technical staff to maintain scripts, cuts hours of
        manual review, and gives you a repeatable, auditable system for managing spend, creative fatigue, and <GlossaryLink slug="lead-quality" className="text-[#0B162A] hover:underline">lead
        quality</GlossaryLink>. For any small business in Miami-Dade, Broward, or West Palm Beach trying to scale
        lead generation, this is the difference between firefighting and running a predictable pipeline.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-optmyzr-its-own-rules-and-automation-logic-and-its-extension-mechanism" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in Optmyzr, its own rules and automation logic, and its extension mechanism
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
              <h2 id="what-gets-configured-in-optmyzr-its-own-rules-and-automation-logic-and-its-extension-mechanism-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in Optmyzr, its own rules and automation logic, and its extension mechanism
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
