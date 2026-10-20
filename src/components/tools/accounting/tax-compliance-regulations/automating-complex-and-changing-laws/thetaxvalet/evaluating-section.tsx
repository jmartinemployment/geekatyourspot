import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering TaxValet for your business, it&#39;s important to evaluate both its fit for your
        operations and its pricing model. TaxValet is designed to cater to small businesses that operate across
        multiple states and need a comprehensive solution for managing
        sales&nbsp;<GlossaryLink slug="tax-compliance" className="text-[#0B162A] hover:underline">tax
        compliance</GlossaryLink>. Its features are tailored to address the unique challenges faced by
        businesses dealing with complex and changing tax laws.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pricing model for TaxValet is straightforward and transparent, with plans starting at $560 per
        month. This flat monthly fee covers all aspects of sales tax compliance, including nexus analysis,
        permit registrations, and audit protection. The lack of hidden fees or surprise charges makes budgeting
        easier for small businesses, which often have limited financial flexibility. This pricing structure also
        includes unlimited support, ensuring that you can always access expert assistance when needed.</p>
      <p className="text-md text-white shadow-text pt-3">
        In addition to pricing, the fit of TaxValet for your business depends on your specific compliance needs.
        If your business operates in multiple states and struggles with the complexities of sales tax laws,
        TaxValet&#39;s comprehensive approach can save you time and reduce the risk of errors. The
        platform&#39;s automation capabilities mean that you can focus on growing your business rather than
        getting bogged down in compliance details.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC plays a crucial role in ensuring that TaxValet fits seamlessly into your business
        environment. They provide expert guidance during the implementation process, customizing the platform to
        meet your specific requirements. This includes configuring TaxValet to align with your existing systems
        and workflows, ensuring that you can maximize its benefits without disrupting your operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the decision to use TaxValet should be based on its ability to alleviate the burden of sales
        tax compliance while providing a clear and predictable pricing model. For small businesses in
        Miami-Dade, Broward, and West Palm Beach counties, TaxValet offers a reliable and efficient solution
        that can transform how you manage tax compliance, allowing you to focus on what matters most: running
        your business.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="evaluating-taxvalet-fit-and-pricing-model" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Evaluating TaxValet: Fit and Pricing Model
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
              <h2 id="evaluating-taxvalet-fit-and-pricing-model" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Evaluating TaxValet: Fit and Pricing Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
