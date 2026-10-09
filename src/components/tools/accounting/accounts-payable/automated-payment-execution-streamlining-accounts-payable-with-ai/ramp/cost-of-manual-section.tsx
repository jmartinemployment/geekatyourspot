export default function CostOfManualSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses often face a tangled web of processes when it comes to Automated Payment Execution.
        The pain is real and persistent. Each invoice, whether from the same supplier or different ones, is
        typically handled as a separate transaction. This means paying the same supplier multiple times, which
        not only eats up valuable time but also creates unnecessary work for the accounts payable team. If
        you&#39;re manually deciding which invoices can be combined, it adds another layer of complexity and
        potential for error.</p>
      <p className="text-md text-white shadow-text pt-3">
        Different payment methods further complicate the process. Each method demands its own operational
        procedure, leading to a lack of standardization and increased room for mistakes. Bills often remain
        open in accounting systems until someone manually enters the payment details, causing discrepancies
        and confusion within the finance team. This inconsistency makes it difficult to know which bills are
        ready for payment and which are still pending, resulting in delayed payments and strained vendor
        relationships.</p>
      <p className="text-md text-white shadow-text pt-3">
        The financial impact of this disjointed approach is significant. Staff spend countless hours on
        repetitive tasks that could be automated, diverting their attention from more strategic activities.
        The manual nature of these processes not only increases the likelihood of errors but also makes it
        harder to maintain accurate financial records. This inefficiency can lead to missed opportunities for
        early payment discounts and strained cash flow management.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ramp addresses these challenges head-on by consolidating payment workflows. Instead of processing each
        invoice separately, Ramp allows businesses to combine multiple invoices from the same supplier into a
        single payment. This reduces the number of transactions and simplifies the bookkeeping process,
        freeing up time for your team to focus on more value-added tasks. By aligning the payment process with
        your accounting system, Ramp ensures that financial records are up-to-date and accurate, reducing
        discrepancies and enhancing visibility into your cash flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        With Ramp, you eliminate the manual work of deciding which invoices to combine and which payment method
        to use. The platform automates these decisions, ensuring that payments are executed efficiently and
        consistently. This not only improves operational efficiency but also strengthens vendor relationships
        by ensuring timely payments. By reducing the manual intervention required in the payment process, Ramp
        helps businesses maintain control over their financial data and improve their overall financial
        health.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-automated-payment-execution">
                The Cost of Manual Automated Payment Execution
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-automated-payment-execution">
                The Cost of Manual Automated Payment Execution
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
