export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The success of a Hootsuite deployment comes down to how you map your data and structure your content
        workflows from the start. Hootsuite is not just a posting tool, it is a platform that connects your
        content, approval processes, and analytics into one ecosystem. The decisions you make about data
        structure on day one will shape how efficiently your team can work and how accurately you can report
        on results.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is mapping every active social account, campaign, and content asset into Hootsuite’s
        unified dashboard. Each account, whether it’s Facebook, LinkedIn, Instagram, or another network, needs
        to be linked with the right permissions. For small businesses, this means making sure every user has
        the correct level of access: who can draft, who can approve, and who can publish. Hootsuite’s
        role-based controls and team assignments are built for this, letting you set granular permissions that
        mirror your real-world structure.</p>
      <p className="text-md text-white shadow-text pt-3">
        Content categorization is next. Hootsuite lets you tag posts by campaign, topic, or initiative. This
        is more than just a label, it is how you track what content drives results and where your efforts are
        being spent. For a team launching a new product, mapping every post, asset, and campaign to a clear
        category means you can report on performance at a glance, benchmark against previous launches, and
        spot gaps in your content plan before they become missed opportunities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows depend on how you map your review process. Hootsuite’s multi-step approval flows
        can be set up to match your internal structure: marketing drafts, legal reviews, leadership sign-off.
        Every step is logged, and every decision is auditable. This is especially important for regulated
        industries or teams that need to prove compliance. By structuring your workflow in Hootsuite, you
        remove the risk of posts going live without the right checks, and you always know who signed off at
        every stage.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data mapping also powers your analytics. Hootsuite’s reporting tools let you benchmark performance by
        campaign, channel, or even individual post. But this only works if your content is structured from the
        start. By tagging and categorizing every asset, you unlock the ability to create custom reports, track
        ROI, and make data-driven decisions about where to invest your time and budget. For small teams, this
        is the difference between guessing what works and knowing it.</p>
      <p className="text-md text-white shadow-text pt-3">
        When bringing in external AI tools or assistants, the data structure becomes even more important.
        Hootsuite’s MCP ensures that any AI-driven drafting or scheduling is mapped to the right account and
        approval process. This keeps your workflow secure and compliant, even as you automate more of the
        content creation and planning process. Human review remains central, AI can suggest and draft, but
        publishing always requires a final check.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC’s role is to guide you through this mapping process. The team works with you to
        inventory every source of content and data, design a tagging and approval structure that matches your
        business, and configure Hootsuite to support your goals. This upfront investment in data mapping pays
        off in fewer errors, faster workflows, and clearer reporting. It is the foundation that lets your team
        scale content output without losing control or visibility.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-data-mapping-and-structure-are-critical-when-deploying-hootsuite" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Data Mapping and Structure Are Critical When Deploying Hootsuite
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
              <h2 id="why-data-mapping-and-structure-are-critical-when-deploying-hootsuite-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Data Mapping and Structure Are Critical When Deploying Hootsuite
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
