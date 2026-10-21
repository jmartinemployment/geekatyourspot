import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every week, a small business in Miami-Dade closes its books with a mix of hope and anxiety. Their sales
        team updates numbers in one spreadsheet, payroll runs from another file, and supplier invoices trickle
        in by email. With no central view, the owner learns about a cash shortfall only when the bank balance
        drops lower than expected. It is not one missed payment, it is a cycle: delayed customer collections,
        bills that pile up without warning, and a sense that the business is always reacting, never planning.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the cost of operating with scattered records and legacy tools. Small businesses in Miami-Dade, Broward, and West Palm Beach lose sleep over unpredictable accounts receivable cycles, bills that appear out of
        nowhere, and hours spent fixing errors in old spreadsheets. The real pain is not just about the time
        lost. It is about having no clear picture of what money is coming in, what is going out, and when. A
        single month of missed collections or unexpected expenses can throw off payroll, delay supplier
        payments, and put future plans on hold. For many,&nbsp;<Link id={`tools-accounting-intelligent-resource-planning-takethehelm-overview-intelligent-resource-planning${idSuffix}`} href="/use-cases/accounting/cash-flow-forecasting/ai-financial-planning-software" className="text-[#C83803] hover:underline">Intelligent Resource Planning</Link>&nbsp;remains out of reach,
        not because they do not see the benefit, but because mapping messy data into a working system seems
        impossible without blowing the budget.</p>
      <p className="text-md text-white shadow-text pt-3">
        Intelligent Resource Planning changes the equation. Instead of wrestling with manual updates and slow
        reporting, a well-implemented AI workflow connects sales, expenses, and cash flow in one place. It
        automatically pulls live numbers from your accounting tools, flags overdue payments, and gives you a
        real-time picture of your cash runway. You see what is coming before it hits. With this, small teams
        save hundreds of hours a year, cut costly errors, and make decisions based on facts, not guesses. For
        local businesses in South Florida, it means knowing if you can hire, invest, or pay yourself, without
        waiting for the next crisis to decide for you.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC builds these solutions for small businesses across West Palm Beach, Broward and
        Miami-Dade. We start by cleaning up your existing data, mapping what matters, and implementing
        affordable tools that fit your team’s real workflow. The result: a system that cuts wasted hours and
        brings clarity to your cash flow, so you grow with confidence instead of reacting to the next surprise.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
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
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
