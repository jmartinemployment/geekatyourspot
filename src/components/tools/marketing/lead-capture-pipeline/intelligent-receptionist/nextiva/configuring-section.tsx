import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Nextiva’s automation engine is built to handle the realities of a small business that cannot afford
        missed connections. The platform’s configuration centers on how calls, messages, and chats are routed,
        answered, and escalated, using the business’s own logic, not a generic script. Nextiva XBert, the AI
        receptionist, is set up through a visual workflow editor. This tool lets you map out how incoming calls
        and messages should flow: which requests the AI should answer, when to collect lead information, when to
        book appointments, and how to escalate complex or sensitive issues to a human team member. The logic is
        all point-and-click, so you do not need to write code or hire a developer. Every step is visible,
        editable, and testable before it goes live.</p>
      <p className="text-md text-white shadow-text pt-3">
        The rules you set in Nextiva are not just about routing a call to the right person. They cover the full
        customer journey from first contact to follow-up. For example, the platform lets you define custom
        greetings based on business hours, caller type, or language preference. You can specify what information
        to collect from each caller, such as name, service needed, or preferred appointment time, and set up the
        AI to qualify leads or filter out spam before the call ever reaches your staff. If a call comes in after
        hours, Nextiva’s automation takes over, answering every ring, capturing the lead, and scheduling
        appointments directly into your calendar system. The AI can handle dozens of calls at once, so there is
        no risk of overflow or dropped leads during busy periods.</p>
      <p className="text-md text-white shadow-text pt-3">
        Appointment booking is a core part of Nextiva’s automation. The AI checks real-time availability through
        integrations with your calendar or scheduling tool, books the slot, and sends instant text confirmations
        and reminders to the customer. This closes the loop without a human ever needing to follow up. The
        workflow editor also lets you set up escalation logic: if a caller is upset, uses certain keywords, or
        requests a specific service, the AI can transfer them to a live agent with a full summary of the
        conversation so the handoff is seamless. These rules are not static, admins can update scripts, change
        routing, and add new triggers as the business grows or pivots.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses with compliance requirements, such as healthcare practices, Nextiva’s configuration
        includes options for HIPAA-ready workflows. The platform supports encrypted data flows and can be set to
        restrict access or escalate sensitive calls according to your policies. Every workflow is auditable,
        with call transcripts and summaries stored for review. This is critical for regulated sectors but also
        valuable for any business that wants to track how leads are handled and where improvements can be made.</p>
      <p className="text-md text-white shadow-text pt-3">
        Nextiva does not expose a scripting language or
        open&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;for custom extensions in the way
        developer-heavy platforms do. All configuration happens within the dashboard, through visual tools,
        dropdowns, and field mapping. This lowers the technical barrier, letting a small business control its AI
        receptionist without needing IT staff. Geek @ Your Spot’s role is to work with you to define these
        rules, map your data, and test every scenario before launch. The team brings experience in translating
        real business processes into automation logic that fits your workflow, not the other way around. They
        make sure the AI’s responses match your brand voice, the escalation paths fit your team structure, and
        no lead or customer ever slips through the cracks because of a missed configuration.</p>
      <p className="text-md text-white shadow-text pt-3">
        The HVAC team from the opening story, for example, now sees every call, chat, and SMS in one interface.
        Their Nextiva setup routes routine service requests straight to booking, flags urgent issues for a
        manager, and sends out automated confirmations and reminders. No more guessing if a lead was followed up
        or a message was lost. The rules are clear, the automation is visible, and the whole team works from the
        same playbook, without needing to learn a new programming language or manage a complex integration.
        Nextiva’s approach is configuration-first, not developer-first, which is why it fits small businesses
        that want results without the overhead.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-nextiva-s-rules-and-automation-logic-shape-every-interaction" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Nextiva’s Rules and Automation Logic Shape Every Interaction
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
              <h2 id="how-nextiva-s-rules-and-automation-logic-shape-every-interaction" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Nextiva’s Rules and Automation Logic Shape Every Interaction
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
