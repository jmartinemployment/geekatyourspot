import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function ImplementationSection() {
  return (
    <section className="min-h-screen bg-[#025E73] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-5 flex items-center justify-center"></div>
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations">Implementation Considerations</h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">Rolling out <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink> with ActiveCampaign succeeds when data, workflows, and adoption are planned together. Many teams stumble on unclear data mapping or misaligned scoring criteria that produce unreliable scores. Geek At Your Spot focuses on structured deployment so ActiveCampaign fits your existing systems and sales process from day one.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">Accelerated Deployment</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">ActiveCampaign offers pre-built connectors and templated automation recipes that shorten time to value. By connecting your <GlossaryLink slug="crm">CRM</GlossaryLink>, email, and e-commerce tools through its 1,000+ integrations, teams can launch scoring models quickly without lengthy IT projects. Geek At Your Spot accelerates setup by configuring initial scoring rules and nurturing tracks so you can start prioritizing leads within days rather than months.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">Data Model Design</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">A sound data model is the foundation of accurate scoring. We map key attributes such as engagement frequency, purchase history, and demographic signals to scoring weights that reflect true buying intent. Geek At Your Spot collaborates with your team to establish validation checks, governance rules, and regular audits that keep <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink> data clean as volume grows.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-configuration">Workflow and Process Configuration</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">ActiveCampaign allows detailed configuration of workflows, including automated lead routing and approval chains that align with how your sales team actually works. High-scoring leads can be routed instantly to senior reps while lower-scoring contacts enter nurturing campaigns, with thresholds reviewed by managers. Geek At Your Spot maps each stage from initial contact to conversion to ensure automation enhances rather than disrupts daily operations.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-development">Custom Code and Development</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">While ActiveCampaign is primarily configuration-driven, its <GlossaryLink slug="api">APIs</GlossaryLink> enable deeper customization when bespoke logic or system-to-system sync is needed. For teams requiring custom scoring algorithms, proprietary data sources, or tight integration with internal tools, Geek At Your Spot provides development support to extend the platform securely and ensure data flows reliably across your tech stack.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
