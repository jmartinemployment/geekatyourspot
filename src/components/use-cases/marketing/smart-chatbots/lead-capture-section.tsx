export default function LeadCaptureSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">Capturing leads efficiently is a critical pain point for many businesses. Traditional methods can be slow, costly, and often result in missed opportunities. An intelligent lead capture pipeline automates the collection, qualification, and nurturing of leads, ensuring that potential customers are quickly identified and engaged.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Tools like Intercom and Tidio automate initial interactions with potential leads, capturing essential information and qualifying leads through conversational interfaces.</li>
        <li>Intelligent platforms integrate seamlessly with CRM systems to ensure that leads are tracked and nurtured efficiently, minimizing the risk of losing valuable prospects.</li>
        <li>AI-driven platforms like Salesforce Einstein use predictive analytics to prioritize leads, allowing sales teams to focus on the most promising opportunities.</li>
      </ul>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="automating-qualification">Automating Lead Qualification</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Qualifying leads manually can be labor-intensive and prone to inconsistency. AI can automate this process by analyzing data to identify which leads are most likely to convert, allowing sales teams to focus their efforts more effectively.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="enhancing-nurturing">Enhancing Lead Nurturing</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Once leads are qualified, nurturing them effectively is crucial to conversion. AI tools assist in this by automating personalized follow-ups and providing insights into the most effective nurturing strategies.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="integrating-crm">Integrating AI with CRM Systems</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Integrating AI with CRM systems ensures that data flows seamlessly between different platforms, providing a complete view of the customer journey and enabling more informed decision-making.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="lead-capture">
                Lead Capture Pipeline
              </h2>
            </div>
            <div className="col-span-12">
              {body}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="lead-capture">
                Lead Capture Pipeline
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
