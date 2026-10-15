import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Voksha is built to remove the friction, waste, and guesswork from the way small businesses handle
        incoming calls. Instead of patching over missed connections with more staff or more hours, Voksha
        replaces the old front-desk grind with a digital receptionist that never takes a break, never misses a
        call, and never gets bogged down by routine tasks. The difference shows up in the hours you get back,
        the leads you capture, and the money you stop losing to unpredictable fees and lost opportunities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Every call gets answered, day or night. Voksha picks up on the first ring, no matter how busy the shop
        is or how late it is on a Friday. That means a potential customer calling after hours does not hit
        voicemail, they get a real greeting, their questions answered, and their details captured. This is not a
        menu-driven&nbsp;<GlossaryLink slug="ivr">IVR</GlossaryLink>&nbsp;that frustrates callers. The
        experience is conversational and natural, with the system understanding what the caller needs and taking
        action right away. For the business, this means no more calls slipping through the cracks, no more
        scrambling to catch up with missed messages, and no more lost revenue from the clients who do not wait
        for a callback.</p>
      <p className="text-md text-white shadow-text pt-3">
        Voksha screens out spam and robocalls automatically. Calls that are clearly not from real customers get
        filtered before they ever reach your team. This cuts down on wasted time and keeps your staff focused on
        real business, not on fielding junk calls. The system only bills for real, answered calls, so you are
        not paying for the noise. You get email alerts when your call volume approaches your plan’s limit, and
        usage tracking in your dashboard makes it easy to see where you stand. The pricing is flat and
        predictable: $14 a month covers 15 calls, with each extra call billed at $1, and no after-hours premium.
        For teams that grow, the cost scales in $1 increments, not in expensive, disruptive steps.</p>
      <p className="text-md text-white shadow-text pt-3">
        Routine questions and tasks are handled without human intervention. Voksha can answer FAQs, qualify
        leads, and book appointments (on the Premium plan) directly into your existing calendar. For dental
        practices, that might mean confirming insurance eligibility or booking a cleaning. For salons, it could
        be scheduling a color appointment and sending a summary to the desk. For HVAC or real estate, Voksha
        asks the right intake questions, address, equipment type, budget, timeline, and attaches the answers to
        the booking, so your team shows up prepared. The scripting is plain language, not code, so you can
        adjust what is asked as your workflow changes. Changes take effect immediately, and the system supports
        multiple flows for different call types or lead sources.</p>
      <p className="text-md text-white shadow-text pt-3">
        When a call is too complex or outside the script, Voksha takes a detailed message and sends an instant
        alert by email or SMS. On the Premium plan, you can set up custom call flows that route urgent calls to
        the right team member. Every call comes with a structured summary, no more sticky notes, no more lost
        messages. The information flows directly into your workflow, not into a forgotten voicemail box. For
        regulated businesses, HIPAA-compliant plans and BAAs are available at the Enterprise level, and
        integrations like Dentrix can be set up for dental offices.</p>
      <blockquote cite="https://voksha.com/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Voksha picks up on the first ring, day or night, takes the caller&#39;s details and sends you a summary,
        so you can keep working.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        The impact is not just about coverage, it is about freeing your team to focus on the work that matters.
        The front desk stops being a call center and starts being a customer experience center. Staff handle
        walk-ins, process payments, and keep the day moving without being interrupted by every new ring. For
        owners, the peace of mind comes from knowing that every lead is captured, every question is answered,
        and every opportunity is recorded, whether you are in the office or out on a job.</p>
      <p className="text-md text-white shadow-text pt-3">
        Voksha scales with your business. Whether you are a solo operator or a growing team, the cost structure
        fits. You are not locked into a long-term contract, and there are no setup fees or annual commitments.
        Plans can be changed or canceled at any time. For businesses that experience call spikes, like law firms
        after media coverage or realtors during a busy season, Voksha handles the volume without missing a beat.
        Calls above your plan are simply billed at $1 each, and the caller experience stays consistent, whether
        it is the fifth call of the week or the five hundredth.</p>
      <p className="text-md text-white shadow-text pt-3">
        The result: your business stops leaking revenue from missed calls, stops paying for more than it needs,
        and stops wasting staff time on routine phone work. Voksha does not just automate the phone line, it
        gives you back the hours, the focus, and the control that manual reception took away. The Intelligent
        Receptionist becomes an extension of your brand, always on, always accurate, and always ready to capture
        the next opportunity.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-voksha-actually-does-for-your-intelligent-receptionist-workflow" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Voksha Actually Does for Your Intelligent Receptionist Workflow
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-voksha-actually-does-for-your-intelligent-receptionist-workflow" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Voksha Actually Does for Your Intelligent Receptionist Workflow
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
