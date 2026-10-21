import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Every small business in South Florida knows the scene: a new lead texts your WhatsApp at 8 a.m.,
        another drops a question into your website chat, and before lunch someone else sends a message on
        Instagram. By the end of the day, your team is digging through separate inboxes, copy-pasting names,
        and trying to remember which customer asked what. Even when you answer quickly, context gets lost. The
        same prospect might be fielded by three different people, or worse, dropped entirely because the
        conversation thread is missing. A&nbsp;<Link id={`tools-marketing-cross-platform-chatbot-tidio-overview-cross-platform-chatbot${idSuffix}`} href="/use-cases/marketing/lead-capture-pipeline/ai-chatbot" className="text-[#C83803] hover:underline">Cross-Platform Chatbot</Link>&nbsp;is supposed to fix this, but for most small
        businesses, the reality is a mess of overlapping tools, too many windows, and no way to see the whole
        customer story in one place.</p>
      <p className="text-base text-white shadow-text pt-3">
        This fragmentation hits hardest in support and sales. When every channel is siloed, your service team
        wastes hours re-asking basic questions and your sales team loses the chance to follow up at the right
        moment. Customers get frustrated repeating themselves or waiting for a response that never comes. If
        your team is small, maybe just three or four people, there is no spare capacity to rebuild context by
        hand. The result: slower replies, dropped leads, and missed sales. For a small shop, that means real
        money left on the table and a reputation for being hard to reach.</p>
      <p className="text-base text-white shadow-text pt-3">
        The right Cross-Platform Chatbot changes the game. Instead of treating each message as a one-off, an
        intelligent pipeline keeps every conversation, name, and customer action in sync, across website, SMS,
        Messenger, Instagram, and more. Your team sees the full history in one dashboard, so anyone can pick
        up a thread and respond with context, without having to ask a customer to start over. Round-the-clock
        AI handles the common questions, sorts and qualifies leads, and hands off anything complex to a human
        at the right moment. Support feels personal, sales never misses a beat, and your team spends less time
        chasing details.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in West Palm Beach, Broward and Miami-Dade counties, the difference is clear:
        fewer errors, faster follow-ups, and a pipeline that actually captures more leads from every channel.
        It is not about adding another tool to the pile, it is about making sure every customer gets a
        consistent, connected experience, and your team runs like one that is three times the size. That is
        what a real Cross-Platform Chatbot delivers when it is built for local small business, not just for
        the enterprise giants.</p>
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
