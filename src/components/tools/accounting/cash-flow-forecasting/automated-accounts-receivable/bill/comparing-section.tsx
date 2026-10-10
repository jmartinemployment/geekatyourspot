export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When evaluating accounts receivable solutions, small businesses often encounter a myriad of options. Bill
        stands out among these for its seamless integration and automation capabilities. Unlike many platforms that
        require extensive manual input, Bill automates the invoicing process, reducing the time spent on
        administrative tasks. This is particularly beneficial for businesses in South Florida, where manual
        processes can be a drain on resources.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill&#39;s integration with popular accounting software like QuickBooks, Xero, and Sage Intacct provides a
        significant advantage over solutions that lack such connectivity. This integration ensures that all
        financial data is synchronized, reducing errors and providing real-time insights into cash flow. This is
        crucial for small businesses that need to manage their finances efficiently without dedicating excessive
        time to data entry and reconciliation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another key differentiator is Bill&#39;s ability to automate payment reminders and invoice tracking.
        Competing solutions often require manual follow-ups, which can lead to missed payments and strained customer
        relationships. With Bill, businesses can set automated reminders, ensuring that clients are nudged to pay on
        time without the need for constant oversight. This feature not only improves cash flow but also enhances
        customer satisfaction by reducing the likelihood of disputes over missed payments.</p>
      <p className="text-md text-white shadow-text pt-3">
        While some solutions offer similar automation features, Bill&#39;s pricing model is transparent and
        competitive, starting at $49 per user per month. This contrasts with other platforms that may have hidden
        fees or require lengthy negotiations to determine pricing. For small businesses, this transparency is
        valuable as it allows for better budgeting and financial planning.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Bill may not be the best fit for businesses seeking extensive customization beyond standard
        features. Some larger enterprises might require more tailored solutions that Bill does not offer. In such
        cases, platforms with extensive customization capabilities might be more suitable, although they often come
        with a higher price tag and complexity.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Bill is an excellent choice for small to midsize businesses looking for a reliable, automated
        accounts receivable solution that integrates seamlessly with existing systems. Its competitive pricing and
        robust feature set make it a strong contender in the market, especially for businesses in South Florida
        seeking to streamline their financial operations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="comparing-bill-with-other-accounts-receivable-solutions">
                Comparing Bill with Other Accounts Receivable Solutions
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="comparing-bill-with-other-accounts-receivable-solutions">
                Comparing Bill with Other Accounts Receivable Solutions
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
