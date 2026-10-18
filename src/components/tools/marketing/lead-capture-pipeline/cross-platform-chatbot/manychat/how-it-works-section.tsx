import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Manychat automates the most time-consuming parts of managing customer conversations across Instagram,
        WhatsApp, Facebook Messenger, SMS, TikTok, Telegram, and email. The platform works by monitoring each
        connected channel for triggers, such as a new comment, a DM, or a keyword match, then launching a
        predefined conversation flow without delay. This process turns scattered inbound signals into a
        single, organized pipeline.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core engine in Manychat listens for activity on your chosen channels. When someone comments on an
        Instagram post, sends a DM on Facebook, or replies to a WhatsApp message, Manychat can instantly reply
        with a personalized message, ask qualifying questions, and collect contact information. These
        automations are not generic; they are tied to the context of the interaction. For example, a comment
        with a specific keyword can trigger a direct message offering more details or a signup link. This
        means a lead never waits for a manual reply and never falls through the cracks because of a missed
        notification.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manychat’s flows are built around a simple logic tree. Each step in the conversation can branch based
        on the user&#39;s response, tag the lead for follow-up, or push data to an external system. For
        instance, if a prospect replies &quot;interested&quot; on a Facebook post, Manychat can collect their
        email, tag them as a high-intent lead, and send their details to a
        connected&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;or Google Sheet. If the conversation
        ends without a booking, the system can segment the contact for a future campaign or alert your team
        for manual follow-up.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s guided conversations help avoid repetitive manual work. Instead of staff copying and
        pasting links or answering the same FAQs, Manychat delivers the right message at the right time. This
        includes sending links, appointment booking prompts, or product recommendations based on what the user
        asked. Every interaction is logged, so you can see the full history for each contact, regardless of
        which channel they used. This is a major shift from treating each inbox as a separate silo.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manychat also helps optimize engagement on existing content. When you post on Instagram or TikTok, the
        system can trigger automated replies to comments, boosting interaction rates and keeping your brand
        visible in the feed. These automations don’t just reply, they can start a full conversation, qualify
        the lead, and collect details for your database. The same automation can run while your team is
        offline, so the pipeline keeps moving even after hours.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams in Miami-Dade, Broward, or West Palm Beach who want to capture every lead but don’t have
        someone watching every inbox, this is the real value. Manychat’s step-by-step process turns scattered
        engagement into a connected, actionable pipeline. Every prospect gets a fast, relevant reply, every
        conversation is tracked, and the next action, whether it’s a booking, follow-up, or nurture step,
        happens automatically. Over time, this consistency builds trust with your audience and ensures no
        inquiry is left behind.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-manychat-handles-conversations-across-platforms-step-by-step" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Manychat Handles Conversations Across Platforms, Step by Step
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-manychat-handles-conversations-across-platforms-step-by-step" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Manychat Handles Conversations Across Platforms, Step by Step
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
