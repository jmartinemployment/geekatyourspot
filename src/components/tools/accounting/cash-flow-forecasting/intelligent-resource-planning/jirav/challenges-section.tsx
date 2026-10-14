import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A small business in South Florida that runs its numbers from disconnected spreadsheets, desktop
        accounting, and emails faces a daily grind of manual work. The cost is not just hours lost, but
        decisions made on stale or incomplete data. Each Friday, the same team that patched together last
        month&#39;s numbers is back at it, checking for errors, chasing down missing entries, and reworking a
        forecast that never quite matches reality. This is not just busywork, it is risk. When payroll, sales,
        and bills live in separate systems, the business owner cannot see the true cash position until it is too
        late. A sudden expense or a delayed payment from a client can tip the business into a cash crunch with
        no warning.</p>
      <p className="text-md text-white shadow-text pt-3">
        This chaos is not just a bookkeeping headache. It blocks every forward-looking decision a business needs
        to make. Over-hiring is one of the most expensive mistakes: when a business brings on new staff before
        the revenue is there to support them, it burns through cash and risks having to cut back later. Without
        a clear, live view of incoming contracts and capital, these decisions are made in the dark. Relying on
        static, trailing three-month spreadsheets means that the numbers used to plan are already out of date.
        This leaves the business exposed to real-time shifts in the market, like a sudden drop in demand during
        the slow South Florida summer, without any early warning.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pain compounds when it is time to borrow or seek investment. Presenting fractured, outdated
        spreadsheets to a local bank does not just slow down the process; it can mean missing out on needed
        funding altogether. Lenders want to see a clear, professional forecast that ties together every part of
        the business. When the numbers do not line up, or the story is scattered across files and folders, the
        business looks less reliable, no matter how well it is actually run. The cost here is not just
        embarrassment; it is missed opportunity and higher interest rates.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual resource planning also fails when the business needs to model complex scenarios. If a key client
        cuts spend by 30%, or a major expense hits unexpectedly, the business needs to know the impact before it
        happens, not after. With disconnected systems, running these what-if scenarios means more late nights
        copying numbers, checking formulas, and hoping nothing was missed. Too often, the answer comes too late
        to act on it.</p>
      <p className="text-md text-white shadow-text pt-3">
        The most hidden cost is the drain on staff time and morale. Instead of focusing on growth, customer
        service, or process improvement, valuable team members spend their days shuffling data and fixing
        errors. For a business that wants to scale, this is unsustainable. Hundreds of billable hours can vanish
        just trying to map messy records into the structure
        an&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;system needs, often before the software even
        goes live. Every hour spent on manual reconciliation is an hour not spent on something that moves the
        business forward.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is not a problem that fixes itself with more effort. As the business grows, the complexity and risk
        only increase. More sales mean more invoices, more payroll runs, more data to reconcile. The old way,
        patching together reports after the fact, cannot keep up. The business falls further behind, and the
        cost of missing, late, or wrong information grows. This is the wall that blocks small businesses from
        scaling up, and it is why Intelligent Resource Planning is not a luxury, but a necessity.</p>
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
