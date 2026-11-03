export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">An AI data quality assessment builds automated validation that scans your data sources for completeness, accuracy, and formatting errors before that data is exposed to an AI model. The checks run on a schedule, catching gaps, duplicates, and inconsistencies the moment they appear rather than after they have already influenced a decision.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">For small businesses in South Florida, this matters because most AI tools — CRM automations, chatbots, reporting dashboards, and appointment schedulers — trust whatever data they receive. A missing field, a misformatted phone number, or a silently deleted record does not trigger an error; it just produces a wrong answer. Data quality assessments intercept those problems at the source.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">Geek @ Your Spot LLC sets up and runs these validations for small businesses in Miami-Dade, Broward, and Palm Beach counties, so your data stays reliable without adding manual work to your week.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-are-ai-data-quality-assessments" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Are AI Data Quality Assessments?
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-are-ai-data-quality-assessments-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Are AI Data Quality Assessments?
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
