import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Brevo is designed for small businesses that want to automate personalized email campaigns without the
        overhead of a dedicated marketing department or the cost of enterprise software. If your team is stretched
        thin, relies on a mix of email, text, and manual reminders, and needs to reach customers with messages that
        actually get read, Brevo is built for you. Its automation tools, behavioral segmentation, and AI-driven
        delivery take the guesswork and manual labor out of campaign management, letting you focus on running your
        business instead of chasing emails.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform is especially well suited for service businesses, local retailers, hospitality operators, and
        professional firms in Miami-Dade, Broward, and Palm Beach counties. These are teams where the owner, office
        manager, or a single staff member wears the marketing hat and needs to make every customer touchpoint count.
        If you want to send appointment reminders, follow up on quotes, re-engage lapsed customers, or run targeted
        promotions without hiring outside help, Brevo’s automation and personalization features are a direct fit.
        Its free plan gives you room to experiment and scale, while paid tiers add volume and advanced testing as
        your needs grow.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brevo is also a fit for organizations that want to coordinate campaigns across channels, email, SMS,
        WhatsApp, and chat, without losing sight of who got what and when. Its CRM and segmentation tools centralize
        customer data, so you can automate cross-channel follow-up and keep messaging consistent. This matters for
        teams that need to avoid overlap, prevent message fatigue, and track which campaigns drive results. The
        platform’s reporting and analytics give you real-time insight into opens, clicks, and conversions, so you
        can see what is working and adjust quickly.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, Brevo is not for everyone. If your business depends on advanced ecommerce analytics, multi-country
        product catalogs, or deep CRM workflows with custom objects and sales pipelines, you may outgrow Brevo’s
        core feature set. Platforms like Klaviyo or ActiveCampaign offer more depth in these areas, but at a higher
        price and with more complexity. Likewise, if you need large-scale transactional messaging (beyond the free
        plan’s 300 daily emails) or run campaigns for hundreds of thousands of contacts, you will need to move to a
        paid plan or consider a platform built for enterprise volume (<a id={`tools-marketing-personalized-email-campaigns-brevo-right-fit-source-brevo-com${idSuffix}`} href="https://www.brevo.com/success-stories/kenya-airways-success-story/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Brevo</a>,
        as of Oct 26, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        It is also not the right choice if you want a tool that does everything, full-scale web development,
        advanced ad retargeting, or deep social media scheduling, in one place. Brevo focuses on doing automated,
        personalized email and multichannel messaging well, not on being a jack-of-all-trades. For most small
        businesses, this is an advantage: you get a tool that is easy to use, quick to set up, and does not bury you
        in features you will never touch.</p>
      <p className="text-base text-white shadow-text pt-3">
        The fastest way to know if Brevo fits your needs is to map your current communication pain points against
        what the platform automates. If your team spends hours a week copying and pasting messages, following up
        manually, or trying to segment lists in spreadsheets, Brevo can return that time to you. If you are not sure
        whether your emails are reaching the inbox, or if tracking results means toggling between three different
        dashboards, Brevo’s deliverability tools and unified reporting will close those gaps.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moving forward means starting with your real business objectives. Define what a successful campaign looks
        like: more appointments booked, higher open rates, or more repeat customers. Assess your contact data, how
        clean it is, where it lives, and what attributes you track. Then, use Brevo’s automation engine to build
        workflows that match your actual customer journeys. Start with a pilot campaign, measure the results, and
        expand as you see success. For small businesses in South Florida, this approach means you can finally move
        beyond generic blasts and manual reminders to a system that delivers relevant messages, on time, at scale.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are ready to take the next step, work with a local implementation partner like Geek @ Your Spot. They
        will help you set up Brevo to fit your environment, map your data, and configure automation that matches
        your workflows, not just what comes out of the box. The right implementation ensures you get the value of
        automation without the headaches of a DIY rollout. The result is a marketing system that saves you time,
        drives more sales, and grows with your business as your needs evolve.</p>
      <p className="text-base text-white shadow-text pt-3">
        Our post <Link id={`tools-marketing-personalized-email-campaigns-brevo-xlink-blog${idSuffix}`} href="/blog/marketing/marketing-automation-platforms/what-miami-businesses-miss-without-local-ai-automation" className="text-[#C83803] hover:underline">What Miami Businesses Miss Without Local AI Automation</Link> goes through Brevo’s own figures on send timing and open rates alongside what Mailchimp, GetResponse, MailerLite and ActiveCampaign report, and names the conditions, clean contact data and segments that mean something, without which those lifts do not appear on a list of a few thousand contacts. Brevo’s free plan, 9,000 emails a month at 300 a day for up to 2,000 contacts, makes it the cheapest place to test that for yourself, and the post is the reading that keeps the test honest. The four-phase assessment in our <Link id={`tools-marketing-personalized-email-campaigns-brevo-xlink-pillar${idSuffix}`} href="/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns" className="text-[#C83803] hover:underline">AI Personalized Email Campaigns</Link> guide decides what the first sequence measures and which contact fields have to be filled before a segment is worth sending to.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a href="#consultationAppointment2xl" id={`tools-marketing-personalized-email-campaigns-brevo-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
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
        <li>How are subscription permissions, unsubscribes, and do-not-contact records documented?</li>
        <li>Besides names and email addresses, what do you know about each contact?</li>
        <li>Is that information stored in one system or spread across spreadsheets, inboxes, and other applications?</li>
        <li>Do different customers need different offers or messages? Give me two examples.</li>
        <li>Which customer details should never be sent to an AI service or included in an email?</li>
        <li>What should start an <GlossaryLink slug="email-sequence">email sequence</GlossaryLink>, a form submission,
          appointment, quote request, purchase, or period of inactivity?</li>
        <li>Should everyone receive the same sequence, or should it change based on their interests and actions?</li>
        <li>What should stop the emails, a reply, booking, purchase, unsubscribe, or staff intervention?</li>
        <li>What email, CRM, website, booking, and online-store systems do you already use?</li>
        <li>Do you need only email, or also <GlossaryLink slug="landing-page">landing pages</GlossaryLink>, forms, SMS,
          or other channels?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-brevo-is-for-who-should-look-elsewhere-and-how-to-move-forward" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Brevo is for, who should look elsewhere, and how to move forward
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-brevo-is-for-who-should-look-elsewhere-and-how-to-move-forward-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Brevo is for, who should look elsewhere, and how to move forward
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
