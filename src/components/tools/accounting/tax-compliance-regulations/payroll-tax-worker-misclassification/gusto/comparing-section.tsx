import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in South Florida do not lack options for automating payroll tax and worker
        classification. Gusto sits in a crowded field that
        includes&nbsp;<Link id={`tools-accounting-payroll-tax-worker-misclassification-gusto-comparing-adp${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp" className="text-[#0B162A] hover:underline">ADP</Link>,&nbsp;<Link id={`tools-accounting-payroll-tax-worker-misclassification-gusto-comparing-deel${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel" className="text-[#0B162A] hover:underline">Deel</Link>,
        and other payroll platforms, each promising to reduce errors, simplify filings, and help owners avoid
        misclassification penalties. But when you look closely at how these systems actually handle the core
        risks (federal, state, and
        local&nbsp;<GlossaryLink slug="tax-compliance" className="text-[#0B162A] hover:underline">tax
        compliance</GlossaryLink>, and the separation of W-2 employees from 1099 contractors), Gusto stands out
        for its direct approach to automation and its focus on small and mid-sized teams.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core difference lies in how Gusto automates the most error-prone steps. Many platforms offer payroll
        calculation, but Gusto goes further by automatically calculating, filing, and paying all local, state,
        and federal payroll taxes every time you run payroll. This includes multi-state filings at no extra
        cost, a critical point for South Florida businesses with workers crossing state lines.
        Competing platforms may charge extra for each state or local filing, or require manual intervention to
        handle special tax rates. Gusto&#39;s automation removes that manual step, reducing
        the risk of late filings and the steep IRS penalties that come with them.</p>
      <p className="text-md text-white shadow-text pt-3">
        Worker classification is another area where platforms diverge. While all major payroll tools provide
        some workflow for adding employees and contractors, Gusto builds in clear separation: W-2 employees and
        1099 contractors are tracked, paid, and reported on distinct paths. The platform supports unlimited job
        types, pay rates, and payroll runs, so you can pay a part-time bookkeeper as a contractor, a seasonal
        installer as an employee, and keep their records and tax filings straight without building custom rules
        or toggling between modules. This is not always true of competitors, where contractor payments may
        require a separate tool or add-on, or where the system is built around a single employment type.</p>
      <p className="text-md text-white shadow-text pt-3">
        Gusto&#39;s filing process also stands out for its completeness and speed. The platform generates and
        files W-2s and 1099s directly, delivering electronic copies to your team and contractors, even if you
        switch providers mid-year. Many platforms will generate the forms but leave filing or delivery to you,
        or charge extra for end-of-year filings. Gusto&#39;s workflow ensures that, as long as your data is
        accurate, your tax forms are filed on time and in the right place, reducing the risk of missing a
        deadline or sending a form to the wrong agency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is another point of real-world difference. Gusto connects natively with QuickBooks and Xero,
        making it possible to sync payroll data with your bookkeeping without manual exports or reconciliation.
        Some competitors require higher-priced tiers for these connections, or only offer basic CSV exports. For
        a small business that already relies on QuickBooks
        for&nbsp;<GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts
        payable</GlossaryLink>, this means fewer data silos and less risk of mismatched records when tax season
        arrives.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, pricing and scalability matter. Gusto&#39;s flexible pricing means you only pay for the people
        you pay each month. There is no extra charge for running payroll in multiple states, paying contractors
        instead of employees, or filing extra tax forms. This is not universal. Some platforms bill by number of
        pay runs, by state, or by additional features like contractor payments. For a business that flexes its
        workforce up and down with the season, or that needs to run payroll weekly in the busy months and
        monthly in the slow ones, this pricing model avoids surprise costs.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, Gusto is not the only tool that claims to automate payroll tax and worker classification, but
        it is one of the few that makes these protections the default for small businesses. Where others offer
        partial automation or require manual checks at key steps, Gusto closes the loop from pay run to tax
        filing, and from worker onboarding to year-end forms, without hidden fees or complex add-ons. For owners
        who have been burned by late filings, misclassified workers, or integration headaches, this is the
        difference between a tool that fits and one that just adds another layer of risk.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-gusto-compares-to-other-payroll-tax-and-worker-classification-solutions" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Gusto Compares to Other Payroll Tax and Worker Classification Solutions
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-gusto-compares-to-other-payroll-tax-and-worker-classification-solutions-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Gusto Compares to Other Payroll Tax and Worker Classification Solutions
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
