import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A local plumbing service in Miami-Dade answers calls all day, but most web chat requests land in a
        forgotten inbox. A Broward law firm juggles WhatsApp messages and Facebook DMs, but never knows if the
        same person is reaching out twice or if a hot lead slips through when a staff member is busy with
        paperwork. In West Palm Beach, a home services team fields texts, phone calls, and Instagram messages,
        only to realize later that three agents gave three different answers to the same customer question.
        These are not rare stories. They are the daily cost of treating every channel as its own silo.</p>
      <p className="text-md text-white shadow-text pt-3">
        Fragmented communication is where small businesses lose the most ground. Every time a call goes to
        voicemail, a web chat sits unanswered, or a text thread does not sync with
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, you hand a live lead to the next competitor.
        The real problem is not just slow response. It is losing the thread, forgetting who reached out, what
        they asked, and what was promised, because your team cannot see the full picture. When every channel
        runs as a separate inbox, context gets lost, responses are delayed, and the result is missed revenue.</p>
      <p className="text-md text-white shadow-text pt-3">
        A&nbsp;<Link id="tools-marketing-cross-platform-chatbot-dapta-overview-cross-platform-chatbot" href="/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide" className="text-[#C83803] hover:underline">Cross-Platform Chatbot</Link>&nbsp;fixes this by connecting the dots across all your inbound channels. The
        system keeps customer identity, conversation history, and next action together, whether an inquiry
        starts on your website, flips to WhatsApp, or ends on a phone call. No lead falls through the cracks.
        Everyone on your team can pick up the conversation right where it left off, using the same information
        and giving the same answer. For small businesses in Miami-Dade, Broward, and West Palm Beach, this
        means faster replies, less manual checking, and a cleaner handoff from first touch to closed deal.</p>
      <p className="text-md text-white shadow-text pt-3">
        If your business is losing leads to missed messages, slow replies, or scattered records, you are not
        alone. This page lays out how a smart Lead Capture Pipeline with cross-platform chatbot technology
        solves the problem, without adding headcount or blowing up your current systems. The result: every
        inquiry gets answered, every rep sees the whole story, and your sales pipeline finally runs like one
        team, not six disconnected inboxes.</p>
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
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
