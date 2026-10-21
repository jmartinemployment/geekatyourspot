export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Castmagic is designed as a cloud-based platform that connects to the tools and content sources small
        businesses already use. It accepts direct file uploads and integrates with a wide range of external
        platforms, including Zoom, YouTube, Vimeo, Google Drive, RSS feeds, and more. This means you can pull
        in recordings from wherever they live, cloud storage, podcast feeds, or social video links, without
        extra conversion steps or manual downloads.</p>
      <p className="text-base text-white shadow-text pt-3">
        The system’s architecture is built for parallel processing and high-volume throughput. When you
        connect an RSS feed or upload a batch of files, Castmagic spins up background jobs for each asset. The
        platform’s import engine uses queue management to prevent bottlenecks, so even a full podcast
        back-catalog or a year’s worth of team meetings can move through transcription and intelligent content
        generation without stalling. This is especially useful for small teams with large archives: you can
        set the process running and come back to find everything transcribed, tagged, and ready to use.</p>
      <p className="text-base text-white shadow-text pt-3">
        Transcription is handled by Castmagic’s AI models, which support over 60 languages with automatic
        detection and speaker labeling. The system produces word-level timestamps and clean, searchable text,
        with filler words and repeated phrases automatically removed. For every file, the transcript is stored
        in the cloud, linked to the original recording, and available for downstream content generation.
        Castmagic keeps these assets organized and accessible, so you have a searchable database of every
        conversation, webinar, or meeting you’ve ever recorded.</p>
      <p className="text-base text-white shadow-text pt-3">
        On top of the core transcription layer, Castmagic’s content generation engine uses both preset
        templates and user-defined prompts to create channel-specific assets. The Magic Chat feature is built
        on contextual AI, so it understands the structure and intent of each recording. This lets you generate
        new content, answer questions, or pull out quotes on demand, all within the same workspace.</p>
      <p className="text-base text-white shadow-text pt-3">
        Collaboration and approval workflows are built into the platform. Castmagic supports shared workspaces
        with multi-user access and role-based permissions. Team members can review, edit, and approve content
        directly in the platform, leave comments, and tag others for feedback. This structure keeps everyone
        on the same page and speeds up the review loop, especially for teams that need to maintain brand
        consistency or pass content through compliance checks before publishing.</p>
      <p className="text-base text-white shadow-text pt-3">
        For larger or multi-brand organizations, Castmagic offers workspace structures that separate clients,
        brands, or departments. Each workspace can have its own permissions and content organization, so you
        can manage multiple projects or clients without cross-contamination. The MCP connector enables
        integration with Claude, giving you the ability to search and build from your entire historical media
        library in one place. This is particularly valuable for teams that need to extract insights from years
        of archived content or build new assets from a deep well of recorded knowledge.</p>
      <p className="text-base text-white shadow-text pt-3">
        Export options are flexible. Every transcript and generated asset can be downloaded in multiple
        formats: plain text, SRT, VTT, PDF, Word, or CSV. This makes it easy to move content into other
        platforms, publish across different channels, or keep structured archives for future use. The system
        is built to support both high-frequency publishing and long-term knowledge management.</p>
      <p className="text-base text-white shadow-text pt-3">
        Castmagic’s architecture is designed for reliability and scale. The platform handles background
        processing, batch imports, and real-time content generation without manual babysitting. For a small
        business, this means you can move from a backlog of unused recordings to a living, searchable content
        library, with every asset ready to deploy across your marketing channels, sales outreach, or internal
        documentation. Nothing gets lost, nothing sits idle, and every conversation becomes a resource you can
        use.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="castmagics-platform-architecture-and-integrations-what-connects-whats-stored-and-how-it-scales" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Castmagic’s Platform Architecture and Integrations: What Connects, What’s Stored, and How It Scales
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
              <h2 id="castmagics-platform-architecture-and-integrations-what-connects-whats-stored-and-how-it-scales-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Castmagic’s Platform Architecture and Integrations: What Connects, What’s Stored, and How It Scales
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
