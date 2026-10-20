import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function SequenceSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out Intelligent Content Generation in a small business is not a one-click install. It is a
        sequence of concrete steps, each one building on the last. This is not theory, this is what happens in
        a real shop, with real constraints. It starts with a business objectives alignment session. Here, you
        sit with the owner or key staff and nail down what success looks like: more inbound leads from Google,
        a steady flow of localized Facebook posts, or a newsletter that actually goes out on time. The target
        is set in numbers and dates, not vague aspiration.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next comes the&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>&nbsp;assessment. You
        gather up every source of truth, service menus, pricing sheets, customer testimonials, past marketing
        emails, even the employee who “remembers everything.” This gets consolidated into a single, structured
        format. For example, Koala’s Brand DNA profile or Scalenut’s structured article brief. The point is to
        remove guesswork, so the AI tools operate on facts, not folklore. If you skip this, you’ll see errors
        and inconsistencies surface in every draft, costing more time in cleanup than in creation.</p>
      <p className="text-md text-white shadow-text pt-3">
        The tech selection and architecture phase is where most small teams feel overwhelmed by the options.
        Here, the choice is not “pick the fanciest platform,” but “pick the tool that fits the way you already
        work.” Rytr is ideal for quick, repeatable captions and product blurbs when you need speed and cost
        control. Hootsuite takes over when you want to coordinate multi-channel scheduling and see everything
        in one dashboard. Anyword is the right call if you need predictive copy scoring before you spend on
        ads. Frase helps when the problem is moving from fragments to a complete article. Castmagic inserts
        itself if you have a back-catalog of recordings that have never been turned into usable content. The
        selection is not about features, it is about what removes your bottleneck.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the stack is chosen, you build the workflow. This is where you set up the repeatable steps, who
        drafts, who reviews, who publishes, and when. Jasper and Copy.ai both let you lock down brand voice
        and approval workflows, so every new blog or campaign matches your standard. Scalenut’s guided
        sequence, title, outline, draft, keeps long-form content on track, while Imagine gives you a
        node-based workflow for visual assets. Hootsuite’s drag-and-drop calendar makes bulk scheduling and
        approval practical for small teams. The key is that the workflow is visible and shared; no one is left
        guessing who owns what.</p>
      <p className="text-md text-white shadow-text pt-3">
        Now comes the pilot. Start with one content type, a month of Instagram posts, a Google Business
        Profile overhaul, or a three-part email sequence. The goal is to validate the process, catch gaps, and
        prove that the system produces results before scaling up. Writesonic is often used here to generate a
        batch of long-form articles or landing pages, letting you test for SEO lift before rolling out across
        the rest of the site. If the workflow breaks, if drafts pile up, if approvals stall, if outputs miss
        the mark, you pause and adjust before scaling up. This is not a “fire and forget” process.</p>
      <p className="text-md text-white shadow-text pt-3">
        In a real Friday afternoon, the same team from the opening now moves from firefighting to review mode.
        The owner checks the Hootsuite dashboard and sees a full month of posts scheduled, each one matching
        the local events and promotions planned out weeks in advance. A new blog draft from Scalenut is
        waiting for review, already structured around the business’s most common customer questions. Castmagic
        has turned a recorded webinar into a set of LinkedIn posts and a case study draft, ready for approval.
        The time that used to vanish into re-writing and last-minute scrambling is now spent checking and
        approving, not creating from scratch.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out Intelligent Content Generation is not about “turning on” automation and stepping away. It
        is a sequence: define goals, clean and centralize data, select the tech that fits, build and document
        the workflow, pilot with a single content type, then scale and refine. Every tool, Rytr, Hootsuite,
        Anyword, Scalenut, Koala, Copy.ai, Jasper, Writesonic, Frase, Imagine, Castmagic, has its place when
        matched to a real process. The work is front-loaded, but the payoff is a shift from chaos to control,
        with every asset traceable back to the business facts and outcomes that matter.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-rolling-this-out-actually-involves-in-a-real-environment-in-the-order-it-happens" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Rolling This Out Actually Involves in a Real Environment, in the Order It Happens
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
              <h2 id="what-rolling-this-out-actually-involves-in-a-real-environment-in-the-order-it-happens" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Rolling This Out Actually Involves in a Real Environment, in the Order It Happens
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
