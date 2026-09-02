import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-capabilities">Key Capabilities</h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">6sense delivers a focused set of <GlossaryLink slug="ai">AI</GlossaryLink>-powered capabilities that improve how teams score, prioritize, and engage leads, turning raw behavioral data into sales-ready insights.</p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
              <li>Predictive lead scoring with advanced data modeling that evaluates behavior and engagement patterns to predict conversion likelihood and surface high-potential prospects first.</li>
              <li>Behavioral intent analysis and customer journey mapping that reveals what drives buying decisions, so teams understand where each account is in its evaluation.</li>
              <li><GlossaryLink slug="ai">AI</GlossaryLink>-driven recommendations for personalized outreach, helping reps tailor messaging and timing to match demonstrated intent rather than generic follow-up.</li>
              <li>Automated lead prioritization that eliminates manual sorting, reduces time spent on low-potential leads, and routes top-ranked leads to the right owner immediately.</li>
              <li>Seamless <GlossaryLink slug="crm">CRM</GlossaryLink> integration with real-time insights, keeping scores and intent signals synchronized across existing sales tools for timely, coordinated action.</li>
            </ul>
          </div>
          <div className="col-span-5 flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
