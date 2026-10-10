import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Upflow is built on a flexible architecture that supports seamless integration with a variety
        of&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;and
        accounting tools. This capability is vital for ensuring that businesses can maintain a single source of
        truth for their financial data. By connecting directly to systems like NetSuite, QuickBooks, and Sage
        Intacct, Upflow ensures that all automated accounts receivable data is current and synchronized across
        platforms.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of Upflow&#39;s standout features is its native integration with Stripe, allowing for real-time import
        of customers, invoices, and payments. This integration is streamlined, requiring minimal setup and no
        complex coding. Once connected, Upflow automatically updates as new transactions occur, keeping your
        automated accounts receivable process accurate and up-to-date without manual intervention.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform also provides a branded customer portal, which supports various payment methods including ACH,
        credit card, and direct debit. This portal not only facilitates easy payments but also logs every
        transaction, offering a comprehensive view of customer interactions. This visibility helps finance teams
        manage relationships and track payment commitments more effectively.</p>
      <p className="text-md text-white shadow-text pt-3">
        Upflow&#39;s architecture supports advanced features like automated reminder workflows and smart debtor
        segmentation. These tools allow businesses to automate follow-ups and tailor collection strategies based on
        customer behavior, risk levels, and payment histories. By automating these processes, Upflow reduces the
        manual workload on finance teams and enhances the efficiency of the collections process.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security is a core component of Upflow&#39;s architecture. The platform complies with stringent data
        protection standards, including SOC 2 Type II, ensuring that all data is encrypted both in transit and at
        rest. This commitment to security provides businesses with the confidence that their financial data is
        protected against unauthorized access and breaches.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="upflows-architecture-and-integrations">
                Upflow&#39;s Architecture and Integrations
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="upflows-architecture-and-integrations">
                Upflow&#39;s Architecture and Integrations
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
