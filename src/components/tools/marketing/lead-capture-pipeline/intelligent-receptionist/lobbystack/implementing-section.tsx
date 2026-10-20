import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out LobbyStack does not look like a
        typical&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>&nbsp;onboarding. The process is shorter and
        more controlled, especially for small businesses that need to move fast and avoid downtime. LobbyStack’s
        open-source foundation and plain-language configuration mean you can adapt it to your business without
        waiting on a vendor’s roadmap or support queue. For most teams in Miami-Dade, Broward, or West Palm
        Beach, going live is a matter of days, not weeks, when you have the right groundwork and implementation
        partner. Here’s what actually happens, step by step.</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Assessment and Planning: Geek @ Your Spot LLC starts with a focused review of your current phone setup, business rules, and lead capture needs. This is not a generic checklist, every small business has its own call flow, escalation policies, and customer data priorities. The assessment covers how you handle after-hours calls, what counts as urgent, and where every call should land in your sales or support pipeline.</li>
        <li>Data and Workflow Mapping: The next move is mapping your existing processes onto LobbyStack’s logic. That means translating your intake scripts, booking rules, and escalation paths into the platform’s configuration. Because LobbyStack supports plain-language workflows and open scripts, this step is about clarity, not code. You decide what the AI says, what questions it asks, and when it hands off to a person.</li>
        <li>Integration with Current Tools: LobbyStack’s built-in connector for Google Calendar speeds up appointment booking. For teams already using Google Workspace, this means the receptionist can check real-time availability and book appointments directly, no double entry or manual follow-up. Other integrations, like&nbsp;CRM&nbsp;or custom business software, run through webhooks or the REST&nbsp;API. Geek @ Your Spot LLC handles the mapping and connection, so you do not need to rewire your stack.</li>
        <li>Configuration and Testing: With the logic mapped and integrations in place, the team configures LobbyStack to answer calls, capture lead details, and trigger alerts (email or SMS, depending on your plan). Testing happens in a closed environment first, using the Free plan’s browser-based minutes lets you simulate real calls and see the AI’s responses before anything goes live. This is where you catch edge cases, tune the scripts, and make sure every workflow matches your business rules.</li>
        <li>Phased Rollout: You do not need to flip the switch for every line at once. Most businesses start with after-hours or overflow calls. Forwarding only the main line after 5 p.m., or sending unanswered calls after two rings, lets you see how LobbyStack handles real traffic without losing your safety net. Voicemail remains as a fallback until you are confident in the AI’s performance.</li>
        <li>Go-Live and Review: Once the AI is handling calls as expected, the line goes live. Call summaries, recordings, and transcripts appear in your dashboard, so your team can review outcomes and fine-tune the system. Geek @ Your Spot LLC supports ongoing adjustments, but you keep control: every workflow, script, and escalation rule is open for you to change as your business evolves.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        What shortens the go-live process with LobbyStack is the combination of open access and clear
        configuration surfaces. You do not wait for vendor approval or feature requests. The platform’s
        open-source nature means you can audit, customize, and deploy changes on your timeline, not theirs. For
        businesses that want even tighter control, self-hosting is an option from day one. This puts all call
        data, recordings, and business logic on your own infrastructure, with your own update and backup
        schedule.</p>
      <p className="text-md text-white shadow-text pt-3">
        Support is not an afterthought. The LobbyStack documentation and community resources are available for
        self-hosted deployments, while managed cloud users get email or priority support depending on their
        plan. Geek @ Your Spot LLC bridges the gap: their role is to translate your business needs into a working
        LobbyStack setup, configure integrations, and ensure your team knows how to adjust rules as you grow.</p>
      <p className="text-md text-white shadow-text pt-3">
        The Friday afternoon after launch looks different. The same plumbing team that missed a lead earlier in
        the week now sees a dashboard of calls, each one logged with caller details, booking status, and a
        summary of what was handled or escalated. No more chasing voicemails or wondering if a lead was lost to
        a slow callback. LobbyStack’s rollout is not a one-time fix; it is a shift to a system where your
        business, not your vendor, controls how you connect with every customer.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-launch-lobbystack-in-your-existing-systems" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch LobbyStack in Your Existing Systems
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
              <h2 id="what-it-takes-to-launch-lobbystack-in-your-existing-systems-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch LobbyStack in Your Existing Systems
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
