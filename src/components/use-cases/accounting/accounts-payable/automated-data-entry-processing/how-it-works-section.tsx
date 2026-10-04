import Link from "next/link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Automating accounts payable transforms an inefficient process into a streamlined workflow that
        enhances accuracy, speed, and control. The journey begins with automated data capture, a technology
        that extracts invoice details using tools like&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-how-it-works-dext"
          href="/tools/accounting/accounts-payable/automated-data-entry-processing/dext" className="text-[#C83803] hover:underline">
          Dext
        </Link>. This tool converts paper invoices into digital formats and extracts essential data points,
        such as vendor details and amounts, with precision. This step dramatically reduces manual data entry,
        ensuring that information is both accurate and instantly available to the finance team.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once data is captured, it moves to the processing phase. Here, tools like&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-how-it-works-stampli"
          href="/tools/accounting/stampli" className="text-[#C83803] hover:underline">
          Stampli
        </Link>&nbsp;take over by automating the approval workflow. Stampli routes invoices to the right
        approvers based on predefined criteria, minimizing the time spent on manual follow-ups. Approvers
        receive notifications and can review invoices from any device, enabling faster decision-making. This
        automation not only accelerates the approval process but also maintains an audit trail for compliance
        purposes.</p>
      <p className="text-md text-white shadow-text pt-3">
        After approval, the process moves to payment execution. Solutions like&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-how-it-works-avidxchange"
          href="/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange" className="text-[#C83803] hover:underline">
          AvidXchange
        </Link>&nbsp;ensure payments are processed securely and efficiently. AvidXchange offers multiple
        payment methods, including electronic transfers, which reduce the reliance on paper checks and speed
        up payment cycles. This stage includes automated fraud checks to prevent unauthorized transactions,
        adding a layer of security to the process.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, the integration with accounting software, facilitated by tools like&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-how-it-works-bill"
          href="/tools/accounting/accounts-payable/automated-data-entry-processing/bill" className="text-[#C83803] hover:underline">
          Bill
        </Link>, ensures that all transaction data is seamlessly updated in the company&#39;s financial
        systems. This integration provides real-time visibility into financial operations, allowing
        businesses to maintain accurate records and make informed decisions based on up-to-date information.
        With these tools working together, the entire accounts payable process becomes more efficient,
        reducing errors and freeing up staff to focus on strategic tasks.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-automated-accounts-payable-works-a-step-by-step-guide" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Automated Accounts Payable Works: A Step-by-Step Guide
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-automated-accounts-payable-works-a-step-by-step-guide" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Automated Accounts Payable Works: A Step-by-Step Guide
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
