export default function CostOfManualSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Many small businesses in Miami-Dade, Broward, and West Palm Beach counties face the challenge of managing
        Automated Accounts Receivable with outdated methods. The traditional approach often involves manual
        tracking and follow-ups, which are not only time-consuming but can also lead to errors and missed
        opportunities. Without a reliable system to prioritize collections and forecast cash inflows, businesses
        struggle with cash flow uncertainty.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the most common issues is the reliance on passive, calendar-based follow-ups. Staff usually check
        aging reports only at set intervals, like the 1st or 15th of the month. This means invoices can go
        unnoticed for weeks, delaying collections and impacting cash flow. Additionally, invoices often lack
        clarity, leading to disputes or delays as clients wait for follow-ups to address missing details or vague
        line items.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another significant problem is the equal treatment of all clients, regardless of their value to the
        business. Staff spend as much time chasing small invoices as they do large payments, misallocating
        resources and allowing cash to dry up. This approach fails to prioritize high-value clients who
        contribute significantly to the company&#39;s revenue.</p>
      <p className="text-md text-white shadow-text pt-3">
        Forecasting based on &quot;best-case&quot; timelines compounds these issues. Many businesses assume all
        clients will pay on time, leading to unrealistic financial projections. This lack of cushion for delays
        or disputes results in financial strain when payments are late. Furthermore, businesses often forecast
        receipts by merely summing up invoices due, without considering historical payment behaviors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Without a clear view of collections performance, managers struggle to see if their strategies are
        improving. This inconsistency is exacerbated as the customer base grows, making manual follow-ups
        increasingly ineffective. Customers, too, face unnecessary friction when trying to pay, further
        complicating the process.</p>
      <p className="text-md text-white shadow-text pt-3">
        Managers also face the tedious task of manually assembling AR reports for planning meetings. This not
        only wastes time but also pulls teams away from strategic tasks that could drive growth. The lack of a
        streamlined process for Automated Accounts Receivable means businesses are often caught off guard by
        cash flow issues, stunting their growth potential.</p>
      <p className="text-md text-white shadow-text pt-3">
        Upflow addresses these challenges by integrating AR analytics, collections workflows, and
        billing-cohort-based forecasting. It automates follow-ups, prioritizes high-value clients, and provides
        accurate cash flow forecasts based on actual payment behaviors. This approach not only improves cash flow
        reliability but also frees up staff to focus on more strategic initiatives.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-automated-accounts-receivable">
                The Cost of Manual Automated Accounts Receivable
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-automated-accounts-receivable">
                The Cost of Manual Automated Accounts Receivable
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
