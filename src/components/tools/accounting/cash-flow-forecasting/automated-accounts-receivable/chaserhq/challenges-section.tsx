export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For many small businesses in Miami-Dade, Broward, and West Palm Beach counties, managing accounts receivable
        manually is a drain on resources. The reliance on outdated methods such as spreadsheets and manual
        follow-ups can lead to significant inefficiencies. Staff often check the aging accounts receivable report
        only on specific dates, like the 1st or 15th of the month. This means that invoices can sit past due for
        weeks without action, leading to cash flow instability.</p>
      <p className="text-md text-white shadow-text pt-3">
        One major issue with manual processes is the lack of a clear path for handling disputes. Invoices are
        frequently sent out with missing details or vague line items, optimized for internal tracking rather than
        client understanding. This lack of clarity invites clients to delay payments until the business follows up,
        which can take weeks. The absence of a structured approach to resolving these disputes further compounds the
        problem.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, businesses often treat all clients the same, regardless of their value. This means that staff
        spend as much time chasing a $200 utility reimbursement as they do a $20,000 milestone payment. This
        misallocation of labor can dry up cash reserves, as attention is not focused on high-value clients who can
        significantly impact cash flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Forecasting cash flow based on &quot;best-case&quot; timelines is another pitfall. Many businesses assume
        every client will pay on time, without accounting for potential delays, disputes, or bad debt. This leads to
        financial projections that are overly optimistic and do not provide a realistic picture of the
        business&#39;s financial health. Owners often send reminders only when cash becomes tight, rather than as
        part of a proactive strategy.</p>
      <p className="text-md text-white shadow-text pt-3">
        The reliance on manual processes also means that disputes and installment arrangements often sit outside the
        forecast. Accountants update cash spreadsheets that quickly become stale, as they do not reflect real-time
        information. This lack of accurate, up-to-date data makes it difficult for businesses to plan effectively
        and can lead to missed opportunities for growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq addresses these issues by connecting collections activity with live receivables forecasts and
        payment predictions. This integration allows businesses to automate customer follow-ups and gain a clearer
        view of when payments are likely to arrive. By eliminating the manual workload and providing more accurate
        forecasting, Chaserhq helps businesses manage their cash flow more effectively and focus on growth rather
        than collections.</p>
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
