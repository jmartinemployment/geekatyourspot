import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting Factors live in a small business environment is not about months of custom engineering or a
        team of outside consultants. The process is designed to move fast, with a clear order of steps and
        built-in shortcuts that keep the timeline tight. For most teams in Miami-Dade, Broward, and Palm
        Beach, the question is not whether Factors can plug into their stack, but how quickly it starts
        showing real buyer signals and scoring leads they did not know they had.</p>
      <p className="text-md text-white shadow-text pt-3">
        The speed comes from three things. First, Factors brings pre-built connectors for the most common
        tools small businesses already use. That means direct integrations with Salesforce, HubSpot, LinkedIn
        Ads, Google Ads, Segment CDP, and Slack, among others. No need to build a
        custom&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;or manually export and import lists. The
        setup is about connecting accounts and mapping fields, not writing code. This alone cuts weeks from
        the typical go-live timeline compared to platforms that require middleware or custom scripts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Second, the onboarding process is structured and phased. Factors treats onboarding as a product
        function, not an afterthought. Every customer gets a dedicated customer success manager and a
        week-by-week plan. Week one is about defining the ideal customer profile (ICP) and deciding which
        enrichment providers to layer on top. Week two is for connecting CRMs and ad platforms, mapping custom
        properties, and setting up integrations. In week three, the focus shifts to building automations and
        alerts, like sending a Slack or Teams notification when a high-intent account spikes, or pausing
        retargeting when an opportunity moves to SQL. After that, ongoing weekly check-ins keep adoption on
        track and ensure the system is actually driving pipeline, not just reporting activity.</p>
      <p className="text-md text-white shadow-text pt-3">
        Third, Factors comes with ready-made templates for the most common sales and marketing workflows. This
        includes pre-defined scoring models, alert triggers, and reporting dashboards. For example, a small
        business can start with a templated rule that flags any account visiting the pricing page more than
        twice in a week, or that triggers a sales alert when a local company matches the ICP and downloads a
        case study. These templates are not rigid, they can be adjusted as the team learns what signals
        actually matter, but they mean the system is useful on day one rather than waiting for a custom build.</p>
      <p className="text-md text-white shadow-text pt-3">
        A typical rollout follows a set order:</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Connect core data sources:&nbsp;CRM, website, ad platforms, and communication tools (Slack, Teams).</li>
        <li>Define ICP and scoring rules using Factors’ templates, then customize as needed.</li>
        <li>Map key data fields and set up enrichment, pulling firmographics from connected sources.</li>
        <li>Test real-time alerts and review initial account scoring to ensure signals are flowing and notifications are actionable.</li>
        <li>Review the first week of data with the customer success manager, adjust thresholds, and tune workflows based on real account activity.</li>
        <li>Move to ongoing optimization: weekly reviews, adding new automations, and refining the scoring logic as the team sees what actually drives revenue.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        Where most platforms bog down is in the mapping and testing phase, especially when the business runs a
        mix of legacy and cloud tools. Factors sidesteps this with its direct connectors and by letting teams
        start small: for example, by piloting just the website visitor identification and basic scoring model
        before layering on ad integrations and full-funnel attribution. This phased approach means a team can
        go live with core functionality in days, then expand as they see value and get comfortable with the
        interface.</p>
      <p className="text-md text-white shadow-text pt-3">
        The other shortcut is the way Factors handles adoption. Rather than asking sales and marketing to
        learn a new platform from scratch, it pushes alerts and reports directly into the tools they already
        use, Slack, Teams,&nbsp;CRM&nbsp;dashboards. This reduces
        friction and speeds up the time to first value, because reps do not need to check another dashboard or
        remember to log in somewhere new. The system fits into the existing daily rhythm, not the other way
        around.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida, where time and cash are tight, this matters. The team does not
        need to reinvent their process or hire an in-house data analyst to get started. They connect what they
        already have, pick the templates that fit their goals, and let Factors do the heavy lifting. The
        result is a go-live measured in days or a few weeks, not quarters, and a pipeline that starts
        surfacing real, high-intent accounts without a long wait or a six-figure price tag.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-shortens-go-live-with-factors-and-how-the-rollout-actually-happens" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens Go-Live With Factors and How the Rollout Actually Happens
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-shortens-go-live-with-factors-and-how-the-rollout-actually-happens-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens Go-Live With Factors and How the Rollout Actually Happens
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
