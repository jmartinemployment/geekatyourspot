import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DeployingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Bill in your existing business environment involves several key steps that ensure a smooth
        transition from manual to automated processes. Geek @ Your Spot, a consultancy specializing in&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>&nbsp;implementation,
        plays a crucial role in this deployment, providing the expertise needed to tailor Bill to your specific
        needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the first steps in deploying Bill is setting up integrations with your current accounting
        software. Bill offers pre-built connectors for platforms like QuickBooks and Xero, which significantly
        shortens the go-live time. These connectors ensure that your financial data flows seamlessly between
        systems, maintaining accuracy and consistency across all financial operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data mapping is another critical component of the deployment process. Geek @ Your Spot will work with
        your team to map your existing data structures to Bill&#39;s system, ensuring that all financial
        information is accurately represented. This step is essential for maintaining data integrity and
        avoiding any disruptions during the transition period. Proper data mapping also facilitates the
        automation of workflows, as it allows Bill to accurately categorize and process transactions based on
        your business&#39;s unique requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        Configuring approval chains and automation logic is where Bill truly shines. With its customizable
        workflows, Bill allows you to set up specific rules for routing invoices and approvals. Geek @ Your Spot
        will assist in configuring these workflows to match your company’s policies, ensuring that every
        transaction is processed efficiently and securely. This level of customization means that your business
        can maintain its existing approval processes while benefiting from the speed and accuracy of
        automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses concerned about the complexity of deployment, Geek @ Your Spot offers phased rollouts to
        minimize disruption. This approach allows your team to gradually adapt to the new system, providing
        training and support at each stage. By rolling out features in phases, your business can start reaping
        the benefits of automation without the overwhelming task of a full-scale implementation all at
        once.</p>
      <p className="text-md text-white shadow-text pt-3">
        While Bill does not currently offer an&nbsp;
        <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;or SDK for
        further customization, its comprehensive feature set and configurable workflows provide ample
        flexibility for most small business needs. The platform&#39;s design emphasizes ease of use and minimal
        setup time, allowing your business to quickly transition to a more efficient&nbsp;
        <GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts payable</GlossaryLink>&nbsp;process.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-bill-in-your-business-environment">
                Deploying Bill in Your Business Environment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-bill-in-your-business-environment">
                Deploying Bill in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
