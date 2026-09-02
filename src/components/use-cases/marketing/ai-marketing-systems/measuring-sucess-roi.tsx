import Image from "next/image";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MeasuringSuccessRoiSection() {
  return (
    <>
      <section className="min-h-screen bg-[#023859] text-white py-5">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">
              <Image
                width="460"
                height="460"
                src="/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-pillar-h2-measuring-success-and-roi.avif"
                alt="Transforming Marketing Chaos into Clarity" />
            </div>
            <div className="col-span-7">
              <h2 id="measuring-success-and-roi" className="text-white pt-3 lg:text-4xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Measuring Success and ROI</h2>
              <p className="pt-3 text-md font-normal text-white shadow-text">Small businesses often struggle with knowing if their AI marketing systems are delivering real value. Without clear
                measurement, they risk spending on technology that doesn&apos;t drive results. Understanding how to measure success and
                return on investment (ROI) is crucial for making informed decisions about AI marketing investments. This section
                will guide you through the practical steps to evaluate AI&#39;s impact on your marketing efforts.</p>
              <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text">
                <li>Track <GlossaryLink slug="conversion-funnel">conversion rates</GlossaryLink> before and after AI integration.</li>
                <li>Measure time saved on repetitive tasks using automation.</li>
                <li>Monitor customer engagement metrics, such as click-through rates and dwell time.</li>
                <li>Calculate cost savings from reduced manual efforts and errors.</li>
              </ul>
              <h3 id="setting-clear-objectives" className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">Setting Clear Objectives</h3>
              <p className="pt-3 text-md font-normal text-white shadow-text">To effectively measure the success of AI marketing systems, businesses must first establish clear objectives. These
                objectives should align with broader business goals, such as increasing sales, improving customer engagement, or
                reducing marketing costs. By setting specific, measurable, achievable, relevant, and time-bound (SMART) goals,
                businesses can better assess whether their AI initiatives are hitting the mark.</p>
              <h4 id="defining-key-performance-indicators-kpis" className="text-white pt-2 lg:text-2xl font-black font-[var(--font-sora)] shadow-text">Defining Key Performance Indicators (<GlossaryLink slug="kpi">KPIs</GlossaryLink>)</h4>
              <p className="pt-3 text-md font-normal text-white shadow-text">Selecting the right KPIs is crucial. For instance, if the goal is to boost online sales, relevant KPIs might
                include conversion rates and average order value. Geek At Your Spot can help businesses identify these KPIs and
                integrate them into their AI systems for real-time tracking, ensuring that every marketing effort is tied to a
                concrete outcome.</p>
              <h4 id="aligning-ai-metrics-with-business-goals" className="text-white pt-2 lg:text-2xl font-black font-[var(--font-sora)] shadow-text">Aligning AI Metrics with Business Goals</h4>
              <p className="pt-3 text-md font-normal text-white shadow-text">AI metrics should not exist in a vacuum. Geek At Your Spot assists clients by aligning AI metrics with strategic
                business objectives, ensuring that AI efforts contribute directly to overall growth. For example, if a small
                business aims to enhance customer satisfaction, AI tools can be configured to track and improve response times in
                customer communications.</p>
            </div>
            <div className="col-span-12">
              <h3 id="tools-for-measuring-success" className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">Tools for Measuring Success</h3>
              <p className="pt-3 text-md font-normal text-white shadow-text">The right tools are essential for measuring the success of AI marketing systems. These tools provide the data
                needed to analyze performance and make informed decisions. Geek At Your Spot can recommend and integrate tools that
                suit individual business needs, from analytics platforms to AI-specific reporting software.</p>
              <h4 id="analytics-platforms" className="text-white pt-2 lg:text-2xl font-black font-[var(--font-sora)] shadow-text">Analytics Platforms</h4>
              <p className="pt-3 text-md font-normal text-white shadow-text">Platforms like Google <GlossaryLink slug="analytics">Analytics</GlossaryLink> and HubSpot offer powerful tracking and reporting capabilities. They can be used to
                monitor website traffic, user behavior, and conversion metrics. Geek At Your Spot helps businesses set up and
                customize these platforms to extract actionable insights from AI-driven campaigns.</p>
              <h4 id="ai-specific-reporting-tools" className="text-white pt-2 lg:text-2xl font-black font-[var(--font-sora)] shadow-text">AI-Specific Reporting Tools</h4>
              <p className="pt-3 text-md font-normal text-white shadow-text">AI-specific reporting tools can offer deeper insights into how AI algorithms are performing. Tools like IBM Watson
                and Salesforce Einstein provide dashboards that show how AI is influencing marketing outcomes. In a hypothetical
                scenario, a small retailer could see a 30% increase in targeted ad engagement through such tools, directly linking
                AI efforts to increased sales.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}