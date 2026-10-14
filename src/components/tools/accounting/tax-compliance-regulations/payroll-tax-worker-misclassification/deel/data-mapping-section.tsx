export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The most important decisions in a Deel deployment happen before the first payroll run. Data structure
        and mapping are not just technical details—they determine whether your payroll, tax, and compliance
        workflows will run smoothly or create new headaches. For South Florida small businesses, these choices
        matter because of the mix of W-2 employees, 1099 contractors, and the need to track compliance across
        multiple states and job types.</p>
      <p className="text-md text-white shadow-text pt-3">
        Deel’s platform expects worker data to be structured by employment type, location, pay frequency, and
        tax status. That means you need to map each worker to the right category—W-2 or 1099—up front, using
        Deel’s classification tools. The AI-based classifier uses local legal standards and case law to flag
        anyone who might be misclassified, so you can address it before the IRS or Department of Labor does.
        This is not a generic “employee or contractor” toggle; it’s a structured assessment that looks at
        control, economic dependence, and the actual work relationship, not just what’s on the contract.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, you need to map pay codes and deduction types to match your business’s actual payroll practices.
        Deel’s templates cover standard pay types—hourly, salary, overtime, commission—and let you add custom
        codes for bonuses, allowances, or local taxes. For each, you assign the right general ledger account so
        payroll and expense data flow directly into your accounting system without manual re-coding. This is
        especially critical if you use QuickBooks, Xero, or NetSuite, since the integration relies on these
        mappings to keep your books audit-ready.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tax document mapping is another key step. Deel automates the collection and filing of W-9s for
        contractors and W-4s for employees, but you need to decide up front how these are linked to each
        worker’s profile. The platform also collects local compliance documents—like right-to-work verification
        or state-specific tax forms—based on location and worker type. You set the rules for which documents are
        required, and Deel’s engine sends reminders and tracks completion, so nothing falls through the cracks
        during onboarding or annual updates.</p>
      <p className="text-md text-white shadow-text pt-3">
        Benefits and deductions must be mapped to the right statutory and supplementary categories. Deel’s
        platform supports both, and you choose which workers get which deductions—health insurance, retirement
        plans, local unemployment taxes—based on their employment status and location. For multi-state
        businesses, this mapping ensures that the right taxes and withholdings are applied, even if workers move
        or split time across locations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, approval workflows and access controls are set at the mapping stage. You define who can approve
        payroll runs, who can view sensitive tax data, and how exceptions are flagged for review. Deel’s
        in-platform workflows let you route approvals, flag outliers, and lock down access without relying on
        outside systems or email chains. This is especially important for small businesses with lean teams,
        where one person may have multiple roles and you need clear audit trails for every change.</p>
      <p className="text-md text-white shadow-text pt-3">
        Getting these data structure and mapping decisions right at the start is what lets Deel automate
        payroll, tax filing, and compliance without constant manual intervention. It also means that as your
        business grows—adding new workers, opening new locations, or shifting between employee and contractor
        models—the platform can scale with you, without needing to rebuild your data or workflows from scratch.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="getting-data-structure-and-mapping-right-from-day-one-in-deel" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Getting Data Structure and Mapping Right from Day One in Deel
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
              <h2 id="getting-data-structure-and-mapping-right-from-day-one-in-deel" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Getting Data Structure and Mapping Right from Day One in Deel
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
