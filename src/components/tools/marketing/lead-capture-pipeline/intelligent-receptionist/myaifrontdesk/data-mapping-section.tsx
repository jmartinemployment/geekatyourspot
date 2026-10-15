import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting My AI Front Desk live is quick, but making it work for your business depends on a few key data
        decisions at the start. The platform’s real value comes from how it structures, captures, and syncs
        information across every call, text, and chat, so what you choose to map and how you organize your data
        will shape the results you see from day one.</p>
      <p className="text-md text-white shadow-text pt-3">
        First, decide which fields matter for your workflow. My AI Front Desk can extract intent, timing,
        sentiment, budget, and any custom field you define in plain English. For a small business, this means
        you set what details are collected on every call: Is it just name and phone? Do you need service type,
        location, preferred time, or a specific intake question? The AI will prompt callers for the right
        details and fill out each field automatically, so you do not need to chase missing data later. The more
        clearly you define these fields upfront, the less cleanup and manual entry you face after launch.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next is mapping those fields to your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or calendar.
        My AI Front Desk supports direct integration with HubSpot, Salesforce, Pipedrive, Zoho, and Shopify,
        plus calendar tools like Google Calendar, Outlook, and Calendly. The mapping step is simple but
        critical: you match each field from the AI’s side (like &quot;service requested&quot; or
        &quot;appointment date&quot;) to the right field in
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or booking system. This ensures that every
        call, booking, and message lands in the right place, with no double entry or lost context. If you use
        Zapier or another integration tool, you can extend this mapping to other platforms your business relies
        on.</p>
      <p className="text-md text-white shadow-text pt-3">
        Decide how you want to handle conversation history and follow-up. My AI Front Desk logs every
        interaction, calls, texts, chats, along with full transcripts and summaries to the contact record in
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. You can choose to display these as timeline
        activities, attach them as notes, or trigger workflows based on outcomes (like &quot;booked
        appointment&quot; or &quot;needs callback&quot;). This structure gives you a single source of truth for
        every lead and customer, making it easy to track what happened, when, and what needs to happen next. For
        regulatory or privacy needs, the platform supports role-based access and can restrict sensitive data
        fields as required.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another early decision is how to handle missed calls and escalation. My AI Front Desk is built to
        respond instantly, if a call is missed, the system can send an SMS with a booking link or intake form,
        using merge fields for personalization. You set what information goes in these messages and what
        triggers an escalation to a human. For example, you might want all requests for quotes to go straight to
        a sales rep, while routine booking or FAQ calls stay with the AI. Setting these rules upfront keeps your
        team focused on what matters and prevents leads from slipping through the cracks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, think about how you want to report on performance. The platform tracks answer rates, missed
        calls by hour, booking outcomes, and conversion rates, tying every metric back to structured data
        fields. Before launch, decide which reports you want to see, daily, weekly, or monthly, and how you want
        to measure success. If your team uses custom KPIs (like &quot;estimates scheduled&quot; or &quot;repeat
        customer inquiries&quot;), make sure those are mapped in the system so you get visibility from day one.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, the upfront data structure and mapping work is not about technical configuration, it is about
        getting clear on what information you need, where it should live, and how you want to use it. My AI
        Front Desk gives you the flexibility to define these choices in plain English, with no coding or IT
        support required. The payoff is a front desk system that not only answers every call but captures,
        organizes, and reports on every detail you need to run your business better.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-what-you-need-to-decide-before-deploying-my-ai-front-desk" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping: What You Need to Decide Before Deploying My AI Front Desk
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
              <h2 id="data-structure-and-mapping-what-you-need-to-decide-before-deploying-my-ai-front-desk" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping: What You Need to Decide Before Deploying My AI Front Desk
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
