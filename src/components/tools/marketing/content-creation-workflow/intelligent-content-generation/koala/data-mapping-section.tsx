import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The effectiveness of Koala in a real business comes down to how well its data structure matches your
        actual services, credentials, and audience. This is not a background detail, it is what makes the
        difference between content that brings in leads and content that blends into the noise. The upfront
        mapping decisions set the foundation for every article, post, and campaign Koala generates. Get these
        right, and the system produces work that sounds like your team wrote it. Get them wrong, and you end
        up with generic output that could belong to any competitor.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the core of Koala’s structure is the Brand DNA profile. This is more than a list of facts, it is a
        knowledge base that holds your services, credentials, customer reviews, target audience, and brand
        voice. The setup process asks for details that matter in your market: do you serve commercial or
        residential clients, what certifications do you hold, which neighborhoods do you cover, and what makes
        your approach different? Koala’s templates branch based on business type, local
        business,&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>, professional services, ecommerce, or
        online service, so the fields you fill out are always relevant. For example, a cleaning company in
        Fort Lauderdale can distinguish between commercial and residential services, while a healthcare
        practice can specify provider bios and compliance language.</p>
      <p className="text-md text-white shadow-text pt-3">
        Mapping your business’s real-world structure into Koala means making choices about which services to
        highlight, how to describe your team’s credentials, and what tone fits your brand. Geek @ Your Spot LLC
        works with you to review and correct these details before they drive content generation. This review
        step is not optional: it prevents the classic AI mistake of inventing services you do not offer or
        misrepresenting your qualifications. Every detail you approve is then used to shape the flow and
        language of future articles and posts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Koala’s system maintains persistent context. Once you set your Brand DNA, the platform remembers it
        for every new project. This eliminates the need to re-enter background information for each article, a
        common pain point in other AI tools. If your business changes, new services, updated credentials,
        expanded service areas, updating the Brand DNA profile updates the context for all future content.
        This keeps your messaging consistent and accurate as your business grows or shifts focus.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses with multiple locations or service lines, Koala supports separate Brand DNA profiles
        for each. This is critical for local SEO and for producing genuinely localized content. Each profile
        can be imported from its own Google Business listing or website page, ensuring that
        neighborhood-specific landing pages and service descriptions reflect real differences, not just a city
        name swapped in a template. Geek @ Your Spot LLC ensures that these profiles are mapped to the correct
        content streams, so each location’s content is relevant to its audience.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data mapping also covers integration with your existing systems. Koala’s connectors to WordPress,
        Shopify, Webflow, and Ghost require field mapping, matching Koala’s output fields to your CMS’s
        structure. This step ensures that articles, images, meta tags, and schema markup land in the right
        place, with no manual cleanup needed. When integrating with less common platforms,
        Koala’s&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;and webhook options allow for custom
        mapping, but the principle stays the same: every piece of content carries the right data, in the right
        format, for your stack.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling and approval workflows depend on this data mapping. Koala’s content calendar and batch
        generation features use your mapped business structure to schedule the right topics, assign them to
        the right streams, and route drafts to the right reviewers. Approval rules can be set by service line,
        location, or content type, reflecting how your team actually works. Geek @ Your Spot LLC configures these
        workflows so that nothing gets published without the right eyes on it, but you do not get bogged down
        in endless review cycles.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, the strength of Koala’s data structure is that it is not static. As your business evolves,
        you can update your Brand DNA, add new service lines, or adjust your voice, and Koala will apply those
        changes to all new content. This keeps your output fresh, accurate, and aligned with your real-world
        business, without needing to rebuild your setup from scratch.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-shape-koalas-results-from-day-one" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Shape Koala’s Results from Day One
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
              <h2 id="how-data-structure-and-mapping-shape-koalas-results-from-day-one" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Shape Koala’s Results from Day One
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
