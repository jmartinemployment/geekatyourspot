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
              <p className="text-md text-white shadow-text pt-3">Implementing AdCreative.ai can significantly streamline your ad management process, but there are several
                considerations to ensure a smooth deployment and integration with your existing systems. Geek At Your Spot provides
                expert guidance to help businesses navigate these aspects effectively.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Accelerated Deployment: AdCreative.ai offers pre-built connectors and templated setups that facilitate rapid
                  deployment. This means businesses can start optimizing their ad spend quickly without extensive technical
                  overhead.</li>
                <li>Data Model Design: It is crucial to map out how AdCreative.ai will interact with your existing data
                  structures. This involves understanding how the tool integrates with platforms like Tableau AI / Adobe
                  Analytics to ensure data consistency and accuracy in reporting and analysis.</li>
                <li>Workflow and Process Configuration: AdCreative.ai allows for customization of approval chains and routing
                  processes. Businesses should configure these workflows to align with their internal processes, ensuring that
                  ad content is reviewed and approved efficiently.</li>
                <li>Custom Code and Development: While AdCreative.ai is largely configuration-based, it does offer APIs for
                  deeper integration and customization. This flexibility allows businesses to tailor the platform to their
                  specific needs, although it generally does not require extensive custom development.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">By addressing these considerations, businesses can maximize the benefits of AdCreative.ai, ensuring that the tool is
                not only implemented effectively but also delivers the desired outcomes in terms of ad spend optimization.</p>
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
              <p className="text-md text-white shadow-text pt-3">Implementing AdCreative.ai can significantly streamline your ad management process, but there are several
                considerations to ensure a smooth deployment and integration with your existing systems. Geek At Your Spot provides
                expert guidance to help businesses navigate these aspects effectively.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Accelerated Deployment: AdCreative.ai offers pre-built connectors and templated setups that facilitate rapid
                  deployment. This means businesses can start optimizing their ad spend quickly without extensive technical
                  overhead.</li>
                <li>Data Model Design: It is crucial to map out how AdCreative.ai will interact with your existing data
                  structures. This involves understanding how the tool integrates with platforms like Tableau AI / Adobe
                  Analytics to ensure data consistency and accuracy in reporting and analysis.</li>
                <li>Workflow and Process Configuration: AdCreative.ai allows for customization of approval chains and routing
                  processes. Businesses should configure these workflows to align with their internal processes, ensuring that
                  ad content is reviewed and approved efficiently.</li>
                <li>Custom Code and Development: While AdCreative.ai is largely configuration-based, it does offer APIs for
                  deeper integration and customization. This flexibility allows businesses to tailor the platform to their
                  specific needs, although it generally does not require extensive custom development.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">By addressing these considerations, businesses can maximize the benefits of AdCreative.ai, ensuring that the tool is
                not only implemented effectively but also delivers the desired outcomes in terms of ad spend optimization.</p>
            </div>
          </div>
        </div >
      </section >
    </>
  );
}
