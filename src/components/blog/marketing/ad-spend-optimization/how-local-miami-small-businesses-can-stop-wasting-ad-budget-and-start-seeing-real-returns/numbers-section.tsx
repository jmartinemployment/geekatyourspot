import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function NumbersSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Ad Spend Optimization delivers savings and lifts results when it closes the gap between ad platform reports and
        what is actually in your accounts. The strongest evidence shows this is only true when the tool is grounded in
        real sales data, not just what Google or Meta report. Tools like Cometly, for example, show that when you rely
        on ad dashboards alone, you risk scaling up campaigns that never produced the revenue you see on paper. The
        outcome is not just wasted budget but a pattern of bad decisions that repeat themselves across months and
        quarters.</p>
      <p className="text-base text-white shadow-text pt-3">
        What these platforms do prove is that accurate, first-party conversion data changes the way your ad dollars
        work. Cometly&rsquo;s server-level pixel can track conversions missed by browser-based pixels, especially when
        ad blockers are in play. Triplewhale goes further, deduplicating conversions so you do not pay twice for the
        same lead, a common problem when Google and Meta both take credit for a single customer. When you can see true
        blended <GlossaryLink slug="customer-acquisition-cost">acquisition costs</GlossaryLink> instead of inflated
        platform numbers, you stop pausing the campaigns that work and doubling down on the ones that only look good in
        the dashboard. This is not theory, Triplewhale and Cometly both publish case evidence that teams who fix
        tracking first see more confident decisions, fewer wasted dollars, and a tighter link between spend and ROI.</p>
      <p className="text-base text-white shadow-text pt-3">
        But the evidence does not prove that every automation or every tool delivers these gains equally, or that the
        gains scale forever. Bir&rsquo;s own case studies show teams saving up to 102 hours per month and scaling
        budgets across 20+ accounts without manual intervention, but they also show that these results depend on
        careful rule design, consistent review, and quality data to begin with (<a id={`blog-marketing-precision-lead-acquisition-numbers-source-bir-ch-cocosolis${idSuffix}`} href="https://bir.ch/case-studies/cocosolis" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Bir</a>,
        as of Oct 25, 2026). Bir&rsquo;s automation can catch a cost spike in 15 minutes, but if your underlying data
        is still messy or your campaign structure is poor, automation just moves the problem faster (<a id={`blog-marketing-precision-lead-acquisition-numbers-source-bir-ch-nothink${idSuffix}`} href="https://bir.ch/case-studies/nothink" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Bir</a>,
        as of Oct 25, 2026). Wask and Adzooma both emphasize the need for a structured review workflow and unified
        dashboards, but neither claims that simply turning on automation guarantees better results, success comes from
        combining automated checks with owner-facing reports and clear action steps.</p>
      <p className="text-base text-white shadow-text pt-3">
        And the evidence is thin where businesses expect automation to solve for creative fatigue, bad offers, or a
        lack of local targeting. Performance Max and LocaliQ highlight that automated budget shifts and smart
        geofencing can focus spend on high-intent local zones, but this still relies on the business having strong
        creative and market fit. Plai automates pixel setup and narrows targeting, but it cannot invent a profitable
        offer where none exists. The platforms do not claim to replace the work of thinking through your audience, your
        message, and the structure of your funnel.</p>
      <p className="text-base text-white shadow-text pt-3">
        Some results are clear: if you are running multi-platform campaigns, using cross-channel tools like Adzooma or
        Optmyzr can cut the time spent on manual checks and reduce dashboard fatigue. Optmyzr&rsquo;s scripts can pause
        leaking keywords and defend your search real estate when competitors spike their bids, but they do not claim to
        make you profitable if you are not already close. Automated rules and bid management catch errors faster, but
        only if your team reviews the alerts and acts on them. You do not get to skip the work of setting clear KPIs,
        keeping your data clean, and checking that your sales pipeline matches the conversions your platforms
        report.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, the evidence proves that Ad Spend Optimization, when built on true, first-party data and combined
        with the right automation, can meaningfully reduce wasted spend and give you more reliable results. What it
        does not prove is that automation alone will save a struggling campaign or replace the need for clear offers
        and strong creative. The right tool, used with care, is a force multiplier. Used without attention to your own
        sales reality, it can scale your mistakes as easily as your wins.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-measured-outcomes-say-about-ad-spend-optimization-and-what-remains-unproven" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What measured outcomes say about Ad Spend Optimization and what remains unproven
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
              <h2 id="what-measured-outcomes-say-about-ad-spend-optimization-and-what-remains-unproven-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What measured outcomes say about Ad Spend Optimization and what remains unproven
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
