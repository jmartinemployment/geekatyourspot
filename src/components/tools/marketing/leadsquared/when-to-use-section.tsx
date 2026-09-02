import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function WhenToUseSection() {
  return (
    <section className="min-h-screen bg-[#8C4E2A] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 lg:place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="when-to-use">When to Use</h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">LeadSquared is ideal when sales teams are overwhelmed by volume and struggle to distinguish serious buyers from casual inquiries. If reps spend hours manually reviewing lists or chasing cold contacts, <GlossaryLink slug="lead-scoring">AI-powered scoring</GlossaryLink> brings order by surfacing high-intent leads first and ensuring resources align with real opportunity.</p>
            <p className="pt-3 text-md font-normal text-white shadow-text">Small to mid-sized businesses with lean marketing and sales operations benefit most, particularly where lead management spans multiple channels and spreadsheets no longer scale. Teams that need shared visibility across marketing and sales, consistent follow-up, and faster response times will see immediate gains in efficiency and conversion without hiring additional staff.</p>
            <p className="pt-3 text-md font-normal text-white shadow-text">Compared to managing scores in a generic <GlossaryLink slug="crm">CRM</GlossaryLink> or adding a standalone scoring add-on, LeadSquared offers a unified alternative that bundles scoring, automation, and reporting in one platform. Businesses that have outgrown manual rules or disconnected tools will find its combined <GlossaryLink slug="crm">CRM</GlossaryLink> and automation depth more sustainable than patching separate products together.</p>
            <p className="pt-3 text-md font-normal text-white shadow-text">Choose LeadSquared when you need a configurable, low-code path to better pipeline quality with the option to extend via <GlossaryLink slug="api">APIs</GlossaryLink> as you scale. The strategic payoff is a more reliable funnel, fewer missed opportunities, and a sales process that improves continuously as data and scoring models mature.</p>
          </div>
          <div className="col-span-5 flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
