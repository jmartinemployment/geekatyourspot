export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The biggest gains from Castmagic come from decisions you make before you upload your first file.
        Castmagic is not just a transcription tool, it is a pipeline that turns raw recordings into dozens of
        finished content assets, and the quality of those assets depends on how you structure your data and
        map your content types. Here is what matters most when setting up Castmagic for your team.</p>
      <p className="text-base text-white shadow-text pt-3">
        First, think about your content sources and how they are organized. Castmagic can ingest from multiple
        platforms at once: Zoom, Google Drive, YouTube, Vimeo, RSS feeds, and more. If your recordings are
        scattered across folders and accounts, take the time to centralize or at least tag them before import.
        The platform’s bulk-import and background processing features mean you can bring in hundreds of files
        at once, but if your data is a mess, you will spend more time sorting outputs than benefiting from
        automation. For a business with years of backlogged webinars or podcasts, grouping files by project,
        client, or topic upfront saves hours later.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, decide how you want Castmagic to map speakers and segments. The platform applies automatic
        speaker labeling and word-level timestamps to every recording. This is not just for accuracy, it is
        what lets you pull out guest quotes for social media, assign action items from meeting minutes, or
        draft personalized emails based on who said what in a call. If your team regularly records
        multi-speaker events (panel discussions, interviews, sales calls), make sure your files have clear
        audio and, where possible, a consistent speaker order. This helps Castmagic’s models assign labels
        correctly and keeps your outputs clean and attributable.</p>
      <p className="text-base text-white shadow-text pt-3">
        Custom vocabulary is another up-front decision that pays off. Castmagic lets you build a vocabulary
        list for names, products, and jargon unique to your business. If you work in a specialized field or
        serve a local market with unique terms, load these into Castmagic before your first run. This ensures
        transcripts are accurate and that generated content reflects your brand and expertise, not generic
        guesses. It also reduces the time you spend fixing errors in published posts or email campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        When mapping content types, decide which outputs matter most for your business. Castmagic can generate
        blog articles, social media posts, newsletters, video scripts, show notes, and more from a single
        file. You do not need every format for every recording. For each source type (say, a customer
        interview versus a training webinar), map which outputs you want, maybe blog posts and LinkedIn
        updates from interviews, internal summaries and action lists from meetings. Set these as defaults in
        Castmagic’s template system. This keeps your workflow focused and avoids cluttering your workspace
        with unused drafts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integrations matter for data flow. If you use Google Drive, YouTube, or RSS feeds to store or publish
        content, connect them during setup. This lets Castmagic pull in new files automatically and push
        finished assets where you need them, no manual downloads or uploads. For teams that use Zapier or
        other workflow tools, set up triggers so that new recordings are processed as they arrive, keeping
        your pipeline running without extra clicks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, plan your approval and feedback structure. Castmagic supports multi-user workspaces with
        roles and commenting. Decide who reviews which content types, who can edit, and who signs off for
        publishing. Map these roles to your team in the platform. This prevents bottlenecks and ensures
        nothing goes live without the right eyes on it. For a small team, this could be as simple as one
        person reviewing all outputs, or as structured as assigning different team members to blog posts,
        social media, and newsletters.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, the up-front decisions that matter are: centralizing and tagging your content sources,
        planning speaker and segment mapping, loading custom vocabulary, mapping content types to business
        needs, integrating storage and publishing platforms, and setting clear approval roles. Castmagic’s
        automation is only as good as the structure you give it. Investing in these steps early is what turns
        a pile of recordings into a steady stream of on-brand, ready-to-publish content for your business.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-structure-and-mapping-decisions-that-shape-a-castmagic-implementation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Structure and Mapping Decisions That Shape a Castmagic Implementation
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
              <h2 id="the-data-structure-and-mapping-decisions-that-shape-a-castmagic-implementation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Structure and Mapping Decisions That Shape a Castmagic Implementation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
