import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DeployingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Stampli in your existing business environment is a streamlined process, thanks to its
        pre-built connectors and templated setup. These features significantly shorten the go-live period,
        allowing businesses to start reaping the benefits of Automated Approval Workflows quickly.
        Stampli&#39;s integration with popular&nbsp;
        <GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems
        means that your financial data remains consistent and synchronized across platforms.</p>
      <p className="text-md text-white shadow-text pt-3">
        The implementation process begins with a thorough assessment of your current workflows. Geek @ Your
        Spot, as the implementation partner, works closely with your team to map out existing processes and
        identify areas for improvement. This collaborative approach ensures that Stampli is configured to meet
        your unique business needs, from data structure and mapping decisions to approval chains and routing
        logic.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key advantages of Stampli is its flexibility in handling complex approval hierarchies. The
        platform allows for customizable approval workflows that can be tailored to fit your
        organization&#39;s specific requirements. Whether it&#39;s setting up multi-level approval demands or
        configuring automated approvals based on predefined rules, Stampli offers the tools needed to
        streamline your&nbsp;
        <GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts payable</GlossaryLink>&nbsp;process.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot also provides comprehensive training and support to ensure a smooth transition. This
        includes helping your team understand how to leverage Stampli&#39;s features to their fullest
        potential, such as using dynamic approval routing to adapt to business changes without IT
        intervention. The focus is on empowering your team to manage the system independently, reducing
        reliance on external support.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, Stampli&#39;s config-only approach means there are no complex coding requirements or need
        for an SDK. This makes it an ideal solution for small businesses looking to implement&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>&nbsp;without the
        overhead of extensive technical resources. The platform&#39;s intuitive interface and robust support
        from Geek @ Your Spot ensure that your team can quickly adapt to the new system and start seeing
        results.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Stampli&#39;s extension mechanisms, such as its&nbsp;
        <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;capabilities,
        allow for further customization and integration with other business tools. This flexibility ensures
        that Stampli can grow with your business, adapting to new challenges and opportunities as they arise.
        By choosing Geek @ Your Spot for your Stampli implementation, you gain a partner committed to making
        the transition as seamless and beneficial as possible.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-stampli-in-your-business-environment">
                Deploying Stampli in Your Business Environment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-stampli-in-your-business-environment">
                Deploying Stampli in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
