import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses in Miami-Dade, Broward, and West Palm Beach that are weighing Manychat against other
        lead capture and chatbot tools face a real choice: do they want a platform built for social-first
        engagement, or a general-purpose solution that tries to cover every channel but rarely excels at any?
        Manychat stands out because it is designed specifically for turning social engagement into real
        pipeline, not just as a helpdesk bot or a generic chat widget. This section breaks down how Manychat
        fits among the main approaches and where it is the right answer for a cross-platform chatbot solution.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most alternatives in this space fall into two camps. First, there are chatbots built for website
        support. These tools focus on answering questions on your site, routing tickets, or deflecting support
        requests. They may offer integrations with email or SMS, but their DNA is customer service, not
        marketing or lead capture. For a small business whose customers reach out on Instagram, WhatsApp, or
        Facebook Messenger, these tools miss the mark. They treat each channel as a separate workflow,
        sometimes with bolt-on connectors, but they do not keep the conversation or context connected when a
        prospect moves from one channel to another.</p>
      <p className="text-base text-white shadow-text pt-3">
        Second, there are all-in-one marketing automation suites that
        promise&nbsp;<GlossaryLink slug="omnichannel" className="text-[#0B162A] hover:underline">omnichannel</GlossaryLink>&nbsp;engagement, website
        chat, SMS, email, sometimes even voice. These platforms often require heavy setup, higher monthly
        costs, and ongoing management. They may offer some social integrations, but these are usually limited
        to basic Facebook Messenger support or require extra configuration to handle Instagram or WhatsApp.
        For a small business, this means more overhead, more training, and more risk that the system will not
        adapt to the way real customers reach out.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manychat is built for businesses who live and grow on social. It connects Instagram, TikTok, WhatsApp,
        Facebook Messenger, Telegram, SMS, and email in one place. This is not just a list of integrations; it
        is a single interface where every conversation, no matter where it started, can be tracked, tagged,
        and moved forward. When a prospect leaves a comment on an Instagram post, Manychat can trigger an
        automated DM, capture their contact details, and sync that information into a Google Sheet or
        ActiveCampaign for follow-up. If that same person sends a WhatsApp message a day later, Manychat
        recognizes the contact and keeps the conversation going without starting from scratch.</p>
      <p className="text-base text-white shadow-text pt-3">
        What sets Manychat apart from more generic tools is how it treats social messaging as the main event,
        not an afterthought. Its automation flows are built around real-world engagement triggers, comments,
        DMs, story replies, specific keywords, and it is designed to reply instantly, 24/7, even when your
        staff are offline. This is a direct answer to the pain point most small businesses face: comments and
        DMs that go unanswered, leads that never make it into
        the&nbsp;CRM, and opportunities lost because no one was there
        to reply at the moment of interest.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manychat also brings segmentation and tagging to the front. Instead of just capturing a name and
        email, it lets you tag contacts based on what they asked, what they clicked, or how they engaged. This
        means you can follow up with the right offer, not just a generic message. Competing platforms often
        require extra steps or manual intervention to achieve this level of targeting.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another real difference is how Manychat handles automation logic. Rather than requiring a developer or
        complex scripting, it lets you set up rules visually, &quot;if a comment contains this keyword,
        trigger this DM,&quot; &quot;if a user replies with their email, add them to this segment.&quot; This
        is especially important for small teams who cannot dedicate IT resources to chatbot management.
        Manychat&#39;s approach is direct, actionable, and built for non-technical users who still want
        powerful automation.</p>
      <p className="text-base text-white shadow-text pt-3">
        The pricing model is another point of contrast. Manychat offers a Pro plan at $14 per month with a
        14-day free trial, which covers two channels and two users. The Essential plan at $29 per month
        unlocks more channels, AI-powered conversations, and advanced automations. For WhatsApp, the first
        1,000 conversations per month are free, and charges apply only above that usage. This is a clear,
        predictable structure that fits small businesses who need to know their costs upfront, without the
        surprise fees or required upgrades that come with some all-in-one suites.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that want to bring their social engagement, lead capture, and follow-up into one
        unified workflow, without hiring a developer or buying an enterprise suite, Manychat is the platform
        that fits. It is not the right answer if your main channel is website chat or if you need a
        full-featured&nbsp;CRM&nbsp;out of the box. But for teams who
        are drowning in DMs, missing leads in Instagram comments, or struggling to keep their pipeline
        organized as they grow, Manychat is built to solve exactly those problems. Its focus on social-first
        automation, simple setup, and clear pricing makes it the standout choice for cross-platform lead
        capture in the real world of small business marketing.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-manychat-compares-to-other-lead-capture-and-chatbot-platforms" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Manychat Compares to Other Lead Capture and Chatbot Platforms
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
              <h2 id="how-manychat-compares-to-other-lead-capture-and-chatbot-platforms-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Manychat Compares to Other Lead Capture and Chatbot Platforms
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
