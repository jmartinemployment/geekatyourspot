import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        LobbyStack stands apart because it does not force your business into someone else’s script. The core
        value is control: you set the rules for how calls are answered, how information is gathered, and what
        happens next. This is not just a matter of swapping out a greeting. LobbyStack’s configuration covers
        every step of the call flow, from the first word the caller hears to how emergencies, bookings, and
        after-hours calls are routed. For small businesses in South Florida, that means the system works the way
        you do, not the other way around.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the heart of LobbyStack are configurable call handling rules. You decide what the receptionist says,
        which questions it asks, and the logic for moving a call from intake to booking, escalation, or message
        capture. The system is built to let you update business hours, pricing, policies, and instructions as
        changes happen, without waiting on a vendor update. This flexibility is critical when you need to
        respond to new services, seasonal demand, or regulatory shifts. On the technical side, the open-source
        nature of LobbyStack means you can audit every line of logic. You see exactly how the system processes
        calls, stores data, and applies business rules. For regulated industries or privacy-conscious teams,
        this transparency is a prerequisite, not a bonus.</p>
      <p className="text-md text-white shadow-text pt-3">
        LobbyStack supports both managed cloud and self-hosted deployments. In the managed cloud, Geek @ Your
        Spot configures the receptionist to match your business requirements, this includes setting up call
        flows, defining escalation paths, and integrating with your existing calendar (Google Calendar is
        supported natively). For self-hosted environments, the configuration runs deeper. Your team, or Geek @
        Your Spot on your behalf, can modify the open-source codebase itself. You control the deployment, the
        data storage, and the integrations. This is not a
        switch-flip&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>: you define how the receptionist
        interacts with your internal systems, which model it uses for voice recognition, and how it logs and
        retains call data.</p>
      <p className="text-md text-white shadow-text pt-3">
        What gets configured in practice? Here’s a breakdown drawn from LobbyStack’s own documentation and
        feature set:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Greeting scripts: Craft the exact language your AI receptionist uses to welcome callers, including brand tone and language preference.</li>
        <li>Intake questions: Set up the questions the receptionist asks to qualify leads or collect information for bookings, such as address, service need, or safety details.</li>
        <li>Escalation and transfer logic: Define what counts as an emergency, who is on-call, and which calls should be routed to a live team member.</li>
        <li>Booking rules: Decide when and how appointments are offered, which slots are available, and what confirmation details are sent.</li>
        <li>Fallback and message-taking: Set the rules for when the system should take a message, send an alert to your team, or escalate to human intervention.</li>
        <li>Language handling: Configure which languages the receptionist supports (over 70 via OpenAI GPT-Live), and set the default for your customer base.</li>
        <li>Data retention and privacy: For self-hosted deployments, set policies for how long to keep call logs, transcripts, and recordings, and who can access them.</li>
        <li>Update timing: Control when software updates are applied, pin tested versions, and review changelogs before rolling out changes.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        LobbyStack’s extension mechanism is rooted in its open-source codebase. For most small businesses,
        configuration happens through plain-language settings and the dashboard. For those with developer
        resources or working with a consultancy like Geek @ Your Spot, the source code can be forked, modified,
        and redeployed. This allows for deep customization: you can add custom integrations, adjust voice and
        behavior, or even rebrand the interface. There is no plugin marketplace or script library built into
        LobbyStack, but the repository supports direct code changes and API-level integrations. This is where a
        technical partner earns their keep, by mapping your business data, policies, and workflows onto the
        platform, and by building or connecting the integrations you need.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process for configuring LobbyStack is hands-on. Geek @ Your Spot starts by mapping your business’s
        intake and escalation rules, then sets up the receptionist to reflect your real processes. For
        self-hosted clients, this may mean standing up Docker containers, connecting your own Twilio and OpenAI
        accounts, and setting up your own database and dashboard with HTTPS. For managed cloud clients, Geek @
        Your Spot handles the setup, monitoring, and updates, while you retain control over how the receptionist
        behaves day to day. Either way, every aspect of the call flow is yours to define. This is not a black
        box, you see, test, and change every rule that matters.</p>
      <p className="text-md text-white shadow-text pt-3">
        This level of control is what makes LobbyStack a fit for small businesses that want real flexibility.
        You are not locked into a vendor’s roadmap or forced to accept a one-size-fits-all script. When your
        business changes, your receptionist changes with it, without waiting for the next product release or
        paying for a custom development cycle. For teams with strict data requirements or
        complex&nbsp;<GlossaryLink slug="call-routing">call routing</GlossaryLink>&nbsp;needs, the open-source
        extension model means nothing is off limits. You own the logic, the data, and the outcome. That is the
        difference between a true Intelligent Receptionist and
        another&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>&nbsp;answering service.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-lobbystack-business-rules-call-logic-and-extending-the-platform" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in LobbyStack: Business Rules, Call Logic, and Extending the Platform
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
              <h2 id="what-gets-configured-in-lobbystack-business-rules-call-logic-and-extending-the-platform" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in LobbyStack: Business Rules, Call Logic, and Extending the Platform
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
