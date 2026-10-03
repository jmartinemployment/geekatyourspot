import Link from "next/link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Automating approval workflows in accounts payable can be a game-changer for many small and
        medium-sized businesses. It streamlines processes, reduces errors, and saves time. However, it&#39;s
        not always the right solution for every situation. Understanding when to implement such technology is
        crucial.</p>
      <p className="text-md text-white shadow-text pt-3">
        Consider implementing automated approval workflows if your team is regularly overwhelmed by the
        volume of invoices and faces frequent delays in approvals. If errors due to manual data entry are
        common, or if there&#39;s a lack of visibility into the approval status of invoices, automation could
        provide significant benefits.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tools like&nbsp;
        <Link id="use-cases-accounting-automated-approval-workflows-evaluating-bill"
          href="/tools/accounting/accounts-payable/bill" className="text-[#C83803] hover:underline">
          Bill
        </Link>&nbsp;and&nbsp;
        <Link id="use-cases-accounting-automated-approval-workflows-evaluating-ramp"
          href="/tools/accounting/accounts-payable/ramp" className="text-[#C83803] hover:underline">
          Ramp
        </Link>&nbsp;offer robust automated workflows that can handle routing, reminders, and even mobile
        approvals. Bill automates multi-line item coding, reducing manual time significantly, while Ramp
        provides real-time tracking and compliance checks through its advanced approval workflows.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the other hand, if your business processes a low volume of invoices monthly, and if manual
        approvals do not significantly impact your operations, the investment in automation might not justify
        the return. The key is to weigh the potential gains against the costs and disruption of
        implementation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once you decide to move forward with automation, expect a period of adjustment. Your team will need
        to adapt to new systems, and there may be an initial learning curve. However, with the right support
        and training, this transition can be smooth and beneficial in the long run.</p>
      <p className="text-md text-white shadow-text pt-3">
        Before you begin, assess your current pain points: How many invoices require approval each month?
        Where do they enter your business? Who approves them, and what happens if they&#39;re unavailable?
        These questions will guide you in identifying the areas where automation can be most effective.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you&#39;re ready to explore automation further, consider booking a consultation to discuss your
        specific needs. This will provide a clearer picture of how automated approval workflows can transform
        your accounts payable process and what steps to take next.&nbsp;
        <Link id="use-cases-accounting-automated-approval-workflows-evaluating-consultation"
          href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
          Book now
        </Link>&nbsp;to get started.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="evaluating-the-decision-to-automate-approval-workflows" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Evaluating the Decision to Automate Approval Workflows
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
              <h2 id="evaluating-the-decision-to-automate-approval-workflows" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Evaluating the Decision to Automate Approval Workflows
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
