import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        My AI Front Desk does not just add another tool to your stack, it clears away the manual work and
        blind spots that eat into your team’s time and revenue. It is built for small businesses that need
        every lead to count, every conversation to be visible, and every hour to be billable. The platform
        brings every channel, website chat, SMS, phone, email, Facebook, Instagram, into a
        single&nbsp;<GlossaryLink slug="unified-inbox">unified inbox</GlossaryLink>. This means your team sees
        the full history of each customer, no matter how or when they reach out.</p>
      <p className="text-md text-white shadow-text pt-3">
        Instead of spending mornings catching up on missed calls or digging through email threads for a
        prospect’s last question, your team opens one dashboard and sees every conversation in context. The AI
        answers instantly on every channel, qualifying leads and capturing details without waiting for a human
        to pick up. When a call comes in after hours, My AI Front Desk picks up, answers questions, and routes
        urgent issues to the right person. No more voicemails piling up or prospects lost to the weekend.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual data entry disappears. Every call, text, chat, and email is automatically transcribed and
        logged to the&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. This is not just a transcript, it is
        structured data: intent, fit, urgency, outcome. Your pipeline is scored in real time, so the team
        knows which leads are ready to buy before making a single call. The result is a workday that starts
        with a prioritized list of high-intent contacts, not a scramble to figure out who needs a reply.</p>
      <p className="text-md text-white shadow-text pt-3">
        Appointment booking moves from a game of phone tag to a live, AI-driven process. When a prospect is
        ready, My AI Front Desk checks availability and books the meeting during the conversation, no
        back-and-forth, no dropped threads. Every booking, every follow-up, and every outcome is written back
        to the&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, so nothing is missed and every action is
        tracked. Your team can step into a conversation at any time, with the full context available, and the
        AI hands control back when needed.</p>
      <p className="text-md text-white shadow-text pt-3">
        High-value opportunities are no longer buried in the noise. My AI Front Desk evaluates every
        interaction, call outcome, chat intent, form answers, engagement across all channels, and scores leads
        based on real signals. The hottest prospects are surfaced instantly, and the team can focus on closing
        instead of sifting through low-intent inquiries. When a conversation needs escalation, the system
        triggers an immediate alert, so urgent threads are never left waiting.</p>
      <p className="text-md text-white shadow-text pt-3">
        Follow-up is fully automated. After a call or chat, My AI Front Desk can trigger a personalized SMS
        sequence, send a summary email, or assign the lead to a nurture queue based on what was discussed.
        This keeps the pipeline moving even when your team is busy elsewhere. The AI adjusts its messaging
        based on the customer’s responses, handles objections, and asks follow-up questions, removing the need
        for manual scripting or one-size-fits-all replies.</p>
      <p className="text-md text-white shadow-text pt-3">
        Reporting and attribution are built in. Every booking, every dollar, every conversion is linked back
        to its original channel and conversation path. You see which campaigns are driving revenue, which
        channels bring in the best leads, and where the bottlenecks are. The dashboard updates in real time,
        so you can make decisions daily, not after the fact. There is no need to build separate reports or
        reconcile numbers across systems, My AI Front Desk does it as part of the workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration with HubSpot, Salesforce, and&nbsp;<Link id="tools-marketing-cross-platform-chatbot-myaifrontdesk-transforms-pipedrive" href="/tools/marketing/pipedrive" className="text-[#C83803] hover:underline">Pipedrive</Link>&nbsp;means conversation data flows directly to your
        existing&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, without extra effort from your team. The
        system auto-builds your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;from every interaction,
        powering dashboards and attribution without manual setup. Most businesses start seeing value within
        minutes of setup, and the platform is managed with no code, no engineers required, no complex
        migrations.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses, the biggest win is time. The hours once spent on manual follow-up, data entry,
        and lead sorting are now returned to the team. Instead of hiring more staff or working longer hours,
        you get a pipeline that runs itself, capturing, qualifying, and booking leads around the clock. The
        result is a smoother week, fewer errors, and more sales closed with less effort. My AI Front Desk is
        not just automation; it is a complete removal of the busywork that holds teams back from growth.</p>
      <blockquote cite="https://www.myaifrontdesk.com/platform/ai-web-chatbot/unified-inbox" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Every conversation from every channel appears in one inbox.</blockquote>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-my-ai-front-desk-cross-platform-chatbot-removes-from-your-week" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What My AI Front Desk Cross-Platform Chatbot Removes From Your Week
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
              <h2 id="what-my-ai-front-desk-cross-platform-chatbot-removes-from-your-week" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What My AI Front Desk Cross-Platform Chatbot Removes From Your Week
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
