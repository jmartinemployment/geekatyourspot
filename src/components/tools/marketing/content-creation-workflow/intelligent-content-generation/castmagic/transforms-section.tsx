import Link from "next/link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Castmagic is built to end the cycle of wasted recordings and manual content creation. For a small
        business, the difference shows up in the first week. The backlog of customer calls, webinars, and
        meetings that used to sit untouched now becomes a steady stream of publish-ready content, without
        anyone on your team having to write from scratch or chase down a freelancer. Instead of spending hours
        transcribing, summarizing, and drafting, you upload your file, and Castmagic handles the rest.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first big change is speed. Castmagic automatically transcribes audio and video files in over 60
        languages, with speaker labels and timestamps, in just minutes. That means a one-hour webinar or
        consultation is ready to use almost as soon as it is over. There is no more waiting for a manual
        transcription or paying extra for a rush job. The transcript is not just a text dump, it is organized,
        searchable, and clean, with filler words removed and proper formatting. Your team can pull out key
        quotes for social proof, identify action items, or find the exact moment a customer raised an
        objection, all without listening through the whole recording again.</p>
      <p className="text-md text-white shadow-text pt-3">
        But Castmagic does not stop at transcription. The real value is in what happens next. The platform
        uses AI to turn every recording into a range of content assets, ready for immediate use across your
        marketing channels. From a single upload, you can get blog posts, social media updates, email
        newsletters, show notes, and even video scripts. Each asset is tailored to the platform, LinkedIn
        articles, Instagram captions with hashtags, tweet threads, and more. This is not a generic rewrite;
        Castmagic lets you set prompts and templates so every piece matches your brand voice and campaign
        goals. You can even save recurring prompts to keep your messaging consistent week after week.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams juggling multiple projects, Castmagic&#39;s workflow tools make a real dent in the chaos.
        The platform supports shared workspaces and multi-user access, so everyone, writers, editors,
        marketing managers, can see what is in progress, leave feedback, and move content through an approval
        pipeline. No more endless email threads or lost drafts. You can assign tasks, tag team members, and
        keep every project organized from recording to publication. This keeps production moving and ensures
        nothing falls through the cracks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk processing is built in. If you have a back catalog of recordings, Castmagic can import them in
        one go, whether from a podcast RSS feed, YouTube, Zoom, or your local drive. Each file runs through
        the same pipeline, with speaker labels, timestamps, and intelligent content generation, so even a
        year’s worth of old webinars can be turned into new blog posts or campaign assets in a single
        afternoon. Imports run as background jobs, so you do not have to babysit the process.</p>
      <p className="text-md text-white shadow-text pt-3">
        Castmagic integrates with the tools you already use, Google Drive, Zoom, RSS feeds, YouTube, Vimeo,
        Reels,&nbsp;<Link id={`tools-marketing-intelligent-content-generation-castmagic-transforms-zapier${idSuffix}`} href="/tools/marketing/zapier" className="text-[#C83803] hover:underline">Zapier</Link>, and more. This means you do not have to build a new workflow from scratch. Drop a file
        or a link, and the content is ready for review. You can export transcripts as TXT, SRT, VTT, CSV, or
        formatted Word documents, making it easy to use them for captions, accessibility, or further editing.</p>
      <p className="text-md text-white shadow-text pt-3">
        The result is measurable: hours returned to your week, fewer errors, and a content pipeline that does
        not depend on anyone staring at a blank page. Teams no longer have to choose between serving clients
        and keeping up with marketing. Instead, every conversation, training, or consultation becomes an asset
        that works across your website, social channels, and email campaigns. What used to take a full-time
        writer or an outside agency now happens in minutes, with your team in full control of the tone and
        timing.</p>
      <p className="text-md text-white shadow-text pt-3">
        For that small business owner in Miami-Dade, it means the customer call recorded on Monday is already
        a LinkedIn post, a blog draft, and an email update by Friday, without hiring another person or paying
        for outside help. The training webinar that used to sit idle now fuels the next month’s newsletter and
        social push. The team spends less time on repetitive writing and more time on what actually grows the
        business.</p>
      <blockquote cite="https://www.castmagic.io/blog/automate-workflow-software" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Every repetitive process your team handles manually costs time, creates errors, and prevents growth.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        Castmagic also addresses the need for security, accuracy, and brand control. Transcriptions run at 95%
        accuracy or higher with clear audio, and speaker identification keeps every quote attributed
        correctly. You can build a custom vocabulary to ensure product names and industry terms are always
        right. For teams that need to maintain compliance or accessibility standards, having transcripts and
        content assets generated automatically means nothing gets missed, and every piece is ready for review
        before it goes live.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s approval workflows keep you in control. Content blocks can be edited, commented on, and
        approved by the right people before anything is published. This is especially useful for teams with
        multiple stakeholders or for businesses that want to keep messaging tight across different channels.
        You set the rules; Castmagic makes sure the process runs smoothly.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses that have struggled to get value out of their own recordings, Castmagic removes
        the friction at every step. No more lost files, missed follow-ups, or wasted creative effort. Instead,
        every asset you capture, audio, video, or text, becomes a building block for your next campaign, lead
        magnet, or customer update. It is not just about saving time; it is about finally turning your
        business knowledge and customer insights into consistent, high-impact content that drives results.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-castmagic-removes-from-your-week-with-intelligent-content-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Castmagic Removes from Your Week with Intelligent Content Generation
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-castmagic-removes-from-your-week-with-intelligent-content-generation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Castmagic Removes from Your Week with Intelligent Content Generation
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
