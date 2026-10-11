import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Clockwork offers a configuration process that tailors its capabilities to fit the specific needs of your
        business. This involves setting up approval chains, routing financial data efficiently, and creating
        automation logic that streamlines operations. These configurations are key to maximizing Clockwork&#39;s
        potential and ensuring it functions seamlessly within your existing systems. Geek @ Your Spot, with its
        expertise in&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;implementation, ensures that these
        configurations are optimized for your environment, saving you time and reducing errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the first steps in configuring Clockwork is setting up approval chains. This means defining who needs
        to approve certain financial transactions and in what order. For instance, you might have a chain where a
        department head approves expenses before they go to the CFO. Clockwork allows you to automate this process,
        ensuring that approvals happen quickly and without the need for manual intervention. This reduces
        bottlenecks and speeds up decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        Routing is another critical aspect of configuration. Clockwork integrates with platforms like QuickBooks and
        Xero, enabling it to pull live data and keep your financials current. By routing this data through
        Clockwork, you ensure that all financial information is up-to-date and accurate. This integration eliminates
        the need for manual data entry, reducing the risk of errors that can occur when updating spreadsheets by
        hand.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic in Clockwork is designed to handle repetitive tasks that would otherwise consume valuable
        time. For example, Clockwork can automate the generation of cash flow forecasts and financial reports. This
        automation is not just about reducing workload; it also increases accuracy by minimizing human error. Geek @
        Your Spot configures these automation processes to align with your business&#39;s unique needs, ensuring
        that the right data is processed at the right time.</p>
      <p className="text-md text-white shadow-text pt-3">
        While Clockwork does not have an extension mechanism like APIs or SDKs, its powerful configuration options
        allow for significant customization within its framework. This means that while you cannot extend Clockwork
        with external scripts, its built-in capabilities are robust enough to handle a wide range of financial
        tasks. Geek @ Your Spot&#39;s role is to ensure that these configurations are set up correctly, allowing
        your team to focus on strategic decision-making rather than manual data handling.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-clockwork-approval-chains-routing-and-automation-logic">
                Configuring Clockwork: Approval Chains, Routing, and Automation Logic
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-clockwork-approval-chains-routing-and-automation-logic">
                Configuring Clockwork: Approval Chains, Routing, and Automation Logic
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
