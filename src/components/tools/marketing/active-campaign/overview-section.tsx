import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function OverviewSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">ActiveCampaign is a robust marketing automation platform that streamlines <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink> by leveraging <GlossaryLink slug="machine-learning">AI</GlossaryLink>-driven insights. It is designed to help businesses reduce manual marketing tasks, optimize customer interactions, and focus on high-potential leads. By automating data collection and analysis, ActiveCampaign enables small teams to achieve significant efficiency gains, saving time and enhancing sales outcomes without adding headcount.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Traditional <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink> often relies on subjective judgment and manual data entry, leading to inefficiencies, inconsistent prioritization, and missed opportunities. ActiveCampaign addresses these pain points by automatically analyzing customer behavior across email, website, and connected apps and assigning accurate scores that reflect genuine buying intent. This reduces workload on sales teams and increases the accuracy of prioritization so reps can focus on prospects most likely to convert.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Compared to broader <GlossaryLink slug="crm">CRM</GlossaryLink> suites like HubSpot or Marketo that bundle lead scoring as one feature among many, ActiveCampaign differentiates with accessible automation, Active Intelligence for behavioral analysis, and over 1,000 app integrations that create a holistic view of every lead. Its strength is turning fragmented interactions into a centralized, actionable scoring model that small to medium-sized businesses can deploy quickly without enterprise complexity.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Strategically, ActiveCampaign shifts lead management from reactive sorting to proactive engagement. By ensuring sales efforts are directed toward the most valuable prospects and that no high-intent lead slips through the cracks, businesses improve conversion rates, allocate resources wisely, and build a scalable foundation for growth.</p>
    </>
  );
  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">Overview</h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div><div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">Overview</h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
