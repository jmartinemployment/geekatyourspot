import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Tidio changes the day-to-day reality for small teams by removing the manual work and confusion that
        come with fragmented messaging. Instead of juggling five inboxes, your team works from a single
        dashboard. Every customer message, whether it comes through your website, WhatsApp, Instagram,
        Messenger, or email, lands in one place. This means you never have to search for missing context or
        copy-paste contact details again. Anyone on your team can pick up a conversation, see the full
        history, and respond with confidence.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of Tidio’s value is its
        true&nbsp;<GlossaryLink slug="omnichannel" className="text-[#0B162A] hover:underline">omnichannel</GlossaryLink>&nbsp;system. It keeps every
        customer’s identity, conversation history, and next action connected across channels. If a prospect
        starts on Instagram and follows up by email, Tidio recognizes them as the same person and attaches all
        previous interactions. This unified profile lets you deliver a seamless experience, no repeated
        questions, no lost details. For a small team, this is how you answer like a company twice your size,
        without adding headcount.</p>
      <p className="text-base text-white shadow-text pt-3">
        Tidio’s AI agent, Lyro, takes routine questions off your plate. It reads from your own support
        content, help articles, FAQs, product catalogs, and answers customers in natural language. When
        someone asks about a return policy or a product detail, Lyro responds instantly, using the same
        knowledge your team relies on. This is not a rigid script that fails when a customer phrases a
        question differently. Lyro understands intent, remembers the last few messages, and responds in full
        sentences. If the question goes beyond what the AI can handle, it passes the conversation to a human
        agent, with the transcript and context intact. No customer is left repeating themselves.</p>
      <p className="text-base text-white shadow-text pt-3">
        For lead capture, Tidio’s automation flows work around the clock. The visual builder requires no
        coding, your team can drag and drop to create conversation paths that greet visitors, collect names
        and emails, qualify leads, and even recover abandoned carts. These flows can trigger on key events: a
        first visit, a specific page, an exit intent, or after a purchase. The system collects contact details
        automatically, so your marketing list grows without manual entry. When an agent is busy or offline,
        Tidio’s bots keep the conversation going, ensuring no opportunity is missed.</p>
      <p className="text-base text-white shadow-text pt-3">
        Tidio also integrates with the tools you already use. From HubSpot and&nbsp;<Link id={`tools-marketing-cross-platform-chatbot-tidio-transforms-active-campaign${idSuffix}`} href="/tools/marketing/active-campaign" className="text-[#0B162A] hover:underline">ActiveCampaign</Link>&nbsp;to Shopify and
        Google Ads, it sends captured leads and conversation data directly into
        your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;or marketing platform. This means less time
        spent on manual data entry and more time spent on qualified prospects. For e-commerce, Tidio’s Shopify
        integration lets agents see a shopper’s cart and order history right next to the chat, making it easy
        to answer order questions, process refunds, or upsell without switching screens.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is a measurable reduction in wasted effort. Repetitive inquiries are handled automatically,
        freeing your team to focus on complex sales or support issues. Tidio’s reporting tools show you how
        many questions the AI resolves, how fast your team replies, and where conversations drop off. This
        data helps you refine your flows, improve customer experience, and spot opportunities for follow-up.</p>
      <blockquote cite="https://www.tidio.com/industry/saas/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Our customers average a 75% resolution rate with our conversational AI, giving your team more time for
        retention and expansion.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        For the business owner on the go, Tidio’s desktop and mobile apps ensure you never miss an alert. You
        can respond to customers, assign conversations to team members, and monitor activity from anywhere.
        The system proactively requests contact information during a chat, so you build a clean marketing list
        as you go. If you need to escalate an issue or transfer a conversation, Tidio makes it simple, no more
        forwarding emails or losing track of who is handling what.</p>
      <p className="text-base text-white shadow-text pt-3">
        Tidio’s pricing is straightforward and accessible for small budgets. The free plan covers the basics,
        including live chat, ticketing, and up to 50 conversations a month. Paid plans add more advanced
        features, higher limits, and deeper integrations, but you can start testing the system on real traffic
        without a major investment. There is no need for a developer or a complex rollout, Tidio is designed
        for quick setup and easy use by small, active teams.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, Tidio removes the manual, repetitive, and error-prone work from your week. It keeps all your
        conversations in sync, automates the common questions, and makes sure every lead is captured and
        followed up. Your team gets time back to focus on what matters, building relationships, closing sales,
        and delivering the kind of service that sets your business apart.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-tidio-removes-from-your-week-the-cross-platform-chatbot-advantage" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Tidio Removes from Your Week: The Cross-Platform Chatbot Advantage
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
              <h2 id="what-tidio-removes-from-your-week-the-cross-platform-chatbot-advantage-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Tidio Removes from Your Week: The Cross-Platform Chatbot Advantage
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
