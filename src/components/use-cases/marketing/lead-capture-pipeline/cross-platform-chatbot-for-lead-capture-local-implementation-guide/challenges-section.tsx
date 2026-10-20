import Link from "next/link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every business owner in Miami-Dade, Broward, and West Palm Beach has seen it: the same prospect
        reaches out through Facebook, WhatsApp, and your website, but their details scatter across inboxes,
        and the thread never comes together. The breakdown starts at the very first point of contact. When the
        phone rings and staff are busy or out, the call drops to voicemail. If a customer texts after hours,
        that message sits unread until someone checks the phone. Website chat pings during lunch, but there’s
        no one there to answer. Each of these is a hot lead that goes cold before you even know it was there.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real issue is not just missing a few messages. It’s the way your communication channels operate in
        silos.
        With&nbsp;<Link id={`use-cases-marketing-cross-platform-chatbot-challenges-my-ai-front-desk${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk" className="text-[#C83803] hover:underline">My
        AI Front Desk</Link>, the core failure is letting inbound calls, texts, and web inquiries go
        completely unanswered during off-hours or high-traffic periods. Staff cannot be everywhere at once, so
        you end up with a growing pile of missed calls, unread DMs, and forgotten contact forms. Even when
        someone does get back to the prospect, it often takes hours or days, long past the point where a
        competitor has already replied. That lag is the number one reason small businesses lose sales to
        bigger teams with more coverage.</p>
      <p className="text-md text-white shadow-text pt-3">
        When a business does respond, another trap opens up: every channel is its own record. Staff copy notes
        from Instagram into a spreadsheet, then paste a name from WhatsApp into an email, hoping not to
        misspell it. This manual patchwork creates a mess of duplicated or missed details, and no one has a
        full view of the customer
        journey.&nbsp;<Link id={`use-cases-marketing-cross-platform-chatbot-challenges-botpenguin${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin" className="text-[#C83803] hover:underline">BotPenguin</Link>&nbsp;was
        built to stop this, but the breakdown it solves is painfully common, lead details are scattered across
        separate apps, each managed by a different team member, and there’s no unified lead pipeline. The
        result: no one knows which prospect is hot, which has already been qualified, or even if two messages
        are from the same person.</p>
      <p className="text-md text-white shadow-text pt-3">
        <Link id={`use-cases-marketing-cross-platform-chatbot-challenges-manychat${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat" className="text-[#C83803] hover:underline">Manychat</Link>&nbsp;addresses
        a more subtle but equally costly breakdown: businesses get buying signals in comments or DMs but do
        not respond consistently, and those interactions never make it to the sales pipeline. A customer
        comments on a post or sends a DM, and staff either miss it entirely or handle it ad hoc, there’s no
        system to trigger a follow-up or capture new details. So even if you have a popular Instagram or
        Facebook presence, each engagement is a roll of the dice. Some get a response, some don’t, and the
        business never knows what it missed.</p>
      <p className="text-md text-white shadow-text pt-3">
        <Link id={`use-cases-marketing-cross-platform-chatbot-challenges-dapta${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta" className="text-[#C83803] hover:underline">Dapta</Link>&nbsp;surfaces
        another blind spot: even when prospects do get through, they are forced to repeat their details across
        chat, phone, and follow-up. The business might answer on WhatsApp, but when the same person calls an
        hour later, the conversation starts from scratch. There is no continuity, and the customer feels like
        just another ticket in a queue. Worse, basic qualification questions, like location, urgency, or
        service needed, are skipped or asked inconsistently, so your team wastes time chasing low-fit leads or
        misses out on high-value ones. Appointment booking is another point of friction: it requires endless
        back-and-forth, and information often never syncs to your calendar
        or&nbsp;CRM.</p>
      <p className="text-md text-white shadow-text pt-3">
        <Link id={`use-cases-marketing-cross-platform-chatbot-challenges-tidio${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio" className="text-[#C83803] hover:underline">Tidio</Link>&nbsp;highlights
        a final failure point that blocks smaller teams from scaling: businesses get bogged down answering the
        same simple questions all day, and advanced solutions are too complex to set up. Static, script-based
        chatbots frustrate customers with canned responses that don’t fit the question. When a live chat alert
        is missed, there’s no way to recover the lead, and the marketing list never grows. And if a customer
        wants to reach a real person, the handoff is clunky or unavailable, so high-value sales conversations
        slip away.</p>
      <p className="text-md text-white shadow-text pt-3">
        Put simply, the current approach is a patchwork of missed connections, manual entry, and inconsistent
        follow-up. Each channel is a potential leak, and every handoff is a chance for details to get lost or
        delayed. The problem is not a lack of effort or intent, it’s a lack of systems that meet your customer
        where they are and keep their journey connected from first message to closed sale. Until that changes,
        leads will keep slipping through the cracks, and the team will keep chasing yesterday’s messages
        instead of closing today’s deals.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="where-lead-capture-breaks-down-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Where Lead Capture Breaks Down for Small Teams
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="where-lead-capture-breaks-down-for-small-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Where Lead Capture Breaks Down for Small Teams
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
