export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Gusto is built as a cloud platform with payroll, HR, and compliance tools all in one place. Its
        architecture is designed for small businesses that need to connect payroll with the rest of their
        financial and HR stack, without building custom integrations or hiring a full-time IT team. The system
        is structured to keep employee and contractor data separate, automate compliance, and make sure every
        piece of information flows to where it’s needed—inside Gusto and out to your other systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the core, Gusto maintains a secure, centralized database for all worker records. Each profile—whether
        W-2 employee or 1099 contractor—holds personal details, tax status, payment history, and all required
        forms. This separation is hardwired: the platform never merges employee and contractor records, so you
        always have a clean audit trail for both. All payroll, tax, and benefits data is stored electronically,
        meeting IRS and labor law retention requirements. Employees and contractors can access their own
        information, update personal details, and download tax documents through self-service portals.</p>
      <p className="text-md text-white shadow-text pt-3">
        Gusto’s automation engine runs every payroll calculation, tax filing, and compliance check. The platform
        updates tax tables, wage bases, and local rules automatically, so your business stays current with no
        manual intervention. If a new tax law takes effect—like an increase in the Social Security wage base or
        a change to Miami-Dade surtaxes—Gusto applies the update in the background. Every pay run uses the
        latest rates and rules, and every filing is matched to the correct agency, whether local, state, or
        federal.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integrations are a core part of Gusto’s architecture. The platform connects directly with QuickBooks and
        Xero, two of the most widely used accounting systems for small businesses. This means payroll data, wage
        expenses, and tax payments sync automatically to your general ledger. For businesses running retirement
        plans, Gusto integrates with leading 401(k) and benefits providers, so deductions and contributions flow
        through without manual entry. If your business uses the Ardius platform for R&amp;D tax credits, Gusto’s
        integration lets you automate those studies alongside payroll.</p>
      <p className="text-md text-white shadow-text pt-3">
        Gusto also supports time tracking, onboarding, performance reviews, and workers’ comp—all connected to
        payroll and compliance. Timecards feed directly into payroll calculations, and any changes—like a new
        hire or a pay rate adjustment—are reflected everywhere in the system. Bulk updates and automated
        workflows are built in, so HR teams can handle compensation changes or new hires without jumping between
        tools. For South Florida businesses with seasonal or multi-state teams, Gusto’s architecture makes it
        possible to run payroll and file taxes in multiple states at once, with no extra setup or fees.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security is built into every layer. Gusto uses strong passwords, multi-factor authentication, and
        proactive fraud alerts to protect sensitive payroll and tax information. The platform is cloud-based, so
        updates and bug fixes are applied automatically—no manual patches or downtime. Every user account, from
        the owner to the part-time bookkeeper, is managed with role-based access, so only the right people see
        the right data.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform holds all the records needed for tax filings, audits, and year-end reporting. This includes
        pay stubs, W-2s, 1099s, I-9s, new hire reports, and every payroll tax form filed. When tax season comes,
        Gusto generates and files all required documents, sends copies to employees and contractors, and keeps
        everything archived for as long as the law requires. If you need to check a past filing or respond to an
        audit, every document is a few clicks away.</p>
      <p className="text-md text-white shadow-text pt-3">
        For South Florida business owners, Gusto’s architecture means you don’t have to worry about the
        technical side of compliance. The platform is built to plug into what you already use, keep every record
        in order, and automate the flow of information from onboarding to tax filing. Whether your team grows,
        shrinks, or shifts across state lines, the system adapts—no custom coding, no manual data transfers, and
        no risk of losing track of who’s classified how. Everything is connected, current, and audit-ready by
        design.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="gusto-s-architecture-integrations-data-flows-and-what-the-platform-holds" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Gusto’s Architecture: Integrations, Data Flows, and What the Platform Holds
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
              <h2 id="gusto-s-architecture-integrations-data-flows-and-what-the-platform-holds" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Gusto’s Architecture: Integrations, Data Flows, and What the Platform Holds
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
