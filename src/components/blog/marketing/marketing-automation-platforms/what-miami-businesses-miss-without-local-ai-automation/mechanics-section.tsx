import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MechanicsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Automating Personalized Email Campaigns changes the entire process from slow, manual batch sending to a
        system that delivers relevant messages to each contact, triggered by their own actions or stage in the <GlossaryLink slug="customer-journey" className="text-[#0B162A] hover:underline">customer
        journey</GlossaryLink>. Instead of managing lists, writing small-batch copy, and manually sending reminders,
        your team focuses on strategy and reviewing results. The mechanics follow a clear order: define your
        objectives, assess <GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data quality</GlossaryLink>,
        select the right platform, and roll out with a controlled pilot. Each step unlocks a new level of speed and
        accuracy.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is aligning on business goals. Here, the point is to set a measurable target, more booked
        appointments, higher event attendance, more online orders, that AI-driven email can actually influence.
        Instead of aiming for a vague increase in open rates, you map which customer actions matter most and what a
        successful conversion looks like for your business. This clarity frames every decision that follows.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next is data quality assessment. This is where most implementations stall if skipped. If your list is split
        across a web form, a spreadsheet, and a CRM, standardizing it is not optional. The strongest results come
        when each contact record has not just an email address but at least one or two attributes that matter, like
        service interest, last interaction, or location. This is where platforms like Brevo and <Link id={`blog-marketing-personalized-email-campaigns-mechanics-moosend${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/moosend" className="text-[#0B162A] hover:underline">Moosend</Link> stand
        out. Brevo’s segmentation tools can automatically group contacts by behavior or web activity, while Moosend
        uses <GlossaryLink slug="contact-tagging" className="text-[#0B162A] hover:underline">tags</GlossaryLink> and
        segments to separate interests or customer stages. Both automate what used to be a manual cut-and-paste job,
        and both include tools to clean lists and protect <GlossaryLink slug="sender-reputation" className="text-[#0B162A] hover:underline">sender
        reputation</GlossaryLink> before a campaign ever goes out.</p>
      <p className="text-base text-white shadow-text pt-3">
        The third phase is platform selection and technical setup. Here, the choice is not about the most features
        but about what fits the current stack and team. For example, <Link id={`blog-marketing-personalized-email-campaigns-mechanics-mailerlite${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/mailerlite" className="text-[#0B162A] hover:underline">MailerLite</Link> is
        built for small teams who want to automate follow-up sequences and keep branding consistent without advanced
        technical help. Its visual workflow builder lets you set up introductory sequences and automate recurring
        emails. <Link id={`blog-marketing-personalized-email-campaigns-mechanics-getresponse${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse" className="text-[#0B162A] hover:underline">GetResponse</Link> excels
        when leads come in from different places, website forms, event signups, or landing pages, and need tailored
        follow-up sequences for each channel. GetResponse can connect these inputs to specific <GlossaryLink slug="lead-nurturing" className="text-[#0B162A] hover:underline">nurture
        flows</GlossaryLink>, so every lead receives the right next step without staff intervention.</p>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`blog-marketing-personalized-email-campaigns-mechanics-activecampaign${idSuffix}`} href="/tools/marketing/active-campaign" className="text-[#0B162A] hover:underline">ActiveCampaign</Link> is
        the pick where sales and marketing need to work together. Its <GlossaryLink slug="automation-workflow" className="text-[#0B162A] hover:underline">workflow
        automation</GlossaryLink> is triggered by actions a prospect takes, like submitting a form or opening a
        proposal, so follow-up is never left to chance. ActiveCampaign also brings in CRM data and <GlossaryLink slug="lead-scoring" className="text-[#0B162A] hover:underline">lead
        scoring</GlossaryLink>, so qualified prospects get timely, relevant emails, and the team can prioritize
        outreach. <Link id={`blog-marketing-personalized-email-campaigns-mechanics-mailchimp${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/mailchimp" className="text-[#0B162A] hover:underline">Mailchimp</Link>,
        meanwhile, is the all-in-one option for small businesses that want to start simple and grow into more
        advanced automation. Its AI features suggest subject lines, optimize send times, and offer pre-built
        templates for common workflows like <GlossaryLink slug="abandoned-cart-email" className="text-[#0B162A] hover:underline">abandoned
        cart reminders</GlossaryLink> and post-purchase follow-ups. Mailchimp’s free tier is a practical starting
        point for many local small businesses, letting you validate what works before committing to a larger plan.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the platform is live, the outreach changes from “send to all” to dynamic, behavior-triggered sequences.
        Moosend and Brevo both support multi-step campaigns that adapt based on each subscriber’s engagement, so an
        interested lead receives an offer, while a cold contact gets a win-back sequence. GetResponse automates the
        decision logic for who gets what and when, and MailerLite’s reporting shows in real time which sequences are
        leading to calls, bookings, or sales. All of this happens with minimal manual input after setup, freeing
        your staff to focus on high-value tasks.</p>
      <p className="text-base text-white shadow-text pt-3">
        The last piece is measurement and review. Every major platform discussed, Brevo, GetResponse, MailerLite,
        Moosend, ActiveCampaign, and Mailchimp, offers dashboard analytics that show opens, clicks, conversions, and <GlossaryLink slug="return-on-investment" className="text-[#0B162A] hover:underline">ROI</GlossaryLink> in
        one place. Brevo’s AI highlights what is working, and Mailchimp’s <GlossaryLink slug="predictive-analytics" className="text-[#0B162A] hover:underline">predictive
        analytics</GlossaryLink> can even flag which contacts are ready to buy or at risk of churning. This <GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback
        loop</GlossaryLink> closes the gap between marketing activity and business outcomes, letting you refine
        campaigns quickly and prove results to stakeholders.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-changes-when-personalized-email-campaigns-are-automated-step-by-step" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What changes when Personalized Email Campaigns are automated, step by step
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-changes-when-personalized-email-campaigns-are-automated-step-by-step-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What changes when Personalized Email Campaigns are automated, step by step
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
