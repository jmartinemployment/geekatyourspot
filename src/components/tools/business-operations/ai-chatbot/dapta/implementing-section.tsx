import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Launching Dapta in a small business environment is not a drawn-out IT project. The platform is built
        for non-technical teams, so most businesses get up and running in less than an hour. What shortens the
        process is Dapta’s no-code setup, its pre-built integrations with over 1,000 business tools, and a
        templated approach that covers the most common lead capture and booking workflows out of the box. The
        order of setup is designed to minimize disruption: connect your existing channels, define your intake
        and booking rules, and let Dapta’s autonomous agent handle the rest.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is connecting Dapta to the channels where your customers already reach you, website
        chat, SMS, WhatsApp, phone, and email. For a plumbing service in Miami-Dade or a law office in
        Broward, this means linking the business phone number, WhatsApp Business account, and website chat
        widget to Dapta’s agent. The platform’s guided setup walks you through each connection, so there is no
        need to write code or wait for IT. WhatsApp and web chat setup, for example, use embedded sign-up
        flows and guided forms, not&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;keys or developer
        access. Most teams can complete this step in under 30 minutes, as shown in Dapta’s own onboarding
        guides.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the channels are live, Dapta’s agent is trained on your business context. This means uploading
        your service descriptions, hours, team structure, and a list of the questions you want the agent to
        answer or escalate. Dapta’s onboarding does not require scripting every answer. Instead, you describe
        your business in plain English and set the rules for how leads should be qualified, when appointments
        can be booked, and which questions need to go to a human. The agent uses this information to handle
        calls and chats in a way that matches your real process, not a generic script.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s pre-built integrations are a key reason go-live is fast. Dapta connects directly to
        CRMs like HubSpot and Salesforce, calendar tools like Google Calendar, and support systems such as
        Zendesk. This means that once a lead is captured or a meeting is booked, the record appears instantly
        in the tools your team already uses. There is no manual data entry or copying between systems. For a
        small business, this means the team can see every conversation and booking in one place, even if the
        lead started on WhatsApp and finished on the phone.</p>
      <p className="text-base text-white shadow-text pt-3">
        Phased rollout is another way Dapta avoids disruption. Businesses can start by routing only
        after-hours calls or missed calls to the AI agent, using it as a backup before making it the front
        line. This lets the team build trust in the system’s accuracy and handoff process. Over time, as
        confidence grows, more channels and workflows can be added, such as inbound lead qualification,
        appointment reminders, or multi-language support. Dapta’s own case studies show this approach in
        action: Jelpit, a service provider, scaled from handling a handful of leads to managing seven times
        more without hiring extra staff, by expanding Dapta’s role in stages.</p>
      <p className="text-base text-white shadow-text pt-3">
        Throughout setup, Dapta’s design keeps the process in the hands of sales and operations teams, not
        developers. The agent’s rules and workflows are configured through a web interface with plain-language
        prompts, not code. This means a business owner or office manager can adjust how leads are scored,
        which questions are asked, and when to escalate to a human, all without technical help. Geek @ Your Spot LLC’s role as an implementation partner is to map out these flows, connect the right systems, and
        train the team on how to monitor and refine the agent’s performance. The goal is a launch that
        delivers value in days, not weeks, and that fits the real way your business works.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="going-live-with-dapta-what-actually-happens-and-why-its-fast" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Going Live with Dapta: What Actually Happens and Why It’s Fast
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
              <h2 id="going-live-with-dapta-what-actually-happens-and-why-its-fast-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Going Live with Dapta: What Actually Happens and Why It’s Fast
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
