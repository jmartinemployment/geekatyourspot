import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function SequenceSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Rolling out a personalized email automation system in a real small business means making changes that touch
        your data, your staff, and your daily customer contact from day one. The path from kickoff to live campaigns
        is not a straight line of clicking ‘activate’ on a few workflows. It is a managed process, and what happens
        in the real world often looks very different from the vendor’s demo.</p>
      <p className="text-base text-white shadow-text pt-3">
        The rollout starts with a short discovery, usually a consultation, to clarify what you want the project to
        achieve. This is not a formality: small businesses in West Palm Beach, Broward, and Miami-Dade often have
        different priorities than a national brand. For one, it might be filling appointments and reducing no-shows;
        for another, it is nurturing leads from multiple web forms and channels. Geek @ Your Spot’s method begins
        with a deep alignment on measurable objectives, so the automation is built around local business drivers,
        not generic metrics.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the target is clear, the next step is data quality assessment. Here is where most rollouts slow down.
        The consultant looks at where your contact data lives, spreadsheets, CRMs, web forms, or even paper sign-in
        sheets. The goal is to map all those sources into one validated list, with clear rules for merging,
        deduplication, and field standardization. For example, Moosend and GetResponse can segment contacts using
        tags and <GlossaryLink slug="engagement-score">engagement scores</GlossaryLink>, but if your data has
        missing fields or inconsistent entries, automation rules will misfire. Expect to spend time correcting
        formats, resolving duplicates, and setting up validation checks before any email goes out.</p>
      <p className="text-base text-white shadow-text pt-3">
        With data structured, the tech selection and architecture phase begins. Here, the platform is chosen based
        on your real requirements and the early decisions already made. Brevo’s free plan offers a low-risk start
        for businesses with limited email volume but a large contact base, and its automation can trigger emails
        based on customer behavior or appointment dates. If your leads come from multiple landing pages and forms,
        GetResponse connects those forms with automated nurture sequences, so every inquiry receives a timely and
        relevant follow-up. MailerLite’s visual workflow builder allows you to automate introductory messages, while
        ActiveCampaign links email activity to sales processes for teams that need tight coordination between
        marketing and sales.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the platform is selected, the consultant configures core automations, welcome sequences, lead nurture
        tracks, appointment reminders, and follow-ups, using templates and dynamic content blocks where possible.
        Mailchimp’s pre-built templates for welcome series, <GlossaryLink slug="abandoned-cart-email">abandoned
        carts</GlossaryLink>, and re-engagement campaigns make setup faster, and its AI can suggest subject lines
        and send times. Moosend’s workflow designer allows for building multi-step sequences with delays and
        conditions, which means that no customer gets left hanging after an initial inquiry. Expect the rollout to
        include at least one test run (a “smoke test”) to validate that all triggers, delays, and conditional paths
        work as intended.</p>
      <p className="text-base text-white shadow-text pt-3">
        At this point, approval processes are put in place. If you need management sign-off before campaigns go
        live, the workflow is set to route draft emails to reviewers. MailerLite and ActiveCampaign both support
        these review steps, ensuring nothing gets sent before a second pair of eyes checks for errors or off-brand
        messaging.</p>
      <p className="text-base text-white shadow-text pt-3">
        The rollout closes with a controlled pilot implementation. A subset of contacts, say, new leads from the
        past month, receives the first wave of automated messages. Metrics such as open rate, click-through,
        appointment bookings, or replies are tracked closely. Brevo’s single-dashboard analytics and Moosend’s
        engagement tracking allow the business owner and consultant to see what is working and where contacts are
        dropping out of the sequence. Any issues, missed triggers, faulty personalization, or timing errors, are
        corrected before the system is rolled out to the full list.</p>
      <p className="text-base text-white shadow-text pt-3">
        A hypothetical scenario illustrates the reality: a local law firm wants to automate follow-up for all web
        form inquiries. The consultant starts by reviewing the web form fields, cleans up the existing contact list,
        and selects GetResponse for its seamless form-to-sequence integration. They build a welcome track, a series
        of reminders for unbooked consults, and a re-engagement path for leads that go cold. Before the full
        rollout, they test the workflow with a small group, watch for missed messages, and tweak the timing based on
        real engagement. Only after this pilot do they scale up, knowing the automation works as designed.</p>
      <p className="text-base text-white shadow-text pt-3">
        The key: no step is skipped, and each phase, objectives, data, tech, pilot, is done in order. This reduces
        surprises, keeps the project on budget, and ensures that once the automation is live, it is not just another
        tool, but a working system that saves real staff time and delivers on the business goals set at the start.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="rolling-out-personalized-email-automation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Rolling Out Personalized Email Automation
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="rolling-out-personalized-email-automation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Rolling Out Personalized Email Automation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
