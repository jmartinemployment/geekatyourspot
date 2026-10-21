
export default function ComparingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses in South Florida are not short on chatbot choices. The market is full of platforms
        promising cross-platform chat, lead capture, and pipeline automation. But when you look past the
        marketing, most tools split into two camps. Some are rigid, rules-based chatbots that only work on a
        website or a single messaging platform. Others are sprawling “all-in-one” suites built for larger
        companies, with deep developer requirements and price tags to match. Tidio sits between these
        extremes: a platform built for small and mid-sized teams that need
        real&nbsp;omnichannel&nbsp;coverage, but cannot afford
        or support a complex IT stack.</p>
      <p className="text-base text-white shadow-text pt-3">
        A typical alternative is the single-channel or website-only bot. These tools are easy to set up, but
        they keep conversations siloed. A customer who chats on your website is invisible when they message
        you on Instagram or WhatsApp. The result is a fractured experience and a support team that has to ask
        for the same details over and over. Tidio’s architecture solves this by pulling messages from every
        major channel, website, email, Messenger, Instagram, and WhatsApp, into one shared inbox. That means
        your team sees the full history, regardless of where the customer started the conversation.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the other end are platforms built for enterprise or developer-driven teams. These come with
        powerful customization, but at the cost of steep learning curves, heavy technical lift, and long
        implementation cycles. Many require code to build even a basic flow, or rely on developer resources to
        maintain integrations over time. Tidio’s approach is different. Its drag-and-drop Flows builder lets
        non-technical users create sophisticated lead capture and support automations without touching code.
        You can use more than 40 templates to get started, then customize for your business as you go. For
        most small businesses, that means you can launch a working, cross-platform chatbot in hours, not
        weeks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where some competitors focus only on ticket deflection or basic Q&amp;A, Tidio’s Lyro AI agent is
        built to handle a larger share of live conversations. Lyro reads from your support content, help
        center, and even your product catalog. It answers questions in natural language and, when it reaches
        its limit or senses a high-value inquiry, hands the chat off to a human with the full transcript
        intact. This avoids the dead ends that frustrate customers and ensures that your team can step in for
        complex or sensitive situations. Tidio’s AI is not just a scripted FAQ bot. It can resolve up to 67%
        of customer questions automatically, according to Tidio’s own published results.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integration is another point of real difference. Many chat platforms force you to manage contacts and
        leads outside your core systems, or require expensive middleware to connect to marketing
        and&nbsp;CRM&nbsp;tools. Tidio offers direct integrations with
        platforms like HubSpot, Drip, Front, and ActiveCampaign. It can sync lead data, push qualified
        prospects into your sales pipeline, and even trigger marketing campaigns based on chat behavior. For
        Shopify stores, Tidio’s native tools let you see a shopper’s cart and order history right inside the
        chat, with options to cancel orders or issue refunds if needed.</p>
      <p className="text-base text-white shadow-text pt-3">
        Then there is the question of cost and scale. Tidio’s free plan is one of the most complete for small
        businesses, supporting up to 50 billable conversations a month and 10 seats. Paid plans scale up
        features and usage, but the entry point is designed to be accessible for small budgets. This is a
        sharp contrast to enterprise tools that start with high monthly minimums or require annual contracts.
        Tidio’s pricing allows a small team to test, deploy, and grow without locking into a system that
        outpaces their needs or resources.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, Tidio is built for the reality of small teams that cannot dedicate a person to chatbot
        management. The platform’s no-code setup, visual builders, and shared inbox mean that a team of three
        can deliver the kind of&nbsp;omnichannel&nbsp;support
        that usually takes a team of ten. There is no need to train on custom scripts, maintain separate
        dashboards, or worry about missing leads because a message arrived on the “wrong” channel. In the
        South Florida market, where speed, context, and personal touch can make or break a sale, Tidio stands
        out by making advanced cross-platform automation practical for small businesses, not just big ones.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="tidio-versus-the-alternatives-where-it-stands-and-what-actually-sets-it-apart" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Tidio Versus the Alternatives: Where It Stands and What Actually Sets It Apart
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="tidio-versus-the-alternatives-where-it-stands-and-what-actually-sets-it-apart-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Tidio Versus the Alternatives: Where It Stands and What Actually Sets It Apart
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
