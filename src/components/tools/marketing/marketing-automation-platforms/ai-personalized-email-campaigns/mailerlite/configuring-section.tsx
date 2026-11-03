import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite is configured around rules, triggers, and segments that reflect how small businesses actually
        want to run their personalized email campaigns. Instead of a generic automation engine, MailerLite gives you
        concrete, understandable logic: trigger-based workflows, dynamic content, and segmentation tools that map to
        real business needs. Geek @ Your Spot makes these work for your environment by handling the upfront setup,
        data mapping, and integration with your existing systems, so the logic you define in MailerLite matches your
        actual customer journeys and sales cycles.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of MailerLite’s automation is its visual workflow builder. This tool lets you build sequences that
        react to subscriber actions, joining a group, filling a form, clicking a link, making a purchase, without
        writing code. Each workflow starts with a trigger, such as a new signup or a specific group assignment, and
        then branches into steps: send a welcome email, wait for a set time, send a follow-up, move the subscriber
        to a new group, or stop the sequence if they take a certain action. This logic is not locked to one
        use-case; you can combine triggers and actions to automate anything from onboarding to post-purchase
        follow-up.</p>
      <p className="text-base text-white shadow-text pt-3">
        Segmentation is not just a filter in MailerLite, it is the backbone of how the platform delivers
        personalized content. Segments are dynamic lists built on rules you set, such as location, purchase history,
        or engagement. As new data comes in, MailerLite automatically adds or removes subscribers from these
        segments. Groups, on the other hand, are manual or automation-driven tags you assign to organize contacts by
        interest, source, or behavior. This distinction is critical: segments update themselves based on rules,
        while groups let you run campaigns to hand-picked sets or move contacts between journeys as they engage.</p>
      <p className="text-base text-white shadow-text pt-3">
        Dynamic content blocks take this further. In MailerLite, you can design a single email and use visibility
        settings to show or hide sections for different segments or groups. For example, a retail client can send
        one campaign but display different product offers to subscribers in Miami versus those in Palm Beach, or
        highlight a VIP discount only to a loyalty segment. This means your team does not need to build ten versions
        of the same email, one template adapts to every audience.</p>
      <p className="text-base text-white shadow-text pt-3">
        Personalization is more than just a first name in the subject line. MailerLite supports custom fields, so
        you can use any data you capture, favorite product, last purchase date, preferred appointment time, to drive
        content and timing. The platform’s send-time optimization and smart sending features use engagement history
        to deliver emails when each subscriber is most likely to open them. This is not a black box: Geek @ Your
        Spot configures these features based on your actual customer data, so the logic is explainable and
        adjustable.</p>
      <p className="text-base text-white shadow-text pt-3">
        Templates and the built-in AI writing assistant are part of the configuration, too. Geek @ Your Spot helps
        you build a library of branded templates for different campaign types, newsletters, promotions, onboarding,
        that your team can reuse and adapt. The AI assistant speeds up copywriting, suggesting subject lines and
        body text based on your goals and past performance, but every message is still reviewed and edited by your
        team before it goes out.</p>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite’s extension mechanism is its API and integrations. For most small businesses, the visual builder
        and native integrations (with platforms like Shopify, WooCommerce, Wix, and Squarespace) are enough, but
        where custom logic is needed, Geek @ Your Spot can connect MailerLite to your CRM, scheduling tool, or
        analytics platform using the API. This is how you automate lead handoff, sync customer status, or trigger
        campaigns from outside events without manual exports. The API is well-documented and built for
        straightforward data mapping and event triggers, not deep developer work.</p>
      <p className="text-base text-white shadow-text pt-3">
        Testing and validation are part of the configuration process. MailerLite lets you send test versions of
        automation sequences to your own inbox, so you can see the full journey as a customer would. This is not
        just for peace of mind; it is how Geek @ Your Spot ensures every step, triggers, delays, conditional
        branches, works as intended before anything reaches your real list.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, configuring MailerLite is an exercise in translating your business’s real-world follow-up logic
        into rules and templates. Geek @ Your Spot works with you to define what counts as a warm lead, what
        triggers a sales follow-up, when to send a <GlossaryLink slug="re-engagement-campaign" className="text-[#0B162A] hover:underline">re-engagement</GlossaryLink> offer,
        and how to separate audiences by interest or <GlossaryLink slug="lifecycle-marketing" className="text-[#0B162A] hover:underline">lifecycle
        stage</GlossaryLink>. The result is a system where every message goes to the right person at the right time,
        with content that feels personal, without your staff having to remember who gets what or when. This is not
        just about saving time; it is about making sure no lead is left behind because of inconsistent follow-up or
        manual errors.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business in South Florida, the difference is clear: instead of hiring more staff or settling for
        generic campaigns, you get a setup that delivers tailored communication automatically. The rules and
        automations in MailerLite are not theoretical, they are the actual levers that drive your customer
        engagement and sales, and Geek @ Your Spot makes sure they match your business, not just the platform’s
        defaults.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="every-rule-and-automation-in-mailerlite-is-built-for-real-world-campaign-logic-not-textbook-use-cases" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Every rule and automation in MailerLite is built for real-world campaign logic, not textbook use-cases
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="every-rule-and-automation-in-mailerlite-is-built-for-real-world-campaign-logic-not-textbook-use-cases-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Every rule and automation in MailerLite is built for real-world campaign logic, not textbook use-cases
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
