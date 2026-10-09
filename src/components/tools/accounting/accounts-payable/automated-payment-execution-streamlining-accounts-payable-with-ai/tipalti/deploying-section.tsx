import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DeployingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing Tipalti for Automated Payment Execution involves several steps that ensure a seamless
        integration with your existing business systems. Geek @ Your Spot specializes in configuring Tipalti
        to fit the unique needs of small businesses, focusing on minimizing setup time and maximizing
        operational efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        The deployment process begins with a thorough assessment of your current financial systems and
        workflows. This step is critical to identify any potential integration challenges and to map out the
        data flows between Tipalti and your existing&nbsp;
        <GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;or
        accounting software. Geek @ Your Spot ensures that all necessary data mappings are established
        upfront, which is crucial for maintaining data integrity and ensuring seamless operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key advantages of Tipalti is its pre-built connectors, which facilitate quick integration
        with popular platforms like QuickBooks Online. These connectors reduce the complexity of the setup
        process, allowing businesses to go live faster without the need for extensive custom development. Geek
        @ Your Spot leverages these tools to ensure that your team is up and running with minimal
        disruption.</p>
      <p className="text-md text-white shadow-text pt-3">
        Configuring Tipalti involves setting up automated workflows that align with your business processes.
        This includes defining approval chains, routing rules, and automation logic that govern how invoices
        are processed and payments are executed. Geek @ Your Spot works closely with your finance team to
        tailor these configurations, ensuring that they reflect your operational needs and compliance
        requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        Training and support are integral to a successful deployment. Geek @ Your Spot provides comprehensive
        training sessions to ensure that your team is comfortable using Tipalti&#39;s features. This training
        covers everything from navigating the user interface to managing supplier data and executing payments.
        Ongoing support is also available to address any issues that arise post-implementation, ensuring that
        your operations remain smooth and efficient.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses looking to expand their use of Tipalti, Geek @ Your Spot offers guidance on scaling the
        platform to accommodate growing transaction volumes and additional subsidiaries. This includes
        configuring multi-entity management features and ensuring that all new entities are integrated
        seamlessly into your existing setup.</p>
      <p className="text-md text-white shadow-text pt-3">
        In conclusion, deploying Tipalti with Geek @ Your Spot&#39;s expertise ensures that your Automated
        Payment Execution is efficient, secure, and tailored to your business needs. By handling the technical
        complexities and providing ongoing support, Geek @ Your Spot helps small businesses leverage
        Tipalti&#39;s full potential to optimize their financial operations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-tipalti-in-your-business-environment">
                Deploying Tipalti in Your Business Environment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-tipalti-in-your-business-environment">
                Deploying Tipalti in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
