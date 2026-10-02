import Link from "next/link";

export default function HowBillTransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Bill provides a comprehensive solution to the challenges of manual accounts payable processes. By
        automating tasks such as invoice processing, approvals, and expense management, Bill significantly
        reduces manual effort, minimizes errors, and improves cash flow for businesses. This automation allows
        companies to focus on strategic activities rather than getting bogged down in administrative tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        With Bill, businesses can automate the extraction and coding of multi-line invoices, achieving up to
        99% accuracy. This not only reduces the time spent on data entry by 20% but also ensures that key
        fields are captured correctly, minimizing the risk of errors. Automated 2-way and 3-way matching
        across invoices, purchase orders, and receipts further streamlines the process, with configurable
        tolerance rules and duplicate detection enhancing accuracy and efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill also offers customizable approval workflows with automated routing, real-time tracking,
        reminders, and mobile approval capabilities. This flexibility ensures that the approval process is
        both efficient and transparent, reducing bottlenecks and speeding up payment cycles. Additionally,
        Bill supports a variety of payment options, including ACH, virtual card, credit card, check, and
        international wire transfers, facilitating seamless transactions across its extensive network.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s AI-driven invoice entry and streamlined approval workflows can cut AP processing
        time in half. This means that businesses can achieve greater operational efficiency, allowing analysts
        to focus on initiatives that drive growth. By reducing manual processes and streamlining payment
        processing, Bill empowers companies to enhance their financial operations and maintain better control
        over their accounts payable.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small and medium-sized businesses looking to implement AI, Bill offers a practical and effective
        solution to transform their financial workflows. To explore how Bill can benefit your business,
        consider&nbsp;
        <Link id="tools-accounting-bill-transforms-consultation"
          href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
          scheduling a demo
        </Link>&nbsp;to see the platform in action.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-bill-transforms-accounts-payable-management">
                How Bill Transforms Accounts Payable Management
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-bill-transforms-accounts-payable-management">
                How Bill Transforms Accounts Payable Management
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
