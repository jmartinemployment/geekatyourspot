import Link from "next/link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Ramp is particularly well-suited for small businesses in West Palm Beach, Broward, and Miami-Dade
        counties looking to streamline their accounts payable processes through Automated Payment Execution.
        Its features are designed to alleviate the common pain points of manual invoice processing, such as
        data entry errors, approval delays, and fraud risks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform is ideal for businesses that handle a significant volume of transactions and require a
        system that can automate and simplify these processes. With Ramp, tasks that once required manual
        intervention are transformed into automated workflows, freeing up time and resources for more
        strategic activities. This is particularly beneficial for businesses with limited staff who need to
        maximize efficiency and accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Ramp might not be the best fit for businesses with very simple or low-volume payment needs,
        where the investment in a comprehensive platform might not yield sufficient benefits. In such cases, a
        simpler solution that focuses solely on basic payment processing might be more cost-effective.</p>
      <p className="text-md text-white shadow-text pt-3">
        For those considering Ramp, the next step is to assess the specific needs of your business and how
        Ramp&#39;s features can meet those needs. This involves looking at your current payment processes,
        identifying inefficiencies, and determining how automation could improve these areas. Geek @ Your Spot
        offers consultation services to help businesses evaluate their needs and implement Ramp effectively,
        ensuring a smooth transition and optimal use of the platform.</p>
      <p className="text-md text-white shadow-text pt-3">
        By leveraging Geek @ Your Spot&#39;s expertise, businesses can ensure that Ramp is configured to
        integrate seamlessly with their existing systems, providing training and support to maximize the
        platform&#39;s benefits. This partnership not only aids in the initial setup but also provides ongoing
        support to adapt to changing business needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        In conclusion, while Ramp offers a powerful solution for Automated Payment Execution, it&#39;s
        essential to evaluate whether its capabilities align with your business&#39;s specific requirements.
        By doing so, you can make an informed decision that enhances your operational efficiency and supports
        your business&#39;s growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-payment-execution-ramp-right-fit-consultation"
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-ramp-right-for-your-business">
                Is Ramp Right for Your Business?
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-ramp-right-for-your-business">
                Is Ramp Right for Your Business?
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
