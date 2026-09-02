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
              <p className="text-md text-white shadow-text pt-3">Implementing Anomalo effectively requires careful planning and consideration of several key factors. These
                considerations ensure that businesses can maximize the benefits of Anomalo and achieve efficient automated ad spend
                optimization.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Accelerated Deployment: Anomalo offers pre-built connectors that facilitate quick <GlossaryLink slug="api-integration">integration</GlossaryLink> with popular
                  data platforms. This feature shortens the go-live time, allowing businesses to start monitoring their data
                  quality sooner. By leveraging these connectors, companies can reduce the complexity of deployment and ensure
                  a smoother transition.</li>
                <li>Data Model Design: An effective data model is crucial for Anomalo&#39;s performance. Businesses need to map
                  their data structures carefully to ensure that Anomalo can accurately monitor and detect anomalies. This
                  involves understanding the data flows and ensuring that all relevant data points are included in the
                  monitoring process.</li>
                <li><GlossaryLink slug="marketing-automation">Workflow</GlossaryLink> and Process Configuration: Anomalo requires configuration of workflows to manage how data issues
                  are addressed. This includes setting up approval chains and routing processes to ensure that detected
                  anomalies are reviewed and resolved promptly. Proper configuration of these workflows is essential for
                  maintaining data integrity.</li>
                <li>Custom Code/Development: Anomalo is primarily a configuration-based platform, meaning that extensive custom
                  coding is not typically required. However, businesses can utilize its <GlossaryLink slug="api">API</GlossaryLink> for advanced integrations or
                  specific use cases that require custom development. This flexibility allows for tailored solutions that meet
                  unique business needs.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">By addressing these considerations, businesses can ensure a successful implementation of Anomalo. This preparation
                enables companies to maintain high <GlossaryLink slug="data-quality">data quality</GlossaryLink>, which is crucial for the effectiveness of automated ad spend
                optimization tools like Google Ads Smart Bidding and Jasper.</p>
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
              <p className="text-md text-white shadow-text pt-3">Implementing Anomalo effectively requires careful planning and consideration of several key factors. These
                considerations ensure that businesses can maximize the benefits of Anomalo and achieve efficient automated ad spend
                optimization.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Accelerated Deployment: Anomalo offers pre-built connectors that facilitate quick integration with popular
                  data platforms. This feature shortens the go-live time, allowing businesses to start monitoring their data
                  quality sooner. By leveraging these connectors, companies can reduce the complexity of deployment and ensure
                  a smoother transition.</li>
                <li>Data Model Design: An effective data model is crucial for Anomalo&#39;s performance. Businesses need to map
                  their data structures carefully to ensure that Anomalo can accurately monitor and detect anomalies. This
                  involves understanding the data flows and ensuring that all relevant data points are included in the
                  monitoring process.</li>
                <li>Workflow and Process Configuration: Anomalo requires configuration of workflows to manage how data issues
                  are addressed. This includes setting up approval chains and routing processes to ensure that detected
                  anomalies are reviewed and resolved promptly. Proper configuration of these workflows is essential for
                  maintaining data integrity.</li>
                <li>Custom Code/Development: Anomalo is primarily a configuration-based platform, meaning that extensive custom
                  coding is not typically required. However, businesses can utilize its API for advanced integrations or
                  specific use cases that require custom development. This flexibility allows for tailored solutions that meet
                  unique business needs.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">By addressing these considerations, businesses can ensure a successful implementation of Anomalo. This preparation
                enables companies to maintain high data quality, which is crucial for the effectiveness of automated ad spend
                optimization tools like Google Ads Smart Bidding and Jasper.</p>
            </div>
          </div>
        </div >
      </section >
    </>
  );
}
