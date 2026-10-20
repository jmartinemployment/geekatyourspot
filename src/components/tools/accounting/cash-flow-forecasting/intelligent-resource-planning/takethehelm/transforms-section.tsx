import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm gives small businesses a live, interactive view of their cash flow, removing the guesswork
        and manual effort that come with spreadsheet-based planning. Instead of spending hours each week
        updating files and chasing down payments, teams see every invoice, bill, and bank balance in one place.
        This means less time spent on routine accounting and more time for high-value work.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of Take the Helm is its visual drag-and-drop interface. Teams can shift payment dates, test
        what happens if a client pays late, or see the impact of a new expense, all by moving items on a
        timeline. This replaces the need to rebuild entire forecasts in spreadsheets every time something
        changes. Owners see the immediate cash flow impact of every decision, so they can plan with confidence
        instead of reacting to surprises.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm connects directly to accounting systems like QuickBooks Online, Xero, and Sage. It pulls
        in open accounts receivable and&nbsp;accounts
        payable&nbsp;balances, eliminating double data entry. There is no need to retype invoices
        or bills. When a transaction changes in the accounting system, it updates in Take the Helm
        automatically. This integration cuts down on errors and saves hours each month that would otherwise be
        spent reconciling records.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated invoice and bill tracking means the team never loses sight of what is owed or due. Take the
        Helm flags overdue payments and upcoming bills, so nothing gets missed. It uses historical payment
        behavior to estimate when invoices will really clear the bank, not just when they are due. This
        predictive engine helps teams avoid cash crunches and plan for real-world timing, not just best-case
        scenarios.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scenario planning is built in. With Take the Helm, businesses can test the impact of a major expense, a
        delayed client payment, or a new hire in seconds. The platform allows unlimited side-by-side scenarios,
        so users can compare outcomes and make informed decisions. There is no need to copy and paste data into
        new sheets or rebuild models from scratch. Each scenario is saved and can be shared with stakeholders as
        a PDF or CSV report.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm offers three distinct viewing options. Some users prefer a visual graph, others want a
        detailed transaction list, and some need a summary table. Switching between these views is instant, and
        all can be exported for sharing or review. This flexibility means every team member and advisor can work
        in the way that suits them best, without extra training or manual formatting.</p>
      <p className="text-md text-white shadow-text pt-3">
        Managing payables and receivables is no longer a separate job. Take the Helm tracks every invoice and
        bill, lets users update their status, and even allows payments to be scheduled directly through Veem.
        This means fewer bounced checks, missed deadlines, or late fees. The team can see at a glance what is
        coming in, what needs to go out, and what cash will be left at the end of the week or month.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bookkeeping&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>&nbsp;matters. Take the
        Helm relies on accurately and consistently coded data from your accounting system. When the data is
        clean, forecasts are reliable, and trends are clear. The platform helps maintain this quality by syncing
        with verified sources and flagging inconsistencies, so teams do not waste time chasing down errors or
        fixing broken formulas.</p>
      <p className="text-md text-white shadow-text pt-3">
        For owners used to working from outdated spreadsheets and scattered files, Take the Helm changes the
        daily routine. There is no more hunting for the latest numbers or worrying that something was missed.
        The business runs from a single, up-to-date dashboard, and the owner can focus on growth instead of
        crisis management.</p>
      <blockquote cite="https://takethehelm.app/for-advisors/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Say goodbye to endless tabs and hours spent in spreadsheets!</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        With Take the Helm, small businesses in Miami-Dade, Broward, and West Palm Beach counties can finally
        move past the cycle of manual updates and constant surprises. The platform returns hours to the team
        each week, reduces costly errors, and gives decision-makers the real-time insight they need to plan, not
        just react. Intelligent Resource Planning becomes possible for teams that once thought it was out of
        reach.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-take-the-helm-removes-manual-work-from-intelligent-resource-planning" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Take the Helm Removes Manual Work from Intelligent Resource Planning
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-take-the-helm-removes-manual-work-from-intelligent-resource-planning-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Take the Helm Removes Manual Work from Intelligent Resource Planning
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
