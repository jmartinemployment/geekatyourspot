import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can the AI respond to inbound SMS messages?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. My AI Front Desk’s AI can handle two-way SMS conversations just like it does with website
              chat. This means your customers can text your business and get real answers, not just canned
              replies.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Do SMS conversations appear in the same inbox as web chats?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. All your messages from SMS, website chat, Facebook, and Instagram show up together in the
              Unified Inbox. This saves you time and keeps you organized, no more jumping between apps.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does it work over the phone and in chat?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. The same AI handles phone calls, SMS, email, and website chat. It keeps track of the
              conversation across all channels, so your customers get a smooth experience no matter how they
              reach out.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can it book appointments?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. The AI checks your schedule and books appointments live during the conversation. It also
              logs the booking in your CRM, so you never miss a lead.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Do I need engineers?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              No. My AI Front Desk is designed for small businesses. You can get it running in about 30
              minutes with no coding or technical help needed.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Frontdesk respond to Instagram story replies?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. The AI can reply to both direct messages and replies to your Instagram stories, so you
              never miss a chance to connect with leads.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Where do Instagram conversations appear?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Instagram messages show up in the Unified Inbox, right alongside your website chat, Facebook
              Messenger, and SMS conversations. This keeps everything in one place for your team.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is AI auto-reply software?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              AI auto-reply software answers incoming messages with real, accurate replies instead of a
              generic line. My AI Front Desk auto-replies on Instagram, Messenger, WhatsApp, SMS, email, and
              even missed calls. It also qualifies leads and syncs them to your CRM to help you follow up
              faster.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How is this different from a basic away message?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              A basic away message just sends the same reply to everyone and ends the chat. My AI Front Desk’s
              AI answers the customer’s actual question, asks follow-up questions, and can even book
              appointments, so you keep the conversation going and capture more leads.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which channels can it auto-reply on?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              My AI Front Desk can auto-reply on Instagram DMs, Facebook Messenger, WhatsApp, SMS, email,
              website chat, and even missed calls. One AI covers all your main channels.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will the replies be accurate?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. The AI uses your own knowledge base, so details like hours, pricing, and policies stay
              correct and up to date.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can a person take over?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Any teammate can step in and take over a conversation at any time. When you are ready, the
              AI can pick up where you left off. This gives you full control and peace of mind.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What exactly is the Frontdesk AI &quot;brain&quot; and how does it work?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              The Frontdesk AI &quot;brain&quot; is a shared-memory context layer that connects all
              communication channels like Voice, SMS, WhatsApp, Web Chat, and Email. When a customer interacts
              with the business, the platform pulls out structured data such as intent, sentiment, and any
              custom fields set up in plain English. This unified memory means the AI always knows who the
              customer is and what they discussed, even if they switch from a phone call to a text message.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can a business keep its existing South Florida phone number?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, businesses can keep their current numbers. They just set up call-forwarding from their
              landline or VoIP provider to Frontdesk AI. The AI then manages unlimited calls at any time, so
              customers never get sent to voicemail, even during busy or after-hours periods.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Frontdesk AI integrate with a business&#39;s existing software stack?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Frontdesk AI comes with its own AI-powered CRM, but it can also sync data to your current
              systems. It uses&nbsp;<Link id="tools-marketing-cross-platform-chatbot-myaifrontdesk-faq-zapier" href="/tools/marketing/zapier" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">Zapier</Link>&nbsp;and direct API connections for automation. For high-volume or enterprise
              needs, the team builds custom integrations that map data directly to specialized systems like
              Property Management Systems, CRMs, or data lakes.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is the platform secure enough to handle sensitive customer or financial data?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, the platform is enterprise-grade and <GlossaryLink slug="hipaa">HIPAA</GlossaryLink>-compliant. It signs Business Associate
              Agreements, encrypts data in transit and at rest, and uses strict access controls. For
              extra-sensitive work, businesses can even run the AI models locally so no conversational data
              leaves their own secure environment.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens if the AI encounters a complex question or billing issue it can&#39;t answer?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Frontdesk AI uses enterprise-grade escalation. If it gets a question outside its scope, it
              triggers a real-time handoff to a human. A supervisor gets the full conversation transcript, or
              the AI can start a live warm-transfer to an office staff member.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
