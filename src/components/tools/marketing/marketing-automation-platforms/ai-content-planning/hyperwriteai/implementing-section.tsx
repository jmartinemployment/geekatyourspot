import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Getting HyperWrite up and running for Intelligent Content Planning is not a generic software rollout.
        It is a focused, stepwise implementation that starts with the business’s real bottlenecks, manual
        drafting, broken content handoffs, and endless email loops. What shortens go-live is HyperWrite’s
        foundation as a browser-native, context-aware assistant with prebuilt connectors and a templated setup
        process. Most teams do not need to rip out existing tools or overhaul their process to see value
        quickly.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is mapping the core workflows: where content gets drafted, reviewed, and published, and
        which team members handle each step. HyperWrite is designed to work inside the browser, so it does not
        require teams to move their work into a new platform. Instead, it layers predictive writing and
        automation into the browser tabs and apps the team already uses, including Gmail, Google Docs, and
        LinkedIn. This means there is no drawn-out migration or weeks of retraining, users see the AI
        assistant in the places they already draft, and it starts making suggestions immediately.</p>
      <p className="text-base text-white shadow-text pt-3">
        A typical go-live for a small marketing team in South Florida follows this order:</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Initial workflow mapping: Document where content bottlenecks occur, emails, social media posts, blog drafts, or approval chains.</li>
        <li>Browser extension deployment: Install the HyperWrite Chrome extension or browser plugin across user machines. This is a lightweight step, no admin-level installs or IT tickets for most teams.</li>
        <li>Template and persona setup: Upload reference documents, past emails, or brand guidelines so HyperWrite can learn the team’s voice and tone. The platform’s Personas feature uses this material to tailor suggestions.</li>
        <li>Rules and trigger configuration: Set up automation logic for routine content, such as standard replies, social post templates, or approval routing. This is usually done through a guided wizard, not code.</li>
        <li>Phased rollout: Start with one channel or workflow (for example, email replies), monitor adoption and impact, then expand to other content types such as blog posts, social media, or newsletters.</li>
        <li>Team training: Brief, focused sessions, often under an hour, covering how to use inline suggestions, trigger automations, and adjust the assistant’s tone in real time.</li>
        <li>Live monitoring and adjustment: Geek @ Your Spot LLC reviews early usage, tunes templates, and helps troubleshoot any integration snags, ensuring the system fits the team’s real-world habits.</li>
      </ol>
      <p className="text-base text-white shadow-text pt-3">
        What makes this process fast is that HyperWrite does not force a business to replatform. Its
        predictive writing and automation layer sits on top of the browser, so existing content management
        systems, email clients, and scheduling tools stay in place. The team’s workflow does not fracture,
        HyperWrite adapts to it.</p>
      <p className="text-base text-white shadow-text pt-3">
        For many small businesses, the most time-consuming part of any new tool is the initial configuration
        and getting buy-in from users. HyperWrite’s templated onboarding and ability to match the team’s
        writing style from day one mean that even skeptical users see the AI drafting in their own voice, not
        generic robot text. This is especially clear in early email automation: the assistant can turn a few
        shorthand notes into a full, polished reply inside Gmail, using the same brand tone as the team’s best
        communicator.</p>
      <p className="text-base text-white shadow-text pt-3">
        Approval workflows are another sticking point for small teams. HyperWrite’s rule-based routing can be
        configured so that content requiring review is flagged and sent to the right manager, without extra
        manual steps. This keeps content moving and avoids the bottleneck of waiting for sign-off in a
        cluttered inbox. The result is that drafts do not sit idle, content gets reviewed, approved, and
        published faster, and the team spends less time chasing down approvals or clarifying who owns the next
        step.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC accelerates this process by handling the upfront mapping, configuration, and user
        onboarding. They ensure the browser extension is deployed correctly, templates are loaded, and
        automation rules reflect the team’s real approval structure. Instead of a drawn-out, one-size-fits-all
        deployment, the rollout is phased and local, tailored to the workflow of a small business in
        Miami-Dade, Broward, or West Palm Beach. This keeps downtime to a minimum and delivers results in
        days, not months.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, the&nbsp;<GlossaryLink slug="feedback-loop">feedback loop</GlossaryLink>&nbsp;is short.
        Because HyperWrite’s changes are visible right inside the team’s daily tools, it is easy to spot what
        is working and what needs adjustment. Geek @ Your Spot LLC monitors adoption, gathers user feedback, and
        tweaks automation rules or templates as needed. The system improves with use, and the team quickly
        moves from manual drafting to a guided, automated workflow that feels familiar but moves much faster.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-shortens-go-live-with-hyperwrite-and-what-to-expect-during-implementation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens Go-Live with HyperWrite and What to Expect During Implementation
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
              <h2 id="what-shortens-go-live-with-hyperwrite-and-what-to-expect-during-implementation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens Go-Live with HyperWrite and What to Expect During Implementation
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
