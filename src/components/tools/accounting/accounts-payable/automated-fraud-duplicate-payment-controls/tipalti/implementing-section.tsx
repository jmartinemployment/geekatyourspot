import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Tipalti in a small business environment involves several key steps that ensure a seamless
        transition to automated&nbsp;
        <GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts payable</GlossaryLink>
        &nbsp;processes. Geek @ Your Spot, located in West Palm Beach, Broward, and Miami-Dade counties,
        specializes in configuring Tipalti to meet the unique needs of each client, focusing on Automated Fraud
        &amp; Duplicate Payment Controls.</p>
      <p className="text-md text-white shadow-text pt-3">
        The implementation process begins with data mapping and structure decisions. Tipalti requires an
        initial setup where existing financial data is organized in a way that aligns with the platform&#39;s
        capabilities. This step is crucial for ensuring that the system can effectively automate invoice
        processing and fraud detection. Geek @ Your Spot assists clients in structuring their data to maximize
        the benefits of Tipalti&#39;s&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>-driven tools.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, Geek @ Your Spot configures the approval chains and routing logic within Tipalti. This involves
        setting up automated workflows that match the client&#39;s operational needs. For instance, invoices
        can be automatically routed to the appropriate approvers based on predefined criteria, such as
        department or invoice amount. This automation reduces the manual workload and speeds up the approval
        process, which is essential for maintaining efficient Automated Fraud &amp; Duplicate Payment
        Controls.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration with existing systems is another critical aspect of deploying Tipalti. The platform is
        designed to sync with various&nbsp;
        <GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;and
        accounting systems, ensuring that financial records are updated in real time. Geek @ Your Spot
        facilitates these integrations, allowing for a seamless flow of information between Tipalti and the
        client&#39;s existing software. This integration is vital for maintaining accurate financial data and
        supporting comprehensive fraud detection.</p>
      <p className="text-md text-white shadow-text pt-3">
        Training and support are integral to the successful deployment of Tipalti. Geek @ Your Spot provides
        thorough training sessions for finance teams, ensuring they understand how to use the platform&#39;s
        features effectively. This training covers everything from basic navigation to advanced fraud detection
        and compliance features. Ongoing support is also available to address any issues that arise
        post-implementation, ensuring that the system continues to operate smoothly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Geek @ Your Spot offers a phased rollout strategy for implementing Tipalti. This approach
        allows businesses to gradually integrate the platform into their operations, minimizing disruption and
        allowing for adjustments as needed. By starting with critical processes and gradually expanding to full
        implementation, businesses can ensure that their transition to automated accounts payable is smooth and
        successful.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-tipalti-in-your-business-environment">
                Implementing Tipalti in Your Business Environment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-tipalti-in-your-business-environment">
                Implementing Tipalti in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
