import Link from "next/link";

export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        The South Florida Small Business Crunch
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Running a small business in <strong>Miami-Dade</strong>, <strong>Broward</strong>, or <strong>Palm
        Beach</strong> costs more today than it did a few years ago. <strong>Commercial insurance
        premiums</strong>, <strong>rent</strong>, and <strong>wages</strong> have all climbed, and most owners
        cannot raise prices as fast as their costs rise. If your business brings in between <strong>$1 million
        and $15 million</strong> a year, you are large enough to carry real overhead and real compliance
        obligations. You are still too small to staff a full finance department. That gap is where most of the
        stress described in this guide comes from.</p>
      <p className="text-md text-white shadow-text pt-3">
        The region adds pressure of its own. Revenue for many businesses rises and falls with <strong>snowbird
        season</strong>, which fills restaurants, hotels, and service calendars in the winter and thins them
        out by summer. <strong>Hurricane season</strong> runs from June 1 to November 30 and can close a
        business for days at a time. Logistics companies move freight between <strong>PortMiami</strong>, <strong>Port
        Everglades</strong>, and the <strong>Port of Palm Beach</strong> on schedules that shift every week.
        Professional services firms bill clients across all three counties and wait on payments that arrive
        whenever the client gets around to them. Every one of these patterns makes cash harder to predict.</p>
      <p className="text-md text-white shadow-text pt-3">
        The compliance calendar does not slow down for any of it. Florida charges a <strong>6 percent state
        sales tax</strong>, and each county can add a <strong>discretionary sales surtax</strong> on top of
        it. Sales tax returns are due on the 1st of the month and become late after the <strong>20th</strong>. <strong>Reemployment
        tax</strong> reports are due every quarter. Counties and many cities each require their own <strong>local
        business tax receipt</strong>. Federal payroll tax deposits run on their own schedule, and <strong>1099-NEC</strong> forms
        for contractors are due by <strong>January 31</strong>. The moment you sell across state lines, other
        states can require you to collect their sales tax as well.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Why Traditional Bookkeeping Falls Behind
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Traditional bookkeeping was built to record history, not to watch the present. Someone gathers
        receipts and invoices, types them into a spreadsheet or a ledger, and reconciles the bank account
        after the month ends. By the time the books close, the numbers are often <strong>thirty days old or
        older</strong>. Decisions about inventory, seasonal hiring, and vendor payments get made in the gap
        between what happened and what the books show.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process also depends on people doing repetitive work perfectly. One person usually holds the whole
        system in their head. When that person is sick, on vacation, or hired away in a tight South Florida
        labor market, the books stall. The system itself catches no errors. They are caught later, by a
        vendor, a bank, or an auditor.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        What Black Box Anxiety Really Is
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        <strong>Black box anxiety</strong> is the fear of relying on something you cannot see inside. For some
        owners the black box is a new AI tool that might make decisions nobody reviews. For many more, the
        black box is already sitting on their desktop. It is the spreadsheet with formulas nobody fully
        understands, the bookkeeper’s private system, or the bank balance that looks healthy until a large
        payment clears. Any of these can hide a <strong>cash crunch</strong> until it is too late to act.</p>
      <p className="text-md text-white shadow-text pt-3">
        The fear is physical as well as financial. Many owners know the feeling of checking the bank app at
        two in the morning, dreading the 20th of the month, and tensing up whenever a letter from the IRS
        arrives. The stakes are personal, too. If a business withholds payroll taxes from its employees and
        fails to pay them over, the IRS can hold the owner and other responsible people <strong>personally
        liable</strong> through the <strong>Trust Fund Recovery Penalty</strong>. A mistake in the books can
        follow you home.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation done correctly is the opposite of a black box. Every entry is captured from a source
        document, every rule is written down, every approval is logged with a name and a time, and every
        exception goes to a person to decide. This guide explains where manual accounting fails, which tools
        close each gap, and how we put those tools in place without breaking the business you already run. It
        also links to our detailed guides on <Link id={`use-cases-accounting-lede-p-ap${idSuffix}`} href="/use-cases/accounting/accounts-payable/ai-ap-automation-software" className="text-[#C83803] hover:underline">Accounts
        Payable</Link>, <Link id={`use-cases-accounting-lede-p-cff${idSuffix}`} href="/use-cases/accounting/cash-flow-forecasting/ai-cash-flow-forecasting" className="text-[#C83803] hover:underline">Cash
        Flow Forecasting</Link>, and <Link id={`use-cases-accounting-lede-p-tax${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations" className="text-[#C83803] hover:underline">Tax
        Compliance &amp; Regulations</Link>.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="your-books-should-never-be-a-black-box" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Your Books Should Never Be a Black Box
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="your-books-should-never-be-a-black-box-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Your Books Should Never Be a Black Box
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
