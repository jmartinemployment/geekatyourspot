export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Scalenut is built for small teams who need to do the work of a full content department without the
        headcount. It takes the guesswork and the grind out of Intelligent Content Planning by automating
        every step that normally drags out your week. Instead of starting with a blank screen, Scalenut gives
        you a data-backed blueprint of what to create, when, and why, before anyone writes a word.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform does this by pulling live search and AI prompt data, so you see exactly which topics
        buyers are asking about on Google, ChatGPT, Perplexity, and Gemini. No more brainstorming in the dark.
        Scalenut’s topic clusters are driven by real user intent, trending questions, and competitor gaps. It
        organizes these into high-impact keyword groups, so your next blog or landing page is always mapped to
        what people, and AI engines, are actually looking for.</p>
      <p className="text-md text-white shadow-text pt-3">
        This means your team can plan a month of content in minutes, not weeks. Scalenut’s automated workflows
        let you generate, optimize, and schedule posts in bulk. The AI-powered engine drafts content in your
        brand voice, checks it for SEO and AI readability, and flags any gaps that would keep you from getting
        cited. The approval process is built in, nothing goes live until you or your strategist sign off. That
        removes the endless email chains and last-minute edits that usually stall publishing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Internal linking, a job that usually takes hours of manual work, is handled automatically. Scalenut
        scans your site for anchor text opportunities, suggests new links, and fixes broken ones. This builds
        the kind of interconnected web that search engines and AI models need to understand your authority.
        Your team no longer has to remember to link every new post to a service page or update old blogs. The
        system keeps your structure healthy and your topical authority strong, all in the background.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scalenut tracks your brand’s presence across AI engines in real time. You can see exactly where your
        business appears in ChatGPT, Gemini, Perplexity, and more, down to the prompt level. The platform
        shows you which questions you win, which you miss, and how your visibility stacks up against
        competitors. That means you do not have to wait for a monthly report or a traffic drop to spot a
        problem. When a topic or prompt is missing your brand, Scalenut turns that gap into an action item for
        your next content sprint.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling is streamlined. Instead of logging into five platforms to schedule posts, you can plan
        and publish across channels from one place. Scalenut’s scheduling tools batch your work, so a week’s
        worth of posts takes an hour, not a day. The built-in approval workflows let managers review and
        approve content in a few clicks, keeping the process moving without bottlenecks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scalenut’s AI also repurposes your strongest assets automatically. A high-performing blog can become a
        series of social posts, an email sequence, or a video script, without someone rewriting it from
        scratch. The system adapts content for different formats while keeping your core message consistent,
        so every asset works harder and reaches more people.</p>
      <p className="text-md text-white shadow-text pt-3">
        For personalized email campaigns, Scalenut tailors subject lines and body copy for each audience
        segment. The AI analyzes what works for your list and applies it at scale, so every campaign is
        targeted and relevant. That means higher open rates, better engagement, and less time spent tweaking
        emails by hand.</p>
      <p className="text-md text-white shadow-text pt-3">
        Every optimization is backed by real-time analytics. Scalenut grades each piece of content for both
        traditional SEO and AI visibility, flagging what needs to be fixed. One-click tools let you apply
        improvements instantly, no need to dig through settings or reformat drafts. The platform’s “Fix It”
        feature can update meta tags, add missing keywords, and refine structure in seconds, so your team
        spends less time troubleshooting and more time executing.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real impact is in what your team gets back: hours once lost to planning now go to strategy,
        creativity, or client work. Approval cycles shrink from days to minutes. Content output scales up
        without burning out your staff. Your business moves from being invisible in AI answers to being the
        cited authority buyers find first.</p>
      <blockquote cite="https://www.scalenut.com/features/topic-clusters" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Build a data-backed content strategy powered by AI-driven keyword groups and trending prompt insights.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        For a small team in Miami-Dade, Broward or West Palm Beach, this is the difference between chasing the
        market and leading it. Scalenut does not just analyze where you stand, it executes the fixes, builds
        the links, and fills the gaps that keep your brand out of AI-driven recommendations. The cycle of
        manual bottlenecks, lost hours, and invisible results ends because the system does the heavy lifting.
        Your team gets a clear, actionable plan, and your content starts working everywhere your buyers look
        for answers.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-scalenut-removes-the-manual-work-from-intelligent-content-planning" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Scalenut Removes the Manual Work from Intelligent Content Planning
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
              <h2 id="how-scalenut-removes-the-manual-work-from-intelligent-content-planning" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Scalenut Removes the Manual Work from Intelligent Content Planning
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
