export default function WhenToUseSection() {
  const body = (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">6sense is most valuable when your sales team is overwhelmed by manual lead scoring and struggles to distinguish high-intent prospects from routine inquiries. By automating the analysis of behavior, engagement patterns, and buying signals, it frees reps to focus on conversations most likely to close and shortens the time between interest and outreach.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">The platform fits especially well for B2B teams and growing small businesses that handle significant inbound volume without dedicated data science resources. If you rely on a CRM like HubSpot or Salesforce and need scoring that updates in real time as prospects interact with your site, content, and campaigns, 6sense provides a practical path to consistent prioritization without disrupting existing workflows.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">Compared with traditional rule-based scoring or generic CRM score fields that depend on subjective judgment, 6sense uses predictive analytics and AI-driven intent signals to deliver more accurate, defensible rankings. That accuracy means more efficient allocation of follow-up, fewer resources wasted on low-potential leads, and outreach that is personalized to demonstrated interest rather than assumptions.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">Ultimately, choose 6sense when accuracy, speed, and seamless adoption matter more than building custom models in-house. It offers a strategic upgrade for teams that want to operationalize AI for revenue impact now, with support from Geek @ Your Spot LLC to align scoring logic, integration, and change management to your business goals.</p>
    </>
  );
  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="when-to-use">When to Use</h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="when-to-use-lg">When to Use</h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
