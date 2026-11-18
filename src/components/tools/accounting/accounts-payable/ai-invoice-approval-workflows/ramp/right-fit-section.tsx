import Link from "next/link";
export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Ramp&#39;s AI invoice approval workflows are well-suited for small businesses dealing with a high
        volume of invoices and seeking to reduce manual intervention. Its features are designed to streamline
        processes, reduce errors, and free up time for more strategic tasks. However, it&#39;s not a
        one-size-fits-all solution, and understanding whether it&#39;s right for your business involves
        assessing your specific needs and challenges.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses experiencing frequent delays in invoice approvals and struggling with manual data entry
        errors, Ramp offers a compelling solution. Its ability to automate and intelligently route invoices
        ensures that approvals are handled efficiently, reducing the risk of bottlenecks and errors. This can
        be a game-changer for teams that are overwhelmed by the volume of invoices they need to process.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the other hand, if your business processes a relatively low volume of invoices and manual approvals
        do not significantly impact your operations, Ramp might not be necessary. The investment in such a
        robust automation tool should be justified by the scale of your operations and the potential
        efficiency gains.</p>
      <p className="text-base text-white shadow-text pt-3">
        For those ready to explore automation, the next step is to assess your current workflows. Identify the
        areas where manual processes are most time-consuming and error-prone. Consider how Ramp&#39;s
        features, such as its OCR and ML capabilities, can address these specific challenges and improve your
        operations.</p>
      <p className="text-base text-white shadow-text pt-3">
        Engaging with a consultancy like Geek @ Your Spot LLC can provide additional insights into how Ramp can be
        tailored to fit your business needs. Their expertise in&nbsp;
        AI&nbsp;implementation ensures that Ramp is configured to
        integrate seamlessly with your existing systems, maximizing the benefits of automation.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <a href="#consultationAppointment2xl" id={`tools-accounting-approval-workflows-ramp-right-fit-consultation${idSuffix}`} className="text-[#C83803] hover:underline">
          booking your free consultation
        </a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>About how many vendor invoices do you get a month?</li>
        <li>Where do invoices enter your workflow: email, mail, vendor portal, or a combination?</li>
        <li>Which accounting system do you use?</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Ramp’s OCR and machine learning speak to a team buried in hundreds of invoices a month, and our post <Link id={`tools-accounting-accounts-payable-ai-invoice-approval-workflows-ramp-xlink-blog${idSuffix}`} href="/blog/accounting/accounts-payable/how-automated-approval-workflows-transform-accounts-payable" className="text-[#C83803] hover:underline">Accounts Payable Approval Automation</Link> explains the other half of that problem. Without a tracked workflow the team learns an invoice is stuck only when a vendor calls, and the owner who insists on reviewing everything becomes the bottleneck the moment they travel. The post places Ramp at the tracking and compliance stage, where real-time status and an audit trail replace that guesswork. The four-phase assessment in our <Link id={`tools-accounting-accounts-payable-ai-invoice-approval-workflows-ramp-xlink-pillar${idSuffix}`} href="/use-cases/accounting/accounts-payable/ai-invoice-approval-workflows" className="text-[#C83803] hover:underline">AI Invoice Approval Workflows</Link> guide confirms whether your volume justifies the investment before anything is configured.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-ramp-right-for-your-business">
                Is Ramp Right for Your Business?
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-ramp-right-for-your-business-lg">
                Is Ramp Right for Your Business?
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
