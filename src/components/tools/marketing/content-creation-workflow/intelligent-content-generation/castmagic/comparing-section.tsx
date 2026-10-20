import Link from "next/link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in South Florida weighing Castmagic are not just choosing between tools, they are
        deciding what kind of content operation they want to run. The main alternatives fall into three camps:
        general-purpose AI writing tools, classic transcription services, and all-in-one content scheduling
        platforms. Each solves one part of the workflow but leaves real gaps for a small team trying to
        publish consistently without hiring more staff.</p>
      <p className="text-md text-white shadow-text pt-3">
        General AI writing tools like&nbsp;<Link id="tools-marketing-intelligent-content-generation-castmagic-comparing-jasper" href="/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper" className="text-[#0B162A] hover:underline">Jasper</Link>&nbsp;and&nbsp;<Link id="tools-marketing-intelligent-content-generation-castmagic-comparing-copy" href="/tools/marketing/content-creation-workflow/intelligent-content-generation/copy" className="text-[#0B162A] hover:underline">Copy.ai</Link>&nbsp;focus on drafting from prompts, but they expect the
        user to feed in structured outlines or bullet points. This means every blog post or email campaign
        starts with a blank screen and needs someone to decide what to say and how to say it. For a local
        business owner, that means time spent writing instead of serving clients. These tools rarely handle
        video or audio input well, so recordings from client calls or webinars stay locked away as files
        instead of becoming marketing assets. Castmagic, in contrast, is built around turning those
        recordings, Zoom meetings, webinars, customer calls, into publish-ready content in minutes. It skips
        the blank page and uses what your team already says and does as the raw material for everything from
        blog posts to social updates.</p>
      <p className="text-md text-white shadow-text pt-3">
        Classic transcription services, whether AI-driven or human-based, deliver accurate text from spoken
        audio. They are fast and affordable, but they stop at the transcript. The business still needs someone
        to read, summarize, and rewrite that transcript into something useful. Castmagic starts with
        transcription but goes further: it applies speaker labels and timestamps automatically, supports over
        60 languages, and then generates summaries, blog articles, newsletters, and social content directly
        from the transcript. No extra copywriter needed. The result is that the same hour of recorded
        conversation can yield not just a searchable text file, but a dozen assets ready for different
        channels, LinkedIn posts, Instagram captions, email campaigns, and more.</p>
      <p className="text-md text-white shadow-text pt-3">
        Social media scheduling platforms like Metricool or Publer excel at bulk publishing and managing posts
        across channels, but they assume you already have content to schedule. They do not solve the
        bottleneck of content creation itself. Many teams find themselves with a calendar full of empty slots
        and no time to fill them. Castmagic fits before these tools in the workflow: it generates the content,
        then hands it off for scheduling. The smartest strategies combine Castmagic’s generation with a
        scheduling tool, so the team spends less time on both creation and publishing, and more time engaging
        with customers or running the business.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where Castmagic stands out is in its ability to automate not just the writing, but the entire pipeline
        from recording to finished asset. It handles bulk imports, hundreds of podcast episodes or training
        videos at once, without manual oversight. It supports direct integrations with common sources like
        Zoom, YouTube, Google Drive, and RSS feeds. It brings real workflow features into the mix: custom
        prompts for brand voice, multi-user collaboration with role-based permissions, and structured approval
        workflows that let a manager sign off before anything goes live. For a small team, this means the same
        tool that drafts your blog posts can also route them for review, track progress, and store everything
        in one place.</p>
      <p className="text-md text-white shadow-text pt-3">
        No other tool in this segment combines all these steps, transcription, multi-format content
        generation, bulk import, workflow automation, and team collaboration, at a price point built for small
        businesses. Most competitors either focus on one function (writing, transcription, or scheduling) or
        price their full suites for large agencies. Castmagic’s usage-based plans start at $19 per month for
        300 minutes, making it accessible for teams that want to scale up as they grow, without locking into a
        high fixed cost.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real-world impact is clear when you look at the Friday afternoon in that Miami-Dade office.
        Instead of a manager staring at a folder of untouched Zoom calls and a week’s worth of unwritten
        updates, Castmagic has already transcribed, summarized, and drafted posts for every major channel. The
        team is reviewing content, not creating it from scratch. Their social feeds and email newsletters are
        full and on-message, and the backlog of unused recordings is shrinking instead of growing. For a
        business that wants to look like it has a dedicated marketing staff, without hiring one, Castmagic is
        not just another tool. It is the system that closes the gap between what gets recorded and what
        actually gets published.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses choosing between tools, the decision is not about which feature list looks
        longest. It is about which platform actually removes the biggest bottlenecks and fits the way local
        teams work. Castmagic’s end-to-end automation, multi-format output, and workflow features put it in a
        different class from the point solutions most teams settle for. For a lean team that wants every
        recording to become real marketing output, Castmagic is the only tool in this space that delivers the
        entire loop, from raw audio to published asset, without extra hires or agency fees.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-castmagic-compares-to-other-content-automation-tools-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Castmagic Compares to Other Content Automation Tools for Small Teams
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
              <h2 id="how-castmagic-compares-to-other-content-automation-tools-for-small-teams" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Castmagic Compares to Other Content Automation Tools for Small Teams
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
