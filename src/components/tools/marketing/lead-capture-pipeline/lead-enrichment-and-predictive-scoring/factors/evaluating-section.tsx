import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Choosing Factors is not about buying a feature checklist. It is about whether the platform fits your
        sales cycle, your team’s skills, and your budget. Small businesses in Miami-Dade, Broward, and Palm
        Beach need to know what they are paying for, what they get, and whether it will actually move the
        needle on pipeline and revenue.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start by looking at how Factors matches your pipeline reality. If your team spends hours each week
        chasing cold leads, and most of your website traffic leaves no trace, Factors is built to address that
        gap. Its core value is unmasking 75% of your anonymous website visitors, well above the industry
        average of 40%. This means you see which local companies are looking at your services, not just a
        spike in traffic. For a team used to guessing, this alone can justify the switch.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, weigh how Factors handles&nbsp;<GlossaryLink slug="intent-data" className="text-[#0B162A] hover:underline">intent
        data</GlossaryLink>&nbsp;and&nbsp;<GlossaryLink slug="lead-scoring" className="text-[#0B162A] hover:underline">lead scoring</GlossaryLink>. The
        platform’s AI models combine firmographic fit, real-time behavior, and pipeline stage to score each
        account. You do not have to build a scoring model from scratch. Instead, you get a system that learns
        from your own data and adapts as you use it. If you need to prioritize which leads get a call, and
        want to stop wasting time on dead accounts, this is where Factors stands out. The scoring is not
        static, it updates as accounts engage, so your team always has a fresh list to work from.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation is another key fit question. Factors is not just an analytics tool. It triggers real-time
        alerts to Slack or Teams, updates your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>, and syncs
        audiences to LinkedIn and Google Ads. If you run paid campaigns and want to know which ads drive real
        pipeline, Factors can show you. It connects ad impressions, website visits, and sales outcomes in one
        timeline. This is a step up from platforms that only report clicks or form fills.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is a practical test for fit. Factors connects with Salesforce, HubSpot, Google Ads,
        LinkedIn, G2, Segment, Apollo, ZoomInfo, Slack, and Teams. If your team already uses any of these, the
        setup is straightforward, no need for custom engineering. Geek @ Your Spot manages the connections so
        your data flows smoothly. If you use something outside this list, ask Geek @ Your Spot about
        compatibility before you buy. The platform is designed to fit into existing tech stacks, not force a
        rip-and-replace.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing is not published in the research, so you will not find a dollar figure here. What matters is
        that Factors is positioned as a cost-effective solution for small and mid-sized teams. It does not
        require a dedicated analytics engineer or a six-figure budget. The onboarding is structured and
        includes a dedicated customer success manager. For small businesses, this means you get support and
        guidance, not just a login. If you have been quoted $60,000 or more for enterprise account
        identification tools, Factors is set up to be more accessible. It is not a free tool, but it is built
        to deliver value quickly, usually within the first month.</p>
      <p className="text-md text-white shadow-text pt-3">
        When judging fit, also consider adoption. Factors is configured to work with your team’s current
        workflow, alerts show up in the tools you already use, and reports are tailored to your pipeline.
        There is no need to learn a new system from scratch. Geek @ Your Spot handles the setup, training, and
        ongoing tuning. If your team has struggled to get value from tools that require behavior change or
        manual data entry, this is a real advantage.</p>
      <p className="text-md text-white shadow-text pt-3">
        The last test is outcomes. Look at what similar teams have achieved. AudienceView used Factors to
        uncover high-intent accounts, leading to more discovery calls and closed deals. Drivetrain moved from
        broad, imprecise outreach to a focused, data-driven approach. Cacheflow cut unknown lead sources from
        30% to 10% and tied 30% more closed deals to their LinkedIn campaigns. If your business needs to see a
        clear link between marketing activity and revenue, this is where Factors delivers. The platform’s
        multi-touch attribution models show which campaigns drive real results, not just clicks.</p>
      <p className="text-md text-white shadow-text pt-3">
        In the end, Factors is right for small teams that want to stop guessing, see which accounts are
        actually in-market, and act on those signals without adding headcount. It is not the cheapest option
        if you only want a basic website analytics tool, but for businesses looking to turn anonymous traffic
        into pipeline and revenue, it is built for the job.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-if-factors-is-the-right-fit-what-to-weigh-and-what-its-pricing-means-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge If Factors Is the Right Fit: What to Weigh, and What Its Pricing Means for Small Teams
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
              <h2 id="how-to-judge-if-factors-is-the-right-fit-what-to-weigh-and-what-its-pricing-means-for-small-teams" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge If Factors Is the Right Fit: What to Weigh, and What Its Pricing Means for Small Teams
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
