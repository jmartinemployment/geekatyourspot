import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function SequenceSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out a payroll tax and worker misclassification solution is not a matter of flipping a switch and
        watching compliance fall into place. The real work happens in a sequence that tests every assumption you
        had about your business’s people, data, and processes. Here’s what the rollout looks like for a real
        small business in Miami-Dade, based on the four-phase methodology Geek @ Your Spot LLC uses for every
        project.</p>
      <p className="text-md text-white shadow-text pt-3">
        It starts with a business objectives alignment session. This is not a formality. You define exactly what
        you want out of the automation: fewer IRS notices, the ability to onboard contractors in a day, or a
        monthly payroll cycle that never misses a deadline. Every tool—Gusto, Rippling, Deel, ADP, Justworks—can
        automate some part of the process, but unless you set measurable KPIs at the start, you won’t know if
        you’re fixing the real problem or just moving faster in the wrong direction. For a lot of South Florida
        small businesses, getting this step wrong means automating the wrong workflow, like building overtime rules for a
        team that mostly works project-based gigs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next comes the&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>&nbsp;assessment. This
        is where the skeletons come out. You pull every worker record, every tax ID, and every historical pay
        run into a staging area. Here, the team will find missing W-9s, duplicate entries for the same
        contractor, and misfiled 1099s from prior years. Gusto and Justworks both flag these errors, but cleanup
        is still manual—someone has to track down workers for corrected information, fix mismatched Social
        Security numbers, and resolve classification edge cases. The more fragmented the legacy process, the
        longer this phase takes, and the more it exposes about why payroll errors happened in the first place.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the data is clean, the tech selection and architecture phase begins. Here’s where you decide which
        tool does what. If your business needs to automate payroll tax filings for teams in Miami-Dade,
        Broward, and Palm Beach, Gusto’s automatic tax calculation and filing feature is a fit. If you need to
        manage a mixed workforce—some full-time, some freelance, some paid by the job—Rippling and Deel can
        automate classification checks, contract generation, and real-time compliance alerts. ADP is often
        chosen when the business needs to scale from one shop to five, with centralized oversight. The process
        here is not picking the tool with the most features, but mapping each one to a bottleneck: who handles
        ongoing compliance, who triggers alerts when a worker’s status changes, who owns exception handling when
        a pay run fails.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pilot implementation comes last, not first. You launch in a sandbox, usually with one division or crew,
        running parallel to the old process for at least one pay cycle. This is where you see if the system
        flags a misclassified worker before payroll is run (as Rippling’s Compliance 360 does), or if the tool
        can withhold correctly for a worker who moves to another state without manual overrides. If the system fails to stop an error, you
        fix the workflow before rolling out to the rest of the business. Only when the process survives a real
        pay cycle do you turn on full automation. For some owners, this is the first time payroll runs without a
        spreadsheet check at midnight.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout this rollout, the business owner stays in the loop. Each tool’s automation works best when
        someone is responsible for reviewing flagged issues, approving exceptions, and signing off on changes.
        Deel’s Contractor of Record service, for instance, shifts liability to Deel, but only if the data and
        contracts are complete and accurate. If a worker’s classification is borderline, the system flags it for
        review, and the owner or HR lead makes the final call. If there is a tax notice or a missed filing,
        Justworks’ team steps in with support, but the process is only as good as the data that went in.</p>
      <p className="text-md text-white shadow-text pt-3">
        The sequence is always: define the goal, clean the data, select the tech, run a pilot, and only then, go
        live. Each step reveals what the next one needs. A rushed rollout skips the pilot and ends up automating
        yesterday’s errors. The right rollout turns compliance from a drag into a background process—one the
        owner barely thinks about, because the system catches and fixes issues before they become penalties.
        When Friday payroll comes, the owner is not buried in spreadsheets, but reviewing a dashboard where
        every worker, every tax line, and every compliance alert is visible and accounted for.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-rolling-out-payroll-tax-worker-misclassification-automation-really-looks-like-in-practice" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Rolling Out Payroll Tax &amp; Worker Misclassification Automation Really Looks Like in Practice
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-rolling-out-payroll-tax-worker-misclassification-automation-really-looks-like-in-practice" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Rolling Out Payroll Tax &amp; Worker Misclassification Automation Really Looks Like in Practice
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
