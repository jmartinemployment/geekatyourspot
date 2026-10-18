import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A cross-platform chatbot is the right call when your business is losing leads, hours, or revenue to
        missed messages, scattered conversations, and slow follow-up across multiple channels. If your team
        spends more time tracking down who said what and where, than actually talking to customers, this
        approach pays off fast. You know it is time when conversations start on Instagram or Facebook but
        never make it to your pipeline, or when a phone call and a WhatsApp message from the same person
        become two separate leads, each missing half the story.</p>
      <p className="text-md text-white shadow-text pt-3">
        This solution fits best for small businesses in Miami-Dade, Broward, or Palm Beach that already juggle
        more channels than people. If you are running a small retail shop, a service business, or a boutique
        agency, and your team is drowning in DMs, missed calls, and forms, but you do not have the budget or
        desire to hire more staff, a cross-platform chatbot consolidates that chaos. It does not just pick up
        a few stray chats, it becomes the first point of contact for every inquiry, no matter where it lands.
        My AI Front Desk, for example, steps in to pick up calls and messages the moment your staff is busy or
        out, making sure every inquiry is logged and followed up. BotPenguin becomes the always-on sales rep
        that unifies WhatsApp, Facebook, Instagram, and your website, so you never have to check five inboxes
        to see who still needs a reply.</p>
      <p className="text-md text-white shadow-text pt-3">
        But there are limits. You should not choose this approach if your business only receives a handful of
        leads a week across one or two channels, and you or your team can handle each personally with no delay
        or missed context. If your service is ultra-high-touch, with every conversation requiring deep,
        personal knowledge and negotiation, a cross-platform bot might not pay back its cost or complexity.
        Some businesses, think boutique consultants who know every client by name and handle every message
        themselves, do not gain much from automating the front end, because the risk of a missed nuance
        outweighs the time saved.</p>
      <p className="text-md text-white shadow-text pt-3">
        It is also not a fit if your data is scattered and cannot be unified, or if you do not have the
        ability to integrate your lead sources,&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>, and
        scheduling systems. A chatbot cannot bridge a gap the business will not close. If you expect the AI to
        replace all human touch, you will be disappointed. Even the best systems, Tidio’s drag-and-drop
        builder or Dapta’s bilingual voice and chat agents, work because they escalate when a lead needs
        personal attention. If your team will not monitor the system or step in when needed, leads will still
        slip away.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another warning sign: if your top friction is not missed leads or slow response, but something else
        entirely, such as product complexity, regulatory compliance, or hands-on service delivery, a chatbot
        is not the lever to pull first. For those, look at other workflow automation or process improvements
        before rolling out a cross-platform chat pipeline.</p>
      <p className="text-md text-white shadow-text pt-3">
        The right moment to move is when the cost of missed connections, manual updates, and delayed follow-up
        becomes larger than the effort required to get your channels, leads, and team onto one page. When you
        see calls go to voicemail, DMs left unanswered, or the same question handled three times by different
        people, you know the business has outgrown the patchwork approach. That is when a cross-platform
        chatbot is not just an upgrade, but a necessity.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-a-cross-platform-chatbot-is-the-right-fit-and-when-it-isnt" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When a Cross-Platform Chatbot Is the Right Fit, and When It Isn’t
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-a-cross-platform-chatbot-is-the-right-fit-and-when-it-isnt" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When a Cross-Platform Chatbot Is the Right Fit, and When It Isn’t
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
