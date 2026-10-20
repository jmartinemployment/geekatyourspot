import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A small business in South Florida does not need to shut down for a month to deploy Take the Helm. The
        platform is designed to minimize disruption, slotting into daily operations without a drawn-out
        overhaul. Going live with Take the Helm is not a
        generic&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;rollout. It is a focused, phased process
        that gets&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>&nbsp;and
        intelligent resource planning working fast, often in days instead of months.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first shortcut is Take the Helm’s set of pre-built connectors. Out of the box, it syncs with
        QuickBooks Online, Xero, and Sage. That means the business’s core financial data, accounts, invoices,
        bills, flows straight into Take the Helm without manual re-entry. The setup wizard walks the team
        through connecting their accounting system, selecting which accounts to include, and reviewing the
        initial forecast before anything goes live. For a business that has spent years juggling spreadsheets
        and email attachments, this alone can cut weeks from the timeline.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once connected, Take the Helm automatically pulls in&nbsp;<GlossaryLink slug="accounts-payable">accounts
        payable</GlossaryLink>&nbsp;and receivable balances. The team sees every open invoice and bill, mapped
        onto a visual timeline. Instead of waiting for the end of the month to spot a cash crunch, they get an
        instant view of what is due, what is late, and what needs action. This is not just a dashboard; it is a
        working model that updates as payments come in or go out. The drag-and-drop interface lets users shift
        payment dates and immediately see how it impacts cash flow. This replaces hours of manual recalculation
        with a few clicks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Phased rollout is what keeps the process manageable. Take the Helm does not force a business to clean up
        every legacy record or perfect its chart of accounts before getting value. The first phase is about
        live&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>&nbsp;and
        immediate visibility. Later, the business can add more historical data, refine forecasting rules, or
        expand to additional entities. This staged approach means the team gets real results, like flagged
        overdue invoices and predicted cash shortfalls, while still operating on their current systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        The setup wizard also handles user roles and permissions. Take the Helm supports unlimited users, so the
        owner, bookkeeper, and outside accountant can each get access tailored to what they need. Collaboration
        happens in one place, not over a chain of emails. When the business is ready, it can use Take the Helm’s
        built-in scenario planning to test what-if cases: hiring a new employee, taking on a large project, or
        planning for a slow season. Each scenario sits side by side with the base forecast, making it easy to
        compare outcomes without risking the live plan.</p>
      <p className="text-md text-white shadow-text pt-3">
        For payments, Take the Helm integrates directly with Veem. This lets the business schedule and execute
        payments to suppliers right from the same platform. No more toggling between bank portals and accounting
        software. The payment plan in Take the Helm passes straight to Veem, which handles the transfer. This
        reduces the risk of missed deadlines and late fees, especially for teams that have struggled to keep up
        with manual payment calendars.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real timeline to go-live depends on how clean the source data is and how many systems are in play.
        For a small business already using QuickBooks Online or Xero, connecting and seeing a first forecast can
        happen in under an hour. Reviewing and adjusting the initial forecast, checking that invoices and bills
        are mapped correctly, setting up user roles, and customizing the dashboard, usually takes a day or two.
        Rolling out scenario planning and payment execution can follow as the team gets comfortable. There is no
        forced big-bang migration; Take the Helm grows with the business’s needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        What shortens the timeline most is the platform’s focus on immediate, actionable visibility. Take the
        Helm does not wait for a perfect set of books before delivering value. It starts with live data, flags
        what is missing or inconsistent, and lets the team adjust as they go. For the owner who used to find out
        about cash problems after the fact, this means fewer surprises and more time to act.</p>
      <p className="text-md text-white shadow-text pt-3">
        A typical go-live looks like this:</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Kickoff with Geek @ Your Spot LLC to review business objectives and current data sources.</li>
        <li>Connect Take the Helm to the accounting system (QuickBooks Online, Xero, or Sage) using the setup wizard.</li>
        <li>Select accounts and data ranges to include in the forecast.</li>
        <li>Review the initial cash flow forecast and adjust mapping as needed.</li>
        <li>Configure user roles and permissions for the team and any external advisors.</li>
        <li>Begin using the dashboard for live cash flow visibility and daily decision-making.</li>
        <li>Add scenario planning and payment execution features as the team is ready.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC’s role is to close the gaps that slow down many small business deployments. They step
        in to map old spreadsheet data, troubleshoot sync issues, and train staff on using Take the Helm’s
        features. Their local presence means questions get answered in real time, and the rollout stays focused
        on the business’s actual pain points, not on generic best practices. The result is a platform that works
        with the business’s real-world data, staff, and cash flow cycles from day one.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-take-the-helm-looks-like-in-practice-steps-shortcuts-and-the-real-timeline" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Going Live with Take the Helm Looks Like in Practice: Steps, Shortcuts, and the Real Timeline
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
              <h2 id="what-going-live-with-take-the-helm-looks-like-in-practice-steps-shortcuts-and-the-real-timeline" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Going Live with Take the Helm Looks Like in Practice: Steps, Shortcuts, and the Real Timeline
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
