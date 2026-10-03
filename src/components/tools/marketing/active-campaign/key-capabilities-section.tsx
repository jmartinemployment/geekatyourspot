import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-capabilities">Key Capabilities</h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">ActiveCampaign tackles the core challenge of <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink> — deciding which leads deserve immediate attention — by automating data capture and turning behavior into precise, actionable scores. Its capabilities ensure no lead is overlooked and every follow-up is prioritized by real intent.</p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
              <li>Automated Multi-Channel Data Collection: Gathers lead interactions from email opens, website visits, social engagements, and e-commerce activity without manual entry, creating a unified view of each prospect&apos;s journey for more accurate scoring.</li>
              <li><GlossaryLink slug="machine-learning">AI</GlossaryLink>-Powered Behavioral Tracking: Monitors actions such as link clicks, page dwell time, and content downloads and updates scores in real time, so sales teams can react immediately when engagement spikes.</li>
              <li>Customizable Scoring Rules: Lets businesses define weighted criteria tailored to their sales priorities, such as assigning higher values to demo requests or technical case-study views to spotlight high-value prospects.</li>
              <li>Seamless <GlossaryLink slug="crm">CRM</GlossaryLink> and App Integration: Connects with over 1,000 platforms including existing <GlossaryLink slug="crm">CRM</GlossaryLink> systems to sync lead data centrally, eliminating silos and keeping scoring consistent across marketing and sales workflows.</li>
              <li>Autonomous Marketing and Engagement Automation: Orchestrates personalized follow-ups across channels based on score thresholds, ensuring consistent nurturing and timely handoff of sales-ready leads without manual routing.</li>
            </ul>
          </div>
          <div className="col-span-5 flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
