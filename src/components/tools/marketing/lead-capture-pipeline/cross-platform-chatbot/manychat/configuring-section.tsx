import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Manychat works by letting you set up automation rules and logic that control how every incoming
        message, comment, or DM is handled across channels like Instagram, WhatsApp, Facebook Messenger, SMS,
        TikTok, Telegram, and email. For a small business with leads coming in from everywhere, these rules
        are what turn chaos into an organized pipeline. Geek @ Your Spot LLC configures these automations so you
        do not have to guess what happens when a customer comments, replies, or asks for a quote. Every step
        is mapped to your real workflow, not just a generic script.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of Manychat’s configuration is its trigger-and-action system. A trigger is any event that
        starts an automation: a comment on your Instagram post, a DM on Facebook Messenger, a WhatsApp
        message, or a keyword sent by SMS. Each trigger can be set to fire off a series of actions. For
        example, when someone comments “info” on your post, Manychat can instantly send them a DM, tag them as
        “interested,” and add their contact details to your lead list. This is not just about speed, it is
        about making sure no inquiry is missed, and every prospect is tracked from the first touch.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manychat lets you set up automation flows that branch based on the customer’s response. If a lead
        replies with a specific keyword, the system can ask qualifying questions, score their intent, or
        prompt them to book a call. These flows can be as simple or as detailed as you need. For a small
        business, Geek @ Your Spot LLC typically starts by mapping out the most common questions and actions: “How
        much does it cost?”, “Are you open on weekends?”, “Can I book an appointment?” Each gets its own path,
        so the bot answers instantly and only hands off to a human when needed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Segmentation and tagging are built into the logic. Every time a user interacts, Manychat can apply a
        tag (“hot lead,” “needs follow-up,” “booked consult”) or move them into a segment for targeted
        follow-up. This matters for businesses that want to run campaigns or reminders later, no more digging
        through old DMs to find last week’s prospects. Geek @ Your Spot LLC configures these tags based on your
        actual sales process, so you can see at a glance who is ready to buy and who needs more nurturing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automations in Manychat also include reply logic for common questions. If your team is tired of typing
        out the same answer about business hours or pricing, Manychat can detect those keywords and reply with
        the right information automatically. The rules can be as granular as you need, reply only once per
        user per post, only during business hours, or always send a follow-up after a set time if the lead
        does not respond. This reduces manual work and ensures consistency, even as your volume grows.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the extension side, Manychat supports integrations with tools like ActiveCampaign and Google
        Sheets. This lets you push leads directly into your email marketing
        or&nbsp;CRM&nbsp;system, or log every conversation for
        reporting. For businesses that need custom data flows, Geek @ Your Spot LLC sets up these integrations so
        the handoff from social to sales is seamless. There is no
        open&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;or scripting environment for custom code in
        the evidence, so the focus is on configuration and integrations, not bespoke development.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manychat’s comment automation is especially important for businesses that get a lot of engagement on
        Instagram or Facebook. Geek @ Your Spot LLC configures the system to trigger DMs from specific comments,
        keywords, or even story replies. This means you can run a campaign, “Comment ‘YES’ for a free quote”,
        and know that every response gets an instant, personal follow-up without your team monitoring the feed
        all day. The same logic applies to TikTok, Telegram, SMS, and email, letting you connect with
        prospects wherever they are.</p>
      <p className="text-md text-white shadow-text pt-3">
        Inbox management is also part of the configuration. Manychat lets you create custom labels and rules
        to sort conversations as they come in. Geek @ Your Spot LLC sets up these inbox rules so your team does
        not lose track of leads in a flood of messages. For example, all new Instagram DMs can be labeled “New
        Lead,” while replies to a specific campaign get a “Promo” tag. This keeps your workflow clean and
        makes it easy to prioritize follow-ups.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC’s role is to translate your existing sales and lead capture process into Manychat’s
        automation logic. This means mapping out your real-life customer journey, how people find you, what
        they ask, how you qualify them, and building flows that match. The result is a system that runs 24/7,
        captures every inquiry, and organizes your prospects without you having to touch every message
        yourself. For teams used to copying leads from DMs into spreadsheets, this setup is a major time-saver
        and removes a key source of dropped opportunities.</p>
      <p className="text-md text-white shadow-text pt-3">
        If your business relies on regular campaigns or seasonal offers, Manychat’s broadcast and segmentation
        logic can be configured to send targeted messages to just the right audience. Geek @ Your Spot LLC works
        with you to define these segments, past buyers, hot leads, people who asked about a specific service,
        and schedules or triggers broadcasts in line with your calendar. This keeps your outreach relevant and
        avoids spamming your full list with every update.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, what gets configured in Manychat is not just a set of canned responses or a basic
        autoresponder. It is a connected logic tree that turns every inbound message, comment, or DM into a
        structured, trackable step in your sales pipeline. Geek @ Your Spot LLC handles the mapping, rules,
        tagging, segmentation, and integrations, so the system fits your real process and scales as you grow.
        For a small business, this is the difference between missing leads and building a repeatable,
        always-on pipeline that never forgets a prospect.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-manychat-rules-automation-logic-and-how-geek-your-spot-makes-it-work" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Manychat: Rules, Automation Logic, and How Geek @ Your Spot LLC Makes It Work
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-manychat-rules-automation-logic-and-how-geek-your-spot-makes-it-work-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Manychat: Rules, Automation Logic, and How Geek @ Your Spot LLC Makes It Work
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
