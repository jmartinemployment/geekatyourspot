import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Setting up My AI Front Desk is not just about plugging in a tool and letting it run. The real work, and
        the difference between a generic voice bot and a true Intelligent Receptionist, happens in how you
        configure its rules, automations, and integrations to reflect your business, your priorities, and your
        workflow. My AI Front Desk is designed for configuration, not code: you set the logic, the content, and
        the escalation paths that turn it from a script reader into a real extension of your team.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is defining the core logic that powers your receptionist. My AI Front Desk works by
        answering every call, text, or chat instantly, but what it does next depends on the rules you set. You
        decide how it greets callers, using your business name, in your chosen voice and accent. You specify
        which questions it can answer directly from your own content: service details, pricing, hours, and
        policies are all mapped to your knowledge base. This is not a static FAQ. My AI Front Desk pulls updates
        from your website and documentation on a schedule, so callers always get the latest information without
        manual reprogramming.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic is where you set the boundaries between what the AI handles and what gets escalated.
        Routine requests, like booking, rescheduling, directions, or basic pricing, are resolved end-to-end by
        the AI. You configure the triggers for escalation: anything requiring human judgment, sensitive data, or
        a nuanced response is routed to a person, with the full transcript and context handed over. For SMS and
        chat, you can define keywords or patterns that trigger specific workflows, like sending a booking link
        or escalating to a live agent. After every call, My AI Front Desk logs structured outcomes, booked,
        transferred, callback requested, or no action, directly into
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, so your pipeline is always up to date.</p>
      <p className="text-md text-white shadow-text pt-3">
        Appointment booking is not a bolt-on. You configure which calendars My AI Front Desk can access, Google
        Calendar, Outlook, or Calendly, and set the rules for booking: which services are available, default
        durations, buffer times, and any required intake fields. When a caller is ready, the AI checks real-time
        availability, offers open slots, books the appointment, and sends a confirmation SMS before the call
        ends. You can define which types of appointments are eligible for self-booking and which require
        approval or manual follow-up. This keeps your schedule full without overbooking or miscommunication.</p>
      <p className="text-md text-white shadow-text pt-3">
        The extension mechanism for My AI Front Desk is integration, not custom code. The platform natively
        connects to HubSpot, Salesforce, Pipedrive, Zoho, and Shopify, as well as Zapier for broader workflow
        automation. Each integration is configured through the My AI Front Desk dashboard: you map which fields
        sync, what data is written back, and how outcomes (like a booked appointment or a missed call) trigger
        downstream automation. For example, a missed call can trigger an instant SMS,
        a&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;update, and a follow-up task. If your business
        uses tools outside the standard integrations, Zapier acts as the bridge to hundreds of other platforms.</p>
      <p className="text-md text-white shadow-text pt-3">
        Beyond the basics, you configure post-call workflows. My AI Front Desk lets you define what happens
        after every interaction: send a booking confirmation, a service summary, a payment link, or a custom
        follow-up message. You set the content, merge fields (like caller name or appointment details), and
        timing. For more advanced needs, you can set up conditional logic: if a call is missed, send a text; if
        a booking is made, notify a specific team member; if a question cannot be answered from the knowledge
        base, open a ticket for review.</p>
      <p className="text-md text-white shadow-text pt-3">
        What Geek @ Your Spot brings to this process is not just technical setup, but business alignment. Most
        small teams do not have the time or appetite to map every workflow, write every escalation rule, and
        ensure that every integration is tested against real-world scenarios. Geek @ Your Spot guides you
        through the upfront decisions: which FAQs to load, how to phrase your greeting, which fields to capture,
        and how to handle exceptions. They configure the system to reflect your priorities, not just what the AI
        can do, but what it should do for your business. This is not a one-time setup: as your business changes,
        Geek @ Your Spot can update your automations, expand your knowledge base, and refine escalation logic,
        so My AI Front Desk keeps pace with your growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you try to run My AI Front Desk out of the box, you get a generic receptionist. With the right
        configuration, you get a system that knows your business, speaks your language, and closes the loop on
        every lead. There is no scripting language or
        open&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;for custom code; everything is set through
        the dashboard, with integration handled by native connectors and Zapier. The real value is in how you
        set the rules, the content, and the handoff points, the work that turns a voice agent into a real
        Intelligent Receptionist for your team.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-you-actually-configure-in-my-ai-front-desk-rules-automations-and-where-geek-your-spot-adds-value" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What You Actually Configure in My AI Front Desk: Rules, Automations, and Where Geek @ Your Spot Adds Value
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
              <h2 id="what-you-actually-configure-in-my-ai-front-desk-rules-automations-and-where-geek-your-spot-adds-value" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What You Actually Configure in My AI Front Desk: Rules, Automations, and Where Geek @ Your Spot Adds Value
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
