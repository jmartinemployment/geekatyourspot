
export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manychat is built for small businesses who need every minute and every lead to count. Instead of
        adding another inbox to check, it connects your main social channels, Instagram, WhatsApp, Facebook
        Messenger, TikTok, Telegram, SMS and Email, so you can handle all conversations in one place. This
        means your staff does not have to log in and out of different apps or remember who said what, where.
        You see the whole conversation, no matter where it started.</p>
      <p className="text-base text-white shadow-text pt-3">
        The biggest time-saver is automation. Manychat automatically replies to comments and messages, so
        prospects never wait for a response. This is not just about speed, it is about never missing the
        moment when someone is ready to buy or book. Instead of letting opportunities slip because you were
        off the clock, Manychat answers instantly, 24/7. Your team gets to focus on the conversations that
        matter, while routine questions and requests are handled in the background.</p>
      <blockquote cite="https://manychat.com/solution/automatic-comment-replies" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Use Instagram comment automation to automatically reply to comments and send DMs while you’re offline.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        For marketing, this is a game changer. Manychat’s smart chatbot features mean you can run campaigns
        around the clock, sort and qualify leads, and deliver personal product tips without needing a person
        glued to the screen. If someone asks for a coupon, the bot delivers it. If they want to book an
        appointment, the bot can guide them through the steps. This removes the need for someone to monitor
        every channel at all hours, freeing up your staff for higher-value work.</p>
      <p className="text-base text-white shadow-text pt-3">
        Lead scoring&nbsp;and segmentation become automatic.
        As Manychat interacts with prospects, it tags and segments them based on their actions and responses.
        High-intent leads are flagged for follow-up, while others are nurtured or added to future campaigns.
        This means your sales team can focus on the hottest prospects, not waste time chasing cold leads. The
        data is synced into your&nbsp;CRM&nbsp;or spreadsheet, so you
        always know where every opportunity stands.</p>
      <p className="text-base text-white shadow-text pt-3">
        Voice assistant features mean you can engage customers even when they reach out by phone or leave a
        message. Manychat’s automations keep the pipeline moving, so every inquiry gets a next step, whether
        that is a call, a booking, or a targeted offer. You do not have to build this from scratch. Manychat
        comes with ready-to-go templates and a setup process that gets you live fast, without coding.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manychat’s analytics and reporting tools show you what is working. You see revenue generated, contacts
        collected, and interaction rates right inside the dashboard. This lets you double down on what drives
        results and cut what does not. No more guessing which posts or offers are landing with your audience.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams in West Palm Beach, Broward and Miami-Dade, the difference is clear. Instead of scrambling
        to answer every DM, manually copying details into a spreadsheet, or letting leads fall through the
        cracks, you have a system that does the heavy lifting. Every comment, message and inquiry is handled,
        tracked, and routed to the right place. Your staff spends less time on repetitive tasks and more time
        closing deals or serving customers.</p>
      <p className="text-base text-white shadow-text pt-3">
        The bottom line: Manychat removes the chaos and manual work from cross-platform messaging. You get
        faster responses, fewer missed opportunities, and a lead pipeline that runs itself, so you can grow
        without burning out your team.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-manychat-cross-platform-chatbot-removes-from-your-week" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Manychat Cross-Platform Chatbot Removes From Your Week
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-manychat-cross-platform-chatbot-removes-from-your-week-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Manychat Cross-Platform Chatbot Removes From Your Week
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
