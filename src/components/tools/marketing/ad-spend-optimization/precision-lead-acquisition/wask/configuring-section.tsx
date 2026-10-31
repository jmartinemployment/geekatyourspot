import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Wask lets you build automation rules and workflows that control how your ad spend is managed across Google Ads
        and Meta Ads, without needing code or scripts. You set the logic for bid thresholds, budget caps, performance
        triggers, and creative fatigue alerts, and Wask&rsquo;s agent executes or queues actions based on your setup.
        There is no open scripting or API extension, what you configure is what the system runs, and every rule is set
        visually inside the platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business, the key configuration steps in Wask are about translating your sales goals and risk
        tolerances into concrete, repeatable rules. This means defining what counts as underperformance, how much budget
        you are willing to risk before pausing a campaign, and what triggers a budget increase or a creative refresh.
        Wask&rsquo;s &ldquo;Smart Rules Engine&rdquo; is where you create if-this-then-that logic using metrics like <GlossaryLink slug="click-through-rate">click-through
        rate</GlossaryLink> (CTR), cost per acquisition (CPA), impressions, and conversions. These rules can be as simple
        as &ldquo;pause any ad set that spends 1.5 times our target CPA without a conversion&rdquo; or as nuanced as
        &ldquo;increase budget by 10% if three conversions are achieved at 0.8x CPA, but only once per day.&rdquo;</p>
      <p className="text-base text-white shadow-text pt-3">
        Wask also provides over 1,000 pre-built templates for common optimization scenarios (<a id={`tools-marketing-precision-lead-acquisition-wask-configuring-source-google-ads-agency${idSuffix}`} href="https://www.wask.co/google-ads-agency" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Wask</a>,
        as of Oct 29, 2026). You can start with these templates, such as automated bid adjustments, budget pacing, or
        creative fatigue detection, and modify them for your business. Every action Wask takes is surfaced with the
        trigger condition and timestamp, so you always know which rule fired and why. This audit visibility is built in,
        not something you have to add on.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&rsquo;s automation is persistent and works in real time, not just during business hours. For
        example, Wask moves negative keyword detection from a weekly manual task to a continuous one, catching wasted
        spend the moment it appears. Bid adjustments go from a handful a day to hundreds, with the system handling the
        scale that no human can match. High-confidence, low-risk actions, like pausing an ad set that is clearly
        failing, can auto-execute. High-impact changes, such as shifting budget between campaigns or launching new
        creative, can be routed to your approval workflow, so you keep control over the big moves.</p>
      <p className="text-base text-white shadow-text pt-3">
        When Geek @ Your Spot deploys Wask, the work is in mapping your business goals to these rules and making sure
        your data structure supports them. This means setting up your campaign naming conventions, ensuring tracking is
        accurate, and aligning attribution windows with your real sales cycle. For Google Ads, you might set different
        rules for Search versus Display, with lookback windows that match each channel&rsquo;s reporting delay. For Meta,
        you&rsquo;ll build rules around creative frequency and audience saturation, using Wask&rsquo;s visual
        configuration to avoid the common failure of rules that either never fire or fire too often.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wask&rsquo;s automation logic is not a black box. Every step, source (what campaigns are included), condition
        (the performance threshold), and action (what happens when the threshold is met), is explicit and reviewable.
        You can start small, piloting rules on a few campaigns, then expand as you gain confidence. The platform
        supports multi-step workflows, so you can chain actions together: for example, flagging a campaign for review if
        ROAS drops, pausing after a set delay, and triggering a creative refresh if engagement falls below a
        threshold.</p>
      <p className="text-base text-white shadow-text pt-3">
        There is no scripting, API, or SDK in Wask for custom extensions. All configuration is done through the
        platform&rsquo;s own interface. This limits risk, no one can break your account with a bad script, but also
        means every workflow must fit within Wask&rsquo;s rule builder and template system. For most small businesses,
        this is a tradeoff that delivers more reliability and less maintenance than open-ended automation tools.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot&rsquo;s role is to translate your business objectives into a working set of rules, test them in
        a controlled rollout, and monitor for conflicts or missed triggers. The firm handles the initial data mapping,
        configures attribution and tracking, and sets up the oversight cadence, weekly reviews of automated actions and
        results. Where Wask surfaces an anomaly or a rule conflict, Geek @ Your Spot investigates and tunes the logic so
        the automation stays aligned with your goals. This is not a set-and-forget system; it is a managed workflow that
        adapts as your campaigns and business needs change.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small team, the result is a structured, owner-facing control process. You see every action Wask takes,
        understand why it happened, and keep the power to approve or override major changes. The manual work of pulling
        reports, checking campaign health, and reacting to daily swings is replaced by a rules-driven layer that runs
        continuously. The only manual work left is the strategic review, deciding what to test next, when to refresh
        creative, and how to adjust your goals as your business grows.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-wask-and-how-its-automation-logic-works-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Wask and How Its Automation Logic Works for Small Teams
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
              <h2 id="what-gets-configured-in-wask-and-how-its-automation-logic-works-for-small-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Wask and How Its Automation Logic Works for Small Teams
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
