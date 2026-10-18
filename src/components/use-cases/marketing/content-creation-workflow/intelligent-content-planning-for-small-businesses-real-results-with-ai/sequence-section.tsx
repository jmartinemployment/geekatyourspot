import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function SequenceSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out Intelligent Content Planning inside a small business is not a one-click install. It is a
        sequence of practical steps, each building on the last, and every one shapes how fast you see results.
        Here is what that looks like for a team in Miami-Dade or Broward, from the first call to the first
        live campaign.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process starts with a clear alignment on business objectives. The first meeting is not about tools
        or features, it is about what is broken, what it is costing you, and what will count as a win. If your
        team is losing hours to manual research and never seeing those posts rank, the goal might be to cut
        research time in half and get three new posts onto page one within two months. This is not an
        aspirational wish list. It is a baseline for every decision that follows, and it keeps the project
        honest when priorities start to drift.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next comes the&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>&nbsp;assessment.
        This is where most teams hit their first reality check. You need to pull together every source of
        content data you have, past blog posts, performance analytics, keyword lists, campaign results, and
        even customer feedback. The team maps where this data lives, how clean or messy it is, and what needs
        to be standardized. At this point, the project lead will spot gaps, missing metadata, duplicate
        topics, or untagged assets, that will block automation or make recommendations unreliable. Cleaning
        this up is tedious but non-negotiable. Without it, the best AI platform in the world will spit out
        flawed or generic plans.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the data is in order, you move to tech selection and architecture. Here, you weigh the needs
        identified in the objective-setting and data audit phases against what each platform actually does.
        For example, if your biggest drag is repetitive&nbsp;<GlossaryLink slug="content-repurposing">content
        repurposing</GlossaryLink>, Semrush comes into play with its ability to turn a single article into
        social posts and emails without endless rewriting. If your team is stuck rewriting the same message
        for different audiences, HyperWrite can tailor tone and detail level in seconds. For a team trying to
        build authority and find winnable gaps in the market, MarketMuse’s topic modeling and competitor
        analysis are crucial. If scheduling and campaign orchestration across channels is the bottleneck,
        Hootsuite’s unified calendar and real-time trend detection make a difference. For local businesses who
        need to see their brand show up in AI-powered search and not just Google, Scalenut’s AI visibility
        tracking delivers an edge. The decision is not just about features, but about which workflows you need
        to automate and how the tool plugs into what you already use, whether that is Google Workspace, Slack,
        or a&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pilot implementation comes next. This is where the rubber meets the road. The team picks a single
        content type or campaign, maybe a weekly blog post or a month-long social push, to run through the
        full workflow. Every step is tested live: sourcing topics, generating outlines, drafting posts,
        routing for approval, scheduling, and publishing. The pilot is not just about seeing if the tool
        works; it is about surfacing friction points, like bottlenecks in approvals or gaps in the data feed.
        The team collects feedback and performance data in real time, measuring against the KPIs set at the
        start. If the goal was to publish in half the usual time, the numbers need to show it.</p>
      <p className="text-md text-white shadow-text pt-3">
        With the pilot validated, the team expands the rollout. This may mean adding new content formats,
        bringing in more users, or integrating additional platforms. At this stage, the focus is on continuous
        scaling and seamless integration. New workflows are documented, and the team sets up automated alerts
        or dashboards for ongoing measurement. Any issues found in the pilot, slow handoffs, unclear
        ownership, or approval delays, are ironed out before scaling further. This is also the point where
        ongoing support and training become critical. The best tools will not fix a process if the team is not
        confident using them.</p>
      <p className="text-md text-white shadow-text pt-3">
        A real rollout does not end at launch. The system is monitored for drift, with regular check-ins
        against the original business objectives. Are posts ranking? Is the team still hitting time-saving
        targets? Is brand voice consistent across all channels? If not,
        the&nbsp;<GlossaryLink slug="data-model">data model</GlossaryLink>&nbsp;or workflow is revisited, and
        adjustments are made. Tools like Hootsuite and Semrush provide real-time analytics and
        recommendations, making it easy to spot when performance slips and course corrections are needed.</p>
      <p className="text-md text-white shadow-text pt-3">
        In concrete terms, the rollout is a living process. It starts with a clear business goal, builds a
        clean data foundation, matches tools to actual workflow needs, tests in a controlled pilot, and then
        scales with careful measurement and ongoing adjustment. Every step is grounded in your real
        environment, the headcount you have, the systems you already use, and the results your business needs
        to see. Anything less is just another round of busywork that fails to move the needle.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-rolling-this-out-actually-involves-in-a-real-environment-the-sequence-it-happens-in" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Rolling This Out Actually Involves in a Real Environment: The Sequence It Happens In
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-rolling-this-out-actually-involves-in-a-real-environment-the-sequence-it-happens-in" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Rolling This Out Actually Involves in a Real Environment: The Sequence It Happens In
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
