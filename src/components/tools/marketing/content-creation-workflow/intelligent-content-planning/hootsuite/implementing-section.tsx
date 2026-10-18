import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting Hootsuite live in a small business environment is less about technical hurdles and more about
        removing the chaos that slows a team down. The platform is built to centralize content planning,
        creation, and publishing, so the real work is in mapping your current tangle of spreadsheets, drafts,
        and approval threads into one connected workflow. The fastest path is to use Hootsuite’s pre-built
        connectors and templated setup, which allow most teams to skip custom development and go from
        fragmented to unified in days, not months.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process starts with an audit of your current channels and publishing habits. Geek @ Your Spot
        works with your team to inventory every social account, content calendar, and approval spreadsheet you
        use now. This is not just a checklist, each source becomes a mapped input in Hootsuite’s dashboard. By
        bringing all accounts and historic content calendars into one place, you eliminate the risk of posts
        going out off-brand or at the wrong time. The result is a single view of your publishing pipeline,
        with every draft, asset, and schedule visible at a glance.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pre-built integrations with tools like Slack and Microsoft Teams shorten the setup even further. There
        is no need to retrain your team to use a new notification system or approval queue, Hootsuite routes
        alerts, approvals, and content drafts directly into the channels your team already uses. For small
        businesses in Miami-Dade, Broward, and West Palm Beach counties, where every hour counts, this means
        you can keep your workflow familiar while removing the manual steps that cause delays and mistakes.</p>
      <p className="text-md text-white shadow-text pt-3">
        The order of go-live is phased to avoid disruption. First, the core team gets access to the dashboard
        and a set of templated content calendars. Next, approval workflows are mapped: who reviews what, at
        which stage, and with what permissions. Hootsuite’s built-in role assignments and multi-step approvals
        ensure that no post goes live without the right eyes on it, and the platform’s audit trail keeps every
        decision traceable for compliance. There is no need for a separate system to track who signed off on
        what, Hootsuite logs it all automatically.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling is where the time savings become real. Instead of building campaigns one post at a
        time, teams can generate a month’s worth of content in a single session, then schedule each item for
        the best possible engagement window based on Hootsuite’s AI-driven recommendations. This is not just a
        calendar, it is an engine that learns from your audience’s real behavior, telling you when to post for
        maximum reach and impact.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams that want to connect external AI assistants or content tools,
        Hootsuite’s&nbsp;<GlossaryLink slug="model-context-protocol">Model Context
        Protocol</GlossaryLink>&nbsp;(MCP) lets you securely bridge outside systems to your live publishing
        channels. No coding is required for the most common setups, your IT admin can connect Claude or
        ChatGPT with a few clicks, making it possible to draft, review, and schedule posts right from your AI
        workspace while keeping final publishing under human control. This is especially important for small
        teams that want to automate more while minimizing risk.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the rollout, Geek @ Your Spot manages the mapping, integration, and training. The focus is
        on removing friction: getting your team out of spreadsheets and email threads and into a single,
        connected dashboard. The platform’s templated setup, role-based permissions, and direct integrations
        with existing tools mean that most teams can go live without downtime or a steep learning curve. The
        outcome is a steady, predictable content flow that removes the guesswork and chaos from your marketing
        week.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-shortens-hootsuite-go-live-for-small-teams-in-south-florida" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens Hootsuite Go-Live for Small Teams in South Florida
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
              <h2 id="what-shortens-hootsuite-go-live-for-small-teams-in-south-florida" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens Hootsuite Go-Live for Small Teams in South Florida
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
