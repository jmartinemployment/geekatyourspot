export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Most small businesses in South Florida weighing Koala are also considering three other paths: sticking
        with manual content creation, hiring an agency or freelancer, or trying a different AI writing tool.
        Each route comes with its own tradeoffs, and Koala’s fit is clearest when you look at what those
        alternatives actually cost in time, money, and results.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual content creation is the default for most small teams. The office manager or owner ends up
        writing blog posts, drafting emails, and updating the website between client calls. This approach
        gives you full control, but the price is hours lost to the blank page and a backlog of content that
        never gets published. It’s the reason so many local businesses go months between updates. The work is
        personal but unsustainable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Hiring an agency or freelance writer can take the writing off your plate, but it usually means a
        recurring bill that is out of reach for most small businesses. Even if you can afford it, you trade
        away the ability to make quick changes or keep content tightly aligned with your real services. And
        too often, the finished copy sounds generic because the writer is working from a shallow brief or a
        single kickoff call. You get words on a page, but not the details that make your business stand out in
        local search or client conversations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Generic AI writing tools promise fast drafts for a low monthly fee. They can generate articles, social
        posts, and emails in a few clicks. But these tools all share the same weakness: they do not know your
        business. They work from prompts you enter each time, so you spend hours re-explaining your services,
        your market, and your voice. The result is content that could fit any competitor in your space. You
        save time on drafting, but spend it fixing details, correcting errors, and trying to make the copy
        sound like you.</p>
      <p className="text-md text-white shadow-text pt-3">
        Koala takes a different approach. It starts by building a structured knowledge base of your business,
        your actual services, credentials, unique selling points, and the way you talk about your work. This
        Brand DNA is not a one-time brief; it is a living profile that every article, post, and campaign draws
        from. That means you do not have to keep feeding the same details into prompts, and you do not end up
        with copy that blurs you into the competition. Koala’s agent uses your real data, pulled from your
        website, Google Business Profile, or entered directly, to ground every piece in your business as it is
        today.</p>
      <p className="text-md text-white shadow-text pt-3">
        Unlike most AI tools, Koala connects directly to your Google Search Console and Analytics. This lets
        it see what is working, where you have gaps, and which keywords you are close to winning. It suggests
        topics based on real search data and competitor analysis, then lays out a content calendar you can
        approve or adjust. You are not guessing what to write next; the system shows you the highest-leverage
        topics for your market.</p>
      <p className="text-md text-white shadow-text pt-3">
        When it comes to images, Koala generates visuals matched to your content inside the same workflow. You
        do not have to switch to a separate tool or search for stock photos that may not fit. Bulk content
        creation is built in, so you can generate dozens or hundreds of articles at once, each using your
        business’s approved details and brand voice. Internal links and schema markup are handled
        automatically, improving your site’s structure and SEO without manual effort.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is another dividing line. Koala publishes directly to WordPress, Shopify, Webflow, and
        Ghost, and can connect to other platforms through webhooks. You do not need to copy and paste drafts,
        reformat content, or rebuild links by hand. This is a full content pipeline, not just a writing tool.</p>
      <p className="text-md text-white shadow-text pt-3">
        Koala’s real competition is not just other AI writers; it is the patchwork of manual effort, agency
        outsourcing, and disconnected tools that most small businesses are stuck with. The difference is that
        Koala builds a persistent memory of your business, so every piece of content is consistent, accurate,
        and ready to publish with minimal editing. For teams who have tried generic AI tools and found the
        results bland or error-prone, Koala’s structured approach is a step change.</p>
      <p className="text-md text-white shadow-text pt-3">
        There are limits. Koala is not a replacement for your own judgment or compliance review, especially in
        regulated industries. It cannot invent your strategy or decide which services to promote. But for any
        team that needs to publish local, SEO-driven content at a steady pace without hiring more staff or
        losing their brand identity, Koala sits between the cost and control of doing it all yourself and the
        speed and scale of a real in-house agency. It is not for everyone, but for small businesses who want
        to look like a big player online without the big player budget, it is a practical answer.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-koala-compares-to-diy-agency-and-other-ai-content-tools" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Koala Compares to DIY, Agency, and Other AI Content Tools
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
              <h2 id="how-koala-compares-to-diy-agency-and-other-ai-content-tools-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Koala Compares to DIY, Agency, and Other AI Content Tools
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
