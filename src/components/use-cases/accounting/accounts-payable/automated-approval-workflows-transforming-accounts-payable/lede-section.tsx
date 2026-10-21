import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Take the example of Jane, the owner of a small but growing business in West Palm Beach, who finds
        herself buried under a mountain of invoices every Monday morning. Each one demands careful scrutiny,
        matching line items to
        purchase orders and receipts. This manual process not only eats up valuable time but also increases
        the risk of errors that could cost her business thousands. Jane knows there must be a better way to
        handle this tedious task.</p>
      <p className="text-md text-white shadow-text pt-3">
        An invoice approval workflow is the set of rules that sends each invoice to the right people for
        sign-off before it is paid. Automated approval workflows offer a solution by streamlining the process, ensuring invoices are
        automatically captured, checked, and routed to the appropriate decision-makers without the
        bottlenecks or errors that plague manual methods. This page explores how small businesses like
        Jane&#39;s can leverage this <GlossaryLink slug="ai">AI</GlossaryLink>-powered approach to boost
        efficiency and cut costs, transforming their&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink> processes into a seamless
        operation.</p>
      <p className="text-md text-white shadow-text pt-3">
        In the fast-paced world of small business, every minute counts. Yet, many companies find themselves
        stuck in outdated&nbsp;<Link id={`use-cases-accounting-approval-workflows-lede-accounts-payable${idSuffix}`} href="/use-cases/accounting/accounts-payable/ai-ap-automation-software" className="text-[#C83803] hover:underline">accounts payable</Link>&nbsp;processes that are slow, error-prone, and costly. Manual data entry
        and approval bottlenecks can lead to delayed payments, strained vendor relationships, and even
        financial inaccuracies. This is where automated approval workflows come in, promising to revolutionize
        how businesses handle their accounts payable.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        The Cost of Manual Accounts Payable Processes
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Manual accounts payable processes are not just a headache; they&#39;re a financial drain. Businesses
        spend countless hours on data entry, matching invoices to purchase orders, and chasing approvals.
        These inefficiencies lead to delayed payments, errors, and compliance risks. For small businesses,
        every delay can impact cash flow and vendor relationships, making it crucial to find a more efficient
        solution.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How Automated Workflows Enhance Efficiency
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Automated approval workflows streamline the entire accounts payable process by using AI to capture
        invoice data accurately and route it to the right people for approval. This reduces manual input,
        accelerates processing times, and minimizes errors. The system can match invoices against purchase
        orders and receipts, ensuring compliance and reducing the risk of fraud. With real-time tracking and
        audit trails, businesses can maintain transparency and control over their financial operations.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Choosing the Right Tools for Your Business
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Selecting the right tools for automated approval workflows is crucial for successful implementation.
        Businesses should look for solutions that integrate seamlessly with existing systems, offer
        customizable workflows, and provide robust support for mobile approvals. Cost considerations, such as
        per-user pricing and potential savings in time and labor, should also factor into the decision-making
        process. By choosing the right solution, businesses can ensure a smooth transition to automated
        workflows that deliver tangible benefits.</p>
      <p className="text-md text-white shadow-text pt-3">For a shorter overview, read <Link id={`use-cases-accounting-approval-workflows-lede-blog${idSuffix}`} href="/blog/accounting/accounts-payable/how-automated-approval-workflows-transform-accounts-payable" className="text-[#C83803] hover:underline">Accounts Payable Approval Automation</Link> on our blog.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="transforming-accounts-payable-with-automated-approval-workflows" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Transforming Accounts Payable with Automated Approval Workflows
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="transforming-accounts-payable-with-automated-approval-workflows-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Transforming Accounts Payable with Automated Approval Workflows
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
