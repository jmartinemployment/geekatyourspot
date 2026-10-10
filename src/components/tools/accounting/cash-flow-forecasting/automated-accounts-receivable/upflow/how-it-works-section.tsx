import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Upflow automates accounts receivable by integrating directly with your
        existing&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;or
        accounting systems. It pulls real-time data from these systems to provide an accurate and dynamic view of
        your cash flow. This is not a static report; it reflects the actual timing of cash inflows based on real
        customer payment behavior. This integration eliminates the need for manual data entry, outdated exports, and
        the reconciliation of different data sets.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s core capability is its ability to build inflow projections from billing cohort collection
        rates. Unlike traditional methods that rely on invoice due dates, Upflow calculates the percentage of
        invoices collected across different time frames. This means businesses can see which invoices are likely to
        be paid within the first month, which might take longer, and adjust their cash flow forecasts accordingly.
        This method provides a more realistic picture of cash availability, helping businesses plan more
        effectively.</p>
      <p className="text-md text-white shadow-text pt-3">
        Upflow&#39;s forecasting capability is continuously updated. As new data comes in from your ERP system, the
        forecasts adjust automatically, ensuring that your financial planning is always based on the latest
        information. This is crucial for businesses that need to make quick decisions based on current financial
        conditions.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform also supports manual input for expected future billings, which allows finance teams to extend
        their planning beyond the current accounts receivable snapshot. This feature is particularly useful for
        businesses with seasonal sales patterns or those planning significant changes in their operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        By sitting within the same platform as your collections workflow, Upflow ensures that any improvements in
        your collections process directly enhance forecast accuracy. The integration of collections and forecasting
        means that when your team acts on overdue invoices, it not only speeds up collections but also tightens the
        accuracy of future cash flow forecasts. This dual benefit is something standalone forecasting tools cannot
        replicate.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-inner-workings-of-upflow">
                The Inner Workings of Upflow
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-inner-workings-of-upflow">
                The Inner Workings of Upflow
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
