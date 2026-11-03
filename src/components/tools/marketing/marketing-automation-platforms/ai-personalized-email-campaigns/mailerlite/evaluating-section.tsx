export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite is a fit for small businesses that need professional, relevant email automation without the
        overhead of a heavy enterprise platform. Its pricing and feature set are designed for teams that want to
        grow their audience and sales with a tool that does not require a dedicated marketing department or a steep
        learning curve. When judging MailerLite, focus on how its model matches your list size, campaign needs, and
        the level of automation you actually plan to use, not just headline features or price points from a
        comparison chart.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first thing to consider is MailerLite’s approach to scaling with your business. Unlike platforms that
        gate critical features behind high-priced tiers, MailerLite includes core automation, segmentation, and
        personalization tools in every paid plan. This means even a small team can run triggered campaigns, build
        dynamic segments, and use branded templates without a major upfront investment. As your list grows, you pay
        more only for the contacts you actually market to, not for features you may never use.</p>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite’s pricing does not force you into a one-size-fits-all plan. You can start with basic campaigns
        and add complexity, like multi-step automations, advanced segmentation, or e-commerce integrations, as your
        needs evolve. For a small business, this means you are not locked out of automation or reporting just
        because you have a starter list. The platform’s free and entry-level options are there for teams who want to
        test before they commit, but the real value comes when you use automation and segmentation to move beyond
        batch-and-blast emails.</p>
      <p className="text-base text-white shadow-text pt-3">
        The fit question is not just about cost, it is about operational reality. If your team is already stretched
        thin, MailerLite’s user-friendly interface and template-driven workflow mean you can delegate campaign
        building to staff who are not marketing specialists. The drag-and-drop editor, AI writing assistant, and
        library of reusable templates let you move fast without sacrificing quality or brand consistency. This is a
        real advantage over platforms that require extensive training or technical background just to get started.</p>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite’s segmentation and automation logic are built for businesses that want to send the right message
        to the right person, not just blast everyone with the same offer. You can build unlimited segments based on
        any data you capture, location, engagement, purchase history, and trigger automations for each. For
        e-commerce, integrations with Shopify, WooCommerce, Wix, and Squarespace mean you can target campaigns based
        on shopping habits and track the sales from each email, all without manual exports or custom code.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting and analytics are included, not an add-on. MailerLite shows you open rates, click rates,
        conversions, and revenue per campaign or automation, so you can see what is working and double down on it.
        For a small business owner, this means you do not have to guess which campaigns drive results, or waste time
        on reporting tools that are separate from your email platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        When weighing MailerLite, judge it on how well it fits your actual workflow, not just the feature list. If
        you need to personalize content, automate follow-up, and see real sales data without hiring a specialist or
        buying a suite of add-ons, MailerLite is a strong fit. If your business needs deep custom integrations or
        advanced multi-channel automation, you will need to review the API and integration options to see if they
        cover your stack. For most small businesses in South Florida, MailerLite’s balance of automation, usability,
        and price is what makes it stand out.</p>
      <p className="text-base text-white shadow-text pt-3">
        The pricing model is transparent: you pay for the number of active subscribers, not for features you may
        never use. Geek @ Your Spot helps you right-size your plan, clean up your list, and avoid paying for
        inactive or duplicate contacts. This is not just about saving money, it is about making sure you are only
        investing in what helps your business grow. For many local businesses, MailerLite’s approach means you can
        finally run professional, automated campaigns that fit your budget and your team’s capacity, without
        compromising on results.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="mailerlites-fit-and-pricing-model" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                MailerLite’s fit and pricing model
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="mailerlites-fit-and-pricing-model-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                MailerLite’s fit and pricing model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
