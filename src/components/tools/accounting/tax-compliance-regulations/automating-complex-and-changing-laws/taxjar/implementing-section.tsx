
export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing TaxJar in your business environment is a streamlined process that minimizes downtime and
        maximizes efficiency. Geek @ Your Spot LLC ensures a smooth transition by leveraging pre-built connectors
        and a phased rollout strategy. This approach reduces the complexity of integration and allows your
        business to quickly benefit from automated&nbsp;tax
        compliance.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step involves assessing your current systems and identifying the necessary integrations.
        TaxJar offers a suite of pre-built connectors for popular platforms like Shopify, Salesforce, and
        QuickBooks, which significantly shortens the setup time. These connectors allow for seamless data flow
        between your existing systems and TaxJar, eliminating the need for extensive custom development.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, Geek @ Your Spot LLC configures TaxJar to match your specific business needs. This includes setting up
        tax rules and automations that align with your sales channels and product offerings. The phased rollout
        approach means that the implementation is done in stages, allowing for thorough testing and adjustments
        before full deployment. This minimizes the risk of disruptions and ensures that your team can continue
        to operate efficiently throughout the transition.</p>
      <p className="text-md text-white shadow-text pt-3">
        During the implementation, Geek @ Your Spot LLC provides comprehensive training for your team, ensuring that
        everyone understands how to use TaxJar effectively. This training covers everything from navigating the
        platform to managing tax filings, equipping your team with the skills needed to handle tax compliance
        independently.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, once TaxJar is live, Geek @ Your Spot LLC offers ongoing support to address any issues that arise
        and to make further optimizations as needed. This ensures that your business can adapt to changes in tax
        laws and continue to benefit from TaxJar&#39;s capabilities without interruption.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="implementing-taxjar-steps-to-go-live" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementing TaxJar: Steps to Go Live
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="implementing-taxjar-steps-to-go-live-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementing TaxJar: Steps to Go Live
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
