import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Going live with Bir means your ad spend optimization moves from manual, error-prone checks to a system that runs
        itself, but getting there takes more than flipping a switch. Geek @ Your Spot leads the deployment, making sure
        Bir fits your current marketing stack and that you see results from day one. The process is structured, with
        each phase designed to minimize disruption and shorten the path to value.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is a technical assessment of your ad accounts and data sources. Geek @ Your Spot reviews your
        current platforms, Meta, Google, TikTok, Snapchat, and any attribution tools like Hyros or AppsFlyer, and
        confirms which ones Bir connects with out of the box. Bir&rsquo;s pre-built connectors for Google Sheets, Google
        Analytics, and leading attribution tools mean that, for most small businesses, the time to connect data is
        measured in hours, not weeks. This is a key advantage over tools that require custom API work or manual data
        exports.</p>
      <p className="text-base text-white shadow-text pt-3">
        After connections are established, Geek @ Your Spot runs a data quality and structure check. This is where most
        DIY implementations stall. Data fields must be mapped so Bir can read your metrics, <GlossaryLink slug="cost-per-acquisition">cost
        per acquisition (CPA)</GlossaryLink>, <GlossaryLink slug="return-on-ad-spend">return on ad spend (ROAS)</GlossaryLink>,
        spend, conversions, across each platform. If your naming conventions are inconsistent or your accounts have
        legacy rules, Geek @ Your Spot cleans these up, so Bir&rsquo;s automation logic works as intended from day one.
        For teams with a history of manual adjustments and ad hoc reporting, this step alone can surface hidden issues
        that would otherwise cause rules to misfire or miss key events.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next comes the rule set design. Geek @ Your Spot uses Bir&rsquo;s templated automation rules as a starting point
        but customizes them to your business&rsquo;s real-world performance windows and risk tolerances. For example, if
        your campaigns need to be checked every 15 minutes during peak hours but only hourly overnight, that schedule is
        built in (<a id={`tools-marketing-precision-lead-acquisition-bir-implementing-source-nothink${idSuffix}`} href="https://bir.ch/case-studies/nothink" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Bir</a>,
        as of Oct 25, 2026). Rules for pausing underperforming ads, scaling winners, and protecting budgets from CPC or
        CPM spikes are set up and tested in a sandbox before going live. This phased rollout lets you see the impact of
        automation on a subset of campaigns before extending it to the entire account. For small teams, this means you
        can start with the highest-impact campaigns, prove the value, and expand only when you are ready.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir&rsquo;s ability to apply and duplicate rules across multiple ad accounts from one dashboard is a major
        time-saver for businesses managing several brands or locations. Geek @ Your Spot ensures this is set up so that a
        change in your master template rolls out instantly to every account, eliminating the risk of drift and manual
        errors. Where a client has run into trouble with over-firing rules or zombie automations, rules that conflict or
        never trigger, Geek @ Your Spot audits all active logic as part of the go-live, so the system is clean and
        stable.</p>
      <p className="text-base text-white shadow-text pt-3">
        Throughout the process, Geek @ Your Spot documents every integration and rule, so your team knows not just what
        Bir is doing, but why. Training is hands-on, focused on showing your team how to monitor rules, adjust
        thresholds, and interpret Bir&rsquo;s recommendations. For most small businesses, this means the transition to
        Bir is measured in days, not months. The biggest delays come when historical data is incomplete or accounts are
        disorganized, problems that Geek @ Your Spot flags and helps fix early, so they do not slow down the rollout.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once live, Geek @ Your Spot monitors the first week of automation closely. This includes reviewing execution
        logs, checking for unexpected pauses or budget shifts, and making sure all integrations are feeding live data
        into Bir. Any edge cases, such as a campaign with delayed conversions or a sudden spike in spend, are handled in
        real time, with adjustments made to the automation logic as needed. By the end of the first month, most clients
        have a stable, low-maintenance system that lets them focus on creative and strategy, not firefighting ad spend
        issues.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, the go-live with Bir under Geek @ Your Spot&rsquo;s guidance is not a generic software install. It is
        a structured process that starts with a technical and data audit, moves through phased rule deployment, and ends
        with a stable, documented automation environment. The use of pre-built connectors, templated rules, and a
        hands-on rollout shortens the time to value and reduces risk, especially for small teams that cannot afford
        downtime or budget surprises.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-geek-your-spot-brings-bir-live-in-your-existing-setup-step-by-step" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Geek @ Your Spot brings Bir live in your existing setup, step by step
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
              <h2 id="how-geek-your-spot-brings-bir-live-in-your-existing-setup-step-by-step-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Geek @ Your Spot brings Bir live in your existing setup, step by step
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
