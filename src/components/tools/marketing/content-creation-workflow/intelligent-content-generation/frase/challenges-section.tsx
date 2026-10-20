export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Manual content creation drains small business teams in ways that go beyond lost hours. The owner or
        office manager in West Palm Beach, Broward, or Miami-Dade sits down to write a blog post, but after an
        hour, the page is still blank. That is time they cannot bill, time that does not go to serving
        clients, and time that never returns. The &quot;blank page&quot; bottleneck is real: it is not just a
        slow start, it is a drag on every other part of the business.</p>
      <p className="text-md text-white shadow-text pt-3">
        When a business tries to keep up with bigger competitors, the pressure to publish mounts. Local
        clients expect to see fresh articles, up-to-date service pages, and active social feeds. But the
        reality is that most small teams do not have a dedicated marketing staff. They end up patching
        together content between phone calls and invoices. Agency retainers are out of reach, and freelancers
        who promise quick drafts often deliver work that needs heavy editing. The result? Social feeds go
        quiet, websites stop ranking, and the business slips from view.</p>
      <p className="text-md text-white shadow-text pt-3">
        The cost is not just missed leads. It is the compounding effect of inconsistent content. Each time the
        owner writes a post, they face the same set of problems: finding the right topic, researching what
        local clients are actually asking, and trying to match the tone of last month&#39;s email or blog.
        Even when they finish a post, turning it into social media updates or email campaigns means starting
        from scratch. The voice drifts, the message fragments, and the brand feels less trustworthy.</p>
      <p className="text-md text-white shadow-text pt-3">
        Teams that try to shortcut the process with basic AI tools run into a different wall. These tools can
        generate a paragraph at a time, but the output is often disconnected, one answer for the blog, a
        different one for the email, and another for the social post. The result is a patchwork of content
        that does not answer the customer&#39;s question fully, or that repeats itself so much it loses the
        reader. For a Broward pest-control company, this can mean long articles filled with fluff and missed
        details. For a Miami-Dade consulting firm, it means stitched-together AI responses that do not add up
        to a useful whole. For a Palm Beach County bookkeeping practice, it is the struggle to keep a
        consistent voice across everything they publish.</p>
      <p className="text-md text-white shadow-text pt-3">
        All this manual effort piles up in hidden costs. The owner loses time to research and drafting. The
        business pays again to edit or rewrite outsourced work. Marketing gets pushed to the end of the week,
        then dropped altogether when things get busy. Every missed post or email is a lost chance to build
        trust and bring in new leads. Over time, the business falls behind competitors who seem to be
        everywhere, on Google, in inboxes, and on social media, without ever seeing the real cost behind that
        visibility.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pain is not just inefficiency. It is the feeling of being stuck: knowing what needs to be done,
        but never having the hours or the team to do it. Trying to keep up by hand means living in a cycle of
        burnout and catch-up. The gap between what the business should be doing and what actually gets done
        widens every month. This is where Frase breaks the cycle by automating the hardest parts of the
        workflow, so small teams can finally compete on the same playing field as the big names, without
        burning out or breaking the bank.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-content-creation-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Content Creation by Hand
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
              <h2 id="what-it-costs-to-keep-doing-content-creation-by-hand" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Content Creation by Hand
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
