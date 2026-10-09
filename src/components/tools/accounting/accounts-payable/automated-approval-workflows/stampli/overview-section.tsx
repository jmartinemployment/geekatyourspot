import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In a bustling office in West Palm Beach, the&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;team faces a familiar
        sight: stacks of paper invoices waiting to be processed. Each piece of paper represents a potential
        bottleneck in the workflow, where manual data entry can lead to errors, delays, and frustration. This
        chaotic scene is a daily reality for many small businesses still relying on traditional methods to
        manage their financial processes. The old way of handling purchase orders and approvals in separate
        systems creates visibility gaps, making it difficult to track spending against budgets and causing
        unnecessary delays in payments. These inefficiencies not only waste time but also increase the risk of
        compliance issues and financial discrepancies.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated approval workflows offer a solution to this chaos by streamlining processes with predefined
        routing that automatically directs documents to the right reviewers based on business rules and
        spending authority. This approach not only reduces errors but also ensures that all necessary
        approvals are documented, creating a single source of truth that is accessible and auditable. By
        eliminating the need for manual routing and allowing for real-time tracking, businesses can
        significantly improve their operational efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in West Palm Beach, Broward, and Miami-Dade counties, implementing automated
        approval workflows can transform the accounts payable process into a seamless operation. With
        automation, invoices are routed to the correct approvers with all relevant information attached,
        ensuring that nothing falls through the cracks. This not only speeds up the approval process but also
        reduces the administrative burden on staff, allowing them to focus on more strategic tasks that drive
        business growth. By embracing this technology, companies can move beyond the limitations of manual
        processes and position themselves for success in a competitive market.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
