import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Getting Adzooma live in a small business means connecting every Google, Meta, and Microsoft ad account to one
        dashboard, then letting the platform run its first full audit and surface optimization actions. This process is
        faster than most teams expect, because Adzooma is built for small businesses and agencies, with pre-built
        connectors and a guided setup that skips custom development or lengthy onboarding.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is linking each advertising account. Adzooma supports direct integration with Google Ads, Meta
        (Facebook) Ads, and Microsoft Advertising. Once connected, the platform automatically pulls in live data across
        all campaigns, ad groups, and budgets. There is no need to export spreadsheets or upload CSVs. This eliminates
        the scattered, manual process of logging into multiple platforms and trying to reconcile spend and performance
        by hand.</p>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma&rsquo;s onboarding is designed for speed. The platform can run a full account audit in under five
        minutes, according to its own product pages. That means a small business does not have to wait days or weeks for
        its first set of recommendations. The audit covers every campaign type, Search, Display, Shopping, <GlossaryLink slug="performance-max">Performance
        Max</GlossaryLink>, and more, so nothing is missed. The audit automatically flags wasted spend, underperforming
        ads, tracking errors, and budget pacing problems. It also highlights missing extensions, weak keyword coverage,
        and compliance issues.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most actions can be taken directly in Adzooma&rsquo;s dashboard. When the platform surfaces a fix, like pausing
        an ad with a low click-through rate or boosting budget on a top-performing campaign, the user can apply it in
        one click. There is no need to jump back and forth between Google Ads, Meta Ads, and Microsoft Advertising. This
        centralization is what shortens the go-live process and reduces risk: every change is tracked in one place, and
        there is no risk of missing a step or applying a fix in the wrong account.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with complex setups or agencies managing multiple clients, Adzooma supports unlimited ad accounts
        on all plans. That means there is no limit to how many brands, campaigns, or channels a small team can manage
        from the same dashboard. Agencies can prioritize fixes by impact and apply them across accounts in bulk, which
        speeds up rollout for larger or more fragmented environments.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&rsquo;s templated <GlossaryLink slug="automation-rules">automation rules</GlossaryLink> further
        shorten the path to value. Adzooma comes with built-in templates for common optimization tasks, like pausing
        underperforming ads, adjusting bids, or flagging pacing issues. These templates can be activated in minutes, and
        custom rules can be added for more advanced workflows. Alerting is configurable, with notifications sent by
        email or Slack as soon as performance shifts. This means teams spend less time monitoring dashboards and more
        time acting on what matters.</p>
      <p className="text-base text-white shadow-text pt-3">
        Go-live is not a one-time event but an ongoing process. Adzooma&rsquo;s audits and recommendations refresh
        automatically based on the plan: monthly for Free, weekly for Silver, and daily for Gold. This ensures that
        every team, no matter how small, gets a steady stream of actionable insights without having to schedule manual
        reviews or wait for a consultant to run a report.</p>
      <p className="text-base text-white shadow-text pt-3">
        What shortens go-live most is the platform&rsquo;s focus on practical automation, not just reporting. Adzooma
        does not require a technical specialist to set up. The interface is built for clarity, with guided steps and
        clear explanations for every recommendation. For a small business in South Florida looking to get out of
        spreadsheet chaos and into a single, actionable view of ad spend, this means the time from signup to first
        optimization can be measured in hours, not weeks.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, the order is: connect accounts, let the audit run, review prioritized recommendations, and apply
        fixes directly from the dashboard. For teams that want to phase in the rollout, Adzooma allows a start with one
        channel, say Google Ads, before adding Facebook and Microsoft. But the real time savings come when all accounts
        are unified and managed together. Ongoing, the platform keeps surfacing new opportunities and alerting the team
        to issues as they arise, so optimization becomes a routine part of the week, not a quarterly fire drill.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is a launch process that does not stall on technical hurdles or require a large team. Adzooma&rsquo;s
        approach is built around the needs of small businesses and agencies: fast setup, zero custom code, and
        automation that gives back hours each week. For South Florida teams used to losing time to fragmented dashboards
        and late budget corrections, going live with Adzooma is a direct route to clarity and control.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-adzooma-looks-like-for-a-small-business-and-how-to-shorten-the-process" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What going live with Adzooma looks like for a small business and how to shorten the process
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
              <h2 id="what-going-live-with-adzooma-looks-like-for-a-small-business-and-how-to-shorten-the-process-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What going live with Adzooma looks like for a small business and how to shorten the process
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
