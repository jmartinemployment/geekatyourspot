export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Judging whether Madgicx is the right fit for your business comes down to how well its automation, audience
        targeting, and reporting match your needs at your current stage of growth, and whether its pricing model
        delivers value at your spend level. Madgicx is designed for small business owners, agencies, and marketers
        who want to automate lead generation without hiring a full-time ads team or learning to code. If your
        business is spending between $500 and $1,500 a month on ads and you are struggling with cost spikes,
        creative fatigue, or manual reporting, Madgicx is built for your use-case.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start with your own pain points. If you are hitting a ceiling where raising your budget leads to higher
        cost-per-lead, or your team cannot keep up with the creative demands of Meta and Google, Madgicx’s
        automation is a direct answer. The platform’s ability to automate audience exclusions, manage budget
        allocation in real time, and create fresh ad variants at scale is what separates it from basic campaign
        management tools. For businesses that have outgrown manual setups but are not ready to hire a dedicated
        marketing analyst or data scientist, Madgicx fills that gap.</p>
      <p className="text-base text-white shadow-text pt-3">
        Madgicx’s fit also depends on your data environment. The platform works best when it can connect to your ad
        accounts and CRM directly, so it can pull in customer data, map funnel stages, and automate exclusions and
        retargeting. If your data is locked in spreadsheets or disconnected systems, Geek @ Your Spot can help with
        the mapping and integration, but the more unified your data is, the faster you will see results. If you have
        highly custom reporting or attribution needs that go beyond what Madgicx’s dashboards and integrations
        offer, you may find the platform limiting, as it is not built for custom scripting or bespoke analytics.</p>
      <p className="text-base text-white shadow-text pt-3">
        On pricing, Madgicx’s published materials do not state a specific monthly fee or tier structure, but the
        platform is positioned for businesses spending in the $500 to $1,500 a month range. This means it is not
        priced for enterprise budgets or for those running only a few dollars a day in ads. Instead, it is aimed at
        the segment where the pain of manual management is highest, where you need automation to scale, but cannot
        justify agency retainers or in-house hires. The value comes from removing manual hours, reducing wasted
        spend, and stabilizing your lead cost as you scale.</p>
      <p className="text-base text-white shadow-text pt-3">
        When comparing Madgicx to other tools, focus on what it automates for you. Some platforms offer more
        granular custom scripting or open APIs, but require technical expertise to use. Others are cheaper but leave
        you stuck with manual creative work and reporting. Madgicx’s strength is in configuration-based automation,
        audience creation, creative rotation, budget optimization, and real-time analytics, without the need for
        developers. For most small businesses, this is the best tradeoff: you get advanced automation, but can run
        it with the team you have.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fit is also about support and onboarding. Madgicx provides built-in reporting, dashboards, and
        recommendations, but the fastest path to value is through an implementation partner like Geek @ Your Spot.
        They handle the initial audit, data mapping, and configuration, so you do not lose weeks learning the system
        or risk missing critical steps. This is especially important for businesses that cannot afford downtime or
        failed launches.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, judge Madgicx on whether its automation, audience management, and reporting address your real
        bottlenecks. If you are ready to move past manual campaign management but do not want the overhead of a full
        agency or technical buildout, Madgicx is a strong fit. Its pricing is positioned for businesses in the
        mid-tier ad spend range, where automation delivers the most value. Evaluate it on whether it frees your team
        from manual work, keeps your lead costs predictable, and delivers the reporting you need to make decisions.
        If those are your goals, Madgicx is likely to be the right platform for your next stage of growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-madgicx-on-fit-and-pricing-for-your-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge Madgicx on fit and pricing for your business
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-madgicx-on-fit-and-pricing-for-your-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge Madgicx on fit and pricing for your business
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
