import Image from "next/image";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MeasuringSuccessRoiSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">Small businesses often struggle with knowing if their AI marketing systems are delivering real value. Without clear
        measurement, they risk spending on technology that doesn&apos;t drive results. Understanding how to measure success and
        return on investment (ROI) is crucial for making informed decisions about AI marketing investments. This section
        will guide you through the practical steps to evaluate AI&#39;s impact on your marketing efforts.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Track <GlossaryLink slug="conversion-funnel" className="text-[#0B162A] hover:underline">conversion rates</GlossaryLink> before and after AI integration.</li>
        <li>Measure time saved on repetitive tasks using automation.</li>
        <li>Monitor customer engagement metrics, such as click-through rates and dwell time.</li>
        <li>Calculate cost savings from reduced manual efforts and errors.</li>
      </ul>
      <h3 id={`setting-clear-objectives${idSuffix}`} className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Setting Clear Objectives</h3>
      <p className="pt-3 text-base font-normal text-white shadow-text">To effectively measure the success of AI marketing systems, businesses must first establish clear objectives. These
        objectives should align with broader business goals, such as increasing sales, improving customer engagement, or
        reducing marketing costs. By setting specific, measurable, achievable, relevant, and time-bound (SMART) goals,
        businesses can better assess whether their AI initiatives are hitting the mark.</p>
      <h4 id={`defining-key-performance-indicators-kpis${idSuffix}`} className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Defining Key Performance Indicators (<GlossaryLink slug="kpi" className="text-white hover:text-[#0B162A] hover:underline">KPIs</GlossaryLink>)</h4>
      <p className="pt-3 text-base font-normal text-white shadow-text">Selecting the right KPIs is crucial. For instance, if the goal is to boost online sales, relevant KPIs might
        include conversion rates and average order value. Geek @ Your Spot LLC can help businesses identify these KPIs and
        integrate them into their AI systems for real-time tracking, ensuring that every marketing effort is tied to a
        concrete outcome.</p>
      <h4 id={`aligning-ai-metrics-with-business-goals${idSuffix}`} className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Aligning AI Metrics with Business Goals</h4>
      <p className="pt-3 text-base font-normal text-white shadow-text">AI metrics should not exist in a vacuum. Geek @ Your Spot LLC assists clients by aligning AI metrics with strategic
        business objectives, ensuring that AI efforts contribute directly to overall growth. For example, if a small
        business aims to enhance customer satisfaction, AI tools can be configured to track and improve response times in
        customer communications.</p>
      <h3 id={`tools-for-measuring-success${idSuffix}`} className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Tools for Measuring Success</h3>
      <p className="pt-3 text-base font-normal text-white shadow-text">The right tools are essential for measuring the success of AI marketing systems. These tools provide the data
        needed to analyze performance and make informed decisions. Geek @ Your Spot LLC can recommend and integrate tools that
        suit individual business needs, from analytics platforms to AI-specific reporting software.</p>
      <h4 id={`analytics-platforms${idSuffix}`} className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Analytics Platforms</h4>
      <p className="pt-3 text-base font-normal text-white shadow-text">Platforms like Google Analytics and HubSpot offer powerful tracking and reporting capabilities. They can be used to
        monitor website traffic, user behavior, and conversion metrics. Geek @ Your Spot LLC helps businesses set up and
        customize these platforms to extract actionable insights from AI-driven campaigns.</p>
      <h4 id={`ai-specific-reporting-tools${idSuffix}`} className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">AI-Specific Reporting Tools</h4>
      <p className="pt-3 text-base font-normal text-white shadow-text">AI-specific reporting tools can offer deeper insights into how AI algorithms are performing. Tools like IBM Watson
        and Salesforce Einstein provide dashboards that show how AI is influencing marketing outcomes. In a hypothetical
        scenario, a small retailer could see a 30% increase in targeted ad engagement through such tools, directly linking
        AI efforts to increased sales.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">
              <Image
                width="211"
                height="211"
                src="/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-pillar-h2-measuring-success-and-roi.avif"
                alt="Magnifying glasses examine a rising bar chart surrounded by dollar coins, as marketing results are measured against spend." />
            </div>
            <div className="col-span-7">
              <h2 id="measuring-success-and-roi" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Measuring Success and ROI</h2>
            </div>
            <div className="col-span-12">
              {body()}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">
              <Image
                width="460"
                height="460"
                src="/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-pillar-h2-measuring-success-and-roi.avif"
                alt="Magnifying glasses examine a rising bar chart surrounded by dollar coins, as marketing results are measured against spend." />
            </div>
            <div className="col-span-7">
              <h2 id="measuring-success-and-roi-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Measuring Success and ROI</h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
