import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        It starts small. A customer asks for your pricing in a Facebook DM while you’re serving someone at the
        counter. That same morning, another pings your WhatsApp with a question about shipping, and a third
        leaves their number in your website chat before lunch. By the end of the day, you have five
        conversations running in five places. None of them connect. You try to remember who said what, which
        team member answered, and where that new lead left off. Someone calls back, but now you’re searching
        through email threads and Instagram notifications for details you barely remember. One prospect gets a
        fast reply, another waits until tomorrow, and a third never hears back at all.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is how most small businesses in South Florida lose leads and time, one disconnected message at a
        time. Every channel is its own silo: WhatsApp, SMS, Instagram DMs, Facebook Messenger, your website
        chat box, even the phone. Each new inquiry floats in its own inbox, with no shared record, no context,
        and no way to see the full story. A promising lead might ask a question in chat and then call an hour
        later, forced to repeat their details because your team has no way to know it’s the same person. When
        volume picks up or you step away, replies get delayed, details get missed, and the hottest prospects
        move on to a competitor who answered first.</p>
      <p className="text-base text-white shadow-text pt-3">
        A Cross-Platform Chatbot stops that leak. Instead of scattered threads, you get one AI assistant that
        answers instantly across every channel your customers use, website, SMS, WhatsApp, Facebook Messenger,
        Instagram, and phone. Every message, call, and chat lands on a single timeline. The bot keeps track of
        who’s talking, what they want, and what step comes next. It captures the lead, qualifies their intent,
        books appointments, and sends every detail straight to
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;and calendar. No more hunting for context.
        No more missed callbacks. Every inquiry gets a real answer, right away, and your team walks in every
        morning to a clean pipeline, nothing lost, nothing left to chance.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you run a business in Miami-Dade, Broward, or Palm Beach and you’re tired of dropping leads because
        your team can’t keep up with disconnected chats and calls, this page gives you a real solution. Here’s
        how a properly implemented Cross-Platform Chatbot closes the gap, what it takes to get it right, and
        what you should expect when you put it to work in your own operation.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses now field more messages than ever, but still manage them the old way, one app,
        one inbox, one reply at a time. You have social DMs, web chat, phone calls, and text messages all
        coming in from people who expect an answer now, not later. The reality is that every time you ask a
        prospect to repeat their details or wait for a callback, you risk losing the deal. Your team spends
        hours copying notes from one system to another, tracking down contact info, and trying to remember if
        this is the same customer who called yesterday. Manual effort grows with every new channel you add,
        but the chance of a dropped lead grows even faster.</p>
      <p className="text-base text-white shadow-text pt-3">
        That is where the real cost sits: not just in wasted time, but in lost revenue and damaged trust. When
        your business cannot answer every inquiry quickly and consistently, no matter how the customer reaches
        out, you pay for it in missed sales, frustrated prospects, and a reputation for slow follow-up. Even
        the best staff cannot keep up as message volumes rise, especially after hours or during peak periods.
        For businesses competing in West Palm Beach, Broward, and Miami-Dade, the stakes are higher. Customers
        expect instant, personal engagement across every channel, in English or Spanish, and will not wait for
        you to catch up.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC helps businesses in this exact situation. Our approach starts with your business
        objective: capture every qualified lead, route them to the right person, and close more deals without
        adding headcount. We assess your current&nbsp;<GlossaryLink slug="data-quality">data
        quality</GlossaryLink>&nbsp;and workflows, recommend proven cross-platform chatbot tools that fit your
        existing stack, and build a pilot that shows clear results before you scale. You get a system where
        every inquiry, chat, call, DM, or text, lands in one place, with context and the right next step
        attached. Your team spends less time chasing details and more time closing work that matters.</p>
      <p className="text-base text-white shadow-text pt-3">
        Throughout this page, we’ll walk through the pain points, the mechanics of a unified&nbsp;<Link id={`use-cases-marketing-cross-platform-chatbot-lede-intelligent-lead-capture${idSuffix}`} href="/use-cases/marketing/ai-sales-force-automation-software" className="text-[#C83803] hover:underline">lead capture pipeline</Link>, and what separates a successful rollout from a stalled project. We’ll show exactly what
        changes in your day-to-day operations, which decisions cannot be unmade, and what you need to provide
        to make the system work. If you are still relying on scattered inboxes and manual triage, you are
        absorbing costs and risks that are no longer necessary. A proper Cross-Platform Chatbot is not a tech
        experiment, it is the new minimum for businesses that want to compete and win in South Florida’s
        always-on market.</p>
      <p className="text-base text-white shadow-text pt-3">For a shorter overview, read <Link id={`use-cases-marketing-cross-platform-chatbot-lede-blog${idSuffix}`} href="/blog/marketing/lead-capture-pipeline/cross-platform-chatbot-the-missing-link-in-your-south-florida-lead-capture-pipeline" className="text-[#C83803] hover:underline">Cross-Platform Chatbot Lead Capture</Link> on our blog.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="when-every-conversation-lives-in-a-different-inbox-leads-slip-away" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Every Conversation Lives in a Different Inbox, Leads Slip Away
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
              <h2 id="when-every-conversation-lives-in-a-different-inbox-leads-slip-away-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Every Conversation Lives in a Different Inbox, Leads Slip Away
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
