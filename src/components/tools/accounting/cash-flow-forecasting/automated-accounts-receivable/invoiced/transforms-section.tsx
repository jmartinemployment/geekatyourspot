export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced transforms Automated Accounts Receivable by removing the manual burdens that weigh down small
        businesses. It automates the invoice-to-cash cycle, streamlining processes from invoice generation to
        payment collection. This automation frees up valuable time for business owners and their teams,
        allowing them to focus on strategic tasks rather than repetitive administrative work.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key advantages of Invoiced is its ability to automate follow-ups. Instead of relying on staff
        to manually check and send reminders, the platform automatically schedules and sends follow-ups based
        on predefined rules. This ensures timely communication with clients and reduces the risk of delayed
        payments.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced also simplifies the invoicing process. Businesses can create and send invoices automatically,
        tailored to their specific needs. This reduces the time spent on manual invoice generation and
        minimizes errors. The platform&#39;s capability to handle complex invoicing requirements ensures that
        businesses of all sizes can benefit from its features.</p>
      <p className="text-md text-white shadow-text pt-3">
        Payment collection becomes seamless with Invoiced. The platform accepts various payment methods,
        including ACH, credit cards, and virtual cards, and integrates these payments directly into the
        accounting system. This automatic reconciliation eliminates the need for manual data entry and reduces
        the likelihood of errors.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Invoiced by Flywire has you covered — you can automate your entire invoice-to-cash lifecycle to
        get paid more quickly, slashing days sales outstanding and boosting your collection effectiveness index
        while reducing the time and cost associated with cash application and automated
        reconciliation.&quot;&nbsp;
        <a id="tools-accounting-accounts-receivable-invoiced-transforms-source"
          href="https://www.invoiced.com/solutions/use-cases/invoiced-to-cash"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Invoiced
        </a></p>
      <p className="text-md text-white shadow-text pt-3">
        By automating these processes, Invoiced not only saves time but also enhances cash flow visibility.
        Businesses can access real-time insights into their financial performance, allowing them to make
        informed decisions and plan for the future with confidence. This comprehensive approach to Automated
        Accounts Receivable ensures that businesses can operate more efficiently and effectively.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-invoiced-transforms-automated-accounts-receivable">
                How Invoiced Transforms Automated Accounts Receivable
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-invoiced-transforms-automated-accounts-receivable">
                How Invoiced Transforms Automated Accounts Receivable
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
