export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Frase changes the way small businesses handle Intelligent Content Generation by taking the most
        time-consuming and error-prone steps off your plate. Instead of staring at a blank screen or jumping
        between tools, your team starts with a research-backed brief built from what real customers are
        searching for in your market. Frase pulls in the actual questions people are asking, on Google,
        Reddit, Quora, and across answer engines, so your content addresses what matters, not just what you
        think might work. That means every article, blog post, or email starts with a clear direction, not a
        guess.</p>
      <p className="text-md text-white shadow-text pt-3">
        Drafting stops being a bottleneck. Frase writes the first draft in your brand voice, using the tone
        and structure you set once and carry everywhere. No more rewriting outsourced work to sound like your
        business. The draft is not just a pile of paragraphs, it is a complete, coherent article that answers
        the customer’s question from start to finish, with supporting details and a structure built to perform
        in search and AI answers alike. For a Palm Beach County bookkeeping practice, this means every piece
        sounds like it came from the same team, even if different people touch it. For a Miami-Dade consulting
        firm, it means the whole article holds together, not just the parts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Frase does more than write. It scores your draft for Google and for AI search engines as you work,
        showing you exactly what to add or adjust to stand out. You see the missing questions, the gaps in
        coverage, and the specific changes that will move the needle. No more publishing and hoping, it is
        clear what needs fixing before the post goes live. If a blog starts to slip in the rankings, Frase’s
        Content Guard tracks the decay, drafts the fix, and waits for your approval before republishing. You
        do not have to monitor every page manually or guess why a post lost ground. The system does it for
        you, so your published work keeps performing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Turning one article into a week’s worth of channel content is a single step. Frase atomizes your
        approved draft into LinkedIn carousels, Twitter threads, email newsletters, and Instagram posts, all
        from the same source, with the voice and message intact. No more rewriting posts for each channel or
        losing the thread in the handoff. The system exports ready-to-publish pieces in the formats your
        scheduler or pipeline expects, so you move from idea to multi-platform campaign without the usual
        copy-paste grind. For a Broward pest-control company or a local shop, that means the blog, the social
        post, and the email all align, and all go out on schedule.</p>
      <blockquote cite="https://www.frase.io/agents" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Frase is an AI SEO agent: it researches the topic, writes the page in your voice, checks it against
        what is winning on Google and what AI engines are quoting, publishes it, and comes back when the page
        starts to slide.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows are built in. You decide what ships and when, with the ability to edit, approve, or
        reject drafts before they go live. Frase publishes directly to WordPress, Webflow, Sanity, Wix, or its
        own CMS, so you do not have to move content by hand or worry about formatting. Internal links, schema,
        and even a hero image are handled in the draft, so the post is ready to rank and ready to be cited by
        AI engines like ChatGPT, Perplexity, Gemini, and Google AI. If your team writes in more than one
        language, Frase adapts to the target market’s vocabulary and phrasing, rather than just translating
        English.</p>
      <p className="text-md text-white shadow-text pt-3">
        The outcome is not just more content, but better content that works harder for your business. Teams
        using Frase have reported saving up to 180 hours per month, tripling their output per client, and
        doubling conversion rates on key service pages. Opinion Stage, for example, saved over 500 hours and
        boosted their search performance by choosing Frase for its affordability and ease of use. PTSMC saw
        engagement times jump from 22 seconds to over a minute, a key driver for higher rankings and more
        conversions. This is not about adding another tool to your stack, it is about removing the friction
        that stops your team from publishing at the pace and quality your market demands.</p>
      <p className="text-md text-white shadow-text pt-3">
        With Frase, the blank page is gone, the voice is consistent, and the work of repurposing and
        optimizing is handled. The weekly grind of content creation, the research, the drafting, the endless
        revisions and channel rewrites, shrinks to a few focused approvals. Your business looks as active and
        credible as the largest competitor, but without the overhead or the burnout. That is what Intelligent
        Content Generation should feel like: your expertise, everywhere your clients look, without the cost
        and chaos of doing it all by hand.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-frase-removes-the-weekly-grind-from-intelligent-content-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Frase Removes the Weekly Grind from Intelligent Content Generation
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
              <h2 id="how-frase-removes-the-weekly-grind-from-intelligent-content-generation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Frase Removes the Weekly Grind from Intelligent Content Generation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
