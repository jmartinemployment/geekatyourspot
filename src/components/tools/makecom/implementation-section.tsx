export default function ImplementationSection() {
  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-right text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementation Considerations</h2>
                </div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Implementing Make.com for AI content repurposing involves several considerations to ensure a smooth and effective deployment. Here are key factors to keep in mind:</p><ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3"><li>Accelerated Deployment: Make.com offers pre-built connectors and templated setups that significantly reduce the time required to go live. By utilizing these resources, businesses can quickly integrate Make.com into their existing systems and start automating workflows within days instead of weeks.</li><li>Data Model Design: Understanding the data structure is crucial when setting up Make.com. Businesses need to map out how data will flow between different applications and ensure that the data model supports the intended workflows. This upfront planning helps avoid potential issues and ensures that automation processes run smoothly.</li><li>Workflow and Process Configuration: Make.com allows for the configuration of complex workflows, including approval chains and routing logic. Businesses should define these processes clearly to ensure that content is repurposed and distributed according to their specific needs. This includes setting up conditional logic to handle different scenarios effectively.</li><li>Custom Code and Development: While Make.com primarily offers a no-code environment, there might be scenarios where custom code is necessary. For instance, if a business requires specific functionalities not covered by existing connectors, custom scripting may be needed. However, for most standard automation tasks, Make.com’s built-in capabilities are sufficient.</li></ul><p className="text-md text-white shadow-text pt-3">Geek At Your Spot, a consultancy specializing in AI implementations, can assist businesses in navigating these considerations. Their expertise in accelerated deployment, data model design, and workflow configuration ensures that businesses can leverage Make.com to its fullest potential, minimizing disruption and maximizing efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementation Considerations</h2>
              <p className="text-md text-white shadow-text pt-3">Implementing Make.com for AI content repurposing involves several considerations to ensure a smooth and effective deployment. Here are key factors to keep in mind:</p><ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3"><li>Accelerated Deployment: Make.com offers pre-built connectors and templated setups that significantly reduce the time required to go live. By utilizing these resources, businesses can quickly integrate Make.com into their existing systems and start automating workflows within days instead of weeks.</li><li>Data Model Design: Understanding the data structure is crucial when setting up Make.com. Businesses need to map out how data will flow between different applications and ensure that the data model supports the intended workflows. This upfront planning helps avoid potential issues and ensures that automation processes run smoothly.</li><li>Workflow and Process Configuration: Make.com allows for the configuration of complex workflows, including approval chains and routing logic. Businesses should define these processes clearly to ensure that content is repurposed and distributed according to their specific needs. This includes setting up conditional logic to handle different scenarios effectively.</li><li>Custom Code and Development: While Make.com primarily offers a no-code environment, there might be scenarios where custom code is necessary. For instance, if a business requires specific functionalities not covered by existing connectors, custom scripting may be needed. However, for most standard automation tasks, Make.com’s built-in capabilities are sufficient.</li></ul><p className="text-md text-white shadow-text pt-3">Geek At Your Spot, a consultancy specializing in AI implementations, can assist businesses in navigating these considerations. Their expertise in accelerated deployment, data model design, and workflow configuration ensures that businesses can leverage Make.com to its fullest potential, minimizing disruption and maximizing efficiency.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
