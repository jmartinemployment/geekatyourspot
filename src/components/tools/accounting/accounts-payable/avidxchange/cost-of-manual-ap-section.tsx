export default function CostOfManualApSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For small and medium-sized businesses, managing accounts payable (AP) manually can be a real drain on
        resources. Manual data entry is not only time-consuming but also prone to errors. These errors can lead
        to delayed payments and strained vendor relationships. The traditional approach often involves handling
        paper invoices, which adds to operational costs and increases the risk of losing important
        documents.</p>
      <p className="text-md text-white shadow-text pt-3">
        The inefficiencies of manual processes don&#39;t stop there. Without automation, AP teams spend a
        significant amount of time on mundane tasks, leaving little room for strategic work. This not only
        affects productivity but also limits the team&#39;s ability to contribute to the company&#39;s growth.
        Moreover, manual systems lack the visibility and control needed to manage workflows effectively, making
        it difficult to track invoice statuses and approvals.</p>
      <p className="text-md text-white shadow-text pt-3">
        Businesses also face increased risks of fraud when relying on manual processes. Without automated
        checks, it&#39;s challenging to detect inconsistencies and fraudulent activities in time. Additionally,
        the manual handling of payments can result in delayed supplier payments, which might harm business
        relationships and lead to unfavorable terms.</p>
      <p className="text-md text-white shadow-text pt-3">
        AvidXchange addresses these challenges by providing a comprehensive AP automation solution. It
        eliminates the need for paper invoices and manual data entry, significantly reducing errors and
        operational costs. By automating these processes, businesses can save time and focus their resources on
        more strategic initiatives. This not only boosts productivity but also enhances the overall efficiency
        of the accounts payable workflow.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;We offer an end-to-end accounts payable automation solution seamlessly integrated and built to
        enhance Microsoft.&quot;&nbsp;
        <a id="tools-accounting-avidxchange-cost-source"
          href="https://www.avidxchange.com/solutions/avidsuite-for-microsoft/"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          AvidXchange
        </a></p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-accounts-payable-processes">
                The Cost of Manual Accounts Payable Processes
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-accounts-payable-processes">
                The Cost of Manual Accounts Payable Processes
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
