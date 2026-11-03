
export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Getting QuickBooks up and running for intelligent resource planning is not the same as deploying a
        monolithic&nbsp;ERP. The difference starts with the scope. Most
        small businesses in Miami-Dade, Broward, and West Palm Beach come in with a patchwork of spreadsheets, a
        desktop accounting file, and scattered payroll or inventory apps. QuickBooks is built to take that
        environment and centralize it without months of custom code or process reengineering. The go-live
        process is designed to be fast, repeatable, and forgiving of messy data.</p>
      <p className="text-base text-white shadow-text pt-3">
        The shortest path to production starts with templated setup flows. QuickBooks Online Advanced, for
        example, guides the team through importing their chart of accounts, mapping vendor and customer lists,
        and connecting bank feeds. These wizards are not just for show, they auto-detect field mismatches, flag
        duplicates, and let users preview how their data will land. Because most small businesses use similar
        structures (invoices, bills, payments, payroll), the templates cover 80% of the standard needs out of
        the box. That means the owner is not stuck designing every dropdown from scratch or waiting for a
        developer to build a custom form.</p>
      <p className="text-base text-white shadow-text pt-3">
        Pre-built connectors do the heavy lifting here. For most banks, payroll providers, and even some legacy
        desktop accounting tools, QuickBooks offers direct import tools
        and&nbsp;API&nbsp;connections. The result: transactions flow
        into the new system without manual re-entry. During the onboarding window, the system can pull in months
        (or years) of historical transactions, so financial history is preserved and reporting starts with a
        full ledger. This is especially relevant for businesses that need to show year-over-year trends or
        answer auditors with multi-year data.</p>
      <p className="text-base text-white shadow-text pt-3">
        Phased rollout is another key to a painless go-live. QuickBooks allows the business to bring on modules
        and users in stages. For example, the accounting team can start with core bookkeeping
        and&nbsp;cash flow forecasting, then layer in
        inventory management, approvals, or payroll as each area is ready. This avoids the &#39;all-at-once&#39;
        disruption of many&nbsp;ERP&nbsp;deployments, where every
        process must change on day one. Staff can be trained in waves, and the business can keep running on its
        old setup for non-migrated functions until the new system is proven.</p>
      <p className="text-base text-white shadow-text pt-3">
        The order of operations matters. Geek @ Your Spot LLC, as a local implementer, starts by scoping the
        business’s current data sources and pain points. The first technical step is always data extraction,
        pulling lists and transactions from spreadsheets, desktop files, and any point-of-sale or payroll system
        in use. Next comes data cleansing: duplicates, missing fields, and mismatches get flagged and resolved,
        usually in collaboration with the client’s finance lead. Only once the data is clean does it move into
        QuickBooks, mapped to the correct fields and structures.</p>
      <p className="text-base text-white shadow-text pt-3">
        After the initial import, QuickBooks’ live dashboards and automation rules get configured. This is where
        the business starts to see the benefit: real-time cash flow, automated invoice reminders, and batch
        processing of bills. Approvals and user roles are set up according to the business’s org chart, locking
        down sensitive data and routing tasks to the right people. The final step is user training, focused on
        the actual screens and reports the team will use, not a generic tour. Because QuickBooks keeps the
        interface familiar, staff can usually get productive in days, not weeks.</p>
      <p className="text-base text-white shadow-text pt-3">
        What shortens the go-live is the combination of pre-built import tools, templated setup flows, and the
        ability to roll out in phases. The only real delays come from the quality of the legacy data and the
        availability of people to review it. For a typical small business, the full transition from spreadsheets
        and desktop files to a live, cloud-based QuickBooks environment is measured in weeks, not months. That
        means less time spent in limbo and a faster path to the live numbers and workflow automation that
        intelligent resource planning demands.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-actually-gets-quickbooks-live-in-a-small-business-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Actually Gets QuickBooks Live in a Small Business Environment
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
              <h2 id="what-actually-gets-quickbooks-live-in-a-small-business-environment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Actually Gets QuickBooks Live in a Small Business Environment
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
