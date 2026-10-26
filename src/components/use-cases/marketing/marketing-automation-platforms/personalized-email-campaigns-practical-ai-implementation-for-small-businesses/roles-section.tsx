import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RolesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Implementing personalized email automation changes the daily work for everyone involved in your customer
        communication, from the owner to front-line staff. The biggest impact is felt in marketing, sales, and
        anyone who used to spend time manually following up with leads, updating lists, or troubleshooting delivery
        problems. Instead of chasing routine tasks, they shift to higher-value work, reviewing campaign results,
        refining messaging, and handling only the exceptions that automation cannot solve.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business, this means the owner and any staff who handled manual outreach see an immediate drop
        in repetitive work. Where staff once spent hours each week exporting leads, segmenting lists, or
        copy-pasting follow-up emails, automation tools like MailerLite and Moosend handle these steps in the
        background. MailerLite, for example, automates introductory sequences and connects forms to workflows, so
        staff are no longer responsible for sending welcome emails or basic information after each signup. Moosend
        lets teams build multi-step sequences with conditions, so follow-ups happen on schedule without anyone
        having to remember or chase them.</p>
      <p className="text-base text-white shadow-text pt-3">
        The marketing team’s role becomes less about execution and more about strategy and oversight. Instead of
        writing each message or deciding who gets which email, they design workflows, monitor engagement, and use
        reporting tools to spot what is working and what needs improvement. GetResponse’s platform, for instance,
        offers AI-assisted content creation and unlimited workflows (on the Marketer plan), so marketers can focus
        on crafting the right messages for each segment and testing new ideas, not building every campaign from
        scratch. Staff time shifts from production to review: looking at open rates, adjusting segments, and
        refining offers based on live data.</p>
      <p className="text-base text-white shadow-text pt-3">
        Sales teams also see a shift. In the old model, a salesperson might spend half their day sending follow-ups,
        checking who replied, and updating contact records. With ActiveCampaign or Brevo, follow-up workflows
        trigger automatically when a prospect takes a defined action, submitting a form, booking an appointment, or
        clicking a key link. Sales staff can now focus on real conversations with qualified leads, not tracking who
        needs a reminder. ActiveCampaign’s integration with CRM data and <GlossaryLink slug="lead-scoring" className="text-[#0B162A] hover:underline">lead
        scoring</GlossaryLink> means staff can see at a glance which prospects are most engaged and ready for a
        call, instead of guessing or missing high-potential opportunities.</p>
      <p className="text-base text-white shadow-text pt-3">
        Customer service and support teams see fewer routine emails and more time to address complex or urgent
        issues. When <GlossaryLink slug="transactional-email" className="text-[#0B162A] hover:underline">transactional
        emails</GlossaryLink> (like confirmations and reminders) are automated with Mailchimp or Brevo, support can
        concentrate on solving real problems, not resending missed messages or chasing customers for replies.
        Automation also means fewer errors: when every contact receives the right message at the right time, there
        are fewer complaints about missed appointments, duplicate messages, or irrelevant offers.</p>
      <p className="text-base text-white shadow-text pt-3">
        For the business owner, the change is visibility and control. With a platform like Mailchimp, reporting
        dashboards consolidate campaign results, so owners can see what is working without waiting for a staff
        update. Instead of worrying about whether leads are being followed up or if a promotion was sent on time,
        the owner can focus on strategic decisions and growth. Automation platforms provide clear logs and
        analytics, showing which emails drive appointments, sales, or replies, and which need adjustment.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, the move to automated, personalized email campaigns turns manual, error-prone work into a system
        that runs itself. Staff are freed from the grind of daily list management and follow-up, and can focus on
        what moves the business forward: talking to customers, improving offers, and acting on real results. The
        change is not just about efficiency, it is about letting your people do the work that brings in revenue, not
        the work that keeps the lights on. This is where the gains in productivity and morale show up, and why a
        serious automation rollout is rarely reversed once the benefits are clear in practice.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-people-who-change-when-personalized-email-automation-goes-live" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The People Who Change When Personalized Email Automation Goes Live
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
              <h2 id="the-people-who-change-when-personalized-email-automation-goes-live-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The People Who Change When Personalized Email Automation Goes Live
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
