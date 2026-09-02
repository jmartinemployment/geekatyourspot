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
              <p className="text-md text-white shadow-text pt-3">Implementing Google Ads Smart Bidding requires careful planning and consideration to ensure a smooth transition and
                effective use of the tool. Here are some specific considerations to keep in mind during the implementation process:</p>
              <p className="text-md text-white shadow-text pt-3">1. Accelerated Deployment: Google Ads Smart Bidding offers pre-built connectors and templated setups that can
                significantly shorten the time to go-live. By leveraging these resources, businesses can integrate Smart Bidding
                into their existing campaigns with minimal disruption. A phased rollout approach can also help in managing the
                transition effectively, allowing teams to gradually adapt to the new system.</p>
              <p className="text-md text-white shadow-text pt-3">2. Data Model Design: The success of Smart Bidding heavily relies on the quality and structure of your data.
                It&#39;s crucial to ensure that your data model is well-designed, with clear mapping of <GlossaryLink slug="conversion-funnel">conversion</GlossaryLink> actions and
                relevant metrics. This facilitates accurate predictions and optimizations by the tool. Consider working with a
                consultant or using platforms like Salesforce Einstein for advanced data insights.</p>
              <p className="text-md text-white shadow-text pt-3">3. <GlossaryLink slug="marketing-automation">Workflow</GlossaryLink>/Process Configuration: Configuring the right approval chains and automation logic is essential for
                maximizing the efficiency of Google Ads Smart Bidding. This involves setting up appropriate permissions and
                workflows to ensure that the tool can operate without unnecessary bottlenecks. Using tools like HubSpot can aid in
                streamlining these processes.</p>
              <p className="text-md text-white shadow-text pt-3">4. Custom Code/Development: Google Ads Smart Bidding does not require custom code or development for its core
                functionalities, as it is primarily a configuration-based tool. However, if there is a need for further
                customization or <GlossaryLink slug="api-integration">integration</GlossaryLink> with other systems, leveraging APIs and third-party tools like Smartly.io can provide
                additional flexibility.</p>
              <p className="text-md text-white shadow-text pt-3">At Geek At Your Spot, we specialize in helping businesses navigate these considerations, ensuring an efficient and
                effective implementation of Google Ads Smart Bidding. Our expertise in AI and marketing technology allows us to
                provide tailored solutions that meet the unique needs of each client.</p>
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
              <p className="text-md text-white shadow-text pt-3">Implementing Google Ads Smart Bidding requires careful planning and consideration to ensure a smooth transition and
                effective use of the tool. Here are some specific considerations to keep in mind during the implementation process:</p>
              <p className="text-md text-white shadow-text pt-3">1. Accelerated Deployment: Google Ads Smart Bidding offers pre-built connectors and templated setups that can
                significantly shorten the time to go-live. By leveraging these resources, businesses can integrate Smart Bidding
                into their existing campaigns with minimal disruption. A phased rollout approach can also help in managing the
                transition effectively, allowing teams to gradually adapt to the new system.</p>
              <p className="text-md text-white shadow-text pt-3">2. Data Model Design: The success of Smart Bidding heavily relies on the quality and structure of your data.
                It&#39;s crucial to ensure that your data model is well-designed, with clear mapping of conversion actions and
                relevant metrics. This facilitates accurate predictions and optimizations by the tool. Consider working with a
                consultant or using platforms like Salesforce Einstein for advanced data insights.</p>
              <p className="text-md text-white shadow-text pt-3">3. Workflow/Process Configuration: Configuring the right approval chains and automation logic is essential for
                maximizing the efficiency of Google Ads Smart Bidding. This involves setting up appropriate permissions and
                workflows to ensure that the tool can operate without unnecessary bottlenecks. Using tools like HubSpot can aid in
                streamlining these processes.</p>
              <p className="text-md text-white shadow-text pt-3">4. Custom Code/Development: Google Ads Smart Bidding does not require custom code or development for its core
                functionalities, as it is primarily a configuration-based tool. However, if there is a need for further
                customization or integration with other systems, leveraging APIs and third-party tools like Smartly.io can provide
                additional flexibility.</p>
              <p className="text-md text-white shadow-text pt-3">At Geek At Your Spot, we specialize in helping businesses navigate these considerations, ensuring an efficient and
                effective implementation of Google Ads Smart Bidding. Our expertise in AI and marketing technology allows us to
                provide tailored solutions that meet the unique needs of each client.</p>
            </div>
          </div>
        </div >
      </section >
    </>
  );
}
