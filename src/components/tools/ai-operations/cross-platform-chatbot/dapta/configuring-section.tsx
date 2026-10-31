
export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Configuring Dapta is about translating your business rules and customer flows into an always-on,
        cross-platform agent. Dapta is not a blank chatbot builder or a code-first developer tool. It is a
        no-code platform built specifically for small and medium-sized businesses that want to automate lead
        capture, qualification, booking, and follow-up across phone, SMS, WhatsApp, and web chat. What gets
        configured is not just the conversation script, but the entire path from first contact to booked
        appointment and&nbsp;CRM&nbsp;sync.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of Dapta’s setup is Dapti, its autonomous agent. You describe your intake process, qualifying
        questions, scheduling rules, and escalation triggers in plain language. Dapti turns those into a
        working agent, no coding, no developer handoff. The configuration covers:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Inbound channel coverage: Specify which channels the agent handles (voice, SMS, WhatsApp, web chat). All are first-class citizens, no separate bots for each.</li>
        <li>Language and script: Dapta supports English and Spanish natively, including regional accents, and can be trained on your own FAQs, business documents, and website content. This means the agent answers in your voice, not as a generic bot.</li>
        <li>Qualification logic: You set the criteria for a qualified lead. The agent asks structured questions, budget, service type, urgency, county, or other fields relevant to your business. Each answer can feed a lead score or trigger a different path, so you do not get unqualified leads in your pipeline.</li>
        <li>Booking and scheduling: The agent checks your real-time calendar availability, offers open times, and locks in appointments directly on the call or chat. It adapts to your rules, who can be booked, when, and for what services.</li>
        <li>Escalation and handoff: You define when a conversation should move to a human, by keywords, sentiment, lead score, or any custom trigger. When escalation happens, the human receives the full conversation history, not a cold transfer.</li>
        <li>CRM&nbsp;and tool sync: You map which fields from the conversation land in your&nbsp;CRM, calendar, or other connected tools. Dapta has native integrations for HubSpot, Salesforce, Google Calendar, and over 1,000 other apps. Every outcome, appointment, missed call, qualified lead, can be logged instantly where your team works.</li>
        <li>Automated reminders and follow-ups: Configure rules for text or email reminders, follow-up sequences, and daily briefing summaries. These keep both your team and your prospects on track, with no manual effort.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Dapta’s extension mechanism is configuration-first. There is no
        scripting,&nbsp;API, or SDK for low-level custom logic, this
        is by design. The platform is built for non-technical teams who want to own their automation without
        hiring engineers. You get business-level control through settings, not code. Where you need to go
        further, such as integrating a new app or adjusting a workflow, Dapta’s integrations catalog covers
        the ground, and Geek @ Your Spot LLC handles the mapping and field matching as part of the deployment.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business in South Florida, this configuration approach means you never have to write or
        maintain code to keep your intake and booking process running. If your business changes, new services,
        new hours, a different&nbsp;CRM, the agent can be updated in
        minutes through Dapti’s interface. This is not just easier at launch, it is sustainable as your
        business grows and your customer mix changes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC’s role is to translate your real-world process into these Dapta flows. That means
        sitting with your team to document how you qualify leads, what questions matter, what counts as
        urgent, and where every outcome should land. They configure Dapta to mirror your intake and booking
        process, map every field to your&nbsp;CRM, and set up
        escalation rules that make sense for your staff, so you do not get a flood of unnecessary handoffs or
        lose context when a handoff does happen.</p>
      <p className="text-base text-white shadow-text pt-3">
        For example, the home services team from the opening can set Dapta to ask every new inquiry about
        service type, urgency, and zip code. If the lead is outside their area or not urgent, Dapta routes
        them to a follow-up queue. If it is an emergency, the call is transferred live to the on-call tech,
        with all details attached. Every answer, appointment, and transcript is logged to
        their&nbsp;CRM, no more guessing if a lead was handled, or
        repeating questions when a customer calls back on a different channel.</p>
      <p className="text-base text-white shadow-text pt-3">
        This configuration-first approach is what makes Dapta a fit for small teams with limited IT resources.
        You get the power of a custom solution, but with the speed and maintainability of a no-code platform.
        The agent can be live and handling real conversations in under an hour, and changes do not require a
        new project or outside developer.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short: Dapta’s rules and automation logic are set up in plain English, mapped to your real
        processes, and extended through a massive integrations catalog rather than code. Geek @ Your Spot LLC
        closes the gap between your workflow and the agent, so you get a system that matches your business,
        not a generic script. For small businesses that want to capture every lead, qualify them instantly,
        and book appointments without new staff or technical debt, this is the practical path.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="every-rule-flow-and-extension-what-gets-configured-in-dapta-and-why-it-matters" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Every Rule, Flow, and Extension: What Gets Configured in Dapta and Why It Matters
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
              <h2 id="every-rule-flow-and-extension-what-gets-configured-in-dapta-and-why-it-matters-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Every Rule, Flow, and Extension: What Gets Configured in Dapta and Why It Matters
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
