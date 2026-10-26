import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp automates personalized email campaigns by combining audience data, segmentation, and AI-driven
        content tools in a single platform. It lets small businesses set up campaigns that adjust to each contact’s
        preferences and actions, using automation flows and dynamic content blocks to make every message feel
        relevant without manual effort.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the heart of Mailchimp’s process is its visual workflow builder. This tool lets you map out each step in
        a <GlossaryLink slug="customer-journey" className="text-[#0B162A] hover:underline">customer journey</GlossaryLink>,
        from a welcome series to abandoned cart reminders or re-engagement messages. Rather than writing and
        scheduling each email by hand, you define triggers, like a new signup, a recent purchase, or a period of
        inactivity. Mailchimp then sends the right message at the right time, using the rules you set. For example,
        a welcome series can introduce new subscribers to your brand, while an abandoned cart flow nudges shoppers
        to complete their purchase. These flows are built with templates that can be customized, so even a small
        team can launch sophisticated campaigns fast.</p>
      <p className="text-base text-white shadow-text pt-3">
        Segmentation is a core part of Mailchimp’s approach. The platform lets you <GlossaryLink slug="contact-tagging" className="text-[#0B162A] hover:underline">tag</GlossaryLink> and
        group your audience based on behavior, location, purchase history, or engagement level. This means you can
        send targeted content, like special offers to repeat buyers or reactivation campaigns to lapsed customers,
        without creating dozens of separate lists. Mailchimp’s predictive segmentation goes further, using AI to
        highlight which contacts are most likely to engage or buy again, so you can focus your efforts where they
        matter most.</p>
      <p className="text-base text-white shadow-text pt-3">
        Dynamic content blocks let you create a single email that changes for each recipient. For instance, you can
        add a <GlossaryLink slug="product-recommendations" className="text-[#0B162A] hover:underline">product
        recommendation</GlossaryLink> section that shows different items based on what someone has browsed or
        bought. This is managed within the email builder, where you define the rules for what each block displays.
        The result: emails that feel personal, but require no extra work for each segment.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp’s AI tools streamline campaign creation and optimization. The subject line helper gives feedback
        as you type, suggesting changes to improve open rates based on industry data and your own past campaigns.
        Generative AI features can draft full email copy, headers, and preview text, speeding up content creation. <GlossaryLink slug="send-time-optimization" className="text-[#0B162A] hover:underline">Send
        time optimization</GlossaryLink> automatically schedules emails for when each contact is most likely to
        open, based on their history. These features are built into the editor, so you don’t need separate tools or
        advanced skills to use them.</p>
      <p className="text-base text-white shadow-text pt-3">
        Testing and reporting are built into every campaign. Mailchimp supports A/B and multivariate testing,
        letting you compare subject lines, content, and send times to see what works best for your audience. After
        sending, detailed analytics show open rates, clicks, conversions, and revenue generated. The platform’s
        Analytics AI reviews all this data and surfaces recommendations for your next steps, so you can keep
        improving without poring over spreadsheets.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation in Mailchimp is not just about saving time, it’s about making every campaign smarter. For
        example, a nonprofit like PetRescue used Mailchimp’s automation flows and segmentation to deliver timely,
        relevant messages to over half a million subscribers, matching each email’s content to where the recipient
        was in their adoption journey. This level of personalization, which would be impossible to manage by hand,
        is handled automatically by the platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp’s approach is designed for non-experts. You don’t need to know code or have a marketing background
        to use its tools. Guided setup flows, drag-and-drop builders, and built-in best practices make it accessible
        for small teams. The free plan includes core automation features, so you can start validating your campaigns
        before committing to a paid tier. As your needs grow, advanced automation, SMS, and <GlossaryLink slug="predictive-analytics" className="text-[#0B162A] hover:underline">predictive
        analytics</GlossaryLink> are available in higher plans, letting you scale up without switching platforms.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, Mailchimp’s mechanics put automation, segmentation, and AI-driven content creation in reach for
        small businesses. It handles the heavy lifting behind the scenes, so your team spends less time on manual
        tasks and more time on strategy and growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="mailchimps-core-mechanics-for-automating-personalized-campaigns" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Mailchimp’s core mechanics for automating personalized campaigns
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="mailchimps-core-mechanics-for-automating-personalized-campaigns-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Mailchimp’s core mechanics for automating personalized campaigns
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
