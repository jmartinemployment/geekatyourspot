import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementationSection() {
  return (
    <section className="min-h-screen bg-[#025E73] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-5 flex items-center justify-center"></div>
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations">Implementation Considerations</h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">Implementing LeadSquared for <GlossaryLink slug="lead-scoring">AI-powered lead scoring</GlossaryLink> requires attention to deployment speed, data structure, process design, and extensibility. Planning these areas up front helps small and mid-sized teams achieve accurate scoring and rapid adoption.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">Accelerated Deployment</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">LeadSquared provides pre-built templates and out-of-the-box integrations that shorten initial configuration. By reusing proven setup patterns for scoring rules, assignment logic, and email sequences, teams can go live quickly and let sales start working prioritized leads within weeks rather than months. Geek At Your Spot accelerates this further by aligning templates to your existing funnel and tech stack.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">Data Model Design</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Accurate scoring depends on mapping the right fields from websites, forms, <GlossaryLink slug="crm">CRM</GlossaryLink>, and marketing tools into LeadSquared. Define criteria for behavioral engagement, demographic fit, and source attribution, then ensure consistent field mapping, deduplication, and normalization so the scoring model reflects true lead potential rather than noisy or incomplete data.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-configuration">Workflow and Process Configuration</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">LeadSquared supports configurable workflows for lead routing, approval chains, and automated follow-ups. Establish clear thresholds for marketing-qualified and sales-qualified stages, route by territory or product interest, and automate nudges so high-scoring leads are never left waiting. Documented processes reduce manual intervention and keep handoffs consistent across the team.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-development">Custom Code and Development</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Most teams can run LeadSquared through configuration alone without custom code, which keeps maintenance low. When unique requirements arise, <GlossaryLink slug="api">APIs</GlossaryLink> and webhooks allow deeper customization and integration with proprietary systems. Geek At Your Spot can advise when no-code configuration is sufficient and, where needed, build lightweight extensions that preserve upgradeability.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
