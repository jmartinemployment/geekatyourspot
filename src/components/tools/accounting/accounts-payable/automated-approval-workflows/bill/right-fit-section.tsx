import Link from "next/link";
export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Bill is particularly well-suited for small businesses that handle a large volume of invoices and need
        to streamline their approval processes. Its&nbsp;
        AI-powered features, such as automated invoice intake and
        coding, significantly reduce the time spent on manual data entry. This is especially beneficial for
        businesses experiencing growth and facing increased complexity in their&nbsp;
        accounts payable&nbsp;operations.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, Bill may not be the best fit for every small business. If your company processes a low
        volume of invoices or if manual approval processes are not causing significant delays or errors, the
        investment in Bill&#39;s advanced features might not offer a substantial return. For businesses with
        simpler needs, a less comprehensive solution might suffice.</p>
      <p className="text-base text-white shadow-text pt-3">
        For those considering Bill, the next step is to assess your current workflow and identify specific
        pain points. Determine how many invoices require approval each month, who is involved in the approval
        process, and where delays typically occur. This assessment will help you decide whether Bill&#39;s
        capabilities align with your needs and if it can effectively address your challenges.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC, a consultancy specializing in AI implementation for small businesses, can assist in
        this evaluation. They offer expertise in configuring Bill to fit your unique business environment,
        ensuring seamless integration with existing systems. Their guidance can be invaluable in maximizing
        the benefits of Bill&#39;s automation features, such as improved cash flow management and reduced
        manual errors.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ultimately, the decision to implement Bill should be based on a thorough understanding of your
        business&#39;s requirements and the potential efficiency gains. By leveraging the expertise of Geek @ Your Spot LLC, you can ensure a smooth transition to automated approval workflows, allowing your business
        to focus on strategic growth initiatives.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <a href="#consultationAppointment2xl" id={`tools-accounting-approval-workflows-bill-right-fit-consultation${idSuffix}`} className="text-[#C83803] hover:underline">
          booking your free consultation
        </a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>How many vendor invoices do you process in a typical month?</li>
        <li>Where do invoices currently arrive: email, paper mail, vendor portals, text messages, employee forwarding, or multiple locations?</li>
        <li>Is there one central AP inbox, or do invoices go to different people and departments?</li>
        <li>Who enters invoice details into QuickBooks, Xero, or your accounting system?</li>
        <li>“Invoice capture vs. AP automation: what does your business actually need?”</li>
        <li>“Can invoice software read every line, or just the total?”</li>
        <li>“Who checks an invoice when AI gets it wrong?”</li>
        <li>“Does your invoice tool create a reviewable bill or post directly to accounting?”</li>
        <li>“What does automated invoice processing really cost once line-item credits are included?”</li>
        <li>How many people touch an invoice before it is ready to pay?</li>
        <li>Can you walk me through the last invoice you paid, from the moment it arrived to the moment payment was approved?</li>
        <li>What happens when an invoice arrives without a purchase order, job number, department, or proper coding?</li>
        <li>Which types of invoices are most common: recurring bills, subcontractor invoices, inventory, utilities, rent, credit-card expenses, or project-related expenses?</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        The figures on this page are Bill’s own, and our post <Link id={`tools-accounting-accounts-payable-automated-approval-workflows-bill-xlink-blog${idSuffix}`} href="/blog/accounting/accounts-payable/how-automated-approval-workflows-transform-accounts-payable" className="text-[#C83803] hover:underline">Accounts Payable Approval Automation</Link> puts them in context. A 20% cut in manual entry and 99% accuracy on key invoice fields are what the vendor reports, and the post explains the manual habits those numbers depend on replacing, from invoices keyed into spreadsheets to follow-up emails that pile up unanswered and approvals that exist only in an email chain. Whether your monthly volume makes that return real is the question the assessment in our <Link id={`tools-accounting-accounts-payable-automated-approval-workflows-bill-xlink-pillar${idSuffix}`} href="/use-cases/accounting/accounts-payable/ai-approval-workflow" className="text-[#C83803] hover:underline">AI Approval Workflow</Link> guide answers, starting with a measurable goal and a data check before any plan is bought.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="determining-if-bill-is-right-for-your-business">
                Determining If Bill is Right for Your Business
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="determining-if-bill-is-right-for-your-business-lg">
                Determining If Bill is Right for Your Business
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
