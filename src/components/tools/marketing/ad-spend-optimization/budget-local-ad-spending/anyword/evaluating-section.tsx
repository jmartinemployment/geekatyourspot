import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Judging Anyword for fit and value comes down to what it delivers for a small business working with a tight
        monthly ad budget. Anyword is designed for teams that need to control costs, avoid agency retainers, and get
        real message validation before spending money live. The platform’s pricing model is built around a free
        trial period, so you can see what it does before making a commitment.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start by weighing whether your team needs automated copy validation and predictive scoring. If you are
        running ads on a $500 monthly budget, you cannot afford to test messages live and pay for failed clicks (<a id={`tools-marketing-budget-ad-copy-message-validation-anyword-evaluating-source-anyword-com${idSuffix}`} href="https://www.anyword.com/blog/email-a-b-testing-a-practical-guide-for-marketing-teams" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Anyword</a>,
        as of Oct 19, 2026). Anyword lets you generate and score multiple ad copy variations for each campaign, so
        you can filter out weak headlines before they go live. This is a direct answer to the “zero room for error”
        problem: you are not forced to run untested copy just to see what works. For small teams in Miami-Dade,
        Broward, and West Palm Beach, this means you keep your spend focused on high-performing messages and avoid
        the cash drain of platform defaults.</p>
      <p className="text-base text-white shadow-text pt-3">
        The fit question is also about control and speed. Anyword is built for configuration, not custom
        development, so your team does not need IT or a dedicated ad manager. The workflow is rules-driven: you
        define your audience, tone, and campaign goals, and the platform automates the rest. For a local business,
        this means your copy is tuned to your real market, not a generic national template. If your team is already
        stretched thin, Anyword’s automation takes the manual copywriting, scoring, and compliance checks off your
        plate.</p>
      <p className="text-base text-white shadow-text pt-3">
        On integrations, Anyword connects with common platforms like Google Ads, Microsoft Dynamics 365, and X
        (Twitter), so your ad copy, performance data, and reports flow into the systems you already use (<a id={`tools-marketing-budget-ad-copy-message-validation-anyword-evaluating-source-anyword-com-2${idSuffix}`} href="https://www.anyword.com/integrations" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Anyword</a>,
        as of Oct 19, 2026). This is important if you want to keep your existing workflows and avoid the hassle of
        switching tools or exporting data by hand. If your business relies on these platforms, Anyword fits
        smoothly; if you run a unique stack with custom requirements, the lack of an open <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink> or
        scripting may be a limit. For most small businesses, the integration coverage is enough to cover their
        marketing channels without extra work.</p>
      <p className="text-base text-white shadow-text pt-3">
        Pricing is transparent on Anyword’s own site, starting with a 7-day free trial. This lets you test the
        platform’s copy generation, scoring, and validation features before you commit. There is no upfront charge,
        so you can see if the automation and predictive scoring actually improve your ad performance. For a team
        with less than $500 a month to spend, this trial period is critical: you do not risk budget on a tool that
        does not fit (<a id={`tools-marketing-budget-ad-copy-message-validation-anyword-evaluating-source-anyword-com-3${idSuffix}`} href="https://www.anyword.com/blog/email-a-b-testing-a-practical-guide-for-marketing-teams" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Anyword</a>,
        as of Oct 19, 2026). After the trial, you weigh the cost against the time and budget saved by not running
        unproven ads live. Anyword’s model is not a flat retainer or an agency fee; you pay for the platform’s
        automation and validation, not for human consulting or custom development.</p>
      <p className="text-base text-white shadow-text pt-3">
        When comparing Anyword to other options, focus on what matters for small local teams: time saved, budget
        protected, and message validation before spend. If you need deep custom scripting or a platform that
        supports unique internal workflows, Anyword may not be the best fit. But if you want to automate ad copy
        generation, predict performance, and keep your campaigns tuned for your actual buyers in South Florida, it
        is built for your scale and budget. The decision is not about feature lists or theoretical ROI; it is about
        whether you can stop paying to test weak copy live, and whether the platform’s automation matches the way
        your team already works.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-anyword-on-fit-and-pricing-for-small-teams-in-south-florida" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge Anyword on fit and pricing for small teams in South Florida
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-anyword-on-fit-and-pricing-for-small-teams-in-south-florida-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge Anyword on fit and pricing for small teams in South Florida
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
