
export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deel takes the most error-prone, high-risk parts of payroll tax and worker classification and makes them
        automatic, so small business owners in South Florida can stop worrying about compliance every payroll
        cycle. Instead of spending hours tracking down W-9s, chasing forms, or reading up on the latest IRS
        changes, Deel automates the collection and storage of all required tax documentation for both employees
        and contractors. The platform generates, files, and stores every major tax form (W-2s for employees,
        1099-NECs for contractors, and all supporting records) without manual intervention. This means no more
        last-minute scrambles at year-end or missed deadlines that trigger penalties.</p>
      <p className="text-md text-white shadow-text pt-3">
        Worker classification is where many businesses slip up. Deel’s built-in AI-powered classifier reviews
        each worker’s actual duties, contract, and work relationship using the latest local and federal rules.
        It flags risks before they become problems and provides a clear, defensible record of why each person is
        classified as an employee or contractor. When the work or relationship changes, Deel prompts a review,
        so businesses stay ahead of regulatory shifts. This reduces the chance of an IRS or Department of Labor
        audit leading to back taxes, penalties, or lawsuits. The business owner no longer has to guess or rely
        on outdated checklists. Deel’s system keeps the classification process current and defensible.</p>
      <p className="text-md text-white shadow-text pt-3">
        Deel’s Contractor of Record (CoR) service takes this a step further for contractors. When a business
        uses Deel CoR, Deel itself becomes the legal employer on paper for those contractors, handling all
        compliance, contracts, and payroll. If a misclassification claim ever arises, Deel, not the
        business, assumes the legal liability. This is not just an indemnification clause; it is a structural
        shift in risk. The business can scale up or down with freelancers and gig workers without the constant
        fear that a single audit could erase their profit. Deel’s CoR also means every contractor engagement is
        backed by a compliant contract, drafted and reviewed for local legal standards, and updated
        automatically as laws change.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tax compliance&nbsp;is not static. Laws change,
        thresholds move, and new reporting requirements appear with little warning. Deel’s Compliance Hub
        continuously monitors regulatory updates across all 50 states and globally. When a new rule affects
        payroll tax, worker classification, or reporting, the platform updates itself and sends alerts to the
        business. This eliminates the need for owners to track legal updates manually or subscribe to expensive
        compliance newsletters. Every change is documented and auditable, so the business can prove compliance
        at any time. During due diligence or an audit, Deel provides a clear, consolidated record of every
        payment, classification, and filing, reducing the risk of operational slowdowns or failed funding
        rounds.</p>
      <p className="text-md text-white shadow-text pt-3">
        Payment processing is another major pain point for businesses with mixed teams. Deel consolidates all
        payments, whether to W-2 employees or 1099 contractors, into a single, automated workflow. Payroll and
        contractor payments can be made in 120+ currencies, including cryptocurrency, with one click. This
        removes the need for manual bank transfers, reduces processing time from days to hours, and ensures
        every payment is tracked, reconciled, and properly coded for accounting. For businesses that use
        QuickBooks, Xero, or NetSuite, Deel integrates directly, syncing every invoice, bill, and payroll run
        into the general ledger. This means no more manual entry, fewer reconciliation errors, and a month-end
        close that happens in hours, not days.</p>
      <blockquote cite="https://www.deel.com/payroll/contractor-of-record/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Reduce the risk of worker misclassification, no matter where you source talent.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        For the South Florida owner who started this page, Friday afternoons change with Deel in place. Instead
        of sorting through spreadsheets and worrying about compliance, they see a dashboard with every worker
        classified, every tax form ready, and every payment scheduled. When they bring on a new contractor for a
        seasonal project, Deel handles the contract, classification, and payment, with no legal guesswork and no risk of
        missing a state-specific tax rule. If a law changes in Miami-Dade or a new federal reporting threshold
        appears, Deel updates the workflow and notifies the business. The owner’s week is returned to running
        and growing the business, not chasing paperwork or fearing audits. The risk of payroll tax and worker
        misclassification drops from a daily worry to a managed, auditable process, one that scales as fast as
        the business needs.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-deel-removes-the-weekly-pain-from-payroll-tax-worker-misclassification" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Deel Removes the Weekly Pain from Payroll Tax &amp; Worker Misclassification
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
              <h2 id="how-deel-removes-the-weekly-pain-from-payroll-tax-worker-misclassification-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Deel Removes the Weekly Pain from Payroll Tax &amp; Worker Misclassification
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
