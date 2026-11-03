export default function ConfiguringSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr lets teams automate their ad account management by configuring its Rule Engine, customized automations,
        and alerting logic directly inside the platform, no coding required. Everything from pausing underperforming
        keywords to adjusting budgets on the fly is set up through Optmyzr&rsquo;s own interface, using rules you define.
        For a small business, this means you stop relying on manual checks and move to a system that acts on your
        priorities, at the schedule you set.</p>
      <p className="text-base text-white shadow-text pt-3">
        The main engine is Optmyzr&rsquo;s Rule Engine. Here, you write the logic that automates the repetitive and
        time-sensitive jobs your team cannot watch around the clock. For example, you might set a rule to pause any
        keyword in Google Ads that spends more than three times your target CPA without a conversion over the last 90
        days (<a id={`tools-marketing-precision-lead-acquisition-optmyzr-configuring-source-automation-layering${idSuffix}`} href="https://www.optmyzr.com/automation-layering-masterclass/manage-small-google-ads-accounts/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026). You can do the same for Meta, LinkedIn, Microsoft Ads, and Amazon Ads, each platform gets
        its own set of rules, tailored to its structure and your goals. You can even schedule these rules to run at
        daily, weekly, or custom intervals, so you are not caught off guard by a budget spike or a drop in performance
        over a weekend.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real strength is in the flexibility. Optmyzr rules can be as simple as &ldquo;pause this ad if it is not
        converting&rdquo; or as complex as &ldquo;adjust bids only if spend, clicks, and conversion rates meet specific
        thresholds, but exclude new products or listings that just launched.&rdquo; This means you are not boxed into the
        limited options of native platform scripts. If you have a recurring problem with wasted spend, like a campaign
        burning through budget on broad keywords or a landing page going down, Optmyzr gives you the tools to catch it
        and act before it costs you.</p>
      <p className="text-base text-white shadow-text pt-3">
        For those who want to go further, Optmyzr&rsquo;s Enhanced Scripts and integration with Google spreadsheets open
        up even more options. You can connect outside data, like inventory levels, profit margins, or CRM data, directly
        to your rules. For example, you can upload a spreadsheet with your Amazon FBA inventory and set a rule to pause
        ads when stock drops below a threshold. Or you can build a rule that uses your own sales data to decide when to
        increase or decrease bids, moving beyond what the ad platforms themselves offer. This extension mechanism does
        not require developer skills: it is built for non-technical users who need to automate real business rules, not
        just technical triggers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Alerts and reporting are also configurable. Optmyzr lets you set up proactive alerts for any KPI or budget
        threshold, sent by email, Slack, Microsoft Teams, or even exported to Google Sheets. This means you know about a
        problem the moment it appears, not after the money is gone. For example, if a campaign&rsquo;s spend suddenly
        spikes or a landing page starts throwing 404 errors, Optmyzr can pause the affected ads and alert you instantly
        (<a id={`tools-marketing-precision-lead-acquisition-optmyzr-configuring-source-landing-pages${idSuffix}`} href="https://www.optmyzr.com/blog/are-your-adwords-ads-losing-money-on-bad-landing-pages/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026). This is a safety net that most small teams cannot build for themselves inside native ad
        platforms.</p>
      <p className="text-base text-white shadow-text pt-3">
        Templates and pre-built strategies make getting started faster. Optmyzr provides a library of rule templates for
        common scenarios, pausing non-converting keywords, flagging expensive search queries, adjusting bids based on
        ROAS or ACoS, and more. You can use these as-is or modify them to fit your exact needs. For a team that does not
        have the time or expertise to build rules from scratch, this is the difference between automation that sits
        unused and automation that actually protects your budget.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bulk automation tools let you apply your strategies across many accounts at once. If you manage multiple brands
        or campaigns, you can enable automation for all of them in one step. This is how agencies and multi-location
        businesses keep every account on track without multiplying their workload. For small businesses with limited
        staff, it means you do not have to choose between coverage and control, you get both.</p>
      <p className="text-base text-white shadow-text pt-3">
        What Geek @ Your Spot brings to this setup is the translation from your business goals to the actual rules and
        data mapping inside Optmyzr. Most small teams do not have the time or background to translate &ldquo;stop wasting
        money on broken pages&rdquo; into a working automation that checks every landing page, labels the paused
        keywords, and notifies the right people. Geek @ Your Spot maps your account structure, sets up the logic,
        connects your outside data, and tests the automations before letting them run live. The result is a system that
        matches your risk tolerance and business needs, not just a set of generic scripts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr does not require you to write code or maintain your own scripts. Everything is managed through its web
        interface, with the option to plug in spreadsheets or outside data where you need it. If your environment has
        unique reporting or workflow needs, Geek @ Your Spot handles the configuration so you are not left trying to
        reverse-engineer a technical setup. The platform is designed for ongoing change: you can modify rules, add new
        automation, or expand coverage as your business grows, without starting over or breaking what already works.</p>
      <p className="text-base text-white shadow-text pt-3">
        There is no SDK or open developer API for building your own modules from scratch, Optmyzr is a
        configuration-driven platform. The extension points are through data import (like spreadsheets) and enhanced
        scripts, not through custom coding. This is a deliberate design choice: it keeps the system accessible to
        non-developers and focused on business logic, not technical plumbing. For most small businesses, this is a
        strength, not a limitation, it means you get robust automation without the risk of custom code breaking when
        platforms update their APIs.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, setting up Optmyzr for ad spend optimization is about translating your business&rsquo;s real pain
        points, wasted spend, missed conversions, broken landing pages, into automated checks and actions that run every
        day. Geek @ Your Spot closes the gap between what you want the system to do and what actually gets built, so you
        are not left with a tool that only solves half the problem. The goal is not just to automate tasks, but to build
        a guardrail that keeps your ad dollars working for you, even when you are not watching the account.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-optmyzrs-rules-automations-and-extensions-get-set-up-for-real-world-ad-spend-control" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Optmyzr&rsquo;s rules, automations, and extensions get set up for real-world ad spend control
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
              <h2 id="how-optmyzrs-rules-automations-and-extensions-get-set-up-for-real-world-ad-spend-control-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Optmyzr&rsquo;s rules, automations, and extensions get set up for real-world ad spend control
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
