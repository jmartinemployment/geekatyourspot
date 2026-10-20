import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DecisionsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The most important choices in an Intelligent Content Generation rollout are made before the first
        article drafts or social posts ever go live. These are the decisions that shape every result, good or
        bad, and cannot be reversed without starting over. The first is defining the real business goals. This
        is not about “more content” for its own sake. It is about the measurable outcomes that matter, like
        driving more local leads, cutting the time spent on manual copywriting, or keeping your brand active
        on every platform your customers use. If you aim for volume alone, you end up with a pile of content
        that sounds like everyone else’s and delivers nothing. If you set clear, practical goals, such as
        “publish three Miami-specific blog posts per month that answer customer questions” or “schedule a week
        of event-driven Instagram posts in one sitting”, the system gets built to deliver those, not just
        generic output.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next decision is about data: what your system will know, and what it will ignore. Most small teams
        assume AI tools can work from whatever is on hand, but the outcome always matches the input. If your
        service details, customer stories, and offers are scattered across emails, spreadsheets, and memory,
        your content will be generic. Locking down a single, up-to-date source of truth for your business
        facts, what you do, where you serve, who you help, is the move that builds real authority. Koala, for
        example, is designed to store and recall your business context for every new article, so you are not
        re-entering your credentials or re-explaining your difference every time. Skip this step, and you will
        spend months editing out errors that never had to be there.</p>
      <p className="text-md text-white shadow-text pt-3">
        Brand voice is another early choice that sticks. If you do not set the tone, word choice, and style
        rules up front, your content will drift. That’s how a business ends up with a website in one voice,
        Facebook posts in another, and emails that sound like a different company. Jasper’s approach, building
        a custom Brand Voice and Knowledge Base at the start, locks in consistency across every channel.
        Copy.ai and Scalenut also support unified brand voice and structure, making sure each new asset fits
        the same standard. Once content starts going out in the wrong voice, fixing it is not a light
        touch-up. It is a full rework.</p>
      <p className="text-md text-white shadow-text pt-3">
        Workflow is the last early decision you cannot walk back. Will your team review every draft before it
        goes out, or will the system publish directly to your website and social channels? Who signs off on
        new offers or event promotions? Approval workflows must be configured before rollout, not as an
        afterthought. Hootsuite’s bulk scheduling and approval features, for instance, allow for drag-and-drop&nbsp;<Link id="use-cases-marketing-intelligent-content-generation-decisions-intelligent-content-planning" href="/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai" className="text-[#C83803] hover:underline">content planning</Link>&nbsp;with built-in checks, so no post goes live unreviewed. Castmagic automates content
        extraction from recordings but still lets you set checkpoints for team review. If you bolt on approval
        after the fact, you create bottlenecks, and by then, the content machine is already running.</p>
      <p className="text-md text-white shadow-text pt-3">
        A real example: a small Miami service business starts with the best intentions and tries to “just get
        started” with whatever AI tool has the lowest barrier. They set up Rytr for quick captions, but skip
        loading their actual business context, and do not define a review process. Three months in, their
        social feeds are full of posts that could belong to any competitor, and the website still has
        one-liner service pages with no differentiation. Fixing this is not a matter of tweaking a few
        settings; it is a restart, with hard lessons learned and lost time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Early decisions are not about picking the “right” AI tool, Rytr, Scalenut,
        Frase,&nbsp;<Link id="use-cases-marketing-intelligent-content-generation-decisions-writesonic" href="/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic" className="text-[#C83803] hover:underline">Writesonic</Link>,
        Koala, Jasper, Copy.ai, Hootsuite, Anyword, Imagine, Castmagic, each has a place when matched to a
        real business need. What cannot be unmade is the foundation: business
        goals,&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>, brand voice, and workflow.
        Get these right, and the rest is adjustment. Get them wrong, and every improvement is a patch, not a
        fix.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-decisions-that-are-made-early-and-cannot-be-unmade" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Decisions That Are Made Early and Cannot Be Unmade
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
              <h2 id="the-decisions-that-are-made-early-and-cannot-be-unmade" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Decisions That Are Made Early and Cannot Be Unmade
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
