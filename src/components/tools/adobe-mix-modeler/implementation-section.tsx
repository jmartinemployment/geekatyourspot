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
              <p className="text-md text-white shadow-text pt-3">Implementing Adobe Mix Modeler requires careful planning and consideration to ensure a successful deployment. Here
                are some key factors to keep in mind during the implementation process:</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Accelerated Deployment: Adobe Mix Modeler offers pre-built connectors and templated setups that facilitate a
                  quicker go-live process. Businesses can leverage these resources to integrate the tool with their existing
                  systems efficiently, minimizing downtime and disruption.</li>
                <li>Data Model Design: It is crucial to design a data model that aligns with Adobe Mix Modeler’s requirements.
                  This involves mapping data sources accurately and ensuring that the necessary data points are available for
                  the tool to function optimally. Proper data model design is foundational to achieving accurate and
                  actionable insights.</li>
                <li>Workflow and Process Configuration: Adobe Mix Modeler allows for the configuration of workflow processes to
                  automate approval chains and routing. Businesses should assess their current processes and configure the
                  tool to align with their specific operational needs, ensuring that it supports rather than disrupts existing
                  workflows.</li>
                <li>Custom Code and Development: While Adobe Mix Modeler is primarily configuration-based, it does offer an API
                  for those who need to extend its capabilities. Businesses should evaluate whether they require custom
                  development to meet specific needs, and plan accordingly if additional coding is necessary.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">By addressing these considerations, businesses can ensure a smooth implementation of Adobe Mix Modeler, leading to
                more efficient ad spend optimization and improved marketing outcomes. Geek At Your Spot can assist in closing the
                gap by providing expert guidance on these aspects, helping businesses overcome challenges and maximize the tool’s
                potential.</p>
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
              <p className="text-md text-white shadow-text pt-3">Implementing Adobe Mix Modeler requires careful planning and consideration to ensure a successful deployment. Here
                are some key factors to keep in mind during the implementation process:</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Accelerated Deployment: Adobe Mix Modeler offers pre-built connectors and templated setups that facilitate a
                  quicker go-live process. Businesses can leverage these resources to integrate the tool with their existing
                  systems efficiently, minimizing downtime and disruption.</li>
                <li>Data Model Design: It is crucial to design a data model that aligns with Adobe Mix Modeler’s requirements.
                  This involves mapping data sources accurately and ensuring that the necessary data points are available for
                  the tool to function optimally. Proper data model design is foundational to achieving accurate and
                  actionable insights.</li>
                <li>Workflow and Process Configuration: Adobe Mix Modeler allows for the configuration of workflow processes to
                  automate approval chains and routing. Businesses should assess their current processes and configure the
                  tool to align with their specific operational needs, ensuring that it supports rather than disrupts existing
                  workflows.</li>
                <li>Custom Code and Development: While Adobe Mix Modeler is primarily configuration-based, it does offer an API
                  for those who need to extend its capabilities. Businesses should evaluate whether they require custom
                  development to meet specific needs, and plan accordingly if additional coding is necessary.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">By addressing these considerations, businesses can ensure a smooth implementation of Adobe Mix Modeler, leading to
                more efficient ad spend optimization and improved marketing outcomes. Geek At Your Spot can assist in closing the
                gap by providing expert guidance on these aspects, helping businesses overcome challenges and maximize the tool’s
                potential.</p>
            </div>
          </div>
        </div >
      </section >
    </>
  );
}
