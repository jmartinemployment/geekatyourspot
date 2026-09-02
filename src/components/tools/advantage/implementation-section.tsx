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
              <p className="text-md text-white shadow-text pt-3">Implementing Advantage requires careful planning and consideration to ensure a smooth transition and effective use
                of its capabilities. Here are some key aspects to consider when deploying Advantage for automated ad spend
                optimization.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Accelerated Deployment: Advantage offers pre-built connectors and templated setups that streamline the
                  deployment process. This allows businesses to quickly integrate the tool with their existing systems and
                  start benefiting from automated <GlossaryLink slug="dynamic-creative-optimization">ad spend optimization</GlossaryLink> without lengthy setup times.</li>
                <li>Data Model Design: A well-thought-out data model is crucial for maximizing the effectiveness of Advantage.
                  Businesses need to map their data structures to align with Advantage&#39;s algorithms, ensuring that the
                  tool can accurately analyze and leverage data for optimal ad performance.</li>
                <li>Workflow and Process Configuration: Advantage allows for the configuration of custom approval chains and
                  <GlossaryLink slug="marketing-automation">automation</GlossaryLink> logic. Businesses should define their workflow processes in advance to ensure that the tool
                  operates in line with organizational goals and compliance requirements.</li>
                <li>Custom Code and Development: While Advantage is largely configuration-based, there is room for customization
                  through APIs and scripting where necessary. Businesses that require specific functionalities can leverage
                  these options to tailor the tool to their unique needs.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">Geek At Your Spot specializes in bridging the gap for businesses looking to implement Advantage. Our consultancy
                services focus on accelerating deployment, designing effective data models, configuring workflows, and developing
                custom solutions where needed. By partnering with us, businesses can ensure a successful implementation that
                maximizes the tool&#39;s potential and delivers tangible results.</p>
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
              <p className="text-md text-white shadow-text pt-3">Implementing Advantage requires careful planning and consideration to ensure a smooth transition and effective use
                of its capabilities. Here are some key aspects to consider when deploying Advantage for automated ad spend
                optimization.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Accelerated Deployment: Advantage offers pre-built connectors and templated setups that streamline the
                  deployment process. This allows businesses to quickly integrate the tool with their existing systems and
                  start benefiting from automated ad spend optimization without lengthy setup times.</li>
                <li>Data Model Design: A well-thought-out data model is crucial for maximizing the effectiveness of Advantage.
                  Businesses need to map their data structures to align with Advantage&#39;s algorithms, ensuring that the
                  tool can accurately analyze and leverage data for optimal ad performance.</li>
                <li>Workflow and Process Configuration: Advantage allows for the configuration of custom approval chains and
                  automation logic. Businesses should define their workflow processes in advance to ensure that the tool
                  operates in line with organizational goals and compliance requirements.</li>
                <li>Custom Code and Development: While Advantage is largely configuration-based, there is room for customization
                  through APIs and scripting where necessary. Businesses that require specific functionalities can leverage
                  these options to tailor the tool to their unique needs.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">Geek At Your Spot specializes in bridging the gap for businesses looking to implement Advantage. Our consultancy
                services focus on accelerating deployment, designing effective data models, configuring workflows, and developing
                custom solutions where needed. By partnering with us, businesses can ensure a successful implementation that
                maximizes the tool&#39;s potential and delivers tangible results.</p>
            </div>
          </div>
        </div >
      </section >
    </>
  );
}
