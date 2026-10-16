import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Going live with My AI Front Desk is not a long, technical slog. For small businesses in South Florida,
        the real advantage is speed and predictability. My AI Front Desk is designed so a team can move from
        fragmented, multi-inbox chaos to a unified, always-on lead capture pipeline in days, not weeks. The
        platform’s structure and built-in integrations handle most of the heavy lifting, so you will not spend
        your first month just wiring up basic connections or writing custom code.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is connecting your existing communication channels. My AI Front Desk supports direct
        connections for website chat, SMS, Facebook Messenger, Instagram DMs, email, and phone. You add each
        channel inside the Channels tab, and every message, whether it starts as a text, call, or DM,
        immediately routes into the Unified Inbox. There is no need to create separate workflows for each
        platform, and you do not have to manage multiple logins. This is a major time-saver if you are used to
        toggling between five different tools just to keep up with daily inquiries.</p>
      <p className="text-md text-white shadow-text pt-3">
        The Unified Inbox is not just a catch-all. It keeps every conversation labeled by channel, stores the
        full chat history, and links each thread to the
        right&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;contact. Operators can reply, escalate, or
        close a conversation from the same screen. If a customer switches from Instagram to SMS to phone, the
        system keeps the thread together, so you see the whole story at a glance. That means no more hunting
        for context or losing leads in the shuffle between team members.</p>
      <p className="text-md text-white shadow-text pt-3">
        Getting My AI Front Desk live does not require developers or weeks of training. According to the
        platform’s own documentation, setup is managed and active in about 30 minutes with no code required.
        The process is straightforward: connect your channels, import or build your knowledge base so the AI
        answers with your hours, pricing, and policies, and set up your escalation rules. The AI is trained to
        answer real questions, ask follow-ups, and even book appointments live during the conversation, then
        logs the result to the&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;automatically. If an
        inquiry needs a human touch, a teammate can step in at any time, and the AI will hand control back
        when asked.</p>
      <p className="text-md text-white shadow-text pt-3">
        The&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;component is included from the start. Unlike
        legacy systems where you need to bolt on a&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or
        pay for extra seats, My AI Front Desk builds
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;as conversations happen. Every call, text,
        email, and chat is transcribed, summarized, and saved to the right contact record. No more manual data
        entry or waiting for someone to update the pipeline at the end of the week. The AI also auto-enriches
        every record with details like intent, fit, urgency, and outcome, so your sales team can prioritize
        high-value leads without digging through old notes.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that already use HubSpot, Salesforce, or Pipedrive, My AI Front Desk pushes
        conversation data directly to those platforms. There is no need for manual syncing or custom
        middleware. This means your team can keep working in the environment they know, while the AI keeps
        records current and actionable.</p>
      <p className="text-md text-white shadow-text pt-3">
        The go-live timeline is shortened by these pre-built connectors and a templated setup process. You are
        not starting from scratch. Most of the initial configuration can be done in a single session, and you
        can roll out channels one at a time if needed. For a business that wants to test the system before
        switching over completely, a phased rollout is possible: start with website chat and SMS, then add
        phone and social channels as your team gets comfortable. This reduces risk and lets you see results
        right away without disrupting your current workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot’s role is to close the last mile. The team handles the mapping of your business
        rules, ensures your knowledge base is accurate and up to date, and configures escalation logic so
        high-intent leads never sit idle. They also train your staff on how to use the Unified Inbox and
        interpret the AI’s&nbsp;<GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink>&nbsp;so your
        team acts on the right opportunities first. For businesses with more complex needs, such as custom
        routing or integration with industry-specific tools, Geek @ Your Spot manages the configuration so you
        do not have to.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real difference comes on the first Monday after launch. Instead of sorting through missed calls,
        scattered texts, and forgotten DMs, your team opens one dashboard and sees every new lead, complete
        with context, next steps, and a clear record of what has already happened. Calls that would have gone
        to voicemail are answered and logged. Texts that used to sit unread for hours get a real response and
        a follow-up sequence if needed. The manual, error-prone handoffs disappear. Your sales pipeline stays
        full, and your team spends its time closing instead of chasing lost details.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-actually-happens-when-you-go-live-with-my-ai-front-desk-setup-shortcuts-and-the-real-timeline" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Actually Happens When You Go Live With My AI Front Desk: Setup, Shortcuts, and the Real Timeline
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
              <h2 id="what-actually-happens-when-you-go-live-with-my-ai-front-desk-setup-shortcuts-and-the-real-timeline" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Actually Happens When You Go Live With My AI Front Desk: Setup, Shortcuts, and the Real Timeline
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
