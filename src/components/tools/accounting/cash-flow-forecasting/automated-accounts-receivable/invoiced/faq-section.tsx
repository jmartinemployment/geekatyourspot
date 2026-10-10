import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Invoiced calculate its cash collection forecasting?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Invoiced calculates cash collection forecasting by gathering data from invoices, autopay, payment plans,
              promises-to-pay, and customer payment history. This comprehensive data collection allows Invoiced to deliver
              highly accurate forecasts on when payments will be received, providing clear insights into collections
              performance and helping businesses manage their cash flow effectively.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does &quot;CashMatch AI&quot; impact the reliability of the cash forecast?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              CashMatch&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;enhances the reliability of cash forecasts by
              automatically matching incoming payments to open invoices and assigning a confidence score. High-confidence
              matches are applied automatically, while those with lower confidence are flagged for human review. This
              process ensures that payments are accurately applied, improving the overall reliability of cash flow
              predictions.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can the forecasting engine manage multi-entity or subsidiary structures?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Invoiced&#39;s forecasting engine can manage multi-entity or subsidiary structures. It offers
              multi-entity filtering and aggregation options for generating reports, allowing businesses to understand
              financial performance at both the company-wide and individual business unit levels.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I build custom forecasting reports outside of the standard templates?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Invoiced allows users to build custom forecasting reports in addition to using pre-built templates.
              This flexibility enables businesses to tailor reports to their specific needs, providing powerful, real-time
              insights across the entire invoice-to-cash lifecycle.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What infrastructure systems does Invoiced pull data from?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Invoiced pulls data from&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems to automatically
              generate accurate invoices. It integrates with systems like Microsoft Dynamics, allowing for bi-directional
              data flow where customer records, invoices, credit memos, and payments sync automatically. This integration
              streamlines processes and ensures up-to-date information is available for cash flow management.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
