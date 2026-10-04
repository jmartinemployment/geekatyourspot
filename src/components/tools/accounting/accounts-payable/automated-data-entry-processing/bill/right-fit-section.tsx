import Link from "next/link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Bill is particularly well-suited for small to medium-sized businesses that are looking to leverage AI
        to simplify their accounts payable processes. If your business struggles with time-consuming manual
        processes, frequent errors, or inefficient cash flow, Bill&#39;s automation capabilities could provide
        significant relief. The platform&#39;s ability to streamline invoice processing and expense management
        can be a game-changer for companies aiming to optimize their financial operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Bill might not be the best fit for every organization. Companies with highly specialized
        needs or those requiring extensive customization might find that Bill&#39;s offerings do not fully
        align with their requirements. It&#39;s important to assess whether the platform&#39;s features and
        integrations meet your business&#39;s specific demands.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses ready to move forward with Bill, the next step is to explore how
        <strong> Geek At Your Spot</strong> can assist in the implementation process. As an AI implementation
        consultancy, Geek At Your Spot can help tailor Bill to fit your unique business environment. This
        includes configuring workflows, integrating with existing systems, and providing training to ensure
        your team can fully leverage the platform&#39;s capabilities.</p>
      <p className="text-md text-white shadow-text pt-3">
        To learn more about how Bill can transform your accounts payable processes and to discuss your specific
        needs, consider booking a consultation with Geek At Your Spot. This step will provide you with a
        clearer picture of how Bill can be integrated into your business and the tangible benefits it can
        deliver.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ready to take the next step?&nbsp;
        <Link id="tools-accounting-bill-right-fit-consultation"
          href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
          Book a consultation
        </Link>&nbsp;with Geek At Your Spot today and discover how Bill can elevate your financial
        operations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-bill-the-right-fit-for-your-business">
                Is Bill the Right Fit for Your Business?
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-bill-the-right-fit-for-your-business">
                Is Bill the Right Fit for Your Business?
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
