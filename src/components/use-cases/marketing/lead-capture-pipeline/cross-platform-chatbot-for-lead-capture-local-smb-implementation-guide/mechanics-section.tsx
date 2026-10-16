import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MechanicsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A real cross-platform chatbot lead capture system is not just a bot on your website or a few canned
        replies on Facebook. The workflow starts where your customers are: their preferred channel, whether
        that’s WhatsApp, Instagram, Facebook Messenger, SMS, your website chat, or even a phone call. The job
        is to capture every inquiry in real time, no matter where it arrives, and route it through a single,
        connected pipeline that never loses the thread.</p>
      <p className="text-md text-white shadow-text pt-3">
        Here’s what that actually looks like on the ground. Your customer sends a message, maybe it’s an
        Instagram DM at 8:00 p.m., a WhatsApp question while you’re with a client, or a web chat on your lunch
        break. Instead of getting buried in an app you might open once a day, every message lands in one
        inbox. The AI chatbot is already active on every channel. It answers within seconds, asks the right
        questions, and doesn’t care whether you’re on-site, busy, or closed for the night.</p>
      <p className="text-md text-white shadow-text pt-3">
        The workflow runs in four phases, mapped directly to the way Geek @ Your Spot delivers these projects
        for small teams in Miami-Dade, Broward, and West Palm Beach.</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Business Objectives Alignment. This starts with a free consultation. We name the bottleneck (like missed WhatsApp leads or slow DM replies), set measurable goals (such as capture every inquiry in under a minute, or qualify every lead before they hit your phone), and set up KPIs that matter, conversion rate, response time, and lead quality, not just volume.</li>
        <li>Data Quality Assessment. The system needs to know what makes a lead worth following up. We audit your current data: where leads come in, how details are captured, what info is missing, and where records get lost. If your contacts are scattered across texts, chats, and forms, we design a schema that pools everything, usually a timeline per customer with every message, call, and note attached.</li>
        <li>Tech Selection &amp; Architecture. We pick the stack that fits your team and your channels. For true&nbsp;<GlossaryLink slug="omnichannel">omnichannel</GlossaryLink>&nbsp;coverage, My AI Front Desk can answer inbound calls, handle texts, and consolidate every conversation into a shared&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;and timeline. For social and messaging, BotPenguin acts as a 24/7 sales agent across WhatsApp, Instagram, Facebook, and your website, syncing every captured lead to your pipeline. Manychat is the specialist for turning Instagram and Facebook comments or DMs into organized, tagged leads, launching guided conversations and pushing details straight to your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or spreadsheet. Dapta brings in voice, text, WhatsApp, and chat, and is especially strong for bilingual teams needing English and Spanish support, critical in South Florida. Tidio gives small teams a visual, no-code builder for live chat and AI automation, so you cover repetitive questions on your website and let your team jump into high-touch sales conversations when needed.</li>
        <li>Pilot Implementation Strategy. We start small. Launch the AI assistant on your busiest channels, run smoke tests to see that every message gets a reply, and validate that leads are captured and tagged properly. The pilot syncs with your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or a shared spreadsheet, no manual copy-paste, no rewriting the same notes. Team members see every conversation in one place, with handoff rules set so a human can step in for complex or high-value leads.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        Every tool above is chosen for what it fixes. If you’re missing calls and letting voicemail fill up,
        My AI Front Desk puts an AI at the front desk, picking up every call and logging the details. If your
        team is losing track of Instagram or WhatsApp chats,
        BotPenguin’s&nbsp;<GlossaryLink slug="unified-inbox">unified inbox</GlossaryLink>&nbsp;means you never
        miss a message, and it alerts you if a hot lead wants a live rep. When your staff is tired of
        repetitive Facebook comments or DMs going unanswered, Manychat launches an instant DM, tags the lead,
        and moves them to the next step. For teams with a mix of English and Spanish customers, Dapta handles
        the intake, books appointments, and syncs everything to your calendar
        and&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. Tidio lets even the leanest team run live chat,
        automate common questions, and jump in for sales calls, no code required, just a drag-and-drop
        builder.</p>
      <p className="text-md text-white shadow-text pt-3">
        The flow is always the same: every inquiry, no matter the channel, gets an answer; every detail lands
        in one record; every qualified lead moves to the next step without manual handling. The bot asks the
        right questions, tags and segments contacts, and never lets a hot lead slip away just because your
        team is busy or off the clock. By the time you or your team pick up the thread, every message, call,
        and chat is organized, qualified, and ready for follow-up.</p>
      <p className="text-md text-white shadow-text pt-3">
        The point of this approach, as Geek @ Your Spot delivers it, is simple: one AI assistant, every
        channel, zero lost leads. The mechanics are what make it work: connect every inbox, capture every
        conversation, and keep your team focused on closing, not chasing.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-the-cross-platform-chatbot-approach-actually-works-the-mechanics-from-first-message-to-qualified-lead" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How the Cross-Platform Chatbot Approach Actually Works: The Mechanics From First Message to Qualified Lead
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
              <h2 id="how-the-cross-platform-chatbot-approach-actually-works-the-mechanics-from-first-message-to-qualified-lead" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How the Cross-Platform Chatbot Approach Actually Works: The Mechanics From First Message to Qualified Lead
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
