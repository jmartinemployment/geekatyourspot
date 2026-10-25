export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Wrench is built as a modular, cloud-based platform designed to centralize and unify marketing operations.
        Its architecture focuses on breaking down data silos, connecting disparate systems, and making real-time
        insights available across your sales and marketing stack. For small businesses in South Florida, this means
        Wrench can plug into the tools you already use and bring all your customer and campaign data into one place,
        no more scattered spreadsheets or isolated CRMs.</p>
      <p className="text-base text-white shadow-text pt-3">
        At its core, Wrench supports native integrations with platforms like HubSpot, Salesforce, Meta
        (Facebook/Instagram), and Instagram, as well as custom integrations on request. These connections are not
        just surface-level, they allow Wrench to pull in detailed contact records, campaign metrics, and behavioral
        data, building a unified data foundation. The system can also connect to new tools and services as your
        business evolves, so you are not locked into a fixed stack or forced to migrate systems when you grow.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wrench’s architecture is designed for real-time data flow. When new leads come in, when a contact’s behavior
        changes, or when a campaign result updates, Wrench ingests that information immediately and updates its
        models and recommendations. This live data handling is critical for measured lead generation, where timing
        and relevance are everything. Campaigns can be paused, budgets shifted, or creative refreshed based on what
        is happening right now, not on a weekly reporting cycle.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s data handling goes beyond basic integration. Wrench standardizes and cleans imported records,
        resolving formatting inconsistencies and validating fields so that every contact is ready for ad network
        matching and segmentation. This is especially important for small business teams who often inherit messy
        data from years of manual entry or legacy systems. Clean data means better targeting, higher match rates,
        and fewer wasted impressions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wrench organizes all imported data into actionable segments. Its AI models scan for behavioral patterns,
        purchase history, and engagement signals, then group contacts by conversion probability, lifecycle stage,
        and predicted value. These segments are not static, they update as new data arrives, so your campaigns
        always target the right audience with the most current information. For example, if a past buyer starts
        showing signals of re-entering the market, Wrench can flag them for a retargeting campaign at the optimal
        moment.</p>
      <p className="text-base text-white shadow-text pt-3">
        The creative engine within Wrench is built to generate, adapt, and push creative assets across multiple
        channels and formats. It can ingest and produce content in multiple languages, and it supports both standard
        and custom creative workflows. This flexibility is critical for businesses running campaigns across diverse
        platforms or targeting multilingual audiences in South Florida.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wrench’s system also allows for workflow automation without IT bottlenecks. You can build and manage custom
        workflows, such as automatic lead scoring, exclusion rules, or campaign triggers, directly in the platform.
        Information can be pushed, pulled, or updated across any connected system, so your CRM, ad accounts, and
        analytics tools always reflect the latest data. This means no more manual exports, list uploads, or waiting
        for an engineer to build a connector.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and transparency are built into the platform. Wrench gives you full visibility into how its AI
        models work, and you can refine processes as needed. This is not a black box, you can see what drives each
        recommendation, which helps build trust in the system’s outputs and makes it easier to align the platform
        with your business goals.</p>
      <p className="text-base text-white shadow-text pt-3">
        As your business grows or changes direction, Wrench can integrate with new tools and services, ensuring that
        your marketing operations remain future-proof. The architecture is designed to adapt, not to force you into
        a one-way path. Whether you add a new CRM, expand to a new channel, or need to connect with a different
        analytics suite, Wrench’s modularity supports these moves without disruption.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Wrench’s architecture is not just about connecting data, it is about centralizing, cleaning, and
        making that data actionable in real time. For small businesses trying to move past spreadsheet chaos and
        fragmented workflows, Wrench provides a single, reliable hub for all marketing and sales operations. This
        unified approach is what makes measured lead generation scalable, efficient, and sustainable for teams with
        limited resources.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="wrenchs-platform-architecture-integrations-and-data-handling-for-small-business-marketing" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Wrench’s platform architecture, integrations, and data handling for small business marketing
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="wrenchs-platform-architecture-integrations-and-data-handling-for-small-business-marketing-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Wrench’s platform architecture, integrations, and data handling for small business marketing
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
