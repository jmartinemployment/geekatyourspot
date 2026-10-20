import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The choices you make about data structure and mapping at the start of a My AI Front Desk deployment
        will shape how smoothly your lead capture pipeline runs. This is not just about picking fields in
        a&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, it is about making sure every conversation, no
        matter where it starts, lands in the right place with the right context, ready for your team to act.</p>
      <p className="text-md text-white shadow-text pt-3">
        My AI Front Desk’s data model is built
        for&nbsp;<GlossaryLink slug="omnichannel">omnichannel</GlossaryLink>&nbsp;use. Every interaction,
        whether it is a phone call, SMS, web chat, email, or social DM, gets captured, transcribed, and linked
        to a single contact timeline. This timeline is the backbone of the system. It holds every message,
        call, and appointment for each lead in one place, so your team sees the full story behind every
        opportunity. The key decision upfront is how to map your existing data into this structure without
        losing important context or duplicating records.</p>
      <p className="text-md text-white shadow-text pt-3">
        You start by defining what counts as a unique contact. In practice, this means deciding which data
        points, email, phone number, social handle, are used as the primary identifier. My AI Front Desk can
        merge incoming conversations across channels, but only if it can match them to the same person. If
        your current records are inconsistent or fragmented, you will need to clean up and standardize
        identifiers before migration. This upfront cleanup pays off later, as it prevents split records and
        lost follow-ups.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, you map your fields. My AI Front Desk captures structured data from every conversation: name,
        contact info, intent, urgency, budget, timeline, and outcome. These fields are auto-populated by the
        AI as it interacts with prospects. For each field, you decide how it lines up with your
        existing&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or data warehouse. If you use HubSpot,
        Salesforce, or Pipedrive, the system can push updates directly to the right objects and fields, no
        manual entry required. If you have custom fields or industry-specific requirements, you set those
        mappings during implementation, so nothing gets lost in translation.</p>
      <p className="text-md text-white shadow-text pt-3">
        <GlossaryLink slug="lead-scoring">Lead scoring</GlossaryLink>&nbsp;is another critical mapping
        decision. My AI Front Desk does not just collect data; it analyzes chat intent, call outcomes, form
        submissions, and engagement across all channels to score each lead’s likelihood to convert. You can
        tune how these signals are weighted, so the AI prioritizes the types of leads that matter most to your
        business. High-intent leads can trigger immediate alerts or route straight to a closer, while
        low-intent contacts are assigned to nurture sequences. Deciding these scoring rules and mapping them
        to your sales process is what makes the system actionable instead of just informative.</p>
      <p className="text-md text-white shadow-text pt-3">
        Appointment booking and follow-up automation also depend on clean mapping. When the AI books an
        appointment, it logs the event to the contact timeline and updates your calendar. If a call or chat
        ends without a booking, the system can trigger a post-conversation SMS or email based on the outcome.
        You decide which outcomes matter (booked, needs follow-up, not a fit) and map those to the right
        actions in your workflow. This removes the need for staff to manually set reminders or chase down next
        steps, everything flows from the mapped data.</p>
      <p className="text-md text-white shadow-text pt-3">
        For reporting, the way data is mapped upfront determines what you can track. My AI Front Desk
        dashboards break down calls answered, appointments booked, revenue generated, conversion rates, and
        source attribution by channel. The system links every conversion to its originating channel and
        conversation path, so you know which marketing efforts are driving real results. If you want to slice
        performance by time, campaign, or lead source, you need to make sure those data points are captured
        and mapped from day one.</p>
      <p className="text-md text-white shadow-text pt-3">
        The last key decision is how to handle human handoff and escalation. My AI Front Desk supports instant
        operator takeover, any teammate can step into a conversation, and the AI hands control back when
        asked. You set the rules for when escalation is triggered (for example, high-intent leads, complex
        questions, or sensitive topics) and map those triggers to your team’s workflow. Getting this right
        ensures that no hot lead waits for a reply, and your staff is only pulled in when their expertise adds
        value.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC’s implementation process starts by mapping your current data landscape, what you
        track, how you track it, and where it lives. The team works with you to standardize identifiers, align
        fields, and tune&nbsp;<GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink>&nbsp;so the system
        fits your sales process out of the gate. They also test handoff and escalation flows, making sure
        nothing falls through the cracks. Once the data structure is right, the rest of the system builds
        itself, and you see results as soon as the first conversation hits the inbox.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-mapping-and-structure-the-decisions-that-shape-my-ai-front-desk-from-day-one" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Mapping and Structure: The Decisions That Shape My AI Front Desk From Day One
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
              <h2 id="data-mapping-and-structure-the-decisions-that-shape-my-ai-front-desk-from-day-one" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Mapping and Structure: The Decisions That Shape My AI Front Desk From Day One
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
