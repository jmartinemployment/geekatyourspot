import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        ADP stands apart because it lets you automate the most tedious, error-prone parts of
        payroll&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;and worker
        classification. But the real value comes from how the system is configured up front, what rules are set,
        which logic is automated, and what gets connected to your existing stack. This is not a plug-and-play
        tool that runs on default settings. Geek @ Your Spot LLC works with you to tune ADP’s own logic to your
        specific needs, so your business gets the protection and efficiency promised, not just another software
        license.</p>
      <p className="text-md text-white shadow-text pt-3">
        First, ADP’s compliance engine is built to handle both W-2 employees and 1099 independent contractors.
        The platform’s automation logic covers the full spectrum of payroll tax calculation, overtime tracking,
        and worker status monitoring. You configure the rules that define who is an employee versus a
        contractor, based on the latest state and federal guidelines. This is not just a checklist, ADP’s
        workflows use these classifications to drive how pay is calculated, which taxes are withheld, and what
        forms are filed. For a small business in Miami-Dade or Broward, that means every new hire or contractor
        gets run through the correct logic before a single payment goes out.</p>
      <p className="text-md text-white shadow-text pt-3">
        ADP’s automation covers more than just paychecks. The system is set up to handle overtime rules, wage
        garnishments, and deductions according to your business and jurisdiction. For example, ADP automatically
        applies overtime rates based on Fair Labor Standards Act (FLSA) requirements and any stricter state
        laws, and flags anomalies before payments are finalized. This prevents the silent accrual of errors that
        can trigger audits or fines months later. You set the policies once; ADP enforces them every pay cycle.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the tax side, ADP’s workflows automate payroll tax calculations and filings for federal, state, and
        local jurisdictions. The system’s compliance logic is updated automatically to reflect new laws and
        regulations, so you do not have to chase down every change or worry about missing a deadline. For
        multi-state employers, a common scenario in South Florida, where workers might live in one state and
        work in another, ADP supports complex tax withholding and reporting requirements. You configure which
        states your business operates in, and ADP tracks the right rules for each worker’s location and status.</p>
      <p className="text-md text-white shadow-text pt-3">
        Worker classification is a moving target, especially in industries with seasonal or gig-based labor. ADP
        lets you set up workflows that require W-9s for contractors, verify tax IDs, and produce electronic
        1099-NEC forms for the IRS and state agencies. For employees, the system manages W-2 creation and
        e-filing. The platform also maintains a full audit trail for every transaction, so you can prove
        compliance if challenged by state or federal authorities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is a core part of making ADP work in your environment. The platform supports connections to
        popular accounting, HR, and point-of-sale systems, as well as provider-agnostic integrations with most
        payroll and HR platforms. ADP offers APIs for deeper integration, so data flows automatically between
        time tracking, payroll, and compliance modules. Geek @ Your Spot LLC configures these integrations to match
        your existing workflows, no duplicate data entry, no manual handoffs, and no blind spots in your
        compliance process.</p>
      <p className="text-md text-white shadow-text pt-3">
        ADP also allows for flexible service and support options. You can tailor the level of support you need,
        from basic compliance monitoring to a dedicated HR business partner for strategic guidance. This is not
        just a help desk; ADP’s support structure is designed to keep your operation running smoothly, with 24/7
        access to certified payroll and compliance experts. This matters when a payroll tax crisis hits late on
        a Friday, your team gets a real person, not a chatbot loop.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, ADP’s extension mechanism is built around its
        robust&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;and pre-built connectors. This means your
        payroll and HR data can be synchronized with other business-critical systems, whether you use
        QuickBooks, a custom&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>, or industry-specific tools. Geek @ Your Spot LLC handles the technical mapping and data structure setup, so your information flows cleanly
        and securely from one system to the next. This reduces manual work, cuts down on errors, and gives you a
        real-time view of compliance across your workforce.</p>
      <p className="text-md text-white shadow-text pt-3">
        In practice, configuring ADP is a collaborative process. Geek @ Your Spot LLC starts by defining your
        business objectives and compliance requirements, then sets up the rules and integrations that match your
        actual workflows. The focus is always on removing manual steps, enforcing the right logic, and making
        sure your business is audit-ready at all times. The result is a payroll and compliance engine that works
        for your unique environment, not a generic template.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-adp-for-payroll-tax-and-worker-classification-what-actually-gets-set-up-and-why-it-matters" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring ADP for Payroll Tax and Worker Classification: What Actually Gets Set Up and Why It Matters
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-adp-for-payroll-tax-and-worker-classification-what-actually-gets-set-up-and-why-it-matters" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring ADP for Payroll Tax and Worker Classification: What Actually Gets Set Up and Why It Matters
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
