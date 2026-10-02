export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Bill for your business, it&#39;s crucial to evaluate how it fits within your existing
        operations and budget. Bill is designed with small to medium-sized businesses in mind, making it a
        suitable choice for those looking to streamline their accounts payable processes with AI-driven
        automation. The platform offers a range of features that cater to businesses needing efficient invoice
        processing and expense management.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill&#39;s pricing model is straightforward, with published pricing starting at $49 per user per
        month. This transparency allows businesses to gauge their potential expenses before making any
        commitments. It&#39;s essential to weigh this cost against the potential savings in time and error
        reduction that Bill offers. By automating tasks such as invoice processing and approvals, businesses
        can significantly cut down on manual effort, which often translates into cost savings over time.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s AI-powered invoice coding, which automatically extracts and codes multi-line bills,
        boasts a 99% accuracy rate. This feature alone can reduce manual processing time by 20%, making it a
        compelling option for businesses that handle a high volume of invoices. Additionally, Bill supports
        automated 2-way and 3-way matching across invoices, purchase orders, and receipts, further enhancing
        its value proposition by minimizing discrepancies and errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that require flexibility in payment methods, Bill offers a variety of options including
        ACH, virtual cards, credit cards, checks, and international wire transfers. This diversity in payment
        options ensures that businesses can maintain smooth financial operations regardless of their specific
        needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        When evaluating Bill, consider the adjacent solutions you might be weighing. Some businesses may look
        at industry-specific solutions or platforms with extensive integrations. While Bill offers integration
        with QuickBooks Desktop for smarter PO automation, businesses should assess whether its integration
        capabilities align with their existing systems and workflows.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;By automating tasks such as invoice processing, approvals, and expense management, businesses can
        significantly reduce manual effort, minimize errors, and improve cash flow.&quot;&nbsp;
        <a id="tools-accounting-bill-evaluating-source"
          href="https://www.bill.com/dl/guide-to-ap-and-expense-report-automation"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Bill
        </a></p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-bill-fit-and-pricing-considerations">
                Evaluating Bill: Fit and Pricing Considerations
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-bill-fit-and-pricing-considerations">
                Evaluating Bill: Fit and Pricing Considerations
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
