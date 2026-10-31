
export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses in Miami-Dade, Broward, and Palm Beach counties looking for a cross-platform chatbot
        need to know if Tidio fits both their operational needs and their budget. Tidio is built for small and
        mid-sized teams that want to automate support, capture leads, and handle sales conversations across
        website chat, social DMs, and email, all from one dashboard. The platform is not aimed at enterprises
        with a dedicated IT staff or businesses needing deep, custom-coded workflows. Instead, it targets
        teams that want to move fast, keep costs predictable, and avoid the learning curve of developer-heavy
        tools.</p>
      <p className="text-base text-white shadow-text pt-3">
        Tidio’s pricing model is tiered, with a free plan that covers up to 50 billable conversations a month
        and 10 seats. This is enough for a small store or a service business to test the waters and see real
        impact before committing. The free tier includes live chat, ticketing, email and social channels,
        video calls, the visual Flows builder, Lyro AI for the first 50 conversations, and basic analytics. As
        your volume grows, paid plans unlock more conversations, advanced automations, and deeper integrations
        with platforms like Shopify, HubSpot, and Pipedrive. Plans are priced per month, and you can add
        features as you need them, there is no forced jump to an enterprise contract just to get core
        automation.</p>
      <p className="text-base text-white shadow-text pt-3">
        When judging Tidio, focus on these criteria:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Channel coverage: Tidio handles website chat, Instagram, Messenger, WhatsApp, and email in one shared inbox. If your customers reach out on these platforms, Tidio keeps the context together and lets your team respond from a single screen.</li>
        <li>Automation depth: Lyro AI can answer from your own FAQs, product catalog, and help center content. Flows let you automate lead capture, cart recovery, and follow-up sequences without code. If you need a bot that can qualify leads, book appointments, or route sales-ready prospects, Tidio’s templates and triggers cover those jobs out of the box.</li>
        <li>Human handoff: Tidio is built for teams that want a mix of AI and personal touch. When the AI cannot answer, the conversation is handed off to a human agent with the full transcript and customer profile. This is essential if you have high-value sales or sensitive support cases.</li>
        <li>Integration with your stack: Tidio connects to Shopify, HubSpot, Drip, Front, ActiveCampaign, Pipedrive, Google Ads, and more. If your business relies on any of these, Tidio can push leads, sync contacts, and trigger marketing actions automatically.</li>
        <li>Ease of use: Everything in Tidio is configured visually, so your team does not need coding skills. Geek @ Your Spot LLC handles the initial setup, but your staff can tweak flows, add FAQs, or update automations without calling in a developer.</li>
        <li>Scalability: If you hit the limits of the free plan, you can upgrade for more conversations, advanced analytics, and deeper integration. There’s no need to migrate to a new tool as your business grows.</li>
        <li>Support and learning curve: Tidio’s advanced features are powerful but can take some time to master. For a team with no automation experience, Geek @ Your Spot LLC’s local support shortens the ramp-up period and ensures your flows run smoothly from day one.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Tidio’s pricing is transparent, free for small-scale use, then paid monthly as you scale. There are no
        hidden fees or per-user surcharges for basic usage. The only real cost jumps come if you want advanced
        AI, premium integrations, or need to handle a much higher volume of conversations. Even then, the
        price is published and easy to estimate based on your needs.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fit is not just about features, it’s about how Tidio matches your business’s actual workflow. If your
        team is already answering messages on multiple platforms and losing leads to fragmented inboxes, Tidio
        brings everything together. If you need to automate lead capture, qualify prospects, and route
        sales-ready leads to the right person, Tidio’s automation covers that without the need for a
        developer. If you want to experiment with AI but keep a human in the loop for complex sales or
        sensitive support, Tidio’s handoff and shared inbox make it possible.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the other hand, if your business needs a chatbot that can be custom-coded for edge-case workflows
        or integrated with an in-house app via&nbsp;API, Tidio is not
        the best fit. It is designed for visual configuration, not for custom scripting or deep backend
        integrations. The platform’s strength is in making automation easy, accessible, and affordable for
        small teams, not in offering a blank slate for software engineers.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, small businesses in South Florida should judge Tidio by its ability to unify
        conversations, automate repetitive jobs, and fit into existing workflows without a developer. The
        pricing model is straightforward and scales with usage, not headcount. For teams tired of losing leads
        in scattered inboxes and spending hours on manual follow-ups, Tidio’s cross-platform automation and AI
        can return hours to your week and help you close more sales without growing your team.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-tidio-fit-pricing-and-the-real-questions-for-small-business-buyers" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Tidio: Fit, Pricing, and the Real Questions for Small Business Buyers
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
              <h2 id="how-to-judge-tidio-fit-pricing-and-the-real-questions-for-small-business-buyers-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Tidio: Fit, Pricing, and the Real Questions for Small Business Buyers
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
