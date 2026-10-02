export default function ImplementationSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Bill in a business environment involves several key steps that can be optimized to ensure a
        smooth transition. For businesses using QuickBooks Desktop, Bill offers integration that automates 2-
        and 3-way PO matching, providing alerts on mismatches to reduce errors and enhance accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        The implementation process is streamlined by Bill&#39;s pre-built connectors and templated setups,
        which shorten the go-live timeline. This is crucial for businesses looking to quickly leverage
        Bill&#39;s capabilities without extensive downtime. The configuration of approval chains, routing, and
        automation logic is also an essential part of the deployment, ensuring that the solution aligns with
        the business&#39;s existing processes and workflows.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill does not require extensive custom coding, making it accessible for businesses without a large IT
        team. However, for those needing more tailored solutions, <strong>Geek At Your Spot</strong> can
        assist with data model design, workflow configuration, and integration with existing systems. This
        ensures that Bill is not only implemented correctly but also optimized for the specific needs of the
        business.</p>
      <p className="text-md text-white shadow-text pt-3">
        Training and change management are also critical components of a successful Bill deployment. Geek At
        Your Spot can provide guidance and support to help teams adapt to the new system, ensuring widespread
        adoption and maximizing the benefits of automation. This professional support is particularly valuable
        for businesses new to AI-driven solutions, as it helps bridge the gap between technology and practical
        application.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-bill-in-your-business-environment">
                Implementing Bill in Your Business Environment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-bill-in-your-business-environment">
                Implementing Bill in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
