export default function WithoutItSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">Most data problems are invisible until they surface as business problems. Your CRM sends a follow-up to a contact whose record was partially overwritten. Your reporting dashboard shows revenue that is off because two systems used different date formats. Your AI scheduling tool double-books because availability data from one calendar never synced correctly. None of these trigger an error message — they just quietly produce wrong outcomes.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">The issue is that AI tools amplify whatever is in your data. A human reviewing a spreadsheet notices something looks off. An AI model does not — it processes the record and moves on. That is why validation has to run before the data reaches the model, not after the output has already been acted on.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Incomplete records cause AI tools to skip contacts, misroute tickets, or generate reports with silent gaps.</li>
        <li>Formatting inconsistencies prevent data from merging across systems, breaking automations that depend on a match.</li>
        <li>Stale or duplicated data leads AI models to generate redundant outreach or incorrect recommendations.</li>
        <li>Schema changes — when a connected app updates its data structure — silently break downstream pipelines with no warning.</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-goes-wrong-without-it" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Goes Wrong Without It
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-goes-wrong-without-it-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Goes Wrong Without It
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
