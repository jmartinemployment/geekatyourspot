export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rippling’s architecture is designed to unify HR, payroll, IT, and finance data in one system, so
        compliance and classification rules are enforced everywhere—not just in payroll. The platform is built
        around a single database that holds every worker’s profile, contract, pay schedule, tax status, and
        compliance documents. This central record means updates flow instantly across modules, and the risk of
        data getting out of sync between HR, payroll, and accounting tools is minimized.</p>
      <p className="text-md text-white shadow-text pt-3">
        At its core, Rippling connects to the tools small businesses in South Florida already use. The platform
        offers direct integrations with QuickBooks, Xero, and NetSuite, syncing payroll and contractor payment
        data with your accounting software. These integrations are not just one-way exports; they allow for
        real-time, bidirectional data flow. When a contractor is paid, the invoice and payment details are
        pushed into your books automatically, so there’s no manual reconciliation or risk of double entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rippling’s system manages both W-2 employees and 1099 contractors in the same platform, but keeps their
        data, contracts, and compliance rules separate under the hood. For each worker, the platform stores:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>A full classification history, including quiz results, contract versions, and any status changes</li>
        <li>All tax account registrations and filing records, mapped to the worker’s current and past locations</li>
        <li>Every pay run, invoice, and payment approval tied to the worker’s role and contract</li>
        <li>Audit logs for every compliance alert, admin action, and workflow change</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        This architecture lets Rippling enforce real-time compliance. For example, if a worker moves
        from Broward to Georgia, the platform updates tax withholdings, files new
        registrations, and stores the documentation in the worker’s record. If a contractor is reclassified as
        an employee, the system updates their profile, generates a new contract, and syncs the change with
        payroll, benefits, and IT access—all without manual intervention.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rippling’s Compliance 360 module sits on top of this unified data model. It continuously monitors every
        worker and transaction for risks—like overtime, minimum wage violations, or misclassification based on
        work patterns. When a risk is detected, the system doesn’t just alert the admin; it can execute
        remediation steps directly. For example, it can update a contract, reassign a worker’s status, or adjust
        pay schedules in one workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s automation engine powers these workflows. Admins can set custom rules—such as requiring
        legal review for contracts above a certain pay rate, or triggering additional tax filings for
        out-of-state workers. These rules are enforced everywhere in the system, not just in payroll, so
        compliance is consistent whether you’re onboarding a new hire, paying a contractor, or updating a
        worker’s location.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rippling is also built for real-world change. If your business grows from five to fifty workers, or
        expands into new counties, the system scales without a major reimplementation. Integrations with
        accounting and IT tools are managed centrally, so adding a new module or syncing with a different
        payroll provider does not require rebuilding your data or retraining your team.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the Miami construction firm, this means that when a project ramps up and new workers are onboarded,
        everything from contracts to tax setups to IT access is handled inside Rippling. If a worker moves to a
        different county or switches from contractor to employee, the architecture ensures every system is
        updated in real time, and the audit trail is preserved for compliance defense.</p>
      <p className="text-md text-white shadow-text pt-3">
        This architecture is what enables Rippling to deliver on its promise: a single source of truth for all
        workforce data, seamless integration with the tools you already use, and compliance that adapts as your
        business changes. For small businesses in South Florida, it means fewer surprises, less manual work, and
        a clear record if the auditors ever come calling.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-powers-rippling-architecture-integrations-and-data-control-behind-the-scenes" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers Rippling: Architecture, Integrations, and Data Control Behind the Scenes
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
              <h2 id="what-powers-rippling-architecture-integrations-and-data-control-behind-the-scenes" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers Rippling: Architecture, Integrations, and Data Control Behind the Scenes
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
