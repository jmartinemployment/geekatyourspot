export default function ImplementationSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">Implementing 6sense for AI-powered lead scoring can streamline your sales process, but it requires careful planning around data, workflows, and system integration to achieve reliable results.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id={`accelerated-deployment${idSuffix}`}>Accelerated Deployment</h3>
      <p className="pt-3 text-base font-normal text-white shadow-text">6sense accelerates time-to-value through pre-built integrations and a user-friendly interface that small businesses can adopt without heavy IT lift. By connecting existing marketing and sales tools early, teams can go live quickly and start benefiting from AI-driven insights within weeks. Geek @ Your Spot LLC helps plan a phased rollout that validates scoring accuracy before expanding across the full pipeline.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id={`data-model-design${idSuffix}`}>Data Model Design</h3>
      <p className="pt-3 text-base font-normal text-white shadow-text">Designing the data model means mapping your current customer data to the structure 6sense uses for scoring, including demographic information, engagement metrics, and purchase history. Defining which fields truly predict conversion ensures the platform scores leads on meaningful criteria rather than noise. Geek @ Your Spot LLC works with your team to audit data quality, normalize fields, and document the mapping so scoring remains accurate as volume grows.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id={`workflow-configuration${idSuffix}`}>Workflow and Process Configuration</h3>
      <p className="pt-3 text-base font-normal text-white shadow-text">Workflow configuration is where scoring turns into action, with automated routing to ensure high-potential leads reach the right representatives without delay and approval chains that keep handoffs swift. Properly configured processes reduce bottlenecks and improve response times, especially when integrated with your CRM for seamless data flow. Geek @ Your Spot LLC helps configure routing rules and notification logic that match how your sales team actually works.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id={`custom-development${idSuffix}`}>Custom Code and Development</h3>
      <p className="pt-3 text-base font-normal text-white shadow-text">6sense is primarily configuration-based, which minimizes the need for extensive custom development and keeps total cost of ownership low for small businesses. When deeper customization is needed, its APIs allow targeted extensions without rebuilding core workflows. Geek @ Your Spot LLC can assess whether configuration alone meets your needs or whether a lightweight integration is warranted for bespoke systems.</p>
    </>
  );
  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations">Implementation Considerations</h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations-lg">Implementation Considerations</h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
