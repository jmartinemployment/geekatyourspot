import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every small business in South Florida knows the drill: the end of the month arrives, and the back office
        turns into a scramble. One person scrolls through an ancient Excel sheet, trying to match last Friday’s
        sales with the deposit that just hit the bank. Another is digging through a year’s worth of email
        chains, hunting for the latest invoice status before payroll runs. By the time someone tries to pull
        together a real&nbsp;<Link id="use-cases-accounting-intelligent-resource-planning-lede-cash-flow-forecasting" href="/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting" className="text-[#C83803] hover:underline">cash flow forecast</Link>, numbers are already stale, and hours have disappeared into double
        entry and error checks. You never get a clear answer in the moment you need it. Instead, you get last
        month’s picture, after the chance to act has passed.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the cost of running your business on disconnected spreadsheets, desktop ledgers, and manual
        reconciliations. Every sale, payment, or expense gets typed in twice, once in the point-of-sale, again
        in the accounting system. Each handoff is a chance for something to slip. When a big customer pays late
        or a surprise bill lands, you see the impact only after it has already put you in a cash crunch. And
        with every new hire or location, the time spent cleaning up the books grows faster than revenue. The
        truth is, most small business owners spend more time keeping numbers straight than using them to plan
        ahead.</p>
      <p className="text-md text-white shadow-text pt-3">
        Intelligent Resource Planning changes that. Instead of re-keying every transaction and guessing at your
        cash position, data flows automatically from each sale through to your ledger, no human handoffs, no
        version confusion. Live dashboards show cash on hand, invoices due, and which customers are slow to pay,
        so you can move now, not next quarter. Automated reminders and instant payment links cut collections
        time. AI-driven bank reconciliation means your books stay current with a fraction of the effort. Your
        team stops shuffling spreadsheets and starts making real business decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        This page shows how small businesses in West Palm Beach, Broward, and Miami-Dade finally get out of the
        month-end maze. You will see what actually breaks down in the old way, what it is costing you, and how a
        well-built Intelligent Resource Planning approach brings order, speed, and control, without increasing
        staff or blowing up your budget. The result: less time on admin, more visibility, and faster growth, all
        from systems that fit your business as it is today.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is not a pitch for software you do not need. It is a guide for owners and operators who are done
        spending weekends on manual data cleanup, and want a system that grows with them. The old way, copying
        numbers by hand, chasing down approvals, fixing errors at the last minute, does not just waste time. It
        hides warning signs until you are in trouble, and it makes every decision slower and riskier than it
        should be. You know the pain: one late payment or missed bill can set off a domino chain of cash issues,
        yet every fix means more hours lost to spreadsheets and emails.</p>
      <p className="text-md text-white shadow-text pt-3">
        Intelligent Resource Planning tackles that head-on. At Geek @ Your Spot, we help small businesses in
        South Florida align their goals with the right automation, starting with what matters most: real, live
        cash flow insight and control. We do this with a four-phase method: setting clear business outcomes,
        assessing your data for accuracy and readiness, picking tools that work with what you already use, and
        rolling out a pilot that proves value before you commit. This approach is built for lean teams who
        cannot afford to add headcount just to keep up with admin.</p>
      <p className="text-md text-white shadow-text pt-3">
        You will find practical answers here. We will walk through what actually goes wrong in
        manual&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>, why the old
        process costs you more than you think, and how the right mix of automation, live dashboards, and
        seamless integrations can cut accounting admin time by up to 75%. You will see how to avoid the hidden
        traps in migrating from legacy spreadsheets to modern&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>,
        what data and people changes are required, and how to scope a rollout that fits your budget and risk
        tolerance. We focus on what works for local businesses, not what sells big-ticket software in
        boardrooms.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you are tired of making decisions in the dark, or if you have been burned by half-finished migrations
        and tools that promised more than they delivered, you are in the right place. This guide is built from
        the ground up for South Florida’s small business owners and finance leads who want to see, decide, and
        act, without getting stuck in another month-end crunch.</p>
      <p className="text-md text-white shadow-text pt-3">For a shorter overview, read <Link id="use-cases-accounting-intelligent-resource-planning-lede-blog" href="/blog/accounting/cash-flow-forecasting/intelligent-resource-planning-for-small-businesses-how-to-fix-cash-flow-headaches-in-south-florida" className="text-[#C83803] hover:underline">Intelligent Resource Planning for Small Businesses: How to Fix Cash Flow Headaches in South Florida</Link> on our blog.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="from-spreadsheet-chaos-to-real-time-clarity-how-local-teams-move-past-manual-forecasting" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                From Spreadsheet Chaos to Real-Time Clarity: How Local Teams Move Past Manual Forecasting
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="from-spreadsheet-chaos-to-real-time-clarity-how-local-teams-move-past-manual-forecasting" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                From Spreadsheet Chaos to Real-Time Clarity: How Local Teams Move Past Manual Forecasting
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
