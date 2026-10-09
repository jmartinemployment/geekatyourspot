export default function CostOfManualSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Manual processes in Automated Accounts Receivable create a web of inefficiencies that small businesses
        in Miami-Dade, Broward, and West Palm Beach counties struggle with daily. These businesses find
        themselves tangled in a cycle of tedious tasks that drain resources and time. The core issue lies in
        disconnected processes: billing, follow-up, payment collection, and posting operate in silos. This
        fragmentation leads to delays, making collections and cash forecasts unreliable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Passive, calendar-based follow-ups exacerbate the problem. Typically, staff check aging accounts
        receivable reports only on scheduled dates, like the 1st or 15th of the month. This means invoices can
        sit overdue for weeks before anyone takes action. Such delays allow cash flow issues to fester
        unnoticed, impacting the company&#39;s financial health.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another pain point is the lack of clarity in invoices, which often contain missing details or are
        formatted for internal use rather than client understanding. This invites disputes and delays, as
        clients may shelve unclear invoices until prompted by a follow-up. Without a clear path for resolving
        disputes, these issues linger, further delaying payments.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, treating high-value and low-value clients the same wastes valuable time. Staff spend equal
        effort chasing small utility reimbursements and large milestone payments, leading to misallocated labor
        and drying cash reserves. Financial projections based on best-case timelines further compound the
        issue, as they fail to account for potential delays or disputes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced addresses these challenges by integrating the entire invoice-to-cash lifecycle. By automating
        follow-ups and providing clear, detailed invoices, it reduces the time staff spend on manual tasks. The
        platform offers cash-collection forecasting, helping businesses predict cash flow more accurately and
        manage resources efficiently. This comprehensive approach ensures that businesses can focus on growth
        rather than getting bogged down by administrative burdens.</p>
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
