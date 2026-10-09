import Link from "next/link";

export default function WhenRightSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Automated Payment Execution is not a one-size-fits-all solution. For small businesses grappling with
        the challenges of manual accounts payable processes, automation can be a game-changer. However,
        it&#39;s crucial to assess whether your business is ready for this transition. Understanding when to
        implement automated payment systems can save you from unnecessary costs and ensure a smoother
        integration into your existing processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        First, evaluate your current accounts payable workflow. If your team spends excessive time on manual
        data entry, invoice approvals, and payment processing, automation could be the right move. Businesses
        that process a high volume of invoices or deal with frequent payment errors stand to benefit
        significantly. Automated systems like&nbsp;
        <Link id="use-cases-accounting-payment-execution-when-bill"
          href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill" className="text-[#C83803] hover:underline">
          Bill
        </Link>&nbsp;can streamline these processes by integrating with your existing accounting software and
        reducing manual interventions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, consider the scalability of your operations. As your business grows, so too will your accounts
        payable workload. Automated Payment Execution systems offer the flexibility to handle increased
        transaction volumes without requiring additional staffing. This scalability ensures that your payment
        processes remain efficient as your business expands.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, automation may not be necessary for every business. If your company manages a small number of
        invoices with minimal errors, the return on investment for an automated system might not justify the
        cost. In such cases, focusing on optimizing current manual processes could be more beneficial.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once you’ve determined that Automated Payment Execution aligns with your business needs, the next step
        is to choose the right tool. Consider solutions like&nbsp;
        <Link id="use-cases-accounting-payment-execution-when-tipalti"
          href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti" className="text-[#C83803] hover:underline">
          Tipalti
        </Link>&nbsp;and&nbsp;
        <Link id="use-cases-accounting-payment-execution-when-avidxchange"
          href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange" className="text-[#C83803] hover:underline">
          AvidXchange
        </Link>, which offer robust features for managing complex payment workflows and ensuring compliance
        with financial regulations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Implementation is the final consideration. With tools like&nbsp;
        <Link id="use-cases-accounting-payment-execution-when-melio"
          href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio" className="text-[#C83803] hover:underline">
          Melio
        </Link>, businesses can expect a seamless integration with their existing systems, minimizing downtime
        and ensuring a quick transition to automated processes. A successful rollout involves thorough
        training for your team to maximize the benefits of the new system.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Automated Payment Execution is a strategic investment for businesses ready to enhance
        their accounts payable processes. By understanding when it is the right call and preparing adequately
        for implementation, you can streamline operations, reduce errors, and focus on growth. With the right
        tools and approach, automation can redefine your business efficiency, allowing you to allocate
        resources more effectively and improve overall financial management.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="use-cases-accounting-payment-execution-when-consultation"
          href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
          booking your free consultation
        </Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Walk me through what happens from the moment a vendor bill arrives until the vendor is paid.</li>
        <li>Where do bills arrive today—email, paper mail, vendor portals, text messages, employee inboxes, or all of the above?</li>
        <li>Who enters bills into QuickBooks, Xero, or your accounting system?</li>
        <li>Who decides whether a bill is valid and ready to pay?</li>
        <li>Who can actually release money from the bank account?</li>
        <li>How many vendor bills or payments do you process in a typical month?</li>
        <li>How are most vendors paid today—check, ACH, bank transfer, card, wire, or a mix?</li>
        <li>How often do you run payments: daily, weekly, twice monthly, or only when someone says a bill is urgent?</li>
        <li>What is the most frustrating part of paying vendors today?</li>
        <li>If you took a week off, who would know which bills are legitimate, approved, and due?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="determining-when-automated-payment-execution-is-right-for-your-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Determining When Automated Payment Execution Is Right for Your Business
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
              <h2 id="determining-when-automated-payment-execution-is-right-for-your-business" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Determining When Automated Payment Execution Is Right for Your Business
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
