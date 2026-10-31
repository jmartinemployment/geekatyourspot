import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function SequenceSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Rolling out Ad Spend Optimization in a real small-business environment is a step-by-step process. Each phase
        builds on the last, and skipping a step or rushing through it creates headaches that are hard to fix later.
        Here is what the rollout actually looks like, from the first conversation to the first optimization cycle.</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Business Objectives Alignment. The rollout starts by sitting down, often virtually, with the business owner
          or the person responsible for marketing. The goal is to name the concrete objective: more qualified leads,
          higher sales, lower cost per sale, or better <GlossaryLink slug="return-on-ad-spend">return on ad
          spend</GlossaryLink>. This is not a generic goal. For a South Florida auto repair shop, it might be more
          phone calls from within a 10-mile radius; for a local service business, more bookings from high-intent
          keywords. The team agrees on the outcome that matters, the <GlossaryLink slug="kpi">key performance
          indicators</GlossaryLink> to track, and the timeline for improvement. Cometly and Triplewhale both play a
          role here by connecting real sales data (not just clicks) back to the ad that generated them.</li>
        <li>Data Quality Assessment. Next comes the audit of your existing data. This is where most projects stall if
          not handled carefully. You check if your CRM, website, and ad accounts are collecting the right events, if
          tracking pixels are firing, and if the data is clean and complete. Triplewhale&rsquo;s server-side pixel or
          LocaliQ&rsquo;s unified dashboard are set up now, not later. The team checks for duplicate conversions,
          missing revenue tracking, and attribution gaps. If your data has holes, you fix them now, otherwise, every
          optimization will be built on a broken foundation.</li>
        <li>Tech Selection and Architecture. With the data foundation in place, the team picks the tools that fit your
          goals, your team, and your budget. For South Florida small businesses, the solution is rarely an all-in-one
          suite. Instead, you combine best-in-class tools: Cometly for real-time tracking and budget reallocation, Bir
          for 15-minute performance checks and safe scaling, Adzooma for cross-platform dashboarding and alerting,
          Optmyzr for custom rule automation, Plai for non-technical dashboards, Wask for workflow checks, and
          Performance Max for hyper-local optimization. The architecture is mapped out: which tool owns which channel,
          how data flows, who gets alerts, and how changes are approved.</li>
        <li>Pilot Implementation Strategy. Rather than flipping the switch on the whole account, the rollout moves to a
          test phase. A pilot campaign or a single channel is set up with the new optimization rules. For example,
          Bir&rsquo;s 15-minute check rules are deployed on one Google Ads campaign, or Adzooma&rsquo;s cross-channel
          reporting is trialed for a week. The team monitors for unexpected behavior, double-counting, or missed
          conversions. In this phase, Plai&rsquo;s non-technical dashboards and Wask&rsquo;s workflow checks are
          invaluable, if the owner cannot understand the results or the alerts, the setup is not ready for a wider
          rollout.</li>
        <li>Full System Integration and Routine Optimization. With the pilot validated, the architecture is rolled out
          across all campaigns and platforms. Automated rules are now live: Bir&rsquo;s scripts catch spend spikes,
          Adzooma&rsquo;s dashboard unifies reporting, Optmyzr&rsquo;s scripts manage keyword negatives and bid
          adjustments, and LocaliQ&rsquo;s tracking locks down your exact service area. Creative analytics from Cometly
          and Triplewhale flag ad fatigue, and Performance Max&rsquo;s local targeting features keep spend focused on
          the right zip codes. The rollout does not end with launch, routine weekly or biweekly reviews are built in,
          with alerts and recommendations pushed to the owner or team leads.</li>
        <li>Continuous Feedback and Improvement. The final step is ongoing. The team meets regularly to review what is
          working and what is not, based on the clear performance data and alerts now in place. Budgets are shifted
          away from underperforming ads and into campaigns that meet the agreed KPIs. New rules are added as needed,
          and old ones are retired if they no longer serve. The system is built to adjust, not just once, but every
          week, every month, as the business and the market change.</li>
      </ol>
      <p className="text-base text-white shadow-text pt-3">
        A real rollout is not a single &ldquo;go-live&rdquo; moment. It is a phased build, test, and refine cycle. The
        tools, Cometly, Bir, Triplewhale, Wask, LocaliQ, Plai, Optmyzr, Performance Max, Adzooma, each step in at the
        point where their strengths fit the process: from tracking and deduplication, to real-time checks, to
        dashboarding, to workflow control. Each phase must be owned and documented, so the business knows what is being
        measured, who is responsible, and what &ldquo;good&rdquo; looks like. When this is skipped or rushed, the
        result is the same as in every failed project: confusion, wasted spend, and a return to old habits. A
        methodical rollout, grounded in clear business objectives and robust data, is what turns Ad Spend Optimization
        from a buzzword into a real, working advantage for small businesses.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-rolling-this-out-actually-involves-in-a-real-environment-in-the-order-it-happens" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Rolling This Out Actually Involves in a Real Environment, in the Order It Happens
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-rolling-this-out-actually-involves-in-a-real-environment-in-the-order-it-happens-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Rolling This Out Actually Involves in a Real Environment, in the Order It Happens
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
