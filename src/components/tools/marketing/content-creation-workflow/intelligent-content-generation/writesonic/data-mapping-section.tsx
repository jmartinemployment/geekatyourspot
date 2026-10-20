export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The structure of your data and the way you map it into Writesonic makes or breaks the quality of your
        content from the start. This is not just a technical detail for IT, every field, tag, and template you
        choose determines how well the platform can personalize, optimize, and publish your material across
        channels. For small businesses in South Florida, the upfront decisions here decide whether your new
        workflow produces generic filler or content that actually matches your brand and wins local leads.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the core, Writesonic’s content engine expects structured inputs for each content type. For a blog
        post, this means you define the target keyword, audience intent, and any required sections (like FAQs,
        citations, or schema blocks). For landing pages, you map each service area or product to a template
        that includes local identifiers, conversion hooks, and structured data for AI and search engines. If
        your business has multiple audience segments, you set up persona tags so the platform can tailor tone
        and messaging per segment. These mappings are not just for show, they drive how the AI drafts and how
        the system routes content for review and approval.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the most important choices is how you organize your brand voice and style guidelines.
        Writesonic supports brand voice profiles that train the platform on your existing material, past blog
        posts, landing pages, or email campaigns. The more precise your mapping here, the closer the AI output
        matches your actual tone. If you skip this step or load inconsistent examples, the result is a generic
        voice that blends into the noise. For South Florida businesses that rely on local trust and
        recognition, this is the difference between sounding like your team and sounding like everyone else.</p>
      <p className="text-md text-white shadow-text pt-3">
        Content mapping also covers how you handle SEO and AI search optimization. Writesonic’s templates
        expect schema fields for things like FAQ sections, author bios, and organization details. If you do
        not map these fields correctly, your content may miss out on featured snippets or AI citations. The
        platform’s integration with tools like Ahrefs and Google Keyword Planner means you can pull in live
        keyword data, but you need to map those keywords to the right content types and sections. This is not
        a set-and-forget job, if your business adds new service lines, product categories, or market areas,
        you need to update the mappings so your content pipeline stays accurate and relevant.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval and workflow logic depend on how you tag and categorize your content in Writesonic. For
        example, you might set up a rule that routes all posts about a specific location or product to a
        manager for review, while routine updates can publish automatically. The more granular your mapping,
        the more control you have over who sees what, and when. This is especially important for small teams
        that cannot afford mistakes going live, one missed field or misrouted draft can mean the wrong message
        hits your site or inbox.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling and repurposing depend on how you structure your content blocks. Writesonic lets you
        break down articles into sections, social snippets, or email bodies. If your initial mapping is
        sloppy, mixing calls to action with informational content, or leaving out meta tags, your automated
        campaigns will be less effective. Clean, well-structured data means you can spin up new campaigns or
        adapt existing material for different channels without rewriting or manual cleanup.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC guides these decisions so your deployment actually fits your business logic, not just
        the tool’s defaults. The consultancy works with your team to audit existing content, tag and map it
        into the platform, and set up templates that reflect your real-world marketing needs. They handle the
        detail work, matching keywords to landing pages, mapping persona tags to email segments, and wiring up
        approval chains, so you do not lose time or risk errors at launch. This is where most DIY projects
        stumble: the technical setup is easy, but getting the mapping right takes experience. Geek @ Your Spot LLC
        brings that local, hands-on expertise so your Writesonic pipeline is clean, structured, and ready to
        scale from day one.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-shape-writesonics-content-output-from-day-one" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Shape Writesonic’s Content Output from Day One
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
              <h2 id="how-data-structure-and-mapping-shape-writesonics-content-output-from-day-one" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Shape Writesonic’s Content Output from Day One
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
