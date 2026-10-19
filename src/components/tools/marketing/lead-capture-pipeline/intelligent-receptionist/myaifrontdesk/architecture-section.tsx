import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        My AI Front Desk is built as a cloud-based platform designed for small businesses that need reliable,
        always-on front desk coverage without adding staff. Its architecture is focused on two things: seamless
        connection to your existing business tools, and accurate, structured data capture from every customer
        interaction. There is no hardware to install and no new phone number to adopt, your current business
        line forwards directly to the AI, which handles the rest.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of My AI Front Desk is its conversational AI engine, which uses large language models and
        neural voice synthesis to interact with callers in real time. This engine is trained on your business’s
        own information: services, pricing, FAQs, and tone. You control the greeting, the instructions, and even
        the voice and accent the system uses. The AI pulls knowledge from your website and internal documents,
        updating itself as your information changes. When a caller asks a question, the AI draws from this
        knowledge base to respond accurately, not from generic scripts.</p>
      <p className="text-md text-white shadow-text pt-3">
        All communication channels run through a shared memory layer that sits behind the scenes. This means
        every call, text, email, and chat is logged as structured data about the contact, who they are, what
        they want, and when they are likely to act. The platform extracts not just contact details, but custom
        fields you define: intent, urgency, preferred service, or budget. These fields are mapped to
        your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;and
        analytics tools, so every conversation powers your sales and service workflows automatically.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is a core strength. My AI Front Desk connects natively to Google Calendar, Outlook, and
        Calendly for real-time appointment
        booking.&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;sync
        is built in for HubSpot, Salesforce, Pipedrive, and Zoho, with every conversation, transcript, and
        summary attached to the contact record. For businesses with more complex needs, the platform connects to
        other systems through&nbsp;<Link id="tools-marketing-intelligent-receptionist-myaifrontdesk-architecture-zapier" href="/tools/marketing/zapier" className="text-[#0B162A] hover:underline">Zapier</Link>, so you can trigger workflows in hundreds of other apps without extra
        coding. Retailers can connect Shopify to surface order status, customer history, and loyalty data on
        every call, allowing the AI to answer order-status questions and route by store or location.</p>
      <p className="text-md text-white shadow-text pt-3">
        The system is built to scale with your needs. The free plan covers limited monthly minutes for smaller
        teams, while paid plans add more minutes, advanced integrations, and support for unlimited concurrent
        calls. There is no per-seat charge, and you can add as many team members as you need to access call logs
        and reporting. For high-volume operators or multi-location businesses, an enterprise plan offers custom
        pricing and central reporting per location.</p>
      <p className="text-md text-white shadow-text pt-3">
        Every call is recorded, transcribed, and summarized by the AI. These records are written back to
        your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;and
        are searchable across all contacts. The activity timeline in
        your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;shows
        every interaction, call, SMS, chat, note, or form submission, in reverse chronological order, with
        click-to-expand details. This structure means you can quickly review the full history of a lead or
        customer, spot trends in missed calls or peak hours, and connect call outcomes directly to booked
        revenue.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and compliance are built in. My AI Front Desk encrypts all data in transit and at rest. For
        healthcare and other regulated industries, the platform supports HIPAA compliance and can sign a BAA.
        Sensitive information, like payment card numbers or clinical details, is never collected by text;
        instead, the AI sends a secure link to a form or portal when needed.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s architecture also allows for fast setup. Most small businesses can be live in under five
        minutes, forwarding their number and configuring the AI through a guided wizard. Multi-location rollouts
        and number porting take a bit longer but do not require downtime. You define the message workflows,
        merge fields, and escalation rules. For example, you can configure post-call SMS to send booking
        confirmations, service summaries, or links to intake forms automatically, and set escalation so complex
        queries or technical troubleshooting are handed off to a human with the conversation context preserved.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams in Miami-Dade, Broward, and Palm Beach, this means you get a front desk system that plugs into
        what you already run, captures every detail that matters, and gives you control over how leads,
        bookings, and customer data flow through your business. My AI Front Desk is not a black box; it is a
        transparent, configurable layer that turns every customer touchpoint into structured, usable information
        without adding to your admin burden.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-powers-my-ai-front-desk-architecture-integrations-and-data-handling" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers My AI Front Desk: Architecture, Integrations, and Data Handling
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
              <h2 id="what-powers-my-ai-front-desk-architecture-integrations-and-data-handling" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers My AI Front Desk: Architecture, Integrations, and Data Handling
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
