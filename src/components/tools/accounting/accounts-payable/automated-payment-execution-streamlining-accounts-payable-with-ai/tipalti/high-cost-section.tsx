export default function HighCostSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses, managing payments across multiple countries, currencies, and payment methods can
        quickly become a logistical nightmare. Manual processes are not only time-consuming but also prone to
        errors, which can lead to costly mistakes and compliance issues. The burden falls heavily on small
        finance teams who must juggle supplier banking details, reconcile transactions, and manage
        communications with vendors.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the primary challenges is collecting and maintaining accurate supplier banking information.
        This often involves back-and-forth emails to correct incomplete or incorrect details, consuming
        valuable time that could be spent on more strategic tasks. Each time a payment is made, the finance
        team must ensure that the details are up-to-date, which is a repetitive and error-prone task.</p>
      <p className="text-md text-white shadow-text pt-3">
        Domestic and international payments add another layer of complexity. Different bank portals and
        procedures for each type of payment mean that finance teams must navigate a maze of systems,
        increasing the risk of errors and delays. This fragmented approach can lead to missed payments, which
        strain supplier relationships and disrupt business operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        In many cases, payment runs depend on manually assembled files, which require repeated data entry.
        This not only increases the likelihood of errors but also takes up significant amounts of time.
        Suppliers frequently contact finance teams to inquire about payment status, as they have no visibility
        into whether payments have been processed, leading to further inefficiencies.</p>
      <p className="text-md text-white shadow-text pt-3">
        Reconciliation is another major pain point, requiring the matching of transactions across different
        currencies, subsidiaries, and payment methods. This manual process is labor-intensive and often
        results in discrepancies that need to be resolved, further delaying financial close processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tipalti addresses these challenges with its Global and Multi-Entity Payables Automation. This solution
        is designed for businesses that operate at a meaningful scale, have international payment needs, or
        deal with multi-entity complexities. By automating payment processes, Tipalti reduces manual workload,
        minimizes errors, and ensures compliance with international regulations. It is particularly suited for
        marketplaces, SaaS firms, e-commerce aggregators, and businesses with global vendor or contractor
        payouts.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-high-cost-of-manual-automated-payment-execution">
                The High Cost of Manual Automated Payment Execution
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-high-cost-of-manual-automated-payment-execution">
                The High Cost of Manual Automated Payment Execution
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
