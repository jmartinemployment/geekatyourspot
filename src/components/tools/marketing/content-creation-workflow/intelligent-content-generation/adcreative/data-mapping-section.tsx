export default function DataMappingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The key data structure and mapping decisions for AdCreative deployment are about how your brand, products,
        and campaign assets are organized and linked to the platform. AdCreative’s automation is only as strong as
        the data you feed it, clean, structured inputs lead to faster, more accurate creative generation and message
        validation. Upfront, you need to decide how to map your business’s brand elements, product catalog, and
        campaign objectives into AdCreative’s system.</p>
      <p className="text-base text-white shadow-text pt-3">
        First, brand identity mapping is critical. AdCreative requires your logo, color palette (hex codes), fonts,
        and style guidelines to ensure all generated creatives are on-brand. The platform’s one-click brand import
        pulls these elements in, but you need clear, standardized files and codes ready. If your assets are
        scattered or inconsistently formatted, expect delays or off-brand outputs. For small businesses, organizing
        these assets in advance, ideally in a shared digital folder, removes friction during onboarding and avoids
        the need for repeated manual corrections later.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, product and service data must be structured so AdCreative can generate relevant copy and visuals. For
        e-commerce or multi-product businesses, this means having a clean product feed with names, descriptions,
        images, and pricing. AdCreative’s batch generation relies on this structure to create multiple ad variants
        at once. If your product data is incomplete, out of date, or stored in inconsistent formats, the AI will not
        be able to produce accurate, conversion-focused creatives. For service businesses, a short, clear
        description of each offer, its value proposition, and target audience is needed. This information is what
        the AI draws from when building copy and selecting templates.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mapping campaign objectives is another upfront decision. AdCreative’s AI uses your stated goals, such as
        driving calls, bookings, or online sales, to optimize copy and layout for those outcomes. You need to define
        these objectives clearly when setting up campaigns in the platform. This mapping ensures the AI does not
        just generate generic ads, but ones that push the specific actions you care about. For businesses running
        multiple campaigns, segmenting objectives by campaign or audience is key to getting tailored outputs.</p>
      <p className="text-base text-white shadow-text pt-3">
        Audience and platform mapping also matter. AdCreative supports platform-specific creative formats for Meta,
        Google, LinkedIn, Pinterest, and Microsoft Ads. You need to indicate which platforms you plan to advertise
        on, as the system will generate assets in the required sizes, aspect ratios, and styles. If you skip this
        step or leave platform settings generic, you risk getting creatives that do not fit your actual placements,
        leading to wasted effort or last-minute manual edits.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with more complex needs, mapping data for creative testing and validation is important.
        AdCreative can generate and test multiple ad variants, but to get value from this, you need to structure
        your data so that each variant’s inputs (copy, image, call to action) are tracked and linked to performance
        metrics. This setup allows you to see which combinations drive conversions and lets the AI learn from real
        outcomes over time. Without this structure, you lose the feedback loop that makes AI-driven validation work.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, permissions and user mapping are part of deployment. AdCreative’s plans allow up to 10 users on the
        Pro tier, so deciding who in your organization can access, edit, and approve creatives is a practical step (<a id={`tools-marketing-budget-ad-copy-message-validation-adcreative-data-mapping-source-adcreative-ai${idSuffix}`} href="https://www.adcreative.ai/industries/fashion-apparel" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">AdCreative</a>,
        as of Oct 23, 2026). Mapping roles and access levels upfront avoids confusion and ensures the right people
        can manage campaigns without bottlenecks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot guides this mapping process, working with you to audit your brand assets, clean up product
        data, and define campaign objectives before anything is loaded into AdCreative. Their method emphasizes data
        quality as the foundation for automation. They help you structure your information in a way that the AI can
        use directly, reducing back-and-forth and speeding up the path to live, optimized campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, the decisions that matter most before deploying AdCreative are about how you organize and map
        your brand identity, product or service data, campaign goals, platform needs, and user permissions.
        Investing time in structuring this data upfront pays off in faster onboarding, higher-quality output, and
        more reliable message validation. With clear mapping, AdCreative’s automation delivers on its promise: every
        ad, headline, and image is built for your business, not just filled in by a template.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-data-structure-and-mapping-decisions-matter-before-deploying-adcreative" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What data structure and mapping decisions matter before deploying AdCreative
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-data-structure-and-mapping-decisions-matter-before-deploying-adcreative-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What data structure and mapping decisions matter before deploying AdCreative
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
