export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in South Florida face a crowded field of content automation tools, but most options
        fall into two camps: single-purpose AI writers that churn out snippets with little context, and broad
        marketing platforms that promise everything but require deep pockets and technical resources to run
        well. Jasper stands out because it is neither a one-trick AI nor a sprawling suite built for
        enterprise budgets. Instead, Jasper is engineered around the core pain points that keep small teams
        from ever seeing results from their content investment.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where basic AI writing tools focus on speed, Jasper is built for consistency and control. Many
        platforms can generate a blog post or a handful of social captions, but the result often reads like
        disconnected pieces written by different people. Jasper’s Canvas workspace brings every asset, emails,
        landing pages, social updates, into one coordinated campaign, so the brand voice and message stay
        unified. This is not just a convenience. It means that a client’s next newsletter, Instagram post, and
        website update all reinforce the same story, building recognition and trust with every touchpoint.
        That level of cohesion is what moves the needle on local visibility and lead generation, and it is the
        gap most tools leave open.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jasper’s governance layer is another key difference. Generic AI tools can sound like anyone, or worse,
        like everyone else in the market. Jasper’s Brand Voice and Knowledge Base features ingest actual
        business documents, product details, and style guides, then enforce them in every output. The result:
        no more off-brand phrasing, outdated product facts, or compliance headaches. Every asset is grounded
        in the business’s real context, not just a prompt and a template. For a small team, this means less
        time spent editing and correcting, and more confidence that what goes out the door is accurate and
        on-message.</p>
      <p className="text-md text-white shadow-text pt-3">
        Most small businesses have tried at least one content tool that promised to automate posting or email
        campaigns, only to find that it created more work. Either it could not handle the different formats
        and requirements of each channel, or it forced teams into rigid workflows that did not match how they
        actually operate. Jasper’s integration footprint addresses this directly. With extensions for Google
        Docs, Microsoft Word, and connections to tools like Webflow, Semrush, Asana, and monday.com, Jasper
        fits into the existing stack. Teams can draft, review, and publish content without switching platforms
        or copying between systems, which cuts down on errors and wasted time.</p>
      <p className="text-md text-white shadow-text pt-3">
        The visibility challenge is another place Jasper has a unique answer. As AI search engines and answer
        engines (like ChatGPT and Google’s AI Overviews) start shaping what local clients see, traditional SEO
        is no longer enough. Jasper’s GEO analytics and optimization workflows are designed to help small
        businesses surface in these new AI-powered results. Instead of just writing for keywords, Jasper
        structures content so that AI agents recognize and cite the business as the trusted source. This is
        not a feature that basic AI writers or generic schedulers can offer, and it is increasingly the
        difference between being discovered and being invisible online.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Jasper’s approach to scaling content is tailored to the reality of small teams. Most
        platforms either assume a dedicated marketing department or leave the heavy lifting to the user.
        Jasper’s templates, long-form assistant, and campaign orchestration tools are built so that a single
        owner or a lean team can produce a month’s worth of coordinated, cross-channel content from a single
        brief. The system can generate, repurpose, and adapt assets for different audiences and platforms, all
        while enforcing the brand’s unique style and compliance needs. This is not just about speed, it is
        about making sure the business looks credible and present everywhere that matters, without hiring an
        agency or burning out the team.</p>
      <p className="text-md text-white shadow-text pt-3">
        In sum, Jasper is not just another AI writer or marketing platform. It is a purpose-built system for
        small businesses that need to look and sound like the best in their market, without enterprise
        resources. Its workflow, governance, and integration features are not add-ons, they are the core of
        why it works where other tools fall short. For teams that have tried the usual suspects and ended up
        with more work or less impact, Jasper’s difference is not subtle: it is the difference between
        scattered, forgettable content and a steady, recognizable presence that actually drives leads.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-sets-jasper-apart-from-other-content-tools-small-businesses-consider" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sets Jasper Apart from Other Content Tools Small Businesses Consider
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
              <h2 id="what-sets-jasper-apart-from-other-content-tools-small-businesses-consider-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sets Jasper Apart from Other Content Tools Small Businesses Consider
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
