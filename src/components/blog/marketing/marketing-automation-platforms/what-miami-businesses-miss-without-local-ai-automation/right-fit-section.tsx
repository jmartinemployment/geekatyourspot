import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Automating Personalized Email Campaigns is the right call when your business relies on consistent, timely
        communication and your team does not have the bandwidth to keep up manually. If you find that leads sit in
        your CRM for days without follow-up, or if your list is large enough that writing variations by hand takes
        more than an hour a week, automation pays for itself in saved labor and fewer missed opportunities. This is
        especially true for Miami-Dade, Broward, and Palm Beach small businesses where customer relationships are
        close and reputation spreads quickly. An ignored inquiry or a generic offer can mean losing not just one
        sale, but a referral chain.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation is also the right move when your contact data is already clean and you have a clear sense of your
        main customer segments. Platforms like Brevo, GetResponse, MailerLite, Moosend, ActiveCampaign, and
        Mailchimp each solve the problem of manual, error-prone email workflows by creating sequences that run on
        triggers, not memory. These tools are especially effective when your business needs to track which campaigns
        drive real action, opens, clicks, replies, bookings, so you can double down on what works and cut what
        doesn’t.</p>
      <p className="text-base text-white shadow-text pt-3">
        Each of those platforms is written up on its own page for a South Florida small business weighing it: <Link id={`blog-marketing-personalized-email-campaigns-right-fit-getresponse${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse" className="text-[#C83803] hover:underline">GetResponse</Link> for a team that wants forms, landing pages and email sequences in one place, with a free plan to start on; <Link id={`blog-marketing-personalized-email-campaigns-right-fit-mailchimp${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/mailchimp" className="text-[#C83803] hover:underline">Mailchimp</Link> for a first move past one message for everyone on a list that is still small; <Link id={`blog-marketing-personalized-email-campaigns-right-fit-mailerlite${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/mailerlite" className="text-[#C83803] hover:underline">MailerLite</Link> for a lean team that wants branded, automated email without paying for a full marketing suite; <Link id={`blog-marketing-personalized-email-campaigns-right-fit-moosend${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/moosend" className="text-[#C83803] hover:underline">Moosend</Link> for a store or publisher that needs to scale its sending without adding staff; <Link id={`blog-marketing-personalized-email-campaigns-right-fit-brevo${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/brevo" className="text-[#C83803] hover:underline">Brevo</Link> for a team that sends texts and appointment reminders as well as email and wants them all on one contact list, with a free plan of 9,000 emails a month to start on; and <Link id={`blog-marketing-personalized-email-campaigns-right-fit-activecampaign${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign" className="text-[#C83803] hover:underline">ActiveCampaign</Link> where sales and marketing follow-up have to run off the same triggers. Each page covers what the platform costs, what it connects to, how we implement it and where it is the wrong choice.</p>
      <p className="text-base text-white shadow-text pt-3">
        But there are clear cases where automating is not the best use of resources, at least not yet. If your
        contact data is outdated, incomplete, or scattered across email accounts, spreadsheets, and third-party
        forms, automating will only repeat the mess faster. No platform can fix a broken list or guess at missing
        customer preferences. If you are still experimenting with your offer, pricing, or target audience, running a
        wide-net manual campaign is sometimes the right call. You get feedback faster, learn what resonates, and
        avoid building out workflows for segments you later drop. Automation multiplies what’s already working; it
        does not find your product-market fit for you.</p>
      <p className="text-base text-white shadow-text pt-3">
        The manual approach still wins when you want to test a new campaign in a small, high-touch group, such as a
        handful of VIP customers or a one-off local event. Here, the personal touch of a hand-sent message or a
        custom note is worth the time. Automation also cannot replace genuine human insight. If your business
        thrives on relationships built over coffee or phone calls, and your list is under a hundred qualified
        contacts, you may not see enough time savings to justify the setup.</p>
      <p className="text-base text-white shadow-text pt-3">
        For most Miami-area small businesses, the next step is to define a measurable business outcome, more
        bookings, higher open rates, or faster reply times, and assess your current contact data. If your data is
        ready, choose the automation platform that fits your workflow and budget. Start with a pilot: automate one
        follow-up sequence for a specific segment and measure the difference in both engagement and labor saved. Use
        this first result as a benchmark for scaling. If the data is not ready, invest in cleaning and segmenting
        your list, so your first automation builds on a solid foundation. The right time to automate is when your
        data is good, your workflow is repeatable, and your team wants to reclaim hours for work that actually grows
        the business.</p>
      <p className="text-base text-white shadow-text pt-3">
        That is the assessment we run before any platform is chosen, and the full version is in our <Link id={`blog-marketing-personalized-email-campaigns-right-fit-pillar${idSuffix}`} href="/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns" className="text-[#C83803] hover:underline">AI Personalized Email Campaigns</Link> guide: the four phases from business outcome to pilot rollout, what the contact data has to hold before segmentation means anything, who on your team owns triggers, content and review, and how the first sequence is built and measured before anything scales.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a href="#consultationAppointment2xl" id={`blog-marketing-personalized-email-campaigns-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>What is the main result you want: more appointments, more completed purchases, repeat business, or
          reactivating past customers?</li>
        <li>Who would receive these emails, new inquiries, subscribers, existing customers, inactive customers, or
          people who have never contacted you?</li>
        <li>Where are you losing opportunities today, after an inquiry, after a quote, before checkout, or after the
          first purchase?</li>
        <li>What do you want someone to do after reading the email?</li>
        <li>What follow-up do you send now, and where does it stop?</li>
        <li>How many contacts do you have, and where did they come from?</li>
        <li>How are subscription permissions, <GlossaryLink slug="opt-out">unsubscribes</GlossaryLink>, and
          do-not-contact records documented?</li>
        <li>Besides names and email addresses, what do you know about each contact?</li>
        <li>Is that information stored in one system or spread across spreadsheets, inboxes, and other applications?</li>
        <li>Do different customers need different offers or messages? Give me two examples.</li>
        <li>Which customer details should never be sent to an AI service or included in an email?</li>
        <li>What should start an email sequence, a form submission, appointment, quote request, purchase, or period of
          inactivity?</li>
        <li>Should everyone receive the same sequence, or should it change based on their interests and actions?</li>
        <li>What should stop the emails, a reply, booking, purchase, unsubscribe, or staff intervention?</li>
        <li>What email, CRM, website, booking, and online-store systems do you already use?</li>
        <li>Do you need only email, or also landing pages, forms, <GlossaryLink slug="sms-marketing">SMS</GlossaryLink>,
          or other channels?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="when-automating-personalized-email-campaigns-is-the-right-call-when-it-is-not-and-what-this-reader-does-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When automating Personalized Email Campaigns is the right call, when it is not, and what this reader does next
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="when-automating-personalized-email-campaigns-is-the-right-call-when-it-is-not-and-what-this-reader-does-next-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When automating Personalized Email Campaigns is the right call, when it is not, and what this reader does next
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
