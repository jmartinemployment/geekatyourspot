export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Castmagic automates the entire path from a raw recording to finished content, handling each step so
        that small teams never need to start from a blank page. The process starts as soon as you upload an
        audio or video file or connect an RSS feed. Castmagic ingests the file in the background, no need to
        wait around or manage uploads one by one. This bulk import capability covers everything from Zoom
        meetings to YouTube links and local files, so even a backlog of hundreds of recordings can move
        through the system with minimal oversight.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once a file is in, Castmagic’s transcription engine gets to work. It supports over 60 languages and
        automatically detects which one is spoken, so there’s no manual setup per file. Each transcript is
        produced with speaker labels and word-level timestamps. This precision means you can pull out exact
        quotes, attribute them to the right person, and reference the moment in the conversation, all without
        re-listening to hours of audio. For a typical hour-long recording, the full transcript is ready in
        three to five minutes, and the platform can process multiple files in parallel.</p>
      <p className="text-base text-white shadow-text pt-3">
        From there, Castmagic uses its AI models to generate content assets tailored to your use case. The
        system doesn’t just give you a transcript. It creates show notes, blog articles, social media posts,
        email newsletters, SEO-optimized descriptions, and video scripts, each one formatted for its channel.
        Teams can use preset templates or write custom prompts to define the tone, structure, and style. For
        example, you can set rules for short sentences, require a specific sign-off, or match a brand voice.
        Save these as recurring prompts, and every new piece of content comes out consistent and on-brand.</p>
      <p className="text-base text-white shadow-text pt-3">
        The Magic Chat feature is Castmagic’s interactive layer. For every recording, you get a dedicated chat
        interface that lets you ask questions about the content, request summaries, or generate new assets on
        demand. This means you can draft a LinkedIn post, a tweet thread, or a follow-up email by simply
        prompting the chat with what you need. Because Magic Chat works on the context of your specific file,
        the output is always grounded in your actual words, not generic AI filler.</p>
      <p className="text-base text-white shadow-text pt-3">
        Castmagic also supports extracting actionable insights from business calls, webinars, and meetings. It
        can generate meeting minutes with action items, transcribe customer discovery calls to surface pain
        points, and turn webinars into lead magnets or training materials. For businesses sitting on years of
        recordings, the MCP connector lets you hook Castmagic up to Claude, so you can search, query, and
        build from your entire historical media library in one go.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every output is exportable in multiple formats, plain text, SRT, VTT, PDF, Word, and CSV, so you can
        use the same asset for a blog, a video caption, or a newsletter. The workflow is built to keep you
        moving: upload, transcribe, generate, and publish. There’s no manual copy-paste between systems, and
        no need to rewrite content to fit different channels. For a small team in South Florida, this means
        that an hour-long client call on Friday afternoon can become next week’s blog post, three social
        updates, and a customer email, all before Monday morning.</p>
      <p className="text-base text-white shadow-text pt-3">
        Behind the scenes, Castmagic’s workflow is designed for speed and batch efficiency. Imports run as
        background jobs, and the platform handles entire catalogs of content without user intervention. The
        system is built for reliability: if you need to process 200 podcast episodes or repurpose a year’s
        worth of video calls, Castmagic churns through the queue without stalling your other work. The result
        is a content pipeline that never gets blocked by manual bottlenecks or lost files.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-castmagic-turns-recordings-into-ready-to-use-content-assets" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Castmagic Turns Recordings into Ready-to-Use Content Assets
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-castmagic-turns-recordings-into-ready-to-use-content-assets-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Castmagic Turns Recordings into Ready-to-Use Content Assets
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
