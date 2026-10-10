export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For many small businesses in Miami-Dade, Broward, and West Palm Beach counties, managing accounts receivable
        remains a daunting task. The absence of a reliable system to convert receivables data into actionable
        insights often results in inefficiencies that are costly both in time and resources. Upflow addresses these
        challenges by integrating AR analytics, collections workflows, and billing-cohort-based forecasting into a
        cohesive platform.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the primary issues is the passive nature of collections follow-ups. Typically, finance teams check
        aging reports only on specific dates, such as the 1st or 15th of the month. This delay means invoices can
        sit unpaid for weeks before any action is taken. Upflow disrupts this cycle by automating follow-ups,
        ensuring that reminders are sent as soon as invoices become overdue, rather than waiting for a manual check.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another common problem is the lack of a clear process for handling disputes. Invoices often lack clarity,
        with missing details or vague descriptions that lead to confusion and delays. Clients may set these invoices
        aside, waiting for the business to initiate follow-up weeks later. Upflow&#39;s platform provides a
        structured approach to managing such disputes, enabling businesses to address issues proactively and reduce
        the time invoices remain unpaid.</p>
      <p className="text-md text-white shadow-text pt-3">
        Furthermore, businesses frequently treat all clients the same, regardless of the invoice amount. This
        results in equal time being spent on low-value invoices as on high-value ones, which is not an efficient use
        of resources. Upflow&#39;s customer segmentation capabilities allow businesses to prioritize high-value
        clients and invoices, ensuring that critical payments are chased first, optimizing cash flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Forecasting based on &quot;best-case&quot; timelines is another area where traditional methods fall short.
        Many businesses assume that all clients will pay on time, leading to overly optimistic cash flow projections
        that do not account for potential delays or bad debts. Upflow changes this by using actual payment behavior
        to build forecasts, providing a more accurate picture of future cash inflows.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;A forecast built on actual payment behaviour is a different thing entirely: it reflects the
        distribution of when money genuinely arrives, including the invoices that slip past 30 days, the customers
        who consistently pay late, and the months where collections run slow for reasons nobody
        predicted.&quot;&nbsp;
        <a id="tools-accounting-accounts-receivable-upflow-challenges-source"
          href="https://upflow.io/software/best-cash-flow-forecasting"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Upflow
        </a></p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, the inconsistencies in follow-ups across a growing customer base can lead to missed payments and
        strained relationships. Upflow standardizes the process, ensuring that every customer receives timely and
        consistent communication. This not only improves the likelihood of on-time payments but also enhances
        customer satisfaction.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-challenges-of-manual-automated-accounts-receivable">
                The Challenges of Manual Automated Accounts Receivable
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-challenges-of-manual-automated-accounts-receivable">
                The Challenges of Manual Automated Accounts Receivable
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
