import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Launching LobbyStack as your Intelligent Receptionist means making a set of early decisions about how
        your business data, call flows, and rules will map onto the system. These choices matter, not just for
        initial setup, but for how easy it will be to adapt, troubleshoot, or expand your lead capture pipeline
        in the months ahead. LobbyStack’s open-source model gives you more control than a
        closed&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>&nbsp;product, but it also means the structure
        you choose up front will shape what you can automate and how flexibly you can respond to change.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first decision is how to structure your caller data. LobbyStack collects caller details, messages,
        booking outcomes, and call summaries. You decide what fields to capture, address, job type, urgency,
        preferred language, or any custom intake question relevant to your workflow. For a plumbing or HVAC
        business, that might mean logging the address and safety risks on every emergency call. For a marketing
        team, it could be campaign source or lead score. This structure is not hardcoded. You define it in plain
        language, and the AI follows your instructions every time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Mapping these fields onto your downstream systems is next. LobbyStack can push call and booking details
        directly into Google Calendar for appointment scheduling. For other systems, like
        a&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, ticketing platform, or marketing database, the
        mapping happens through webhooks or&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;calls. Geek @ Your Spot LLC handles this alignment, making sure that every data point the AI collects lands in the right
        place in your stack. This is not just about matching field names; it is about ensuring data types,
        formats, and validation rules are consistent so nothing gets lost or misfiled.</p>
      <p className="text-md text-white shadow-text pt-3">
        You also set the logic for routing and escalation. LobbyStack’s configuration lets you define, in plain
        English, what counts as an urgent call, what requires a transfer, and what should be logged for
        follow-up. For example, you might specify that any call mentioning &quot;water leak&quot; outside
        business hours triggers an immediate transfer to the on-call technician, while routine maintenance
        requests go straight to booking. This mapping is not static. As your business rules change, you update
        the scripts and logic directly, no need to wait for a vendor update or support ticket.</p>
      <p className="text-md text-white shadow-text pt-3">
        Language handling is another up-front mapping decision. LobbyStack supports more than 70 languages
        through OpenAI’s GPT-Live. You can set the default language for your region, but the system will switch
        to the caller’s language automatically if needed. If your business serves a diverse customer base,
        mapping intake scripts and booking confirmations in multiple languages ensures every caller gets the
        right experience.</p>
      <p className="text-md text-white shadow-text pt-3">
        For self-hosted deployments, you also choose where and how to store your data. LobbyStack puts you in
        charge of the database, storage, and retention policies. You select the infrastructure, cloud,
        on-premise, or a hybrid setup, and decide how backups and updates are managed. This is a crucial step
        for teams with compliance or data sovereignty requirements. Geek @ Your Spot LLC can advise on best
        practices, but the final structure is yours to define and control.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, you need to decide how to handle updates and changes. LobbyStack’s open-source nature means you
        can pin your deployment to a tested version, pull updates when you are ready, and roll back if something
        breaks. This avoids the &quot;forced update&quot; problem common with
        closed&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>&nbsp;tools. Your mapping and data structure
        decisions at the start make it easier to test changes in a staging environment before rolling them out
        to your live system.</p>
      <p className="text-md text-white shadow-text pt-3">
        The result is a lead capture pipeline and virtual front desk that fit your business as it is now, and
        can grow with you as your needs change. The upfront investment in data structure and mapping pays off in
        fewer errors, less manual cleanup, and a system that keeps your team focused on revenue, not rework.
        With LobbyStack, the structure is not just technical; it is operational. You decide what data matters,
        where it goes, and how it moves through your business, no vendor lock-in, no hidden boundaries.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-decisions-shape-a-lobbystack-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Decisions Shape a LobbyStack Deployment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-decisions-shape-a-lobbystack-deployment" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Decisions Shape a LobbyStack Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
