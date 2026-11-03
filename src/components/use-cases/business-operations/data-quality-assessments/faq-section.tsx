export default function FAQSection() {
  return (
    <section className="min-h-screen bg-[#BF5934] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is a data quality assessment?
            </h3>
            <p className="pt-3 text-base font-normal text-white shadow-text">A data quality assessment is an automated validation process that scans your data sources for completeness, accuracy, and formatting errors before that data is fed into an AI model or used to drive business decisions. It catches gaps, duplicates, and inconsistencies early so your AI tools work from information you can trust.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Why does data quality matter for small businesses using AI?
            </h3>
            <p className="pt-3 text-base font-normal text-white shadow-text">AI models produce outputs that are only as reliable as the data they receive. A single corrupted field or a missing record can cause an AI tool to generate incorrect recommendations, send follow-ups to the wrong contacts, or report misleading numbers. Data quality assessments intercept those problems before they reach the model.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What tools are used for AI data quality assessments?
            </h3>
            <p className="pt-3 text-base font-normal text-white shadow-text">Monte Carlo, Anomalo, Great Expectations, and Qualytics are the leading platforms. Monte Carlo and Anomalo focus on data observability and anomaly detection across live pipelines. Great Expectations is an open-source framework for defining and testing data validation rules. Qualytics automates data quality checks and governance across your data sources.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How long does it take to set up data quality monitoring?
            </h3>
            <p className="pt-3 text-base font-normal text-white shadow-text">A basic monitoring setup connecting your primary data sources typically takes one to two weeks. More complex environments with multiple integrations and custom validation rules take three to four weeks. Once running, the system monitors continuously without requiring ongoing manual effort.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
