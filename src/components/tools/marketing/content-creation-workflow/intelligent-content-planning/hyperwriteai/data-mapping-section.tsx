
export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        HyperWrite does not require a business to build a new data warehouse or migrate content into a closed
        ecosystem. Still, the way you structure and map your data at the start has a direct impact on how well
        the platform personalizes outputs, automates repetitive work, and keeps the team’s voice consistent
        across every channel. Upfront decisions here are not about technical architecture, they are about
        making the AI assistant genuinely useful from day one.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of a successful HyperWrite deployment is the reference material you give it. This is not just
        a pile of past emails or blog posts. You need to decide what samples best represent your real brand
        voice, tone, and messaging priorities. For some teams, that means uploading their top-performing email
        campaigns, a set of published blog posts, or a few customer-facing documents that capture their tone.
        The Personas feature in HyperWrite uses this data to train the assistant to suggest content in the
        same style, making every draft feel on-brand.</p>
      <p className="text-md text-white shadow-text pt-3">
        Mapping approval paths is another key data decision. Many small businesses have approval chains that
        exist only in someone’s head or in a scattered email thread. HyperWrite’s automation rules need these
        paths made explicit: who signs off on a draft, what dollar threshold requires a second reviewer, which
        departments need to review which types of content. Getting this mapped early means that as soon as the
        assistant generates a draft or schedules a post, it knows where to send it and who needs to review it,
        no more chasing down approvals or guessing who owns the next step.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next is the structure of your content templates. HyperWrite works best when it has clear, modular
        templates for the types of content you produce most often, routine replies, blog outlines, social
        media posts, or campaign emails. These templates do not need to be complex. A simple set of sections
        (greeting, body, call to action, signature) is enough for email; a headline, three key points, and a
        call to action might cover social posts. The important part is that the assistant knows what a
        finished piece should look like, so it can fill in the blanks with context-aware suggestions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Audience segmentation data is another up-front mapping step that pays off quickly. If your business
        targets different customer groups, local leads, repeat clients, or industry partners, feeding those
        segments into HyperWrite allows the assistant to personalize content for each audience. The platform
        adapts language, detail level, and even tone based on the segment, making every email or post more
        relevant without manual rewriting. This is especially important for personalized email campaigns,
        where a single message often needs to be tailored for several groups at once.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integrations are the final piece. HyperWrite is built to work inside browser tabs, but it can pull
        context from adjacent apps, calendars, CRMs, or project management tools, if those connections are
        mapped up front. Deciding which integrations matter most (for example, connecting to
        your&nbsp;CRM&nbsp;to personalize outreach or to your content
        calendar for bulk scheduling) ensures that the assistant is drawing on the most relevant, up-to-date
        information. This reduces errors and manual copy-paste work, making the content workflow smoother and
        more reliable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC handles these mapping decisions as part of their implementation process. They work
        with your team to define which reference materials train the assistant, document approval chains,
        build content templates, and set up the right integrations. The result is a HyperWrite deployment that
        fits your business’s real needs, not a generic install that leaves half the work manual. By investing
        in this upfront mapping, you get an AI assistant that is ready to deliver value on day one, and gets
        smarter and more useful as your team uses it.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a small marketing team, this means no more guessing about the right tone for a new campaign, no
        more lost drafts in email chains, and no more hours wasted reformatting content for different
        channels. The upfront data work is the difference between an AI tool that sits ignored and one that
        quietly removes friction from every part of your content workflow.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-decisions-that-shape-a-successful-hyperwrite-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping Decisions That Shape a Successful HyperWrite Deployment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-decisions-that-shape-a-successful-hyperwrite-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping Decisions That Shape a Successful HyperWrite Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
