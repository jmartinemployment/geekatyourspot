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
            <p className="pt-3 text-md font-normal text-white shadow-text">Implementing Pipedrive for <GlossaryLink slug="machine-learning">AI-powered</GlossaryLink> <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink> involves several key considerations to ensure a smooth transition and effective use of the platform&apos;s capabilities. By focusing on accelerated deployment, data model design, workflow configuration, and custom development, businesses can optimize sales processes and enhance lead management efficiency.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">Accelerated Deployment</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Pipedrive is designed to be user-friendly, which helps speed up deployment with an intuitive interface and guided setup. Templates and predefined settings streamline initial configuration, so small businesses see less downtime and a quicker path to AI-powered scoring. Geek At Your Spot can accelerate this further by handling import, pipeline setup, and rep training.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">Data Model Design</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">When designing your data model, map how lead data will be structured and utilized across flexible custom fields tailored to effective scoring. Consider which points most indicate high potential — engagement levels, past interactions, or firmographics — so the <GlossaryLink slug="machine-learning">AI</GlossaryLink> has the necessary inputs to score accurately and consistently.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-configuration">Workflow and Process Configuration</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Configuring workflows is essential for automating lead management, including routing rules that prioritize high-scoring leads and assign them to the right owners. Pipedrive&apos;s automation for approval chains and notifications ensures no valuable lead slips through the cracks; Geek At Your Spot can configure these routes to match your sales motion.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-development">Custom Code and Development</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">For unique requirements, Pipedrive offers an <GlossaryLink slug="api">API</GlossaryLink> for custom development and integration with other systems. While built-in configuration covers most small business needs, custom code can extend capabilities for bespoke workflows — Geek At Your Spot can assess whether configuration alone suffices or a lightweight integration is warranted.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
