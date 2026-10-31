import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma is set up by configuring automation rules, alert thresholds, and optimization logic specific to each ad
        account and business goal. For a small business in South Florida, this means connecting Google, Meta, and
        Microsoft ad accounts, then tailoring Adzooma&rsquo;s built-in rules and automation to the campaigns and budgets
        you actually run. The platform does not offer a scripting API or SDK for custom extensions; all configuration is
        handled through its own dashboard and rule templates.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of Adzooma&rsquo;s setup is its automation engine. This is where you define what the platform should
        watch for and what actions it can recommend or take. Adzooma&rsquo;s automation covers several areas: pausing
        underperforming ads, flagging pacing issues, alerting on overspend, and surfacing quick wins based on real-time
        performance data. For example, you can set up a rule that pauses any ad with a <GlossaryLink slug="click-through-rate">click-through
        rate (CTR)</GlossaryLink> below your chosen threshold, or one that notifies you if daily spend spikes beyond a
        set amount. Silver and Gold plans allow more custom alert rules and higher frequency monitoring, but even the
        Free plan lets you activate up to three alerts and basic automations.</p>
      <p className="text-base text-white shadow-text pt-3">
        The most common rules configured by small teams are those that catch wasted spend and flag problems early.
        Adzooma&rsquo;s dashboard lets you set up alerts for overspend, underspend, and <GlossaryLink slug="ad-fatigue">ad
        fatigue</GlossaryLink>, and configure when and how you get notified, by email or Slack, on a schedule that fits
        your business hours. You can also choose which metrics to monitor, such as <GlossaryLink slug="cost-per-click">cost
        per click</GlossaryLink>, conversion rate, or budget pacing, and set thresholds that reflect your specific risk
        tolerance or campaign goals. This is not a one-size-fits-all setup: Geek @ Your Spot works with you to map your
        campaigns, agree on what counts as a problem, and build rules that fit your real budget and workflow.</p>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma&rsquo;s automation logic is designed for clarity and speed. When a rule is triggered, say, an ad&rsquo;s
        spend exceeds its daily cap or a campaign&rsquo;s performance drops, Adzooma can either send you an alert or,
        where safe, apply a fix directly from the dashboard. For actions that require judgment, such as pausing an
        entire campaign or raising a bid, the platform surfaces the recommendation and lets you approve or reject it.
        This balance of automation and control is critical for small businesses that want to protect budget without
        ceding all decisions to software.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&rsquo;s Opportunity Engine uses AI to analyze your account and suggest improvements, ranked by
        impact and ease. This means you see, at a glance, which changes will return the most value for the least effort.
        You can queue up multiple fixes and apply them in one go, or review each opportunity in detail before
        committing. Geek @ Your Spot configures these recommendations to match your real priorities, whether that is
        cutting wasted spend, improving ad relevance, or scaling up high-performing campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        For Shopping campaigns, Adzooma checks product feed quality, missing attributes, budget gaps, and <GlossaryLink slug="negative-keywords">negative
        keyword</GlossaryLink> opportunities. It supports both Google Ads and Microsoft Ads Shopping campaigns, letting
        you manage and optimize across both from the same dashboard. Many recommendations can be actioned without
        leaving Adzooma, while others provide step-by-step guidance for changes that must be made in the native ad
        platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ongoing monitoring is a key part of the configuration. Adzooma&rsquo;s automated alerts run in the background and
        only act when your defined conditions are met, they never make campaign changes without your approval. You can
        review alert history, tune thresholds as your business grows, and add or remove rules as your strategy changes.
        This keeps the system flexible and responsive to your real-world needs, not locked to a static set of rules.</p>
      <p className="text-base text-white shadow-text pt-3">
        Unlike some enterprise platforms, Adzooma does not offer an open API or scripting environment for advanced
        customizations. All logic is built into the platform, and all extensions or changes are made through the
        dashboard&rsquo;s own configuration options. For most small businesses, this is an advantage: there is less risk
        of misconfiguration, and no need to maintain code or integrations outside the platform. Geek @ Your Spot handles
        the full configuration process, ensuring your rules, alerts, and optimization logic are correctly mapped to your
        campaigns, budgets, and business goals from day one.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, this setup means a South Florida small business can go from scattered, manual ad oversight to
        automated, cross-channel optimization in days, not weeks. Geek @ Your Spot&rsquo;s role is to translate your
        local goals and constraints into a working set of rules and automations that Adzooma enforces. You get proactive
        protection against wasted spend, real-time alerts before problems cost you, and a single place to monitor and
        act on every opportunity for improvement, without chasing down issues in five different tabs or waiting a month
        to find out what went wrong.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-adzooma" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in Adzooma
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
              <h2 id="what-gets-configured-in-adzooma-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in Adzooma
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
