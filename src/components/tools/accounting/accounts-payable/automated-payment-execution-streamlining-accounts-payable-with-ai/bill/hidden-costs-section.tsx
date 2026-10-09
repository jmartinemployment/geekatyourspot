export default function HiddenCostsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in West Palm Beach, Broward, and Miami-Dade counties often find themselves entangled
        in the complexities of manual payment processes. Despite having approved invoices, the actual
        execution of payments remains a labor-intensive task. Staff must manually re-enter approved invoice
        amounts and supplier details into bank portals. This repetitive task not only consumes time but also
        increases the risk of human error. Mistakes here can lead to financial discrepancies, affecting cash
        flow and vendor relationships.</p>
      <p className="text-md text-white shadow-text pt-3">
        Owners frequently delay payments because each vendor requires separate manual actions. This fragmented
        approach means that ACH vendors, check-only vendors, and international suppliers are managed through
        different processes. Each method demands time and attention, pulling resources away from more
        strategic business activities. The result is a payment system that is both inefficient and prone to
        errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Furthermore, payment information often reaches the bookkeeper late, leading to inaccurate
        outstanding-payables balances. Without real-time updates, businesses struggle to maintain an accurate
        picture of their financial health. This delay can result in missed payments or unnecessary late fees,
        further straining the business&#39;s financial resources.</p>
      <p className="text-md text-white shadow-text pt-3">
        The transition from bill approval to payment is typically handled through email instructions rather
        than a consistent, controlled workflow. This method lacks transparency and can lead to
        miscommunications or lost invoices. Without a streamlined process, businesses face bottlenecks that
        slow down their operations and increase administrative burdens.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill offers a solution to these challenges by integrating approval, vendor payment, and accounting
        updates into a single, controlled process. This approach eliminates the need for businesses to manage
        accounts payable across multiple platforms, such as bank portals, checks, and spreadsheets. By
        centralizing these tasks, Bill reduces the time spent on manual data entry and minimizes errors,
        allowing businesses to focus on growth and customer engagement.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-hidden-costs-of-manual-automated-payment-execution">
                The Hidden Costs of Manual Automated Payment Execution
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-hidden-costs-of-manual-automated-payment-execution">
                The Hidden Costs of Manual Automated Payment Execution
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
