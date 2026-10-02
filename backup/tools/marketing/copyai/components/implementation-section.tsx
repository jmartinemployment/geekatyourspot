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
            <p className="pt-3 text-md font-normal text-white shadow-text">When implementing Copy.ai, there are several key considerations to ensure a smooth deployment and effective use of the tool. These considerations will help businesses maximize the benefits of AI <GlossaryLink slug="content-repurposing">content repurposing</GlossaryLink> and streamline their content strategies.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">Accelerated Deployment</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">One of the primary advantages of Copy.ai is its accelerated deployment process. The tool offers pre-built connectors and templated setups that simplify the initial configuration. This means that businesses can quickly integrate Copy.ai into their existing workflows, reducing the time and effort required to go live. For organizations with limited technical resources, this feature is particularly beneficial as it minimizes the need for extensive IT support.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">Data Model Design</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Data model design is another crucial aspect to consider. Copy.ai requires businesses to map their existing content structures to the tool's AI algorithms. This involves understanding how the content is organized and how it can be transformed into different formats. By carefully designing the data model, businesses can ensure that the AI generates accurate and relevant content variations that align with their brand voice and objectives.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-configuration">Workflow and Process Configuration</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Workflow and process configuration are integral to optimizing the use of Copy.ai. The tool allows for the customization of approval chains and routing processes, enabling businesses to tailor the <GlossaryLink slug="marketing-automation">content creation</GlossaryLink> workflow to their specific needs. This customization ensures that the right stakeholders are involved at each stage of content development, enhancing collaboration and maintaining quality control.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-development">Custom Code and Development</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Unlike some platforms that require custom coding or development, Copy.ai is primarily a configuration-based tool. This means that businesses can leverage its full capabilities without the need for extensive programming knowledge. However, for those looking to extend the tool's functionality, Copy.ai does offer API access for more advanced integrations. This flexibility allows businesses to adapt the tool to their specific requirements.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
