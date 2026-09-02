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
              <p className="text-md text-white shadow-text pt-3">Implementing Optimove for automated <GlossaryLink slug="dynamic-creative-optimization">ad spend optimization</GlossaryLink> involves several key considerations that can significantly
                impact the success of the deployment. Understanding these factors can help businesses streamline the implementation
                process and maximize the benefits of the platform.</p>
              <p className="text-md text-white shadow-text pt-3">1. Accelerated Deployment: Optimove offers pre-built connectors and templated setups that facilitate quick
                deployment. These features allow businesses to integrate Optimove with their existing systems without extensive
                customization, reducing the time to go-live. This is particularly beneficial for companies looking to swiftly
                transition to automated ad spend optimization.</p>
              <p className="text-md text-white shadow-text pt-3">2. Data Model Design: Designing an effective data model is crucial when implementing Optimove. Businesses need to
                map their data structures to align with Optimove’s requirements, ensuring that customer information and campaign
                data are accurately captured and utilized. This step is essential for leveraging Optimove’s <GlossaryLink slug="analytics">predictive analytics</GlossaryLink> and
                <GlossaryLink slug="user-segmentation">customer segmentation</GlossaryLink> capabilities.</p>
              <p className="text-md text-white shadow-text pt-3">3. Workflow/Process Configuration: Optimove allows for the configuration of workflows and approval chains that align
                with a business’s operational processes. This includes setting up <GlossaryLink slug="marketing-automation">automation</GlossaryLink> logic for campaign adjustments and
                approvals, which can streamline operations and reduce the need for manual oversight.</p>
              <p className="text-md text-white shadow-text pt-3">4. Custom Code/Development: While Optimove is primarily a configuration-based platform, it does offer APIs for
                integration with other tools and systems. Businesses may need to develop custom code for specific integrations or to
                extend Optimove’s functionality to meet unique business needs. However, for most standard implementations, the
                platform’s built-in features and configurations are sufficient.</p>
              <p className="text-md text-white shadow-text pt-3">At Geek At Your Spot, we specialize in closing the gap for businesses by providing expert guidance on these
                implementation considerations. Our consultancy services ensure that clients can leverage Optimove’s full potential,
                resulting in faster deployment, efficient data management, and optimized ad spend strategies.</p>
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
              <p className="text-md text-white shadow-text pt-3">Implementing Optimove for automated ad spend optimization involves several key considerations that can significantly
                impact the success of the deployment. Understanding these factors can help businesses streamline the implementation
                process and maximize the benefits of the platform.</p>
              <p className="text-md text-white shadow-text pt-3">1. Accelerated Deployment: Optimove offers pre-built connectors and templated setups that facilitate quick
                deployment. These features allow businesses to integrate Optimove with their existing systems without extensive
                customization, reducing the time to go-live. This is particularly beneficial for companies looking to swiftly
                transition to automated ad spend optimization.</p>
              <p className="text-md text-white shadow-text pt-3">2. Data Model Design: Designing an effective data model is crucial when implementing Optimove. Businesses need to
                map their data structures to align with Optimove’s requirements, ensuring that customer information and campaign
                data are accurately captured and utilized. This step is essential for leveraging Optimove’s predictive analytics and
                customer segmentation capabilities.</p>
              <p className="text-md text-white shadow-text pt-3">3. Workflow/Process Configuration: Optimove allows for the configuration of workflows and approval chains that align
                with a business’s operational processes. This includes setting up automation logic for campaign adjustments and
                approvals, which can streamline operations and reduce the need for manual oversight.</p>
              <p className="text-md text-white shadow-text pt-3">4. Custom Code/Development: While Optimove is primarily a configuration-based platform, it does offer APIs for
                integration with other tools and systems. Businesses may need to develop custom code for specific integrations or to
                extend Optimove’s functionality to meet unique business needs. However, for most standard implementations, the
                platform’s built-in features and configurations are sufficient.</p>
              <p className="text-md text-white shadow-text pt-3">At Geek At Your Spot, we specialize in closing the gap for businesses by providing expert guidance on these
                implementation considerations. Our consultancy services ensure that clients can leverage Optimove’s full potential,
                resulting in faster deployment, efficient data management, and optimized ad spend strategies.</p>
            </div>
          </div>
        </div >
      </section >
    </>
  );
}
