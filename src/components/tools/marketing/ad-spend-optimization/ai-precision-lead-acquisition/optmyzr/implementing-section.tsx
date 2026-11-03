import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Deploying Optmyzr in a small business environment means plugging it directly into your existing ad accounts,
        mapping your current structure, and setting up automation rules that match your goals. The process is much
        shorter than building custom scripts from scratch because Optmyzr comes with pre-built connectors for Google
        Ads, Microsoft Ads, Meta (Facebook and Instagram), LinkedIn, and Amazon Ads. Most teams can connect their
        accounts and start seeing actionable insights within days, not weeks.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is connecting each advertising platform to Optmyzr using its official API integrations. This is a
        straightforward process: you log into your ad accounts through Optmyzr&rsquo;s interface, grant permissions, and
        the tool pulls in your live campaign data. There is no need to export spreadsheets or manually sync data across
        platforms. Once connected, Optmyzr immediately begins analyzing your campaigns and surfacing performance data in
        one place. This unified dashboard is a major shift for small businesses used to jumping between Google, Meta,
        and LinkedIn interfaces just to understand where their budget is going.</p>
      <p className="text-base text-white shadow-text pt-3">
        After connection, the next stage is configuring automation rules. Optmyzr&rsquo;s library of pre-built rule
        templates shortens setup time. For example, you can select a template to automatically pause keywords that
        exceed your <GlossaryLink slug="cost-per-acquisition">cost-per-acquisition</GlossaryLink> threshold or flag
        campaigns with broken landing pages. These templates are not just generic, they are designed for common pain
        points in small business ad management, such as wasted spend on non-converting keywords or sudden spikes in
        competitor bidding. You can customize each rule to match your own thresholds, schedules, and notification
        preferences.</p>
      <p className="text-base text-white shadow-text pt-3">
        Phased rollout is another way Optmyzr shortens go-live. You do not have to automate everything at once. Many
        teams start with monitoring and alerts, using Optmyzr to flag issues like overspending or broken URLs without
        letting the tool make changes automatically. As you build confidence in the system, you can enable full
        automation on rules that have proven reliable. For example, pausing non-converting keywords or shifting budget
        between platforms can move from manual review to automated action with a single setting change. This staged
        approach reduces risk and gives your team time to adjust.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams managing multiple brands or locations, Optmyzr&rsquo;s All Accounts Dashboard is a key advantage.
        Instead of repeating setup for each account, you can apply rules and reporting structures across your portfolio.
        This is especially useful in environments where consistency and time savings are critical. You can duplicate
        strategies, automate them for multiple accounts, and adjust only where local conditions differ. The
        platform&rsquo;s bulk automation tools make it easy to roll out changes at scale without missing details in
        individual campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Migration from other tools is direct. If you are moving from a different social ads manager or a manual
        reporting workflow, Optmyzr&rsquo;s onboarding process helps transfer your automation, alerts, and workflows.
        You connect your accounts, import existing rules where possible, and the system brings your live campaigns into
        the unified dashboard. There is no disruption to active ads. This is a marked improvement over manual migrations
        that often require rebuilding logic from scratch and risk downtime.</p>
      <p className="text-base text-white shadow-text pt-3">
        Throughout go-live, transparency is built in. Every automation and optimization action is logged, so you can
        review what changed, when, and why. If a rule pauses a campaign or adjusts a bid, you see the trigger and the
        outcome in the audit log. This level of oversight is critical for small teams who need to trust automation
        without losing control.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, going live with Optmyzr is not a long, technical project. Pre-built connectors, templated rule
        libraries, and phased automation let most small businesses in Miami-Dade, Broward, and Palm Beach counties get
        up and running quickly. The work is front-loaded into connection, initial rule selection, and a brief period of
        monitoring before turning on full automation. Ongoing, the system handles the repetitive work, freeing your
        team to focus on growth and strategy instead of firefighting.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-deploy-optmyzr-in-a-working-ad-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it takes to deploy Optmyzr in a working ad environment
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
              <h2 id="what-it-takes-to-deploy-optmyzr-in-a-working-ad-environment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it takes to deploy Optmyzr in a working ad environment
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
