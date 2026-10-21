import Link from "next/link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses in South Florida start their search for a cross-platform chatbot with a short
        list: the big-name tools promising to unify every chat channel, the free live chat widgets, and the
        platforms built for a single messaging app. BotPenguin sits in the middle of that landscape, but what
        sets it apart is not just the list of channels or the price. The difference is in how it handles the
        messy reality of real conversations across WhatsApp, Instagram, Facebook Messenger, Telegram, SMS, and
        your website. Where other tools force you to pick one channel as your &quot;main&quot; or make you pay
        extra for each new integration, BotPenguin was built from the start to treat every channel as equal.
        It manages WhatsApp, Instagram DMs, Facebook Messenger, Telegram, SMS, and website chat from one
        dashboard, so your team never has to jump between apps or tabs to keep up with leads. This is not just
        a convenience, it is the only way to avoid losing leads in the gaps between platforms.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you have tried a live chat widget before, you already know what goes wrong. Free tools like Tawk.to
        cover website chat well, but leave you blind to Instagram, WhatsApp, or Facebook messages. You end up
        with one more inbox, not one less. BotPenguin, by contrast, brings all those channels into a single
        place and includes AI-powered responses on every plan, even the free tier. For a small business, this
        means you do not need to choose between being responsive on your site and on your social channels. The
        platform’s&nbsp;unified inbox&nbsp;and automation
        flows mean that every incoming message, whether it is a WhatsApp ping at midnight or a Facebook
        comment during a campaign, gets the same fast, consistent handling. This is what stops leads from
        slipping through the cracks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Compare this to platforms like Chatfuel or&nbsp;<Link id={`tools-marketing-cross-platform-chatbot-botpenguin-comparing-manychat${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat" className="text-[#0B162A] hover:underline">Manychat</Link>, which focus on Meta channels (Facebook and
        Instagram) but do not cover Telegram or SMS natively. BotPenguin does. It also merges contact profiles
        across channels into a single view, so if a customer messages you on Facebook and then follows up on
        WhatsApp, you see the full conversation history and context in one place. This is a crucial difference
        for businesses that want to build real relationships instead of treating each channel as a separate
        customer. For marketing teams, this means campaigns can trigger automated DMs, comment replies, and
        broadcasts across every channel, not just one, and the results are tracked and qualified in one
        pipeline.</p>
      <p className="text-base text-white shadow-text pt-3">
        BotPenguin’s automation is not limited to chat replies. It captures leads with qualification flows,
        maps the data to your&nbsp;CRM&nbsp;fields, and pushes it
        directly into your sales pipeline, no copy-paste, no manual entry. This stands out from solutions that
        only handle the chat and leave you to move the data by hand. The platform also supports live agent
        handoff at any point, so when a conversation needs a human, the bot passes the full context over
        instantly. Your team can step in with all the background, not just a name and a question. This is
        especially important for high-value leads or sensitive conversations where a personal touch is
        required.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses, the pricing model matters as much as the feature list. BotPenguin’s free Baby
        plan includes AI, website chat, WhatsApp, Instagram, Telegram, and unlimited lead capture, without a
        time limit or a hidden cap on basic features. Paid plans, starting at $29 per month, add more bots,
        team members, and channel depth. There is no per-property charge or forced upgrade just to add a new
        channel. This is a direct answer to the pain small teams feel when other tools charge extra for every
        new integration or user.</p>
      <p className="text-base text-white shadow-text pt-3">
        BotPenguin also addresses the real-world speed of deployment. Many platforms claim to be “no-code,”
        but still require hours of setup, developer help, or complex logic mapping. BotPenguin’s approach is
        to offer ready-made templates and rapid configuration, so a business can go from sign-up to live on
        every channel in hours, not weeks. This is especially useful for teams without a dedicated IT resource
        or anyone who has tried to implement a chatbot before and given up when the process got too technical.
        The platform’s focus on ease of use and breadth of integration means that a small business can cover
        every channel their customers use, without hiring a developer or buying multiple tools.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, BotPenguin is not just another chatbot builder. It is a unified, AI-powered lead capture and
        qualification engine designed for small businesses that need to keep up with customers across every
        messaging channel. It stands out by treating every platform as a first-class citizen, merging
        conversations and contact profiles, and automating the entire pipeline from first message
        to&nbsp;CRM&nbsp;entry. For businesses in Miami-Dade, Broward,
        and West Palm Beach, this is the difference between keeping up with the volume and speed of modern
        customer conversations or falling behind while competitors reply faster and capture more leads.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-botpenguin-compares-to-other-chatbot-approaches-on-the-market" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How BotPenguin Compares to Other Chatbot Approaches on the Market
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-botpenguin-compares-to-other-chatbot-approaches-on-the-market-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How BotPenguin Compares to Other Chatbot Approaches on the Market
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
