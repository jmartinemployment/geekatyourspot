import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Bill automates accounts receivable by implementing a series of
        precise,&nbsp;<GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>-driven
        steps that streamline the entire process from invoicing to payment collection. This begins with the creation
        of customizable invoice templates that allow businesses to automatically generate invoices with consistent
        formatting and details. These invoices can be sent via email or US mail, providing flexibility based on
        client preferences. Once an invoice is sent, Bill&#39;s system tracks its status, providing visibility into
        when it was sent, received, approved, and paid.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s AI capabilities enhance this process by automatically coding line items and reducing
        manual data entry errors. Bill also automates the matching of invoices with purchase orders and receipts,
        which significantly cuts down on manual verification tasks. This automation ensures that discrepancies are
        caught early, reducing the chances of duplicate payments and enhancing overall accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill&#39;s auto-charge and auto-pay features take automation a step further by allowing enrolled customers
        to be charged automatically on their due dates. This reduces the manual follow-up required by finance teams,
        freeing up time for more strategic tasks. Automated payment reminders are sent to customers, ensuring timely
        payments and reducing the need for manual intervention.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is another key aspect of Bill&#39;s automation process. The platform offers seamless two-way
        sync with popular accounting software such as QuickBooks, Xero, Oracle NetSuite, Sage Intacct, and Microsoft
        Dynamics. This ensures that all financial data is consistently updated across systems, eliminating the need
        for duplicate data entry and reducing the risk of errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses dealing with high volumes of transactions, Bill&#39;s predictive AI monitors transactions in
        real-time to detect suspicious activity, adding a layer of security to the payment process. This feature not
        only protects against fraud but also ensures compliance with financial regulations. By automating these
        processes, Bill allows businesses to focus on growth rather than being bogged down by administrative tasks.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-bill-automates-accounts-receivable">
                How Bill Automates Accounts Receivable
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-bill-automates-accounts-receivable">
                How Bill Automates Accounts Receivable
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
