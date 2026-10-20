
export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Smith.ai is built to fit into real businesses that do not have weeks to spare on setup or the patience
        for tools that break what already works. Going live with Smith.ai is a process focused on speed, minimal
        disruption, and making sure every integration works as expected from the start. For a small business in
        South Florida, that means the difference between another week of missed calls and a front desk that
        never drops a lead again.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first thing that shortens go-live is Smith.ai’s extensive library of pre-built connectors. Smith.ai
        natively integrates with over 7,000 business systems, CRMs, scheduling apps, field service management
        tools, and project management platforms. This means most businesses do not need custom development or
        long IT projects to get call data flowing directly into the tools they already use. For example, if you
        already run Salesforce, QuickBooks, or a field service app, Smith.ai can plug in and start syncing lead
        data, appointment bookings, and call records without a manual export or import step.</p>
      <p className="text-md text-white shadow-text pt-3">
        The second time-saver is Smith.ai’s templated setup for call flows and intake. Rather than starting from
        a blank slate, Smith.ai offers industry-specific templates, built from over a decade of operational
        learning and millions of calls, that cover the most common scenarios for contractors, legal firms, and
        service businesses. These templates structure the intake, qualification, and escalation logic so you do
        not have to invent every rule yourself. For a plumber or HVAC team, that means urgent jobs like gas
        leaks or flooding are triaged and routed instantly, while routine calls follow standard scheduling. For
        a law office, the system can screen for case type, jurisdiction, and conflict checks out of the box.</p>
      <p className="text-md text-white shadow-text pt-3">
        The order of deployment is deliberate: first, Geek @ Your Spot LLC maps your existing environment, phone
        system,&nbsp;CRM, scheduling tools, and any intake forms already
        in use. This up-front mapping ensures that Smith.ai connects directly to your current numbers, so you do
        not lose business continuity or force clients to learn a new process. The team checks whether call
        forwarding or number porting is needed, avoiding surprises that can delay launch.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next comes configuration of call flows. Geek @ Your Spot LLC works with your staff to define the triggers,
        escalation paths, and intake logic that matter for your business. This is not just a technical step; it
        is about translating how your team already handles urgent versus routine calls, what information you
        need to qualify a job, and when a caller should be routed to a real person. Smith.ai’s hybrid model
        means that when the AI reaches a scenario it cannot handle, an upset homeowner, a high-value legal
        intake, or a complex project with multiple stakeholders, the call escalates instantly to a live, North
        America-based receptionist, with all context preserved. The caller never has to repeat themselves, and
        your staff does not waste time on routine screening.</p>
      <p className="text-md text-white shadow-text pt-3">
        Testing is fast. Smith.ai’s Quality Studio lets you simulate real call scenarios before going live, so
        you can see how the system handles the full range of inquiries your business receives. This catches gaps
        in intake scripts or escalation rules before a real customer ever hits a snag. For most small
        businesses, this means the system is ready in days, not weeks. Smith.ai’s setup process is measured in
        hours and a handful of test calls, not in long project plans.</p>
      <p className="text-md text-white shadow-text pt-3">
        When launch day comes, Smith.ai goes live behind the scenes. There is no need to shut down your phones
        or retrain your whole team. Calls route through Smith.ai, data syncs automatically to
        your&nbsp;CRM, and your staff can focus on work instead of
        fielding every ring. If you need to adjust a script or escalation rule, Smith.ai’s system can be updated
        without downtime, so your intake process evolves as your business does.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that want to roll out in phases, Smith.ai supports a gradual go-live. You can start by
        routing only after-hours or overflow calls to Smith.ai, then expand to full coverage once you are
        confident the system is tuned to your standards. This phased approach is especially useful for teams
        wary of big-bang changes or for those with complex intake requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        What makes this process work is the combination of Smith.ai’s technical foundation and Geek @ Your Spot LLC’s local, consultative approach. The consultancy handles the mapping, configuration, and
        integration, so your team does not have to become experts in the tool. The result: a front desk that
        never misses a call, a&nbsp;CRM&nbsp;that is always up to date,
        and a business that can scale its lead capture without adding more staff.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-get-smith-ai-up-and-running-in-your-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Get Smith.ai Up and Running in Your Business
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
              <h2 id="what-it-takes-to-get-smith-ai-up-and-running-in-your-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Get Smith.ai Up and Running in Your Business
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
