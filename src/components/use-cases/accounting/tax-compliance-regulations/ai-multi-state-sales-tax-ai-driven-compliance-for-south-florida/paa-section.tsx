export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="people-also-ask" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the software distinguish between Economic and Physical Nexus triggers?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Teams want to know if the tool tracks both economic and physical presence. Economic nexus often
              starts at $100,000 in gross sales, but physical nexus can be triggered by just one remote employee
              or inventory in a third-party warehouse. Physical nexus does not depend on sales thresholds.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens if the tool discovers we crossed a threshold months before implementation?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              This is about prior period liability. Users need to know if the tool can flag when a threshold was
              crossed in the past and if it helps prepare data for Voluntary Disclosure Agreements to manage
              penalties for late registration.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the platform unify multi-channel transaction data?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Businesses using e-commerce sites, ERPs, and billing platforms want to know how the tool brings
              all that data together for threshold tracking. They also ask how the software filters out sales
              covered by Marketplace Facilitator laws, so they are not taxed twice, but still counts those sales
              toward state thresholds if required.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is filing and remittance fully automated, or does it require manual quality assurance?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Many ask if the platform just calculates tax rates or if it is a full-service tool that also fills
              out, files, and sends payments to state revenue departments. This distinction is important for
              small teams wanting to reduce manual work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
