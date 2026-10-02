import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] font-black font-[var(--font-sora)] shadow-text">
              Key Capabilities</h2>
            <p className="text-md text-white shadow-text pt-3">Salesforce Pardot provides a robust set of features designed to streamline marketing efforts and deliver measurable
              results. Here are some of its key capabilities:</p>
            <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
              <li><GlossaryLink slug="sales-qualified-lead">Lead Scoring</GlossaryLink> and Grading: Automatically score leads based on their engagement and fit, allowing sales teams to
                prioritize high-quality leads. This capability helps in identifying prospects who are more likely to convert,
                thereby optimizing the sales funnel.</li>
              <li>Email <GlossaryLink slug="marketing-automation">Marketing Automation</GlossaryLink>: Design and send personalized email campaigns with ease. Pardot’s drag-and-drop
                interface and <GlossaryLink slug="machine-learning">AI-driven</GlossaryLink> insights help craft messages that resonate with recipients, increasing open and
                click-through rates.</li>
              <li>Landing Page and Form Builders: Create custom landing pages and forms without needing extensive coding
                knowledge. These tools enable marketers to capture leads efficiently and integrate them directly into the sales
                pipeline.</li>
              <li>Campaign Management: Plan, execute, and analyze marketing campaigns from a single platform. Pardot’s
                comprehensive campaign management tools allow for detailed tracking of campaign performance and <GlossaryLink slug="kpi">ROI</GlossaryLink>.</li>
              <li>Social Media Marketing: Connect with prospects on social media platforms through integrated tools that allow for
                scheduling, tracking, and analyzing social media efforts.</li>
              <li>AI-Powered Insights: Utilize artificial intelligence to gain deeper insights into customer behavior and
                preferences. This feature helps in tailoring marketing strategies to meet the evolving needs of customers.</li>
            </ul>
            <p className="text-md text-white shadow-text pt-3">These capabilities combined make Salesforce Pardot a powerful tool for marketing teams looking to enhance their
              efficiency and effectiveness. By automating routine tasks, teams can focus on strategic planning and creative
              execution, leading to better alignment with business goals and improved customer satisfaction.</p>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </section>
  );
}
