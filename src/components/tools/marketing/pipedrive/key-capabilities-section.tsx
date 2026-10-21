export default function KeyCapabilitiesSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">Pipedrive leverages AI to enhance lead scoring, helping businesses streamline sales processes and focus on high-potential leads. By automating scoring, it reduces manual errors and ensures sales teams prioritize effectively. Here are key capabilities that can transform your lead management strategy.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>AI-Powered Lead Scoring: Pipedrive analyzes deal history, engagement signals, and activity patterns to assign scores indicating likelihood to convert, so reps can act swiftly on high-priority prospects without subjective guesswork.</li>
        <li>Seamless Data Integration: Pipedrive connects with popular tools and pulls customer data from multiple platforms to keep your scoring model comprehensive and up to date, giving a holistic view of each lead&apos;s potential.</li>
        <li>Customizable Scoring Criteria: Tailor weights, behavioral inputs like website visits and email interactions, and qualification thresholds so the model reflects the attributes most relevant to your sales strategy and market conditions.</li>
        <li>Customizable Sales Pipelines: Build visual pipelines with stages, fields, and deal cards that mirror your actual sales motion, making it easy to move, track, and forecast opportunities as scores change.</li>
        <li>Automation and User-Friendly Workflow: Automate routine follow-ups, assignments, and notifications on top of lead scores, so high-value prospects are routed instantly while the interface stays approachable for non-technical sales users.</li>
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
