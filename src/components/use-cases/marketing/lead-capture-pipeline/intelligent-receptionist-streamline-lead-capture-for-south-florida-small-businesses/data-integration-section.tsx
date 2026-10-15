import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataIntegrationSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        An Intelligent Receptionist only works as well as the data and integrations you give it. If your
        environment cannot supply complete, structured, and up-to-date information, your receptionist will miss
        calls, fumble conversations, or hand off incomplete leads to your sales pipeline. For a small business
        in South Florida, this is not a technicality, it is the difference between closing a deal and handing it
        to a competitor.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with the basics: your phone number,&nbsp;<GlossaryLink slug="call-routing">call
        routing</GlossaryLink>&nbsp;rules, and a clean list of business hours, locations, and team contacts. My
        AI Front Desk and Voksha both show that a fast rollout depends on the ability to forward existing
        numbers and sync with your business calendar. My AI Front Desk lets you forward your current number with
        a simple code and then uses a guided wizard to train the AI on your services and FAQs. It logs calls,
        summaries, and outcomes directly into your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, so there is
        no manual double entry or lost context.</p>
      <p className="text-md text-white shadow-text pt-3">
        The calendar integration is not optional. For the system to book appointments during live calls or text
        threads, it must read and write to your chosen calendar. Voksha and Smith.ai both support direct
        calendar connections, Google Calendar, Outlook, and, in some cases, industry-specific schedulers. When a
        caller wants to book, the AI offers real-time availability, confirms the slot, and writes the meeting to
        your system. If your scheduling is still on paper or siloed in a front-desk computer, the receptionist
        cannot do its job, and you will end up with double bookings or missed confirmations.</p>
      <p className="text-md text-white shadow-text pt-3">
        <GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;integration is the next line of defense against lost
        leads. Nextiva’s platform is built to unify calls, SMS, and chat into one workspace, making sure every
        caller’s details, notes, and outcomes are logged to the right record. This is not about shiny
        dashboards: it means your staff can see the full conversation history and act on it, rather than
        starting from zero with every follow-up. Smith.ai’s system goes further, supporting thousands
        of&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;and workflow integrations, so even complex
        intake or multi-step lead qualification can be automated and recorded in your existing tools.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams with strict data control or compliance needs, LobbyStack stands apart. It is open-source and
        can be self-hosted, so you keep call recordings and lead data within your own infrastructure. This
        matters for businesses that handle sensitive customer information, or those who cannot risk exposing
        their call logs to a third-party cloud.
        LobbyStack’s&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;also lets you build custom
        integrations to your own systems, no waiting on a vendor’s roadmap or accepting a generic connector. You
        decide what data is captured, how it is stored, and which workflows are triggered when a call comes in.</p>
      <p className="text-md text-white shadow-text pt-3">
        A real-world rollout always finds gaps in the data. Staff directories are out of date, service lists do
        not match what is actually delivered, or holiday hours are missing. The Intelligent Receptionist is only
        as accurate as what you feed it. The best implementations start with a structured data assessment,
        pulling information from your website, Google Business Profile, and current scheduling
        or&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;tools, then validating it for accuracy and
        completeness. In practice, this means a Friday afternoon spent reconciling what is in your head and what
        is in the system, before you let the AI answer a single call.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the point where many small businesses trip up. They treat the receptionist as a plug-and-play
        tool, skipping the data review and assuming integrations will “just work.” The result: missed bookings,
        information mismatches, or, worst of all, calls routed to the wrong person. The remedy is not more
        features, but a real commitment to&nbsp;<GlossaryLink slug="data-quality">data
        quality</GlossaryLink>&nbsp;and the integrations that keep it flowing. If your environment cannot
        support that, no Intelligent Receptionist can cover the gap.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-data-and-integrations-make-or-break-intelligent-receptionist-rollout" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data and Integrations Make or Break Intelligent Receptionist Rollout
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-data-and-integrations-make-or-break-intelligent-receptionist-rollout" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data and Integrations Make or Break Intelligent Receptionist Rollout
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
