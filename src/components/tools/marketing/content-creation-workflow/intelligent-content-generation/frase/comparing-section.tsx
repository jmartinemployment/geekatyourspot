export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in South Florida are often weighing Frase against two main alternatives: hiring a
        marketing agency or using generic AI writing tools. Each path tackles the need for Intelligent Content
        Generation differently, but the trade-offs show up fast when you look at the workflow, cost, and how
        much human oversight is still required.</p>
      <p className="text-md text-white shadow-text pt-3">
        Traditional agencies and freelancers remain the default for businesses that want hands-off content
        creation. They promise strategy, copywriting, and sometimes even posting. But for a small team, the
        cost is the first barrier, monthly retainers can easily run into the thousands, which means most
        owners end up doing the work themselves anyway. Even when you do hire out, the drafts often come back
        generic or off-brand, and editing cycles eat up the very time you were trying to save. The agency
        model also struggles to keep up with the speed and volume needed for regular blog posts, social
        updates, and email campaigns. When you need three posts a week, not one, the cost and lag time grow
        quickly.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the other end, generic AI writers, think of the ones that spin out a paragraph at a time from a
        prompt, look like a quick fix. They are cheap and fast for simple copy, but the cracks appear as soon
        as you need a full article that answers a real customer question, or when you try to repurpose that
        article into social posts and emails. The biggest issue is fragmentation: each output is an isolated
        response, not a connected campaign. The business owner ends up pasting together AI blurbs, still
        rewriting to keep the voice steady, and still checking for SEO basics. The promise of automation fades
        when you are the one gluing the parts back together.</p>
      <p className="text-md text-white shadow-text pt-3">
        Frase sits in the middle, but with a clear edge for small teams that want to look bigger than they
        are. Unlike an AI assistant that just writes what you tell it, Frase starts from the research: it
        pulls the top-ranking pages, finds the gaps, and builds a structured brief that guides the draft. The
        draft itself carries your brand voice, which you set up once and use everywhere. This is not just
        about avoiding the &quot;AI-sounding&quot; problem; it means every article, social post, and email
        feels like it came from the same person, even if you hand off the work to a freelancer or rotate who
        is posting each week.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real difference shows up in how Frase handles optimization and monitoring. Where a template-based
        AI tool stops at the first draft, Frase scores every piece for both Google and AI answer engines as
        you write. It flags what is missing before you publish, so you are not left guessing what to fix after
        a post flops. Once content is live, Frase keeps an eye on rankings and traffic. If a page starts to
        slip, it proposes a specific fix, like adding a missing section or updating a stat, and can republish
        the update to your CMS once you approve. This is a closed loop: research, draft, optimize, publish,
        monitor, and repair, all in one workspace.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams who want to repurpose content across channels, Frase automates the process. Instead of
        rewriting every post for each platform, it breaks down the approved article into ready-to-publish
        formats for blogs, social media, and email. The voice stays consistent, the message stays on track,
        and you avoid the &quot;start from scratch&quot; grind that kills momentum. Where most AI tools leave
        you with a pile of drafts to sort and edit, Frase gives you a connected set of assets that can go live
        with minimal human touch, while still letting you review and approve before anything is published.</p>
      <p className="text-md text-white shadow-text pt-3">
        Some platforms in this category advertise similar features, but the difference is in the details.
        Frase tracks not only Google rankings but also whether AI engines like ChatGPT, Perplexity, Gemini,
        and Claude are actually citing your content. It ties those insights directly to recommended fixes, so
        you are not left with another dashboard to interpret. This goes beyond reporting, it is about taking
        action that actually moves the needle for your visibility and lead generation.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Frase is not just another AI writer or a stripped-down agency alternative. It is built for
        small teams who need to automate as much as possible while keeping the quality, consistency, and
        control that local businesses depend on. For owners and managers who have tried both agencies and DIY
        AI tools and found both lacking, Frase is the system that closes the loop, turning a scattered, manual
        process into a single, connected workflow that can scale with your ambitions. The sections above have
        shown what this looks like in practice, from research and drafting to monitoring and repair. If your
        team has felt the pain of the blank page, the handoff mess, or the agency invoice, Frase is built to
        remove those from your week, not just your budget.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-frase-compares-to-other-content-automation-approaches-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Frase Compares to Other Content Automation Approaches for Small Teams
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
              <h2 id="how-frase-compares-to-other-content-automation-approaches-for-small-teams" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Frase Compares to Other Content Automation Approaches for Small Teams
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
