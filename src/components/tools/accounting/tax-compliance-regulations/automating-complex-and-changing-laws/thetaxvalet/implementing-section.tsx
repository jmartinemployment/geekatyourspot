import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Launching TaxValet in a small business environment can seem daunting, but the process is streamlined to
        ensure minimal disruption. TaxValet&#39;s implementation is designed to integrate smoothly with existing
        systems, reducing the typical go-live time significantly. This is achieved through pre-built connectors
        and a phased rollout approach, which allows businesses to transition without interrupting their
        day-to-day operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step involves a thorough analysis of the client&#39;s current systems
        and&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;needs. This helps in
        identifying the specific areas where TaxValet can provide the most value. By understanding the unique
        challenges each business faces, TaxValet can tailor its setup to fit seamlessly into the existing
        workflow, ensuring that the integration is both efficient and effective.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, TaxValet employs its pre-built connectors to link directly with the client&#39;s existing
        platforms, such as e-commerce sites or accounting software. This connectivity ensures that data flows
        smoothly between systems, eliminating the need for manual data entry and reducing the risk of errors.
        The pre-built connectors are a significant time-saver, allowing businesses to quickly see the benefits
        of TaxValet&#39;s automation capabilities.</p>
      <p className="text-md text-white shadow-text pt-3">
        The phased rollout approach is another key aspect of TaxValet&#39;s implementation strategy. By
        gradually introducing the software&#39;s features, businesses can adapt to the changes at a manageable
        pace. This method not only reduces the stress of a complete system overhaul but also allows for
        adjustments to be made based on real-time feedback from users. This iterative process ensures that the
        final setup is perfectly aligned with the business&#39;s operational needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the implementation, Geek @ Your Spot LLC plays a crucial role in bridging any gaps. As a local
        consultancy, they provide hands-on support, ensuring that the transition is as smooth as possible. Their
        expertise in configuring TaxValet to work within the specific parameters of the client&#39;s environment
        is invaluable. By handling the technical setup, data mapping, and initial training, Geek @ Your Spot LLC
        reduces the learning curve and helps businesses start leveraging TaxValet&#39;s full potential from day
        one.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the goal of TaxValet&#39;s implementation process is to make sales tax compliance a
        non-issue for small businesses. By automating complex tasks and providing comprehensive support,
        TaxValet allows business owners to focus on growth and customer service, rather than getting bogged down
        in regulatory compliance.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="implementing-taxvalet-streamlined-onboarding-process" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementing TaxValet: Streamlined Onboarding Process
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="implementing-taxvalet-streamlined-onboarding-process" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementing TaxValet: Streamlined Onboarding Process
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
