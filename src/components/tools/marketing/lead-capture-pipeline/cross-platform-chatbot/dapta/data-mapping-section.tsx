import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting Dapta to deliver clean, actionable leads depends on making the right data structure and
        mapping decisions at the start. The platform’s promise is that every inquiry, whether it comes in by
        phone, chat, or WhatsApp, lands as a structured, qualified record in
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or calendar. That only happens if you
        define what fields matter, how they map across channels, and what counts as a qualified lead for your
        business.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first decision is which data fields each conversation should capture. Dapta is built to extract
        structured information, such as name, contact details, service needed, urgency, and budget, during the
        initial interaction. You decide which questions the agent asks, and which answers are required before
        a lead moves forward. For a home services company, this might mean always capturing location, job
        type, and preferred appointment window. For a legal intake, it could be the nature of the inquiry and
        urgency. This upfront mapping ensures that every channel, whether a WhatsApp message or a phone call,
        collects the same essential details, so nothing gets lost or duplicated.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next is mapping these fields to your existing&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or
        booking system. Dapta’s integrations with tools like HubSpot, Salesforce, and Google Calendar allow
        you to specify exactly where each piece of information should land. For example, a new lead captured
        on web chat can be mapped to a &quot;New Inquiry&quot; pipeline stage in
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, with all conversation details attached.
        Appointment times are synced directly to your team’s calendars, and reminders can be set to trigger
        automatically. If your business uses multiple systems, Dapta’s support for over 1,000 integrations
        means you can route data to the right place without manual handoff.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another key mapping decision is how to handle multi-channel conversations. Dapta keeps the customer’s
        identity and conversation history connected, even if they switch from chat to phone or from WhatsApp
        to email. This requires matching identifiers, such as phone numbers, email addresses, or WhatsApp IDs,
        across systems. Defining these matching rules up front ensures that every conversation links to the
        correct contact record, so your team sees a single timeline of all interactions. This is critical for
        avoiding duplicate records and for giving staff the context they need to respond consistently.</p>
      <p className="text-md text-white shadow-text pt-3">
        Lead qualification rules are also mapped at this stage. Dapta lets you set the criteria that define a
        sales-ready lead: budget thresholds, service area, urgency, or any other field you care about. The
        agent scores each lead in real time, based on your rules, and only passes qualified leads to your
        sales team or books them into your calendar. This removes the guesswork from manual screening and
        ensures your team spends time only on real opportunities. For example, Skydropx, a logistics platform,
        used Dapta to cut its cost per qualified lead in half by tightening these qualification and mapping
        rules.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, you set escalation paths for cases the agent cannot handle confidently. Dapta is configured
        to escalate complex or sensitive questions to a human, passing along the full conversation context.
        This mapping, deciding which triggers require a handoff and where the handoff goes, prevents the agent
        from going off-script or mishandling high-stakes inquiries. Every escalation is logged, so you can
        review and refine the rules as your team learns what works.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot works with clients to define these data structures and mapping rules during
        deployment. The goal is a system where every lead is captured, qualified, and routed without manual
        rework, and where your team always sees the full picture. The upfront decisions you make here set the
        foundation for a cross-platform chatbot that does not just answer questions, but drives real business
        results.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-structure-and-mapping-decisions-that-make-or-break-a-dapta-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Structure and Mapping Decisions That Make or Break a Dapta Deployment
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
              <h2 id="the-data-structure-and-mapping-decisions-that-make-or-break-a-dapta-deployment" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Structure and Mapping Decisions That Make or Break a Dapta Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
