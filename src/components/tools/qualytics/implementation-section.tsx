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
              <p className="text-md text-white shadow-text pt-3">Implementing Qualytics requires careful planning to ensure that the platform is integrated effectively into your
                existing data infrastructure. Here are some key considerations to keep in mind when deploying Qualytics for
                automated ad spend optimization.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Accelerated Deployment: Qualytics offers pre-built connectors for popular ad platforms, which can
                  significantly reduce the time required for deployment. This means businesses can start benefiting from
                  improved data quality faster, allowing for quicker optimization of ad spend.</li>
                <li>Data Model Design: It&#39;s important to design a data model that aligns with your business objectives and
                  ad optimization goals. Qualytics provides tools to map your data structures effectively, ensuring that data
                  flows seamlessly across different platforms.</li>
                <li>Workflow and Process Configuration: Qualytics allows for the configuration of specific workflows and
                  processes to automate data validation and anomaly detection. This includes setting up approval chains and
                  routing rules to ensure that data quality issues are addressed promptly.</li>
                <li>Custom Code and Development: While Qualytics primarily operates through configuration, it also offers an API
                  for more advanced customizations. This allows businesses to extend the platform&#39;s capabilities to meet
                  specific requirements, such as integrating with proprietary systems or developing custom data validation
                  rules.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">At Geek At Your Spot, we specialize in helping businesses navigate these implementation challenges. Our expertise in
                AI and data management ensures that Qualytics is deployed efficiently, maximizing its impact on your ad spend
                optimization efforts.</p>
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
              <p className="text-md text-white shadow-text pt-3">Implementing Qualytics requires careful planning to ensure that the platform is integrated effectively into your
                existing data infrastructure. Here are some key considerations to keep in mind when deploying Qualytics for
                automated ad spend optimization.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Accelerated Deployment: Qualytics offers pre-built connectors for popular ad platforms, which can
                  significantly reduce the time required for deployment. This means businesses can start benefiting from
                  improved data quality faster, allowing for quicker optimization of ad spend.</li>
                <li>Data Model Design: It&#39;s important to design a data model that aligns with your business objectives and
                  ad optimization goals. Qualytics provides tools to map your data structures effectively, ensuring that data
                  flows seamlessly across different platforms.</li>
                <li>Workflow and Process Configuration: Qualytics allows for the configuration of specific workflows and
                  processes to automate data validation and anomaly detection. This includes setting up approval chains and
                  routing rules to ensure that data quality issues are addressed promptly.</li>
                <li>Custom Code and Development: While Qualytics primarily operates through configuration, it also offers an API
                  for more advanced customizations. This allows businesses to extend the platform&#39;s capabilities to meet
                  specific requirements, such as integrating with proprietary systems or developing custom data validation
                  rules.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">At Geek At Your Spot, we specialize in helping businesses navigate these implementation challenges. Our expertise in
                AI and data management ensures that Qualytics is deployed efficiently, maximizing its impact on your ad spend
                optimization efforts.</p>
            </div>
          </div>
        </div >
      </section >
    </>
  );
}
