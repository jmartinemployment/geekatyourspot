import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Manychat’s technical architecture is designed for social-first businesses that need to manage high
        volumes of conversations without losing track of context or data. At its core, Manychat connects
        directly to major messaging platforms, Instagram, WhatsApp, Facebook Messenger, TikTok, Telegram, SMS,
        and email, using official APIs. This means it can read and send messages, trigger automations, and
        update contact records in real time, all while staying within the rules of each channel.</p>
      <p className="text-md text-white shadow-text pt-3">
        Each connected channel becomes a stream feeding into
        Manychat’s&nbsp;<GlossaryLink slug="unified-inbox" className="text-[#0B162A] hover:underline">unified inbox</GlossaryLink>&nbsp;and automation
        engine. The system supports up to three channels on its Essential plan, so a small business can cover
        its main social touchpoints without paying for unused capacity. All incoming messages, comments, and
        DMs are handled in one place, with custom labels and rules to sort, prioritize, and assign
        conversations to team members. This eliminates the need for staff to juggle multiple apps or browser
        tabs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manychat holds a structured contact database behind the scenes. Every interaction, whether it’s a
        comment, a DM, or a reply to a campaign, creates or updates a contact profile. These profiles store
        names, emails, phone numbers, tags, conversation history, and engagement data. The system’s
        segmentation and tagging tools mean you can build dynamic lists for follow-up, retargeting, or nurture
        campaigns. When a lead is captured, Manychat can push their details to other tools, such as Google
        Sheets for tracking or ActiveCampaign for advanced email and SMS automation. This kind of integration
        keeps your lead pipeline flowing without manual exports or data entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s automation engine relies on event-driven triggers. You can set rules based on specific
        actions, a comment containing a keyword, a DM with a certain phrase, or a reply to a story. Each
        trigger can launch a custom automation: sending a message, tagging a contact, collecting information,
        or syncing with a&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>. The logic is flexible but stays
        user-friendly, so you don’t need to be a developer to build complex flows.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manychat’s analytics dashboard and reporting features give you visibility into how your pipeline is
        performing. You can track metrics like conversion rates, contact collection, and revenue generated
        from in-chat purchases. The system logs every conversion, whether it’s a buy button click, an email
        collected, or a phone number entered, so you can see which campaigns and flows produce real results.
        This feedback loop helps you refine your automations and double down on what works.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and compliance are built into the platform. Manychat maintains a private bug bounty program
        in partnership with Bugcrowd, and it offers standard protections for data privacy and integrity. For
        businesses that need to meet higher compliance standards, this is a foundational requirement, not an
        add-on.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Manychat is built to scale with your business. Its architecture supports multiple users with
        role-based permissions, so you can add team members as your operation grows. The automation engine,
        contact database, and integration points are robust enough for high-volume campaigns, but accessible
        enough for a small business with limited tech resources. The end result: a single platform that brings
        together conversations, contacts, automations, and analytics, without the fragmentation or manual work
        that slows teams down.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="whats-under-the-hood-manychats-architecture-integrations-and-data-flow" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What’s Under the Hood: Manychat’s Architecture, Integrations, and Data Flow
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
              <h2 id="whats-under-the-hood-manychats-architecture-integrations-and-data-flow" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What’s Under the Hood: Manychat’s Architecture, Integrations, and Data Flow
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
