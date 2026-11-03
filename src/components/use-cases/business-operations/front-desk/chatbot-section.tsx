import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChatbotSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">Customers who do not call send a message, and they send it wherever they already are. One asks about pricing in an Instagram DM, another sends a WhatsApp message about your hours, and a third opens the chat on your website late at night. When each channel has its own inbox, the reply depends on who happens to check which app, and the slowest reply usually loses the customer.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">A cross-platform chatbot answers all of those channels as one assistant. Every conversation lands on a single timeline, so the chatbot knows who the person is and what they asked before, whichever channel they use next.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>It replies at once on your website chat, WhatsApp, Facebook Messenger, Instagram, and SMS.</li>
        <li>It asks qualifying questions and separates ready buyers from people who are only browsing.</li>
        <li>It books appointments and creates the contact in your CRM from any channel.</li>
        <li>It hands the conversation to a person through <GlossaryLink slug="live-chat" className="text-[#0B162A] hover:underline">live chat</GlossaryLink> when the customer asks for one or the question is outside what it knows.</li>
      </ul>
      <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Top AI Chatbot Tools</h3>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li><Link id={`use-cases-business-operations-front-desk-chatbot-botpenguin${idSuffix}`} href="/tools/business-operations/ai-chatbot/botpenguin" className="text-[#0B162A] hover:underline">BotPenguin</Link> brings your chat channels into one organized workflow, built without code.</li>
        <li><Link id={`use-cases-business-operations-front-desk-chatbot-dapta${idSuffix}`} href="/tools/business-operations/ai-chatbot/dapta" className="text-[#0B162A] hover:underline">Dapta</Link> answers messages with the same AI that answers your calls.</li>
        <li><Link id={`use-cases-business-operations-front-desk-chatbot-manychat${idSuffix}`} href="/tools/business-operations/ai-chatbot/manychat" className="text-[#0B162A] hover:underline">Manychat</Link> specializes in Instagram and Facebook Messenger, including automatic replies to DMs and comments.</li>
        <li><Link id={`use-cases-business-operations-front-desk-chatbot-myaifrontdesk${idSuffix}`} href="/tools/business-operations/ai-chatbot/myaifrontdesk" className="text-[#0B162A] hover:underline">My AI Front Desk</Link> brings chat, text, and social messages into a single view alongside its phone receptionist.</li>
        <li><Link id={`use-cases-business-operations-front-desk-chatbot-tidio${idSuffix}`} href="/tools/business-operations/ai-chatbot/tidio" className="text-[#0B162A] hover:underline">Tidio</Link> pairs a live chat widget with an AI chatbot across your website, SMS, Messenger, and Instagram, so your team can take over whenever it chooses.</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-cross-platform-chatbot-answers-your-messages" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Cross-Platform Chatbot Answers Your Messages
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
              <h2 id="the-cross-platform-chatbot-answers-your-messages-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Cross-Platform Chatbot Answers Your Messages
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
