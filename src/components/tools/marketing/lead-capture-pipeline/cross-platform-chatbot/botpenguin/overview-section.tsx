import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Picture a typical Monday morning in a small business office in Miami-Dade. The phone rings with a new
        inquiry while an Instagram DM sits unread, a WhatsApp message from last night gets buried under this
        morning’s flood, and a website chat from a prospective customer is lost because no one was logged in
        after hours. Each chat lands in its own corner, no shared view, no single pipeline, and no one person
        with the full story. Every platform becomes its own silo. As the day unfolds, your team spends hours
        toggling between apps, copy-pasting names and details, and trying to keep track of half-finished
        conversations that could have been promising leads. In the gaps, prospects drift away, follow-ups
        happen too late, and the real cost shows up as missed sales and wasted staff time.</p>
      <p className="text-base text-white shadow-text pt-3">
        This isn’t just a workflow headache, it’s a revenue problem. Without a&nbsp;<Link id={`tools-marketing-cross-platform-chatbot-botpenguin-overview-cross-platform-chatbot${idSuffix}`} href="/use-cases/marketing/lead-capture-pipeline/ai-chatbot" className="text-[#C83803] hover:underline">Cross-Platform Chatbot</Link>&nbsp;handling
        every channel as one, small businesses in South Florida lose context with every switch. Prospective
        buyers don’t care which app they use, they want answers right now, and they expect your team to
        remember what they said on Facebook, Instagram, or your site. When each channel acts as a separate
        inbox, your staff repeats questions, misses cues, and wastes hours on manual updates instead of moving
        deals forward. Even the best team can’t keep up with the volume and speed customers now expect,
        especially after hours or on weekends.</p>
      <p className="text-base text-white shadow-text pt-3">
        A Cross-Platform Chatbot stitches these broken threads together. It unifies every inbound message into
        one lead pipeline, keeps every conversation connected, and holds the full customer story across
        WhatsApp, Instagram, Facebook Messenger, your website, SMS, even phone and voice assistants. Instead
        of chasing scattered chats, your team finds every inquiry, with context and follow-up steps ready, in
        a single place. That means less time lost, fewer errors, and more leads turning into sales, all
        without hiring extra staff or losing sleep over missed opportunities. For small businesses in West
        Palm Beach, Broward, and Miami-Dade, this is the difference between keeping up and falling behind.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC specializes in building these unified, always-on systems for local businesses. Their
        approach means your chatbot runs across channels, scores leads, and even brings in voice assistants,
        so every conversation counts, and your pipeline never stops moving. If you’re ready to stop losing
        leads to disconnected inboxes, this is how you start.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
