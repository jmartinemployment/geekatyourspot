export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Deciding if Castmagic is right for your small business comes down to two things: whether its workflow
        fits how your team actually creates content, and whether its pricing model makes sense for the amount
        and type of content you need to produce. Castmagic is not a one-size-fits-all solution. It is built
        for teams who have a steady stream of recorded material, calls, webinars, podcasts, training sessions,
        and want to turn those into a high volume of publish-ready assets without hiring more staff or
        outsourcing everything to an agency.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start by looking at your current bottlenecks. If your team has hours of recordings sitting unused, if
        you lose time chasing down approvals or rewriting the same newsletter in different voices, or if you
        pay outside copywriters just to get a few posts out each week, Castmagic is built to address exactly
        those points. Its core value is in automating the conversion of raw audio and video into dozens of
        content types, blog posts, social updates, emails, and more, using templates and rules you control.
        This is not just about speed; it is about consistency and brand control. Every output can be set to
        match your brand’s tone, structure, and compliance needs, so you spend less time editing and more time
        publishing.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fit also depends on your team’s size and technical comfort. Castmagic is designed for lean teams,
        owners, office managers, or small marketing groups, who do not have a dedicated IT department or
        in-house developers. There is no coding required; all configuration is handled through the platform’s
        own interface. If your team is comfortable using cloud tools and can describe what they want in plain
        English, you can get value from Castmagic. For businesses with more complex needs, multiple brands,
        regulatory requirements, or strict approval chains, the platform’s workspace and campaign management
        features provide the structure needed to keep everything organized and auditable.</p>
      <p className="text-base text-white shadow-text pt-3">
        When it comes to pricing, Castmagic uses a usage-based model. According to the platform’s published
        information, you pay based on the number of minutes of audio or video you process each month, with
        plans starting at $19 for 300 minutes and scaling up to unlimited use for higher-volume teams. There
        is also a free trial and a free plan with limited minutes, so you can test the platform before
        committing. This model is well-suited to small businesses because you only pay for what you use. If
        your content volume is predictable, say, one podcast and a few client calls per week, you can choose a
        plan that matches your needs without overpaying for unused capacity.</p>
      <p className="text-base text-white shadow-text pt-3">
        It is important to compare this model to your current costs. If you are paying $60–180 to transcribe a
        single hour of audio by hand, or spending days each month on manual drafting and editing, Castmagic’s
        subscription is a fraction of that. The real savings come from the hours you get back. Instead of
        having someone on your team spend half a day turning a webinar into a blog post and three social
        captions, Castmagic automates that process and delivers drafts in minutes. This does not just cut
        costs; it lets your team focus on higher-value work, client service, sales, or operations, rather than
        repetitive content tasks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Some teams worry about quality or control with automated tools. Castmagic addresses this by letting
        you set detailed prompts, review drafts before publishing, and iterate as needed within the platform.
        You are never locked into a single template or output. If you need to change your approach, launch a
        new campaign, update your brand guidelines, or add a new social channel, you can adjust prompts and
        workflows without switching tools or retraining your team.</p>
      <p className="text-base text-white shadow-text pt-3">
        A practical way to judge fit is to run a short pilot. Use the free trial or the entry-level plan to
        process a week’s worth of your real recordings. Configure the prompts to match your brand, set up the
        approval flow, and see how much time you save and how closely the outputs match your needs. If you
        find yourself still rewriting every draft, or if the platform cannot handle the variety of content you
        need, it may not be the right fit. But if you see a clear drop in manual work and an increase in
        content volume or consistency, the economics are hard to ignore.</p>
      <p className="text-base text-white shadow-text pt-3">
        Castmagic’s model is not for everyone. If your business does not generate much recorded content, or if
        you rely on highly bespoke, creative writing rather than repeatable formats, you may not see the same
        return. But for small businesses in South Florida who want to turn every customer conversation,
        webinar, or team meeting into a stream of branded content, Castmagic is built for your workflow and
        budget. The platform’s pricing is transparent, the setup is straightforward, and the results are
        measurable in hours saved and content published. Evaluate it by your own numbers, how much time and
        money you spend now versus what you get back, and you will see quickly if it is the right fit for your
        team.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-castmagics-fit-and-pricing-for-your-teams-content-workflow" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Castmagic’s Fit and Pricing for Your Team’s Content Workflow
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-castmagics-fit-and-pricing-for-your-teams-content-workflow-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Castmagic’s Fit and Pricing for Your Team’s Content Workflow
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
