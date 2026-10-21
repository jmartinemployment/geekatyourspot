export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Copy.ai steps in where the manual grind fails, turning the slow, error-prone process of content
        creation into a repeatable, automated workflow. For a small business owner, this means the blank page
        bottleneck disappears. Instead of spending hours trying to write a single blog post or social update,
        Copy.ai generates drafts in seconds, using the business’s real facts and voice. The time once spent
        staring at a screen is now returned to billing, customer service, or simply closing the office on
        time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Copy.ai’s Content Agent Studio is built for more than just writing. It automates the multi-step
        marketing tasks that usually require separate tools or outside help. A team can take one strong piece
        of content, a blog post, for example, and use Copy.ai to repurpose it into social captions, email
        sequences, or even scripts for video. This means every hour spent creating content pays off across
        every channel, not just one. The system handles the heavy lifting, so the team can focus on strategy
        and customer relationships instead of formatting and rewriting.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brand consistency is enforced by design. Copy.ai uses Brand Voice and Infobase features to anchor
        every output to the business’s real messaging and tone. No matter who on the team is using the tool or
        which channel they’re publishing to, the content stays unified. This solves the problem of drift,
        emails, blogs, and social posts all sound like the same business, building trust with local clients
        and making the business look bigger and more professional than its headcount would suggest.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s ability to connect with top-tier models (OpenAI, Anthropic, Gemini) means the business
        isn’t stuck with one approach or limited by the quirks of a single AI. Copy.ai brings these models
        together in a single workspace, so the team can generate content that fits the technical details of
        their business and the expectations of their local market. This is especially important for businesses
        with specialized products or services, no more paying for generic copy that misses the mark.</p>
      <p className="text-base text-white shadow-text pt-3">
        Routine content tasks become automated. Bulk scheduling is no longer a day-long project. Copy.ai can
        generate a month’s worth of platform-specific posts, hashtags, and captions in minutes. The approval
        workflow, often a bottleneck in small teams, is streamlined with automated routing and rule-based
        sign-off. Content moves from idea to published asset without getting stuck in someone’s inbox. For
        email campaigns, Copy.ai personalizes subject lines and body copy for different audience segments at
        the same time, removing the need to write and rewrite for each group manually.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s workflow credits and seat-based plans mean a small team can scale up content production
        without hiring more staff. On standard tiers, up to five users can collaborate without bottlenecks. As
        the business grows, Copy.ai scales with it, no need to rebuild processes or bring in new tools. For
        teams already using project management platforms like Monday.com or ClickUp, Copy.ai connects into
        those systems, so content creation fits into the workflows they already know.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every step is designed to remove friction. Content is generated, repurposed, scheduled, and reviewed
        in one place. No more copying and pasting between tools, no more waiting for outside writers, and no
        more losing hours to manual edits. The business gets back the time it used to spend on repetitive
        tasks and can focus on what matters, growing sales, serving clients, and building a presence that
        stands out in the local market.</p>
      <blockquote cite="https://www.copy.ai/agents" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Create high-quality content in minutes, at a fraction of the cost.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        Copy.ai’s automation does not just speed up the process, it changes what is possible for a small team.
        The owner who started the week facing a blank blog post now reviews a set of ready-to-publish drafts,
        each tailored to the business’s voice and ready for every channel. The team spends less time rewriting
        and more time engaging with customers. Social profiles stay active, the website is always fresh, and
        email campaigns are timely without extra effort. The business looks and acts like a much larger
        operation, but the cost and workload stay small.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-copy-ai-removes-the-weekly-roadblocks-in-intelligent-content-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Copy.ai Removes the Weekly Roadblocks in Intelligent Content Generation
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-copy-ai-removes-the-weekly-roadblocks-in-intelligent-content-generation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Copy.ai Removes the Weekly Roadblocks in Intelligent Content Generation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
