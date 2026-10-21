import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function ImplementationSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">Rolling out lead scoring with ActiveCampaign succeeds when data, workflows, and adoption are planned together. Many teams stumble on unclear data mapping or misaligned scoring criteria that produce unreliable scores. Geek @ Your Spot LLC focuses on structured deployment so ActiveCampaign fits your existing systems and sales process from day one.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id={`accelerated-deployment${idSuffix}`}>Accelerated Deployment</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">ActiveCampaign offers pre-built connectors and templated automation recipes that shorten time to value. By connecting your CRM, email, and e-commerce tools through its 1,000+ integrations, teams can launch scoring models quickly without lengthy IT projects. Geek @ Your Spot LLC accelerates setup by configuring initial scoring rules and nurturing tracks so you can start prioritizing leads within days rather than months.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id={`data-model-design${idSuffix}`}>Data Model Design</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">A sound data model is the foundation of accurate scoring. We map key attributes such as engagement frequency, purchase history, and demographic signals to scoring weights that reflect true buying intent. Geek @ Your Spot LLC collaborates with your team to establish validation checks, governance rules, and regular audits that keep lead scoring data clean as volume grows.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id={`workflow-configuration${idSuffix}`}>Workflow and Process Configuration</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">ActiveCampaign allows detailed configuration of workflows, including automated lead routing and approval chains that align with how your sales team actually works. High-scoring leads can be routed instantly to senior reps while lower-scoring contacts enter nurturing campaigns, with thresholds reviewed by managers. Geek @ Your Spot LLC maps each stage from initial contact to conversion to ensure automation enhances rather than disrupts daily operations.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id={`custom-development${idSuffix}`}>Custom Code and Development</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">While ActiveCampaign is primarily configuration-driven, its <GlossaryLink slug="api">APIs</GlossaryLink> enable deeper customization when bespoke logic or system-to-system sync is needed. For teams requiring custom scoring algorithms, proprietary data sources, or tight integration with internal tools, Geek @ Your Spot LLC provides development support to extend the platform securely and ensure data flows reliably across your tech stack.</p>
    </>
  );
  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations">Implementation Considerations</h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations-lg">Implementation Considerations</h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
