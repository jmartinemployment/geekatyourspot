import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in South Florida weighing Copy.ai are not just choosing between tools, they are
        deciding how to break out of the cycle of manual content creation, agency retainers, and inconsistent
        results. The real question is not whether to use AI, but which approach will actually deliver a steady
        pipeline of on-brand, channel-ready content without ballooning costs or creating new bottlenecks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The most common alternative is the agency model. Agencies promise full-service support, but the high
        monthly retainer is a dealbreaker for most small teams. What you get for that spend is often generic
        content, slow turnaround, and little visibility into the process. Agencies can handle volume, but not
        always the local nuance or the speed a business needs to keep up with competitors in Miami-Dade or
        Broward. You pay for every revision, and you still wind up rewriting most of what comes back to fit
        your brand voice.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another route is hiring freelancers or in-house writers. This can work for businesses with steady,
        predictable content needs and the budget to support a dedicated headcount. But for most small teams,
        it’s a luxury. Freelancers may deliver quality, but they rarely understand your business deeply. The
        onboarding is slow, and you spend as much time briefing and editing as you save in drafting. When a
        writer leaves, the knowledge goes with them, and you’re back to square one.</p>
      <p className="text-md text-white shadow-text pt-3">
        Template-driven AI writing tools are the next step up in automation. Many promise fast drafts and
        dozens of formats, but most operate as isolated point solutions. They generate one-off posts, ads, or
        emails, but you end up copying, pasting, and reformatting to get content into your CMS, email
        platform, or social scheduler. These tools do not enforce your brand voice or connect your workflows.
        The result is a patchwork of assets that sound different from one another and require manual review at
        every step. You gain speed, but lose the consistency and control you need for real market impact.</p>
      <p className="text-md text-white shadow-text pt-3">
        Copy.ai’s approach is different. It is not just another AI writer or a collection of templates. The
        platform is designed to replace the patchwork with a unified, automated workflow that codifies your
        brand voice, rules, and approval processes. Instead of writing each post or email from scratch, you
        build reusable AI agents that handle the entire lifecycle, from research and drafting to repurposing
        and scheduling, across every channel you use. This is not a theoretical promise. Copy.ai’s Content
        Agent Studio lets you set up agents with just a few examples of your best content. The agents learn
        your tone, structure, and business priorities, then generate new assets that stay on-message and
        on-brand, no matter who on your team triggers them.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where most AI tools struggle to maintain consistency, Copy.ai’s Infobase and Brand Voice features
        anchor every output to your real business facts and preferred style. This is the difference between a
        tool that spits out “good enough” drafts and one that produces content you can publish with minimal
        editing. Copy.ai’s workflows are not just about speed, they are about making sure each asset fits your
        campaign, your audience, and your current priorities. The system enforces your content standards
        automatically, so you do not have to police every draft or chase down off-message posts after the
        fact.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is another dividing line. Many tools promise “AI for content,” but leave you with the work
        of moving assets between platforms and tracking revisions. Copy.ai supports over 2,000 integrations,
        letting you embed content creation and approval directly into your existing project
        management,&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>,
        and publishing stack. You do not have to change how your team works, Copy.ai fits into your workflows,
        not the other way around. This matters when you are trying to keep up with real business deadlines and
        cannot afford slowdowns while learning a new system.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scalability is the last major difference. Most AI writing tools are built for individuals or very
        small teams. When you try to scale up, adding more users, more channels, or higher content volume,
        they hit limits fast. Copy.ai’s seat-based pricing and workflow credits let you start small and grow
        as your needs change. The platform is ready for teams that need to move from a single owner-operator
        to a group of marketers, sales reps, or customer service staff all working from the same playbook.
        This is not just about headcount. It is about making sure every piece of content, from a blog post to
        a personalized email, is generated with the same standards and speed, no matter how many channels you
        run.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, Copy.ai replaces the patchwork of freelancers, agencies, and point-solution AI tools with a
        unified, scalable system that actually delivers on the promise of Intelligent Content Generation. For
        small businesses that need to look bigger than their headcount, keep budgets tight, and move fast in a
        crowded local market, it is the only approach that turns content from a weekly headache into a true
        business asset.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-copy-ai-stacks-up-against-other-content-automation-approaches" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Copy.ai Stacks Up Against Other Content Automation Approaches
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
              <h2 id="how-copy-ai-stacks-up-against-other-content-automation-approaches" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Copy.ai Stacks Up Against Other Content Automation Approaches
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
