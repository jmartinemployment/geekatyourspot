
export default function StatusQuoSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Maintaining the status quo in&nbsp;tax
        compliance&nbsp;comes with significant costs, both tangible and intangible. The most
        immediate impact is on time. Business owners and their teams often find themselves dedicating countless
        hours to manual tax calculations, updates, and filings. This time could be better spent on strategic
        growth initiatives but is instead consumed by tedious compliance tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Errors are another costly outcome. Miscalculating tax rates or failing to update them in real-time can
        lead to incorrect filings. These errors often result in penalties and interest charges from tax
        authorities, which can quickly add up. The financial burden of these penalties is compounded by the
        potential damage to a company&#39;s reputation, especially if compliance issues become public knowledge.</p>
      <p className="text-md text-white shadow-text pt-3">
        Delays in filings are also a common problem. Manual processes are inherently slower and more prone to
        bottlenecks, particularly when handling complex sales tax returns across multiple jurisdictions. Missing
        filing deadlines not only incurs financial penalties but also increases the risk of audits. The stress
        of meeting these deadlines can strain resources and impact employee morale.</p>
      <p className="text-md text-white shadow-text pt-3">
        The risk of audits themselves poses a significant cost. When businesses fail to accurately track and
        report their tax obligations, they open themselves up to scrutiny by tax authorities. Audits are not
        only disruptive but can also uncover past errors or omissions, leading to further penalties. The process
        of preparing for and responding to audits diverts resources from other critical business operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the burden of these costs falls on the business. Whether it&#39;s financial penalties, lost
        time, or the stress of compliance, maintaining the status quo is unsustainable for many small
        businesses. Without a shift towards automated solutions, these issues will continue to drain resources
        and hinder growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-cost-of-maintaining-the-status-quo" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Cost of Maintaining the Status Quo
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
              <h2 id="the-cost-of-maintaining-the-status-quo-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Cost of Maintaining the Status Quo
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
