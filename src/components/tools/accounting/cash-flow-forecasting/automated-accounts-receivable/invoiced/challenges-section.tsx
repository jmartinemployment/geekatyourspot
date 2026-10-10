export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For many small businesses in Miami-Dade, Broward, and West Palm Beach counties, managing accounts receivable
        manually is a cumbersome process that drains time and resources. Invoices are often created and sent
        manually, leading to delays and errors. This manual handling extends to follow-ups, where staff must write
        individual emails to chase payments, a task that consumes valuable hours and often yields inconsistent
        results.</p>
      <p className="text-md text-white shadow-text pt-3">
        The traditional approach to collections is reactive. Staff typically review aging reports bi-monthly,
        allowing overdue invoices to linger unattended for weeks. During this time, cash flow forecasts become
        unreliable, as they are based on best-case scenarios that assume timely payments. This lack of proactive
        management results in financial projections that do not account for potential delays, disputes, or bad debt.</p>
      <p className="text-md text-white shadow-text pt-3">
        Disputes further complicate the process. Invoices often lack clarity, with vague line items or missing
        details that confuse clients. This leads to delays as clients shelve unclear invoices until prompted for
        payment. The absence of a structured dispute resolution process means these issues can remain unresolved for
        extended periods, impacting cash flow and client relationships.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another challenge is the equal treatment of all clients, regardless of their payment size. Staff spend the
        same amount of time chasing small payments as they do large ones, which misallocates resources and leaves
        significant amounts of cash tied up in receivables. This inefficiency can strain a business&#39;s financial
        health, especially when high-value clients are not prioritized.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced offers a solution that addresses these issues by automating the invoice-to-cash lifecycle. By
        connecting all steps from invoice issuance to cash recording, businesses can streamline processes, reduce
        manual errors, and improve cash flow forecasts. This automation allows staff to focus on strategic tasks
        rather than administrative burdens, ultimately leading to better financial management and growth potential.</p>
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
