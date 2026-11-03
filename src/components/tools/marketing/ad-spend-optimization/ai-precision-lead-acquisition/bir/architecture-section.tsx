import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Bir&rsquo;s architecture is designed to centralize data from multiple ad platforms, apply advanced logic to that
        data, and execute changes across accounts with minimal delay. It connects to major sources, Meta, Google,
        TikTok, and Snapchat ad accounts, using their APIs, and can also pull in custom data from Google Sheets, Google
        Analytics, and attribution tools like Hyros, AppsFlyer, Adjust, and Wicked Reports. This flexibility allows Bir
        to use both in-platform metrics and first-party business data in its decision-making.</p>
      <p className="text-base text-white shadow-text pt-3">
        All performance data flows into Bir&rsquo;s central logic engine. Here, you define custom metrics and rules that
        reference any available data point: conversions, <GlossaryLink slug="cost-per-acquisition" className="text-[#0B162A] hover:underline">CPA</GlossaryLink>,
        ROAS, CPM, or even custom events you track in Google Sheets. Bir&rsquo;s custom metric builder lets you create
        formulas that match your business&rsquo;s real KPIs, not just the standard metrics offered by ad platforms. For
        example, you might create a custom metric that combines in-platform purchase data with backend sales data from
        your CRM, and use that as the basis for optimization rules.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir evaluates these metrics on the schedule you set. For most teams, that means checks every 15 minutes, but you
        can run them as often or as rarely as you want, and even set custom schedules for weekends, holidays, or peak
        activity periods (<a id={`tools-marketing-precision-lead-acquisition-bir-architecture-source-nothink${idSuffix}`} href="https://bir.ch/case-studies/nothink" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Bir</a>,
        as of Oct 25, 2026). This means you can tailor the automation to your business&rsquo;s real operating hours and
        customer behavior, rather than relying on generic platform schedules.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of the most important architectural choices in Bir is its support for nested conditions and multi-level
        logic. A rule can reference not just one metric, but a combination, such as &ldquo;if ROAS is above 3, CPA is
        below $20, and daily spend is on pace, then increase budget by 20 percent (<a id={`tools-marketing-precision-lead-acquisition-bir-architecture-source-cocosolis${idSuffix}`} href="https://bir.ch/case-studies/cocosolis" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Bir</a>,
        as of Oct 25, 2026).&rdquo; You can also set rules to look at performance over different timeframes, such as the
        last three days, seven days, or even hourly periods. This depth of logic makes Bir more precise and less prone
        to making abrupt, destabilizing changes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir&rsquo;s integration with external data sources is a major advantage for small businesses that need to
        connect ad spend to real sales. By bringing in first-party data from Google Sheets or attribution tools, Bir can
        optimize based on what actually drives revenue, not just what the ad platform reports. This is especially useful
        for businesses that run both online and offline sales, or that need to track conversions beyond the standard
        pixel events.</p>
      <p className="text-base text-white shadow-text pt-3">
        For each rule, Bir stores execution history and performance outcomes. This makes it possible to audit which
        rules are firing, which are stale or never trigger, and which may be working against each other. For a team that
        has accumulated dozens of rules over time, Bir&rsquo;s audit features help you keep the system clean, efficient,
        and free from conflicts that could cause instability or wasted spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir&rsquo;s architecture also supports phased automation. You can start with alert-only rules that flag issues
        for review, then move to direct actions as you build trust in the system. This is especially important for small
        teams that are new to automation and want to avoid handing over full control before seeing how the rules behave
        in practice.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and reliability are built in. Bir&rsquo;s centralization means you are not dependent on each
        platform&rsquo;s own rules engine, which can have delays or fail to trigger. When a change is needed, pausing a
        campaign, reducing a budget, or scaling up a winner, Bir acts directly and records the result. If a
        platform&rsquo;s API changes or a data source goes offline, the system flags the issue so you can address it
        before it impacts spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, this architecture means you do not need a large technical team or custom
        infrastructure to achieve 24/7 ad spend optimization. Bir plugs into what you already use, brings all the data
        together in one place, and gives you the tools to automate safely and at your own pace. You keep control over
        strategy and creative, while Bir handles the repetitive, time-sensitive work that protects your budget and grows
        your results.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-bir-connects-how-it-stores-and-evaluates-your-data-and-why-its-architecture-matters-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Bir connects, how it stores and evaluates your data, and why its architecture matters for small teams
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
              <h2 id="what-bir-connects-how-it-stores-and-evaluates-your-data-and-why-its-architecture-matters-for-small-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Bir connects, how it stores and evaluates your data, and why its architecture matters for small teams
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
