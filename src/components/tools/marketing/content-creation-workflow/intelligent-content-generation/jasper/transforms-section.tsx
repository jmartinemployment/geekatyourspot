export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Jasper is built to take the friction, waste, and inconsistency out of content creation for small
        teams. Instead of spending hours on every draft or chasing down approvals, Jasper automates the heavy
        lifting so you get back time for work that matters. The platform does more than write text. It brings
        structure and control to your entire content workflow, from the first idea to the final published
        asset.</p>
      <p className="text-md text-white shadow-text pt-3">
        With Jasper, you stop reinventing the wheel every week. Its Canvas workspace lets you plan, build, and
        launch multi-asset campaigns in one place. That means your emails, landing pages, social posts, and
        ads all tell the same story, no more mixed signals or off-brand messages. When you update your product
        details or offers, Jasper pushes those changes across every asset. You never have to worry about an
        outdated promotion slipping through or a landing page missing the latest compliance language.</p>
      <p className="text-md text-white shadow-text pt-3">
        Brand voice is locked in from the start. Jasper IQ keeps every message, headline, and caption aligned
        with your style guide and brand rules. Whether you are sending a quick email to one segment or
        launching a full campaign across channels, the tone and facts stay consistent. This does not just
        protect your reputation, it saves hours of rewriting and review. Your team can trust that every output
        sounds like your business, not a generic template.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jasper’s Knowledge Base feature means you do not have to brief the AI over and over. Upload your real
        business documents, product specs, and talking points once. Jasper pulls from this source of truth
        every time it generates content, so you avoid errors and keep facts straight. When something changes,
        like a new office opening or an updated service area, one update in the Knowledge Base rolls out
        everywhere. That alone can save hours each month and prevent mistakes that cost you leads or
        credibility.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform adapts content for every channel’s demands. Jasper structures each post, email, or page
        to fit the unique requirements of LinkedIn, your website, or a newsletter. You do not have to reformat
        or rewrite for each audience. This cuts down on revisions and makes it possible to schedule a full
        month of content in minutes, not days. For teams who used to lose hours each week just moving content
        from one platform to another, this is a direct return of time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling and automated variations mean you can launch campaigns at scale without extra
        headcount. Need a dozen social posts for the month or a series of emails tailored to different
        segments? Jasper handles the duplication and personalization. You stay focused on strategy and
        customer conversations, not on copy-pasting or tweaking the same message for each list.</p>
      <p className="text-md text-white shadow-text pt-3">
        For approvals, Jasper’s workflow tools cut the back-and-forth. Reviews and sign-offs happen inside the
        same workspace, so you always know what is ready and what needs attention. No more lost emails or
        confusion over which draft is current. This keeps your campaigns moving and stops bottlenecks before
        they start.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jasper also plugs into the tools you already use. Integrations with Google Docs, Microsoft Word, and
        other major platforms let your team generate, edit, and publish content without learning a new system.
        You do not have to rip and replace what works. Jasper fits into your stack and extends your reach,
        letting you get more done with the tools you know.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the biggest returns for small teams is the removal of the &quot;blank page&quot; problem.
        Jasper’s library of templates and generative AI agents can produce first drafts, outlines, or even
        full campaigns from a single brief. Instead of staring at an empty document, your team moves straight
        to reviewing and refining. This alone can reclaim hours every week and keep your pipeline full without
        burnout.</p>
      <p className="text-md text-white shadow-text pt-3">
        The outcome is not just more content, but better content, on time, on brand, and ready to drive leads.
        Jasper does not just speed up writing; it gives your business the polish and consistency of a much
        larger operation. The same team that struggled to get a blog post out now manages a full calendar of
        coordinated campaigns, all with less stress and lower cost.</p>
      <blockquote cite="https://www.jasper.ai/canvas" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Speed, scale, and brand consistency, all in one collaborative platform.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        For the business owner in Miami, that means Friday afternoons look different. Instead of scrambling to
        finish a draft, she reviews a set of polished, ready-to-publish assets, all telling the same story,
        all on brand, and all scheduled for the week ahead. The grind is gone. The focus shifts back to
        clients and growth, with content working in the background to keep leads coming in and the business
        top of mind for local buyers.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-jasper-removes-the-weekly-grind-from-intelligent-content-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Jasper Removes the Weekly Grind from Intelligent Content Generation
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
              <h2 id="how-jasper-removes-the-weekly-grind-from-intelligent-content-generation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Jasper Removes the Weekly Grind from Intelligent Content Generation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
