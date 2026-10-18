import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Semrush runs content planning as a connected, data-driven workflow. The platform does not just store
        topics and spit out blog ideas. It starts by pulling live keyword and
        search&nbsp;<GlossaryLink slug="intent-data" className="text-[#0B162A] hover:underline">intent data</GlossaryLink>&nbsp;from its own database,
        which covers over 26 billion keywords. This means that when a small team in Miami-Dade sits down to
        plan next month’s blogs or emails, they are not guessing, they are working from real data about what
        people in their area are searching for right now. Semrush’s Topic Finder and Keyword Magic Tool
        surface high-potential, low-competition topics that fit the business’s market, so the team’s first
        hour is spent on ideas that have a chance to rank and convert.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the topics are picked, Semrush’s Content Toolkit takes over. The AI Article Generator can draft
        full-length, SEO-ready articles from a single prompt. It does not just fill in blanks. It models the
        structure and tone on what is already working for top competitors, so the draft is not a generic AI
        output, it is shaped to win in the same market. Teams can then edit directly in the Semrush editor,
        where real-time recommendations for both Google and AI search visibility appear as they type. This is
        not a passive checklist. The platform flags issues and suggests specific fixes, so even non-technical
        staff can optimize content for both traditional search and new AI-powered engines like ChatGPT,
        Gemini, and Perplexity.</p>
      <p className="text-md text-white shadow-text pt-3">
        Repurposing content is built into the workflow, not an afterthought. Any article, once approved, can
        be instantly converted into social media posts, email newsletters, and Google Business Profile
        updates. The system pulls out the main points and adapts them for each channel, keeping the brand’s
        voice and message consistent. This turns one strong blog post into a month’s worth of multi-channel
        content, without the team having to write and reformat each piece by hand. For a small business, this
        is the difference between struggling to keep up and finally getting ahead of the content treadmill.</p>
      <p className="text-md text-white shadow-text pt-3">
        Semrush’s bulk scheduling feature means the team can load a full calendar of posts and updates in a
        single session. Instead of logging into each platform separately, they set up posts for LinkedIn,
        Instagram, and Google Business Profile right from the Semrush dashboard. The system handles the
        timing, hashtags, and formatting, reducing the risk of missed posts or inconsistent messaging.
        Approval workflows are built in, so drafts can be reviewed and signed off before anything goes live.
        This is especially useful for teams where content needs a manager’s sign-off or legal review before
        publishing.</p>
      <p className="text-md text-white shadow-text pt-3">
        The&nbsp;<GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback loop</GlossaryLink>&nbsp;in Semrush is not just
        about reporting traffic. The platform tracks rankings, visibility in both search and AI-generated
        answers, and even brand sentiment across major AI platforms. If traffic drops or a post underperforms,
        Semrush’s analytics show not only what happened but why, it will surface whether competitors are
        gaining ground, if a keyword’s demand has shifted, or if an AI engine has stopped recommending the
        business’s content. This lets the team adjust quickly, rather than waiting for problems to snowball.
        The mechanics here are not just about automation, they are about giving a small marketing team the
        same data firepower as a much larger competitor, but without the complexity or cost.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses in South Florida, the real change is in how the week runs. The team walks in on Monday
        with a clear, data-backed list of what to publish, where to post it, and how to get it approved and
        out the door. The cycle of guessing, rewriting, and watching content disappear into the void is
        replaced with a repeatable system that actually moves the needle. Semrush’s mechanics turn content
        planning from a source of stress into a source of measurable growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-semrush-actually-runs-content-planning-the-mechanics-in-detail" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Semrush Actually Runs Content Planning: The Mechanics in Detail
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
              <h2 id="how-semrush-actually-runs-content-planning-the-mechanics-in-detail" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Semrush Actually Runs Content Planning: The Mechanics in Detail
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
