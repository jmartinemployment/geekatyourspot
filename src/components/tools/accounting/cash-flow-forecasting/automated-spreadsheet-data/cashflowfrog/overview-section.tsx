import Link from "next/link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Imagine a small business owner in Miami-Dade County, staring at a cluttered spreadsheet late into the night.
        Each row holds a piece of their financial puzzle, but the full picture remains elusive. They&#39;re trying
        to forecast their cash flow, but the numbers refuse to align. This is the reality for many small businesses
        struggling with fragmented business metrics. Operational forecasting often breaks down when users can&#39;t
        drill into the specifics of tracking classes, locations, departments, or customer behaviors. These gaps lead
        to missed opportunities, misallocated resources, and financial blind spots.</p>
      <p className="text-md text-white shadow-text pt-3">
        Now picture a different scenario. The same business owner, but this time, armed with automated&nbsp;<Link id="tools-accounting-spreadsheet-data-cashflowfrog-overview-spreadsheet-data" href="/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting" className="text-[#C83803] hover:underline">spreadsheet data</Link>. Instead of sifting through endless rows, they can break down their cash flow forecast by vendor,
        customer, and department with just a few clicks. They can drill three levels deep into any forecasted
        figure, tracing every dollar to its source invoice or bill. This level of detail not only clarifies where
        their money is going but also highlights where it should be going. With tools like Cash Flow Frog,
        businesses can transform their financial outlook from reactive guesswork to proactive planning.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated spreadsheet data doesn&#39;t just simplify forecasting; it reshapes it. By integrating with
        existing accounting systems, these tools use real-time data to provide a comprehensive view of cash flow.
        They allow small businesses to see not just the current state of their finances but also to project future
        scenarios with accuracy. This enables business owners to plan strategically, whether it&#39;s deciding on a
        new hire, managing payroll, or navigating a slow sales period. The power of automation lies in its ability
        to turn complex data into simple, actionable insights, empowering businesses to make informed decisions.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
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
