
export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        TaxValet is designed to simplify
        sales&nbsp;tax
        compliance&nbsp;for small businesses by automating complex processes. It begins with a
        thorough nexus analysis, identifying where your business has tax obligations. This step ensures that no
        state is overlooked, helping you avoid penalties for non-compliance. Once nexus is determined, TaxValet
        handles permit registrations and filings across all relevant jurisdictions. This comprehensive approach
        means you no longer need to juggle multiple state requirements on your own.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, TaxValet takes care of ongoing compliance management. This involves monitoring changes in tax laws
        and ensuring your business stays compliant as regulations evolve. The platform automates the filing of
        sales tax returns and payments, so you never miss a deadline. This reduces the risk of incurring late
        fees and penalties, allowing you to focus on other aspects of your business.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxValet also offers robust audit protection. Should an audit occur, their team manages the entire
        process, from responding to inquiries to representing you before tax authorities. This proactive audit
        defense ensures that any potential issues are addressed quickly and efficiently, minimizing disruption
        to your business.</p>
      <p className="text-md text-white shadow-text pt-3">
        A dedicated team is assigned to each client, providing personalized support and ensuring that all
        compliance needs are met. This team handles everything from exemption certificate management to
        monitoring sales tax variances, ensuring that your systems are always accurate and up-to-date. With
        TaxValet, you gain a partner that actively works to keep your business compliant, freeing you from the
        intricacies of sales tax management.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-taxvalet-operates-a-step-by-step-breakdown" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxValet Operates: A Step-by-Step Breakdown
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-taxvalet-operates-a-step-by-step-breakdown-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxValet Operates: A Step-by-Step Breakdown
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
