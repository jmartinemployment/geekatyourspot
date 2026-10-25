import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Rolling out Optmyzr in a small business ad environment does not require a full rebuild or weeks of downtime.
        Most teams can connect their existing Google, Microsoft, Meta, LinkedIn or Amazon ad accounts to Optmyzr
        directly through built-in API connectors, with no manual data migration. This shortens the go-live process
        to a matter of days, not months, and keeps your current campaigns running while automation is layered in
        step by step.</p>
      <p className="text-base text-white shadow-text pt-3">
        The onboarding flow starts with connecting each ad platform account to Optmyzr through secure API
        authentication. For Google Ads, Microsoft Ads, Meta (Facebook and Instagram), and LinkedIn, this means
        logging in once and granting Optmyzr access to the accounts you want to manage. There is no need to export
        or reformat data, since Optmyzr reads and writes directly to each platform’s live environment. This
        immediate sync ensures that existing campaigns, <GlossaryLink slug="ad-group">ad groups</GlossaryLink>, and
        reporting structures are available for automation without manual duplication or risk of data loss.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once accounts are linked, Optmyzr’s templated setup options let you deploy proven automation strategies
        without starting from scratch. Pre-built rule templates for pausing underperforming keywords, adjusting
        bids, monitoring budgets, and flagging broken URLs can be applied to your campaigns with minimal
        customization. These templates are designed to address the most common pain points in measured lead
        generation, like cost-per-lead spikes, wasted spend on non-converting terms, or missed budget caps, so you
        do not need to invent your own logic from the ground up. You can preview every change before it goes live,
        ensuring control stays with your team.</p>
      <p className="text-base text-white shadow-text pt-3">
        Phased rollout is the best practice for most small businesses. Rather than turning on full automation
        everywhere at once, you start by enabling Optmyzr’s monitoring and alerting features. For example, you can
        set up proactive alerts for 404 errors on landing pages, sudden spikes in cost per acquisition, or campaigns
        that hit their daily or monthly budget limits (<a id={`tools-marketing-measured-lead-generation-optmyzr-implementing-source-optmyzr-com${idSuffix}`} href="https://www.optmyzr.com/blog/are-your-adwords-ads-losing-money-on-bad-landing-pages/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Optmyzr</a>,
        as of Oct 24, 2026). This acts as a safety net, catching issues that would otherwise go unnoticed until
        after money is lost. Over the first week, you can then selectively enable rule-based automations, such as
        pausing keywords with high spend and no conversions, or scaling budgets up and down based on seasonal
        demand, on the highest-priority campaigns. This staged approach keeps risk low and lets you see the impact
        of each automation before rolling it out account-wide.</p>
      <p className="text-base text-white shadow-text pt-3">
        What shortens the deployment further is Optmyzr’s ability to duplicate and automate strategies across
        multiple accounts. If you manage several locations or brands, you can copy proven rule sets from one account
        to another and schedule them to run on your preferred cadence, daily, weekly, or custom intervals. This
        avoids the need to manually recreate workflows and ensures consistency across your portfolio. For teams with
        limited technical resources, the no-code rule builder and template library keep the learning curve minimal.
        You do not need to hire a developer or learn scripting; business users can configure and test automation
        logic through a visual interface.</p>
      <p className="text-base text-white shadow-text pt-3">
        Throughout the rollout, your team remains in full control. Optmyzr’s automation engine only takes actions
        you define, and you can choose to review every recommendation before it is applied. If you want to automate
        changes, you can do so with the option to receive notifications by email, Slack, or Microsoft Teams when key
        events occur. This balance between automation and oversight is critical for small businesses who cannot
        afford to let algorithms run unchecked. Scheduled audit reviews, twice a month or monthly, ensure your
        automation rules stay aligned with current business goals and performance data.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, going live with Optmyzr in a small business environment is a streamlined process: connect your
        accounts through API, apply pre-built or custom automation templates, phase in rules and alerts, and
        duplicate strategies as needed. No manual data migration, no code required, and no disruption to your live
        campaigns. This approach lets teams in South Florida move from reactive, manual ad management to proactive,
        algorithmic control in less than a week, freeing up time to focus on sales and growth instead of
        firefighting.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-deploy-optmyzr-in-an-existing-ad-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it takes to deploy Optmyzr in an existing ad environment
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
              <h2 id="what-it-takes-to-deploy-optmyzr-in-an-existing-ad-environment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it takes to deploy Optmyzr in an existing ad environment
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
