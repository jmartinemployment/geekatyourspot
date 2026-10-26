import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Brevo sits at the intersection of affordability, automation depth, and practical personalization, making it
        a strong fit for small businesses in South Florida that want real results from their email marketing without
        the overhead of enterprise systems. Unlike all-in-one suites that force you to pay for features you will
        never use, or barebones platforms that leave you doing most of the work by hand, Brevo focuses on automating
        the parts of personalized email campaigns that drive engagement and conversions, without adding complexity
        that stalls a small team.</p>
      <p className="text-base text-white shadow-text pt-3">
        In the local market, buyers often weigh Brevo against platforms like <Link id={`tools-marketing-personalized-email-campaigns-brevo-comparing-mailchimp${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/mailchimp" className="text-[#0B162A] hover:underline">Mailchimp</Link>,
        Klaviyo, and <Link id={`tools-marketing-personalized-email-campaigns-brevo-comparing-activecampaign${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign" className="text-[#0B162A] hover:underline">ActiveCampaign</Link>.
        Each has its own strengths, but the tradeoffs are clear when you look at what matters for a small team.
        Mailchimp is well known for its ease of use and broad template library, but it quickly gets expensive as
        your list grows and limits automation on lower tiers. Klaviyo leads on ecommerce-specific features and deep
        segmentation, but its price and learning curve are overkill for many service and retail businesses in
        Miami-Dade or Broward. ActiveCampaign offers powerful automation and CRM tools, but the setup and ongoing
        management often require more technical skill and time than a small business can spare.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brevo’s approach is different. The free plan includes up to 9,000 emails per month (capped at 300 per day)
        and supports unlimited automation workflows for up to 2,000 contacts (<a id={`tools-marketing-personalized-email-campaigns-brevo-comparing-source-brevo-com${idSuffix}`} href="https://www.brevo.com/all-wp-components/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Brevo</a>,
        as of Oct 26, 2026). This makes it possible for even a lean team to set up triggered campaigns, segment by
        behavior or demographics, and schedule delivery for when recipients are most likely to open, without paying
        a premium or hiring a specialist. Paid plans start at $9 per month, which lifts the daily cap and adds more
        sending volume, and the standard tier at $18 adds advanced features like A/B testing and send-time
        optimization (<a id={`tools-marketing-personalized-email-campaigns-brevo-comparing-source-brevo-com-2${idSuffix}`} href="https://www.brevo.com/blog/b2b-marketing-automation/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Brevo</a>,
        as of Oct 26, 2026). This pricing structure means a small business can start with real automation and scale
        up only when needed, not before.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real difference is in how Brevo handles the pain points that hold small teams back. Where other
        platforms require manual segmentation or batch-and-blast sending, Brevo’s automation engine lets you set
        rules based on customer actions, like a website visit, a past purchase, or a lapsed subscription, so each
        recipient gets content matched to their interests. The platform’s dynamic content and AI-driven send-time
        optimization go beyond just dropping a first name into the subject line. Instead, they deliver messages that
        reflect real customer behavior and preferences, which is what drives higher open and <GlossaryLink slug="click-through-rate" className="text-[#0B162A] hover:underline">click
        rates</GlossaryLink>. AMS, for example, saw a 15% increase in open rates after switching to Brevo’s
        send-at-best-time function, a result that speaks to the impact of matching delivery to the recipient’s
        habits rather than a fixed schedule (<a id={`tools-marketing-personalized-email-campaigns-brevo-comparing-source-brevo-com-3${idSuffix}`} href="https://www.brevo.com/blog/best-voip-services/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Brevo</a>,
        as of Oct 26, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        Brevo also addresses deliverability, which many small businesses overlook until it becomes a problem. Unlike
        some budget tools that leave you exposed to spam filters or poor sender reputation, Brevo includes built-in
        email warm-up, deliverability monitoring, and support for authentication protocols like DKIM, SPF, and
        DMARC. These features help your emails reach the inbox, not the spam folder, and protect your domain’s
        reputation as you grow. For teams sending transactional or time-sensitive messages, like booking
        confirmations, reminders, or follow-ups, this reliability is critical. Kenya Airways, a high-volume sender,
        relies on Brevo’s transactional email API to deliver between 300,000 and 400,000 emails per month, a scale
        that would expose any flaws in deliverability or automation (<a id={`tools-marketing-personalized-email-campaigns-brevo-comparing-source-brevo-com-4${idSuffix}`} href="https://www.brevo.com/success-stories/kenya-airways-success-story/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Brevo</a>,
        as of Oct 26, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        Brevo’s integrations and data handling are also tailored for teams that want to connect their marketing with
        the rest of their business. The platform supports webhooks and direct integrations with tools like
        Contentsquare and Airtable, letting you trigger campaigns based on real-time data or sync customer
        information across systems. This is not just a technical nicety, it means you can automate follow-up after a
        web inquiry, personalize offers based on purchase history, or send service reminders without manual work. In
        a small business where every hour counts, this level of automation is the difference between a campaign that
        runs itself and one that gets dropped when things get busy.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brevo is not the right tool if you need deep ecommerce analytics, advanced CRM features, or support for
        massive lists out of the box. For those, Klaviyo or ActiveCampaign may be a better fit, though at a higher
        cost and with more setup. But for most small businesses in South Florida, especially those looking to
        automate personalized email campaigns without hiring a full-time marketer, Brevo’s balance of automation,
        affordability, and ease of use is hard to match. Its feature set is built for the real-world constraints of
        a small team: not just what looks good in a demo, but what saves hours and delivers more sales in practice.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are comparing options, focus on what actually changes for your business: how much manual work you can
        remove, how reliably your emails get read, and whether the platform grows with you without forcing an
        upgrade before you are ready. Brevo’s track record with small teams, its transparent pricing, and its
        automation depth make it a strong contender wherever personalized, automated campaigns, not just generic
        blasts, are the goal.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="where-brevo-stands-against-other-marketing-automation-options-for-small-businesses" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Where Brevo stands against other marketing automation options for small businesses
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="where-brevo-stands-against-other-marketing-automation-options-for-small-businesses-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Where Brevo stands against other marketing automation options for small businesses
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
