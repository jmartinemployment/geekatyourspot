import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        ADP’s platform is not just a payroll engine, it is a connected compliance backbone built to handle the
        complexity of modern small business operations. At its core, ADP centralizes all workforce data in a
        single system, providing a unified view that supports reporting, compliance, and real-time
        decision-making. This architecture is what allows the platform to scale from a handful of employees to
        hundreds, across multiple locations and jurisdictions.</p>
      <p className="text-md text-white shadow-text pt-3">
        The system’s integration layer is key. ADP connects seamlessly with accounting software, point of sale
        systems, HR tools, and most third-party payroll and HCM platforms. This provider-agnostic approach means
        that businesses do not have to rip out what they already use. Instead, ADP plugs into existing
        workflows, pulling in time tracking data, syncing with HR records, and exporting payroll results to
        accounting
        or&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems.
        This reduces the risk of errors from duplicate data entry and keeps all records aligned for compliance
        and audit purposes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Behind the scenes, ADP’s compliance engine is always running. The platform monitors payroll and tax
        regulations at the federal, state, and local levels, applying updates as soon as they are published.
        This is not just a rules database, it is an active system that checks every payroll run against current
        laws, flags discrepancies, and enforces the right deductions, withholdings, and filings. For multi-state
        employers, ADP tracks where each employee works, applies the correct tax profiles, and files in every
        required jurisdiction. This is critical for South Florida businesses with remote or mobile teams, where
        crossing a county or state line can trigger new compliance requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data security and privacy are built into every layer of the ADP architecture. The platform uses advanced
        encryption and access controls to protect sensitive employee and business information. Audit trails are
        maintained for every payroll transaction, classification change, and tax filing, giving businesses a
        defensible record for any review or audit. ADP’s privacy-by-design approach ensures compliance with both
        US and global data regulations, supporting businesses that may need to report across borders as they
        grow.</p>
      <p className="text-md text-white shadow-text pt-3">
        ADP’s AI and analytics capabilities are purpose-built for compliance, not just automation. The system
        uses machine learning to flag potential errors, such as inconsistent worker status, outlier overtime
        claims, or missing tax documentation, before they become costly problems. Predictive insights help
        owners spot risks early, plan for future payroll liabilities, and benchmark against similar businesses.
        This is not just about catching mistakes; it is about giving business owners better visibility and
        control over their compliance posture.</p>
      <p className="text-md text-white shadow-text pt-3">
        Support and governance round out the architecture. ADP assigns dedicated HR business partners to
        clients, providing strategic guidance and hands-on help with classification, compliance, and system
        optimization. This is not a general support queue, each client has a named contact with deep expertise
        in payroll tax and worker classification. For businesses that need to scale quickly or adapt to changing
        rules, ADP’s architecture supports rapid deployment and flexible workflows, with pre-built templates and
        custom configuration options.</p>
      <p className="text-md text-white shadow-text pt-3">
        The result is a platform that does not just process payroll but orchestrates compliance across every
        part of the business. Worker data, pay rules, tax filings, and audit trails all live in one place,
        connected to the tools a business already uses. For the Miami HVAC owner, this means that every
        technician, every job, and every payment is tracked, classified, and reported correctly, no matter how
        the workforce grows or shifts. ADP’s architecture is built for the real complexity of small business in
        South Florida, delivering confidence that every compliance box is checked and every risk is managed.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-powers-adp-the-architecture-integrations-and-data-controls-under-the-hood" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers ADP: The Architecture, Integrations, and Data Controls Under the Hood
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
              <h2 id="what-powers-adp-the-architecture-integrations-and-data-controls-under-the-hood-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers ADP: The Architecture, Integrations, and Data Controls Under the Hood
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
