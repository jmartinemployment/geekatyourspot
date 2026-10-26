import Link from "next/link";
export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        AvidXchange is particularly well-suited for small to medium-sized businesses that are ready to embrace
        AI-driven automation in their accounts payable processes. Its features, such as eliminating manual data
        entry and reducing errors, are designed to save time and allow AP teams to focus on more strategic
        tasks. This makes it an attractive option for companies looking to optimize their financial operations
        without overhauling existing systems.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, AvidXchange might not be the best fit for businesses that require a high degree of
        customization beyond its existing integrations or those that operate in environments where its
        integrations are not supported. Companies with highly specialized accounting needs or those already
        using alternative AP solutions with similar features may find less incremental value in switching to
        AvidXchange.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses interested in exploring AvidXchange further, the next step would be to evaluate how its
        features align with their specific AP challenges. Consider how the automation of invoice workflows and
        the integration with existing systems could enhance your operational efficiency and reduce costs.</p>
      <p className="text-base text-white shadow-text pt-3">
        To get a tailored understanding of how AvidXchange can be implemented in your business, consider booking
        a consultation with <strong>Geek @ Your Spot LLC</strong>. They specialize in configuring and deploying
        AvidXchange to fit your unique business requirements, ensuring a smooth transition to automated AP
        processes.&nbsp;
        <a href="#consultationAppointment2xl" id={`tools-accounting-avidxchange-right-fit-consultation${idSuffix}`} className="text-[#C83803] hover:underline">
          Book your consultation now
        </a>&nbsp;to see how AvidXchange can transform your accounts payable operations.</p>
      <p className="text-base text-white shadow-text pt-3">
        Our post <Link id={`tools-accounting-accounts-payable-automated-data-entry-processing-avidxchange-xlink-blog${idSuffix}`} href="/blog/accounting/how-ai-transforms-accounts-payable-automated-data-entry-processing" className="text-[#C83803] hover:underline">AI Data Entry for Accounts Payable</Link> gives AvidXchange the final step in the chain, paying vendors by ACH, check or virtual card once invoices are captured and approved, and credits its reporting with showing each person where they sit in the workflow. It also records the trade-off this page’s fit section implies: extraction, matching and routing backed by expert oversight, at the price of an initial setup that needs thorough planning. The assessment in our <Link id={`tools-accounting-accounts-payable-automated-data-entry-processing-avidxchange-xlink-pillar${idSuffix}`} href="/use-cases/accounting/accounts-payable/ai-document-processing" className="text-[#C83803] hover:underline">AI Document Processing</Link> guide, sequence first, then data, then people, is how we keep that setup from disrupting your current operations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-avidxchange-right-for-your-business">
                Is AvidXchange Right for Your Business?
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-avidxchange-right-for-your-business-lg">
                Is AvidXchange Right for Your Business?
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
