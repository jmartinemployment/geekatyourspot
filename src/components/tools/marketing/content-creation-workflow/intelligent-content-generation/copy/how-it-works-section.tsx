import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Copy.ai replaces manual content production with a system built for speed, consistency, and scale.
        Instead of creating each blog post, email, or social update from scratch, teams use Copy.ai’s Content
        Agent Studio to codify their brand voice and build automated agents that generate content on demand.
        These agents do not just write, they follow multi-step workflows that reflect the business’s real
        process, from initial research to final approval. The process is not magic; it is a sequence of
        concrete actions, each mapped to a part of the team’s day.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is defining what needs to be produced. Copy.ai’s Workflow Builder lets a team outline
        every stage: gathering source material, extracting product details, drafting posts, and routing them
        for review. Each workflow is a set of rules and triggers, not a loose set of templates. For example, a
        business can set up a workflow that pulls product data from
        their&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>,
        combines it with recent customer questions, and drafts a month of social posts and emails in a single
        batch. The system is flexible, workflows can be as simple as a one-step draft or as complex as a
        multi-stage campaign that spans channels.</p>
      <p className="text-md text-white shadow-text pt-3">
        Brand consistency is not left to chance. Copy.ai’s Infobase acts as the single source of truth for
        brand messaging, tone, and key facts. Every agent and workflow draws from this repository, so the
        content always reflects the business’s actual voice and priorities. Copy.ai’s approach does not
        require prompt engineering or manual tweaking for every piece, once the brand voice is set, the system
        applies it automatically, even as team members change or new campaigns launch. This is critical for
        small businesses that cannot afford to lose time retraining new writers or correcting off-brand
        drafts.</p>
      <p className="text-md text-white shadow-text pt-3">
        When a workflow runs, Copy.ai’s agents handle the details. They research topics, generate drafts,
        adapt content for each platform, and even repurpose long-form articles into short posts or emails. The
        system can process raw transcripts, product manuals, or customer feedback, turning them into
        structured, publishable content. Each step is automated, but human review is built in at the right
        points. The team can set approval gates so nothing goes live without a final check, but the heavy
        lifting, drafting, reformatting, and aligning to strategy, happens automatically.</p>
      <p className="text-md text-white shadow-text pt-3">
        Copy.ai’s automation does more than just speed up the writing. It enforces strategic standards across
        every output. Blog posts are built to target the right keywords. Sales emails follow approved
        messaging. Social updates match the campaign’s theme. The system is designed to scale: a single
        workflow can turn one product update into dozens of assets across every channel, all formatted and
        scheduled for release. This is how a small team in South Florida can look like a much larger
        operation, publishing consistently without burning out or missing opportunities.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real impact shows up on the team’s calendar. What used to take days, drafting, editing, reviewing,
        and scheduling, is compressed into minutes. The Friday afternoon scramble to fill a content calendar
        is replaced by a batch process that runs in the background. Each agent, once set up, can be triggered
        as often as needed, so the business is never caught short when a campaign needs to pivot or a new
        opportunity arises. Copy.ai’s workflows are built to adapt, letting the business respond to changes in
        strategy or market conditions without rebuilding the system from scratch.</p>
      <p className="text-md text-white shadow-text pt-3">
        Copy.ai’s repeatable workflows close the gap between idea and execution. Instead of starting from zero
        every week, teams build a library of agents and workflows that grow with the business. This is not a
        static set of templates, it is a living system that learns from feedback, evolves with each campaign,
        and keeps the business’s digital presence active and on-message, no matter how lean the team.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-copy-ai-turns-content-creation-into-a-repeatable-workflow" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Copy.ai Turns Content Creation into a Repeatable Workflow
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-copy-ai-turns-content-creation-into-a-repeatable-workflow-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Copy.ai Turns Content Creation into a Repeatable Workflow
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
