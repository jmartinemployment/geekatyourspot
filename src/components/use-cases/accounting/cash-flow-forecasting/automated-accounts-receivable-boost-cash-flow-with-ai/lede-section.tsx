import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Picture this: your business is functioning as an interest-free bank for your clients, holding onto $50,000
        in outstanding invoices. Each day these invoices remain unpaid, your financial stability is compromised,
        making it difficult to confidently plan for payroll, hiring, or inventory investments. This is the reality
        for many small businesses, relying on outdated accounts receivable processes that treat unpaid invoices as
        guaranteed income rather than variables.</p>
      <p className="text-md text-white shadow-text pt-3">
        The crux of the issue lies in passive, calendar-based follow-ups. Many businesses only review their accounts
        receivable reports bi-monthly, allowing invoices to sit past due for weeks before any action is taken. This
        delay not only affects your cash flow but also leaves you unprepared for disputes—often caused by invoices
        that lack clarity or essential details. Moreover, the same amount of time is spent chasing small utility
        reimbursements as is spent on significant milestone payments, leading to inefficient labor allocation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Financial projections often rely on best-case scenarios, assuming every client will pay on time. This lack
        of contingency planning transforms&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow
        forecasting</GlossaryLink>&nbsp;into guesswork, leaving your business vulnerable to unexpected delays or bad
        debt. To break free from this cycle, businesses must embrace modern automated accounts receivable solutions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated AR solutions, like those offered by Chaser or Stripe Invoicing, leverage
        behavioral&nbsp;<GlossaryLink slug="predictive-analytics">predictive analytics</GlossaryLink>&nbsp;to
        provide a realistic view of cash flow. By tracking real payment behaviors and adjusting forecasts based on
        data-driven expected payment dates, these platforms bring accuracy and reliability to your financial
        planning. Automated, humanized email cadences adjust their tone based on client history, while centralized
        communication logs ensure that any disputes or payment promises are documented and managed effectively.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="transforming-cash-flow-with-automated-accounts-receivable" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Transforming Cash Flow with Automated Accounts Receivable
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
              <h2 id="transforming-cash-flow-with-automated-accounts-receivable" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Transforming Cash Flow with Automated Accounts Receivable
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
