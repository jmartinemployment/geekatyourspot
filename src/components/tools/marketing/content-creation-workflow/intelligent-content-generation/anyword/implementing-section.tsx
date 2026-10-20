export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting Anyword live in a small business environment is a matter of connecting the right channels,
        mapping your brand guidelines, and setting up the workflow so it fits how your team already works.
        Unlike older agency models or heavy enterprise tools, Anyword is designed to shorten the time between
        sign-up and real results, especially for small teams in South Florida that need to move fast and keep
        costs under control.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process starts with connecting Anyword to the marketing platforms you already use. Out of the box,
        Anyword offers pre-built connectors for major platforms, HubSpot, Marketo, Salesforce ExactTarget, and
        social channels like Facebook, Instagram, and LinkedIn. Each integration is built to pull in your
        existing campaign data, so the AI can learn what has worked for your business before you ever generate
        your first piece of content. For a small business, this means you do not need to migrate data or
        rebuild your marketing stack. You map your accounts, authorize access, and Anyword starts learning
        from your actual campaigns.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next step is setting up your brand voice and approval workflows. Anyword lets you define your
        brand tone, upload word lists, and set style guidelines. This is not a generic configuration, it is a
        one-time setup that ensures every piece of content, whether it is a blog, ad, or email, matches the
        voice your customers already know. For teams that need to keep messaging consistent across multiple
        people or locations, this step is critical. It takes the guesswork out of who can publish what, and
        when. You can set up automated approval flows that route drafts to the right manager based on your own
        rules, no more lost emails or bottlenecks waiting on sign-off.</p>
      <p className="text-md text-white shadow-text pt-3">
        Launching a new content workflow with Anyword is not a months-long IT project. For most small
        businesses, the entire go-live can be done in days, not weeks. The biggest time-saver is Anyword’s use
        of built-in templates and AI-powered workflow automation. Instead of building every asset from
        scratch, you start with proven templates for social posts, landing pages, emails, and more. The
        platform’s predictive scoring means you can test variations before publishing, so you do not waste
        budget on copy that will not convert.</p>
      <p className="text-md text-white shadow-text pt-3">
        A typical rollout with Geek @ Your Spot LLC follows a phased approach. First, the team connects your core
        platforms and imports your best-performing content. Next, you define your brand voice and set up
        approval flows. Then, you launch a pilot campaign, often a batch of posts or an email sequence, using
        Anyword’s AI to generate, score, and optimize the content. You review the results in the performance
        dashboard, tweak as needed, and scale up to other channels. Because Anyword centralizes content
        creation and optimization, your team can handle more channels with less effort, and see which messages
        are working in real time.</p>
      <p className="text-md text-white shadow-text pt-3">
        The main blockers to a fast go-live are usually data silos or unclear brand guidelines. Anyword’s
        connectors and templated setup help bypass these. If your data is scattered or your team is still
        debating tone, Geek @ Your Spot LLC will help you map out what matters and get it loaded into the
        platform. The process is designed to be as hands-off as possible for the business owner: you answer a
        few questions, provide access to your channels, and the rest is handled by the implementation team.
        That is how you go from blank page to automated, optimized content in less than a week, without
        disrupting your day-to-day operations or blowing your budget.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Connect your marketing platforms (HubSpot, Marketo, Facebook, etc.) to Anyword.</li>
        <li>Import past campaign data for AI training.</li>
        <li>Define brand voice, tone, and style guidelines in the platform.</li>
        <li>Set up automated approval workflows for content review and publishing.</li>
        <li>Launch a pilot campaign using built-in templates and predictive scoring.</li>
        <li>Review results in the performance dashboard and adjust as needed.</li>
        <li>Scale up to multi-channel publishing as workflows are proven.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses that have struggled with slow agency onboarding or heavy manual processes,
        Anyword’s approach is a sharp contrast. You get a focused, step-by-step rollout that puts your real
        marketing data to work from day one. The result is faster content cycles, less wasted time on
        approvals, and a clear path from setup to measurable results.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-launch-anyword-in-a-small-business-marketing-stack" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch Anyword in a Small Business Marketing Stack
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-launch-anyword-in-a-small-business-marketing-stack-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch Anyword in a Small Business Marketing Stack
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
