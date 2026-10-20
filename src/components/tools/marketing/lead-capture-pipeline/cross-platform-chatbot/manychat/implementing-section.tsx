
export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out Manychat in a small business is not a long, drawn-out IT project. Most teams in
        Miami-Dade, Broward or West Palm Beach can see value within days, not weeks, because Manychat comes
        with connectors for Instagram, WhatsApp, Facebook Messenger, TikTok, Telegram, SMS and email already
        built in. There is no need for custom code to get started on the channels your customers already use.
        You pick your top two or three channels, connect them, and you’re ready to automate.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is connecting your social accounts to Manychat. This is a guided process, no developer
        needed. Manychat’s setup wizard walks you through linking Instagram, WhatsApp, Messenger, and any
        other supported channels. For SMS and email, the platform provides direct integration. If your
        business already uses ActiveCampaign or Google Sheets for marketing or lead tracking, Manychat plugs
        in with native integrations, so new contacts and conversations flow straight into your existing
        workflows. This is what shortens the go-live: you do not have to rebuild your pipeline or abandon your
        current marketing stack.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once channels are connected, the next focus is automating replies and lead capture. Manychat’s
        template library offers ready-made flows for common scenarios, replying to Instagram comments, sending
        information on WhatsApp, following up on Facebook Messenger, or collecting emails from TikTok. Geek @ Your Spot LLC configures these flows to match your brand’s voice and your sales process. For a local
        business, that means the bot can answer FAQs, send a booking link, or ask qualifying questions, all
        without staff intervention. Every reply is logged, every new lead is tagged, and nothing falls through
        the cracks.</p>
      <p className="text-md text-white shadow-text pt-3">
        A phased rollout works best for most small teams. Start with the highest-traffic channel, often
        Instagram or WhatsApp, where missed messages cost the most. Automate replies to comments and DMs there
        first. Once those flows are running smoothly, add a second or third channel. Because Manychat’s
        automations are modular, you can expand without redoing earlier work. Each new channel brings its own
        set of triggers and templates, but the core logic, capture the lead, tag it, sync it to
        your&nbsp;CRM&nbsp;or sheet, stays the same. This approach
        means you see results early and avoid overwhelming your team with a big-bang launch.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manychat’s permission system lets you bring in multiple team members with role-based access. If your
        sales manager needs to see all leads but your marketing assistant only manages Instagram, you can set
        those rules from the start. This keeps data organized and avoids confusion as your pipeline grows.</p>
      <p className="text-md text-white shadow-text pt-3">
        Support is not an afterthought. Manychat provides email support on business days, an online help
        center, and an AI chat for troubleshooting. Geek @ Your Spot LLC handles the first round of training and
        documentation, so your staff know how to monitor conversations, adjust flows, and escalate when human
        follow-up is needed.</p>
      <p className="text-md text-white shadow-text pt-3">
        The entire go-live process, from connecting accounts to running your first automated campaign, is
        designed to fit around the real work of a small business. You do not need to shut down operations or
        wait for a slow migration. Most teams are live on their first channel within a day or two, with
        additional channels added as you see results and get comfortable with the platform. Manychat’s
        pre-built integrations and template library are what make this possible. Instead of building from
        scratch, you launch with proven flows and adapt as your needs change.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a team that has never used a cross-platform chatbot, the biggest surprise is how quickly the chaos
        of scattered messages turns into a single, organized pipeline. The Friday afternoon scramble to find
        that one DM or reply to a forgotten comment disappears. Every inquiry, no matter where it lands, gets
        a response, gets tagged, and moves to the next step, without adding staff or burning out the team.
        That is what going live with Manychat looks like when Geek @ Your Spot LLC handles the setup: fast,
        focused, and built for the way local businesses actually work.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-manychat-looks-like-for-a-small-business-team" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Going Live With Manychat Looks Like for a Small Business Team
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-manychat-looks-like-for-a-small-business-team-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Going Live With Manychat Looks Like for a Small Business Team
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
