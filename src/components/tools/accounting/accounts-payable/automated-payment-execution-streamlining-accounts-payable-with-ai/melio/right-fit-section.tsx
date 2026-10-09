import Link from "next/link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Melio is designed to cater to small businesses seeking efficient Automated Payment Execution. Its
        features are tailored to simplify payment processes and improve cash flow management. For businesses
        that manage multiple vendors and require a centralized platform for payment execution, Melio offers a
        robust solution.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Melio might not be the best fit for every business. Enterprises with highly specialized
        payment workflows or those needing extensive customization may find it lacks the advanced capabilities
        they require. In such cases, a more complex platform might be necessary to meet those specific
        needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses ready to transition from manual to automated payment processes, Melio provides an
        intuitive platform that reduces manual workload and minimizes errors. Its ability to handle recurring
        payments, batch payments, and even split bills makes it versatile enough for various business
        models.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next step for businesses considering Melio is to evaluate their current payment processes and
        identify areas where automation could provide the most benefit. By understanding these needs,
        businesses can better assess how Melio&#39;s features align with their operational goals.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the decision to implement Melio should be based on a thorough analysis of its
        capabilities in relation to your business needs. By focusing on the specific benefits Melio offers,
        businesses can make an informed decision about whether it&#39;s the right tool for their Automated
        Payment Execution.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-payment-execution-melio-right-fit-consultation"
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
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-melio-right-for-your-business">
                Is Melio Right for Your Business?
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-melio-right-for-your-business">
                Is Melio Right for Your Business?
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
