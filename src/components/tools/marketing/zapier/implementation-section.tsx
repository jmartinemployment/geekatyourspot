export default function ImplementationSection() {
  return (
    <section className="min-h-screen bg-[#025E73] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-9 w-full">
            <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations">Implementation Considerations</h2>
          </div>
          <div className="col-span-12">
            <p className="pt-3 text-md font-normal text-white shadow-text">Implementing Zapier for AI content repurposing requires careful planning and understanding of its features. Here are some key considerations:</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">Accelerated Deployment</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Zapier offers pre-built connectors and templated setups that simplify the integration process. By using these resources, businesses can quickly deploy automation workflows, reducing the time to go-live. A phased rollout can further ease the transition by allowing teams to test and refine workflows incrementally.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">Data Model Design</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">When setting up Zapier, it's crucial to map out how data will flow between apps. This involves understanding the data structures of each connected app and ensuring that they align with your content repurposing goals. Proper data mapping ensures that content is accurately transformed and distributed.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-configuration">Workflow and Process Configuration</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Zapier allows for the configuration of complex workflows, including approval chains and routing logic. Businesses should define these processes clearly to ensure that content is repurposed and distributed according to their strategic objectives. This may involve setting up specific triggers and actions that align with business goals.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-development">Custom Code and Development</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">While Zapier is primarily a configuration-based tool, it does offer scripting capabilities through its Code by Zapier feature. This allows for custom code execution within workflows, providing additional flexibility for businesses with unique requirements. Geek At Your Spot can assist with advanced customizations as needed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
