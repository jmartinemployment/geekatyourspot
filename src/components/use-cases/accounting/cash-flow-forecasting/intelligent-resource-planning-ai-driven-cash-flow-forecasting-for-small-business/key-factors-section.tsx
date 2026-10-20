import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function KeyFactorsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        What separates a intelligent resource planning rollout that actually makes life easier from one that
        ends up as another abandoned system? It is not the software itself, most modern tools can connect data
        and automate reports. The difference is in how the work is approached, the sequence of decisions, and
        whether the system gets built to fit the business as it is, not as the vendor imagines it.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first sign of trouble is skipping the real business objective. Too many teams launch into
        implementation without naming what they want to fix. Is the pain point late collections, missed
        payables, or the fact that every cash forecast is days old? The best projects start with a clear,
        measurable goal. For a local construction firm, it might be cutting the cash conversion cycle by a week
        so they can take on more projects without borrowing. For a retailer, it could be knowing their cash
        runway through the summer slow season. The tools, Jirav for forecasting, Take the Helm for short-term
        cash mapping, Cashflowfrog for visual control, only matter if they answer that concrete goal.</p>
      <p className="text-md text-white shadow-text pt-3">
        After the goal comes
        the&nbsp;<GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data
        quality</GlossaryLink>&nbsp;check. This is where many implementations stall out. If the books are a
        mess, old spreadsheets, uncategorized bank feeds, or missing invoices, no tool will give a clear
        forecast. The right approach is to pause and clean up the data first. Take the Helm and QuickBooks both
        rely on accurate, consistent records; if the ledgers are off, the dashboards will be too. The best teams
        spend the time to validate, clean, and standardize data before switching on automation. That means
        checking for duplicate vendors, missing payments, or old open invoices. If this step is skipped, the
        business ends up with a flashy dashboard that cannot be trusted.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next major divider is tech selection and architecture. Some businesses try to bolt a new tool onto
        every old process and end up with more complexity, not less. The right move is to pick a platform that
        fits the existing stack, QuickBooks if the team knows it, Fathom for
        deep&nbsp;<GlossaryLink slug="kpi" className="text-[#0B162A] hover:underline">KPI</GlossaryLink>&nbsp;dashboards
        if they need to consolidate locations, or Cashflowfrog if visual, real-time cash tracking is the main
        pain. The focus needs to be on integration and user fit, not just features. An implementation that fits
        the current workflow gets adopted; one that demands a total process overhaul gets ignored.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pilot implementation is the last big test. Teams that succeed start small, often with a single location
        or department. They use sandboxed data, run smoke tests, and validate the system before rolling it out
        to everyone. If the bank feeds do not sync, or invoices are not mapping right, it is caught early. Teams
        that try to flip the switch for the whole business at once end up with chaos and a quick return to
        spreadsheets. Pilots let staff build confidence, spot gaps, and tune the automation before it is
        business-critical. QuickBooks and Jirav both support test environments for this reason.</p>
      <p className="text-md text-white shadow-text pt-3">
        A real-world example: picture the team from the opening, finally shifting from their legacy spreadsheet.
        The owner identifies the main headache, payroll cash flow, and sets the goal to always know the runway
        for the next 30 days. They clean up old ledgers, import into QuickBooks, and run a pilot with Take the
        Helm for invoice timing. Within weeks, they have a live dashboard. Staff trust the numbers because they
        match the bank. When a late-paying client threatens to throw payroll off, the system flags it days in
        advance, not hours before checks are due.</p>
      <p className="text-md text-white shadow-text pt-3">
        The last secret is buy-in. The best systems are built with the frontline staff, not handed down from
        above. If the person who used to close the books or chase invoices is part of the setup, they spot where
        the process will break. They help tune the dashboards, reminders, and rules so the tool works the way
        the team works. When that happens, adoption is natural, and manual work drops away.</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Start with a measurable business goal, what are you trying to fix?</li>
        <li>Clean and validate the existing data before automating anything.</li>
        <li>Pick tech that fits the current workflow and existing tools.</li>
        <li>Run a pilot in a safe environment, catch issues early, and let staff get comfortable.</li>
        <li>Build with the team who will use it every day, not just the owner or IT lead.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        Implementations that stall usually skip one of these steps. They go live with messy data, force a new
        process on unwilling staff, or chase features that do not solve the main pain. The result is a dashboard
        that looks good but gets ignored, and a business still stuck in spreadsheet chaos. The ones that work
        are the ones that fit, that earn buy-in, and that build trust with every number.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-some-implementations-succeed-while-others-stall-the-real-difference" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Some Implementations Succeed While Others Stall: The Real Difference
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-some-implementations-succeed-while-others-stall-the-real-difference-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Some Implementations Succeed While Others Stall: The Real Difference
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
