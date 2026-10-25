export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Wrench is best suited for businesses that want to automate lead generation, scoring, and campaign
        optimization at scale, but its fit depends on your current spend, team size, and how much manual work you
        want to remove. The platform is designed for paid media teams that are ready to move from static
        spreadsheets and manual segmentation to real-time, data-driven automation.</p>
      <p className="text-base text-white shadow-text pt-3">
        For South Florida small businesses spending between $500 and $1,500 a month, this creates a real decision
        point. If you are just starting out or only running basic campaigns, Wrench may be more than you need. But
        if you are at the stage where manual processes are holding you back, where cost-per-lead spikes, creative
        fatigue, and data chaos are real problems, Wrench’s automation can deliver measurable gains.</p>
      <p className="text-base text-white shadow-text pt-3">
        The pricing model is not published in public-facing evidence, so you will not find a fixed figure here.
        Instead, you should weigh the cost of Wrench against what you are spending today on manual labor, missed
        opportunities, and wasted ad spend. If your team spends hours each week cleaning lists, segmenting leads, or
        building new creative just to keep up, the value of automation is not just in saved time, it is in money not
        wasted on the wrong prospects or stale campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        When judging fit, look at these factors:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Team bandwidth: Wrench is strongest where a small team is stretched thin and cannot keep up with manual
          segmentation, creative refresh, or campaign monitoring. If you have the staff to handle this by hand, you
          may not see the same return.</li>
        <li>Data complexity: If your contacts are split across multiple CRMs, spreadsheets, or marketing tools, Wrench’s
          unified data foundation and automated cleaning routines can bring order and precision to your targeting.</li>
        <li>Need for creative velocity: If your campaigns stall because you cannot produce enough new ad content,
          Wrench’s automated creative generation and testing can break the bottleneck.</li>
        <li>Desire for predictive analytics: For businesses that want to move from reactive to proactive campaign
          management, Wrench’s predictive scoring and timing logic let you act on trends before they cost you money.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Wrench does not fit every business. If your pipeline is small, your sales cycles are simple, or your team is
        not ready to trust AI-driven segmentation, a lighter-weight tool or even manual processes may be a better
        starting point. But for teams facing the pain of uncontrolled CPL, creative burnout, and fragmented data,
        Wrench’s automation is built to solve exactly those problems.</p>
      <p className="text-base text-white shadow-text pt-3">
        On pricing, the right question is not just “What does it cost?” but “What does it save?” With Wrench, the
        savings come from hours not spent on manual work, dollars not wasted on the wrong leads, and campaigns that
        adjust in real time to what works. The platform’s automation logic is designed to pay for itself by making
        every dollar of ad spend count, if your business is ready for that level of precision.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot helps you evaluate whether Wrench is a match by mapping your current workflows, data
        structure, and campaign needs against what Wrench automates. They can show you the real impact by modeling
        what your week looks like with and without automation, how many hours are returned, how much waste is cut,
        and how your pipeline changes when you only target the leads most likely to convert.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, judge Wrench not just by its features but by what it removes from your week and your budget. If
        your business is at the point where growth is blocked by manual cycles, ad platform volatility, and creative
        bottlenecks, Wrench’s automation, properly configured and integrated by a local partner, can be the lever
        that lifts your pipeline to the next level.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-if-wrench-is-the-right-fit-and-what-its-pricing-model-means-for-your-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge if Wrench is the right fit and what its pricing model means for your business
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
              <h2 id="how-to-judge-if-wrench-is-the-right-fit-and-what-its-pricing-model-means-for-your-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge if Wrench is the right fit and what its pricing model means for your business
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
