import Link from "next/link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Tipalti is particularly well-suited for small businesses looking to streamline their Automated Payment
        Execution. If your business deals with multiple currencies and requires robust compliance features,
        Tipalti offers a comprehensive solution. Its ability to automate complex processes like tax compliance
        and supplier onboarding makes it a strong choice for businesses aiming to reduce manual workload and
        focus on growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Tipalti may not be ideal for every business. Companies that have minimal international
        transactions or those that already have a well-integrated ERP system might find its features
        redundant. For such businesses, a simpler solution with a more targeted focus might be more
        cost-effective.</p>
      <p className="text-md text-white shadow-text pt-3">
        For those considering Tipalti, the next step is to evaluate how its features can be integrated into
        your current systems. Geek @ Your Spot, an AI implementation consultancy, can assist in this process by
        ensuring seamless integration with your existing tools, such as QuickBooks or other ERP systems. This
        partnership can help tailor Tipalti&#39;s capabilities to your specific needs, maximizing its
        effectiveness.</p>
      <p className="text-md text-white shadow-text pt-3">
        The decision to implement Tipalti should also involve assessing the potential return on investment.
        Consider the time saved on manual processes and the reduction in errors and compliance risks. For many
        small businesses, these benefits can translate into significant cost savings and improved operational
        efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        In conclusion, Tipalti offers a robust solution for businesses looking to enhance their payment
        processes. By automating key tasks and integrating with existing systems, it can help businesses
        manage their financial operations more effectively. If your business faces challenges in managing
        multi-currency payments or compliance, Tipalti could be the right fit to drive efficiency and
        growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-payment-execution-tipalti-right-fit-consultation"
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-tipalti-right-for-your-business">
                Is Tipalti Right for Your Business?
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-tipalti-right-for-your-business">
                Is Tipalti Right for Your Business?
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
