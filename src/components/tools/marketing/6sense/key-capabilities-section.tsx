export default function KeyCapabilitiesSection() {
  const body = (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">6sense delivers a focused set of AI-powered capabilities that improve how teams score, prioritize, and engage leads, turning raw behavioral data into sales-ready insights.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Predictive lead scoring with advanced data modeling that evaluates behavior and engagement patterns to predict conversion likelihood and surface high-potential prospects first.</li>
        <li>Behavioral intent analysis and customer journey mapping that reveals what drives buying decisions, so teams understand where each account is in its evaluation.</li>
        <li>AI-driven recommendations for personalized outreach, helping reps tailor messaging and timing to match demonstrated intent rather than generic follow-up.</li>
        <li>Automated lead prioritization that eliminates manual sorting, reduces time spent on low-potential leads, and routes top-ranked leads to the right owner immediately.</li>
        <li>Seamless CRM integration with real-time insights, keeping scores and intent signals synchronized across existing sales tools for timely, coordinated action.</li>
      </ul>
    </>
  );
  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-capabilities">Key Capabilities</h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-capabilities-lg">Key Capabilities</h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
