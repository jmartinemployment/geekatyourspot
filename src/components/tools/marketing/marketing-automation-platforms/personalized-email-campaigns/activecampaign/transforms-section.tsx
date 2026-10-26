import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        ActiveCampaign eliminates the need for manual <GlossaryLink slug="email-segmentation" className="text-[#0B162A] hover:underline">segmentation</GlossaryLink>,
        follow-up, and list management by connecting sales, marketing, and customer data in one place. For a small
        team, this means the system handles the heavy lifting of sending the right message to the right person at
        the right time, without anyone having to chase down details or remember every task. The result is more leads
        followed up, more relevant emails sent, and more time for staff to focus on conversations that close
        business.</p>
      <p className="text-base text-white shadow-text pt-3">
        With ActiveCampaign, every new inquiry or customer action can <GlossaryLink slug="trigger" className="text-[#0B162A] hover:underline">trigger</GlossaryLink> an <GlossaryLink slug="automation-workflow" className="text-[#0B162A] hover:underline">automated
        workflow</GlossaryLink>. When a prospect fills out a form or clicks a key link, the system can send a
        tailored follow-up email, assign a task to sales, or move the contact into a specific pipeline stage,
        immediately and without manual intervention. This closes the gap where leads would otherwise be lost waiting
        for someone to notice them. Teams no longer need to check multiple inboxes or keep mental lists of who needs
        a reply: the system routes and tracks each step, so nothing falls through the cracks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Segmentation is automatic and granular. ActiveCampaign pulls together all available data, website visits,
        email opens, purchase history, and more, to group contacts by behavior, location, or engagement level. This
        lets small teams deliver highly personalized emails at scale, without hand-sorting lists or guessing what
        each recipient wants. For example, the platform can identify contacts who opened a recent campaign but did
        not purchase, and send them a targeted follow-up offer. It can also recognize high-intent signals, like
        someone visiting a pricing page, and alert sales to reach out directly.</p>
      <p className="text-base text-white shadow-text pt-3">
        <GlossaryLink slug="lead-scoring" className="text-[#0B162A] hover:underline">Lead scoring</GlossaryLink> is
        built in and dynamic. The system assigns points to each contact based on actions and demographic fit, so
        staff can see at a glance who is most likely to buy. This means no more wasting time on low-value leads or
        missing out on prospects who are ready to convert. When a contact crosses a set score, ActiveCampaign can
        automatically create a deal, notify a sales rep, or start a <GlossaryLink slug="lead-nurturing" className="text-[#0B162A] hover:underline">nurture
        sequence</GlossaryLink>, removing the need for manual review and follow-up scheduling. Every <GlossaryLink slug="qualified-lead" className="text-[#0B162A] hover:underline">qualified
        lead</GlossaryLink> is tracked and prioritized, so the team always knows where to focus their efforts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Personalization goes beyond just using a first name. ActiveCampaign supports <GlossaryLink slug="dynamic-content" className="text-[#0B162A] hover:underline">conditional
        content</GlossaryLink> within emails, so different recipients see offers, images, or messages tailored to
        their interests and past behavior. Dynamic segments update in real time, so as soon as a contact’s data
        changes, they receive the most relevant communication. This level of automation ensures that every email
        feels like a one-on-one conversation, even when sent to thousands of people, and it does so without hours of
        manual editing or list building.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automated workflows extend to proposal follow-ups and sales sequences. After a quote is sent, ActiveCampaign
        can schedule reminders, send check-in emails at set intervals, and move contacts through the pipeline based
        on their responses or lack thereof. This keeps deals moving forward without relying on salespeople to
        remember every next step. For teams that often forget to follow up after sending proposals, this alone can
        mean the difference between a lost opportunity and a closed sale.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting is real-time and actionable. Instead of waiting weeks to see what worked, teams get instant
        feedback on campaign performance and pipeline status. ActiveCampaign’s reporting tools connect marketing
        activity directly to deal movement, so it is clear which emails or automations led to conversations,
        appointments, or sales. The platform’s AI-driven insights surface trends and recommend adjustments, making
        it easier to optimize campaigns on the fly and spot new opportunities without spending hours on
        spreadsheets.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses using e-commerce or other platforms, ActiveCampaign integrates with tools like Shopify and
        Facebook Custom Audiences. This means customer purchase data, order activity, and remarketing efforts are
        all visible in one place. The system can trigger personalized emails based on order history or sync
        audiences for targeted ads, so the marketing stays relevant and timely without extra manual steps.</p>
      <blockquote cite="https://www.activecampaign.com/use-cases/nurture-your-business" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        ActiveCampaign brings your business data into one place, so you can automate nurture sequences, manage
        leads, and discover new audiences—without the manual work.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        Automation templates and a visual workflow builder make setup fast, even for teams new to marketing
        automation. Pre-built recipes cover common tasks like <GlossaryLink slug="welcome-series" className="text-[#0B162A] hover:underline">welcome
        sequences</GlossaryLink>, <GlossaryLink slug="abandoned-cart-email" className="text-[#0B162A] hover:underline">abandoned
        cart reminders</GlossaryLink>, and <GlossaryLink slug="re-engagement-campaign" className="text-[#0B162A] hover:underline">re-engagement
        campaigns</GlossaryLink>, so a small business can launch effective campaigns without starting from scratch.
        As the business grows, these automations can be customized and extended, all without adding more manual work
        or staff. The platform’s drag-and-drop editor and conditional logic mean changes can be made quickly, and
        every workflow adapts as the business’s needs evolve.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real impact is in the hours returned to the team each week. Instead of spending time exporting lists,
        writing repetitive emails, or tracking tasks across multiple systems, staff can focus on building
        relationships and closing deals. Errors from manual entry and forgotten follow-ups disappear. Every lead is
        handled promptly, every customer gets a relevant message, and the business can scale its outreach without
        scaling its headcount. For a small business in Miami-Dade, Broward, or Palm Beach, this is how automation
        turns email from a chore into a growth engine, making personalized email campaigns both practical and
        profitable.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-activecampaign-removes-the-manual-work-from-personalized-email-campaigns" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How ActiveCampaign removes the manual work from Personalized Email Campaigns
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
              <h2 id="how-activecampaign-removes-the-manual-work-from-personalized-email-campaigns-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How ActiveCampaign removes the manual work from Personalized Email Campaigns
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
