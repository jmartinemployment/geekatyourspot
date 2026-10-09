import Link from "next/link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        AvidXchange is particularly well-suited for small businesses that handle a high volume of invoices
        and payments. Its automated payment execution capabilities help businesses reduce manual tasks,
        allowing teams to focus on strategic initiatives rather than administrative duties. However, it may
        not be necessary for businesses with minimal accounts payable volume or those that do not require the
        advanced features AvidXchange offers.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that experience frequent payment errors or delays due to manual processes, AvidXchange
        can be a transformative solution. By automating payments, businesses can improve accuracy and
        timeliness, which in turn strengthens supplier relationships and enhances cash flow management. The
        platform&#39;s real-time payment status updates and supplier support services further contribute to
        its appeal for businesses looking to streamline their payment processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, AvidXchange may not be the best fit for businesses with highly specialized payment needs that
        require custom solutions beyond what the platform offers. In such cases, businesses might consider
        alternatives that provide more tailored services, though potentially at a higher cost or with more
        complex integrations.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses considering AvidXchange, the next step is to assess their current accounts payable
        processes and identify specific pain points that the platform could address. This evaluation will
        help determine whether AvidXchange&#39;s features align with their operational needs and financial
        goals. Engaging with a consultancy like Geek @ Your Spot can provide further insight into how
        AvidXchange can be effectively integrated into existing workflows, ensuring a smooth transition and
        maximizing the platform&#39;s benefits.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the decision to adopt AvidXchange should be guided by a clear understanding of its
        potential impact on your business&#39;s efficiency and supplier relationships. By weighing the
        platform&#39;s capabilities against your specific needs, you can make a decision that supports your
        business&#39;s growth and operational success.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-payment-execution-avidxchange-right-fit-consultation"
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-avidxchange-the-right-choice-for-your-business">
                Is AvidXchange the Right Choice for Your Business?
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-avidxchange-the-right-choice-for-your-business">
                Is AvidXchange the Right Choice for Your Business?
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
