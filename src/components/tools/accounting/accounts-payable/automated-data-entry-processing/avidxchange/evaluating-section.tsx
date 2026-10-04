export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering AvidXchange for automating accounts payable (AP), businesses should weigh its fit for
        their specific needs, its pricing model, and how it compares to other solutions. AvidXchange is designed
        to streamline invoice management and automate payment processes, which is ideal for small and
        medium-sized businesses looking to reduce manual work and increase efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        One key aspect to evaluate is the alignment of AvidXchange with your existing systems. It integrates
        seamlessly with Microsoft platforms, offering API integrations with Business Central and GP, and
        file-based integrations with AX, NAV, F&amp;O, and SL. This ensures that your current accounting systems
        can remain intact while enhancing your AP processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing is another crucial factor. While specific pricing details are not outlined in the available
        data, businesses should consider the value of features like going paperless, reducing manual data entry
        errors, and increasing operational efficiencies. These capabilities can lead to significant cost savings
        and better resource allocation, which are important considerations when evaluating the overall
        cost-effectiveness of implementing AvidXchange.</p>
      <p className="text-md text-white shadow-text pt-3">
        Potential buyers should also consider the adjacent approaches they might weigh against AvidXchange. The
        choice often comes down to the level of automation and integration needed, as well as the specific pain
        points a business faces in its current AP processes. AvidXchange&#39;s ability to automate invoice and
        payment processing, coupled with its integration capabilities, makes it a strong contender for
        businesses seeking a comprehensive AP solution.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;AvidXchange automates your B2B payments and integrates with your existing AP process so you can
        monetize electronic payments at scale—without changing banks or accounting systems.&quot;&nbsp;
        <a id="tools-accounting-avidxchange-evaluating-source"
          href="https://www.avidxchange.com/corporate-payments/"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          AvidXchange
        </a></p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-avidxchange-fit-and-pricing-considerations">
                Evaluating AvidXchange: Fit and Pricing Considerations
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-avidxchange-fit-and-pricing-considerations">
                Evaluating AvidXchange: Fit and Pricing Considerations
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
