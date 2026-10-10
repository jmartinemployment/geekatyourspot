export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and West Palm Beach counties, managing accounts receivable can
        be a time-consuming and error-prone task. Many owners, like Maria Sanchez, find themselves trapped in a
        cycle of manual invoicing and payment collection. This approach not only drains resources but also creates
        significant risks for cash flow stability.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the primary issues with manual accounts receivable is the reliance on passive, calendar-based
        follow-ups. Often, invoices sit unnoticed past their due dates until a staff member checks an aging report
        on a set date, such as the 1st or 15th of the month. This delay in follow-up can lead to weeks of unpaid
        invoices, impacting the business&#39;s cash flow and financial planning.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another challenge is the lack of a clear friction path for disputes. Invoices are frequently sent with vague
        descriptions or missing details, leading clients to set them aside until the business follows up. This not
        only delays payment but also strains client relationships as issues remain unresolved until addressed weeks
        later.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, businesses often treat high-value and low-value clients identically, misallocating resources.
        The same amount of time is spent chasing a $200 utility reimbursement as a $20,000 milestone payment, which
        can be detrimental when cash flow is tight. This misallocation of labor can lead to significant financial
        strain, particularly for small businesses with limited staff.</p>
      <p className="text-md text-white shadow-text pt-3">
        Forecasting also suffers under manual management. Many businesses project their cash flow based on best-case
        scenarios, assuming all clients will pay on time. This approach leaves no room for delays, disputes, or bad
        debt, leading to inaccurate financial projections and potential cash shortages.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual processes also compete with the owner&#39;s daily work. Overdue customers receive reminders
        inconsistently, and repeat customers must initiate payments manually. This inconsistency not only disrupts
        the owner&#39;s workflow but also increases the likelihood of errors in payment tracking and invoice status
        updates.</p>
      <p className="text-md text-white shadow-text pt-3">
        Without automated solutions, customers have limited convenient payment options, further complicating the
        collection process. Staff struggle to keep invoice statuses current, especially when payments are received
        externally. These challenges highlight the need for a more efficient system, one that automates invoicing,
        reminders, and payment collections, transforming accounts receivable from a reactive process into a
        proactive one.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-challenges-of-manual-automated-accounts-receivable">
                The Challenges of Manual Automated Accounts Receivable
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-challenges-of-manual-automated-accounts-receivable">
                The Challenges of Manual Automated Accounts Receivable
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
