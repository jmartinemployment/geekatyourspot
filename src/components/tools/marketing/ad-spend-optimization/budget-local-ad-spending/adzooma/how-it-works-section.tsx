import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma automates the daily grind of <GlossaryLink slug="ad-copy" className="text-[#0B162A] hover:underline">ad
        copy</GlossaryLink> and budget validation by running continuous, cross-platform checks and surfacing
        actionable fixes in real time. The system’s core is its Opportunity Engine, which scans every connected ad
        account for errors, wasted spend, and performance gaps, then presents prioritized recommendations that can
        be applied with a click. This engine is built for small teams who cannot afford to miss a single
        optimization window or let a budget slip away on junk traffic.</p>
      <p className="text-base text-white shadow-text pt-3">
        The automation process starts with Adzooma’s ability to connect Google Ads, Meta (Facebook) Ads, and
        Microsoft Ads accounts into a single dashboard. Once linked, the platform pulls live data from each channel
        and runs a series of health diagnostics. These diagnostics look for common budget drains, like outdated ad
        copy, overspending, underperforming keywords, and disapproved ads, across every campaign and ad group. The
        Opportunity Engine then ranks these issues by their impact and ease of fix, so small teams know what to
        tackle first to protect their limited budgets.</p>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma’s automation goes beyond simple reporting. The platform not only flags problems but also enables
        direct action from within its interface. For example, when the system detects a campaign burning through
        budget on low-quality clicks or an ad variation with outdated messaging, it presents a one-click fix. This
        means a user can pause underperforming ads, adjust budgets, or update copy without toggling between multiple
        ad manager tabs. Many recommendations can be applied instantly; others provide step-by-step guidance for
        changes that must be made in the original ad platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget pacing is managed by automated checks that monitor daily and monthly spend against set caps. If a
        campaign is about to overspend or is lagging behind pace, Adzooma surfaces an alert and, on supported
        platforms, can even pause the campaign or reduce bids automatically. This is especially critical for
        micro-budgets, where a single day of unchecked spending can wipe out a week’s allocation. The system also
        watches for <GlossaryLink slug="ad-fatigue" className="text-[#0B162A] hover:underline">ad fatigue</GlossaryLink>,
        flagging when an ad has been shown too often and is likely to lose effectiveness, so teams can rotate copy
        before performance drops.</p>
      <p className="text-base text-white shadow-text pt-3">
        Custom automation rules let users define their own triggers and responses. For example, a business can set a
        rule to receive an email or Slack alert if a campaign’s click-through rate drops below a certain threshold,
        or if spend spikes unexpectedly in any channel. These rules can be as simple as “pause ads with low CTR” or
        as complex as monitoring for missing <GlossaryLink slug="conversion-tracking" className="text-[#0B162A] hover:underline">conversion
        tracking</GlossaryLink> or changes in impression share. Silver and Gold plans allow for more granular rule
        customization, including setting thresholds by metric, campaign, or account.</p>
      <p className="text-base text-white shadow-text pt-3">
        Testing and validation of ad copy are also built into the workflow. Adzooma’s automation templates support
        regular <GlossaryLink slug="a-b-testing" className="text-[#0B162A] hover:underline">split testing</GlossaryLink>,
        automatically pausing ads that underperform based on CTR or <GlossaryLink slug="conversion-rate" className="text-[#0B162A] hover:underline">conversion
        rate</GlossaryLink>. This ensures that only effective messages remain live, and that budget is never wasted
        on stale or irrelevant copy. The system encourages continuous experimentation by surfacing which ad
        variations or keywords are not meeting performance benchmarks, allowing for quick iteration.</p>
      <p className="text-base text-white shadow-text pt-3">
        All of this happens on a schedule determined by the user’s plan. Free accounts receive monthly data
        refreshes, Silver weekly, and Gold daily, ensuring that the recommendations and alerts are as current as the
        business needs. Every alert, action, and change is logged in Adzooma’s history, so teams have a full audit
        trail of what was fixed, when, and why, a critical feature for small businesses that need to document their
        decision-making to avoid repeating mistakes.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, Adzooma’s automation engine replaces the manual, error-prone work of ad copy and budget validation
        with a system that is always on, always scanning, and always ready to act. For a small business running ads
        on a micro-budget, this means no more late-night spreadsheet checks, no more forgotten campaigns draining
        spend, and no more guessing which message is working. The system’s mechanics are built to give back hours
        every week and to ensure that every dollar is spent on ads that actually move the business forward.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-adzoomas-automation-engine-powers-ad-copy-and-budget-validation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Adzooma’s Automation Engine Powers Ad Copy and Budget Validation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-adzoomas-automation-engine-powers-ad-copy-and-budget-validation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Adzooma’s Automation Engine Powers Ad Copy and Budget Validation
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
