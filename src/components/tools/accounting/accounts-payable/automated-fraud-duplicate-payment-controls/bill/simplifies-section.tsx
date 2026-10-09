import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function SimplifiesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        BILL transforms the way small businesses handle Automated Fraud &amp; Duplicate Payment Controls by
        removing inefficiencies and reducing manual workload. Instead of staff spending hours each week manually
        entering data and checking for duplicate invoices, BILL automates these tasks, freeing up time for more
        strategic activities. This automation not only saves time but also significantly reduces the risk of
        errors and fraud.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key features of BILL is its ability to perform invoice matching and purchase order matching.
        This capability flags potential duplicates before payments are made, ensuring that businesses do not
        waste money on double payments. By automating these checks, BILL provides a safeguard against common
        accounting mistakes, allowing finance teams to focus on more value-added tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        BILL also integrates seamlessly with popular accounting software like QuickBooks and Xero, keeping the
        general ledger up-to-date without manual intervention. This integration ensures that all financial data
        is accurate and current, reducing the likelihood of discrepancies and improving overall financial
        management. As a result, businesses can maintain better control over their finances and make informed
        decisions based on real-time data.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, BILL&#39;s user-friendly interface and automated workflows simplify the approval process.
        Invoices are automatically routed to the appropriate approvers, with reminders and mobile approval
        options to keep the process moving smoothly. This feature not only speeds up approvals but also ensures
        that all payments are properly authorized, reducing the risk of unauthorized transactions.</p>
      <p className="text-md text-white shadow-text pt-3">
        By implementing BILL, small businesses can eliminate the need for manual checks and balances, allowing
        their teams to focus on strategic growth initiatives. The automation of routine tasks not only increases
        efficiency but also enhances the security of financial operations. With BILL, businesses can confidently
        manage their&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;processes, knowing that their
        systems are robust and reliable.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;With AI-powered AP automation, BILL erases the busywork from capturing invoices, routing approvals,
        and processing payments—syncing seamlessly with your accounting software so you can focus on
        growth.&quot;&nbsp;
        <a id="tools-accounting-fraud-controls-bill-simplifies-source"
          href="https://www.bill.com/product/accounts-payable"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Bill
        </a></p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-bill-simplifies-automated-fraud-duplicate-payment-controls">
                How Bill Simplifies Automated Fraud &amp; Duplicate Payment Controls
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-bill-simplifies-automated-fraud-duplicate-payment-controls">
                How Bill Simplifies Automated Fraud &amp; Duplicate Payment Controls
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
