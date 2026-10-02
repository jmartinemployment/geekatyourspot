export default function HowDextTransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Dext offers a powerful solution to the challenges of manual bookkeeping by automating key processes
        and enhancing efficiency. Through its platform, Dext automates data capture, extraction, and
        categorization, significantly reducing the need for manual data entry. This automation not only
        minimizes errors but also improves the consistency and accuracy of financial records.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the standout features of Dext is its ability to process documents with over 99% accuracy,
        ensuring that discrepancies are identified and addressed while they are still minor. This proactive
        approach prevents small errors from escalating into larger issues, saving time and resources in the
        long run. By automating routine tasks, Dext allows teams to focus on higher-value work such as
        financial analysis and strategic decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        Dext&#39;s AI Assist takes automation a step further by learning from user preferences and decisions.
        It surfaces suggestions for automating repetitive tasks, allowing firms to apply their unique
        judgment consistently across transactions. This human-in-the-loop approach ensures that
        professionals remain in control, with every suggestion being transparent and reviewable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Furthermore, Dext enhances productivity through its Time Spent feature, which provides clear
        visibility into how teams allocate their time across clients. This insight enables firms to optimize
        workflows, manage workloads more effectively, and identify areas where efficiencies can be gained. By
        understanding where time is being concentrated, firms can rebalance workloads and improve overall
        productivity.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Dext helps turn automation into advisory value by streamlining bookkeeping, improving workflow
        insight, and enabling more proactive client service.&quot;&nbsp;
        <a id="tools-accounting-dext-transforms-source"
          href="https://dext.com/us/blog/single/ai-and-automation-in-accounting-how-to-build-a-smarter-scalable-practice-with-dext"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Dext
        </a></p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-dext-transforms-bookkeeping">
                How Dext Transforms Bookkeeping
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-dext-transforms-bookkeeping">
                How Dext Transforms Bookkeeping
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
