export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In the landscape of automated accounts receivable solutions, Chaserhq stands out by offering a comprehensive
        suite of features that streamline the invoicing and payment process. However, businesses often compare it
        with other tools like Versapay and Invoiced, which also promise to enhance cash flow management.
        Understanding how Chaserhq differentiates itself is crucial for businesses evaluating these solutions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq excels in providing real-time updates and a high degree of customization. Its integration
        capabilities with platforms like Xero and Stripe make it a versatile choice for businesses that need
        seamless connectivity with their existing financial systems. This integration ensures that all financial
        data is up-to-date and accurate, reducing the risk of errors that can occur with manual data entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another key feature that sets Chaserhq apart is its receivables forecasting. This feature allows finance
        teams to gain a clear, forward-looking view of expected payments, helping them plan budgets and prioritize
        at-risk accounts. Unlike some competitors that rely on static reports, Chaserhq provides dynamic, real-time
        data that adjusts as payments are made or delayed. This adaptability is particularly beneficial for
        businesses facing frequent changes in cash flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq also offers a robust set of automation tools for managing payment reminders. Businesses can set up
        recurring schedules and customize the content and timing of reminders, ensuring that communication is always
        aligned with customer preferences. This level of automation not only saves time but also improves the
        likelihood of on-time payments, which is a critical factor for maintaining healthy cash flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        While Versapay and Invoiced offer similar automation features, Chaserhq&#39;s emphasis on real-time data and
        integration with accounting systems provides a more comprehensive solution. This is particularly
        advantageous for small businesses in South Florida, where cash flow predictability is essential for growth
        and stability. By choosing Chaserhq, businesses can benefit from a solution that not only automates accounts
        receivable but also provides the insights needed to make informed financial decisions.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="comparing-chaserhq-with-other-automated-accounts-receivable-solutions">
                Comparing Chaserhq with Other Automated Accounts Receivable Solutions
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="comparing-chaserhq-with-other-automated-accounts-receivable-solutions">
                Comparing Chaserhq with Other Automated Accounts Receivable Solutions
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
