import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Helmhq offers a robust framework for configuring approval chains, routing, and automation logic tailored to
        your business needs. The platform enables small businesses in Miami-Dade, Broward, and West Palm Beach to
        automate spreadsheet data processes, eliminating manual errors and saving time. By setting up approval
        chains, businesses can ensure that each transaction is reviewed by the right person, reducing bottlenecks
        and speeding up decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval chains in Helmhq can be customized to fit the specific hierarchy and workflow of your organization.
        This means you can define who approves what and in which order, ensuring that all necessary checks are in
        place before a decision is finalized. This setup helps prevent unauthorized transactions and enhances
        compliance with internal policies. For instance, a purchase request might first go to a department head for
        approval, then to finance for budget confirmation, and finally to the executive team for final sign-off.</p>
      <p className="text-md text-white shadow-text pt-3">
        Routing in Helmhq is designed to streamline the flow of information and tasks across your team. By
        automating the routing of documents and data, Helmhq ensures that the right information reaches the right
        person at the right time. This reduces the time spent on manual follow-ups and minimizes the risk of
        information slipping through the cracks. The platform allows for conditional routing based on predefined
        criteria, such as the amount of a transaction or the department involved, ensuring that each task is handled
        by the most appropriate team member.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic within Helmhq enables businesses to set rules that trigger specific actions based on
        certain conditions. This could include sending reminders for pending approvals, flagging transactions that
        exceed a certain threshold, or automatically updating records in integrated systems. The automation
        capabilities of Helmhq are designed to reduce the administrative burden on teams, allowing them to focus on
        more strategic tasks. By automating routine processes, businesses can increase efficiency and reduce the
        likelihood of human error.</p>
      <p className="text-md text-white shadow-text pt-3">
        While Helmhq does not offer a full-fledged&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;or
        scripting capabilities, its configuration options are comprehensive enough to meet the needs of most small
        businesses. The platform&#39;s user-friendly interface allows for easy setup and modification of workflows
        without the need for extensive technical knowledge. This makes it an ideal solution for businesses looking
        to streamline operations without investing heavily in IT resources.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot plays a crucial role in configuring Helmhq to fit the unique requirements of your business.
        As a local consultancy, they understand the specific challenges faced by businesses in the region and can
        tailor the platform&#39;s settings to address these issues effectively. Their expertise in data mapping and
        integration ensures that Helmhq works seamlessly with your existing systems, maximizing the benefits of
        automation and freeing up your team to focus on growth and innovation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-helmhq-approval-chains-routing-and-automation-logic">
                Configuring Helmhq: Approval Chains, Routing, and Automation Logic
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-helmhq-approval-chains-routing-and-automation-logic">
                Configuring Helmhq: Approval Chains, Routing, and Automation Logic
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
