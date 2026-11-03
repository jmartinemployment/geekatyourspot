export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Scalenut is not just a content dashboard or another analytics tool. It is a configurable engine that
        runs your entire content workflow, from idea to live post. What gets configured in Scalenut is what
        makes it work for your team in West Palm Beach, Broward, or Miami-Dade. The platform is built around
        its own rules and automation logic, not a generic set of templates. Every rule you set in Scalenut
        shapes how content is researched, generated, reviewed, and published. Geek @ Your Spot LLC specializes in
        making these rules work for local teams who cannot afford to waste a week on rework or manual
        tracking.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first layer of configuration is Scalenut’s topic cluster logic. Here, you define the core topics
        and subtopics that matter for your business. Scalenut pulls live data on what people are searching for
        across Google and the major AI engines, ChatGPT, Perplexity, Gemini, and Claude. The platform’s
        cluster builder lets you organize these topics into high-impact keyword groups, so you are not
        guessing what to write next or missing out on low-competition opportunities. You choose which clusters
        to prioritize, set the intent (informational, transactional, local), and Scalenut’s automation takes
        over. For a team that has been stuck in endless brainstorms, this step alone cuts hours from the
        planning cycle.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, Scalenut’s automation logic handles what happens to each piece of content. You set rules for how
        content gets generated: brand tone, minimum word count, required sections, and the prompts that must
        be answered. The platform does not just generate a draft; it builds each article to match both SEO and
        AI visibility requirements. This means every post is structured with headings, FAQs, and direct
        answers, so it is ready for both human readers and AI crawlers. Geek @ Your Spot LLC configures these
        rules to match your brand’s voice and the approval workflow you already use. Nothing goes live without
        passing through these checks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Approval workflows are not an afterthought in Scalenut, they are part of what gets configured up
        front. You decide who reviews what, which pieces need a second pass, and at what stage a post can move
        forward. The platform supports multi-stage approvals, so a blog post can be routed from writer to
        editor to compliance, all tracked in one place. For a small team, this means no more lost emails or
        stalled drafts. Geek @ Your Spot LLC sets up these workflows to match your internal process, so you keep
        control without adding friction.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bulk scheduling and automated publishing are also rule-driven. Scalenut lets you schedule posts across
        multiple channels, your blog, social media, email, based on the clusters and content calendar you set.
        You can build a month of posts in a single session, then let the platform handle the rollout. Geek @ Your Spot LLC configures your publishing rules, sets up the right integrations where possible, and makes
        sure every scheduled item matches your campaign goals and timing. This is not just about pushing
        content live; it is about making sure every post lands at the right time, in the right format, and
        with the right approvals in place.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the technical side, Scalenut’s automation covers internal linking, schema markup, and crawlability
        checks. The platform scans your site for linking opportunities and broken links, then applies fixes or
        suggestions based on your rules. You choose which pages get linked, what anchor text to use, and how
        to handle errors. Geek @ Your Spot LLC tunes these settings so your site structure supports both search
        and AI discoverability. This is where many DIY efforts fail, missing links, outdated schema, or
        content that is not indexable by AI bots. Scalenut’s logic closes those gaps, and Geek @ Your Spot LLC
        makes sure it is mapped to your real site, not just a demo environment.</p>
      <p className="text-base text-white shadow-text pt-3">
        Scalenut does not expose a scripting or SDK layer for custom development. Its extension mechanism is
        configuration-based, not code-based. All automation is set through the platform’s own interface:
        rules, triggers, and workflows. For most small businesses, this is an advantage, it means you do not
        need a developer to make changes or add a new workflow. Geek @ Your Spot LLC handles the initial setup and
        ongoing adjustments, so you get the benefits of automation without the risk of breaking something
        critical.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, Scalenut’s monitoring and analytics modules are also configurable. You set which AI engines
        to track, what prompts to monitor, and how often to pull visibility reports. The platform lets you see
        brand mentions, citation share, and prompt coverage across five major LLMs, all in real time. Geek @ Your Spot LLC builds these dashboards to match your KPIs and reporting cadence, so you always know where
        you stand in both traditional and AI-driven search.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, this means the same team from the opening, who used to spend Friday afternoons chasing
        down missing drafts and broken links, can now see every step in the workflow, from idea to published
        post, inside one dashboard. They know who is responsible for what, what is waiting for approval, and
        which topics are trending in their market. Geek @ Your Spot LLC’s role is to make Scalenut’s rules and
        automation logic fit your real business, not just the demo use case. There is no custom code to
        maintain, no hidden integrations to worry about, just a set of rules and workflows that get your
        content seen by both people and AI engines.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-actually-gets-configured-in-scalenut-rules-automation-and-how-geek-your-spot-makes-it-fit" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Actually Gets Configured in Scalenut: Rules, Automation, and How Geek @ Your Spot LLC Makes It Fit
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-actually-gets-configured-in-scalenut-rules-automation-and-how-geek-your-spot-makes-it-fit-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Actually Gets Configured in Scalenut: Rules, Automation, and How Geek @ Your Spot LLC Makes It Fit
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
