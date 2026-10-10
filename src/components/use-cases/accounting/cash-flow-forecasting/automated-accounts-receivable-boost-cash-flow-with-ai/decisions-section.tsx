import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DecisionsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing automated accounts receivable solutions requires making foundational decisions that shape the
        entire process. These decisions set the stage for how effectively the system can function and impact your
        business operations long-term. One of the first critical decisions involves selecting the appropriate
        software platform. The choice depends heavily on your existing infrastructure and the specific challenges
        your business faces. Opting for a tool like Chaserhq or Versapay, for instance, means prioritizing features
        like real-time payment tracking and integrated payment portals.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another early decision is the level of automation to integrate. While full automation might promise maximum
        efficiency, it may not suit every business model or team structure. Some organizations may choose to
        automate only specific aspects, such as payment reminders and invoice generation, while keeping more complex
        tasks under human oversight. This balance allows businesses to maintain control over critical areas while
        benefiting from automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data integration is another pivotal decision. Your automated accounts receivable system must seamlessly
        connect with existing financial and operational tools, such as QuickBooks or SAP. This integration ensures
        data consistency and accuracy across all financial reporting. Selecting tools like Invoiced or Upflow that
        offer robust&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;integrations can simplify this process,
        reducing the risk of data silos and errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Deciding on the metrics for success is equally crucial. Establish clear Key Performance Indicators (KPIs)
        such as Days Sales Outstanding (DSO) reduction, improved cash flow predictability, and decreased manual
        processing time. These KPIs provide measurable goals that help assess the effectiveness of the new system
        and guide further optimizations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, consider the human element. Automation can change roles within your finance team, shifting focus
        from manual invoice processing to strategic analysis. Early decisions about training and role adjustments
        are necessary to ensure team members can adapt to and thrive in the new environment.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="key-decisions-in-implementing-automated-accounts-receivable-solutions" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Key Decisions in Implementing Automated Accounts Receivable Solutions
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="key-decisions-in-implementing-automated-accounts-receivable-solutions" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Key Decisions in Implementing Automated Accounts Receivable Solutions
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
