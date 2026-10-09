import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Melio in a business environment involves several key steps that ensure a smooth transition
        to automated approval workflows. Geek @ Your Spot, an&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>&nbsp;implementation
        consultancy, plays a critical role in this process by tailoring Melio to fit the unique needs of each
        client. This involves configuring approval chains, setting up data mapping, and ensuring integration
        with existing systems like QuickBooks Online.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the first steps in implementing Melio is the configuration of approval workflows. Businesses
        can set up multi-level approvals based on team members, roles, payment amounts, and vendors. This
        customization ensures that the approval process aligns with the company&#39;s specific requirements
        and reduces bottlenecks in the workflow. For example, payments above a certain threshold may require
        additional sign-offs, while smaller, routine payments can be processed automatically.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data mapping is another crucial aspect of deploying Melio. Geek @ Your Spot helps clients map their
        existing data structures to Melio’s platform, ensuring a seamless transition. This step is essential
        for maintaining data integrity and ensuring that all financial information is accurately captured and
        processed. By aligning data structures, businesses can avoid discrepancies and ensure that their&nbsp;
        <GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts payable</GlossaryLink>&nbsp;processes
        run smoothly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration with existing systems is also a vital part of the deployment process. Melio&#39;s
        compatibility with platforms like QuickBooks Online means that businesses can easily sync their
        financial data, reducing the need for manual data entry and minimizing the risk of errors. This
        integration allows for real-time updates and ensures that all financial transactions are accurately
        recorded and tracked.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot also provides training and support to ensure that businesses can fully leverage
        Melio&#39;s capabilities. This includes educating staff on how to use the platform effectively and
        setting up automated tasks that streamline operations. By providing comprehensive support, Geek @ Your
        Spot ensures that businesses can quickly adapt to the new system and start reaping the benefits of
        automated approval workflows.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Melio&#39;s platform is designed to scale with the business. As companies grow, the platform
        can handle increased volumes of invoices without requiring additional headcount. This scalability is a
        significant advantage for small businesses looking to expand without incurring extra operational
        costs. By automating the accounts payable process, businesses can focus on growth and strategic
        initiatives rather than being bogged down by administrative tasks.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-melio-in-your-business-environment">
                Implementing Melio in Your Business Environment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-melio-in-your-business-environment">
                Implementing Melio in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
