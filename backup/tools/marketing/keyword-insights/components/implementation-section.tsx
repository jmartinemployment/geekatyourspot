import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function ImplementationSection() {
  return (
    <section className="min-h-screen bg-[#025E73] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-start">
          <div className="col-span-9">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations">
              Implementation Considerations
            </h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Successfully implementing <GlossaryLink slug="keyword-density">Keyword Insights</GlossaryLink> requires careful planning and understanding of its specific functionalities.
            </p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">
              Accelerated Deployment
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Keyword Insights offers pre-built connectors and templated setups that facilitate quick <GlossaryLink slug="api-integration">integration</GlossaryLink> with existing systems. This reduces the time required to go live and allows businesses to start benefiting from insights almost immediately.
            </p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">
              Data Model Design
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              It is crucial to design a data model that aligns with the business&apos;s specific needs. Keyword Insights requires mapping of data structures to ensure that keyword insights are accurately captured and utilized in content strategies.
            </p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-and-process-configuration">
              Workflow and Process Configuration
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Configuring <GlossaryLink slug="marketing-automation">workflows</GlossaryLink> to incorporate Keyword Insights is essential. This includes setting up approval chains and routing for keyword suggestions to ensure that content teams can efficiently act on insights provided by the tool.
            </p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-code-and-development">
              Custom Code and Development
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              While Keyword Insights does not require extensive custom coding, it does offer an <GlossaryLink slug="api">API</GlossaryLink> that can be used for further customization and integration with other platforms. This allows businesses to tailor the tool to their specific requirements and maximize its utility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
