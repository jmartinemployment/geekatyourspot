export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Writesonic changes the entire content workflow for small businesses by taking the most draining parts
        off your plate. Instead of losing hours to blank screens and half-finished drafts, your team gets
        publish-ready articles, landing pages, and campaign assets in minutes, not weeks. The platform is
        built for businesses that need to look big without hiring a full creative staff.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every piece of content starts with research. Writesonic runs deep analysis against what already ranks
        in search, reviews competitor content, and grounds each draft in real audience intent. This means you
        do not just get generic AI text. You get work that answers the questions your clients are actually
        asking, with structure and detail that search engines and AI models reward. The difference shows up
        fast: your pages start to earn citations in AI answers and move up in local search results, closing
        the gap with bigger players.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brand voice is not an afterthought. Writesonic builds a profile from your existing content, whether
        that is past blog posts, product descriptions, or even sales emails. The system learns how your
        business sounds and applies it across every format, from long-form articles to quick social updates.
        The result is content that reads like you wrote it, not like a machine. This consistency means you can
        scale output without losing the personality that makes your business stand out locally.</p>
      <p className="text-base text-white shadow-text pt-3">
        Quality is built in at every step. Each draft goes through multiple expert-role review passes,
        checking for technical accuracy, tone, and SEO structure. If a piece fails a quality threshold,
        whether for factual accuracy or style, the system revises it before you even see it. This removes the
        endless back-and-forth editing that bogs down small teams. You approve final drafts, not rough
        versions that need rewriting. For technical or regulated industries, this accuracy layer prevents
        embarrassing mistakes and keeps your brand safe.</p>
      <p className="text-base text-white shadow-text pt-3">
        Scaling up is not just possible, it is routine. Writesonic can generate dozens of high-quality
        articles, landing pages, or product descriptions each week. For teams that used to spend days on a
        single post, this means shifting from reactive to proactive marketing. You can launch new campaigns,
        refresh old content, and fill out your site’s structure without adding headcount or burning out your
        staff. Businesses that relied on freelancers or agencies to keep up with volume now bring the entire
        pipeline in-house, cutting costs and gaining control.</p>
      <p className="text-base text-white shadow-text pt-3">
        Outdated content is no longer a liability. Writesonic’s pipeline includes regular refresh cycles, so
        your site stays current as search trends and client needs evolve. The platform flags content that
        drops in visibility and suggests or even drafts updates automatically. This keeps your digital
        presence ahead of competitors who only update when they have time. You stop losing ground to national
        chains that win by publishing at scale.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integration is simple. Writesonic connects with tools like Ahrefs and Sanity, pulling in keyword data,
        content gaps, and technical site audits. This means you see not just what to write, but what is
        missing from your current strategy. The system tracks your share of voice across platforms like
        ChatGPT, Gemini, and Perplexity, showing where your business appears in AI-driven results and where it
        still needs to break through. With this data, you can prioritize the most impactful content and fix
        weak spots before they cost you leads.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bulk scheduling and repurposing are built in. Writesonic can take a single long-form article and turn
        it into a set of social posts, email campaigns, or ad copy, each tuned to the right format and
        audience. The platform handles the heavy lifting, so your team spends less time copying, pasting, and
        reformatting. Approval workflows are automated, routing drafts to the right person for sign-off and
        keeping the process moving without bottlenecks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Personalization is not just for big brands. Writesonic enables small teams to run segmented email
        campaigns and targeted landing pages that speak directly to different customer groups, without writing
        each one from scratch. The platform’s AI tailors subject lines and body copy for each segment,
        increasing open rates and conversions while freeing up your team for more strategic work.</p>
      <p className="text-base text-white shadow-text pt-3">
        The impact is clear in the weekly routine. The same Miami-Dade team that once spent hours on a single
        post now reviews a queue of ready-to-publish content, all tuned to their brand and audience. Instead
        of scrambling to fill a calendar, they focus on serving clients and growing the business. The website
        moves up in search, social profiles stay active, and leads start to flow again. The grind of
        Intelligent Content Generation becomes a solved problem, not a daily headache.</p>
      <blockquote cite="https://writesonic.com/compare/writesonic-vs-profound" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Only Writesonic ranks every gap by impact and ships the content, outreach, and technical fixes that
        close them.</blockquote>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-writesonic-removes-the-weekly-grind-from-intelligent-content-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Writesonic Removes the Weekly Grind from Intelligent Content Generation
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
              <h2 id="how-writesonic-removes-the-weekly-grind-from-intelligent-content-generation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Writesonic Removes the Weekly Grind from Intelligent Content Generation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
