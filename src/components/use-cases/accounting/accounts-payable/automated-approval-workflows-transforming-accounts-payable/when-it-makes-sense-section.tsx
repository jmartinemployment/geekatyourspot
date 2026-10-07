import Link from "next/link";

export default function WhenItMakesSenseSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deciding whether to implement automated approval workflows requires a careful assessment of your
        current accounts payable processes. For small businesses, this decision hinges on the volume of
        invoices processed and the manual effort involved. Businesses dealing with high invoice volumes and
        experiencing frequent approval delays are prime candidates for automation. This is where tools
        like&nbsp;
        <Link id="use-cases-accounting-approval-workflows-sense-bill"
          href="/tools/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/bill" className="text-[#C83803] hover:underline">
          Bill
        </Link>&nbsp;and&nbsp;
        <Link id="use-cases-accounting-approval-workflows-sense-ramp"
          href="/tools/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/ramp" className="text-[#C83803] hover:underline">
          Ramp
        </Link>&nbsp;come into play, offering streamlined workflows that reduce manual intervention and
        errors.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Signs Your Business Needs Automation
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        If your team regularly faces bottlenecks due to manual processing, or if errors from manual data
        entry are common, it&#39;s time to consider automation. For instance, if Jane, our hypothetical
        business owner, finds her team spending hours manually routing invoices for approval, this is a clear
        indicator of inefficiency. Automating this process can significantly cut down on the time spent and
        reduce the risk of human error.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, if delays are frequent because approvals depend on the availability of specific
        individuals, then automated approval workflows can help by routing tasks automatically to available
        approvers. This ensures continuity and reduces the dependency on any single team member.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        When Manual Processes May Still Work
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        However, if your business processes a low volume of invoices and manual approvals do not
        significantly impact your operations, you might not need to invest in automation just yet. For
        example, if Jane&#39;s business only handles a few invoices a month and her team manages them without
        delay or error, the cost and effort of implementing automation might outweigh the benefits.</p>
      <p className="text-md text-white shadow-text pt-3">
        In such scenarios, maintaining manual processes could be more practical and cost-effective, provided
        they do not hinder your business operations or cause significant inefficiencies.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="use-cases-accounting-approval-workflows-sense-consultation"
          href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
          booking your free consultation
        </Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>How many vendor invoices do you process in a typical month?</li>
        <li>Where do invoices currently arrive: email, paper mail, vendor portals, text messages, employee forwarding, or multiple locations?</li>
        <li>Is there one central AP inbox, or do invoices go to different people and departments?</li>
        <li>Who enters invoice details into QuickBooks, Xero, or your accounting system?</li>
        <li>&ldquo;Invoice capture vs. AP automation: what does your business actually need?&rdquo;</li>
        <li>&ldquo;Can invoice software read every line—or just the total?&rdquo;</li>
        <li>&ldquo;Who checks an invoice when AI gets it wrong?&rdquo;</li>
        <li>&ldquo;Does your invoice tool create a reviewable bill or post directly to accounting?&rdquo;</li>
        <li>&ldquo;What does automated invoice processing really cost once line-item credits are included?&rdquo;</li>
        <li>How many people touch an invoice before it is ready to pay?</li>
        <li>Can you walk me through the last invoice you paid, from the moment it arrived to the moment payment was approved?</li>
        <li>What happens when an invoice arrives without a purchase order, job number, department, or proper coding?</li>
        <li>Which types of invoices are most common: recurring bills, subcontractor invoices, inventory, utilities, rent, credit-card expenses, or project-related expenses?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-automated-approval-workflows-make-sense-for-your-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Automated Approval Workflows Make Sense for Your Business
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-automated-approval-workflows-make-sense-for-your-business" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Automated Approval Workflows Make Sense for Your Business
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
