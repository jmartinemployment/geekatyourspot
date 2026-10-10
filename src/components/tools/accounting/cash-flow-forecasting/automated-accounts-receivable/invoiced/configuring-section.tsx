import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced offers a robust configuration system that allows businesses to tailor their accounts receivable
        processes to their specific needs. This flexibility is crucial for small businesses in Miami-Dade, Broward,
        and West Palm Beach counties, where efficiency and precision are key. With Invoiced, you can set up detailed
        approval chains to ensure that every invoice passes through the necessary checks before payment is
        processed. This reduces errors and ensures compliance with internal policies.</p>
      <p className="text-md text-white shadow-text pt-3">
        Routing in Invoiced is another configurable aspect that streamlines the workflow by directing invoices to
        the appropriate personnel based on predefined criteria. This means that invoices can be automatically routed
        to the right department or manager, saving time and reducing the bottleneck often experienced in manual
        processes. For small businesses, this capability translates into faster processing times and fewer delays in
        cash flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic in Invoiced allows businesses to automate repetitive tasks that would otherwise consume
        valuable time. For example, you can automate reminders for overdue invoices or set up automatic follow-ups
        for payments. This not only speeds up collections but also frees up staff to focus on more strategic tasks.
        Invoiced&#39;s automation capabilities are particularly beneficial for small businesses that may not have
        the manpower to handle these tasks manually.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced also provides an extension mechanism that supports further customization. While it does not offer
        an&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;or SDK, its configuration options are extensive
        enough to meet the needs of most small businesses. Geek @ Your Spot,
        an&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;implementation consultancy, plays a vital role in
        configuring these features to fit seamlessly into your existing systems. They ensure that Invoiced
        integrates smoothly with your current accounting software, such as QuickBooks or NetSuite, optimizing the
        platform for your specific business environment.</p>
      <p className="text-md text-white shadow-text pt-3">
        The consultancy&#39;s expertise in data mapping and system integration means that businesses can leverage
        Invoiced&#39;s full potential without the usual teething problems associated with new software. By handling
        the technical setup and providing ongoing support, Geek @ Your Spot ensures that your transition to
        automated accounts receivable is smooth and effective. This partnership allows businesses to focus on
        growth, knowing that their financial processes are in expert hands.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-invoiced-approval-chains-routing-and-automation-logic">
                Configuring Invoiced: Approval Chains, Routing, and Automation Logic
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-invoiced-approval-chains-routing-and-automation-logic">
                Configuring Invoiced: Approval Chains, Routing, and Automation Logic
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
