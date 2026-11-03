import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Going live with MailerLite for personalized email campaigns is a structured process that minimizes
        disruption and shortens time-to-value for small business teams. The platform’s pre-built templates, visual
        automation tools, and direct integrations with common web platforms mean that most teams can launch targeted
        campaigns within days, not weeks. The actual steps depend on your current marketing stack and how clean your
        contact data is, but the order and effort are predictable.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most teams start by connecting MailerLite to their website and any e-commerce systems they already use. The
        platform offers direct integrations with WooCommerce, Shopify, Wix, Squarespace, Prestashop, and
        BigCommerce, so there’s no need for custom code or outside connectors for the majority of small businesses.
        This connection allows MailerLite to sync new signups, purchases, and other customer activity into its own
        database automatically. For businesses with a simple lead form or online store, this step is often completed
        in a single afternoon.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once integrated, the next step is to set up forms and landing pages using MailerLite’s built-in editors.
        These no-code tools let non-technical staff create branded signup forms, pop-ups, and landing pages that
        match the business’s look and feel. Because every form can be linked to a specific audience group or
        segment, new contacts are organized from the start, avoiding the common pitfall of mixing all leads into a
        single generic list. Setting up these forms and connecting them to the right groups is a one-time task, but
        it saves hours of manual sorting down the road.</p>
      <p className="text-base text-white shadow-text pt-3">
        Template setup is where most teams see the biggest time savings. MailerLite includes over 100 designer-built
        templates, all customizable with a drag-and-drop editor (<a id={`tools-marketing-personalized-email-campaigns-mailerlite-implementing-source-mailerlite-com${idSuffix}`} href="https://www.mailerlite.com/blog/how-to-combine-email-segmentation-with-automation-with-examples" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">MailerLite</a>,
        as of Oct 25, 2026). Teams can quickly create reusable templates for newsletters, promotions, or onboarding
        sequences, ensuring every email stays on brand and includes a clear call to action. The built-in AI writing
        assistant helps draft subject lines and body copy, which is especially useful for teams without a dedicated
        copywriter. This means the first campaign can go out looking polished, even if you have no design or writing
        background.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of MailerLite’s go-live process is building automation workflows. Using the visual workflow
        builder, teams map out the customer journey, defining which emails send when someone joins a group, makes a
        purchase, or clicks a link. These workflows can be as simple as a single welcome email or as complex as a
        multi-step nurture sequence with conditional logic. Because MailerLite supports multiple triggers and
        time-based delays, businesses can automate follow-up for every segment without manual intervention. The
        automation builder’s one-click test feature lets you review a full sequence before activating it, reducing
        the risk of errors and missed steps.</p>
      <p className="text-base text-white shadow-text pt-3">
        Testing and reporting are built into the go-live process. As soon as campaigns start, MailerLite tracks open
        rates, click rates, and conversions, displaying results in a single dashboard. For e-commerce stores, sales
        tracking connects each campaign to actual revenue, so you know exactly which emails drive purchases. This
        immediate <GlossaryLink slug="feedback-loop">feedback loop</GlossaryLink> lets teams adjust subject lines,
        sending times, or content blocks to improve results with each send.</p>
      <p className="text-base text-white shadow-text pt-3">
        What shortens the MailerLite go-live timeline is the combination of ready-made integrations, pre-built
        templates, and a visual workflow builder that non-technical staff can use. There’s no waiting on IT to
        connect systems or design teams to build emails from scratch. For most small businesses, the entire process,
        from connecting the website to sending the first personalized campaign, can be completed in a few focused
        sessions. The phased rollout approach is common: start with a single list and a core automation, then expand
        to additional segments and more complex journeys as the team gains confidence.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot’s role in this process is to handle the technical configuration, ensure data flows
        correctly from your site or store, and guide your team through building the first set of automations and
        templates. This means your staff can focus on what to say to customers, not how to get the system working.
        The result is a smooth transition to personalized, automated email marketing, without the headaches or
        delays that come with larger, more complex platforms.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-a-mailerlite-go-live-looks-like-for-a-small-business-team" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What a MailerLite go-live looks like for a small business team
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
              <h2 id="what-a-mailerlite-go-live-looks-like-for-a-small-business-team-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What a MailerLite go-live looks like for a small business team
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
