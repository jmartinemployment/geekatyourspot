import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Getting the data structure and mapping right at the start is what makes Plai’s automated validation and
        optimization work for small teams. The most important upfront decisions are how to organize campaigns,
        audiences, and creative assets, and how to map business data into Plai’s workspaces so every metric and
        report is meaningful for the team running it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai’s workspace model is built for clarity and separation. Each brand, location, or client gets its own
        workspace, where all campaigns, context, and analytics are kept siloed. For a small business, this means
        that ad data for the Miami location never mixes with Fort Lauderdale or West Palm Beach, and franchisees see
        only their own results. Geek @ Your Spot sets up these workspaces to match the business’s real-world
        structure, so reporting and permissions are always clean. This is especially important for franchise brands
        or multi-unit operations, where controlling who can see and edit campaigns is critical.</p>
      <p className="text-base text-white shadow-text pt-3">
        Audience data is mapped with precision. Plai supports importing existing customer lists and building new
        audiences using its AI-driven segmentation tools. Geek @ Your Spot works with the client to define the right
        audience packs, by geography, demographic, or behavior, so campaigns target only the buyers who matter. This
        avoids the classic budget drain of broad, out-of-market targeting and ensures that every dollar goes to the
        right zip codes and customer types. For teams that already have lists in other systems, Plai’s import tools
        make the transition quick, and its central audience manager keeps everything organized.</p>
      <p className="text-base text-white shadow-text pt-3">
        Campaign structure is another key mapping decision. Plai’s templates allow for standardized naming,
        grouping, and tracking across all campaigns. Geek @ Your Spot helps the business decide how to structure
        campaigns, by product, season, or promotion, so performance comparisons are easy and budget shifts can be
        made quickly. This structure also supports Plai’s optimization logic, which moves spend toward the
        best-performing campaigns and pauses underperformers automatically. Without this upfront organization, the
        AI cannot deliver its full value.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative assets are stored and mapped to the right campaigns and audiences from the start. Plai’s creative
        hub supports uploading, tagging, and organizing images, videos, and ad copy, so the right assets are always
        available for testing and reuse. Geek @ Your Spot configures this hub so that each workspace sees only its
        own approved creative, and templates for branded content are locked down where needed. This prevents
        mistakes, like the wrong logo or message going live in the wrong market, and speeds up new campaign launches
        by making proven assets instantly available.</p>
      <p className="text-base text-white shadow-text pt-3">
        Conversion tracking is automated but requires the right mapping at setup. Plai’s pixel setup process
        connects each ad campaign to the correct website events, form fills, calls, or purchases, so every lead or
        sale is counted. Geek @ Your Spot ensures that these mappings are correct across all platforms, eliminating
        the blind spots that come from missed or misconfigured tracking. This is vital for small businesses, where
        every lead counts and budget decisions depend on accurate performance data.</p>
      <p className="text-base text-white shadow-text pt-3">
        Permissions and access controls are set at the workspace level. Geek @ Your Spot configures user roles so
        that owners, managers, and staff see only what they need, and sensitive data is protected. This is
        especially important for multi-location businesses or those with outside partners, as it keeps financial and
        performance data secure while allowing for collaboration where needed.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, all these data mapping decisions are made with the goal of simplicity and transparency. Plai’s
        dashboards are configured so that the metrics that matter, <GlossaryLink slug="cost-per-lead">cost per lead</GlossaryLink>,
        total spend, local reach, are front and center, and every report can be traced back to its source data. Geek
        @ Your Spot works with each client to define what success looks like, and sets up Plai so that every number
        on the dashboard is clear, trusted, and actionable. This upfront work is what turns Plai from a generic tool
        into a tailored command center for Budget Ad Copy &amp; Message Validation, ready to deliver results from
        day one.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="making-the-right-data-structure-and-mapping-choices-for-plai-upfront" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Making the right data structure and mapping choices for Plai upfront
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
              <h2 id="making-the-right-data-structure-and-mapping-choices-for-plai-upfront-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Making the right data structure and mapping choices for Plai upfront
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
