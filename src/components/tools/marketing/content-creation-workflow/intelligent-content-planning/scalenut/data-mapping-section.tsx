import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Scalenut’s results depend on how well your data is mapped and structured from the start. The platform
        is not just an AI writer, it is a system that reads, organizes, and acts on your business’s real
        topics, locations, and approval logic. The upfront mapping decisions set the stage for every
        automation that follows.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first and most critical mapping is your topic taxonomy. Scalenut’s cluster engine builds its
        suggestions around how you group your services, products, or local pages. If your business serves both
        Miami and Fort Lauderdale, for instance, the platform needs to know which service lines belong to
        which market, and which keywords are tied to each. Geek @ Your Spot LLC works with you to define these
        clusters, using your own business logic and the real questions your customers ask, so the AI does not
        just guess, it plans against your actual market priorities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next is the mapping of approval roles and workflow steps. Scalenut supports multi-level approvals, but
        only if the right people and steps are defined upfront. For a compliance-driven business, this might
        mean routing all financial content to the CFO before it goes live; for a retail operation, it could be
        a marketing manager and a store lead. Geek @ Your Spot LLC configures these roles in Scalenut’s workflow
        builder, so every draft, revision, and scheduled post follows your internal controls, no skipped
        steps, no accidental publishes.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform also needs a clear mapping of your content assets, what exists, what is evergreen, what
        needs updating, and what should be repurposed. Scalenut’s AI repurposing engine relies on accurate
        tagging and categorization to turn one strong blog post into a dozen social snippets or email
        sequences. If your historical content is scattered across folders or platforms, the first step is to
        centralize and tag it, so the AI can find and reuse what works.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling and publishing depend on mapping your channels and endpoints. The system needs to know
        which content goes to which platform, your blog, your newsletter, your Facebook page, and in what
        format. Geek @ Your Spot LLC sets up these channel mappings during onboarding, so once a piece of content
        is approved, Scalenut can push it live without manual intervention or copy-paste errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams focused on AI-driven search visibility, prompt mapping is essential. Scalenut tracks which
        prompts (questions, comparisons, alternatives) your target audience is asking on AI engines, and maps
        these to your own content clusters. This ensures that every new article or landing page is tied to a
        real search intent, not just a generic keyword. The result is content that is structured to be cited
        by ChatGPT and Perplexity, not just ranked by Google.</p>
      <p className="text-md text-white shadow-text pt-3">
        Internal linking automation requires a map of your site’s structure. Scalenut’s link manager needs to
        understand which pages are pillars, which are clusters, and how authority should flow between them.
        Geek @ Your Spot LLC audits your site and tags the relationships, so the AI can build and maintain a
        logical, SEO-friendly link network that reinforces your topical authority.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally,&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>&nbsp;and consistency
        matter. Scalenut’s automations are only as good as the data they act on. If your service areas are
        inconsistently named, or your content tags are out of date, the system’s recommendations will be off.
        Geek @ Your Spot LLC’s implementation process includes a&nbsp;<GlossaryLink slug="data-quality">data
        quality</GlossaryLink>&nbsp;assessment, cleaning up inconsistencies and standardizing formats before
        Scalenut starts its work. This is not just a technical step, it is what ensures that the AI’s
        decisions match your business reality, and that every automation actually saves you time instead of
        creating new errors to fix.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Define and map your business’s topic clusters and service areas</li>
        <li>Set up approval roles and workflow steps for every content type</li>
        <li>Centralize, tag, and categorize existing content assets for repurposing</li>
        <li>Map publishing channels and content endpoints for automated scheduling</li>
        <li>Align prompt tracking with real user questions and AI search intents</li>
        <li>Audit and tag your site’s structure for automated internal linking</li>
        <li>Clean and standardize all data and tags before launch</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        When these mapping steps are handled upfront, Scalenut’s automation delivers on its promise. The team
        in West Palm Beach who started this journey no longer spends Fridays chasing down which blog post is
        approved, what goes to which platform, or why a landing page is missing from AI recommendations.
        Instead, every piece of content is mapped, scheduled, and tracked, so nothing falls through the
        cracks, and every asset is working toward a measurable business goal.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-what-needs-to-be-right-before-scalenut-runs" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping: What Needs to Be Right Before Scalenut Runs
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
              <h2 id="data-structure-and-mapping-what-needs-to-be-right-before-scalenut-runs" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping: What Needs to Be Right Before Scalenut Runs
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
