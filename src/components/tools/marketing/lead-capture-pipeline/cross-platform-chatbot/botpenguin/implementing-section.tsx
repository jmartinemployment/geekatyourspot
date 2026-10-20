import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting BotPenguin live in a small business environment is about cutting out the usual delays that
        come with cross-platform chat tools. The speed comes from two places: first, BotPenguin’s pre-built
        connectors for WhatsApp, Instagram, Facebook Messenger, Telegram, SMS, and website chat. Second, its
        no-code setup and ready-made templates mean you do not need to build everything from scratch or wait
        on a developer for every tweak. For a business in Miami-Dade, Broward, or West Palm Beach, that means
        you can move from scattered inboxes to a unified, AI-powered pipeline without a long project or a big
        IT overhaul.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process starts with mapping out which channels matter most. Most small teams want to cover their
        website, Instagram DMs, Facebook Messenger, and WhatsApp right away. BotPenguin’s dashboard lets you
        connect each of these in a few clicks, using built-in integrations that do not require custom code.
        Telegram and SMS are available for teams that need them, but the core setup is the same: pick your
        channels, authenticate the accounts, and BotPenguin becomes the first line of response on each one.</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Map your channels: List the messaging apps and web chat tools your customers already use to reach you.</li>
        <li>Authenticate each channel: Use BotPenguin’s step-by-step integration flow to connect WhatsApp, Instagram, Facebook Messenger, Telegram, SMS, and your website chat.</li>
        <li>Choose a template: Select from BotPenguin’s ready-made chatbot flows, or start with a blank canvas if you need something specific.</li>
        <li>Customize your flows: Edit questions, qualification steps, and brand voice. You do not need to write code, just use the visual builder.</li>
        <li>Test the experience: Run test conversations across all channels to check handoff, lead capture, and&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;sync.</li>
        <li>Roll out in phases: Go live on one or two channels first, then expand to others as your team gets comfortable.</li>
        <li>Monitor and adjust: Watch the&nbsp;<GlossaryLink slug="unified-inbox">unified inbox</GlossaryLink>&nbsp;and lead pipeline, then tweak flows or add automations as you see what customers actually do.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        What shortens go-live is that BotPenguin does not require separate tools for each channel or lengthy
        manual configuration. The platform’s&nbsp;<GlossaryLink slug="unified-inbox">unified
        inbox</GlossaryLink>&nbsp;means your team can see every incoming chat from WhatsApp, Instagram,
        Facebook, Telegram, SMS, and your website in one place. There is no need to juggle five browser tabs
        or copy-paste details from one app to another. Every message lands in the same lead pipeline, and
        every conversation stays linked to the right contact profile.</p>
      <p className="text-md text-white shadow-text pt-3">
        BotPenguin’s templated setup handles most of what a small business needs out of the box. For lead
        capture, it comes with prebuilt flows that ask qualifying questions, collect contact details, and push
        structured data directly into your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or sales
        sheet. If you want to trigger different flows based on keywords, campaign sources, or time of day, the
        platform supports those conditions without extra development. The AI layer handles routine questions
        and handoffs, so your staff only steps in for complex cases or hot leads.</p>
      <p className="text-md text-white shadow-text pt-3">
        Phased rollout is another way BotPenguin keeps the process short and low-risk. Many small businesses
        start with website chat and WhatsApp, then add Instagram DMs and Facebook Messenger once the team is
        comfortable. Because every channel uses the same logic and inbox, expanding does not mean starting
        over, it is just a matter of authenticating the next account and copying or adjusting the flow. This
        means you can show real results (faster response, no missed leads) in days, not weeks, and keep
        scaling as your team’s confidence grows.</p>
      <p className="text-md text-white shadow-text pt-3">
        The final step before full launch is always a round of live testing.
        BotPenguin’s&nbsp;<GlossaryLink slug="unified-inbox">unified inbox</GlossaryLink>&nbsp;lets you watch
        messages as they come in from each channel, check that qualification steps work, and confirm that
        leads reach your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;with the right tags and
        details. If your business uses HubSpot, Zoho&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, or
        another supported system, BotPenguin’s integrations let you map fields and automate data sync without
        a custom connector. This is where Geek @ Your Spot LLC’s implementation makes a difference for South
        Florida clients: we handle the mapping, test the flows across every channel, and make sure your team
        is ready to run the new pipeline on day one.</p>
      <p className="text-md text-white shadow-text pt-3">
        In practice, going live with BotPenguin is not a drawn-out IT project. It is a focused, step-by-step
        rollout that uses the platform’s own strengths, prebuilt integrations, templated flows, and a single
        inbox, to deliver a working cross-platform chatbot in a fraction of the time most teams expect. For a
        small business, that means you stop losing leads to missed DMs and scattered chats, and start seeing
        every inquiry in the same pipeline from the first week.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-shortens-botpenguin-go-live-for-a-small-business-the-real-steps-and-the-order-they-happen-in" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens BotPenguin Go-Live for a Small Business: The Real Steps and the Order They Happen In
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
              <h2 id="what-shortens-botpenguin-go-live-for-a-small-business-the-real-steps-and-the-order-they-happen-in" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens BotPenguin Go-Live for a Small Business: The Real Steps and the Order They Happen In
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
