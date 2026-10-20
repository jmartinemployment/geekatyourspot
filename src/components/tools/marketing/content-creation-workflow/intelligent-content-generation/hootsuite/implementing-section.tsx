import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out Hootsuite for a small business is not a one-size-fits-all process. The speed and
        smoothness of go-live depend on how well the tool fits the existing workflow, the integrations that
        are already in place, and how much of the content calendar is ready to automate from day one. For a
        South Florida small business, the goal is to get from blank screens and missed posts to a working,
        automated content schedule with as little downtime and manual rework as possible.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first advantage comes from Hootsuite’s pre-built integrations and connectors. Because Hootsuite
        already connects directly to major social networks, Google Analytics, Adobe Creative Cloud, and Slack,
        most small businesses do not need to build or maintain custom bridges between their content platforms
        and the tool. Setting up these integrations is usually a matter of authenticating accounts and mapping
        which social handles, analytics properties, or creative asset libraries should sync in real time. This
        shortcut, native connectors and simple OAuth handshakes, removes weeks of custom IT work that would
        otherwise slow down deployment.</p>
      <p className="text-md text-white shadow-text pt-3">
        After integrations, the next time-saver is the templated setup for content calendars, approval
        workflows, and role permissions. Hootsuite comes with drag-and-drop calendars, multi-step approval
        flows, and permission templates that match common small business structures. For example, a business
        owner can assign posting rights to a marketing assistant, set up an approval step for themselves, and
        ensure nothing goes live without review. This structure lets even lean teams delegate content creation
        and review without losing oversight. Because these are templates, not bespoke builds, configuration
        happens in hours, not days.</p>
      <p className="text-md text-white shadow-text pt-3">
        The phased rollout approach is another way to shorten go-live. Rather than waiting for every detail to
        be perfect, Geek @ Your Spot typically recommends a staged deployment: start with one or two core
        channels (often Facebook and Instagram), get the basic content flow working, and then bring in
        additional networks, bulk scheduling, and analytics once the team is confident. This means a business
        is not stuck waiting for a “big bang” launch. Instead, they see immediate gains, posts going out on
        time, approvals happening automatically, and analytics dashboards starting to fill up, while the rest
        of the system comes online in parallel.</p>
      <p className="text-md text-white shadow-text pt-3">
        The order of events usually looks like this:</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Discovery and scoping: Map out existing content workflows, social accounts, and approval needs.</li>
        <li>Integration setup: Connect Hootsuite to each required network, analytics tool, and creative asset library.</li>
        <li>Template configuration: Apply standard approval flows and role permissions, adapting as needed for the business’s actual team structure.</li>
        <li>Initial content import: Load in any evergreen content, draft posts, or campaign assets that should be scheduled immediately.</li>
        <li>Phased channel activation: Go live on the highest-priority social channels first, then expand to others.</li>
        <li>Training and handoff: Walk the team through the dashboard, scheduling, and approval process. Provide a checklist for daily, weekly, and monthly tasks.</li>
        <li>Ongoing support: Triage any integration issues, adjust templates as the content strategy evolves, and add new automations as needed.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        What shortens go-live most is starting with clear, mapped workflows and using Hootsuite’s built-in
        templates instead of trying to customize everything up front. The platform’s deep integration with
        Adobe Creative Cloud and Adobe Stock also means creative assets can be sourced, edited, and published
        without ever leaving Hootsuite. This cuts out the back-and-forth between design and marketing tools,
        which is often where small teams lose momentum.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that have struggled with abandoned social pages or inconsistent posting, the difference
        is immediate. Instead of scrambling to post in real time, teams can build a week or month of content
        in a single session, set up automated approvals, and let Hootsuite handle the scheduling and
        publishing. The owner or manager gets oversight through dashboards and notifications, but does not
        have to micromanage every step. This is what lets a two-person marketing team operate with the
        consistency and coverage of a much larger department.</p>
      <p className="text-md text-white shadow-text pt-3">
        The last piece is ongoing measurement and optimization. Once Hootsuite is live, its analytics and
        trend-tracking tools let the business see which posts are actually driving engagement and leads.
        This&nbsp;<GlossaryLink slug="feedback-loop">feedback loop</GlossaryLink>&nbsp;is critical: it shows
        where the workflow is working and where it needs to be tuned. Geek @ Your Spot’s role is to make sure
        this loop is closed, so the team is not just posting more, but posting smarter, with less manual
        effort every week.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-launch-hootsuite-in-a-small-business-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch Hootsuite in a Small Business Environment
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
              <h2 id="what-it-takes-to-launch-hootsuite-in-a-small-business-environment" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch Hootsuite in a Small Business Environment
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
