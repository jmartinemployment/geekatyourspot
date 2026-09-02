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
              Implementing HubSpot AI involves several considerations that can impact the success of its deployment.
            </p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">
              Accelerated Deployment
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              HubSpot AI offers pre-built connectors and templated setups that facilitate a quicker go-live process. This reduces the time required for initial setup and allows businesses to start benefiting from the tool&apos;s capabilities sooner.
            </p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">
              Data Model Design
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Proper data mapping is crucial for maximizing the effectiveness of HubSpot AI. Businesses need to ensure that their data is structured in a way that aligns with the tool&apos;s capabilities. Geek At Your Spot can help design a data model that leverages HubSpot AI&apos;s strengths, ensuring optimal performance.
            </p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-and-process-configuration">
              Workflow and Process Configuration
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Configuring workflows and processes within HubSpot AI is critical for automating tasks and ensuring efficiency. This includes setting up approval chains and routing logic to streamline <GlossaryLink slug="marketing-automation">content creation</GlossaryLink> and publication processes. Geek At Your Spot can provide guidance on best practices for workflow configuration to maximize productivity.
            </p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-code-and-development">
              Custom Code and Development
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              While HubSpot AI is largely a configuration-based tool, there may be instances where custom <GlossaryLink slug="api-integration">integrations</GlossaryLink> or enhancements are needed. Geek At Your Spot can assist with any necessary custom development, ensuring that the tool integrates seamlessly with existing systems and meets specific business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
