import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Payroll tax and worker misclassification issues do not come from a lack of effort or care. They come
        from the reality that most small businesses in South Florida are running at full tilt, with owners and
        bookkeepers stretched across too many roles. The cracks show up in the details: a contractor brought in
        for a three-week job is suddenly on the schedule five days a week for months, but nobody updates their
        status. A new hire lives over the county line, but the payroll system still has last year’s tax tables.
        A paper invoice goes missing, so an independent contractor gets paid
        through&nbsp;<GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>, no W-9 on file, and
        nobody is sure if that triggers a 1099. The line between compliance and exposure is crossed by mistake,
        not intent.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first breakdown is in classification. The IRS and state agencies do not care about job titles or
        what a contract says if the daily reality looks like employment. Owners often treat regular, full-time
        workers as 1099 contractors to save on taxes or simplify payroll, but this shortcut ignores the
        behavioral and financial controls that define employment. Even a signed contractor agreement does not
        protect you from an audit if the worker is treated like staff. Misclassification exposes the business to
        back taxes, penalties, and the risk of employment claims, but the trigger is often just trying to fill a
        shift quickly or keep payroll manageable during peak season.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual processes make the situation worse. When payroll tax deposits, overtime calculations, and local
        withholdings are tracked in spreadsheets and paper files, errors pile up. Forgetting to register or file
        payroll taxes with the Florida Department of Revenue is common—especially for businesses crossing county
        lines or hiring remote workers who move. The rules for Miami-Dade, Broward, and Palm Beach are not
        always the same, and missing a change in rates or a new local surtax can snowball into a compliance
        problem before anyone notices.</p>
      <p className="text-md text-white shadow-text pt-3">
        Year-end is a recurring trap. Delaying W-2 and 1099 e-filing, or sending forms with missing or incorrect
        taxpayer identification numbers, triggers non-negotiable IRS penalties. Owners and bookkeepers scramble
        to track down paperwork, chase contractors for W-9s, or fix errors after the fact. By then, the
        penalties and the risk of audit are already locked in. Cross-platform checks are either missing or
        happen too late, and data entry errors are caught when tax forms bounce, not before.</p>
      <p className="text-md text-white shadow-text pt-3">
        As teams grow and the business expands into new counties or states, complexity multiplies. Manual
        onboarding of distributed workers can miss state-specific compliance steps, leading to missing labor
        forms or incorrect tax allocations. Approving paper contractor invoices without clear separation from
        employee payroll creates legal ambiguity, making it easy for audits to flag misclassification or
        overtime violations long after the work is done. Standalone detection apps that alert you to problems
        but require manual data syncing to fix them only compound the issue: the error is flagged, but
        correcting it means more work and more room for mistakes.</p>
      <p className="text-md text-white shadow-text pt-3">
        All of this comes back to the same place: processes built for a smaller, simpler business do not keep up
        with growth or changing rules. Owners end up relying on outdated contract templates, manual data entry,
        and last year’s processes, hoping they will hold. When the state or IRS calls, or a team member files a
        complaint, the gaps are exposed all at once. The problem is not that small businesses do not care—it’s
        that the system is stacked against anyone trying to do this by hand, at speed, with no margin for error.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="where-payroll-tax-and-worker-misclassification-break-down-for-small-businesses" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Where Payroll Tax and Worker Misclassification Break Down for Small Businesses
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="where-payroll-tax-and-worker-misclassification-break-down-for-small-businesses" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Where Payroll Tax and Worker Misclassification Break Down for Small Businesses
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
