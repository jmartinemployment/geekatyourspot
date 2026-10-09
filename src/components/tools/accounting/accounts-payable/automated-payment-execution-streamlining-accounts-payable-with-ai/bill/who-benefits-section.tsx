import Link from "next/link";

export default function WhoBenefitsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Bill is particularly well-suited for small to mid-sized businesses that are ready to embrace
        automation for their accounts payable processes. Companies struggling with manual invoice processing,
        approval bottlenecks, and payment errors will find Bill&#39;s features transformative. The platform’s
        ability to automate these tasks not only reduces the risk of human error but also frees up valuable
        time for staff to focus on more strategic activities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Businesses that frequently deal with a high volume of transactions or have complex approval workflows
        will benefit most from Bill’s capabilities. Its automated routing and approval processes ensure that
        invoices are processed quickly and efficiently, without the need for constant manual oversight. This
        is a significant advantage for firms looking to scale their operations without proportionately
        increasing their administrative burden.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the other hand, very small businesses or those with minimal transaction volumes might find
        Bill&#39;s full suite of features more than they need. In such cases, simpler solutions might suffice
        until their operations expand to require more robust automation capabilities.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses ready to implement Bill, the next step is to assess how it fits within their existing
        financial infrastructure. Geek @ Your Spot can play a crucial role here, offering expertise in
        configuring Bill to align with your current systems and processes. This ensures a smooth transition
        and helps you get the most out of Bill’s features from day one.</p>
      <p className="text-md text-white shadow-text pt-3">
        Engaging with a consultancy can also provide insights into optimizing Bill’s use, such as setting up
        tailored approval workflows or integrating with other business tools. This guidance can be invaluable,
        particularly for businesses new to AI-driven financial solutions.</p>
      <p className="text-md text-white shadow-text pt-3">
        By taking these steps, businesses can position themselves to fully leverage the benefits of Automated
        Payment Execution, leading to improved efficiency, reduced errors, and a more strategic use of
        resources.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-payment-execution-bill-who-benefits-consultation"
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="who-benefits-most-from-bill-and-next-steps">
                Who Benefits Most from Bill and Next Steps
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="who-benefits-most-from-bill-and-next-steps">
                Who Benefits Most from Bill and Next Steps
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
