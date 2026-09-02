import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function WhenToUseSection() {
  return (
    <section className="min-h-screen bg-[#8C4E2A] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 lg:place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="when-to-use">When to Use</h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">Pipedrive is an excellent choice for small to medium-sized teams looking to enhance their sales process with <GlossaryLink slug="machine-learning">AI-powered</GlossaryLink> <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink>. It offers a straightforward interface and robust functionality to prioritize high-potential leads without the overhead of enterprise <GlossaryLink slug="crm">CRM</GlossaryLink> suites.</p>
            <p className="pt-3 text-md font-normal text-white shadow-text">Sales teams overwhelmed by manual lead sorting, spreadsheet scoring, or subjective handoffs will see immediate relief. If reps spend more time qualifying than closing and valuable prospects slip through due to inconsistent follow-up, Pipedrive brings precision and routing that reduces errors in prioritization.</p>
            <p className="pt-3 text-md font-normal text-white shadow-text">Compared with heavier platforms or generic automation tools, Pipedrive focuses squarely on pipeline clarity and <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink> that maps to real selling stages. Businesses that need visual pipelines, flexible fields, and light automation — rather than deep marketing suite complexity — often adopt faster and see quicker sales efficiency gains.</p>
            <p className="pt-3 text-md font-normal text-white shadow-text">By using Pipedrive, teams can expect less time spent on qualification, fewer missed handoffs, and higher conversion on the opportunities most likely to close. If streamlined lead management and focused selling are the strategic priorities, Pipedrive provides a practical, cost-effective path to more informed, <GlossaryLink slug="machine-learning">AI-driven</GlossaryLink> sales decisions.</p>
          </div>
          <div className="col-span-5 flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
