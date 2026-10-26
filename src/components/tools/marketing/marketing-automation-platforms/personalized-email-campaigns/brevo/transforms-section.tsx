import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Brevo automates the hardest parts of personalized email campaigns, so small teams can reach the right people
        with the right message at the right time, without the manual grind. Brevo’s automation means you do not have
        to hand-segment lists or guess when to send. Instead, you can focus on your business while the platform
        handles the follow-up, personalization, and delivery details that make campaigns actually work.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start with segmentation. Brevo lets you group contacts by behavior, such as past purchases or website
        visits, and by attributes like location or engagement. This means you target each segment with messages that
        fit their interests, all set up once and running automatically. You do not need to export lists or update
        them by hand. When a customer takes an action, like clicking a link or making a purchase, Brevo updates
        their segment and can <GlossaryLink slug="trigger" className="text-[#0B162A] hover:underline">trigger</GlossaryLink> a
        new campaign tailored to that behavior. This saves hours each week and ensures no one falls through the
        cracks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Personalization goes beyond just dropping a name in the subject line. Brevo uses <GlossaryLink slug="dynamic-content" className="text-[#0B162A] hover:underline">dynamic
        content</GlossaryLink> and behavior-based triggers to tailor the body of each email to the recipient. If a
        customer browsed a product but did not buy, they get a message about that product. If they made a purchase,
        they might get a follow-up with accessories or a thank-you note. You set the rules, and Brevo handles the
        details. This level of personalization would take a person hours to do by hand, but with Brevo, it happens
        in the background for every campaign.</p>
      <p className="text-base text-white shadow-text pt-3">
        Timing is handled by Brevo’s <GlossaryLink slug="send-time-optimization" className="text-[#0B162A] hover:underline">send-time
        optimization</GlossaryLink>. Instead of blasting everyone at once, Brevo analyzes when each contact is most
        likely to open and schedules delivery for that window. One customer, AMS, saw a 15% jump in open rates after
        switching to Brevo’s Send at Best Time feature (<a id={`tools-marketing-personalized-email-campaigns-brevo-transforms-source-brevo-com${idSuffix}`} href="https://www.brevo.com/blog/best-voip-services/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Brevo</a>,
        as of Oct 26, 2026). For a small business, that means more people actually see and act on your messages, and
        you do not waste effort on emails that get buried.</p>
      <p className="text-base text-white shadow-text pt-3">
        Follow-up is no longer a manual task. Brevo’s automation can send reminders, <GlossaryLink slug="re-engagement-campaign" className="text-[#0B162A] hover:underline">re-engagement
        emails</GlossaryLink>, or special offers based on what each contact has done, or not done. If someone
        ignores a message, you can trigger a text or a different email automatically. This keeps your brand top of
        mind without your team chasing every lead by hand.</p>
      <blockquote cite="https://www.brevo.com/ecommerce-email-marketing-software/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Send email marketing campaigns that convert, from abandoned cart emails to personalized product
        recommendations.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        <GlossaryLink slug="email-deliverability" className="text-[#0B162A] hover:underline">Deliverability</GlossaryLink> is
        built in. Brevo monitors your sender reputation, warms up new domains, and checks that your technical setup
        (like DKIM, SPF, and DMARC) is correct. The platform also helps you keep your lists clean, reducing <GlossaryLink slug="bounce-rate" className="text-[#0B162A] hover:underline">bounce
        rates</GlossaryLink> and making sure your emails land in the inbox, not the spam folder. This is work that
        would take a technical expert hours each month, but Brevo handles it as part of the platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        Analytics are unified. Brevo gives you a dashboard that shows opens, clicks, and conversions for every
        campaign, with AI-driven highlights pointing out what is working and what is not. You do not need to piece
        together data from multiple sources or guess which campaign drove sales. This lets you make decisions
        quickly, double down on what works, and cut what does not. For a small business, this means more sales with
        less trial and error.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brevo’s free plan covers up to 9,000 emails a month, with a daily cap of 300, and includes unlimited
        automations for up to 2,000 contacts (<a id={`tools-marketing-personalized-email-campaigns-brevo-transforms-source-brevo-com-2${idSuffix}`} href="https://www.brevo.com/all-wp-components/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Brevo</a>,
        as of Oct 26, 2026). This makes it affordable for teams that need to watch every dollar. Paid plans remove
        the daily cap and add advanced features like <GlossaryLink slug="a-b-testing" className="text-[#0B162A] hover:underline">A/B
        testing</GlossaryLink> and send-time optimization, so you can scale as your business grows. You do not pay
        for features you do not need, and you can start for free without worrying about sudden cuts or hidden costs.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams that need to coordinate email with <GlossaryLink slug="sms-marketing" className="text-[#0B162A] hover:underline">SMS</GlossaryLink> or
        chat, Brevo brings these channels into one platform. You can automate follow-ups across email and text,
        making sure customers get reminders or offers where they are most likely to see them. This keeps
        communication consistent and reduces the risk of a message getting lost between apps or staff members.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brevo’s automation does not just save time, it changes what your team can do. Instead of spending hours on
        repetitive tasks, your staff can focus on building relationships, closing sales, or improving your service.
        The platform removes the need for technical expertise, endless list management, or constant monitoring. You
        set the rules once, and Brevo keeps your campaigns running, adapting as your audience grows or changes.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, where every customer counts and every hour matters, Brevo turns
        personalized email campaigns from a burden into a competitive advantage. You get the results of a big team
        without hiring one, and you stop losing leads to faster, more consistent competitors.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-brevo-removes-manual-work-from-personalized-email-campaigns" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Brevo removes manual work from Personalized Email Campaigns
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-brevo-removes-manual-work-from-personalized-email-campaigns-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Brevo removes manual work from Personalized Email Campaigns
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
