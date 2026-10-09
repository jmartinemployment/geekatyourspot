export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Melio revolutionizes the way small businesses handle Automated Payment Execution by eliminating many
        of the tedious tasks associated with manual payment processes. One of the key benefits of Melio is
        its ability to schedule payments in advance, directly linked to your accounting software. This
        integration removes the need for duplicate data entry, saving countless hours that would otherwise be
        spent re-entering information.</p>
      <p className="text-md text-white shadow-text pt-3">
        With Melio, businesses can set up recurring payments, ensuring that routine bills are paid on time
        without manual intervention. This feature not only prevents late fees but also strengthens vendor
        relationships by maintaining consistent payment schedules. By automating these processes, Melio
        allows business owners to focus on more strategic tasks that drive growth and innovation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another significant advantage of using Melio is its ability to manage cash flow more effectively. By
        providing a centralized platform for monitoring and scheduling payments, Melio helps businesses
        maintain a healthy cash flow. The system&#39;s integration with QuickBooks enables real-time cash
        flow reporting, allowing businesses to make informed financial decisions based on accurate and
        up-to-date information.</p>
      <p className="text-md text-white shadow-text pt-3">
        Melio also offers flexibility in payment methods, including the option to pay by credit card even to
        vendors who do not accept card payments. This feature provides access to a credit card float,
        allowing businesses to manage their cash flow more effectively by deferring payments to the next
        billing cycle. This flexibility is particularly beneficial for small businesses that need to maintain
        liquidity while ensuring timely payments.</p>
      <p className="text-md text-white shadow-text pt-3">
        By automating the repetitive aspects of accounts payable, Melio significantly reduces the risk of
        errors and the time spent on manual follow-ups. The platform&#39;s ability to send automated payment
        reminders and match incoming payments to open invoices ensures that all financial transactions are
        accurately recorded and reconciled. This level of automation not only enhances efficiency but also
        provides peace of mind for business owners, knowing that their accounts payable processes are running
        smoothly.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Manage payment limitations and set payment terms by amount, team member, and vendor.&quot;&nbsp;
        <a id="tools-accounting-payment-execution-melio-transforms-source"
          href="https://melio.com/approval-workflow/"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Melio
        </a></p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-melio-transforms-automated-payment-execution">
                How Melio Transforms Automated Payment Execution
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-melio-transforms-automated-payment-execution">
                How Melio Transforms Automated Payment Execution
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
