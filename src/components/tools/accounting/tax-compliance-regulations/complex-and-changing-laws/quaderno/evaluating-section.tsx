import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Choosing the
        right&nbsp;<GlossaryLink slug="tax-compliance" className="text-[#0B162A] hover:underline">tax
        compliance</GlossaryLink>&nbsp;software involves careful consideration of fit and pricing. For small
        businesses in South Florida, Quaderno presents a compelling option by offering a blend of comprehensive
        features and flexible pricing models. Evaluating its fit involves understanding both its capabilities
        and how its pricing aligns with business needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Quaderno is designed with small to mid-sized businesses in mind, making it an ideal choice for those in
        the&nbsp;<GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>,
        e-commerce, and digital product sectors. Its ability to automate VAT, GST, and sales tax calculations
        across multiple jurisdictions is particularly beneficial for businesses looking to expand
        internationally without the overhead of a large finance team.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s integration with popular billing platforms like Stripe and PayPal further enhances
        its fit for businesses that require seamless tax compliance solutions. This integration ensures that
        businesses can maintain compliance without disrupting their existing payment workflows, a critical
        factor for those who rely heavily on these platforms for their operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Regarding pricing, Quaderno offers a transparent model with clear tiers based on operational volume.
        This approach allows businesses to scale their tax compliance efforts as they grow, without unexpected
        costs. For small businesses, this transparency is crucial as it helps in budgeting and financial
        planning.</p>
      <p className="text-md text-white shadow-text pt-3">
        Quaderno also provides a free trial, allowing businesses to test its features before committing. This
        trial period is an opportunity for businesses to evaluate how well the platform integrates with their
        existing systems and whether it meets their specific needs. It also allows them to experience firsthand
        the benefits of automated tax compliance, such as reduced manual work and increased accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot enhances the evaluation process by offering expert guidance on how to best utilize
        Quaderno&#39;s features. They help businesses assess their specific tax compliance needs and configure
        the platform to address them effectively. This consultative approach ensures that businesses not only
        choose the right tool but also implement it in a way that maximizes its value.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, evaluating Quaderno as a tax compliance solution involves assessing its fit with business
        operations and understanding its pricing model. With the support of Geek @ Your Spot, businesses in
        South Florida can confidently adopt Quaderno, knowing it will streamline their tax compliance processes
        and support their growth ambitions.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="evaluating-quaderno-fit-and-pricing-model" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Evaluating Quaderno: Fit and Pricing Model
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
              <h2 id="evaluating-quaderno-fit-and-pricing-model" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Evaluating Quaderno: Fit and Pricing Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
