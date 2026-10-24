export default function RolesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        When automated ad copy and message validation is rolled out, the biggest shift is in who spends time on
        what, and which jobs get easier, which get more strategic, and which are quietly eliminated. The work does
        not just become faster; it becomes fundamentally different, especially for owners, marketing staff, and
        outside partners supporting a small business in Miami-Dade, Broward, or Palm Beach.</p>
      <p className="text-base text-white shadow-text pt-3">
        For the business owner or manager, the constant grind of checking dashboards, tweaking bids, and chasing
        after wasted spend almost disappears. Before automation, you might have spent hours every week logging into
        Google, Facebook, and maybe Microsoft, trying to spot why the phone is not ringing. Now, with systems like
        Adzooma or Plai running in the background, the most urgent alerts surface automatically: budget errors,
        underperforming ads, or targeting leaks. Instead of firefighting, your time goes to reviewing only what
        matters, final approvals, high-level strategy, or green-lighting a new offer when the numbers say it is
        working.</p>
      <p className="text-base text-white shadow-text pt-3">
        For the marketing coordinator or junior staff, the role shifts from manual execution to quality control and
        creative input. In the old model, much of their week went to pulling performance reports, exporting lists,
        copying results into spreadsheets, and trying to match up which ad or message worked. With validation tools
        like LocaliQ and AdCreative in place, the system handles routine optimization, dropping poor keywords,
        updating creative, and reallocating budget. Their job becomes reviewing the AI’s suggestions, flagging
        anything off-brand, and focusing their energy on campaign ideas, local promotions, or community engagement
        that the system cannot generate.</p>
      <p className="text-base text-white shadow-text pt-3">
        Copywriters and content creators see their work move from one-off batches and endless revisions to
        rapid-fire iteration and validation. Tools like Anyword mean the first draft is no longer a blank page or a
        manual rewrite. Instead, they generate multiple headline and message options, each with a predictive
        performance score. The creative team spends less time guessing and more time refining what is already
        working, using real conversion data instead of gut feel or historical best practices. The pace is faster,
        but the feedback is instant, if a message is underperforming, it is flagged and replaced before it burns
        through the ad budget.</p>
      <p className="text-base text-white shadow-text pt-3">
        For outside agency partners or consultants, the relationship shifts from monthly reporting and reactive
        troubleshooting to proactive, strategic planning. Systems like Google Performance Max and Plai automate the
        micro-decisions, bid adjustments, location targeting, creative swaps, that agencies used to charge for as
        “management.” Now, the value comes from helping the business interpret the data, spot new opportunities, and
        plan campaigns around upcoming local events or shifts in consumer behavior. The agency is measured by the
        results they drive, not the number of hours spent in dashboards.</p>
      <p className="text-base text-white shadow-text pt-3">
        Customer service and sales teams feel the change, too. When validation systems are wired into the lead
        pipeline, every call, chat, or form fill is tagged with its source and quality score. LocaliQ’s centralized
        lead management means no more missed or misrouted leads, and sales teams can prioritize callbacks to the
        hottest prospects. The focus shifts from “did we get any leads?” to “are we following up on the right ones,
        fast enough to win the deal?”</p>
      <p className="text-base text-white shadow-text pt-3">
        One subtle but powerful shift is in the speed of creative refresh and fatigue management. Before, a campaign
        might run the same creative for months out of inertia or lack of time. Now, with AdCreative and Anyword, the
        system generates and scores new variants as soon as performance drops, keeping campaigns fresh and avoiding
        the slow death of ad fatigue. The creative team is freed from the pressure to reinvent the wheel and can
        focus on testing new angles or seasonal messages.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, the person responsible for reporting, often the owner or a part-time bookkeeper, no longer has to
        stitch together results from multiple platforms. With unified dashboards from Adzooma and Plai, they see
        cross-channel performance, lead sources, and budget status in one place. This cuts hours of manual
        reconciliation and lets them spot risks or opportunities before the end of the month, not after the money is
        gone.</p>
      <p className="text-base text-white shadow-text pt-3">
        The biggest change is not in the technology, but in the flow of work and the value of each role. Manual,
        repetitive tasks vanish. Time is spent where it moves the needle: creative, customer engagement, and
        strategic growth. The team is no longer chained to dashboards or stuck in reactive mode, but can finally
        drive results with confidence that the system will flag problems, and protect the budget, before they spiral
        out of control.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="whose-work-changes-when-automated-validation-goes-live-and-how-their-day-looks-different" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Whose Work Changes When Automated Validation Goes Live, and How Their Day Looks Different
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
              <h2 id="whose-work-changes-when-automated-validation-goes-live-and-how-their-day-looks-different-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Whose Work Changes When Automated Validation Goes Live, and How Their Day Looks Different
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
