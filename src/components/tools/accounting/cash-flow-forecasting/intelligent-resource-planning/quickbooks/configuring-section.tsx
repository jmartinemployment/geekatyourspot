import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every QuickBooks deployment for Intelligent Resource Planning stands or falls on the rules and
        automation logic put in place at the start. For a small business in Miami-Dade, Broward, or West Palm
        Beach, this is not just a matter of checking boxes in a setup wizard. The difference between a system
        that saves hours and one that adds headaches is in how those rules match the way your team already
        works. Geek @ Your Spot gets called when the out-of-the-box setup leaves gaps, when approvals still get
        lost, or when the numbers in QuickBooks do not match what the owner sees in their bank account or
        payroll files.</p>
      <p className="text-md text-white shadow-text pt-3">
        QuickBooks Online Advanced, the edition most small businesses graduate into, is built for this kind of
        configuration. It does not require a
        full&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;migration, but it does bring enterprise-style
        control to user access, workflow automation, and reporting. The rules you set here are not generic, they
        are the backbone of how your business runs each week.</p>
      <p className="text-md text-white shadow-text pt-3">
        Here is what actually gets configured:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Custom roles and permissions: QuickBooks Online Advanced lets you define what each user can see and do. This is not just admin vs. staff, permissions can be set so a project manager sees only their own jobs and costs, while payroll and bank data stay locked to finance. For growing teams, this closes the door on accidental data leaks and keeps sensitive numbers out of the wrong hands. When a new hire joins, they start with read-only access; as trust builds, permissions can be expanded. When someone leaves or changes roles, a review of their access is built into the process.</li>
        <li>Approval workflows for bills and expenses: Instead of emailing PDFs back and forth or chasing signatures, QuickBooks automates the routing of invoices and bills. Approvals can be set to trigger based on dollar amount, department, or project. If a vendor bill is overdue, the system escalates it to the right person. No more bottlenecks because someone missed an email on vacation.</li>
        <li>Automated batch processing: For businesses that process large volumes of invoices or expenses, QuickBooks supports batch actions. You can enter or edit multiple transactions at once, cutting down on the hours spent on repetitive data entry. This is not just a bulk upload; rules can be set so that certain types of transactions are automatically categorized, flagged for review, or routed for approval.</li>
        <li>Custom reporting and dashboards: QuickBooks does more than run standard financials. With its custom report builder, you set up dashboards that show the metrics that matter to your business, cash flow, outstanding receivables, project profitability, broken down by department, location, or project. Reports can be filtered, grouped, and saved as templates. Drill-down capability means you can go from a high-level dashboard straight to the detail behind a number, all without leaving the platform.</li>
        <li>Spreadsheet Sync: For teams that still rely on Excel for deeper analysis, QuickBooks offers Spreadsheet Sync. This connects QuickBooks data directly to Excel, so you can build custom reports or dashboards without exporting and importing files every week. When the data updates in QuickBooks, it updates in Excel too.</li>
        <li>Automation for recurring tasks: Reminders for invoice follow-up, scheduled payments, and regular reporting can all be automated. The system can send payment reminders to customers, flag overdue bills, and even automate certain reconciliation tasks.</li>
        <li>Inventory and multi-location tracking: For businesses with more than one site or warehouse, QuickBooks lets you track inventory by location, automate restocking alerts, and monitor stock movement in real time. You can set rules for how inventory transfers are approved and how discrepancies are flagged.</li>
        <li>Audit trails and change logs: Every approval, edit, or data entry is logged. This is not just for compliance; it means you can trace back changes, spot errors, and lock down periods after close so numbers do not shift after the fact.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        Not everything in QuickBooks is open to scripting or code-level customization. Unlike some
        full&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems, QuickBooks does not offer a
        developer SDK or open&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;for deep custom extensions
        by default. Most automation is built through its own configuration screens and built-in logic. Where
        integration is needed (for example, connecting to payroll
        or&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>), it relies on its ecosystem of add-ons and
        supported connectors, not custom code. Geek @ Your Spot’s job is to map your business’s real-world
        processes onto what QuickBooks can automate, and to flag where a third-party connector or manual
        workaround is required.</p>
      <p className="text-md text-white shadow-text pt-3">
        The difference between a DIY setup and a Geek @ Your Spot deployment is in the details. Most small
        businesses can get the basics running, importing the chart of accounts, adding users, and connecting a
        bank feed. But the pain points show up when approval rules do not match the way decisions are made, or
        when a manager sees numbers they should not. Geek @ Your Spot configures granular permissions, approval
        routing, and custom dashboards to fit the real structure of your team. They also handle the data mapping
        between legacy spreadsheets and QuickBooks’ own fields, making sure that what appears in a dashboard is
        what actually matters to the business owner.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the HVAC service in West Palm Beach, this means the owner no longer needs to hunt through email
        threads to see if a vendor bill was approved. Instead, they check a dashboard in QuickBooks, see the
        status, and know who touched it last. If a project manager tries to access payroll data, they get
        blocked. When the finance team prepares month-end, the numbers are locked down after close, and any
        changes require a logged approval. Every step is visible, and every rule matches how the business works,
        not just how QuickBooks works out of the box.</p>
      <p className="text-md text-white shadow-text pt-3">
        QuickBooks’ configuration is not a one-time event. As the business grows, new approval rules,
        departments, or reporting needs can be added. The system is built to scale with up to 25 users on
        Advanced, each with their own role and access. For businesses needing more, QuickBooks Desktop
        Enterprise supports up to 40 users and adds deeper inventory and manufacturing controls, but at the cost
        of more complex setup and maintenance.</p>
      <p className="text-md text-white shadow-text pt-3">
        The extension mechanism in QuickBooks is practical, not open-ended. You configure what the platform
        offers, roles, workflows, dashboards, and integrations with supported apps. Where a business needs a
        feature QuickBooks does not natively support, Geek @ Your Spot advises on the best workaround or add-on,
        but does not build custom code inside QuickBooks itself. This keeps the environment stable, supportable,
        and within the boundaries of what QuickBooks guarantees will work.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, configuring QuickBooks for Intelligent Resource Planning is about setting up the right
        rules, permissions, and automation logic to fit your business. It is not a blank slate for coding, but a
        robust set of tools that, when mapped to your real workflow, remove hours of manual work and close the
        gaps that spreadsheets and generic setups leave open.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-quickbooks-rules-automation-and-customization-limits" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in QuickBooks: Rules, Automation, and Customization Limits
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
              <h2 id="what-gets-configured-in-quickbooks-rules-automation-and-customization-limits" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in QuickBooks: Rules, Automation, and Customization Limits
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
