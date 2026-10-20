import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deel’s architecture is built to centralize every piece of payroll, tax, and worker data in one place,
        while connecting to the accounting and HR tools small businesses already use. At its core, Deel acts as
        a compliance-first HRIS, payroll engine, and contractor management system. Every worker’s
        profile, employee or contractor, lives inside Deel, with contracts, tax forms, payment records, and
        compliance status updated in real time.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s integrations are deep, not just surface-level data pushes. Deel connects directly to
        QuickBooks, Xero, and NetSuite, letting businesses sync invoices, bills, and payments straight into
        their general ledger. When a payroll run or contractor payment is processed, the transaction
        details (amount, tax, GL code, and supporting documents) are mapped automatically. This eliminates the
        manual export-cleanup-import cycle that leads to errors and missed entries. For businesses using
        FP&amp;A or workforce planning tools like Abacum, Deel pushes real-time headcount and payroll data,
        supporting accurate forecasting and budget control.</p>
      <p className="text-md text-white shadow-text pt-3">
        Workforce data doesn’t stay siloed.
        Deel’s&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;and
        marketplace integrations allow it to sync worker status, role changes, and eligibility with benefits
        platforms, time tracking apps, and even digital perks providers like Fufild. For example, when a new
        contractor is onboarded or a W-2 employee’s role changes, that information updates across connected
        systems, keeping spend rules, eligibility, and access in sync without extra admin work. This architecture
        ensures that compliance checks and spend controls are always based on the latest data.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tax
        compliance&nbsp;is automated at the data level. Deel’s Compliance Hub draws on a global
        database of regulatory updates, local tax rules, and classification tests. When a new rule is published
        in a jurisdiction, the platform updates its logic and alerts users if their setup is affected. This
        applies to everything from local right-to-work verification to GDPR data retention standards. All
        compliance documents (W-9s, contractor agreements, and payroll tax filings) are stored and accessible for
        audits or due diligence, with a full change history for traceability.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and auditability are not afterthoughts. Every action in Deel, whether a contract signature, classification
        decision, payment, or tax filing, is logged with an audit-ready trail. The platform supports multi-ledger
        accounting, so businesses operating in multiple entities or currencies can reconcile payroll and
        contractor payments across all accounts. For clients handling digital assets, Deel integrates with
        platforms like TRES Finance to unify fiat and crypto payments, automate reconciliation, and export
        audit-ready reports. Every integration is designed to keep sensitive payroll and worker data secure,
        with role-based access and compliance with standards like SOC 1 &amp; 2.</p>
      <p className="text-md text-white shadow-text pt-3">
        Deel’s extensibility comes from its
        open&nbsp;API&nbsp;and
        workflow automation tools. Businesses can build custom workflows, automate recurring finance tasks, or
        connect Deel to other software without waiting for a vendor roadmap. For example, a business can
        automate the collection of timesheets from a time tracking app, trigger payroll runs, and feed the
        results into
        their&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;and
        FP&amp;A tools, all without manual intervention. This flexibility means Deel can adapt to complex
        setups (multi-state payroll, variable commissions, or project-based contractor teams) without breaking the
        compliance chain.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the South Florida business owner, this architecture means no more patchwork of disconnected tools or
        ad hoc spreadsheets. Every worker’s classification, every payroll run, every tax obligation, and every
        compliance document is connected and current. When the Friday afternoon rush hits, the owner sees a
        dashboard that reflects the true state of their workforce, tax filings, and audit exposure, ready for
        whatever the next regulatory change brings.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-powers-deel-integrations-data-flow-and-security" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers Deel: Integrations, Data Flow, and Security
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
              <h2 id="what-powers-deel-integrations-data-flow-and-security-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers Deel: Integrations, Data Flow, and Security
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
