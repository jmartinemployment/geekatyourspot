import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Melio offers a solution that revolutionizes Automated Approval Workflows for small businesses,
        transforming a time-consuming task into a streamlined process. By automating the routing of invoices
        to the appropriate approvers, Melio eliminates the need for manual intervention, reducing errors and
        speeding up the approval process. This automation ensures that every invoice is directed to the right
        person based on pre-set rules, such as amount thresholds or specific vendors.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Bills route to the right person automatically, keeping the bill approval process fast and
        simple.&quot;&nbsp;
        <a id="tools-accounting-approval-workflows-melio-transforms-source"
          href="https://melio.com/industries/software-technology/"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Melio
        </a></p>
      <p className="text-md text-white shadow-text pt-3">
        One of Melio&#39;s key advantages is its ability to set up approval rules quickly and efficiently.
        Businesses can define these rules by amount, category, or entity, allowing for a customized workflow
        that aligns with their specific needs. This flexibility ensures that low-risk invoices are processed
        swiftly, while high-value transactions receive the necessary oversight. By doing so, Melio not only
        saves time but also enhances compliance and financial control.</p>
      <p className="text-md text-white shadow-text pt-3">
        Melio also integrates seamlessly with popular accounting software like QuickBooks, Xero, and NetSuite.
        This integration means that once an invoice is processed, it is automatically synced with the
        business&#39;s accounting system, maintaining accurate and up-to-date financial records. This feature
        not only reduces the risk of human error but also provides real-time visibility into the payment
        status, enabling better cash flow management.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s mobile capabilities further enhance its utility, allowing business owners and
        managers to approve or reject payments on the go. This mobile functionality ensures that approvals are
        not delayed, even when decision-makers are away from their desks. With Melio, businesses can maintain
        control over their financial processes without being tied down to a physical office.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, Melio&#39;s automation capabilities extend to reminders and escalations. If an invoice is
        nearing its due date without approval, the system can automatically send reminders or escalate the
        issue to an alternate approver. This proactive approach minimizes the risk of late payments and helps
        maintain strong vendor relationships. By incorporating these features, Melio not only streamlines the
        approval process but also enhances the overall efficiency of a business&#39;s&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;operations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-melio-transforms-automated-approval-workflows">
                How Melio Transforms Automated Approval Workflows
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-melio-transforms-automated-approval-workflows">
                How Melio Transforms Automated Approval Workflows
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
