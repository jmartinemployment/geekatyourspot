import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp takes the heavy lifting out of Personalized Email Campaigns by automating what used to eat up
        hours each week. Instead of building every message from scratch, you use Mailchimp’s drag-and-drop editor
        and ready-made templates to launch campaigns that look professional and feel personal, no design or coding
        required. For a small team, this means you can get campaigns out the door faster and with fewer errors.</p>
      <p className="text-base text-white shadow-text pt-3">
        When you connect Mailchimp to your website or online store, it pulls in customer data, names, purchase
        history, even site activity, so you can target the right people with the right message at the right time.
        You do not have to manage lists by hand or guess who should get what offer. Mailchimp segments your audience
        for you, using rules you set or its own predictive tools. This means your welcome series, abandoned cart
        reminders, and re-engagement campaigns go out automatically, triggered by customer actions, not by you
        remembering to send them.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp’s AI tools go beyond basic automation. The platform suggests subject lines, send times, and
        content tweaks based on what has worked for your audience and your industry. You get real-time feedback as
        you write, making it easier to craft emails that get opened and clicked. For a small business, this replaces
        hours of trial and error with data-backed recommendations you can trust. You do not have to be a copywriter
        or a marketing analyst to improve your results, Mailchimp does the heavy analysis for you.</p>
      <p className="text-base text-white shadow-text pt-3">
        Testing what works is built in, not bolted on. A/B and multivariate testing let you compare subject lines,
        content, and timing without extra steps. Mailchimp tracks the results and shows you what drives more opens
        and sales. This means you can keep improving your campaigns with each send, without having to track results
        by hand or sort through spreadsheets. The time you save can go back into your business, not into busywork.</p>
      <p className="text-base text-white shadow-text pt-3">
        Personalization at scale is where Mailchimp stands apart from manual email tools. You can insert customer
        names, recommend products based on past purchases, and even change content for different segments, all from
        a single campaign. Mailchimp’s <GlossaryLink slug="dynamic-content" className="text-[#0B162A] hover:underline">dynamic
        content</GlossaryLink> tools let you create one email and have it adapt for each recipient. This keeps your
        messaging relevant and increases engagement, without the risk of manual copy-paste errors.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integration with platforms like Shopify, WooCommerce, and QuickBooks means Mailchimp always has up-to-date
        customer data. You do not have to import and export lists or worry about stale information. When a customer
        takes an action, like viewing a product or leaving a cart, Mailchimp can <GlossaryLink slug="trigger" className="text-[#0B162A] hover:underline">trigger</GlossaryLink> an
        email or <GlossaryLink slug="sms-marketing" className="text-[#0B162A] hover:underline">SMS</GlossaryLink> automatically.
        This real-time sync removes the lag that kills follow-up and lets you reach customers while they are still
        interested.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp’s automation flows cover the jobs that small teams cannot afford to do by hand. Welcome new
        subscribers with a series of emails that introduce your brand and encourage a first purchase. Remind
        customers about abandoned carts or follow up after a sale to drive repeat business. Re-engage contacts who
        have gone quiet with targeted offers that match their interests. Each flow is easy to set up with pre-built
        templates or can be customized to fit your process.</p>
      <p className="text-base text-white shadow-text pt-3">
        AI-driven content suggestions and no-code tools mean you spend less time writing, designing, and
        troubleshooting campaigns. Mailchimp’s Content Optimizer checks your emails for readability, calls to
        action, and errors before you send, so you catch mistakes early. Its <GlossaryLink slug="generative-ai" className="text-[#0B162A] hover:underline">generative
        AI</GlossaryLink> can draft entire emails, subject lines, and preview text in a few clicks, freeing you from
        writer’s block and speeding up your workflow.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp also helps you keep improving with performance analytics. Every campaign gives you data on what
        worked and where to improve. Predictive <GlossaryLink slug="email-segmentation" className="text-[#0B162A] hover:underline">segmentation</GlossaryLink> identifies
        contacts who are most likely to engage or buy, so you can focus your efforts where they matter most. You do
        not have to guess which customers are at risk of churning, Mailchimp flags them for you and can trigger
        win-back campaigns automatically.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams that worry about outgrowing their tool, Mailchimp’s free plan lets you test and validate campaigns
        with up to 250 contacts and basic AI features (<a id={`tools-marketing-personalized-email-campaigns-mailchimp-transforms-source-mailchimp-com${idSuffix}`} href="https://mailchimp.com/resources/free-marketing-features-overview/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Mailchimp</a>,
        as of Oct 25, 2026). As your business grows, you can add advanced automation, SMS marketing, and more
        without starting over or facing a surprise jump in cost. This flexibility means you keep scaling your
        Personalized Email Campaigns without changing platforms or retraining your team.</p>
      <p className="text-base text-white shadow-text pt-3">
        A real-world example comes from the nonprofit PetRescue, which used Mailchimp to build automated <GlossaryLink slug="lifecycle-marketing" className="text-[#0B162A] hover:underline">lifecycle</GlossaryLink> strategies
        and deliver tailored messages at the right time. By leveraging Mailchimp’s segmentation and dynamic content,
        they increased engagement with minimal manual effort, something a small team could not sustain otherwise.
        This shows how Mailchimp’s automation and personalization tools can turn a manual, error-prone process into
        a reliable driver of engagement and sales.</p>
      <blockquote cite="https://mailchimp.com/solutions/email-marketing-platform/email-automation/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Send personalized emails triggered by actions like signups or purchases.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        Mailchimp’s approach to Personalized Email Campaigns is about removing the manual work that slows small
        teams down. You get automation, AI-driven insights, and real-time data sync, all in one place. The result is
        more relevant emails, higher engagement, and more sales, without adding to your workload or hiring more
        staff.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-mailchimp-removes-the-manual-work-from-personalized-email-campaigns" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Mailchimp removes the manual work from Personalized Email Campaigns
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-mailchimp-removes-the-manual-work-from-personalized-email-campaigns-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Mailchimp removes the manual work from Personalized Email Campaigns
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
