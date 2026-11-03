export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Justworks is more than a payroll calculator. Its architecture is built to support real compliance at
        scale for small businesses with shifting teams, complex pay structures, and distributed workforces. The
        system is cloud-based, with a single platform that brings together payroll, HR, benefits, compliance,
        and document management. Every component is designed to reduce manual work and keep all records in sync.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the core is a data model that tracks every worker, whether employee or contractor, across multiple dimensions:
        legal status, pay structure, work location, benefits eligibility, and historical changes. This is not
        just a contact list. The system holds all the data needed for payroll, tax filings, benefits
        administration, and compliance reporting. When a business updates an address, changes a pay rate, or
        shifts a worker from contractor to employee, Justworks updates every downstream process and recalculates
        tax and compliance obligations for that pay period and beyond.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integrations are a key part of the platform’s value. Justworks connects directly to accounting tools
        like QuickBooks, Xero, NetSuite, and Sage Intacct. This means payroll data, tax filings, and benefits
        costs flow automatically into the business’s general ledger, so there is no more exporting spreadsheets or
        reconciling numbers by hand. The integration is bidirectional: when a timecard or pay rate is updated in
        the accounting software, Justworks pulls it in for payroll processing. When payroll runs, the results
        are pushed back to the accounting platform for accurate financial reporting.</p>
      <p className="text-base text-white shadow-text pt-3">
        Document management is built in. The platform provides a secure document center where HR forms,
        contracts, tax records, and compliance documents are stored and organized. E-signature support,
        signature tracking, and automatic reminders make it easy to keep paperwork on track, so there is no more chasing down
        missing forms. At year-end, bulk uploads and downloads speed up reporting and audit prep. All documents
        are linked to the relevant worker profile and payroll cycle, so nothing falls through the cracks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Justworks also includes automation for compliance monitoring. The system tracks federal, state, and
        local employment law changes and updates its own rules in the background. Automated reminders prompt the
        business when new filings are due or when a compliance risk is detected, such as a worker’s
        classification not matching their actual work or a missed state registration. The platform’s compliance
        engine is not static; it adapts as laws change, so businesses do not have to keep up with every update
        themselves.</p>
      <p className="text-base text-white shadow-text pt-3">
        The architecture supports multi-state and international operations. Justworks manages relationships with
        thousands of tax authorities and can handle payroll, tax filings, and benefits in all 50 states and in
        multiple countries. For businesses hiring internationally, the platform supports Employer of Record
        (EOR) arrangements, taking on the legal and administrative responsibility of employing workers abroad.
        This means a Miami-based business can hire a contractor in London or a remote employee in California,
        and the system will handle the right tax, benefits, and compliance rules for each.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and auditability are built in. Every action (onboarding a worker, running payroll, filing a tax
        return, updating a classification) is logged and traceable. If a business faces an audit or needs to
        respond to a compliance inquiry, Justworks provides a complete record of every step. The platform’s
        structure ensures that data is consistent and up to date everywhere it matters, reducing the risk of
        mismatched records or missing filings.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform is designed for scale, but tuned for small businesses. There are no minimum headcounts or
        enterprise-only features locked away. A business with five employees and a rotating cast of contractors
        gets the same compliance engine and automation as a larger firm. Every feature (multi-state payroll,
        automated tax filings, benefits administration, HR document management, accounting integration) is
        delivered through a single login and a unified interface.</p>
      <p className="text-base text-white shadow-text pt-3">
        For the owner in South Florida who needs to move fast, Justworks’ architecture means they can add a new
        worker, update a pay rate, or expand to a new state without bringing in a consultant or learning a new
        system. Everything is connected behind the scenes, so the business runs without manual bottlenecks or
        compliance gaps. The platform is not just a tool. It is an infrastructure that holds all the moving parts
        of payroll tax and worker classification together, so the business can focus on growth instead of
        paperwork.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-sits-under-the-hood-justworks-architecture-integrations-and-data-handling" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sits Under the Hood: Justworks’ Architecture, Integrations, and Data Handling
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
              <h2 id="what-sits-under-the-hood-justworks-architecture-integrations-and-data-handling-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sits Under the Hood: Justworks’ Architecture, Integrations, and Data Handling
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
