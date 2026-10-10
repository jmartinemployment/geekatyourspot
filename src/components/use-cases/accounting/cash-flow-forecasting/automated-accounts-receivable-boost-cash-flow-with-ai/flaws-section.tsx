export default function FlawsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Many small businesses rely on outdated accounts receivable practices that introduce significant
        inefficiencies and risks. One of the primary issues is the passive, calendar-based follow-ups that are
        ingrained in many operations. Staff members typically check the aging accounts receivable report only on
        specific days, such as the 1st or 15th of the month. This method leaves invoices sitting past due for weeks
        before any action is taken, delaying cash flow and increasing the risk of non-payment.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another major concern is the lack of a clear friction path for handling disputes. Invoices often go out with
        missing details or vague line items, optimized more for internal tracking than for client understanding.
        This lack of clarity can lead to clients quietly shelving invoices until the business initiates follow-up
        weeks later. Such delays not only disrupt cash flow but also strain client relationships.</p>
      <p className="text-md text-white shadow-text pt-3">
        Furthermore, businesses often treat high-value and low-value clients identically, misallocating labor and
        resources. The time spent chasing a $200 utility reimbursement is often the same as that spent on a $20,000
        milestone payment. This lack of prioritization drains staff resources and dries up cash reserves, as
        high-value invoices are not given the attention they require.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, financial forecasting within these traditional processes often assumes a &quot;best-case&quot;
        scenario where every client pays on time. This optimistic projection builds no buffer for delays, disputes,
        or bad debt, leaving businesses vulnerable to unexpected cash flow disruptions. Without proper contingency
        planning or probability modeling, financial stability remains precarious.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="identifying-the-flaws-in-traditional-accounts-receivable-processes" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Identifying the Flaws in Traditional Accounts Receivable Processes
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="identifying-the-flaws-in-traditional-accounts-receivable-processes" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Identifying the Flaws in Traditional Accounts Receivable Processes
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
