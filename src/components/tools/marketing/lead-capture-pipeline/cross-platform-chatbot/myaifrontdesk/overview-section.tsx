import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Most small businesses in South Florida recognize the pattern: a prospect sends a message on your
        website chat while you are on a call. Another asks for a quote through Facebook Messenger at 7 p.m.
        Someone else texts your main number during lunch. Each request lands in a different inbox, one in your
        email, one as a text, another in your social DMs, splitting your team’s attention and burying
        opportunities in separate threads. By Monday morning, you are hunting for details, piecing together
        conversations, and realizing half of last week’s hot leads slipped through the cracks without a reply.</p>
      <p className="text-md text-white shadow-text pt-3">
        Even when your team hustles, off-hours and busy times mean calls ring out to voicemail or messages go
        unanswered for hours. Prospects move on. Lead tracking gets patchy. High-value opportunities stall
        when you cannot see the full history, what was said, what each customer wants, who already followed
        up. It is not just frustrating; it is expensive. Every missed or delayed response means lost revenue
        that does not come back, and you have no easy way to know where the breakdown happened.</p>
      <p className="text-md text-white shadow-text pt-3">
        A&nbsp;<Link id={`tools-marketing-cross-platform-chatbot-myaifrontdesk-overview-cross-platform-chatbot${idSuffix}`} href="/use-cases/marketing/lead-capture-pipeline/ai-chatbot" className="text-[#C83803] hover:underline">Cross-Platform Chatbot</Link>&nbsp;closes these gaps for good. Instead of scattering conversations across
        platforms, it brings every chat, text, call, and DM into one unified timeline for each customer. You
        see the whole story instantly, respond from any channel, and never miss a lead, no matter where or
        when they reach out. This is not just an automation gimmick. It is a way to keep your pipeline moving,
        your team focused on closing, and your customers happy with real-time answers instead of canned away
        messages or lost tickets.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC designs and implements these AI-powered lead capture pipelines for small businesses
        in Miami-Dade, Broward and West Palm Beach. The result: faster replies, fewer errors, and more sales,
        with no extra headcount and zero downtime. You get a full view of every customer, qualified leads
        sorted automatically, and marketing that works around the clock. The tools, channels, and scoring
        strategies that make this possible are covered step by step below.</p>
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
