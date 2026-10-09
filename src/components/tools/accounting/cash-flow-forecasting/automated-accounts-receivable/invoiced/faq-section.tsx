export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#025E73] text-white py-5">
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
              Invoiced calculates its cash collection forecasting using data from invoices, autopay, payment
              plans, promises-to-pay, and customer payment history. This comprehensive data collection allows
              Invoiced to provide highly accurate forecasts on when payments will be received.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can the forecasting engine manage multi-entity or subsidiary structures?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Invoiced offers multi-entity reporting capabilities, allowing you to manage and report on
              different entities or subsidiaries within your organization. This feature is part of its powerful
              real-time reporting across the invoice-to-cash lifecycle.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I build custom forecasting reports outside of the standard templates?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Invoiced allows you to build custom forecasting reports using its Report Builder. You can
              choose from 40 data types, set your visualization format such as table, chart, or metric, and
              select the fields you want your report to display.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
