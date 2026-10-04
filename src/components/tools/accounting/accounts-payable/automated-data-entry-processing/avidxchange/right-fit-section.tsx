import Link from "next/link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        AvidXchange is particularly well-suited for small to medium-sized businesses that are ready to embrace
        AI-driven automation in their accounts payable processes. Its features, such as eliminating manual data
        entry and reducing errors, are designed to save time and allow AP teams to focus on more strategic
        tasks. This makes it an attractive option for companies looking to optimize their financial operations
        without overhauling existing systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, AvidXchange might not be the best fit for businesses that require a high degree of
        customization beyond its existing integrations or those that operate in environments where its
        integrations are not supported. Companies with highly specialized accounting needs or those already
        using alternative AP solutions with similar features may find less incremental value in switching to
        AvidXchange.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses interested in exploring AvidXchange further, the next step would be to evaluate how its
        features align with their specific AP challenges. Consider how the automation of invoice workflows and
        the integration with existing systems could enhance your operational efficiency and reduce costs.</p>
      <p className="text-md text-white shadow-text pt-3">
        To get a tailored understanding of how AvidXchange can be implemented in your business, consider booking
        a consultation with <strong>Geek At Your Spot</strong>. They specialize in configuring and deploying
        AvidXchange to fit your unique business requirements, ensuring a smooth transition to automated AP
        processes.&nbsp;
        <Link id="tools-accounting-avidxchange-right-fit-consultation"
          href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
          Book your consultation now
        </Link>&nbsp;to see how AvidXchange can transform your accounts payable operations.</p>
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
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-avidxchange-right-for-your-business">
                Is AvidXchange Right for Your Business?
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
