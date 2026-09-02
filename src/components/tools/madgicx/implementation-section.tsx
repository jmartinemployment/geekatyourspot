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
              <p className="text-md text-white shadow-text pt-3">Implementing Madgicx requires careful planning to ensure a smooth transition and effective use of its capabilities.
                Here are some specific considerations for businesses looking to deploy Madgicx for automated <GlossaryLink slug="dynamic-creative-optimization">ad spend optimization</GlossaryLink>.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Accelerated Deployment: Madgicx offers pre-built connectors and templated setups that facilitate quick
                  integration with existing marketing systems. This accelerates the deployment process, allowing businesses to
                  start optimizing their ad spend without significant delays.</li>
                <li>Data Model Design: Before implementing Madgicx, it&#39;s crucial to map out the data structure that will be
                  used. This involves understanding how audience data, creative content, and performance metrics will be
                  organized and accessed within the platform.</li>
                <li>Workflow and Process Configuration: Madgicx requires setting up specific workflows for ad approval and
                  campaign management. This includes configuring <GlossaryLink slug="marketing-automation">automation</GlossaryLink> logic to ensure that ads are optimized and
                  deployed efficiently.</li>
                <li>Custom Code and Development: While Madgicx primarily relies on configuration, there may be instances where
                  custom development is needed to integrate with other tools or systems. Understanding the platform&#39;s API
                  capabilities can help in extending its functionality to meet specific business needs.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">At Geek At Your Spot, we assist businesses in navigating these considerations to ensure a successful implementation
                of Madgicx. Our expertise in AI and marketing technology helps close the gap for clients by providing tailored
                solutions that enhance ad spend optimization.</p>
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
              <p className="text-md text-white shadow-text pt-3">Implementing Madgicx requires careful planning to ensure a smooth transition and effective use of its capabilities.
                Here are some specific considerations for businesses looking to deploy Madgicx for automated ad spend optimization.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Accelerated Deployment: Madgicx offers pre-built connectors and templated setups that facilitate quick
                  integration with existing marketing systems. This accelerates the deployment process, allowing businesses to
                  start optimizing their ad spend without significant delays.</li>
                <li>Data Model Design: Before implementing Madgicx, it&#39;s crucial to map out the data structure that will be
                  used. This involves understanding how audience data, creative content, and performance metrics will be
                  organized and accessed within the platform.</li>
                <li>Workflow and Process Configuration: Madgicx requires setting up specific workflows for ad approval and
                  campaign management. This includes configuring automation logic to ensure that ads are optimized and
                  deployed efficiently.</li>
                <li>Custom Code and Development: While Madgicx primarily relies on configuration, there may be instances where
                  custom development is needed to integrate with other tools or systems. Understanding the platform&#39;s API
                  capabilities can help in extending its functionality to meet specific business needs.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">At Geek At Your Spot, we assist businesses in navigating these considerations to ensure a successful implementation
                of Madgicx. Our expertise in AI and marketing technology helps close the gap for clients by providing tailored
                solutions that enhance ad spend optimization.</p>
            </div>
          </div>
        </div >
      </section >
    </>
  );
}
