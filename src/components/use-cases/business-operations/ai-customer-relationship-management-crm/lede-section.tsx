export default function LedeSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        An AI customer relationship management system, or AI CRM, keeps every customer, conversation and appointment in one record and uses rules and AI to handle the routine parts of follow-up. It answers a new lead within a minute, books the appointment, sends the reminder and asks for the review, while a person steps in whenever a conversation needs one.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, this matters because leads arrive from forms, calls, texts and social messages at all hours, and customers often contact several companies at once. A business that replies first and stays organized tends to win the job. A CRM makes that reply happen even when the owner is on a job site.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC sets up and configures AI CRM platforms for small businesses in Miami-Dade, Broward and Palm Beach counties, so the pipeline, the texting rules and the automations match how your business actually sells.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-is-ai-customer-relationship-management-crm" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Is AI Customer Relationship Management (CRM)?
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-is-ai-customer-relationship-management-crm-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Is AI Customer Relationship Management (CRM)?
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
