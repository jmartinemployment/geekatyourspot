import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Wask is best judged on how well its automation rules, control model, and pricing structure fit the realities of
        a small business team in South Florida. The right fit depends on your ad spend, campaign complexity, and need
        for control, not just the sticker price. Wask&rsquo;s platform is built to serve owners and teams who want to
        keep a close eye on every dollar, but do not have the time or headcount to run daily manual checks across Google
        and Meta.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start with your ad spend volume. Wask&rsquo;s own guidance points out that automation delivers the most value
        once your combined Google and Meta ad spend is above $5,000 per month (<a id={`tools-marketing-precision-lead-acquisition-wask-evaluating-source-ad-automation${idSuffix}`} href="https://www.wask.co/digital-advertising/ad-automation" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Wask</a>,
        as of Oct 29, 2026). Below that, the time saved may not justify the setup and oversight. If you are running six
        or more campaigns across both platforms, or if your team is spending more than five hours per week just keeping
        campaigns healthy, Wask&rsquo;s automation can eliminate most of that routine work. The platform&rsquo;s real
        strength is in handling complexity, multiple accounts, ad sets, and creative variants, where manual management
        quickly becomes a bottleneck.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wask&rsquo;s pricing is published and straightforward. The platform is positioned as a lower-cost alternative to
        traditional agencies, which often charge $1,000 or more per month plus a percentage of ad spend (<a id={`tools-marketing-precision-lead-acquisition-wask-evaluating-source-google-ads-agency${idSuffix}`} href="https://www.wask.co/google-ads-agency" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Wask</a>,
        as of Oct 29, 2026). With Wask, you pay a fixed monthly fee for access to automated bid management, dynamic
        budget allocation, and 24/7 optimization. There is no long-term contract or percentage-of-spend markup, which
        means your costs are predictable and not tied to how much you choose to invest in ads each month.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real decision point is not just price, but the level of control and transparency you need. Wask gives you
        full visibility into every automated action, with clear audit trails and the ability to approve or reject
        high-impact changes. If you want to own your campaign strategy and keep direct access to your accounts,
        Wask&rsquo;s self-service model fits. If you prefer to outsource all decision-making to an agency, or if you need
        deep customization through APIs or custom scripts, Wask is not the right match, it is a configuration-driven
        platform, not an open automation toolkit.</p>
      <p className="text-base text-white shadow-text pt-3">
        Judge Wask on how it handles the specific pain points that slow your team down. The platform unifies Google and
        Meta reporting in one dashboard, so you are not toggling between platforms or stitching together spreadsheets.
        It automates negative keyword detection, bid adjustments, budget pacing, and creative refreshes. Every rule is
        visible, testable, and adjustable, so you are never locked out of your own data or left guessing why a change
        happened. For a team that needs to show owners and managers exactly where the budget is going, this level of
        transparency is a real advantage.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&rsquo;s fit also depends on your appetite for change management. Wask is not a set-and-forget tool.
        It requires an upfront investment in mapping your data, configuring rules, and reviewing initial results. There
        is a learning period, typically two to four weeks, where the automation calibrates to your campaign patterns.
        During this time, you will need to monitor more closely and be ready to tweak rules that fire too often or not
        at all. Geek @ Your Spot supports this process with phased rollouts and ongoing oversight, but the expectation
        is that you stay engaged with the system, not just hand it off and walk away.</p>
      <p className="text-base text-white shadow-text pt-3">
        On value, Wask&rsquo;s automation is measured by hours returned to your team, budget saved from wasted spend,
        and the reduction in manual errors. The platform&rsquo;s own case data shows that making optimization decisions
        five times faster than manual reviews can lower <GlossaryLink slug="cost-per-acquisition" className="text-[#0B162A] hover:underline">cost
        per acquisition</GlossaryLink> by double digits over a quarter. For a small business, this can mean real dollars
        back in the budget and more time for strategy and sales. The biggest risk is underuse, if you do not configure
        the rules to match your goals, or if you ignore the system&rsquo;s recommendations, the automation will not
        deliver its full benefit.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, judge Wask on three criteria: does it fit your campaign complexity and spend level, does its control
        model match your need for transparency and direct access, and does its pricing structure deliver real savings
        over agency retainers or manual management? If the answer to all three is yes, Wask is a strong fit for a small
        business team looking to take control of ad spend without adding more staff or overhead. If you need custom
        integrations, open scripting, or want to hand off all responsibility, another platform or a managed agency may
        be a better match.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-wask-on-fit-and-pricing-for-your-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Wask on Fit and Pricing for Your Business
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
              <h2 id="how-to-judge-wask-on-fit-and-pricing-for-your-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Wask on Fit and Pricing for Your Business
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
