import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr automates paid ad management by letting you define rules and strategies that run on a schedule,
        monitor for problems, and take corrective action before wasted spend adds up. Instead of relying on manual
        checks, Optmyzr’s Rule Engine applies your logic to campaign data across Google, Microsoft, Meta, LinkedIn,
        and Amazon Ads, so you do not need to log in and tweak settings every day.</p>
      <p className="text-base text-white shadow-text pt-3">
        The Rule Engine is the core of Optmyzr’s automation. You write the conditions that matter, such as pausing
        keywords with high spend but no conversions, adjusting bids when competitor <GlossaryLink slug="impressions" className="text-[#0B162A] hover:underline">impression</GlossaryLink> share
        drops, or reallocating budgets during seasonal slowdowns. These rules are not hard-coded scripts: you set
        them up in a point-and-click interface, so you do not need to know JavaScript or <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink> calls.
        Optmyzr runs each strategy in preview first, showing you exactly what will change before anything goes live.
        Only when you approve the results does it apply updates in your ad accounts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr’s automation supports both full auto and manual review. You can choose to have rules run without
        your sign-off, automatically pausing underperformers or scaling budgets up when results are strong. Or, you
        can require that all changes be reviewed, so nothing happens without a human’s OK. For teams with different
        risk profiles, this flexibility means you can automate the routine while keeping control over decisions that
        carry more business risk.</p>
      <p className="text-base text-white shadow-text pt-3">
        Scheduling is built in. Rules can run daily, weekly, or on a custom timetable, including during weekends and
        holidays when manual oversight is weakest. This ensures campaign guardrails stay active even when your team
        is not at their desks. For example, Optmyzr can catch a site outage and pause ads within the hour, or scale
        back spend if a competitor’s bid spike threatens your cost-per-lead, all without waiting for a Monday
        morning check-in.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr also includes a library of pre-built rule templates for common use cases. These templates cover
        tasks like pausing keywords with poor performance, adjusting bids based on CPA or <GlossaryLink slug="return-on-ad-spend" className="text-[#0B162A] hover:underline">ROAS</GlossaryLink> targets,
        or flagging landing pages that return 404 errors (<a id={`tools-marketing-measured-lead-generation-optmyzr-how-it-works-source-optmyzr-com${idSuffix}`} href="https://www.optmyzr.com/blog/are-your-adwords-ads-losing-money-on-bad-landing-pages/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026). You can use them as-is or adapt them to your own performance thresholds and business
        logic. For example, a template might pause any keyword that spends three times your average CPA without
        converting over the last 90 days, and apply a label so you can audit the decision later (<a id={`tools-marketing-measured-lead-generation-optmyzr-how-it-works-source-optmyzr-com-2${idSuffix}`} href="https://www.optmyzr.com/automation-layering-masterclass/manage-small-google-ads-accounts/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation layering is a key concept in Optmyzr. You can stack rules, one to pause bad keywords, another to
        label them, a third to review and possibly re-enable them if conditions change. This allows for complex,
        multi-step workflows that would be overwhelming to manage by hand, and it means your campaigns can adapt to
        changing market conditions without constant human intervention.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr’s system is designed to reduce mental load for marketers. Routine checks, like reviewing search
        terms for negatives, checking for broken URLs, or monitoring for <GlossaryLink slug="cost-per-click" className="text-[#0B162A] hover:underline">CPC</GlossaryLink> spikes,
        are all handled by <GlossaryLink slug="automation-rules" className="text-[#0B162A] hover:underline">automated
        rules</GlossaryLink>. The system can notify you by email, Slack, or Teams when something needs attention, or
        simply make the change if you have enabled full automation. This approach frees your team to focus on
        strategy and creative work, not repetitive monitoring.</p>
      <p className="text-base text-white shadow-text pt-3">
        Optmyzr’s automation is not just for large agencies. Small teams in South Florida running mid-tier budgets
        can use the same tools to keep cost-per-lead in check and campaigns on track. The Rule Engine’s ability to
        duplicate strategies across multiple accounts, schedule them flexibly, and preview changes before applying
        makes it practical for businesses without dedicated PPC specialists or developers. The result is a safer,
        more predictable lead pipeline at a spend level where manual management would break down.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s automation is broad enough to cover every major ad platform you are likely to use, Google,
        Microsoft, Meta, LinkedIn, and Amazon, so you can apply consistent rules across all your campaigns without
        switching between dashboards. Optmyzr’s system is not a black box: every automation run is logged, and you
        can review what happened, when, and why, making it easy to audit results and tweak your logic as your goals
        evolve.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-optmyzrs-automation-engine-runs-campaigns-without-manual-oversight" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Optmyzr’s Automation Engine Runs Campaigns Without Manual Oversight
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
              <h2 id="how-optmyzrs-automation-engine-runs-campaigns-without-manual-oversight-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Optmyzr’s Automation Engine Runs Campaigns Without Manual Oversight
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
