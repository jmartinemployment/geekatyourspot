export default function ManualBookkeepingChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For small and medium-sized businesses, managing bookkeeping manually can be a daunting task. The
        traditional approach often involves handling paper receipts, emailed PDFs, and spreadsheets, which
        are prone to human error and inefficiencies. These manual processes limit real-time visibility into
        financial data and can lead to costly mistakes such as misclassification and VAT errors. Moreover,
        the time spent on these tasks can detract from focusing on core business activities.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the major pain points is the lack of consistency and accuracy in manual data entry. Even with
        the most diligent efforts, errors are inevitable, leading to discrepancies that require
        time-consuming corrections. This not only affects the accuracy of financial records but also impacts
        decision-making and compliance control. Businesses often find themselves spending hours on avoidable
        rework each week, which could be better spent on strategic initiatives.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, manual bookkeeping processes can hinder a business&#39;s ability to scale efficiently.
        As client expectations evolve, the demand for faster and more accurate financial insights increases.
        Without automation, firms struggle to keep pace with these expectations, risking their competitive
        edge. The need to manually chase down documents or correct mis-coded entries consumes resources that
        could be allocated to more value-added activities.</p>
      <p className="text-md text-white shadow-text pt-3">
        The challenges extend to managing client relationships as well. When bookkeeping is handled manually,
        it becomes difficult to provide timely and proactive advisory services. Clients expect their
        accountants to offer insights and guidance, not just basic bookkeeping. Without the ability to
        streamline these processes, firms may find it challenging to meet these expectations and maintain
        client satisfaction.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;AI is reshaping accounting fast by changing client expectations and making automation essential
        for firms that want to stay competitive.&quot;&nbsp;
        <a id="tools-accounting-dext-challenges-source"
          href="https://dext.com/us/blog/single/ai-and-automation-in-accounting-how-to-build-a-smarter-scalable-practice-with-dext"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Dext
        </a></p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-challenges-of-manual-bookkeeping-processes">
                The Challenges of Manual Bookkeeping Processes
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-challenges-of-manual-bookkeeping-processes">
                The Challenges of Manual Bookkeeping Processes
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
