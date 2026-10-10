export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When evaluating Chaserhq for your business, it&#39;s essential to consider both its fit within your existing
        operations and its pricing model. Chaserhq is designed to integrate seamlessly with existing financial
        systems, making it a suitable choice for businesses already using platforms like Xero. This compatibility
        ensures that Chaserhq can enhance your automated accounts receivable processes without requiring a complete
        overhaul of your current systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pricing model for Chaserhq is straightforward and transparent, with options for both monthly and annual
        plans. As noted, the monthly plan is priced at $25, while the annual plan offers a discounted rate of $250.
        This pricing structure allows businesses to choose a plan that aligns with their financial strategy, whether
        they prefer the flexibility of monthly payments or the cost savings of an annual commitment.</p>
      <p className="text-md text-white shadow-text pt-3">
        Beyond pricing, the real value of Chaserhq lies in its ability to reduce days sales outstanding (DSO) and
        improve cash flow predictability. Businesses using Chaserhq have reported an average reduction of 14 days in
        their DSO, which directly translates to improved cash flow and financial stability. This outcome is
        particularly beneficial for small businesses that rely on steady cash flow to manage day-to-day operations
        and strategic growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        When assessing Chaserhq, consider the specific challenges your business faces in automated accounts
        receivable management. If frequent late payments, manual invoice tracking, or inefficient follow-up
        processes are issues, Chaserhq offers targeted solutions to address these pain points. Its automation
        capabilities, real-time integrations, and customizable features make it a powerful tool for transforming
        your financial operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the decision to implement Chaserhq should be based on a thorough evaluation of its fit within
        your business model and its potential to deliver measurable improvements in cash flow management. Geek @
        Your Spot can assist in this evaluation, providing expert guidance on how to leverage Chaserhq&#39;s
        features to achieve your financial goals effectively.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-chaserhq-fit-and-pricing-model">
                Evaluating Chaserhq: Fit and Pricing Model
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-chaserhq-fit-and-pricing-model">
                Evaluating Chaserhq: Fit and Pricing Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
