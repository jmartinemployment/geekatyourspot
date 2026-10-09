export default function MechanicsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq provides a robust framework for managing Automated Accounts Receivable by categorizing
        receivables into actionable segments. This segmentation includes categories like promised, disputed, and
        at-risk cash, which helps businesses prioritize tasks and address potential issues before they escalate.
        This approach not only increases efficiency but also ensures a clear view of expected payments, enabling
        businesses to plan with confidence. The system is built on a foundation that integrates seamlessly with
        existing accounting systems, providing real-time updates and eliminating the need for manual
        spreadsheets.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the core of Chaserhq&#39;s functionality is its receivables forecasting feature. This provides a
        forward-looking view of expected payments, allowing finance teams to see when income is likely to arrive
        and where risks exist. By leveraging real-time data from connected accounting systems, Chaserhq updates
        forecasts to account for overdue invoices, disputes, expected payment dates, and installment plans. This
        ensures that businesses are always working with the most accurate and up-to-date information.</p>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq&#39;s architecture also includes a relationship dashboard that identifies repeat late payers,
        high-value overdue invoices, and normally reliable customers whose current payment is late. This feature
        allows businesses to distinguish between cash supported by normal behavior and cash that depends on
        resolving known issues. The dashboard provides a comprehensive view of a company&#39;s receivables
        landscape, enabling better decision-making and prioritization of collection efforts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another key component is Chaserhq&#39;s late payment predictor, which plays a crucial role in assessing
        the risk associated with specific customers. This predictive tool analyzes factors such as invoice due
        dates, values, and payment behavior to categorize invoices into low, medium, or high-risk brackets.
        Additionally, it provides a percentage score indicating the likelihood of timely payment, allowing
        businesses to make informed credit control decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq enhances payment processes by integrating with platforms like Stripe and Xero, facilitating easy
        payment collection and real-time cash flow visibility. This integration allows businesses to offer
        multiple payment options, including credit cards, bank transfers, and digital wallets, directly from
        payment reminders. The system&#39;s architecture is designed to be flexible, supporting a wide range of
        payment methods to cater to diverse customer preferences.</p>
      <p className="text-md text-white shadow-text pt-3">
        Overall, Chaserhq&#39;s mechanics and architecture are tailored to streamline Automated Accounts
        Receivable processes, reducing manual workloads and enhancing cash flow predictability. Its ability to
        integrate with existing systems and provide real-time insights makes it a powerful tool for businesses
        looking to optimize their receivables management.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-chaserhq-operates-mechanics-and-architecture">
                How Chaserhq Operates: Mechanics and Architecture
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-chaserhq-operates-mechanics-and-architecture">
                How Chaserhq Operates: Mechanics and Architecture
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
