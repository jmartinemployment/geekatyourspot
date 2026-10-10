export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq revolutionizes the way small businesses handle accounts receivable by automating many of the
        processes that traditionally consume valuable time and resources. By automating reminders, Chaserhq ensures
        that follow-ups are consistent and timely, reducing the risk of late payments and improving cash flow
        predictability.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key features of Chaserhq is its ability to customize automated reminder emails. This ensures that
        each message is courteous, personalized, and aligns with the business&#39;s brand. By automating these
        communications, businesses can maintain professionalism and improve client relationships without the manual
        effort typically required.</p>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq also allows businesses to prioritize their efforts by identifying which invoices are most at risk
        of late payment. This means that staff can focus their efforts where they will have the most impact, rather
        than treating all invoices as equally urgent. This targeted approach helps to optimize the use of resources
        and ensures that high-value clients receive the attention they deserve.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s forecasting capabilities provide businesses with a clear, forward-looking view of
        expected payments. By integrating real-time data from connected accounting systems, Chaserhq updates
        forecasts to account for overdue invoices, disputes, and expected payment dates. This real-time insight
        allows businesses to plan budgets and resources more effectively, reducing uncertainty and helping them to
        take control of their cash flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        By automating the automated accounts receivable process, Chaserhq reduces the administrative burden on
        staff, freeing them up to focus on core business activities. This not only improves operational efficiency
        but also enhances the overall financial health of the business. With Chaserhq, small businesses can move
        beyond manual processes and embrace a more streamlined, automated approach to managing receivables.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Built directly on Chaser’s receivables data and your connected accounting system, forecasts update in
        real time and account for overdue invoices, disputes, expected payment dates, and installment
        plans.&quot;&nbsp;
        <a id="tools-accounting-accounts-receivable-chaserhq-transforms-source"
          href="https://www.chaserhq.com/receivables-forecast"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Chaser
        </a></p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-chaserhq-transforms-automated-accounts-receivable">
                How Chaserhq Transforms Automated Accounts Receivable
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-chaserhq-transforms-automated-accounts-receivable">
                How Chaserhq Transforms Automated Accounts Receivable
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
