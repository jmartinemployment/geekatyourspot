export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Jasper’s results depend on how well its data structure matches the client’s real business context. The
        first step is mapping what matters, not just the content types (blogs, emails, posts), but the
        underlying facts, brand rules, and approval logic that define how content is created and reviewed.
        This is where small teams can win or lose the benefits of automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jasper’s Brand Voice is not a set-it-and-forget-it style guide. It is a structured layer that pulls
        from real company language, value propositions, and proof points. During setup, Geek @ Your Spot LLC works
        with clients to collect and organize the documents that define the business, past campaigns, product
        descriptions, customer stories, and regulatory disclaimers. These assets are uploaded into Jasper’s
        Knowledge Base, which the platform references every time it generates or revises content. The more
        specific and complete this mapping is, the less time the team will spend correcting off-brand or
        inaccurate drafts later.</p>
      <p className="text-md text-white shadow-text pt-3">
        Each content asset in Jasper is tied to a schema: the fields and metadata that control what gets
        written, how it is reviewed, and where it is published. For a blog post, this might include the topic,
        target audience, focus keywords, and required calls to action. For a product description, the schema
        includes specs, pricing, differentiators, and compliance language. Jasper’s Product IQ feature lets
        businesses define these fields in a customizable way, so every asset pulls the right facts and follows
        the right rules. When a product changes, say, a new price or feature, the update is made once in
        Jasper and cascades across every asset that references it.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval logic is mapped up front as well. Jasper supports multi-step reviews, batch approvals, and
        role-based access, all defined at the schema level. This means that when content moves from draft to
        review, the right stakeholders are notified and only approved users can make changes. For teams with
        compliance needs, this structure reduces the risk of publishing unapproved or outdated information.</p>
      <p className="text-md text-white shadow-text pt-3">
        Channel mapping is another key decision. Jasper’s Canvas and Grid workspaces allow teams to define
        which assets go to which channels, with formatting and messaging adapted for each. The schema for a
        social post is not the same as for an email or a landing page, each has its own requirements,
        character limits, and tone. Jasper’s mapping ensures that a single campaign brief can generate
        channel-specific assets without manual rewriting.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integrations are mapped as part of the data structure. Jasper connects directly to tools like Google
        Docs, Microsoft Word, Webflow, Asana, monday.com, and Google Search Console. During setup, Geek @ Your Spot LLC works with clients to map which data flows where, content drafts, approvals, performance metrics,
        so nothing gets lost between systems. This mapping is what allows Jasper to slot into an existing
        workflow without creating new bottlenecks or manual steps.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, the mapping phase is not a one-time project. As the business grows, new products, campaigns,
        or compliance rules may require updates to the schema or knowledge base. Jasper’s structure allows
        these changes to be made centrally, with updates pushed out to every affected asset. This keeps the
        content ecosystem current and reduces the risk of outdated or inconsistent messaging.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-shape-jaspers-impact-from-day-one" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Shape Jasper’s Impact from Day One
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
              <h2 id="how-data-structure-and-mapping-shape-jaspers-impact-from-day-one-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Shape Jasper’s Impact from Day One
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
