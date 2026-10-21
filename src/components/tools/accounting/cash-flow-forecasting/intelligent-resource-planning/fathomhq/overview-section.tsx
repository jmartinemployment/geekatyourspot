import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Most small business owners in South Florida know the drill: a dozen spreadsheets for sales, a handful
        for expenses, receipts in an email folder, and a desktop accounting app that only one person really
        knows how to use. At month’s end, someone spends hours stitching the numbers together, only to find the
        totals do not match up. The result is a set of books that feel more like a patchwork than a picture of
        the business, with numbers that are out of date before the report even lands on your desk.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is the reality for many local teams in West Palm Beach, Broward and Miami-Dade. Data lives
        everywhere: in invoices, emails, and old software. Accounts staff waste hundreds of hours each year just
        cleaning, mapping, and reformatting data so it fits into a new system. The process is slow, expensive,
        and full of errors. Even after all that work, the result is too often a static spreadsheet that hides
        more than it reveals. Owners and managers get buried in numbers but never see the real story behind
        them. There is no way to spot cash leaks, model a new hire, or plan for a slow season with any
        confidence.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is where&nbsp;<Link id={`tools-accounting-intelligent-resource-planning-fathomhq-overview-intelligent-resource-planning${idSuffix}`} href="/use-cases/accounting/cash-flow-forecasting/ai-financial-planning-software" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">Intelligent Resource Planning</Link>&nbsp;changes the game. Instead of spending weeks on manual
        cleanup, automated tools pull data directly from your accounting system, invoicing software, and bank
        feeds. They turn your scattered records into live dashboards and cash flow forecasts that update as your
        business moves. Problems like delayed payments, missed expenses, or sudden budget blows stand out in
        time to act. And the numbers finally add up, because the system checks them as it goes.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, this is not about buying a bigger tool or hiring more staff. It
        is about making your existing data work for you, not the other way around. Intelligent Resource Planning
        means your books are always current, your forecasts are grounded in real numbers, and your team can
        spend time planning instead of cleaning up the past. You stop running the business blind. You get a
        clear, actionable view of your cash, on demand, not after the fact.</p>
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
