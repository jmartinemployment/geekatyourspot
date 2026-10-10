export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq automates the automated accounts receivable process by integrating directly with your existing
        systems, providing real-time visibility and control over your cash flow. Its core functionality revolves
        around automating reminders, categorizing invoices, and predicting payment behaviors, which collectively
        enhance cash flow management.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the heart of Chaserhq is its ability to automate payment reminders. This feature allows businesses to set
        up recurring schedules for email and SMS notifications. These reminders can be customized in terms of
        content and timing, ensuring they align with the specific needs of your clients. By automating this process,
        businesses reduce the time spent on manual follow-ups and decrease the risk of late payments, ultimately
        improving cash flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq also categorizes receivables into distinct categories such as promised, disputed, at-risk, on
        track, and broken promise. This categorization helps businesses quickly identify the status of their
        invoices and prioritize their collection efforts accordingly. For instance, invoices marked as &#39;at
        risk&#39; can be flagged for immediate follow-up, ensuring that potential issues are addressed before they
        escalate.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another key feature is the late payment predictor, which uses historical payment data and behavioral
        insights to assess the risk of late payments. This predictive tool assigns a risk score to each invoice,
        helping businesses prioritize high-risk accounts and take proactive measures to secure payments. By
        leveraging this data, businesses can make informed decisions about credit control and optimize their
        collection strategies.</p>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq&#39;s automation extends to the creation of receivables forecasts. These forecasts provide a
        forward-looking view of expected payments, allowing businesses to plan their budgets and resources more
        effectively. Real-time updates ensure that forecasts reflect the most current data, eliminating the need for
        manual spreadsheets and reducing administrative burdens. This capability is particularly valuable for small
        businesses in Miami-Dade, Broward, and West Palm Beach counties, where cash flow predictability is crucial
        for growth and stability.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="chaserhqs-core-functionality-streamlining-accounts-receivable">
                Chaserhq&#39;s Core Functionality: Streamlining Accounts Receivable
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="chaserhqs-core-functionality-streamlining-accounts-receivable">
                Chaserhq&#39;s Core Functionality: Streamlining Accounts Receivable
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
