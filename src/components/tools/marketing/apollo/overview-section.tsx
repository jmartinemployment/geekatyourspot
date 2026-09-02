import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function OverviewSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Apollo is an <GlossaryLink slug="machine-learning">AI-driven</GlossaryLink> platform designed to enhance{" "}
        <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink> by analyzing data patterns and customer
        behaviors. By leveraging advanced algorithms, Apollo helps sales teams identify high-potential leads with
        greater accuracy and efficiency, removing the burden of manual lead sorting that slows down small businesses
        and growing teams alike.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        The platform automates the evaluation of lead interactions and engagement, assigning scores based on real
        behavioral signals rather than subjective guesswork. This <GlossaryLink slug="lead-scoring">automated scoring</GlossaryLink> ensures sales
        teams focus on the most promising prospects, while <GlossaryLink slug="machine-learning">AI</GlossaryLink>-powered insights surface data-driven indicators of intent
        and interest that would be difficult to spot manually.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Apollo also distinguishes itself through seamless integration with existing <GlossaryLink slug="crm">CRM</GlossaryLink> systems, allowing for smooth
        data flow and streamlined workflows without rebuilding your sales stack. Compared to generic scoring tools or
        manual spreadsheet approaches, Apollo combines scalable automation with precise, actionable insights, making it
        especially valuable for small businesses that need enterprise-grade targeting without enterprise complexity.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Strategically, Apollo shifts lead management from reactive sorting to proactive prioritization. By reducing time
        spent on low-quality leads, improving accuracy, and increasing conversion rates, it lets sales teams close
        faster and allocate resources where they drive the most revenue.
      </p>
    </>
  );
  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2
                className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text"
                id="overview"
              >
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2
                className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text"
                id="overview"
              >
                Overview
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
