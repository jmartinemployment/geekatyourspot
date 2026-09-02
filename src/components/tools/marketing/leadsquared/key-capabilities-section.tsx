import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-capabilities">Key Capabilities</h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">LeadSquared offers a focused set of features that help businesses prioritize high-potential leads and scale sales execution. By combining <GlossaryLink slug="artificial-intelligence">AI</GlossaryLink> scoring with automation and reporting, it turns fragmented lead data into a clear action plan for the revenue team.</p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
              <li><GlossaryLink slug="artificial-intelligence">AI-powered</GlossaryLink> lead scoring that analyzes behavior, engagement, and demographic signals to rank leads by likelihood to convert and updates scores in real time as new interactions occur.</li>
              <li>Customizable scoring models that let teams weight criteria such as page views, email engagement, form fills, and firmographic data to match their specific sales process and ideal customer profile.</li>
              <li>Seamless <GlossaryLink slug="crm">CRM</GlossaryLink> and marketing platform integrations that keep lead data synchronized across systems, ensuring every team works from a single, up-to-date record.</li>
              <li>Automated workflows and lead routing that trigger follow-ups, assignments, and nurture sequences based on score thresholds so high-intent prospects are engaged without manual handoffs.</li>
              <li>Comprehensive reporting and actionable insights that track lead performance, conversion rates, and engagement patterns to refine scoring rules and improve pipeline quality over time.</li>
            </ul>
          </div>
          <div className="col-span-5 flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
