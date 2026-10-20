import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Picture the daily grind for a small business in Miami or Broward. Your team juggles Instagram DMs,
        WhatsApp pings, Facebook Messenger requests and the occasional website chat pop-up, each in its own
        app, each with its own login. A hot lead asks for a quote on Friday but replies Monday in a different
        channel, so the thread breaks. Another prospect comments on your latest post but never gets a reply
        because you missed the notification. By the end of the week, you have half a dozen conversations
        scattered across inboxes, none of them connected, and no simple way to turn those signals into actual
        sales.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the reality for most small teams trying to keep up with customers who reach out whenever and
        wherever it suits them. Every missed message is a lost opportunity. If your staff can’t keep up, or if
        your process relies on copying and pasting details between apps and spreadsheets, you’re not just
        wasting time, you’re losing money. The bigger your following, the faster this gets out of hand. Even
        with the best intentions, it’s impossible to stay on top of every platform, every hour, every day.</p>
      <p className="text-md text-white shadow-text pt-3">
        A&nbsp;<Link id="tools-marketing-cross-platform-chatbot-manychat-overview-cross-platform-chatbot" href="/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide" className="text-[#C83803] hover:underline">Cross-Platform Chatbot</Link>&nbsp;changes that. Instead of treating each channel as a separate inbox, it keeps
        every conversation, no matter where it started, connected to the right customer and the next step in
        your pipeline. With tools like Manychat, you can automate replies to comments and DMs, segment and tag
        leads, and sync all those details into your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or
        spreadsheet automatically. The result: faster responses, organized prospects, and more deals closed
        without the chaos or burnout.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC helps small businesses in West Palm Beach, Broward and Miami-Dade counties set up
        these intelligent lead capture pipelines. We use proven chatbots for marketing,
        AI-driven&nbsp;<GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink>&nbsp;and voice
        assistants, so your team isn’t buried under notifications or stuck chasing cold leads. You get a
        system that works around the clock, captures and qualifies every inquiry, and keeps your sales flow
        moving, no matter where the next message comes in.</p>
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
