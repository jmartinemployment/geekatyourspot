import { GlossaryLink } from "@/components/glossary/glossary-link";
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
              <p className="text-md text-white shadow-text pt-3">Implementing Great Expectations requires careful planning and consideration to maximize its benefits for automated
                <GlossaryLink slug="dynamic-creative-optimization">ad spend optimization</GlossaryLink>. Here are some specific factors to consider:</p>
              <p className="text-md text-white shadow-text pt-3">1. Accelerated Deployment: Great Expectations offers pre-built connectors and templates that can significantly
                shorten the deployment time. These resources allow businesses to quickly integrate data validation into their
                existing workflows, ensuring a faster go-live process and immediate improvements in <GlossaryLink slug="data-quality">data quality</GlossaryLink>.</p>
              <p className="text-md text-white shadow-text pt-3">2. Data Model Design: When designing data models for ad spend optimization, it is crucial to define clear
                expectations for data attributes. Great Expectations allows businesses to map these attributes and set validation
                rules upfront, ensuring that the data model supports accurate and reliable data analysis.</p>
              <p className="text-md text-white shadow-text pt-3">3. Workflow and Process Configuration: Configuring workflows in Great Expectations involves setting up approval
                chains and <GlossaryLink slug="marketing-automation">automation</GlossaryLink> logic to manage data validation processes. Businesses must ensure that these configurations
                align with their operational needs to maintain data integrity throughout the ad spend optimization process.</p>
              <p className="text-md text-white shadow-text pt-3">4. Custom Code and Development: While Great Expectations is largely configuration-based, it does offer an extension
                mechanism through custom code for more advanced validation scenarios. Businesses can leverage this feature to
                develop specific validation logic that caters to their unique data challenges, enhancing the tool’s effectiveness.</p>
              <p className="text-md text-white shadow-text pt-3">At Geek At Your Spot, our consultancy services help businesses navigate these considerations, ensuring that Great
                Expectations is implemented efficiently and effectively. We provide guidance on data model design, workflow
                configuration, and custom development to fill the gap between technical capabilities and business needs.</p>
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
              <p className="text-md text-white shadow-text pt-3">Implementing Great Expectations requires careful planning and consideration to maximize its benefits for automated
                ad spend optimization. Here are some specific factors to consider:</p>
              <p className="text-md text-white shadow-text pt-3">1. Accelerated Deployment: Great Expectations offers pre-built connectors and templates that can significantly
                shorten the deployment time. These resources allow businesses to quickly integrate data validation into their
                existing workflows, ensuring a faster go-live process and immediate improvements in data quality.</p>
              <p className="text-md text-white shadow-text pt-3">2. Data Model Design: When designing data models for ad spend optimization, it is crucial to define clear
                expectations for data attributes. Great Expectations allows businesses to map these attributes and set validation
                rules upfront, ensuring that the data model supports accurate and reliable data analysis.</p>
              <p className="text-md text-white shadow-text pt-3">3. Workflow and Process Configuration: Configuring workflows in Great Expectations involves setting up approval
                chains and automation logic to manage data validation processes. Businesses must ensure that these configurations
                align with their operational needs to maintain data integrity throughout the ad spend optimization process.</p>
              <p className="text-md text-white shadow-text pt-3">4. Custom Code and Development: While Great Expectations is largely configuration-based, it does offer an extension
                mechanism through custom code for more advanced validation scenarios. Businesses can leverage this feature to
                develop specific validation logic that caters to their unique data challenges, enhancing the tool’s effectiveness.</p>
              <p className="text-md text-white shadow-text pt-3">At Geek At Your Spot, our consultancy services help businesses navigate these considerations, ensuring that Great
                Expectations is implemented efficiently and effectively. We provide guidance on data model design, workflow
                configuration, and custom development to fill the gap between technical capabilities and business needs.</p>
            </div>
          </div>
        </div >
      </section >
    </>
  );
}
