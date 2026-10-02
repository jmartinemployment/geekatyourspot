import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function ImplementationSection() {
  return (
    <section className="min-h-screen bg-[#025E73] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-9 w-full">
            <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations">Implementation Considerations</h2>
          </div>
          <div className="col-span-12">
            <p className="pt-3 text-md font-normal text-white shadow-text">Implementing Airia into your content strategy involves several key considerations to ensure a smooth and effective deployment. These considerations are tailored to the specific capabilities and features of Airia, helping businesses maximize their investment in AI <GlossaryLink slug="content-repurposing">content repurposing</GlossaryLink>.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">Accelerated Deployment</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Airia offers pre-built connectors and templated setups that significantly shorten the go-live process. By using these resources, businesses can quickly integrate Airia into their existing workflows, minimizing downtime and accelerating the benefits of <GlossaryLink slug="machine-learning">AI-driven</GlossaryLink> content repurposing.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">Data Model Design</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">A critical step in implementing Airia is designing a data model that aligns with your content strategy. This involves mapping out how different content formats will be generated and distributed across platforms. Proper data model design ensures that the content repurposing process is efficient and aligned with business goals.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-configuration">Workflow and Process Configuration</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Airia allows for the configuration of specific workflows and approval chains, enabling businesses to tailor the content repurposing process to their unique needs. By setting up automated routing and approval processes, businesses can maintain control over content quality while benefiting from increased efficiency.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-development">Custom Code and Development</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">While Airia is largely a configuration-based tool, it offers an API for more advanced customization needs. Businesses with specific requirements can leverage this API to extend Airia's capabilities, creating bespoke solutions that fit their content strategy perfectly. Geek At Your Spot can assist in these advanced implementations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
