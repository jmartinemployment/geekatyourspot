export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses, managing automated payment execution can be a daunting task. The increasing
        number of suppliers often means accommodating varied payment preferences and handling frequent
        inquiries about payment statuses. This complexity is compounded by the lack of a consistent
        electronic-payment process, leading to a reliance on manual methods that are both time-consuming and
        error-prone.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the primary issues is the manual handling of checks. Staff members spend significant time
        printing and mailing checks because there is no unified electronic payment system in place. This not
        only consumes valuable time but also introduces the risk of human error. A single slip in this manual
        process can lead to delayed payments and strained supplier relationships.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, vendor payment preferences are often tracked in spreadsheets or, worse, remembered by staff
        members. This informal system is unreliable and can lead to discrepancies that further complicate the
        payment process. When payments are approved, they still require manual delivery through various
        channels, adding another layer of inefficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Suppliers frequently call or email to inquire about invoice and payment statuses, pulling staff away
        from more strategic tasks. This constant interruption not only affects productivity but also
        increases the likelihood of errors in communication. Additionally, remittance information is
        scattered across different systems, making it difficult for suppliers to match payments with invoices
        accurately.</p>
      <p className="text-md text-white shadow-text pt-3">
        The cost of maintaining this manual approach is high. It requires a significant amount of human
        resources to manage, which could be better spent on tasks that drive business growth. The
        inefficiencies inherent in manual payment execution can stifle a business&#39;s ability to scale and
        adapt to market demands.</p>
      <p className="text-md text-white shadow-text pt-3">
        AvidXchange addresses these challenges by automating the supplier payment delivery process and
        providing vendors with better visibility into payment statuses. By streamlining these workflows,
        businesses can focus on approving payments without the burden of mailing checks or fielding
        &quot;Where is my money?&quot; calls. This automation not only enhances operational efficiency but
        also strengthens supplier relationships by ensuring timely and accurate payments.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-challenges-of-manual-automated-payment-execution">
                The Challenges of Manual Automated Payment Execution
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-challenges-of-manual-automated-payment-execution">
                The Challenges of Manual Automated Payment Execution
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
