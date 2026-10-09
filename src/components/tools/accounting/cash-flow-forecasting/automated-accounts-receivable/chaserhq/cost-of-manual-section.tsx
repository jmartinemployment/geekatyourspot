import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function CostOfManualSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Managing accounts receivable manually is a common challenge for small businesses in Miami-Dade, Broward,
        and West Palm Beach. The process often involves a cycle of reacting rather than planning, leading to
        inefficiencies and financial unpredictability. With invoices piling up, businesses struggle to forecast
        when payments will be received, impacting their ability to manage cash flow effectively.</p>
      <p className="text-md text-white shadow-text pt-3">
        One major issue is the reliance on passive, calendar-based follow-ups. Staff typically check aging
        reports only on specific dates, such as the 1st or 15th of the month. This means overdue invoices can go
        unnoticed for weeks, delaying any follow-up actions. The manual nature of these checks often results in
        missed opportunities to engage clients promptly, allowing overdue invoices to linger and cash flow to
        tighten.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another challenge is the lack of a clear friction path for disputes. Invoices are frequently sent with
        missing details or are formatted in a way that&#39;s more convenient for internal use rather than client
        understanding. This can lead to clients setting invoices aside rather than addressing them, resulting in
        delays that aren&#39;t identified until much later. Without a system in place to handle disputes
        efficiently, businesses face prolonged payment cycles and increased administrative burdens.</p>
      <p className="text-md text-white shadow-text pt-3">
        Furthermore, treating high-value and low-value clients identically can misallocate resources. Staff often
        spend the same amount of time chasing small payments as they do significant ones, which is inefficient.
        This approach can drain resources without addressing the most impactful accounts, leading to cash flow
        issues that could have been avoided with prioritized follow-ups.</p>
      <p className="text-md text-white shadow-text pt-3">
        Forecasting based on &quot;best-case&quot; timelines is another pitfall. Many businesses assume all
        clients will pay on time, without considering potential delays or disputes. This optimistic view can lead
        to financial planning that lacks a buffer for unexpected issues, resulting in cash flow shortfalls. The
        absence of probability modeling for structural delays or bad debt further exacerbates this problem.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, relying on static spreadsheets for&nbsp;
        <GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>&nbsp;is a significant
        limitation. These spreadsheets quickly become outdated, failing to reflect real-time changes in
        receivables. As a result, businesses are left with inaccurate financial projections, making it difficult
        to plan effectively and respond to cash flow challenges promptly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq offers a solution by integrating collections activity with live receivables forecasts, payment
        predictions, and risk indicators. This approach provides a more dynamic and accurate view of cash flow,
        allowing businesses to manage their accounts receivable with greater confidence and efficiency.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-automated-accounts-receivable-processes">
                The Cost of Manual Automated Accounts Receivable Processes
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-automated-accounts-receivable-processes">
                The Cost of Manual Automated Accounts Receivable Processes
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
