export default function ConditionalWorkflowsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The tools above share one design principle that answers black box anxiety directly. They do not ask
        you to trust every decision a machine makes. They let you write the rules that decide when a person
        must look. We call these <strong>intelligent conditional workflows</strong>. The system handles
        routine items on its own and asks for human verification only when a condition you set is met.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        A Tiered Approval Gate in Practice
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        Here is how a typical approval gate works for a South Florida distributor. The amounts below are
        examples, and yours are set during the first phase of our methodology.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Bills under <strong>$2,500</strong> from an approved vendor that match a purchase order go straight to payment scheduling.</li>
        <li>Bills between <strong>$2,500 and $10,000</strong> go to the operations manager for approval.</li>
        <li>Bills over <strong>$10,000</strong> go to the owner, and the payment cannot be released without that approval.</li>
        <li>Any bill from a <strong>new vendor</strong> goes to the owner, whatever the amount.</li>
        <li>Any change to a vendor’s <strong>bank details</strong> freezes payments to that vendor until someone confirms the change by phone.</li>
        <li>Any bill that does not match its purchase order or receiving record is held for review.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Every step is logged with a name and a time. The owner sees the handful of decisions that need
        judgment and none of the hundreds that do not. <strong>ApprovalMax</strong>, <strong>Bill</strong>, <strong>Ramp</strong>,
        and <strong>QuickBooks Online Advanced</strong> can all enforce rules like these, and we configure
        them from the rulebook you approve.</p>
      <p className="text-base text-white shadow-text pt-3">
        Thresholds also make approval meaningful again. When every bill needs the owner, the owner stops
        reading them, and approval turns into a habit of clicking yes. When only the unusual bills reach the
        owner, each one gets real attention. Fewer approvals produce better control, not weaker control.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Conditions Beyond Payables
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        The same idea works across the rest of your finances. A forecasting tool can alert you when projected
        cash falls below a floor you choose. A sales tax tool can warn you as sales into another state
        approach its nexus threshold. A payroll system can flag a contractor who is paid on a regular schedule
        like an employee, so that someone reviews the classification. In each case the software watches every
        transaction, and a person makes the call that matters.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="intelligent-conditional-workflows-keep-a-person-in-control" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Intelligent Conditional Workflows Keep a Person in Control
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="intelligent-conditional-workflows-keep-a-person-in-control-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Intelligent Conditional Workflows Keep a Person in Control
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
