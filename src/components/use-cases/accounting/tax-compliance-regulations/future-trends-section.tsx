
export default function FutureTrendsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The landscape of&nbsp;tax compliance&nbsp;is evolving
        rapidly with advancements in automation technologies. As governments and businesses strive to streamline
        tax processes, several trends are emerging that promise to redefine how tax compliance is managed. These
        trends not only aim to enhance efficiency but also to ensure greater accuracy and transparency in tax
        reporting.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li><strong>Increased Use of Artificial Intelligence and Machine Learning</strong></li>
        <li><strong>Blockchain for Transparent and Secure Transactions</strong></li>
        <li><strong>Expansion of Real-Time Reporting Systems</strong></li>
      </ul>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Increased Use of Artificial Intelligence and Machine Learning
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Artificial Intelligence (AI) and Machine Learning (ML) are set to play pivotal roles in the next phase
        of tax compliance automation. These technologies enable more sophisticated data analysis, helping
        organizations identify patterns and anomalies in tax data that might indicate compliance issues. For
        instance, AI can automate the process of cross-referencing tax filings with transactional data, reducing
        the risk of errors and fraud.</p>
      <p className="text-md text-white shadow-text pt-3">
        At Geek @ Your Spot LLC, we leverage AI to help clients develop predictive analytics models that can
        anticipate potential compliance risks before they manifest. By integrating these models into existing
        tax compliance workflows, businesses can transition from reactive to proactive compliance strategies.
        This not only minimizes risk but also optimizes resource allocation by focusing efforts on high-risk
        areas identified by AI.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Blockchain for Transparent and Secure Transactions
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Blockchain technology, known for its secure and transparent ledger capabilities, is gaining traction in
        the realm of tax compliance. By recording transactions on a blockchain, businesses can provide an
        immutable audit trail that enhances trust and accountability. This is particularly beneficial for
        industries with complex supply chains or those subject to frequent audits.</p>
      <p className="text-md text-white shadow-text pt-3">
        In a hypothetical scenario, a mid-sized manufacturer using blockchain for its tax compliance could see a
        40% reduction in audit preparation time. Geek @ Your Spot LLC is at the forefront of integrating blockchain
        solutions into tax compliance systems, offering expertise in developing custom smart contracts that
        automate compliance checks and ensure adherence to tax regulations.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Expansion of Real-Time Reporting Systems
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Real-time reporting is becoming increasingly essential as tax authorities worldwide move toward more
        immediate and accurate tax data collection. This trend is driven by the need for governments to quickly
        assess and respond to economic conditions and ensure timely collection of tax revenues. Real-time
        systems can provide tax authorities with up-to-date insights into corporate tax liabilities, improving
        fiscal planning and reducing the likelihood of compliance errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        To help businesses adapt to this shift, Geek @ Your Spot LLC focuses on designing and implementing
        real-time data integration solutions. Our team assists clients in reconfiguring their data models and
        workflows to accommodate continuous data feeds, ensuring that they meet the demands of real-time
        reporting without disrupting existing operations. Additionally, we provide change management support to
        facilitate a smooth transition to these new systems.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="future-trends-in-tax-compliance-automation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Future Trends in Tax Compliance Automation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="future-trends-in-tax-compliance-automation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Future Trends in Tax Compliance Automation
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
