export default function EvaluatingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Judging whether Moosend is the right fit for your personalized email campaigns comes down to how well its
        segmentation, automation, and pricing model match your business’s needs and scale. Moosend is designed for
        small teams that want to automate personalized follow-up without hiring extra staff or managing complex
        software. Its pricing starts at $9 per month for unlimited emails, which is published on Moosend’s own site,
        and it offers a 30-day free trial to test its features before you commit (<a id={`tools-marketing-personalized-email-campaigns-moosend-evaluating-source-moosend-com${idSuffix}`} href="https://moosend.com/blog/best-time-to-send-an-email/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Moosend</a>,
        as of Oct 25, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        The first fit question is whether Moosend’s approach to automation and segmentation matches your workflow.
        If your business relies on sending the same message to every contact, or you want a platform that acts as a
        full CRM or supports heavy custom code, Moosend is not the right match. But if you need to send tailored
        content to different groups, such as new leads, returning customers, or people who have not opened your last
        three emails, Moosend’s segmentation and automation tools are built for this. The workflow builder,
        automation recipes, and AI-powered content generation are all aimed at making personalized email campaigns
        practical for a small team.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moosend’s pricing model is simple: you pay a flat monthly rate for unlimited emails, rather than per-send or
        per-contact pricing. This means you do not have to worry about going over a quota or getting surprised by
        extra fees if your list grows. For South Florida businesses that want to scale campaigns up or down
        seasonally, or who are working to grow their list, this flat rate can make budgeting easier. The 30-day free
        trial lets you see how the platform works with your own data and processes before you spend anything.</p>
      <p className="text-base text-white shadow-text pt-3">
        When weighing Moosend against other platforms, look at the depth of its segmentation and automation
        features. Moosend gives you the ability to create segments based on behavior, custom fields, and engagement,
        and to automate sequences with branching logic and delays. Its built-in AI Writer and automation templates
        are included at the base price, so you do not pay extra for features that are often gated in competitors’
        higher tiers. If your team has struggled with manual follow-ups or generic blasts, and you want to move to a
        system that sends the right email to the right person at the right time, Moosend is a strong fit.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moosend is not a platform for businesses that need deep integrations, a developer API, or advanced CRM
        capabilities, none of these are present in the evidence. If your process depends on connecting to dozens of
        outside tools or building custom flows with code, you will hit limits. For most small businesses in
        Miami-Dade, Broward, or Palm Beach counties, though, the platform’s out-of-the-box automation and
        segmentation are enough to solve the real problem: sending relevant emails without manual effort.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, consider the support and ease of use. Moosend is built for non-technical users: the workflow
        builder, segmentation, and content tools are all accessible from its main dashboard. You do not need a
        developer to launch or update a campaign. For a small business, this means you can own your campaigns
        without waiting for outside help. And with Geek @ Your Spot handling the initial mapping and setup, you get
        a system that matches your business from day one, and can be adjusted as you grow, without starting over or
        paying for a bigger tier.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-moosend-on-fit-and-on-its-pricing-model" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge Moosend on fit and on its pricing model
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-moosend-on-fit-and-on-its-pricing-model-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge Moosend on fit and on its pricing model
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
