export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Versapay for automated accounts receivable, small businesses must evaluate its fit based on
        specific operational needs and the pricing model. Versapay is designed to suit businesses that require a
        unified platform for invoicing, payment processing, and cash application. Its collaborative features make it
        particularly beneficial for teams that need to coordinate accounts receivable tasks across multiple
        departments.</p>
      <p className="text-md text-white shadow-text pt-3">
        Versapay&#39;s pricing model is based on the value it delivers through these integrations and automations.
        While specific pricing details are not publicly disclosed, it is structured to reflect the comprehensive
        capabilities of the platform, such as its ability to automate invoice processing and enhance collaboration.
        Businesses should consider the cost savings from reduced manual work and improved cash flow when evaluating
        the overall value of Versapay.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another critical aspect of evaluating Versapay is its scalability. The platform is built to grow with your
        business, accommodating increasing transaction volumes without compromising performance. This makes it a
        viable long-term solution for small businesses planning to expand their operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot assists clients in assessing whether Versapay is the right fit by analyzing their current
        accounts receivable processes and identifying areas for improvement. They provide insights into how Versapay
        can address specific pain points, such as delayed payments or reconciliation errors, and help quantify the
        potential return on investment.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, choosing Versapay involves weighing its comprehensive features against the specific needs of
        your business and the potential benefits it offers. With Geek @ Your Spot&#39;s guidance, businesses can
        make an informed decision, ensuring that they select a solution that not only fits their current
        requirements but also supports future growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-versapay-fit-and-pricing-model">
                Evaluating Versapay: Fit and Pricing Model
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-versapay-fit-and-pricing-model">
                Evaluating Versapay: Fit and Pricing Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
