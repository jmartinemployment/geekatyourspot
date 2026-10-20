import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting Nextiva live in a small business is not just about flipping a switch. The speed comes from how
        much of the heavy lifting is already built into the platform, and how well it fits with what you already
        run. Nextiva is designed for teams who need to move quickly, without a dedicated IT staff or weeks of
        downtime. Most clients in Miami-Dade, Broward, and Palm Beach want a solution that works with their
        existing phone lines, calendars, and messaging tools, not one that forces a rip-and-replace overhaul.
        Here’s what matters for a fast go-live, and what actually happens at each step.</p>
      <p className="text-md text-white shadow-text pt-3">
        First, Nextiva XBert is set up with your business information, your website, Google Business Profile,
        hours, services, and FAQs. The platform can scan this data directly, pulling in what it needs to answer
        common questions and route calls correctly. This means you skip the usual manual entry and knowledge
        base building that slows other systems down. For most small businesses, this step takes minutes, not
        days, and does not require technical skills. An administrator can complete initial setup through a web
        dashboard, no coding or special training needed.</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Provide business details (website, Google Business Profile, service hours, FAQ).</li>
        <li>Select what the AI should handle: call answering, appointment booking, lead capture, or all three.</li>
        <li>Connect calendars and scheduling tools. Nextiva supports direct integration, so appointment booking and confirmations work out of the box.</li>
        <li>Customize greetings and escalation rules. Choose a branded voice, set up how calls escalate to your team, and define what gets routed where.</li>
        <li>Test the system with real scenarios, calls, chats, and texts. Make sure answers are accurate and routing works for both routine and edge cases.</li>
        <li>Go live: flip the switch and let Nextiva handle live customer interactions. Monitor performance in real time.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        What shortens the timeline is the use of pre-built connectors and a templated setup flow. Nextiva’s
        integrations with calendars and scheduling tools mean that appointment booking is ready immediately, no
        custom development or outside consultants needed. Automated text confirmations and reminders are
        included, so you do not need to wire up a separate SMS tool. The system is built to handle phone, SMS,
        and web chat from the same workspace, so you avoid the delays of trying to sync up different apps or
        vendors.</p>
      <p className="text-md text-white shadow-text pt-3">
        A phased rollout is possible, but rarely needed for small teams. Most local businesses can move straight
        from setup to production in under a day. For more complex environments, say, a business that
        needs&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;integration or has multiple locations,
        Nextiva supports incremental deployment. You can bring one location or department live, test it, and
        then roll out to others. This keeps risk low and lets staff learn the system in real time, rather than
        all at once.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC closes any gaps by handling the configuration, integration, and testing steps. Many
        small businesses worry about connecting their calendars or making sure the AI understands their industry
        language. The consultancy’s role is to map out what the AI needs to know, connect it to the right data
        sources, and test the full workflow before launch. This removes the guesswork and prevents the common
        pitfalls that cause delays or bad customer experiences.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the HVAC team in West Palm Beach, this means the Friday afternoon scramble is gone. Instead of
        missing calls while trying to update a calendar, Nextiva picks up every ring, books appointments in real
        time, and sends confirmations by text. Chat requests are answered instantly, and the team sees every
        conversation in one place. By Monday, the team is working from a single workspace, not juggling half a
        dozen apps. The entire go-live process, from kickoff to first answered call, takes less time than
        training a new receptionist, and costs a fraction of a single missed job.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-nextiva-goes-live-what-actually-gets-you-up-and-running-fast" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Nextiva Goes Live: What Actually Gets You Up and Running Fast
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
              <h2 id="how-nextiva-goes-live-what-actually-gets-you-up-and-running-fast" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Nextiva Goes Live: What Actually Gets You Up and Running Fast
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
