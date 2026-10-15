import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Going live with My AI Front Desk does not look like a traditional IT overhaul. For a small business in
        South Florida, the process is fast, direct, and designed to minimize disruption. The platform is built
        for teams who cannot afford downtime, new hardware, or a complex migration. Instead, My AI Front Desk
        connects to what you already use, your business phone number, your calendar,
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, and starts answering calls within minutes.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is forwarding your existing business line. My AI Front Desk supports standard call
        forwarding (*72 on most carriers) so you do not need to change your phone number or set up new devices.
        This keeps your published contact details, business cards, and web listings unchanged. Most small
        businesses complete this in under five minutes, and for multi-location rollouts, the process is still
        measured in hours, not days. There is no waiting for hardware delivery, technician visits, or number
        porting unless you want to move your number permanently, which the platform supports with a typical
        window of three to five business days.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once forwarding is in place, setup moves to training the AI on your business. This is not a technical
        exercise. My AI Front Desk uses a guided wizard that walks you through uploading your service list,
        pricing, business hours, and FAQ content. The AI is trained to answer in your business’s tone, using the
        details you provide. There is no need to write scripts or code; the platform is designed for owners, not
        engineers. If you need to update pricing or hours, you change them in one place and the AI updates
        everywhere, phone, text, chat, and web.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration with your calendar and&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;is handled
        through pre-built connectors. My AI Front Desk supports Google Calendar, Outlook, and Calendly natively.
        Connecting is as simple as authenticating your account and granting access. The AI then reads your
        real-time availability, offers open slots to callers, books appointments live, and logs the booking
        details instantly. For&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, the platform syncs with
        HubSpot, Salesforce, Pipedrive, and Zoho, as well as Shopify for retail. Zapier support extends this
        further, so if your team relies on a different system, you can still connect it without custom
        development.</p>
      <p className="text-md text-white shadow-text pt-3">
        The rollout is phased but short. Most teams start with inbound call handling, letting the AI answer,
        qualify, and book appointments. Once that is live, you can enable features like missed-call text back,
        two-way SMS, and web chat. Each adds a channel but runs on the same shared memory, so data stays
        consistent and every conversation is logged. The platform is ready for 24/7 operation from day one, with
        no extra charge for after-hours or weekend coverage.</p>
      <p className="text-md text-white shadow-text pt-3">
        What shortens the go-live is the combination of pre-built integrations, a no-code setup process, and
        clear separation between what the AI handles and what gets escalated to a human. Routine calls, hours,
        directions, pricing, booking, are handled end-to-end by My AI Front Desk. Anything that needs human
        judgment is warm-transferred or escalated with the full conversation history. This means your team only
        sees the calls that actually need them, and nothing gets lost in the handoff.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a small business, this approach means you can move from missed calls and scattered lead data to a
        fully automated, always-on front desk in less than a lunch break. No IT project, no retraining staff,
        and no risk of downtime. The platform’s flat pricing and free trial remove the usual cost barriers, so
        you can see it work in your environment before committing. The entire process is built to let you keep
        running your business while the front desk problem is solved behind the scenes.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-launching-my-ai-front-desk-looks-like-in-your-existing-setup" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Launching My AI Front Desk Looks Like in Your Existing Setup
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-launching-my-ai-front-desk-looks-like-in-your-existing-setup" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Launching My AI Front Desk Looks Like in Your Existing Setup
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
