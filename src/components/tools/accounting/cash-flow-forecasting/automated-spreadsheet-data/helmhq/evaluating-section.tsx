export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Helmhq for your business, it&#39;s important to evaluate its fit and pricing model to
        ensure it aligns with your needs and budget. Helmhq is designed to support small to medium-sized businesses
        looking to automate spreadsheet data processes, particularly those in Miami-Dade, Broward, and West Palm
        Beach. Its features cater to businesses seeking to streamline operations, reduce manual errors, and improve
        efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pricing model for Helmhq is straightforward and designed to offer flexibility. According to the partner
        data, Helmhq&#39;s Pro Plus plan is priced at $1999 per month, which includes 20 total sites, onboarding and
        strategy, and enterprise-level features. This plan is particularly suited for businesses that require
        comprehensive automation solutions and are looking to scale their operations. The pricing includes a 14-day
        free trial, allowing businesses to test the platform&#39;s capabilities before making a commitment.</p>
      <p className="text-md text-white shadow-text pt-3">
        When evaluating Helmhq, consider the specific needs of your business. If your team is frequently bogged down
        by manual spreadsheet management, Helmhq&#39;s automation features can significantly reduce the time spent
        on these tasks. The platform&#39;s ability to integrate with existing systems, such as CMS and Google
        Analytics, adds value by ensuring seamless data flow and reducing the need for manual data entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another factor to consider is the scalability of Helmhq. As your business grows, the platform can adapt to
        increasing demands without requiring additional IT resources. This scalability is crucial for businesses
        anticipating growth and needing a tool that can grow with them. The platform&#39;s comprehensive feature
        set, including content scheduling, automated publishing, and team management, supports this scalability.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot enhances the evaluation process by providing expert guidance tailored to your
        business&#39;s unique environment. Their local expertise ensures that Helmhq is configured to address the
        specific challenges faced by businesses in your area. By working with Geek @ Your Spot, you gain access to a
        team that understands the intricacies of your operations and can optimize Helmhq to deliver maximum value.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-helmhq-fit-and-pricing-model">
                Evaluating Helmhq: Fit and Pricing Model
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-helmhq-fit-and-pricing-model">
                Evaluating Helmhq: Fit and Pricing Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
