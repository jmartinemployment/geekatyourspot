import Link from "next/link";

export default function ConclusionSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Manual accounting keeps a business in a reactive posture. You learn about a cash shortfall after it
        happens, about a duplicate payment after the money is gone, and about a compliance problem when the
        notice arrives. Every one of those surprises costs money, and every one of them has the same root
        cause. Nobody can see what the books are doing in time to act.</p>
      <p className="text-md text-white shadow-text pt-3">
        The shift this guide describes is permanent. A clean cloud ledger becomes your single source of truth.
        Capture tools remove the typing. Conditional approvals remove the bottleneck while keeping your
        judgment on every decision that matters. Payment controls stop duplicates and fraud before money
        leaves. Forecasting engines replace the fragile workbook with a model that updates itself, and tax and
        payroll tools file on time while keeping the records an auditor will ask for.</p>
      <p className="text-md text-white shadow-text pt-3">
        None of this hands your books to a machine. <strong>AI does not take over your books.</strong> It acts
        as an <strong>unblinking digital watchman</strong> that reviews every transaction, every vendor
        change, and every filing deadline, at every hour of every day. When something falls outside the rules
        you wrote, it stops and asks you. You stay in charge, and you finally see what is happening while
        there is still time to act.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a business in Miami-Dade, Broward, or Palm Beach, that visibility changes how you plan. You can
        staff up for snowbird season knowing what cash will be available. You can prepare for hurricane season
        with a forecast that shows how long you can operate through a closure. You can expand sales into other
        states knowing exactly when a new filing obligation begins. You can sleep through the night before the
        20th of the month.</p>
      <p className="text-md text-white shadow-text pt-3">
        Your team changes as well. The bookkeeper who spent the month typing invoices now reviews exceptions
        and explains the numbers. The operations manager approves bills from a phone in seconds instead of
        hunting for paper. Your accountant receives clean, documented books at the end of the year instead of
        a box of receipts. The work that remains is the work that needs a person.</p>
      <p className="text-md text-white shadow-text pt-3">
        Control also becomes easier to prove. When a lender asks for current financials, you can produce them
        in minutes. When an auditor asks who approved a payment, the log shows the name, the time, and the
        document. When a state asks why you did not collect its sales tax, your nexus reports show exactly
        when you crossed its threshold and when you registered.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Your Next Step: An Architectural Infrastructure Audit
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        The fastest way to find your own black boxes is an <strong>Architectural Infrastructure
        Audit</strong>. We review your ledger, payables, receivables, forecasting, sales tax, and payroll
        setup. We show you where data is typed twice, where approvals leave no trail, where a spreadsheet
        holds up a decision, and where a compliance deadline depends on one person’s memory. You leave with a
        clear picture of what to fix first and what it will take.</p>
      <p className="text-md text-white shadow-text pt-3">
        The audit begins with a free consultation, and there is no obligation. Book your time with the
        scheduler below, and we will start with your business rather than a software pitch. You can also read
        how we work on our <Link id="use-cases-accounting-conclusion-methodology" href="/methodology" className="text-[#0B162A] hover:underline">methodology
        page</Link>.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="from-reactive-bookkeeping-to-predictive-control" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                From Reactive Bookkeeping to Predictive Control
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="from-reactive-bookkeeping-to-predictive-control" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                From Reactive Bookkeeping to Predictive Control
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
