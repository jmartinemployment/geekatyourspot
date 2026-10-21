export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses in South Florida face the same wall: they need consistent, high-quality content
        to build trust and visibility, but the old way of doing it just does not scale. The real cost of
        manual content creation is not just the hours spent writing or editing. It is the lost opportunity of
        every unused recording, the money drained on agency retainers, and the steady erosion of momentum as
        teams fall behind on updates and outreach. When a manager records a customer call or a training
        session, that file too often ends up sitting in a folder, never repurposed into anything that brings
        in leads or drives engagement. The intent is there, but the follow-through is missing because the
        process is broken from the start.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first place this breaks down is the blank page. Every week, small teams waste hours staring at
        empty documents, trying to turn a few notes or a half-remembered conversation into a full blog post,
        social caption, or email campaign. This is not just a creative block, it is a workflow bottleneck that
        steals time from billing, customer service, and everything else that actually moves the business
        forward. When the pressure is on, content creation gets pushed to the end of the list, and the website
        or social profiles start to look abandoned. This is not just a missed marketing opportunity; it is a
        signal to potential clients that the business is standing still.</p>
      <p className="text-base text-white shadow-text pt-3">
        Trying to fix this by hiring outside help brings its own problems. Agency retainers and freelance
        copywriters are expensive, especially for small businesses that need to watch every dollar. Even when
        the budget stretches to cover it, the results are rarely on-brand or timely. Agencies cannot capture
        the details of a real customer call or the energy of a live event. They guess at your tone, miss the
        local context, and often deliver generic content that does not convert. For most small businesses, the
        cost of this approach quickly outweighs the benefit, leaving them back at square one, except now with
        less cash on hand.</p>
      <p className="text-base text-white shadow-text pt-3">
        Even when a team manages to record valuable conversations, webinars, interviews, or internal meetings,
        those assets almost always go unused. The technical challenge of pulling out the right quotes, writing
        up summaries, and turning an hour-long recording into useful content is too much for a small team with
        no spare hands. The result is a pile of digital clutter: hundreds of gigabytes of video and audio that
        could be driving leads and building authority, but instead just sit idle. Every week this backlog
        grows, the business loses more of its own story, expertise, and market advantage.</p>
      <p className="text-base text-white shadow-text pt-3">
        The workflow itself is another hidden cost. When teams try to handle content creation by hand, they
        end up bouncing between tools, recording in Zoom, downloading files, uploading to Google Drive,
        emailing drafts, and chasing approvals. This leads to mistakes, missed deadlines, and a lot of wasted
        effort. When someone finally does find time to write, they often have to start from scratch, missing
        out on the insights and context buried in past recordings. The business never builds a searchable
        knowledge base or a repeatable process for turning conversations into campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        All of this adds up to a cycle that is hard to break. Without a better way to capture, process, and
        repurpose what is already being said in the business every day, small teams stay stuck: too busy to
        create new content, too stretched to use what they already have, and too cash-strapped to hire their
        way out. The cost is not just measured in hours or dollars spent, but in every missed lead, every
        quiet week on social, and every time a competitor gets in front of a local client first. For a
        business trying to grow in a crowded market, that is a price too high to pay.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
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
