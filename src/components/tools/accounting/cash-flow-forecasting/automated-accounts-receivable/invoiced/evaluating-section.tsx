import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Invoiced for your automated accounts receivable automation, it&#39;s essential to evaluate
        its fit for your business size and needs. Invoiced is designed to cater to a broad range of industries,
        including technology, healthcare, and professional services, making it versatile for various business types.
        Its capabilities are particularly suited for small businesses in the Miami-Dade, Broward, and West Palm
        Beach areas, where efficient cash flow management is crucial.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced&#39;s pricing model is straightforward, with subscription SaaS pricing disclosed upfront. This
        transparency allows businesses to model their return on investment without the lengthy negotiations often
        associated with enterprise software. However, specific pricing details are not publicly available, so
        it&#39;s advisable to contact Invoiced directly to get a quote tailored to your business&#39;s needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        In assessing Invoiced&#39;s fit, consider the platform&#39;s integration capabilities. Invoiced seamlessly
        integrates with popular accounting systems like QuickBooks and NetSuite, ensuring that your existing
        financial data is synchronized in real-time. This integration minimizes manual data entry, reducing errors
        and saving time. For businesses already using these systems, Invoiced offers a natural extension to their
        financial operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another factor to weigh is Invoiced&#39;s ability to automate and streamline the invoice-to-cash process.
        Its automation features, such
        as&nbsp;<GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>-driven
        collections sequences and real-time payment matching, provide significant operational efficiencies. For
        small businesses, this means reduced days sales outstanding (DSO) and improved cash flow, which are critical
        for maintaining liquidity and supporting growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot enhances the value of Invoiced by offering tailored implementation services. Their local
        expertise ensures that the platform is configured to meet the unique challenges faced by small businesses in
        South Florida. By handling the technical aspects of deployment and providing ongoing support, Geek @ Your
        Spot helps businesses maximize the benefits of Invoiced, ensuring a smooth and successful implementation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-invoiced-fit-and-pricing-model">
                Evaluating Invoiced: Fit and Pricing Model
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-invoiced-fit-and-pricing-model">
                Evaluating Invoiced: Fit and Pricing Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
