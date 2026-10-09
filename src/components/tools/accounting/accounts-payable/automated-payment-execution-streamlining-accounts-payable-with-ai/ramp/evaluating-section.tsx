export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Ramp for Automated Payment Execution, small businesses should focus on three main
        areas: fit for their specific needs, the pricing model, and how it compares to other available
        solutions. Ramp offers a robust platform designed to automate and streamline accounts payable
        processes, but it&#39;s essential to determine if its features align with your business
        requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        Fit is crucial. Ramp is tailored for businesses looking to reduce manual work and enhance efficiency in
        their payment processes. Its autonomous AP software transforms manual tasks into automated workflows,
        significantly reducing the time spent on processing invoices and payments. This is particularly
        beneficial for businesses that handle a high volume of transactions and need to maintain accuracy and
        speed without increasing headcount.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ramp&#39;s pricing model is another factor to consider. While the vendor offers a free tier accessible
        for smaller teams, businesses should evaluate the features included at different pricing levels. The
        free tier provides a starting point for businesses new to automation, but as needs grow, the Plus or
        Enterprise tiers might offer additional functionalities that justify the investment. It&#39;s
        important to weigh the cost against the potential savings in time and error reduction.</p>
      <p className="text-md text-white shadow-text pt-3">
        Comparing Ramp to other solutions like AvidXchange and BILL, Ramp stands out with its comprehensive
        approach to spend management. It not only automates payments but also integrates expense management
        and procurement tools, offering a unified platform for complete spend control. This integration can be
        a deciding factor for businesses looking to consolidate their financial operations under one roof.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, Ramp&#39;s AI-driven features, such as intelligent invoice capture and automated PO
        matching, provide significant advantages over traditional platforms. These capabilities ensure that
        invoices are processed faster and with greater accuracy, which can be a game-changer for businesses
        struggling with manual data entry and approval bottlenecks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the decision to choose Ramp should be based on a thorough evaluation of how well its
        features align with your business&#39;s specific needs and goals. Consider the scale of your
        operations, the complexity of your payment processes, and the potential return on investment from
        automating these tasks. By focusing on these factors, businesses can make an informed decision that
        supports their growth and operational efficiency.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-ramp-for-automated-payment-execution">
                Evaluating Ramp for Automated Payment Execution
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-ramp-for-automated-payment-execution">
                Evaluating Ramp for Automated Payment Execution
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
