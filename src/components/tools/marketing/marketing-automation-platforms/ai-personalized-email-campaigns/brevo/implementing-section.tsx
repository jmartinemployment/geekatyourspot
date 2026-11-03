import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Launching Brevo in a small business is fastest when you start with clear goals, use its built-in templates,
        and connect your existing data sources up front. Most teams in Miami-Dade, Broward or Palm Beach counties
        can move from first login to sending live personalized email campaigns in a matter of days, not weeks, if
        they follow a phased rollout and avoid over-customizing from day one.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is defining what you want Brevo to do for you. For most small teams, this means automating
        regular follow-ups, segmenting contacts by real activity, and sending messages at the time each recipient is
        most likely to read them. Brevo’s workflow editor and automation templates are designed for this. You do not
        need to build logic from scratch or hire a developer. By starting with pre-built templates for common
        scenarios, like welcome emails, appointment reminders or re-engagement, you cut setup time and reduce
        errors.</p>
      <p className="text-base text-white shadow-text pt-3">
        Connecting your contact data is next. Brevo is made to import lists from spreadsheets, <GlossaryLink slug="crm">CRM</GlossaryLink> exports,
        or other email tools. Its import tools handle standard formats, and the system can store unlimited contacts
        even on the free plan. For small businesses that keep customer data in multiple places, this step is where
        Geek @ Your Spot’s experience with data mapping pays off. They help you match your fields, like first name,
        last purchase, or appointment date, to Brevo’s structure, so every automated message pulls the right detail.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once data is in, setting up automations is a guided process. The platform’s workflow builder lets you select
        a trigger (such as a contact joining a segment, a specific date, or a behavior like a link click), then
        define the message and timing. For example, you might automate a birthday offer that sends only to customers
        who have made a purchase in the past year, or a follow-up that triggers if someone does not open your first
        email. Brevo’s templates cover the most common use-cases, and its segmentation engine pulls in data from
        each contact’s record automatically.</p>
      <p className="text-base text-white shadow-text pt-3">
        Testing and review come before you go live. Brevo’s preview and test-send features show you exactly how each
        message will look for different recipients, using their real data. You can A/B test subject lines or content
        even on the free plan, which helps you see what works before the first campaign lands in a customer’s inbox.
        This is also where you check deliverability settings, DKIM, SPF, and DMARC records, to make sure emails
        avoid the spam folder. Brevo guides you through these steps, and Geek @ Your Spot can handle technical setup
        if your team is not comfortable editing DNS records.</p>
      <p className="text-base text-white shadow-text pt-3">
        A phased rollout is usually best. Start with one or two automated campaigns targeting your most important
        segment, such as new leads or past buyers. Monitor the results in Brevo’s dashboard, which shows opens,
        clicks, and conversions in real time. As you get comfortable, expand to more segments or add new triggers,
        like abandoned cart follow-ups or appointment reminders. Because Brevo’s automations and segmentation work
        at any scale, you do not need to rework your setup as your list grows.</p>
      <p className="text-base text-white shadow-text pt-3">
        What shortens the go-live process most is resisting the urge to customize everything from the start. Brevo’s
        default templates and workflows are built around the most effective campaign types for small businesses. By
        using these as your foundation, you can get live fast and adjust only where your business truly needs
        something different. Geek @ Your Spot’s approach is to get your first campaigns running quickly, then layer
        in more complexity as your team sees results and gains confidence.</p>
      <p className="text-base text-white shadow-text pt-3">
        The main delays come from unclear goals, scattered data, or trying to build complex logic before you have
        proof that it is needed. Brevo is designed to let you move fast, its free plan supports up to 9,000 emails
        per month and unlimited automations for up to 2,000 contacts, with no expiry or sudden cutoff (<a id={`tools-marketing-personalized-email-campaigns-brevo-implementing-source-brevo-com${idSuffix}`} href="https://www.brevo.com/all-wp-components/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Brevo</a>,
        as of Oct 26, 2026). For teams that need more volume or advanced features like A/B testing and send time
        optimization, paid plans are available and can be upgraded without downtime.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, the fastest path to value is: define your key segments and messages, map your data fields, use
        Brevo’s templates to launch your first automations, and test before scaling up. Geek @ Your Spot supports
        each step by handling integrations, data mapping, and technical setup, so you spend less time on the
        mechanics and more on growing your business.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-get-brevo-live-in-your-business-and-what-speeds-it-up" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it takes to get Brevo live in your business and what speeds it up
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-get-brevo-live-in-your-business-and-what-speeds-it-up-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it takes to get Brevo live in your business and what speeds it up
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
