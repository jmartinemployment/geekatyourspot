export default function RightCallSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing automated accounts receivable (AR) solutions can significantly improve cash flow management,
        but it&#39;s not a one-size-fits-all solution. For small businesses in Miami-Dade, Broward, and West Palm
        Beach counties, the decision to automate should be based on specific operational needs and constraints.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated AR systems are ideal for businesses struggling with inconsistent cash flow due to delayed payments
        and manual invoice tracking. If your business regularly faces situations where clients take 30, 60, or even
        90 days to settle bills, automation can transform your cash flow dynamics. Tools like Chaserhq and Versapay
        help by automating follow-ups and payment reminders, significantly reducing the time spent chasing payments.
        This allows you to focus on strategic growth rather than administrative tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, businesses dealing with high volumes of transactions can benefit immensely from automation.
        For instance, if your company processes hundreds of invoices monthly, manual tracking becomes error-prone
        and time-consuming. Automated systems, such as those offered by Invoiced and Upflow, streamline the
        invoicing process, ensuring that all payments are tracked accurately and efficiently. This reduces the risk
        of human error and ensures that your financial data is always current.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, automation may not be the best fit for every business. If your company handles a very small number
        of invoices, the cost and effort of implementing an automated AR system might outweigh the benefits. For
        businesses with simple cash flow needs and minimal transactions, traditional methods might suffice,
        providing the flexibility and control you require without the need for significant investment in technology.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, businesses with unique billing structures, such as those relying heavily on project-based or
        milestone payments, should carefully assess the capabilities of automated systems. While tools like Bill
        offer customizable invoicing options, it&#39;s crucial that the system can adapt to your specific billing
        needs without compromising accuracy or efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        In essence, the decision to move to automated AR solutions should be driven by a clear understanding of your
        business&#39;s current challenges and future goals. If your operations involve complex billing scenarios or
        high transaction volumes that strain existing resources, automation could be a game-changer. Conversely, if
        your processes are straightforward and manageable, continuing with current practices might be more
        practical.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-automated-accounts-receivable-is-the-right-call" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Automated Accounts Receivable is the Right Call
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-automated-accounts-receivable-is-the-right-call" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Automated Accounts Receivable is the Right Call
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
