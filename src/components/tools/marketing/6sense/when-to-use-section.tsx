import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function WhenToUseSection() {
  return (
    <section className="min-h-screen bg-[#8C4E2A] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 lg:place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="when-to-use">When to Use</h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">6sense is most valuable when your sales team is overwhelmed by manual <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink> and struggles to distinguish high-intent prospects from routine inquiries. By automating the analysis of behavior, engagement patterns, and buying signals, it frees reps to focus on conversations most likely to close and shortens the time between interest and outreach.</p>
            <p className="pt-3 text-md font-normal text-white shadow-text">The platform fits especially well for B2B teams and growing small businesses that handle significant inbound volume without dedicated data science resources. If you rely on a <GlossaryLink slug="crm">CRM</GlossaryLink> like HubSpot or Salesforce and need scoring that updates in real time as prospects interact with your site, content, and campaigns, 6sense provides a practical path to consistent prioritization without disrupting existing workflows.</p>
            <p className="pt-3 text-md font-normal text-white shadow-text">Compared with traditional rule-based scoring or generic <GlossaryLink slug="crm">CRM</GlossaryLink> score fields that depend on subjective judgment, 6sense uses predictive analytics and <GlossaryLink slug="ai">AI</GlossaryLink>-driven intent signals to deliver more accurate, defensible rankings. That accuracy means more efficient allocation of follow-up, fewer resources wasted on low-potential leads, and outreach that is personalized to demonstrated interest rather than assumptions.</p>
            <p className="pt-3 text-md font-normal text-white shadow-text">Ultimately, choose 6sense when accuracy, speed, and seamless adoption matter more than building custom models in-house. It offers a strategic upgrade for teams that want to operationalize <GlossaryLink slug="ai">AI</GlossaryLink> for revenue impact now, with support from Geek At Your Spot to align scoring logic, integration, and change management to your business goals.</p>
          </div>
          <div className="col-span-5 flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
