export default function HiddenCostsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The inefficiencies in traditional accounts receivable processes come with significant costs that businesses
        can&#39;t afford to overlook. These manual methods waste valuable time and resources, leading to financial
        strain and operational bottlenecks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Passive, calendar-based follow-ups mean that collections are handled retroactively, often allowing invoices
        to accumulate past due status without timely intervention. This delay results in extended payment cycles,
        which can severely impact a company&#39;s cash flow. Staff must then scramble to catch up, spending hours
        drafting and sending manual emails, further diverting attention from more strategic tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The absence of a structured dispute resolution process compounds these issues. Invoices sent without
        complete details or clarity invite disputes and delays. Clients may question charges or request further
        information, leading to drawn-out resolution processes that tie up resources and delay payments. This
        inefficiency is not just a financial drain but also damages client trust and satisfaction.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, treating all clients with the same level of attention regardless of their value to the business is
        a flawed approach. High-value clients should be prioritized to maintain strong cash flow, but without a
        system to differentiate these tasks, businesses end up wasting time on low-value collections. This
        misallocation results in lost revenue opportunities and increased financial risk.</p>
      <p className="text-md text-white shadow-text pt-3">
        Forecasting based on &quot;best-case&quot; timelines further exacerbates these challenges. By not accounting
        for potential delays or bad debt, businesses create a false sense of security. When actual cash inflows fall
        short of expectations, companies face liquidity crises that could have been mitigated with more realistic
        and flexible financial planning.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-hidden-costs-of-manual-accounts-receivable-management" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Costs of Manual Accounts Receivable Management
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-hidden-costs-of-manual-accounts-receivable-management" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Costs of Manual Accounts Receivable Management
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
