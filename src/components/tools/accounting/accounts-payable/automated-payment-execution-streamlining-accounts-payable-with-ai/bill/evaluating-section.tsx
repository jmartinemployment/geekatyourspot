export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Bill for Automated Payment Execution, small businesses should focus on several key
        areas: fit, pricing model, and alternative solutions. Bill excels in automating payment processes,
        offering a streamlined approach that reduces manual entry and speeds up approvals. This efficiency is
        crucial for businesses looking to save time and reduce errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill&#39;s integration capabilities are a significant advantage. It seamlessly syncs with popular
        accounting software like Xero and NetSuite, ensuring that financial data flows smoothly without the
        need for manual intervention. This feature alone can save hours each week, allowing businesses to
        focus on strategic growth rather than administrative tasks. For companies already using these
        platforms, Bill&#39;s integration offers an added layer of convenience and efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        In terms of pricing, Bill offers a model that grows with your business. While the exact pricing can
        vary, the platform is designed to accommodate both small and mid-sized enterprises, providing
        flexibility as your needs evolve. It&#39;s important to consider the cost against the time savings
        and error reduction that Bill delivers. For many, the investment pays off quickly through increased
        productivity and fewer payment errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        When weighing Bill against other automated payment solutions, consider the specific needs of your
        business. If your operations require robust integration with existing accounting systems and a
        user-friendly interface, Bill is a strong contender. Its ability to automate complex payment workflows
        and provide real-time visibility into financial operations makes it a valuable tool for managing
        accounts payable efficiently.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, it&#39;s also wise to evaluate alternative solutions. Tools like Tipalti and AvidXchange
        offer similar capabilities, each with unique features that may better suit certain business models.
        For example, if international payments and compliance are a priority, comparing Bill’s offerings with
        those of its competitors could reveal additional benefits or constraints.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the decision should rest on how well Bill aligns with your business goals and operational
        needs. Consider engaging with a consultancy like Geek @ Your Spot, which can provide tailored advice
        and implementation support to ensure that Bill integrates seamlessly into your existing systems,
        maximizing its potential benefits.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-bill-for-automated-payment-execution">
                Evaluating Bill for Automated Payment Execution
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-bill-for-automated-payment-execution">
                Evaluating Bill for Automated Payment Execution
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
