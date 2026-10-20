import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Voksha is engineered for small business environments that need reliability without IT overhead. Its core
        is a cloud-based AI voice system, purpose-built to answer and process high volumes of calls with no
        physical hardware on site. The platform is structured around a few key principles: always-on
        availability, seamless integration with business tools, and granular control over call handling logic.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the heart of Voksha is its AI engine, which combines speech
        recognition,&nbsp;<GlossaryLink slug="natural-language-processing" className="text-[#0B162A] hover:underline">natural
        language processing</GlossaryLink>, and workflow automation. When a call comes in, the system instantly
        identifies whether it is a real customer, a robocall, or spam. Only legitimate calls are processed
        further and counted against your plan, keeping costs fair and predictable. The AI engine runs in the
        cloud, so it scales up automatically to handle sudden surges in call volume, whether you get five calls
        or five hundred in a week, every caller gets the same fast response. This is a structural edge over live
        receptionists or traditional answering services, where staff or queue limits cause delays and dropped
        calls.</p>
      <p className="text-md text-white shadow-text pt-3">
        Voksha’s architecture is designed for easy integration with the tools small businesses already use. On
        the Premium plan, it connects directly to Google Calendar, Microsoft Outlook, and Apple iCloud for
        real-time appointment booking. For dental practices, a Dentrix integration is available with support
        from Voksha’s team. In real estate and service businesses, call summaries and lead details can be pushed
        to
        your&nbsp;CRM&nbsp;or
        sent by SMS and email. Every call log is structured for consistency, so you can track leads,
        appointments, and customer questions without manual entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        The scripting interface is plain language, not code. You describe what you want the AI to ask and in
        what order, no logic trees or programming required. This makes it possible for owners or managers to
        adjust intake flows on the fly. For example, an HVAC company can set up different flows for emergency
        calls versus routine maintenance, and a real estate agent can tweak qualification questions between open
        houses. Changes are live immediately, so you are not stuck waiting for a support ticket or a developer
        to update your scripts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and compliance are built into the data layer. All call data is encrypted and logged, with
        HIPAA-compliant handling available on the Enterprise plan for medical and dental practices. This is not
        just about checkboxes, if your business handles sensitive information, you can get a signed Business
        Associate Agreement (BAA) from Voksha on Enterprise, meeting regulatory requirements for patient data.</p>
      <p className="text-md text-white shadow-text pt-3">
        Voksha’s dashboard gives you real-time visibility into usage, call summaries, and alerts. You see
        exactly where you stand against your plan’s call limit, with warnings at 75 percent and 90 percent. This
        helps you avoid surprise overages and plan upgrades. Spam and robocall activity is tracked separately,
        so you can see how much noise is being filtered before it ever reaches your staff.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform supports businesses with one location or many. For multi-location operations, you can
        deploy specialized AI agents for different departments or sites, all managed from a single dashboard.
        Each agent can have its own call flow, script, and routing logic, so your sales line, support line, and
        appointment desk all run on the same platform but handle calls differently. This centralization means
        you do not have to juggle multiple vendors or dashboards as you grow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Voksha’s architecture is built for adaptability. You can forward calls from your existing office number,
        no need to change published contact details or retrain customers. The system can be set up for overflow,
        after-hours, or full-time coverage, and you control how and when calls are routed. There is no lock-in:
        you can upgrade, downgrade, or cancel at any time, and the system adapts to your business as it changes.
        This makes Voksha a fit for solopreneurs, small teams, and growing service businesses that need
        enterprise reliability without enterprise complexity or cost.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="inside-the-voksha-platform-architecture-integrations-and-how-data-flows" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Inside the Voksha Platform: Architecture, Integrations, and How Data Flows
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="inside-the-voksha-platform-architecture-integrations-and-how-data-flows-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Inside the Voksha Platform: Architecture, Integrations, and How Data Flows
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
