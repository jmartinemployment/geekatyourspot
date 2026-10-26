import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite automates the most time-consuming parts of email marketing by letting you set up rules, triggers,
        and dynamic content that adapt to each subscriber. Instead of hand-writing messages for every segment, you
        create templates and workflows once, then MailerLite delivers the right message to the right person at the
        right time. This is how small teams in South Florida can run campaigns that look and feel personal, without
        a big marketing staff or enterprise platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of MailerLite’s approach is its visual workflow builder. You map out the steps of each campaign,
        from the first welcome email to follow-up offers and reminders, by dragging blocks onto a canvas. Each block
        represents an action (like sending an email or waiting a set number of days) or a condition (such as
        checking whether a subscriber clicked a link or belongs to a certain group). You define triggers that start
        the sequence, these can be a new signup, a specific form fill, a purchase, or a change in subscriber data.
        Once the workflow is live, MailerLite takes over, sending every message automatically based on the rules you
        set.</p>
      <p className="text-base text-white shadow-text pt-3">
        Segmentation is built into every step. Instead of keeping all contacts in one list, MailerLite lets you
        organize subscribers by interests, behaviors, location, purchase history, or any <GlossaryLink slug="custom-field" className="text-[#0B162A] hover:underline">custom
        field</GlossaryLink> you collect. You can build unlimited segments, each defined by a set of rules, such as
        “people who bought product A in the last 30 days” or “contacts who clicked last month’s promo but didn’t buy
        (<a id={`tools-marketing-personalized-email-campaigns-mailerlite-how-it-works-source-mailerlite-com${idSuffix}`} href="https://www.mailerlite.com/blog/when-will-mailerlite-have-subscriber-tagging" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">MailerLite</a>,
        as of Oct 25, 2026).” Subscribers move in and out of these segments automatically as their data changes, so
        your targeting is always up to date. For more manual control, you can use groups, these are static lists you
        add people to by hand or through automations, perfect for special offers or one-off campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Personalization in MailerLite goes well beyond using someone’s name. You can set up dynamic content blocks
        in your emails that only show to certain segments or groups. For example, a single campaign can display
        different <GlossaryLink slug="product-recommendations" className="text-[#0B162A] hover:underline">product
        recommendations</GlossaryLink>, event invites, or calls to action depending on what you know about each
        recipient. You can also personalize subject lines and delivery times based on engagement or location data,
        increasing the odds that your message lands when it matters most.</p>
      <p className="text-base text-white shadow-text pt-3">
        Templates are a key time-saver. MailerLite includes a library of over 100 designer-built templates for
        newsletters, promotions, <GlossaryLink slug="transactional-email" className="text-[#0B162A] hover:underline">transactional
        emails</GlossaryLink>, and more (<a id={`tools-marketing-personalized-email-campaigns-mailerlite-how-it-works-source-mailerlite-com-2${idSuffix}`} href="https://www.mailerlite.com/blog/how-to-combine-email-segmentation-with-automation-with-examples" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">MailerLite</a>,
        as of Oct 25, 2026). You can customize these with your branding, colors, and layout, then save them to reuse
        for future campaigns. The drag-and-drop editor makes it easy to add sections, images, product boxes, or
        dynamic blocks without any coding. If you’re stuck on what to write, MailerLite’s built-in AI assistant can
        suggest subject lines and draft body copy in seconds, giving you a head start on every campaign.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s automation features cover the full <GlossaryLink slug="customer-journey" className="text-[#0B162A] hover:underline">customer
        journey</GlossaryLink>. You can trigger welcome emails after signup, send <GlossaryLink slug="lead-nurturing" className="text-[#0B162A] hover:underline">nurture
        sequences</GlossaryLink> to new leads, deliver post-purchase messages, and follow up with contacts who
        haven’t engaged in a while. MailerLite supports multi-step workflows with conditional logic, so you can
        branch the journey based on how a subscriber interacts with each message. For example, if someone clicks a
        product link in an email, they can receive a targeted follow-up offer; if they don’t, they might get a
        reminder or a different recommendation.</p>
      <p className="text-base text-white shadow-text pt-3">
        Testing and optimization are built into the workflow. You can run A/B tests on subject lines, content
        blocks, forms, pop-ups, and even entire automation sequences. MailerLite tracks which version performs
        better, then automatically sends the winner to the rest of your list. This lets you refine your approach
        with real data, improving open rates, clicks, and conversions over time without guesswork.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting is unified across campaigns and automations. You see open rates, <GlossaryLink slug="click-through-rate" className="text-[#0B162A] hover:underline">click
        rates</GlossaryLink>, conversions, and sales for every message and every workflow step. For e-commerce,
        MailerLite connects directly to platforms like Shopify, WooCommerce, Wix, Squarespace, Prestashop, and
        BigCommerce, so you can track which emails drive actual revenue and which segments respond best. The
        dashboard gives you at-a-glance insights, and you can build custom reports around the metrics that matter
        most to your business, whether that’s revenue per sequence, completion rates, or how well your forms and
        landing pages convert.</p>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite’s automation engine is designed for small teams who need professional results without complexity.
        It gives you the tools to deliver personalized, timely, and relevant campaigns at scale, without the manual
        labor or the overhead of a large marketing platform. For a small business in Miami-Dade, Broward, or Palm
        Beach, this means you can finally compete on engagement and follow-up, not just on price or product.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="mailerlites-automation-engine-delivers-personalized-campaigns-with-minimal-manual-work" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                MailerLite’s automation engine delivers personalized campaigns with minimal manual work
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
              <h2 id="mailerlites-automation-engine-delivers-personalized-campaigns-with-minimal-manual-work-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                MailerLite’s automation engine delivers personalized campaigns with minimal manual work
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
