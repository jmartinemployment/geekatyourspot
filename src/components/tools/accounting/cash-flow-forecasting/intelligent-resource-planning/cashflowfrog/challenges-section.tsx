import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Manual&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>&nbsp;is a
        drain on small teams in South Florida. When every number comes from a different spreadsheet, desktop
        app, or email, the process is slow and error-prone. The person in charge of the books spends hours each
        week just pulling together a cash flow snapshot. By the time they finish, the numbers are already out of
        date. This is not just busywork, it is a real risk. A single typo or a missed invoice can mean thinking
        you have enough for payroll when you do not, or missing a vendor payment that damages a key
        relationship.</p>
      <p className="text-md text-white shadow-text pt-3">
        The cost is more than lost time. When a business runs on scattered data, the forecast is built on
        yesterday’s reality. Decisions made from stale numbers lead to overdrafts, bounced checks, and surprise
        cash gaps. Even a small slip can leave a team scrambling to cover shortfalls on a Friday afternoon. This
        is not rare; for most small businesses, it is the norm. The finance lead is not a full-time accountant.
        They are often the owner or a manager who has other jobs to do. Each time they drop back into the books,
        they are pulled away from sales, customer service, or growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real pain shows up when the business tries to grow. As sales pick up, so does the volume of
        transactions, more invoices, more bills, and more moving parts. The spreadsheet that worked for a single
        bank account and a handful of clients quickly becomes a liability. It cannot keep up with multiple
        entities, currencies, or what-if planning. Every new layer of complexity means more time spent updating,
        mapping, and fixing formulas. It is easy to miss a payment that is running late or a bill that is about
        to hit. The forecast gets further from reality with every manual step.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual processes also hide trends that matter. Without a way to see which customers pay late or which
        weeks are tightest for cash, the business ends up offering credit to clients who stretch payments or
        misses the warning signs of a cash crunch. When the only way to spot a problem is by looking backward,
        the team is always reacting rather than planning. This leads to a cycle of surprises, good months
        followed by sudden shortages, and no clear answer about whether the business can safely hire, expand, or
        invest.</p>
      <p className="text-md text-white shadow-text pt-3">
        The risk is not just in the numbers. It is in the toll on the team. Staff get burned out by repetitive,
        low-value work. Trust in the numbers erodes. Leadership stops relying on the forecast and starts making
        decisions by gut feel. That is when mistakes multiply. A business that cannot trust its own numbers is
        flying blind, and the cost of that uncertainty is felt in missed opportunities, lost relationships, and
        the stress of not knowing what is coming next.</p>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog is built to break this cycle. Instead of spending hours each week patching together a
        forecast, teams get real-time, automated visibility into their cash position. It connects directly to
        the accounting tools and bank feeds the business already uses, pulling in live data and removing the
        need for manual entry. The result is a forecast that is always current, accurate, and actionable. Teams
        can see cash trends, spot risks early, and make decisions with confidence. The manual overhead
        disappears, and staff are freed up to focus on work that moves the business forward.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-cash-flow-forecasting-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Cash Flow Forecasting by Hand
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
              <h2 id="what-it-costs-to-keep-doing-cash-flow-forecasting-by-hand" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Cash Flow Forecasting by Hand
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
