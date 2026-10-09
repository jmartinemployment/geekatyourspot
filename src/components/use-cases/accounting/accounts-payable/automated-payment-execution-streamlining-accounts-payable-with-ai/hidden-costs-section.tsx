export default function HiddenCostsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For many small businesses, the manual handling of accounts payable (AP) remains a significant burden.
        The process is often riddled with inefficiencies that lead to costly errors and delays. These issues
        are not just minor annoyances; they can significantly impact a business&#39;s bottom line.</p>
      <p className="text-md text-white shadow-text pt-3">
        Consider the time lost to manual data entry. Each invoice that lands on a desk needs to be entered
        into the system, verified, and approved. This process can easily consume hours every week, especially
        if errors occur or documents go missing. When an invoice is miskeyed, it might result in overpayments
        or duplicated payments, further complicating financial records and causing cash flow issues.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, manual AP processes increase the risk of late payments. When invoices pile up, the
        likelihood of missing a due date rises. This can lead to late fees, strained vendor relationships, and
        a damaged credit reputation. For small businesses operating on tight margins, these costs are
        particularly burdensome.</p>
      <p className="text-md text-white shadow-text pt-3">
        The risk of fraud is another significant concern. Manual processes often lack the rigorous controls
        needed to detect fraudulent activities. For instance, without automated checks, it&#39;s easier for
        duplicate invoices to slip through or for unauthorized payments to be made. This not only results in
        financial loss but also requires additional time and resources to investigate and resolve.</p>
      <p className="text-md text-white shadow-text pt-3">
        Furthermore, the lack of visibility into the AP process can hinder strategic decision-making. Without
        real-time data, businesses struggle to forecast cash flow accurately or identify areas for cost
        savings. This lack of insight can lead to poor financial planning and missed opportunities for
        growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        The burden of these inefficiencies falls heavily on the staff responsible for managing AP. They are
        often stretched thin, trying to keep up with the demands of manual processing while also attending to
        other critical tasks. This can lead to burnout and high staff turnover, compounding the problem by
        increasing recruitment and training costs.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-hidden-costs-of-manual-accounts-payable-processes" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Costs of Manual Accounts Payable Processes
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
              <h2 id="the-hidden-costs-of-manual-accounts-payable-processes" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Costs of Manual Accounts Payable Processes
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
