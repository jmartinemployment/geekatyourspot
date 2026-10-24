export default function EvaluatingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ is best judged on whether its automation, targeting, and reporting match the way your business
        actually runs, and whether its pricing model fits the realities of a small business budget in South Florida.
        The right fit means the platform can enforce your budget limits, lock down your service area, and show you
        exactly which ads produce real leads, all without adding another layer of manual work or agency fees.</p>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ uses a flat fee pricing model that includes automated budget optimization. There is no add-on charge
        for creative refresh or for the ongoing optimization that keeps your campaign spend focused on what works.
        This is a direct answer to the agency catch-22 most small businesses face: the management fee does not
        balloon just because your budget is small. For a business spending under $500 a month, that means the
        platform’s own cost does not quietly eat half your ad budget before you see a single lead (<a id={`tools-marketing-budget-ad-copy-message-validation-localiq-evaluating-source-localiq-com${idSuffix}`} href="https://localiq.com/blog/local-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        When weighing fit, start with how LocaliQ handles budget control. The platform allows you to set spending
        limits at the campaign, ad set, or account level, with options for daily or lifetime caps. This flexibility
        means you can prevent accidental overspend and keep your total exposure within what your business can
        actually afford. If your daily cap is $15, LocaliQ’s own controls make sure you never exceed it, even if a
        campaign suddenly starts to take off (<a id={`tools-marketing-budget-ad-copy-message-validation-localiq-evaluating-source-localiq-com-2${idSuffix}`} href="https://localiq.com/news/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026). For South Florida small businesses, this is not just a convenience, it is a guardrail
        against the kind of runaway costs that can kill a campaign before it starts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another critical fit factor is how LocaliQ targets your audience. The platform supports zip code, city, and
        radius targeting, so you can lock ads to your true service area and avoid wasted spend on out-of-area
        clicks. If your business only serves Miami-Dade and Broward, LocaliQ’s geofencing ensures your ad dollars
        are not leaking into Palm Beach or beyond. The system’s automation learns which locations and audiences
        actually convert, shifting spend in real time to the best-performing segments. This is not just a filter, it
        is live optimization that adapts as your business and the market change.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget ad copy and message validation are handled through LocaliQ’s dynamic optimization engine, which runs
        ongoing tests on headlines, images, and calls to action. The platform’s own logic reallocates spend to the
        highest-converting combinations without waiting for a manual review. For a small business, this means you do
        not need to dedicate staff to constant A/B testing or risk running stale ads for weeks. The automation
        ensures your limited budget is always working on the messages that drive real leads.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting and attribution are unified in LocaliQ’s dashboard, showing exactly which channel, ad, or keyword
        produced each lead. This is essential for small businesses that cannot afford to guess which campaigns are
        working. The platform’s reporting goes beyond clicks and impressions, tying spend directly to phone calls,
        form fills, and booked appointments. If you need to prove ROI to yourself or your partners, LocaliQ’s
        reporting structure gives you the evidence without manual data gathering or spreadsheet wrangling.</p>
      <p className="text-base text-white shadow-text pt-3">
        On pricing, LocaliQ’s single flat fee covers all automation, optimization, and reporting. There are no
        usage-based surcharges, no per-channel add-ons, and no separate fee for creative testing. This is especially
        important for micro-budget campaigns: you know your total cost up front, and you keep more of your budget
        working in the market. For small businesses in South Florida, this means you can run professional-grade ad
        validation and optimization without hiring an agency or taking on unpredictable costs.</p>
      <p className="text-base text-white shadow-text pt-3">
        The system’s fit is strongest for teams that need to maximize every dollar, cannot afford agency retainers,
        and want to see exactly what is working without spending hours in multiple dashboards. LocaliQ is less of a
        fit for businesses with highly custom workflows that require deep scripting or non-standard integrations,
        its open API supports extensions, but most small teams will use the built-in automation and reporting as-is.
        If your needs change, Geek @ Your Spot can extend the platform, but the core value is in the
        zero-maintenance automation out of the box.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, judge LocaliQ on its ability to enforce your budget, target your real market, optimize your copy
        and spend in real time, and tie every dollar to a real outcome, all for a flat, predictable fee. For a small
        business running Budget Ad Copy &amp; Message Validation, this means less time chasing down results, less
        money lost to junk traffic, and more leads that actually turn into customers.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-localiq-on-fit-and-on-its-pricing-model-for-small-business-ad-validation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge LocaliQ on fit and on its pricing model for small business ad validation
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
              <h2 id="how-to-judge-localiq-on-fit-and-on-its-pricing-model-for-small-business-ad-validation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge LocaliQ on fit and on its pricing model for small business ad validation
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
