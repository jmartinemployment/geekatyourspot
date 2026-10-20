export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rytr is built for small businesses that need to get content out the door fast, without hiring a team
        or spending hours at the keyboard. The main thing it does is take the slow, manual steps out of the
        content workflow. Instead of starting with a blank page, you start with a template tuned for your use
        case, whether it is a Google Business Profile update, an Instagram caption, a product description, or
        a follow-up email. You enter a few details, pick your tone, and Rytr drafts the asset in seconds. The
        hours you once spent writing and rewriting are returned to your week.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the Miami salon owner, this means the Friday content backlog is gone. She opens Rytr, selects the
        type of post she needs, enters a line or two about her service or promotion, and gets a batch of
        ready-to-use captions, bios, or blurbs. If one does not fit, she tweaks the input and generates
        another set instantly. The tool’s tone slider lets her match the voice to the channel, professional
        for LinkedIn, playful for Instagram, casual for a website update. This flexibility means she can use
        the same core message across platforms, adapting it in seconds rather than hours.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rytr’s pre-built templates cover more than forty types of micro-assets, so the most common
        bottlenecks, like Google Business Profile descriptions that never get updated, or social posts that
        always get pushed off, are solved with a few clicks. Writing thirty Instagram captions no longer takes
        a full afternoon. Rytr can generate ten variations of a 50-word caption in under ten seconds. You pick
        the best, edit if needed, and publish. This is not just faster; it means you never fall behind on
        posting because you ran out of time or ideas.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s language support is built for South Florida’s diversity. Rytr lets you create content
        in over thirty languages, including Spanish and Haitian Creole. This matters for local businesses
        trying to connect with all segments of their community. Follow-up emails, social posts, and product
        descriptions can be generated in the right language, with the right tone, for each audience. The days
        of sending generic “just checking in” emails, or skipping follow-ups altogether, are over. Rytr gives
        you the ability to communicate consistently, without the drag of translation or rewriting from
        scratch.</p>
      <p className="text-md text-white shadow-text pt-3">
        Seasonal and promotional content, which often gets left until it is too late, becomes easy to produce
        on time. Rytr’s entry-level pricing means you can use it for a handful of pieces each month without
        worrying about whether it is worth it. For the $9 a month that many owners spend on coffee, Rytr
        covers their full set of content needs: Google Business updates, Instagram posts, product blurbs, and
        emails. There is no longer a tradeoff between speed and quality, or between doing it yourself and
        paying for outside help.</p>
      <blockquote cite="https://rytr.me/use-cases/post-captions" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Generate engaging post and caption ideas to enhance social media presence and stimulate interaction.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        Rytr’s approach is not just about speed. It keeps content on-brand with tone controls and the ability
        to match your business’s voice. You can generate assets that sound like you, not like a generic
        template. This is critical for small businesses that win customers on trust and personality. The tool
        also supports short-form and long-form content, so you can move from a single idea to a suite of
        posts, descriptions, and emails, all aligned with your brand.</p>
      <p className="text-md text-white shadow-text pt-3">
        The impact shows up in the numbers. Rytr’s own data from a client named Morgan shows savings of over
        50 hours and $1,000 per month. For a micro-business, that time and money can be the difference between
        growth and just getting by. The hours returned mean owners spend more time on client work and less on
        admin. The cost savings mean they can reinvest in other parts of the business instead of burning
        budget on marketing overhead.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rytr’s workflow is designed to remove the friction at every point where content creation stalls. No
        more blank pages. No more scrambling for the right words or fighting with formatting. No more waiting
        on an agency to deliver a draft. With Rytr, the content process is continuous: you generate, review,
        and publish in minutes, not days. The result is a steady flow of fresh, relevant, channel-ready
        content that keeps your business visible and competitive.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small teams, the difference is immediate. The backlog of half-finished posts disappears. The
        website finally gets updated. Social channels stay active. Follow-up emails go out on time and in the
        right language. The owner who used to dread Friday afternoons now finishes her content work in the
        time it takes to brew a cup of coffee. Rytr does not just automate writing, it removes the bottleneck
        that kept your business from showing up online, so you can focus on what matters most.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-rytr-removes-hours-of-work-from-intelligent-content-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Rytr Removes Hours of Work from Intelligent Content Generation
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
              <h2 id="how-rytr-removes-hours-of-work-from-intelligent-content-generation" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Rytr Removes Hours of Work from Intelligent Content Generation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
