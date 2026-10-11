import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Floatapp offers a robust framework for configuring approval chains, routing, and automation logic, tailored
        to the specific needs of small businesses. When setting up Floatapp, Geek @ Your Spot focuses on aligning
        these configurations with your existing workflows to ensure seamless integration and optimal performance.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval chains in Floatapp are designed to streamline decision-making processes. By setting up automated
        workflows, businesses can ensure that approvals are routed to the right individuals based on predefined
        rules. This reduces bottlenecks and accelerates the approval process, allowing for quicker financial
        decisions. Geek @ Your Spot assists in mapping out these chains, ensuring that each step aligns with your
        organizational structure and decision-making hierarchy.</p>
      <p className="text-md text-white shadow-text pt-3">
        Routing in Floatapp is another critical component that directs tasks and notifications to the appropriate
        team members. This feature is essential for maintaining efficiency and accountability in financial
        operations. By configuring routing paths, Geek @ Your Spot helps businesses ensure that tasks are assigned
        correctly, reducing the risk of delays and errors. This setup is particularly beneficial for businesses with
        multiple departments or complex financial structures.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic in Floatapp is where the real power of the platform comes into play. This feature allows
        businesses to automate repetitive tasks, such as data entry and report generation, freeing up valuable time
        for more strategic activities. Geek @ Your Spot configures these automations to match your business
        processes, ensuring that they operate smoothly within your existing systems. The result is a more efficient
        workflow that reduces manual intervention and minimizes errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Floatapp does not currently offer an extension mechanism like
        an&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;or SDK for custom development. However, its
        configurable nature allows for significant customization within the platform&#39;s existing framework. Geek
        @ Your Spot leverages this flexibility to tailor Floatapp&#39;s features to your specific needs, ensuring
        that the tool works seamlessly with your current systems and processes.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-floatapp-approval-chains-routing-and-automation-logic">
                Configuring Floatapp: Approval Chains, Routing, and Automation Logic
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-floatapp-approval-chains-routing-and-automation-logic">
                Configuring Floatapp: Approval Chains, Routing, and Automation Logic
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
