export default function RealCostsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In many small and medium-sized businesses, manual accounts payable processes are a significant drain
        on resources. The labor-intensive nature of these tasks results in several business drawbacks, from
        wasted hours to increased error rates. Take, for example, the tedious task of data entry. Employees
        spend countless hours entering invoice details into the system, an activity that could be automated
        to free up time for more strategic tasks. This manual approach is also prone to human error, which
        can lead to mistakes in financial records. Errors in data entry can result in costly discrepancies,
        requiring additional time to rectify and potentially damaging vendor relationships.</p>
      <p className="text-md text-white shadow-text pt-3">
        Delays are another major issue with manual processes. Invoices can sit idle on a desk or in an inbox,
        waiting for manual approval. This delay not only affects cash flow but also risks damaging
        relationships with vendors who expect timely payments. In turn, this can lead to late fees or missed
        early payment discounts, further impacting the bottom line.</p>
      <p className="text-md text-white shadow-text pt-3">
        The risks extend beyond financial costs. Manual processes often lack transparency and control, making
        it difficult to monitor the status of invoices. This opacity can lead to unauthorized payments or
        duplicate payments, increasing the risk of fraud. The absence of a streamlined workflow means that
        teams spend excessive time chasing approvals and reconciling discrepancies, rather than focusing on
        strategic initiatives.</p>
      <p className="text-md text-white shadow-text pt-3">
        The burden of these inefficiencies is typically absorbed by finance teams who are already stretched
        thin. They must navigate through piles of paperwork and cumbersome approval processes, leaving little
        room for more value-added activities. The cumulative effect of these inefficiencies is a heavy
        administrative burden that impacts overall business performance.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-real-costs-of-manual-accounts-payable-processes" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Costs of Manual Accounts Payable Processes
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
              <h2 id="the-real-costs-of-manual-accounts-payable-processes" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Costs of Manual Accounts Payable Processes
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
