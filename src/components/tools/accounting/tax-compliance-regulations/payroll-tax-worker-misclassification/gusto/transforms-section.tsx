export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Gusto removes the guesswork, the manual checks, and the late-night spreadsheet audits from payroll tax
        and worker classification. For the owner juggling W-2 employees and 1099 contractors, Gusto is not just
        a way to run payroll. It is a system that automates the risk out of the process.</p>
      <p className="text-md text-white shadow-text pt-3">
        First, Gusto separates employee and contractor management at the source. When you onboard a new worker,
        the platform walks you through the classification process and keeps W-2 payroll and 1099 payments in
        distinct, audit-ready tracks. This means the system never lets you pay a contractor like an employee, or
        the other way around. The days of toggling between tabs, guessing which tax form applies, or missing a
        required deduction are over. If the IRS or state comes calling, Gusto’s records show exactly who was
        paid, how, and why, so there is no scrambling to reconstruct the paper trail.</p>
      <p className="text-md text-white shadow-text pt-3">
        Gusto automates every tax calculation, filing, and payment at the federal, state, and local level. Every time you run
        payroll, the platform pulls the latest tax tables and wage bases, so you never have to worry about
        missing an update or applying last year’s rates. When the Social Security wage base increases, Gusto
        uses the new threshold automatically. If your business operates across states, Gusto tracks
        the right withholding and reporting rules for each worker’s location. There’s no need to look up state
        rates or juggle multi-state filings; Gusto handles it behind the scenes, every pay cycle.</p>
      <blockquote cite="https://gusto.com/product/payroll/features" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        All local, state, and federal payroll taxes are calculated, filed, and paid automatically.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        The platform also takes on the burden of generating and filing all year-end tax forms. W-2s for
        employees and 1099s for contractors are created and filed electronically, with built-in checks for
        missing or incorrect identification numbers. This reduces the risk of failed filings and non-negotiable
        IRS penalties. Employees and contractors each receive their forms automatically, and if you switch to
        Gusto mid-year, it gathers the wage data needed to file complete forms for the entire year. There are no more
        last-minute scrambles or manual corrections. Gusto’s system flags issues before you submit, so mistakes
        are caught early.</p>
      <p className="text-md text-white shadow-text pt-3">
        Cross-platform data entry checks are not just a feature. They are a guardrail. Gusto flags missing or
        incorrect Social Security numbers, addresses, or other critical data before any payroll run completes.
        This means you don’t find out about an error after the IRS does. The result: fewer rejected filings,
        fewer penalty notices, and less time spent chasing down missing information. For businesses that have
        been burned by a single digit out of place, this is peace of mind built into the workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Gusto also keeps your business current with compliance changes. As tax codes, deduction rules, and
        reporting requirements shift, the platform updates itself. You don’t have to spend weekends reading IRS
        bulletins or state tax updates. Gusto’s system applies the changes before your next payroll. This is
        especially critical for South Florida businesses where seasonal surges, cross-county work, and remote
        teams mean the rules are always in motion. Gusto’s automation means you never have to worry about
        missing a new rule or applying an outdated threshold.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that rely on QuickBooks or Xero for bookkeeping, Gusto integrates directly, syncing
        payroll data without manual exports or double entry. This reduces the risk of data transfer errors and
        means your accountant has everything needed for tax season, without back-and-forth emails or missing
        records. Payroll, tax filings, and worker records flow into your accounting system, so you can see your
        compliance status and cash flow in real time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Gusto’s automation means you don’t need a dedicated HR or legal team to stay compliant. The
        platform handles new hire reporting, mandated federal forms (like I-9s, W-4s, W-2s, and 1099s), and even
        multi-state filings without extra fees. For the small business owner, this means fewer hours spent on
        compliance and more time running the business. The risk of a single human error penalty outweighs the
        cost of Gusto for an entire year. In practice, Gusto turns payroll tax and worker classification from a
        high-stakes gamble into a routine, automated process, one that protects your business every pay cycle,
        not just at year-end.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-gusto-actually-does-for-payroll-tax-worker-misclassification" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gusto actually does for Payroll Tax &amp; Worker Misclassification
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-gusto-actually-does-for-payroll-tax-worker-misclassification-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gusto actually does for Payroll Tax &amp; Worker Misclassification
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
