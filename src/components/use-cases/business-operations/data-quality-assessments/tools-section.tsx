import Link from "next/link";

export default function ToolsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">Four platforms handle the majority of data quality work for small and mid-size businesses. Each covers a different angle of the problem.</p>
      <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text"><Link id={`use-cases-business-operations-data-quality-assessments-tools-monte-carlo${idSuffix}`} href="/tools/ai-operations/data-quality-assessments/monte-carlo" className="text-[#0B162A] hover:underline">Monte Carlo</Link></h3>
      <p className="pt-3 text-base font-normal text-white shadow-text">Monte Carlo is a data observability platform that monitors your data pipelines end-to-end. It detects data drift, schema changes, and anomalies in real time and surfaces them before they reach downstream systems. For businesses running AI tools that depend on live data feeds — CRM integrations, marketing platforms, or financial reporting — Monte Carlo acts as a continuous watchdog across every pipeline.</p>
      <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text"><Link id={`use-cases-business-operations-data-quality-assessments-tools-anomalo${idSuffix}`} href="/tools/ai-operations/data-quality-assessments/anomalo" className="text-[#0B162A] hover:underline">Anomalo</Link></h3>
      <p className="pt-3 text-base font-normal text-white shadow-text">Anomalo automatically detects and diagnoses data quality issues by continuously monitoring datasets for anomalies that deviate from established patterns. It connects directly to your data warehouse and flags problems — missing values, unexpected distributions, sudden row-count drops — without requiring manual rules for every check. Anomalo is particularly useful for businesses running AI models that process customer records or transactional data, where silent data issues translate directly into bad recommendations.</p>
      <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text"><Link id={`use-cases-business-operations-data-quality-assessments-tools-great-expectations${idSuffix}`} href="/tools/ai-operations/data-quality-assessments/great-expectations" className="text-[#0B162A] hover:underline">Great Expectations</Link></h3>
      <p className="pt-3 text-base font-normal text-white shadow-text">Great Expectations is an open-source data validation framework that lets you define and test explicit rules — called expectations — for what valid data looks like. You specify that a column must never be null, that values must fall within a given range, or that a field must match a particular format. Great Expectations runs those checks automatically on every data load and fails loudly if anything violates the rules. It is the right choice when you want precise, documented contracts on your data rather than anomaly detection alone.</p>
      <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text"><Link id={`use-cases-business-operations-data-quality-assessments-tools-qualytics${idSuffix}`} href="/tools/ai-operations/data-quality-assessments/qualytics" className="text-[#0B162A] hover:underline">Qualytics</Link></h3>
      <p className="pt-3 text-base font-normal text-white shadow-text">Qualytics provides automated data quality checks and governance across your data sources, combining anomaly detection with a structured framework for data validation and remediation. It scans for completeness, accuracy, consistency, and formatting errors, and it produces clear reports on what failed and why. For small businesses that need both the monitoring and a documented quality record, Qualytics covers both in a single platform.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="top-ai-data-quality-tools" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Top AI Data Quality Tools
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="top-ai-data-quality-tools-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Top AI Data Quality Tools
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
