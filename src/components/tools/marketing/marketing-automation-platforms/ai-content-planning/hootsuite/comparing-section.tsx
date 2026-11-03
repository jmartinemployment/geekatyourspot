import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses in South Florida have more options for Intelligent Content Planning than ever.
        Hootsuite is not the only name on the table, but it stands apart by combining AI-driven insights,
        content automation, and multi-channel publishing in one platform. Most other tools break these jobs
        up: one tool for drafting, another for scheduling, and yet another for listening to trends. That split
        is where teams lose time and context. Hootsuite’s design closes those gaps, so every step from
        ideation to approval happens inside one connected workflow.</p>
      <p className="text-base text-white shadow-text pt-3">
        The main difference is how Hootsuite replaces manual guesswork with live data and automation. Many
        platforms promise AI content generation, but few back it with real-time social listening and trend
        detection. Hootsuite’s Wisdom AI and Blue Silk AI engine pull from millions of live conversations,
        surfacing what is actually moving in your market right now. Instead of writing posts based on a hunch
        or a static keyword list, your marketing team gets a feed of hooks, angles, and campaign themes tuned
        to what your audience is actually talking about. This is a direct fix for the blank-page problem that
        stops most teams before they start.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where some tools automate content but leave you to manually manage approvals and compliance, Hootsuite
        builds structured workflows for review and governance into the same dashboard. Posts are routed
        through multi-step approvals, with every edit and signoff logged. This removes the risk of off-brand
        or unapproved content slipping through, a real risk for small teams where roles overlap. For regulated
        industries, Hootsuite’s compliance features go further, offering automatic archiving, message masking,
        and granular access controls. Competing platforms often require add-ons or outside tools to manage
        these risks, adding complexity and cost.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the repurposing front, Hootsuite’s Parliament and Perch apps let you turn high-performing content
        into channel-specific assets without leaving the workflow. Instead of copying and pasting between
        tools, you can remix a blog post into a week of social snippets, or pull evergreen posts into new
        campaigns, all tracked and scheduled from a single calendar. This is a sharp contrast to most
        small-business stacks, which rely on spreadsheets and manual reformatting.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bulk scheduling is another point of separation. Hootsuite lets you plan out weeks of posts across all
        major networks in one session, with AI recommending the best times for each audience segment. Some
        competitors limit bulk actions or require you to schedule each channel separately. Hootsuite’s
        approach means your team spends less time on logistics and more on creative work.</p>
      <p className="text-base text-white shadow-text pt-3">
        The integrations story is also different. Hootsuite connects natively with Slack and Microsoft Teams,
        so content approvals and notifications fit into your team’s existing routines. Many tools treat
        collaboration as a bolt-on, forcing users into new habits or separate chat apps. With Hootsuite, your
        team can review, approve, and discuss campaigns where they already work.</p>
      <p className="text-base text-white shadow-text pt-3">
        AI&nbsp;content repurposing&nbsp;and automated
        generation are only as good as the data behind them. Hootsuite’s Blue Silk AI draws from 150 million
        sources across 187 languages, which is a scale most other platforms cannot match. This means your
        insights and recommendations are less likely to be stale or irrelevant. Competing tools often rely on
        sampled or outdated data, which can lead to missed trends and wasted campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams in Miami-Dade, Broward, and West Palm Beach, the local signal matters. Hootsuite’s trend
        tracking and&nbsp;<GlossaryLink slug="sentiment-analysis" className="text-[#0B162A] hover:underline">sentiment analysis</GlossaryLink>&nbsp;pull
        in hyper-local topics and conversations, so your campaigns hit when and where your audience is paying
        attention. Other platforms may offer broader analytics, but they miss the local nuance that drives
        engagement and conversion in a specific market.</p>
      <p className="text-base text-white shadow-text pt-3">
        The question of automation versus control is central. Some tools automate heavily but remove the
        human-in-the-loop needed for brand safety and compliance. Hootsuite’s workflows keep your team in
        control, with AI suggesting, drafting, and scheduling, but never publishing without review. This
        balance is missing from many lighter-weight tools that push for speed at the cost of oversight.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Hootsuite’s edge is its ability to centralize and automate the entire content planning
        workflow, backed by live social data and structured approvals. Competing platforms may match it on one
        or two features, but rarely bring them together in a way that actually removes the manual grind from a
        small business week. For a team that wants to move past spreadsheets and guesswork, and get a real
        content system running, Hootsuite is built to close that gap.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-hootsuite-compares-to-other-content-planning-approaches" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Hootsuite Compares to Other Content Planning Approaches
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-hootsuite-compares-to-other-content-planning-approaches-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Hootsuite Compares to Other Content Planning Approaches
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
