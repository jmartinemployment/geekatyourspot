export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Going live with Castmagic in a small business is not a generic “flip the switch” process. It is a
        sequence of practical steps, each with its own set of decisions, and the right approach can cut weeks
        off your timeline. Castmagic is built for fast onboarding, but the real speed comes from how well you
        prepare your content sources and how clearly you define what you want from your recordings. This
        section explains what to expect and what shortens the path from first login to fully automated content
        workflows.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is connecting Castmagic to the places your content already lives. Most small teams have
        a mix: Zoom meeting folders, Google Drive, YouTube channels, podcast feeds, and maybe a few local
        files. Castmagic’s integrations with Zoom, Google Drive, YouTube, Vimeo, RSS feeds, and tools like
        Zapier mean you do not have to move files around or build custom upload scripts. You select your
        sources, authenticate access, and Castmagic can start ingesting files in parallel. For a team with a
        backlog of webinars, podcasts, and client calls, this bulk import is the difference between a
        six-month manual catch-up and a one-week automated sweep. The platform’s background job processing
        means you can queue your entire catalog and let it run, no need to babysit uploads or track progress
        file by file.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once your content sources are connected, Castmagic’s first job is to transcribe and structure your
        recordings. The platform supports over 60 languages with automatic detection and applies speaker
        labels and word-level timestamps. This is not just about accuracy, the structure is what lets you pull
        out client quotes for social proof, break a two-hour training into actionable snippets, or build
        multi-part email campaigns from a single conversation. For a local business, this means every sales
        call, staff meeting, or customer interview becomes a searchable, reusable asset.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next phase is template setup. Castmagic comes with pre-built templates for blog posts, show notes,
        social media captions, email newsletters, and more. You can use these as-is or build your own with
        custom prompts. The custom prompt system lets you set tone, structure, and brand rules, so your weekly
        email campaign always sounds like your business, not a generic robot. This is where a lot of the time
        savings come from. Instead of rewriting every draft, you define the rules once, and Castmagic applies
        them every time it processes a new file. The more you invest in clear, reusable prompts upfront, the
        less manual editing you do later.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows are built into the platform. You can assign roles, route drafts to specific team
        members for review, and leave feedback directly in the content blocks. This is critical for small
        teams that want to keep a human in the loop without bottlenecking the process. Instead of passing
        files over email or tracking edits in a spreadsheet, everyone works in one place. This also means you
        can roll out Castmagic in phases, start with one content type (say, social posts), get the workflow
        right, then expand to blog articles or newsletters. You do not have to automate everything on day one;
        phased rollout is both safer and faster.</p>
      <p className="text-md text-white shadow-text pt-3">
        What shortens go-live most is clarity on your existing content structure and how you want to use your
        recordings. If you know which files are high-value (client interviews, training webinars, sales
        calls), you can prioritize those for ingestion and template setup. If you have a clear brand voice and
        content standards, you can encode those into your prompts from the start. Castmagic is not a “set it
        and forget it” app, but it is a platform that rewards clear upfront decisions with faster, cleaner
        automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, going live with Castmagic is a staged process: connect your content sources, ingest and
        transcribe your backlog, set up and refine your templates, and build approval workflows that fit your
        team. The more you leverage the platform’s pre-built connectors and templated setup, the less you
        spend on manual cleanup and rework. For a small business, this means you can start seeing value in
        days, not months, and keep scaling as your content needs grow.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-go-live-with-castmagic-in-a-real-world-small-business-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Go Live with Castmagic in a Real-World Small Business Environment
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-go-live-with-castmagic-in-a-real-world-small-business-environment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Go Live with Castmagic in a Real-World Small Business Environment
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
