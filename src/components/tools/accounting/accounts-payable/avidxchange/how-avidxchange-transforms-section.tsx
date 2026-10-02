export default function HowAvidxchangeTransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        AvidXchange significantly streamlines the accounts payable process by automating key functions. This
        automation reduces the need for manual data entry, which not only minimizes errors but also saves
        valuable time for AP teams. With the use of AI and machine learning, AvidXchange captures data from
        invoice headers and line-item levels accurately, ensuring precise data entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        By going paperless, businesses can cut down on operational costs and increase efficiency. AvidXchange
        allows companies to handle invoices and payments digitally, reducing the reliance on paper and the
        associated risks of document loss. This digital transformation provides greater control over the AP
        workflow, enabling businesses to manage approvals and track invoice statuses in real-time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, AvidXchange enhances payment security and speeds up the payment process. Suppliers are paid
        faster and more securely, which helps maintain strong business relationships. The solution also reduces
        the risk of fraud by implementing automated checks and controls that are difficult to achieve with
        manual systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        The integration capabilities of AvidXchange are particularly beneficial for businesses using Microsoft
        products. It seamlessly integrates with existing systems, allowing for a smooth transition to automated
        processes without the need to overhaul current setups. This integration ensures that businesses can
        continue using their existing accounting systems while benefiting from the efficiencies of
        automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        In essence, AvidXchange removes the tedious aspects of the AP process, freeing up teams to focus on more
        strategic and fulfilling work. By doing so, businesses can not only improve their bottom line but also
        position themselves for future growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-avidxchange-transforms-your-accounts-payable-process">
                How AvidXchange Transforms Your Accounts Payable Process
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-avidxchange-transforms-your-accounts-payable-process">
                How AvidXchange Transforms Your Accounts Payable Process
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
