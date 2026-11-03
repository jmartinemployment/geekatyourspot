import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Wask automates ad spend decisions by connecting directly to your Google Ads and Meta Ads accounts, applying a
        rule-based and AI-driven approach that replaces manual checks with continuous, real-time optimization. The
        process starts with you setting the logic, bid thresholds, budget rules, and performance triggers, then
        Wask&rsquo;s agent monitors your campaigns and executes or queues actions as soon as those conditions are met.
        This means you no longer wait for a weekly or monthly review to catch wasted spend or performance drops; changes
        happen the moment your data calls for them.</p>
      <p className="text-base text-white shadow-text pt-3">
        The workflow begins with connecting your ad accounts to Wask. Unlike manual management, where you would export
        data and review it in spreadsheets or dashboards, Wask pulls live data from both platforms into a single system.
        You define your optimization rules visually, without coding. For example, you might set a rule to pause any ad
        set that spends 1.5 times your target <GlossaryLink slug="cost-per-acquisition" className="text-[#0B162A] hover:underline">cost
        per acquisition</GlossaryLink> (CPA) without conversions, or to increase budget on campaigns that beat your CPA
        goal by a set margin. Wask supports both pre-built templates and custom logic, so you can start with proven
        workflows or tailor the system to your business&rsquo;s needs.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once rules are in place, Wask&rsquo;s agent watches your campaigns continuously. High-confidence, low-risk
        actions, like pausing a clearly underperforming ad, can execute automatically. More significant changes, such as
        reallocating budget between campaigns or making structural adjustments, can be routed to your approval workflow.
        This keeps you in control of major decisions while freeing your team from daily maintenance tasks. Wask surfaces
        every automated action with the trigger condition and timestamp, so you always have an audit trail and can
        explain why a change was made when reviewing results.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams running multiple accounts or campaigns, Wask&rsquo;s performance analysis module ranks issues by
        impact across all connected accounts. Instead of relying on someone to spot a problem during a manual review,
        the system highlights the campaigns that need attention first, so your limited time goes where it matters most.
        Anomalies in spend, conversion rates, or engagement are flagged, and recommendations are generated with the
        underlying data attached. You can approve, reject, or modify these recommendations before anything goes live,
        unless you&rsquo;ve chosen to auto-execute specific rule types.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wask is designed for a phased rollout. Start with a few pilot campaigns and monitor daily for the first week,
        then expand automation as you build confidence in the system. The platform allows you to adjust thresholds and
        rules as your goals change, and it supports ongoing oversight with weekly review processes. Most users shift
        from daily hands-on management to spending just a few hours a week on strategic oversight, checking the
        system&rsquo;s actions, reviewing flagged issues, and planning new campaigns or creative tests.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wask&rsquo;s automation covers both tactical and strategic optimization. On the tactical side, it handles bid
        adjustments, negative keyword detection, creative fatigue alerts, and budget pacing, tasks that would otherwise
        require hours of manual effort each week. On the strategic side, it helps you set and enforce performance
        thresholds, ensures your campaigns are aligned with business objectives, and provides the data needed to make
        informed decisions about scaling spend or reallocating budget. The result is a consistent, owner-facing process
        that keeps your ad dollars focused on what works, with no more guesswork or wasted spend hiding in the
        details.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-wask-automates-ad-spend-decisions-step-by-step" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Wask Automates Ad Spend Decisions Step by Step
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
              <h2 id="how-wask-automates-ad-spend-decisions-step-by-step-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Wask Automates Ad Spend Decisions Step by Step
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
