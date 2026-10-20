import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        BotPenguin is designed for small businesses that need to manage lead capture and customer engagement
        across multiple chat and messaging channels without hiring a developer or building custom software.
        The fit question is simple: if your team is losing leads, repeating conversations, or struggling to
        track prospects across WhatsApp, Instagram, Facebook, SMS, and your website,
        BotPenguin’s&nbsp;<GlossaryLink slug="unified-inbox" className="text-[#0B162A] hover:underline">unified inbox</GlossaryLink>&nbsp;and automation
        rules can close those gaps. But the right fit depends on what you expect from the platform and how
        your sales process works.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with the channels you use. BotPenguin’s core value is its true cross-platform coverage,
        WhatsApp, Instagram DMs, Facebook Messenger, Telegram, SMS, website chat, and phone (via AI voice
        agent) all managed in one place. If you only use one channel, or your business relies on a proprietary
        app or a channel not supported by BotPenguin, its automation model will not serve you as well.
        BotPenguin works best for businesses that want every inbound message, comment, and DM to become a
        structured lead in a single pipeline, with no manual copy-paste or tab switching.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next consideration is how much you need to customize. BotPenguin’s configuration is powerful but
        bounded by the platform: you can build flows, set rules, and map data fields, but you cannot write
        your own code or add integrations beyond the 100+ it supports natively. For most small teams, this
        means less risk, less maintenance, and no need to manage a developer or agency relationship for custom
        code. If your business needs a completely bespoke workflow or deep integration with a niche tool,
        BotPenguin may not be the best fit.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing is straightforward and affordable for small teams. BotPenguin’s Baby plan is permanently free,
        covering one chatbot, 1,000 messages per month, unlimited leads, live chat, and AI-powered responses,
        enough for a small business to get started and see if the model fits. For teams that need to cover
        more channels or more volume, the Little plan adds support for five bots, five team members, and full
        access to WhatsApp, Instagram, and Facebook at $29 per month. There are no per-property or per-channel
        charges, and AI is included from the free tier up.</p>
      <p className="text-md text-white shadow-text pt-3">
        What matters most in the pricing model is predictability. Unlike some competitors who meter by
        conversation, agent, or channel, BotPenguin’s plans are flat and scale by team size and bot count. For
        a small business, this means you can add new channels or grow your lead volume without worrying about
        surprise bills or needing to upgrade just to get a new integration. The free plan is not a trial, it
        is a real, usable tier with AI included and no forced upgrade for core use.</p>
      <p className="text-md text-white shadow-text pt-3">
        When judging fit, weigh these criteria:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>How many channels do you need to support (WhatsApp, Instagram, Facebook, website, SMS, Telegram, phone)?</li>
        <li>Does your team need a no-code setup, or do you require custom scripting and integrations?</li>
        <li>Can you work within the integrations and flows BotPenguin offers, or do you have a unique process that needs code-level changes?</li>
        <li>Is your lead pipeline managed in a standard&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;or sales tool supported by BotPenguin, or do you need a custom database connection?</li>
        <li>How important is predictable, flat pricing versus usage-based or per-agent fees?</li>
        <li>Do you want AI-powered responses and 24/7 automation included from the start, or are you planning to add those features later?</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        BotPenguin’s limitations are real: you cannot build a feature outside what the platform supports, and
        you are limited to the integrations listed in the dashboard. But for most small businesses, these
        boundaries are a strength. You get a platform that is easy to deploy, simple to maintain, and
        affordable to scale. Geek @ Your Spot LLC’s implementation ensures your flows, data mapping, and handoff
        logic are set up for your real sales process, not just the defaults.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-botpenguin-fit-limitations-and-what-the-pricing-model-means-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge BotPenguin: Fit, Limitations, and What the Pricing Model Means for Small Teams
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-botpenguin-fit-limitations-and-what-the-pricing-model-means-for-small-teams" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge BotPenguin: Fit, Limitations, and What the Pricing Model Means for Small Teams
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
