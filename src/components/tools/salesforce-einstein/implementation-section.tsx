import Image from "next/image";

export default function ImplementationSection() {

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-right text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementation Considerations</h2>
            </div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Implementing Salesforce Einstein for automated ad spend optimization requires careful planning and execution. Here
                are some specific considerations to ensure a successful deployment.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Accelerated Deployment: Salesforce Einstein offers pre-built connectors and templated setups that simplify
                  the integration process with existing Salesforce environments. This reduces the time and effort required to
                  go live, allowing businesses to start benefiting from AI insights sooner.</li>
                <li>Data Model Design: A well-structured data model is crucial for effective use of Salesforce Einstein.
                  Businesses need to map their data accurately to ensure that the AI can analyze it effectively. This involves
                  identifying key data points and ensuring they are captured consistently across systems.</li>
                <li>Workflow and Process Configuration: Configuring workflows and automation logic is essential for leveraging
                  Salesforce Einstein&#39;s capabilities. This includes setting up approval chains and routing rules to
                  streamline ad management processes. Businesses should ensure that these configurations align with their
                  overall marketing strategies.</li>
                <li>Custom Code and Development: While Salesforce Einstein is largely config-driven, there may be cases where
                  custom development is required to extend its functionality. This could involve using Salesforce&#39;s API or
                  other development tools to create custom solutions that meet specific business needs.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">At Geek At Your Spot, we assist businesses in navigating these considerations, ensuring a smooth implementation of
                Salesforce Einstein. Our expertise helps close the gap between AI capabilities and business needs, providing
                tailored solutions that drive real results. By focusing on these key areas, businesses can maximize the benefits of
                Salesforce Einstein and achieve more efficient ad spend optimization.</p>
            </div>
          </div>
        </div >
      </section >
      <section className="min-h-screen bg-[#025E73] text-white hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementation Considerations</h2>
              <p className="text-md text-white shadow-text pt-3">Implementing Salesforce Einstein for automated ad spend optimization requires careful planning and execution. Here
                are some specific considerations to ensure a successful deployment.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Accelerated Deployment: Salesforce Einstein offers pre-built connectors and templated setups that simplify
                  the integration process with existing Salesforce environments. This reduces the time and effort required to
                  go live, allowing businesses to start benefiting from AI insights sooner.</li>
                <li>Data Model Design: A well-structured data model is crucial for effective use of Salesforce Einstein.
                  Businesses need to map their data accurately to ensure that the AI can analyze it effectively. This involves
                  identifying key data points and ensuring they are captured consistently across systems.</li>
                <li>Workflow and Process Configuration: Configuring workflows and automation logic is essential for leveraging
                  Salesforce Einstein&#39;s capabilities. This includes setting up approval chains and routing rules to
                  streamline ad management processes. Businesses should ensure that these configurations align with their
                  overall marketing strategies.</li>
                <li>Custom Code and Development: While Salesforce Einstein is largely config-driven, there may be cases where
                  custom development is required to extend its functionality. This could involve using Salesforce&#39;s API or
                  other development tools to create custom solutions that meet specific business needs.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">At Geek At Your Spot, we assist businesses in navigating these considerations, ensuring a smooth implementation of
                Salesforce Einstein. Our expertise helps close the gap between AI capabilities and business needs, providing
                tailored solutions that drive real results. By focusing on these key areas, businesses can maximize the benefits of
                Salesforce Einstein and achieve more efficient ad spend optimization.</p>
            </div>
          </div>
        </div >
      </section >
    </>
  );
}
