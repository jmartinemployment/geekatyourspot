import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementationSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Bill in your business environment involves a few key steps that Geek @ Your Spot can guide
        you through. The first step is understanding your current financial systems and how Bill can
        integrate with them. Bill offers pre-built connectors for popular accounting software like QuickBooks
        and Xero, which can significantly shorten the go-live time. These connectors ensure that data flows
        seamlessly between systems, reducing the need for manual entry and minimizing errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data mapping is a critical aspect of implementing Bill. Geek @ Your Spot will work with you to ensure
        that all necessary data fields are correctly mapped between your existing systems and Bill. This
        process involves identifying key data points, such as vendor details and payment terms, and ensuring
        they align with Bill&#39;s system requirements. Proper data mapping is essential for accurate and
        efficient payment processing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Configuring approval chains and routing is another important step in the implementation process.
        Bill allows for tailored approval workflows, which can be customized to fit your business&#39;s
        specific needs. This includes setting up rules for who can approve payments, under what conditions,
        and how approvals are escalated if delays occur. These workflows help maintain control over payment
        processes and ensure that all transactions are properly authorized.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic is also configured during the implementation phase. Geek @ Your Spot will help you
        set up automated reminders and notifications to ensure that all stakeholders are informed of pending
        approvals and payment deadlines. This automation reduces the risk of missed payments and helps keep
        your accounts payable process on track.</p>
      <p className="text-md text-white shadow-text pt-3">
        While Bill does not require extensive programming for customization, it offers an&nbsp;
        <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;for
        businesses that need to extend its capabilities. This API allows for additional integrations and
        custom solutions, providing flexibility for businesses with unique requirements. Geek @ Your Spot can
        assist with API integration if needed, ensuring that Bill fits seamlessly into your existing tech
        stack.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, training and support are crucial components of a successful implementation. Geek @ Your Spot
        provides comprehensive training to ensure that your team is comfortable using Bill and can take full
        advantage of its features. Ongoing support is also available to address any issues that arise and to
        help optimize your use of the platform over time.</p>
      <p className="text-md text-white shadow-text pt-3">
        In conclusion, deploying Bill in your business environment is a collaborative process that involves
        careful planning and configuration. With the support of Geek @ Your Spot, you can ensure a smooth
        transition to automated payment execution, allowing your business to benefit from increased
        efficiency and reduced errors.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-bill-in-your-business-environment">
                Implementing Bill in Your Business Environment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-bill-in-your-business-environment">
                Implementing Bill in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
