import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">Data is the layer powering your AI tools. Every chatbot answer, automated follow-up, and report is built from the records in your systems, and AI tools trust those records without question. A missing field, a phone number in the wrong format, or a record that never synced does not raise an error. It produces a wrong answer, and the AI acts on it.</p>
      <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text"><Link id={`use-cases-business-operations-data-quality-heading${idSuffix}`} href="/use-cases/business-operations/data-quality-assessments" className="text-[#0B162A] hover:underline">Data Quality Assessments</Link></h3>
      <p className="pt-3 text-base font-normal text-white shadow-text">A <Link id={`use-cases-business-operations-data-quality${idSuffix}`} href="/use-cases/business-operations/data-quality-assessments" className="text-[#0B162A] hover:underline">data quality assessment</Link> builds automated validation scripts that scan your data sources for completeness, accuracy, and formatting errors before the data reaches a <GlossaryLink slug="large-language-models" className="text-[#0B162A] hover:underline">large language model</GlossaryLink>. The checks run on a schedule and flag problems as they appear. The tools we work with are <Link id={`use-cases-business-operations-data-quality-monte-carlo${idSuffix}`} href="/tools/ai-operations/data-quality-assessments/monte-carlo" className="text-[#0B162A] hover:underline">Monte Carlo</Link>, <Link id={`use-cases-business-operations-data-quality-anomalo${idSuffix}`} href="/tools/ai-operations/data-quality-assessments/anomalo" className="text-[#0B162A] hover:underline">Anomalo</Link>, <Link id={`use-cases-business-operations-data-quality-great-expectations${idSuffix}`} href="/tools/ai-operations/data-quality-assessments/great-expectations" className="text-[#0B162A] hover:underline">Great Expectations</Link>, and <Link id={`use-cases-business-operations-data-quality-qualytics${idSuffix}`} href="/tools/ai-operations/data-quality-assessments/qualytics" className="text-[#0B162A] hover:underline">Qualytics</Link>.</p>
      <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">AI Workflows</h3>
      <p className="pt-3 text-base font-normal text-white shadow-text">AI workflows move data between your business systems and run the steps of a process without code. When a lead arrives, a form is submitted, or a record changes, the workflow carries that information to every system that needs it, so nobody copies the same details from one app to another. The tools we work with are <Link id={`use-cases-business-operations-workflows-zapier${idSuffix}`} href="/tools/marketing/zapier" className="text-[#0B162A] hover:underline">Zapier</Link>, n8n, Make, CrewAI and CrewAI Studio, LangGraph, and Bardeen.ai.</p>
      <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">AI Customer Relationship Management (CRM)</h3>
      <p className="pt-3 text-base font-normal text-white shadow-text">An AI CRM holds the customer data that powers your AI-driven sales and operations. It is where your front desk’s leads land and where your workflows read and write customer records, so it is also where data quality matters most. The tools we work with are <Link id={`use-cases-business-operations-crm-pipedrive${idSuffix}`} href="/tools/marketing/pipedrive" className="text-[#0B162A] hover:underline">Pipedrive</Link>, Bigin, HighLevel, HubSpot, Keap, Monday, Streak, Zoho, and Insightly.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data
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
              <h2 id="data-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
