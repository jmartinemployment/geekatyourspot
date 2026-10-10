export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Bill for your business, understanding its fit and pricing model is essential. Bill is
        particularly suited for small to midsize businesses that need to automate their automated accounts
        receivable processes without the complexity of larger enterprise solutions. Its features are designed to
        streamline invoicing, payment tracking, and customer follow-ups, making it an ideal choice for businesses in
        Miami-Dade, Broward, and West Palm Beach counties.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pricing model for Bill is straightforward and transparent, starting at $49 per user per month. This
        simplicity is appealing to small businesses that may not have the resources for extensive negotiations or
        custom pricing models. The cost includes access to all core features, allowing businesses to automate their
        accounts receivable processes without worrying about hidden fees or unexpected charges.</p>
      <p className="text-md text-white shadow-text pt-3">
        When evaluating Bill, it&#39;s important to consider how well it integrates with your existing systems. Bill
        offers seamless integration with major accounting software like QuickBooks and Xero, which can significantly
        reduce the time and effort required for data entry and reconciliation. This integration is a key factor for
        businesses looking to maintain accurate financial records while automating their automated accounts
        receivable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another critical aspect to consider is the level of support and customization available. While Bill is
        designed to be user-friendly, having access to expert support can make a significant difference in how
        effectively you can implement and utilize the platform. Geek @ Your Spot provides this support, offering
        personalized consultations and training to ensure that Bill is configured to meet your specific needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, choosing Bill means investing in a solution that not only addresses your current challenges but
        also scales with your business. Its pricing model and integration capabilities make it a practical choice
        for small businesses looking to enhance their accounts receivable operations without overextending their
        budget.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-bill-fit-and-pricing-model">
                Evaluating Bill: Fit and Pricing Model
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-bill-fit-and-pricing-model">
                Evaluating Bill: Fit and Pricing Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
