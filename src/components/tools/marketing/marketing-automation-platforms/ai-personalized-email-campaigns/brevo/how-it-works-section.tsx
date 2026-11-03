import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Brevo automates personalized email campaigns by combining <GlossaryLink slug="behavioral-segmentation" className="text-[#0B162A] hover:underline">behavioral
        segmentation</GlossaryLink>, dynamic content, and AI-assisted send scheduling, so every recipient gets a
        message tailored to their interests at the moment they are most likely to act. The system removes manual
        segmentation and guesswork from the process, letting small teams run high-impact campaigns on a schedule
        that fits each subscriber, not just the business. This is not just a bulk email tool with mail merge; it is
        a rules-driven engine that adapts to each contact and campaign.</p>
      <p className="text-base text-white shadow-text pt-3">
        The mechanics start with contact management. Brevo lets you import, store, and organize unlimited contacts,
        even on the free plan. You can group these contacts by behavior (like past purchases, web visits, or
        engagement history), by demographics, or by any custom attribute you track. This means a business can
        segment its audience into groups as specific as “recent buyers who opened the last two emails but did not
        click” or as broad as “all local customers.” The moment a contact matches the rules for a segment, Brevo
        updates their status automatically, so lists stay current without manual intervention.</p>
      <p className="text-base text-white shadow-text pt-3">
        Campaign creation in Brevo centers around its drag-and-drop editor. You build emails using templates or from
        scratch, dropping in personalized fields, such as the recipient’s name, purchase history, or custom
        recommendations. Dynamic content blocks allow a single campaign to show different offers or messages to
        different segments, all within the same send. For example, a single newsletter can promote a special to new
        customers, a loyalty reward to repeat buyers, and a re-engagement offer to lapsed subscribers, with each
        recipient seeing only what applies to them.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once your campaign is built, Brevo’s automation engine takes over. You set up workflows that trigger emails
        based on events (like signing up, making a purchase, or not opening a previous message), dates (such as
        birthdays or anniversaries), or behavioral milestones (like <GlossaryLink slug="abandoned-cart-email" className="text-[#0B162A] hover:underline">cart
        abandonment</GlossaryLink> or repeat visits). These workflows can branch, sending a follow-up email if
        someone clicks a link, sending a text if they do not open, or escalating to a staff member if a high-value
        customer goes cold. Each action is logged and visible to your team, so you always know why a message was
        sent and what happened next.</p>
      <p className="text-base text-white shadow-text pt-3">
        A key part of Brevo’s approach is its Send Time Optimization. The platform uses <GlossaryLink slug="machine-learning" className="text-[#0B162A] hover:underline">machine
        learning</GlossaryLink> to predict when each contact is most likely to open and engage with an email.
        Instead of sending to your whole list at 9 AM, Brevo can stagger sends so that each recipient gets their
        message at their own optimal time. This feature directly addresses the problem of generic blasts being
        ignored or marked as spam, and is backed by Brevo’s own data showing open rates for automation emails
        outpace standard campaigns by nearly 10 percentage points.</p>
      <p className="text-base text-white shadow-text pt-3">
        Testing and optimization are built in. Brevo supports A/B testing of subject lines, content, and send times,
        letting you experiment with what works best for your audience. The results feed back into future campaigns,
        so your approach improves over time without extra manual work. On higher tiers, you also get access to more
        advanced testing and reporting features, but even the free plan lets you run basic tests and see which
        versions perform better.</p>
      <p className="text-base text-white shadow-text pt-3">
        Deliverability is another area where Brevo’s automation shows its value. The platform includes tools for <GlossaryLink slug="list-hygiene" className="text-[#0B162A] hover:underline">list
        hygiene</GlossaryLink>, email warm-up, and sender reputation monitoring. You can run deliverability tests
        before a campaign goes out, check authentication protocols (like DKIM, SPF, DMARC), and track bounce rates
        and spam complaints. For businesses that rely on reaching the inbox every time, these tools reduce the risk
        of deliverability issues derailing a campaign.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brevo’s automation extends beyond email. The same workflows can trigger SMS, WhatsApp, or even live chat
        messages, so your follow-up is not limited to the inbox. You can set up multi-channel campaigns that keep
        messaging consistent across email, text, and chat, with each channel picking up where the last left off.
        This is especially useful for time-sensitive offers or reminders (like appointment confirmations or flash
        sales), where speed and relevance drive results.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, the real impact is in time saved and errors avoided. Instead of
        spending hours each week sorting lists and scheduling emails, your team sets up the rules once and lets
        Brevo handle the rest. Every campaign is tracked, every outcome is logged, and every recipient gets a
        message that feels personal, even when your team is focused elsewhere. This is how Brevo turns the promise
        of personalized email marketing into a practical, everyday tool for small teams.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-brevo-delivers-true-automation-for-personalized-campaigns" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Brevo delivers true automation for personalized campaigns
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
              <h2 id="how-brevo-delivers-true-automation-for-personalized-campaigns-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Brevo delivers true automation for personalized campaigns
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
