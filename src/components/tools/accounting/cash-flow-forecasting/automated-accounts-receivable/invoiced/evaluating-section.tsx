import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Invoiced for Automated Accounts Receivable, start by assessing how it fits your
        business size and needs. Invoiced is designed to automate and streamline the entire invoice-to-cash
        process, which can free up significant time for small business owners in Miami-Dade, Broward, and West
        Palm Beach counties. This platform is particularly effective for businesses that handle a high volume
        of invoices and need to improve&nbsp;
        <GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced offers a subscription-based pricing model, which means you can plan your budget without the
        uncertainty of hidden fees. This transparency allows finance leaders to model ROI accurately, avoiding
        lengthy negotiations just to understand costs. While specific pricing details are not disclosed here,
        you can expect upfront clarity that simplifies financial planning.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key considerations is Invoiced&#39;s ability to integrate seamlessly with existing systems
        like NetSuite. This integration ensures that your data is synchronized in real-time, reducing manual
        entry and the risk of errors. This is crucial for businesses that rely heavily on accurate data for
        decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, Invoiced supports a wide range of payment methods, including ACH, credit cards, and over
        1,200 other methods. This flexibility caters to diverse client preferences, ensuring that payment
        collection is smooth and efficient. If your business operates in multiple regions, this feature helps
        maintain a streamlined invoice-to-cash cycle across different markets.</p>
      <p className="text-md text-white shadow-text pt-3">
        When comparing Invoiced to other platforms, consider its&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>-driven capabilities. Features like Smart Chasing and CashMatch
        AI automate collections and payment matching, reducing the time spent on manual tasks and improving
        cash flow management. These tools can lead to a significant reduction in Days Sales Outstanding (DSO),
        which is a critical metric for assessing collection efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced is particularly beneficial for businesses that need to automate repetitive tasks and gain
        real-time insights into their accounts receivable. However, for companies with minimal invoicing needs
        or those that prefer manual processes, the investment in a comprehensive platform like Invoiced might
        not be necessary. Evaluate your current challenges and desired outcomes to determine if Invoiced aligns
        with your strategic goals.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-invoiced-for-your-business-needs">
                Evaluating Invoiced for Your Business Needs
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-invoiced-for-your-business-needs">
                Evaluating Invoiced for Your Business Needs
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
