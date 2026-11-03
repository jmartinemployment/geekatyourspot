export default function SetupSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">Setting up data quality monitoring starts with an audit of your current data sources — what systems you have, how they connect, and where data moves between them. From that audit we identify the points where data is most likely to degrade: import jobs that run overnight, integrations that sync on a schedule, and manual entry fields where formatting varies.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">We then connect a monitoring platform to those sources and configure the checks that matter for your specific workflows. For a business using a CRM to drive AI outreach, that means validating contact records for completeness before they reach the automation. For a business running financial reporting through an AI dashboard, it means catching mismatched formats and stale values before they distort the numbers.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">Once monitoring is live, it runs on its own. You receive alerts when something fails and a clear description of what went wrong, so the fix is straightforward rather than a hunt through your data.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">Book a consultation below to talk through what your current data setup looks like and where the gaps are.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-we-set-it-up-for-your-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How We Set It Up for Your Business
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-we-set-it-up-for-your-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How We Set It Up for Your Business
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
