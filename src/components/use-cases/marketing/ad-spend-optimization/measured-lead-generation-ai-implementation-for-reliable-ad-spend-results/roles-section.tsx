export default function RolesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A Measured Lead Generation rollout changes the daily reality for everyone who touches leads, campaigns, or
        creative assets. The biggest impact falls on the marketing manager and the people in sales or admin roles
        who used to spend hours on manual follow-up, reporting, or creative updates. Instead of chasing spreadsheets
        and reacting to missed opportunities, their work shifts to reviewing signals, making higher-level decisions,
        and acting on clear priorities surfaced by the system.</p>
      <p className="text-base text-white shadow-text pt-3">
        For the marketing owner or manager, Measured Lead Generation means less time spent pulling performance
        reports, updating budgets, or troubleshooting why a campaign is overspending. With automation tools like
        Performance Max and Optmyzr running in the background, they move from reactive firefighting to proactive
        oversight. Budget reallocations, creative swaps, and negative keyword updates happen automatically or by
        approval, not as a daily scramble. The manager’s job becomes one of reviewing flagged issues, checking
        exceptions, and focusing on campaign strategy, not grinding through the same dashboard routine every
        morning.</p>
      <p className="text-base text-white shadow-text pt-3">
        Sales teams, who once spent hours reviewing cold leads and manually sorting prospects, now receive leads
        already scored and segmented for follow-up. Wrench takes raw CRM and web form data and cleans, scores, and
        routes it, so sales reps see a prioritized list of who is most likely to convert and when. The admin burden
        of updating statuses, excluding recent buyers from remarketing, or cleaning up duplicate records shrinks.
        Time that used to be wasted on “dead” leads or irrelevant follow-ups is now spent on real conversations and
        closing deals. For a twelve-person team, this can mean recapturing dozens of hours each week.</p>
      <p className="text-base text-white shadow-text pt-3">
        Design and creative staff, often the bottleneck for campaign refreshes, see the most dramatic change.
        Marpipe automates the creation and testing of ad variants, taking the manual load of resizing, versioning,
        and deploying creative elements off their plate. Instead of spending hours each week making small tweaks for
        every platform and audience, designers upload their best assets and let the system assemble, test, and
        report on what works. The creative team shifts from production to oversight, focusing on high-impact
        concepts and creative direction rather than repetitive resizing and export tasks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Small business owners, especially those in Miami-Dade, Broward, and West Palm Beach who used to wear several
        hats, feel the change as a reduction in stress and a clearer line of sight to what is actually working.
        Instead of guessing where leads are lost or why ad spend is spiking, they get a live dashboard showing which
        campaigns are pulling their weight. Madgicx ensures that audiences are structured, budgets are protected
        from overlap, and every dollar is allocated to a real sales opportunity, not wasted on broad, unqualified
        traffic. The owner’s time shifts from troubleshooting and “gut feeling” pivots to reviewing results and
        planning the next move.</p>
      <p className="text-base text-white shadow-text pt-3">
        For the technical lead or IT support, the change is a shift from supporting ad hoc integrations or cleaning
        up after failed imports to maintaining a steady, connected system. The job becomes one of monitoring data
        flows, ensuring integrations stay live, and stepping in only when something breaks. Instead of building
        one-off scripts or firefighting sync failures, the technical team works to keep the automation stack running
        smoothly, a far more scalable and sustainable role.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, this shift can feel dramatic. A hypothetical five-person agency that once spent Monday mornings
        exporting lists, updating budgets, and emailing creative files now spends that time reviewing flagged
        issues, approving creative winners, and following up on the highest-scoring leads. The system handles the
        grind, and the people focus on what actually drives revenue. That is the promise, and the reality, of a
        Measured Lead Generation rollout done right.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-feels-the-change-when-measured-lead-generation-goes-live-and-how-their-day-to-day-work-shifts" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Feels the Change When Measured Lead Generation Goes Live, and How Their Day-to-Day Work Shifts
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
              <h2 id="who-feels-the-change-when-measured-lead-generation-goes-live-and-how-their-day-to-day-work-shifts-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Feels the Change When Measured Lead Generation Goes Live, and How Their Day-to-Day Work Shifts
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
