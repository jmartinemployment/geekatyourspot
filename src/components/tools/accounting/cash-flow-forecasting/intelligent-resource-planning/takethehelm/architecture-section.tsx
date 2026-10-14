import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm is built to slot into the core of a small business’s financial operations without
        requiring a complete system overhaul. Its architecture centers on real-time integrations, robust data
        handling, and flexible user control. The platform is not a closed box. It is designed to connect, sync,
        and extend, so your accounting data, cash flow, and planning all live in one place, updated as soon as
        your business moves.</p>
      <p className="text-md text-white shadow-text pt-3">
        The foundation is Take the Helm’s direct integrations with leading accounting systems: QuickBooks
        Online, Xero, and Sage. When you connect Take the Helm to your accounting platform, it pulls in all open
        invoices, bills, bank account balances, and historical transaction data. This is not a static import.
        The connection stays live, so every new invoice, payment, or expense in your accounting software flows
        straight into Take the Helm’s dashboard. There is no need for manual file uploads or batch syncing. As
        soon as your bookkeeper enters a new bill in QuickBooks Online, it appears in Take the Helm’s cash flow
        view.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm also connects to Veem for payment execution. This means you can plan, test, and schedule
        payments from within Take the Helm. Once a payment is scheduled, Veem handles the transfer, pulling
        funds from your account and sending them to suppliers or vendors automatically. This closes the loop
        between forecasting and action, no more toggling between apps or risking double payments because of
        system lag.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the data side, Take the Helm’s architecture is built for clarity and consistency. It does not just
        mirror what is in your accounting software. It cleans, codes, and organizes every transaction, so you
        can trust the numbers you see. The system checks for accuracy by verifying data against source documents
        and flags inconsistencies that could skew forecasts. This attention
        to&nbsp;<GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data
        quality</GlossaryLink>&nbsp;is critical for small businesses that have struggled with errors from manual
        entry or mismatched spreadsheet formats.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm handles both automated and manual data sources. While it pulls most information directly
        from connected accounting tools, it also lets users add other sources, like loans, new bank accounts, or
        one-off cash infusions, so forecasts reflect the full financial picture. You can choose which accounts
        and transactions to include or exclude, letting you tailor the forecast to the realities of your
        business without losing sight of the details.</p>
      <p className="text-md text-white shadow-text pt-3">
        User control is at the heart of Take the Helm’s platform. The system allows unlimited users, each with
        individually adjustable permissions. Owners can decide who sees what, and who can edit or only view.
        This is especially useful for small teams where the bookkeeper, owner, and outside accountant all need
        different levels of access. The dashboard itself is customizable, with three main viewing modes: a
        highly visual graph for quick changes, a transaction detail list for granular review, and a cash flow
        summary table familiar to anyone used to working in spreadsheets. This flexibility means every user can
        work in the way that fits their role and preferences.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scenario planning is handled at the architecture level, not just as a feature. The platform supports
        unlimited scenarios, each stored and managed alongside the base case. When you create a new scenario,
        Take the Helm duplicates the relevant data, lets you make changes, and shows the impact side by side
        with your current plan. This is not a simulation in a sandbox, it is a full, persistent record that you
        can revisit, adjust, and export as needed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm’s reporting engine is built into the core platform. Any view, graph, table, or detail, can
        be exported as a PDF or CSV file. This ensures that what you share with lenders, partners, or your own
        team always matches the live data in the system. There is no risk of reports getting out of sync with
        reality, as everything is generated from the latest available numbers.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and data integrity are woven into the architecture. Take the Helm uses secure connections to
        accounting platforms and payment providers, and does not require businesses to expose their core ledger
        to third-party apps that do not meet the same standards. Data is kept current, consistent, and
        auditable, reducing the risk of fraud, missed payments, or compliance gaps.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a small business in Miami-Dade or Broward, this architecture means Take the Helm can sit at the
        center of financial operations without requiring a big IT project. It plugs into what you already use,
        cleans up the data, and gives every stakeholder a single, trustworthy view of what is happening and what
        is coming next. You get the power of automated forecasting, real-time scenario testing, and direct
        payment execution, all in one place. The architecture is not just about technology, it is about making
        sure your team never walks into a Friday meeting surprised by a cash shortfall again.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="take-the-helm-s-architecture-integrations-data-handling-and-control" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Take the Helm’s Architecture: Integrations, Data Handling, and Control
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
              <h2 id="take-the-helm-s-architecture-integrations-data-handling-and-control" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Take the Helm’s Architecture: Integrations, Data Handling, and Control
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
