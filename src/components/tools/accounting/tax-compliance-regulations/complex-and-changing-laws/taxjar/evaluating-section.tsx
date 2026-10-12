import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Choosing the
        right&nbsp;<GlossaryLink slug="tax-compliance" className="text-[#0B162A] hover:underline">tax
        compliance</GlossaryLink>&nbsp;tool is critical for small businesses navigating complex tax laws.
        Evaluating TaxJar involves assessing its fit for your business size and understanding its pricing model.
        TaxJar is designed to cater to the needs of small businesses by offering a comprehensive solution that
        automates tax compliance tasks, reducing the administrative burden and potential for human error.</p>
      <p className="text-md text-white shadow-text pt-3">
        When considering TaxJar, businesses should first evaluate its integration capabilities. TaxJar
        seamlessly connects with various e-commerce
        and&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;platforms,
        such as Shopify, Salesforce, and QuickBooks. This integration ensures that all sales data is accurately
        captured and processed, allowing for precise tax calculations and reporting. The ability to customize
        integrations through the
        TaxJar&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;further
        enhances its fit for businesses with specific requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing is another important factor. TaxJar offers a 30-day free trial, allowing businesses to test its
        features and assess its value before committing to a subscription. This trial period is an excellent
        opportunity for businesses to explore how TaxJar can streamline their tax compliance processes and see
        firsthand the time and cost savings it can deliver.</p>
      <p className="text-md text-white shadow-text pt-3">
        It&#39;s also essential to consider the scalability of TaxJar. As businesses grow, their tax compliance
        needs become more complex. TaxJar is built to scale with your business, providing reliable performance
        even during peak sales periods. Its
        high-performance&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;ensures
        that tax calculations are accurate and delivered in real-time, which is vital for maintaining a seamless
        customer experience.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot provides expert guidance in evaluating TaxJar, helping businesses understand how it can
        be tailored to their specific needs and ensuring a smooth implementation. Their local expertise is
        invaluable for small businesses in Miami-Dade, Broward, and West Palm Beach counties, ensuring that
        TaxJar is not only a fit for their current needs but also adaptable to future growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="evaluating-taxjar-fit-and-pricing-considerations" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Evaluating TaxJar: Fit and Pricing Considerations
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="evaluating-taxjar-fit-and-pricing-considerations" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Evaluating TaxJar: Fit and Pricing Considerations
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
