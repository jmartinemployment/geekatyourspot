import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Scalenut is not a generic writing tool. It is a configurable platform where the rules you set and the
        brand context you provide drive the outcomes. For a small business in South Florida, this means you do
        not get a generic blog post or social update. You get content that matches your business’s own
        answers, tone, and goals, because those elements are set up as part of the initial configuration. Geek @ Your Spot LLC handles this setup to ensure Scalenut’s automation works for your real process, not just
        for a template.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of Scalenut’s automation is its workflow engine, which moves each piece of content from idea
        to published draft through a sequence of defined steps. This is not a rigid pipeline. Each stage,
        context, title, outline, draft, can be configured to reflect your own business logic. For example, if
        your team answers customer questions daily, those questions can be fed directly into Scalenut’s prompt
        library. The platform uses these prompts to generate outlines and drafts that address the real topics
        your customers care about, not just what is trending online.</p>
      <p className="text-md text-white shadow-text pt-3">
        Brand voice is another area where configuration matters. Scalenut’s Brand Kit allows you to lock in
        your preferred tone, vocabulary, and readability standards. You can upload a sample of your best
        writing or a URL, and Scalenut will analyze and replicate your style across every draft it produces.
        This eliminates the problem of inconsistent tone that plagues many AI-generated articles. For a local
        insurance agency, for instance, this means every post sounds like it came from the same trusted
        advisor, not a rotating cast of anonymous writers.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation rules in Scalenut go beyond just writing style. The platform supports rule-based keyword
        clustering and topical planning. You can set up clusters of keywords that matter for your business,
        say, “HVAC maintenance Miami” or “bookkeeping for small contractors”, and Scalenut will structure
        content to target these clusters, ensuring your articles are relevant for local search. The workflow
        can also be configured to benchmark your content against the top 10, 20, or 30 search results, pulling
        in competitor outlines and identifying topic gaps. This means your content is not only written fast,
        it is written to compete.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows are also built in. You can set up automated review steps where drafts are routed to
        the right team member for sign-off, based on rules you define, dollar thresholds, departments, or
        content type. For a small team, this replaces the endless email chains and missed approvals with a
        single, trackable process. Once approved, content can be scheduled for publication or exported to
        platforms like WordPress, further reducing manual steps.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scalenut’s extension mechanism is configuration-based. It integrates with tools like WordPress,
        Copyscape, and Word AI, but it does not offer a full scripting or
        custom&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;layer for user-built automation. Instead,
        all extensibility comes from the platform’s built-in modules and settings. This keeps complexity low
        and reliability high, there is no risk of a script breaking your workflow or an unsupported
        integration causing downtime. For most small businesses, this is a benefit: the platform is designed
        to be set up once and then run with minimal ongoing maintenance.</p>
      <p className="text-md text-white shadow-text pt-3">
        Configuration in Scalenut also covers data mapping. When Geek @ Your Spot LLC implements Scalenut, they
        map your existing data, FAQs, process documents, service lists, into the platform’s prompt and context
        fields. This means that the content engine is always drawing from your real expertise, not from
        generic internet sources. For a Broward HVAC company, that means technician notes and approved answers
        become the backbone of educational articles. For a Miami-Dade bookkeeping firm, unfinished drafts are
        moved through the title, outline, and draft sequence until they are ready to publish.</p>
      <p className="text-md text-white shadow-text pt-3">
        Refinement tools are available at every step. After a draft is generated, you can use the platform’s
        built-in tools to rephrase, expand, or simplify sections, adjust metadata for SEO, and track content
        score and keyword coverage. These are not just editing aids, they are part of the automation logic
        that ensures every piece meets your standards before it goes live. If you need to humanize AI-sounding
        content, Scalenut’s Detect and Humanize feature provides a fast way to rewrite for a more authentic
        voice.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that want to scale content production, Scalenut supports bulk draft creation and
        scheduling. You can generate multiple first drafts at once, each tailored to a different keyword
        cluster or content angle, and then queue them for approval and publication. This is essential for
        teams that need to keep multiple channels active, blogs, social posts, email campaigns, without hiring
        more staff.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, what gets configured in Scalenut is not just a set of templates. It is the logic that
        governs how your expertise, your brand, and your local focus are turned into publishable, optimized
        content week after week. Geek @ Your Spot LLC’s role is to ensure that configuration matches your
        real-world needs, so the automation delivers results you can see in your sales and your search
        visibility.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-inside-scalenut-and-how-automation-rules-shape-results" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured Inside Scalenut and How Automation Rules Shape Results
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-inside-scalenut-and-how-automation-rules-shape-results" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured Inside Scalenut and How Automation Rules Shape Results
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
