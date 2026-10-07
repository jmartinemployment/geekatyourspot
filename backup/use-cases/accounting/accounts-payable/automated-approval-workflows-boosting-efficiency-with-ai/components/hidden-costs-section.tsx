import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HiddenCostsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Picture your <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink> team buried under
        a mountain of invoices, each one demanding precious time and attention. The manual approval process
        not only consumes hours but also increases the risk of errors and delays. With each paper shuffled
        and email sent, compliance risks loom large, and payment deadlines threaten to slip away. This is the
        reality for many small and medium-sized businesses today. But there is a way out. Automated approval
        workflows offer a streamlined approach that can transform your AP department from a bottleneck into a
        model of efficiency. By automating these processes, you save time, reduce errors, and ensure
        compliance, all while freeing up your team to focus on more strategic tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        In the traditional accounts payable setup, the journey from invoice receipt to payment is fraught
        with inefficiencies. Manual data entry, email chains for approvals, and the constant back-and-forth
        for clarifications mean that businesses often struggle to keep pace. These outdated methods lead to
        significant time wastage and can result in missed payment deadlines, affecting vendor relationships
        and potentially incurring late fees.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated approval workflows, on the other hand, revolutionize this process. Solutions like&nbsp;
        <Link id="use-cases-accounting-automated-approval-workflows-hidden-costs-approvalmax"
          href="/tools/accounting/accounts-payable/approvalmax" className="text-[#C83803] hover:underline">
          ApprovalMax
        </Link>, Melio, and&nbsp;
        <Link id="use-cases-accounting-automated-approval-workflows-hidden-costs-ramp"
          href="/tools/accounting/accounts-payable/ramp" className="text-[#C83803] hover:underline">
          Ramp
        </Link>&nbsp;offer intelligent routing of invoices to the correct approvers, ensuring that each
        invoice is matched to the appropriate workflow without manual intervention. This automation not only
        speeds up the approval process but also maintains a comprehensive audit trail, enhancing compliance
        and visibility.</p>
      <p className="text-md text-white shadow-text pt-3">
        With the right tools and processes in place, businesses can see a marked improvement in their AP
        operations. Reduced manual effort, fewer errors, and faster processing times lead to cost savings and
        a more agile financial function. For small and medium-sized businesses, this means being able to
        allocate resources more effectively and focus on growth-driving activities. If you&#39;re ready to
        transform your AP processes, automated approval workflows can be your first step towards greater
        efficiency and success.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-hidden-costs-of-manual-approval-processes" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Costs of Manual Approval Processes
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-hidden-costs-of-manual-approval-processes" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Costs of Manual Approval Processes
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
