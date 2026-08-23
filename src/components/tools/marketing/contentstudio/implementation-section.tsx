export default function ImplementationSection() {
  return (
    <section className="min-h-screen bg-[#025E73] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-9 w-full">
            <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations">Implementation Considerations</h2>
          </div>
          <div className="col-span-12">
            <p className="pt-3 text-md font-normal text-white shadow-text">Implementing ContentStudio effectively requires careful planning and consideration of several factors specific to the platform. Here are key aspects to focus on during deployment:</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">Accelerated Deployment</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">ContentStudio offers pre-built connectors and templated setups that speed up the deployment process. Businesses can quickly integrate their existing content management systems and social media platforms, reducing the time to go-live and minimizing disruptions to ongoing operations.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">Data Model Design</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Designing a data model that aligns with ContentStudio's capabilities is crucial. Consider how different content types will be transformed and mapped within the platform. This involves planning how content will be tagged, categorized, and stored to facilitate efficient repurposing and retrieval.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-configuration">Workflow and Process Configuration</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">ContentStudio allows for detailed configuration of workflows, including approval chains and content routing. Establishing clear processes for content transformation and distribution ensures that the right content reaches the right audience at the right time. Automation rules can be set up to streamline these processes, further enhancing efficiency.</p>
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-development">Custom Code and Development</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">While ContentStudio is primarily a configuration-based platform, it does offer APIs for more advanced customizations. Businesses with specific needs can leverage these APIs to extend the platform's functionality, integrating it more deeply with bespoke systems or workflows. Geek At Your Spot can assist with these advanced implementations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
