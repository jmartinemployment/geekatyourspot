import Link from "next/link";

export default function ArchitectureSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Smith.ai’s architecture is purpose-built for small businesses that need reliability, flexibility, and
        deep integration with the systems they already use. The core platform is a hybrid engine: AI modules
        handle the initial intake, conversation routing, and structured data capture, while a live agent network
        stands ready to take over whenever the situation calls for human judgment. This dual-layer design is not
        just a feature, it is a direct response to the shortcomings of pure-AI or pure-human receptionist
        solutions.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the heart of Smith.ai is a set of customizable call flows. These are not static scripts, but dynamic
        workflows that you (or your implementation partner) can tailor to your business’s intake process,
        escalation paths, and qualification rules. The logic can branch based on caller responses, urgency
        signals, or even the time of day. For example, an HVAC contractor can set up emergency protocols that
        route &quot;no heat&quot; or &quot;gas leak&quot; calls directly to an on-call technician, while routine
        maintenance requests follow standard scheduling. The same flexibility applies to law practices,
        marketing agencies, and any other service business: you define what matters, Smith.ai executes it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Smith.ai’s integration catalog is extensive. The system natively connects with thousands of business
        tools, CRMs like Clio, MyCase, and Lawmatics; project management platforms; scheduling apps; billing
        systems; and more. Through&nbsp;<Link id={`tools-marketing-intelligent-receptionist-smith-architecture-zapier${idSuffix}`} href="/tools/marketing/zapier" className="text-[#0B162A] hover:underline">Zapier</Link>&nbsp;and Make, Smith.ai extends compatibility to over 7,000 additional
        apps, covering just about every workflow a small business in South Florida might run. This means call
        data, intake forms, and appointment bookings flow directly into your existing software, keeping records
        up to date without manual entry or copy-paste errors.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform also supports website and mobile app integration. Smith.ai can power live chat, capture
        leads from web forms, and sync those interactions with
        your&nbsp;CRM&nbsp;or
        marketing automation tools. For businesses running WordPress, Smith.ai even works with Ninja Forms to
        screen and qualify leads right from your site, passing on only those that meet your criteria.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every interaction, whether a phone call, chat, or form submission, generates a structured data record.
        Smith.ai logs the details, transcribes calls, and attaches summaries to the relevant contact or case in
        your&nbsp;CRM. For
        new leads, the system creates a prospect record with all the intake information, ready for follow-up or
        automated nurturing. For existing clients, new conversations are appended to their record, keeping the
        full history in one place. This data-first approach means you always have a complete picture of your
        pipeline, without the gaps or duplication that come from disconnected answering services.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and accuracy are built in. Smith.ai blocks over 20 million known robocalls and spam numbers, so
        your team is not distracted by junk calls. Bilingual support (English and Spanish) is available out of
        the box, letting you serve a broader client base without hiring additional staff. Every call, message,
        and intake is available for review in the dashboard, with analytics to track call volume, appointment
        rates, and lead quality over time.</p>
      <p className="text-base text-white shadow-text pt-3">
        The technical backbone is robust enough to scale with your business. Whether you handle a handful of
        calls a day or hundreds during a seasonal rush, Smith.ai’s cloud infrastructure scales up or down as
        needed, there is no risk of lost calls due to volume spikes. The platform’s operational learning draws
        on more than 25 million calls over a decade, so the AI modules are tuned for real-world performance, not
        just demo scenarios.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business in Miami-Dade, Broward, or West Palm Beach counties, this means Smith.ai is not
        just another answering service, it is a fully integrated extension of your operations. All the lead
        capture, intake, and routing happens inside the systems you already use, with no need to replace
        your&nbsp;CRM&nbsp;or
        retrain your staff. And because the architecture is built for adaptability, you can update call flows,
        add new integrations, or tweak intake questions as your business evolves, without waiting weeks for a
        vendor to catch up.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="smith-ai-s-technical-backbone-architecture-integrations-and-data-flow" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Smith.ai’s Technical Backbone: Architecture, Integrations, and Data Flow
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="smith-ai-s-technical-backbone-architecture-integrations-and-data-flow-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Smith.ai’s Technical Backbone: Architecture, Integrations, and Data Flow
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
