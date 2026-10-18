import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Evaluating Scalenut for your business comes down to two main questions: does it fit the way your team
        works, and does its pricing make sense for your budget and scale? The right answer depends on your
        workflow, your approval process, and how much of your content operation you want to automate versus
        keep manual. Scalenut is built for small teams who need to punch above their weight, those who want
        the output of an enterprise content shop but cannot add headcount.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start by looking at how Scalenut handles your specific content workflow. If your team is already using
        topic clusters, multi-stage approvals, and a content calendar, Scalenut will feel like a natural fit.
        Its cluster builder, approval routing, and bulk scheduling are all designed to replace manual
        spreadsheet tracking and endless email chains. For teams who are still working from a single shared
        Google Doc and occasional Slack threads, Scalenut brings structure without adding complexity. The
        platform’s interface is built for non-technical users; you do not need to be a developer or an SEO
        expert to set up or adjust your workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        The buyer who gets the most from Scalenut is the one who needs more output without more people. If you
        are stuck waiting for a single content manager to finish drafts, or if your approval process is
        slowing you down, Scalenut’s automation closes those gaps. It is not a fit for teams who want to keep
        every step manual or who need deep custom development. The platform is configuration-driven; if you
        want to write your own scripts or build a custom integration, Scalenut is not the tool for that. For
        most small businesses in South Florida, this is a strength, it means less risk, less maintenance, and
        faster time to value.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scalenut’s pricing is transparent and tiered by features and scale. For a small team, the Starter and
        Growth plans set clear limits on users, prompts, and audits. The Starter plan includes up to three
        users, 350 custom prompts, and five page audits. The Growth tier raises these to five users, 700
        prompts, and ten audits. If your team is larger or needs more advanced features like SSO
        or&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;access, the Enterprise plan is custom.
        Pricing starts at $79 per month for the Basic plan and goes up to $249 per month for Pro, with a
        seven-day free trial available. There are no hidden fees or forced annual contracts at the entry
        levels, what you see is what you get, and you can upgrade as your needs grow.</p>
      <p className="text-md text-white shadow-text pt-3">
        When comparing Scalenut to other platforms, look at what is included for the price. Some tools only
        analyze your content and leave the fixes to you; Scalenut automates both the analysis and the
        execution. Others charge extra for each user or for integrations; Scalenut’s limits are clear and
        published. For a team that needs to scale output fast, the ability to automate approvals, scheduling,
        and optimization in one place is a cost and time saver. If you have ever lost a week waiting for a
        manual review or had to rebuild a campaign because of a missed link, you know how quickly those costs
        add up.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another factor is how Scalenut tracks your performance. The platform’s dashboards show not just Google
        rankings but also your presence in AI engines like ChatGPT and Perplexity. You see brand mentions,
        citation share, and prompt coverage, all tracked live. This is a shift from the old model of “publish
        and hope.” Now you know where you stand, what is working, and what needs to change. For many teams,
        this visibility is worth more than just the content automation, it is the difference between guessing
        and knowing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Fit is not just about features or price. It is about whether Scalenut can take your current workflow
        and make it faster, more reliable, and less error-prone. If your approval process is a bottleneck, if
        your content calendar is always behind, or if you are invisible in AI search, Scalenut is designed to
        fix those problems. Geek @ Your Spot’s role is to configure the platform so it fits your real
        business, not just a checklist of features. You get a system that works for your team, in your market,
        with your approval rules.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you are weighing Scalenut against doing it yourself, the real question is how much your team’s time
        is worth. Manual tracking, endless edits, and missed deadlines cost more than most teams realize.
        Scalenut automates the work that slows you down, and Geek @ Your Spot makes sure it is set up right
        from day one. For a small business in Miami, Broward, or Palm Beach, this is about getting the results
        of a full content team without hiring one. The fit is in the workflow, the pricing is in the open, and
        the gains are measured in hours saved and results seen, not just features checked off a list.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-if-scalenut-is-the-right-fit-buyer-criteria-and-pricing-model" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge If Scalenut Is the Right Fit: Buyer Criteria and Pricing Model
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-if-scalenut-is-the-right-fit-buyer-criteria-and-pricing-model" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge If Scalenut Is the Right Fit: Buyer Criteria and Pricing Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
