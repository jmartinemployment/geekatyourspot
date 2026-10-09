import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every month, small business owners in Miami-Dade, Broward, and West Palm Beach counties find themselves
        tangled in a web of spreadsheets and paperwork. Managing accounts receivable manually is a tedious task
        that eats away at valuable time and resources. For many, this process involves chasing down late
        payments, reconciling accounts by hand, and attempting to predict cash flow with incomplete data. The
        result? Missed opportunities, strained cash flow, and a constant cycle of financial guesswork that can
        hinder growth and stability.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated Accounts Receivable is changing this narrative by streamlining the entire process. By
        leveraging&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;and automation, businesses can transform how they handle
        their receivables, gaining accurate&nbsp;
        <GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>&nbsp;and real-time
        insights. Solutions like the&nbsp;
        <a id="tools-accounting-accounts-receivable-invoiced-overview-platform"
          href="https://www.invoiced.com/solutions/use-cases/invoiced-to-cash"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Invoiced platform
        </a>&nbsp;automate everything from invoice generation to payment collection, allowing business owners
        to focus on strategic decisions rather than administrative tasks. These tools provide precise
        forecasting, letting businesses know exactly when to expect payments, which accounts need attention, and
        how to optimize their cash flow.</p>
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
