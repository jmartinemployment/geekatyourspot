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
              Implementing Claude into your <GlossaryLink slug="marketing-automation">content creation</GlossaryLink> workflow involves several key considerations to ensure a smooth and effective deployment. Understanding these aspects can help businesses maximize the tool&apos;s benefits and streamline their content production process.
            </p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">
              Accelerated Deployment
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Claude offers pre-built connectors and templated setups that facilitate a faster go-live process. This means businesses can start generating content more quickly without extensive setup times, allowing them to see results sooner.
            </p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">
              Data Model Design
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              When using Claude, it&apos;s important to consider how your data will be structured and mapped. This involves determining the types of keywords and topics that are most relevant to your business and ensuring that Claude&apos;s algorithms are aligned with these priorities.
            </p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-and-process-configuration">
              Workflow and Process Configuration
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Claude allows for customization in approval chains and content routing. This means businesses can tailor the content creation process to fit their specific workflow needs, ensuring that content is reviewed and approved efficiently.
            </p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-code-and-development">
              Custom Code and Development
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              While Claude does not require extensive custom coding, understanding its <GlossaryLink slug="api">API</GlossaryLink> and any available scripting options can enhance its <GlossaryLink slug="api-integration">integration</GlossaryLink> with existing systems. This allows for more seamless operation and better alignment with business processes.
            </p>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              By addressing these considerations, businesses can ensure that they are using Claude to its full potential, thereby improving their content creation efficiency and effectiveness. Geek At Your Spot, a consultancy specializing in AI implementation, can assist in bridging any gaps during the deployment and integration phases, ensuring that Claude is configured to meet specific business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
