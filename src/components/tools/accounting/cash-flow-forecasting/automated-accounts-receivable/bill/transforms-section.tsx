export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Bill revolutionizes the automated accounts receivable process by automating tasks that traditionally consume
        significant time and resources. By implementing Bill, businesses can automate invoicing, reminders, and
        payment collection, freeing up valuable time for owners and staff to focus on growth and customer service.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the standout features of Bill is its ability to automate invoice generation and delivery. This
        feature ensures that invoices are sent out promptly and consistently, reducing the risk of delays caused by
        manual oversight. Automated invoicing not only speeds up the billing process but also enhances accuracy,
        minimizing errors that can lead to payment disputes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill also offers automated payment reminders, which significantly reduce the need for manual follow-up.
        These reminders are sent to customers who have not paid by a certain date, ensuring that clients are
        consistently reminded of their obligations. This feature helps maintain a steady cash flow by encouraging
        timely payments without requiring constant staff intervention.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, Bill provides a variety of convenient payment options for customers, including ACH and credit card
        payments. This flexibility allows businesses to cater to their clients&#39; preferences, making it easier
        for customers to settle their invoices promptly. By simplifying the payment process, Bill helps reduce the
        time and effort required to collect payments.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses with repeat customers, Bill&#39;s system supports authorized repeat payments, automating
        collections for recurring transactions. This feature eliminates the need for customers to manually initiate
        each payment, ensuring that payments are processed on time and without hassle.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill&#39;s integration capabilities further enhance its effectiveness. By syncing with popular accounting
        software like QuickBooks and Xero, Bill ensures that financial records are always up-to-date, reducing the
        need for manual data entry and minimizing the risk of errors. This seamless integration allows businesses to
        maintain accurate financial records effortlessly, improving overall financial management.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Bill transforms the accounts receivable process by automating key tasks, reducing manual
        workload, and improving cash flow stability. By removing the burden of manual invoicing and payment
        collection, Bill allows business owners to focus on what truly matters—growing their business and serving
        their customers.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-bill-transforms-automated-accounts-receivable">
                How Bill Transforms Automated Accounts Receivable
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-bill-transforms-automated-accounts-receivable">
                How Bill Transforms Automated Accounts Receivable
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
