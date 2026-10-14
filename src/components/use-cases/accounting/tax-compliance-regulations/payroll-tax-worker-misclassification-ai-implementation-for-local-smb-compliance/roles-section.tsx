export default function RolesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When you automate payroll tax and worker misclassification, the change hits every level of the
        business—even if it doesn’t look like it at first. The owner of that Miami landscaping crew, once
        drowning in spreadsheets and late-night form-filling, isn’t the only one whose day gets a rewrite. The
        impact runs from the crew chief who tracks hours, to the bookkeeper who juggles tax deadlines, to the
        office manager who fields calls from contractors asking about missing 1099s.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the business owner, the most obvious shift is control and visibility. Instead of hoping every piece
        of worker data is correct by the time payroll runs, the right system offers a dashboard view: who is
        classified as what, who worked where, which forms are missing, and what tax rates apply. This is not a
        small change. A missed classification or tax deposit that once meant a day on the phone with the IRS now
        triggers an automated alert—or, if you’re using ADP or Justworks, a call from a dedicated support team
        who already has the records in front of them. Owners spend less time firefighting and more time actually
        running the business.</p>
      <p className="text-md text-white shadow-text pt-3">
        The finance or bookkeeping team feels the change in their day-to-day workflow. Instead of re-keying
        hours from paper timesheets or chasing down managers for job codes, they work with data already flowing
        from scheduling and payroll apps. Tools like Gusto and Rippling flag missing Social Security numbers or
        mismatched contractor records before a pay run is ever submitted. Deel automates the collection and
        storage of W-9s and local tax profiles, so the days of scrambling for documentation at tax time are
        gone. Bookkeepers move from manual entry and last-minute corrections to exception handling and audit
        prep—spotting the one-off issue, not wrestling with every pay period.</p>
      <p className="text-md text-white shadow-text pt-3">
        Managers and crew leads experience less friction and more accountability. Instead of filling out
        timesheets and hoping they reach the right person, they enter hours and job locations into a mobile app
        or dashboard, which syncs with payroll and tax tools. With Rippling or Justworks, changes in worker
        status—say, a temp becoming a full-time employee—update everywhere, not just in one spreadsheet. The
        manager’s role shifts from paperwork shuffler to process owner: they see in real time if a worker’s
        classification or hours break a rule, and can fix it before payroll closes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Workers themselves—W-2 employees and 1099 contractors—notice the difference at year-end and every
        payday. No more waiting weeks for a corrected W-2 or chasing down a missing 1099. With Gusto, Rippling,
        or Deel, year-end forms are generated and delivered electronically, and any error gets flagged by the
        system, not by a frustrated worker. Contractors, especially, gain from platforms that offer self-service
        onboarding and documentation, cutting down on back-and-forth and delays. A crew member who worked jobs
        in both Miami-Dade and Broward gets the right withholding and forms, without needing to know the tax
        code.</p>
      <p className="text-md text-white shadow-text pt-3">
        But the biggest—sometimes invisible—change is the risk shift. Before automation, the risk of a
        misclassified worker or late tax filing lands squarely on the business and its staff. After automation,
        the risk is distributed: Deel’s Contractor of Record model, for example, legally assumes
        misclassification liability, taking the threat off the owner’s shoulders. ADP’s 24/7 compliance team
        steps in when a penalty or audit notice arrives. Justworks combines software with human HR specialists,
        so when the Florida Department of Revenue comes calling, you’re not alone. This is not just about saving
        hours or avoiding errors; it’s about moving the business from reactive to protected.</p>
      <p className="text-md text-white shadow-text pt-3">
        In a real rollout, the Miami crew in our opening gets a new Friday routine. The owner reviews a
        dashboard, not a pile of forms. The bookkeeper checks flagged exceptions, not every line of a pay run.
        Managers confirm hours and locations on their phones, not on paper. And the workers—whether they’re
        employees or contractors—get paid, get taxed, and get their forms on time, every time. That’s how
        people’s work changes when payroll tax and worker misclassification stops being a weekly gamble and
        becomes a quiet, reliable part of the business.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-in-the-business-feels-the-change-and-how-their-work-actually-changes" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who in the Business Feels the Change—And How Their Work Actually Changes
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
              <h2 id="who-in-the-business-feels-the-change-and-how-their-work-actually-changes" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who in the Business Feels the Change—And How Their Work Actually Changes
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
