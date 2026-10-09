import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Approvalmax in a business environment involves several key steps that ensure a smooth
        transition from manual to automated approval workflows. Geek @ Your Spot, a consultancy specializing
        in&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>&nbsp;implementation
        for small businesses, plays a crucial role in this process, guiding clients through the setup and
        configuration of Approvalmax to fit their specific operational needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step in implementing Approvalmax is to integrate it with the existing accounting software
        used by the business, such as Xero, QuickBooks Online, or Oracle NetSuite. This integration is
        critical as it allows for seamless data flow between systems, ensuring that all financial
        information is up-to-date and accurately reflected across platforms. Geek @ Your Spot assists in
        this integration process, ensuring that all technical requirements are met and that the system is
        configured correctly from the outset.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once integrated, the next step involves configuring the approval workflows to align with the
        business&#39;s existing processes. Approvalmax offers a flexible, drag-and-drop interface that allows
        users to create customized workflows based on their unique approval chains and policies. This
        configuration includes setting up multi-step approvals, defining approval rules, and establishing
        routing logic to ensure that each request follows the correct path. Geek @ Your Spot provides
        expertise in mapping these workflows to match the business&#39;s operational structure, ensuring
        that the automated processes enhance rather than disrupt existing operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data structure and mapping decisions are also crucial during the implementation phase. Approvalmax
        requires a clear understanding of the business&#39;s data architecture to ensure that all financial
        documents are appropriately categorized and routed through the correct approval channels. Geek @
        Your Spot works closely with clients to map out these data structures, ensuring that the system is
        set up to handle all types of financial transactions efficiently.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the deployment process, Geek @ Your Spot provides training and support to ensure that all
        team members are comfortable using the new system. This includes training sessions on how to
        navigate the Approvalmax interface, configure workflows, and manage approvals. By equipping teams
        with the necessary skills and knowledge, Geek @ Your Spot ensures that businesses can fully leverage
        the capabilities of Approvalmax to streamline their approval processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Geek @ Your Spot offers ongoing support and maintenance to address any issues that may arise
        post-implementation. This support ensures that the system continues to operate smoothly and that any
        necessary adjustments can be made to optimize performance. By providing a comprehensive
        implementation service, Geek @ Your Spot enables businesses to confidently transition to automated
        approval workflows with Approvalmax, enhancing their operational efficiency and financial
        oversight.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-approvalmax-in-your-business-environment">
                Implementing Approvalmax in Your Business Environment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-approvalmax-in-your-business-environment">
                Implementing Approvalmax in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
