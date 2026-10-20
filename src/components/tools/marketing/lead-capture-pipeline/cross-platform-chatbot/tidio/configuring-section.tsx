import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Setting up Tidio for a small business means working directly with two main automation engines: Lyro
        (the AI agent) and Flows (the no-code visual builder). Both are built for non-developers. Geek @ Your Spot LLC configures your environment so these engines do the heavy lifting, answering common questions,
        qualifying leads, routing conversations, and capturing customer data, without needing custom code or
        outside scripting. Tidio does not offer an SDK or custom scripting language for advanced extensions;
        everything runs through its built-in configuration and integrations. This keeps setup fast and reduces
        the risk of breakage when your team changes a process or adds a new channel.</p>
      <p className="text-md text-white shadow-text pt-3">
        Lyro is Tidio’s conversational AI. It is trained on your own support content, FAQs, help center
        articles, product catalogs, and imported Q&amp;A pairs. Geek @ Your Spot LLC links these resources to Lyro
        through the admin panel. Lyro then answers in natural language, holds context through multi-turn
        conversations, and hands off to a human agent when it hits a question it cannot solve. The handoff is
        seamless: the transcript, customer profile, and conversation history carry over, so your team never
        asks a customer to repeat themselves. This is not a static script; Lyro understands intent and can
        adapt to how customers phrase their questions, pulling the right answer from your material. For South
        Florida teams, this means your AI can handle Spanish, English, and other languages out of the box,
        since Lyro supports dozens of languages natively.</p>
      <p className="text-md text-white shadow-text pt-3">
        Flows is the automation engine that handles rules-based actions. Geek @ Your Spot LLC builds these flows
        visually, no coding required. Each flow can trigger on a specific event: a new visitor lands on your
        site, someone adds an item to their cart, a customer abandons checkout, or a lead clicks through from
        Instagram. The builder offers over 40 templates for common jobs: welcome messages, lead capture,
        abandoned cart recovery, discount offers, product recommendations, and appointment booking. Each
        template is customizable, and Geek @ Your Spot LLC adapts these to your exact sales and support process.
        For example, a flow might start by collecting a name and email, ask a qualifying question, route
        high-value leads straight to a sales rep, and push the contact into
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;(like HubSpot or ActiveCampaign) using
        Tidio’s built-in integrations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tidio’s shared inbox is where the automation and human touch meet. Every message, whether from website
        chat, Instagram DM, WhatsApp, Messenger, or email, lands in one place. Geek @ Your Spot LLC configures
        routing rules so conversations go to the right team member based on language, topic, or customer
        status. Macros (saved replies) are set up for common questions, speeding up human response when
        needed. When Lyro cannot answer, the system hands the thread over to a person, keeping the full
        context and customer profile visible. This is critical for small teams that cannot afford to lose time
        or drop the ball between channels.</p>
      <p className="text-md text-white shadow-text pt-3">
        Extensions in Tidio are handled through integrations, not code. Geek @ Your Spot LLC connects Tidio to
        your existing stack, Shopify, HubSpot, Drip, Front, Pipedrive, Google Ads, and more, by activating and
        mapping integrations in the settings. On Shopify, for example, the agent can see a customer’s cart and
        order history next to the chat and even cancel or refund orders (on the right plan). For marketing,
        Tidio can sync new leads into your email lists, trigger remarketing audiences in Google Ads, or push
        chat contacts into your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. There is no
        open&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;for custom scripting; instead, the
        platform’s integrations and visual builder cover the automation needs of most small businesses without
        requiring developer resources.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC also configures analytics and reporting inside Tidio. The system tracks first
        response time, resolution time, and repeat contacts across all channels. This gives you a clear view
        of how your pipeline is performing, which flows are converting, and where customers drop off. The
        analytics module is built-in, so you do not need to export data or set up external dashboards unless
        your business has unique reporting needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams that want to experiment or evolve their flows, Tidio offers a playground for Lyro. Geek @ Your Spot LLC uses this to test how the AI responds to real customer questions before going live, making
        adjustments to your knowledge base or automation flows as needed. Updates to the AI’s knowledge base
        are instant, add a new FAQ, and Lyro can use it immediately. This means your automation stays current
        as your business grows or changes.</p>
      <p className="text-md text-white shadow-text pt-3">
        The bottom line: Tidio’s configuration is all point-and-click, with no code required. Geek @ Your Spot LLC’s role is to set up the flows, connect your channels, import your business knowledge, and make
        sure handoff rules, routing, and&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;syncs match
        your real-world processes. For a small business, this means you get enterprise-grade automation and
        cross-platform visibility without the cost, risk, or maintenance of custom software development.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-inside-tidio-rules-automations-and-how-extensions-work" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured Inside Tidio: Rules, Automations, and How Extensions Work
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
              <h2 id="what-gets-configured-inside-tidio-rules-automations-and-how-extensions-work" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured Inside Tidio: Rules, Automations, and How Extensions Work
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
