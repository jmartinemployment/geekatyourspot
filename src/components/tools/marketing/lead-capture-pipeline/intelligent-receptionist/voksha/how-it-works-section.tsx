import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Voksha answers every call for a small business on the first ring, no matter what time of day it comes
        in. There is no waiting in a queue, no risk of a busy signal, and no chance that a call will slip
        through to voicemail unless you choose it. The platform’s core workflow is built around three actions:
        answering, qualifying, and logging. Each is designed to do the job a live receptionist would, but at
        machine speed and consistency.</p>
      <p className="text-base text-white shadow-text pt-3">
        When a call comes in, Voksha’s AI engine picks up instantly and greets the caller by your business name.
        Its speech recognition and natural language tools let it understand the caller’s request in plain
        English or Spanish, with support for more than 10 languages on select plans. There are no menu trees to
        navigate, callers simply say what they need. Voksha listens, interprets the intent, and responds in
        under 200 milliseconds. This immediate response is not just about speed; it prevents the hang-ups and
        missed opportunities that happen when callers are forced to wait or repeat themselves.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next step is qualification. Voksha asks the questions you set during setup, these can be tailored to
        your industry and business priorities. For a law firm, it might prompt for the type of case or urgency;
        for a dental practice, it can ask about insurance or the nature of the appointment. In real estate, it
        covers pre-approval status, budget, and timeline. HVAC and service businesses can configure it to ask
        for address, equipment details, and symptoms. These flows are not locked in at setup. You can adjust
        them any time, so if you find that a question is not getting the answers you need, you change it and the
        new logic takes effect on the very next call.</p>
      <p className="text-base text-white shadow-text pt-3">
        Voksha’s logic routes each call based on what the caller says. Routine questions get answered on the
        spot: hours, pricing, parking, or service menus. If the caller wants to book an appointment, Voksha
        handles the scheduling directly, on Premium and Enterprise plans, it books into your connected Google
        Calendar, Microsoft Outlook, or Apple iCloud, checking your real-time availability. For restaurants, it
        can handle reservation requests and, on Enterprise, even confirm and process takeout orders. If a call
        is too complex or falls outside what the AI is set up to handle, Voksha flags it for human follow-up,
        takes a detailed message, and alerts you by email or SMS so nothing gets lost in the shuffle.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every call is logged with a structured summary and the caller’s details. These are sent to you by email
        or SMS, and on higher plans, can be pushed into
        your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>. This
        means your team never has to rely on sticky notes, handwritten message pads, or memory to follow up. You
        always know who called, what they wanted, and what was said. For businesses with multiple locations or
        departments, Voksha can route calls to the right person or team member based on the caller’s responses
        or your own rules.</p>
      <p className="text-base text-white shadow-text pt-3">
        Spam and robocalls are screened out automatically. Calls that are identified as spam do not count
        against your monthly plan, so you only pay for real customer interactions. You get email alerts when you
        approach your plan’s included call volume, at 75 percent and 90 percent, so you are never surprised by
        overage charges. If you exceed your included calls, every extra call is billed at $1, no matter how long
        the call lasts. This keeps your costs predictable, even during a sudden spike in call volume, like a
        marketing campaign or seasonal rush.</p>
      <p className="text-base text-white shadow-text pt-3">
        The entire flow is designed to work alongside your existing staff, not replace them outright. Many small
        businesses set up Voksha to catch overflow calls or handle after-hours inquiries, letting the front desk
        focus on in-person customers. Others use a hybrid model, where Voksha answers first, triages the call,
        and hands off to a person if needed. There is no minimum contract, no setup fee, and no annual
        commitment. You can start or stop at any time, and changes to your scripts or routing logic go live
        immediately.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="voksha-s-step-by-step-call-handling-what-actually-happens-on-every-call" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Voksha’s Step-by-Step Call Handling: What Actually Happens on Every Call
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="voksha-s-step-by-step-call-handling-what-actually-happens-on-every-call-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Voksha’s Step-by-Step Call Handling: What Actually Happens on Every Call
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
