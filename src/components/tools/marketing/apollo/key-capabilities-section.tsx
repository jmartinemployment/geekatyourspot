import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-7">
            <h2
              className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text"
              id="key-capabilities"
            >
              Key Capabilities
            </h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Apollo streamlines <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink> by combining <GlossaryLink slug="machine-learning">AI</GlossaryLink> analysis with automation, so sales teams can focus on high-potential leads instead of manual sorting and save time while boosting outcomes.
            </p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
              <li>
                Advanced Data Analysis: Apollo uses sophisticated algorithms to process large volumes of data quickly and surface customer behavior and engagement patterns that signal buying intent.
              </li>
              <li>
                Automated Lead Prioritization: The platform automatically assigns scores based on brand interactions and engagement, ensuring reps pursue the most promising prospects without manual triage.
              </li>
              <li>
                Seamless <GlossaryLink slug="crm">CRM</GlossaryLink> Integration: Apollo connects directly with existing <GlossaryLink slug="crm">CRM</GlossaryLink> systems to keep data flowing and workflows intact while enhancing scoring accuracy.
              </li>
              <li>
                Actionable Data-Driven Insights: Apollo translates complex signals into clear lead quality indicators, helping teams prioritize outreach with confidence and reduce human error.
              </li>
              <li>
                Scalable Workflow Enhancement: The platform adapts to businesses of all sizes and improves existing sales workflows rather than replacing them, supporting growth without process disruption.
              </li>
            </ul>
          </div>
          <div className="col-span-5 flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
