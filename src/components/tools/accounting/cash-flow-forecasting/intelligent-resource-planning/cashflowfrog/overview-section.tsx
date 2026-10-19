import Link from "next/link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Most small businesses in South Florida know the pain of chasing a true cash position. The finance lead
        pulls numbers from three different spreadsheets, a desktop accounting app, and a handful of emailed
        invoices, only to spend hours patching together a cash flow snapshot that is already outdated. Every
        manual step introduces risk: a typo here, a missed payment there, and suddenly the forecast is off by
        thousands. Even a small error can mean thinking payroll is covered when it is not, or missing a vendor
        payment that tanks a hard-won relationship. These headaches are not rare, they are practically routine,
        especially when the books are scattered and no one on the team is a full-time accountant.</p>
      <p className="text-md text-white shadow-text pt-3">
        The root problem is not just the chaos of uncollected data; it is the manual process itself. Formatting
        and mapping that messy pile into a single, reliable forecast eats up billable hours and wears down staff
        who should be focused on sales, not spreadsheets. Even the best spreadsheet can only show a
        backward-looking snapshot unless someone updates it daily, and that rarely happens. By the time the
        numbers are pulled together, they are already stale, and the business is making decisions on last
        week&#39;s reality, not today&#39;s. Missed cues lead to bounced checks, surprise cash gaps, and a
        constant scramble to cover shortfalls. That manual overhead costs more than time; it erodes trust in the
        numbers and the team.</p>
      <p className="text-md text-white shadow-text pt-3">
        <Link id="tools-accounting-intelligent-resource-planning-cashflowfrog-overview-intelligent-resource-planning" href="/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business" className="text-[#C83803] hover:underline">Intelligent Resource Planning</Link>&nbsp;was built to end this cycle. It connects directly to accounting tools and
        banks, pulls in real transaction data, and runs live forecasts without manual entry. That means
        real-time visibility, always current numbers, and no more guessing about whether the business can afford
        next week&#39;s payroll. Instead of spending hours cleaning up the past, teams can plan the future,
        testing what-if scenarios, spotting cash dips before they hit, and making informed calls with
        confidence. For small businesses in West Palm Beach, Broward, and Miami-Dade, this shift is not about
        fancy tech. It is about finally having the clarity and control to grow without adding headcount or
        blowing up the budget.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot specializes in cutting through the noise: we help local teams replace error-prone
        manual cash flow processes with automated, intelligent solutions that show exactly where the business
        stands, today, not last quarter. Small businesses do not need another complex system to manage. They
        need a tool that fits the way they already work, gives answers in plain English, and scales as they
        grow. Intelligent Resource Planning is the difference between being blindsided by cash surprises and
        running a business that is ready for what comes next.</p>
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
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
