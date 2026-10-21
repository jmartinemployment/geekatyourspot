export default function RolesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        When a small business adopts Intelligent Content Generation, the work changes for everyone involved,
        owners, office managers, marketers, and even front-line staff. This is not about replacing jobs; it’s
        about moving the bottleneck from manual drafting to higher-value decisions and oversight. The Friday
        afternoon from the opening now looks different: the same office manager who used to stay late editing
        Facebook posts is now approving a week’s worth of AI-generated drafts in one sitting.</p>
      <p className="text-base text-white shadow-text pt-3">
        For business owners, the biggest shift is in delegation and control. Instead of micromanaging every
        email or social caption, you approve the core business facts and the tone of voice. After that, the
        system, whether powered by Rytr, Koala, or Copy.ai, handles the repetition. Owners spend less time
        trying to write and more time making decisions about what matters: which promotions to run, which new
        service to highlight, or how to respond to customer trends. This change often feels uncomfortable at
        first, especially for those who are used to doing everything themselves. But with a defined approval
        workflow, like the one Hootsuite or Jasper enforces, the owner’s role becomes more strategic: set the
        direction, review for brand fit, and let the machine handle the routine.</p>
      <p className="text-base text-white shadow-text pt-3">
        For marketing or admin staff, the daily tasks become more about curation and quality control than
        about writing from scratch. Instead of spending hours drafting captions or formatting email campaigns,
        the team reviews AI drafts, checks them for accuracy, and fine-tunes the messaging. With Frase or
        Anyword, for instance, the team can test which subject line or ad copy is predicted to perform best,
        rather than guessing or running endless A/B tests by hand. Approval moves from a scattered inbox of
        drafts to a centralized dashboard, where every asset, blog, email, social post, flows through a
        defined review process. The work is now about catching errors before they go live, maintaining
        consistency, and making sure the AI reflects real events and local flavor.</p>
      <p className="text-base text-white shadow-text pt-3">
        Specialists, like the team member who handles Spanish-language outreach in Miami-Dade, or the person
        in charge of product photos, now have tools that multiply their impact. Rytr, for example, supports
        25+ languages, so follow-up emails and captions don’t have to be translated by hand. Imagine and
        Castmagic let the marketing lead turn raw audio, webinars, or service photos into polished blog posts,
        videos, and social content in a few clicks. This means more output with fewer bottlenecks and less
        burnout, especially during busy seasons or when staff are stretched thin.</p>
      <p className="text-base text-white shadow-text pt-3">
        Even staff who aren’t in marketing feel the difference. The sales rep who used to chase down
        testimonials or rewrite service descriptions now sees those stories surface automatically in new
        campaigns. The customer service lead can flag frequently asked questions, and Frase or Scalenut will
        ensure those get answered in the next round of content. The knowledge that used to live in staff
        emails or meeting notes becomes part of the business’s official voice.</p>
      <p className="text-base text-white shadow-text pt-3">
        The change is not always smooth. Some team members will worry about losing control or being replaced
        by automation. The reality, though, is that Intelligent Content Generation pushes everyone’s work up
        the value chain. You spend less time on rework and more on strategy, creative direction, and customer
        engagement. The team’s expertise, knowing what makes a campaign sound right, what local events matter,
        what customer questions need an answer, now drives the process, instead of getting buried under the
        weight of manual drafting. That’s the difference between a business that feels constantly behind and
        one that keeps its voice and its message sharp, every week, without burning out its people.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-people-whose-work-changes-and-what-changes-for-them" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The People Whose Work Changes, and What Changes for Them
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
              <h2 id="the-people-whose-work-changes-and-what-changes-for-them-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The People Whose Work Changes, and What Changes for Them
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
