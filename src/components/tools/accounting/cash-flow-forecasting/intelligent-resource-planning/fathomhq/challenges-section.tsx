import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Most small businesses in South Florida have lived this: the clock runs out on a Friday, and the finance
        team is still buried in spreadsheets. Every week, the same cycle. Data comes in from half a dozen
        sources, sales in one file, expenses in another, payroll in a desktop app that only one person knows how
        to use. By the time numbers get stitched together for a monthly review, they are already out of date.
        Decisions are made blind, because the real cash position is hidden behind lagging reports or mismatched
        totals.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real cost is not just the hours lost to manual work. It is the missed signals, late-paying
        customers, creeping overhead, or a department that quietly blows its budget. Without a single place to
        see what is happening, owners and managers are left guessing. A small team wastes time cleaning and
        mapping data, but never gets the clarity to act. The business stays reactive, putting out fires instead
        of planning ahead.</p>
      <p className="text-md text-white shadow-text pt-3">
        When intelligent resource planning is manual, every step is a risk. Copying numbers by hand from a sales
        report to a budget tracker means errors slip in. A formula breaks in a spreadsheet, and no one notices
        until payroll runs short. Multi-entity businesses, those with several locations or product lines, have
        it even worse. Each branch or division keeps its own books. Consolidating them into a single view is a
        monthly ordeal, with someone double-checking every line for mistakes. By the time the numbers are ready,
        the opportunity to fix a problem or invest in growth has passed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual processes also hide the root causes of cash flow problems. A general ledger can show that cash is
        low, but it does not say why. Is it late collections? A spike in spending? Or just seasonal variation?
        Without a way to break down the numbers by department, customer, or location, the team cannot tell. The
        business is left reacting to symptoms instead of addressing the source.</p>
      <p className="text-md text-white shadow-text pt-3">
        This patchwork approach is especially painful when the business needs to plan for growth or respond to a
        shock. Adding a new service line, opening a second location, or hiring more staff means guessing at the
        impact. There is no way to model scenarios or see how a decision will play out. The risk of
        overcommitting is high. A single missed payment or unexpected expense can throw off the entire plan.</p>
      <p className="text-md text-white shadow-text pt-3">
        Trying to fix this with a traditional&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;rollout
        often backfires for small businesses. The promise is a clean, automated process, but the reality is
        weeks of data cleanup and mapping. Legacy spreadsheets, emails, and old accounting software do not fit
        neatly into a new database. Teams spend hundreds of hours, and thousands of dollars, just getting the
        books ready to import. The cost explodes before the system even goes live, and the business ends up with
        a tool that is too complex for its needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        The biggest loss is opportunity. When the team is stuck in cleanup mode, they are not tracking the KPIs
        that matter, spotting cash leaks, or planning for the next move. Decisions are delayed. Growth slows.
        And the business keeps running in circles, never getting ahead. This is the cycle that breaks small
        business books before a forecast is even possible.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-resource-planning-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Resource Planning by Hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-resource-planning-by-hand" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Resource Planning by Hand
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
