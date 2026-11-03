import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function FrontDeskSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">Your front desk is every way a customer reaches you: phone calls, website chat, WhatsApp, Instagram, Facebook Messenger, and text messages. AI voice and chat systems handle those front-line conversations around the clock, in English and Spanish, and send every lead to your calendar and your <GlossaryLink slug="crm" className="text-[#C83803] hover:underline">CRM</GlossaryLink>. The <Link id={`use-cases-business-operations-front-desk-page${idSuffix}`} href="/use-cases/business-operations/front-desk" className="text-[#C83803] hover:underline">AI Front Desk</Link> page covers both in detail.</p>
      <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text"><Link id={`use-cases-business-operations-front-desk-ai-receptionist-heading${idSuffix}`} href="/use-cases/business-operations/ai-receptionist" className="text-[#C83803] hover:underline">AI Receptionist</Link></h3>
      <p className="pt-3 text-base font-normal text-white shadow-text">An <Link id={`use-cases-business-operations-front-desk-ai-receptionist${idSuffix}`} href="/use-cases/business-operations/ai-receptionist" className="text-[#C83803] hover:underline">AI receptionist</Link> answers your business phone 24 hours a day and talks with callers in natural language. It answers their questions, qualifies them, books appointments, and transfers the call to a person when a call needs one. The tools we work with are <Link id={`use-cases-business-operations-receptionist-dapta${idSuffix}`} href="/tools/business-operations/ai-receptionist/dapta" className="text-[#C83803] hover:underline">Dapta</Link>, <Link id={`use-cases-business-operations-receptionist-lobbystack${idSuffix}`} href="/tools/business-operations/ai-receptionist/lobbystack" className="text-[#C83803] hover:underline">LobbyStack</Link>, <Link id={`use-cases-business-operations-receptionist-myaifrontdesk${idSuffix}`} href="/tools/business-operations/ai-receptionist/myaifrontdesk" className="text-[#C83803] hover:underline">My AI Front Desk</Link>, <Link id={`use-cases-business-operations-receptionist-nextiva${idSuffix}`} href="/tools/business-operations/ai-receptionist/nextiva" className="text-[#C83803] hover:underline">Nextiva</Link>, <Link id={`use-cases-business-operations-receptionist-smith${idSuffix}`} href="/tools/business-operations/ai-receptionist/smith" className="text-[#C83803] hover:underline">Smith.ai</Link>, and <Link id={`use-cases-business-operations-receptionist-voksha${idSuffix}`} href="/tools/business-operations/ai-receptionist/voksha" className="text-[#C83803] hover:underline">Voksha</Link>.</p>
      <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text"><Link id={`use-cases-business-operations-front-desk-ai-chatbot-heading${idSuffix}`} href="/use-cases/business-operations/ai-chatbot" className="text-[#C83803] hover:underline">AI Chatbot</Link></h3>
      <p className="pt-3 text-base font-normal text-white shadow-text">A <Link id={`use-cases-business-operations-front-desk-ai-chatbot${idSuffix}`} href="/use-cases/business-operations/ai-chatbot" className="text-[#C83803] hover:underline">AI chatbot</Link> answers on WhatsApp, Facebook Messenger, Instagram, and your website as one assistant, with every conversation on a single timeline. The tools we work with are <Link id={`use-cases-business-operations-chatbot-botpenguin${idSuffix}`} href="/tools/business-operations/ai-chatbot/botpenguin" className="text-[#C83803] hover:underline">BotPenguin</Link>, <Link id={`use-cases-business-operations-chatbot-dapta${idSuffix}`} href="/tools/business-operations/ai-chatbot/dapta" className="text-[#C83803] hover:underline">Dapta</Link>, <Link id={`use-cases-business-operations-chatbot-manychat${idSuffix}`} href="/tools/business-operations/ai-chatbot/manychat" className="text-[#C83803] hover:underline">Manychat</Link>, <Link id={`use-cases-business-operations-chatbot-myaifrontdesk${idSuffix}`} href="/tools/business-operations/ai-chatbot/myaifrontdesk" className="text-[#C83803] hover:underline">My AI Front Desk</Link>, and <Link id={`use-cases-business-operations-chatbot-tidio${idSuffix}`} href="/tools/business-operations/ai-chatbot/tidio" className="text-[#C83803] hover:underline">Tidio</Link>.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="front-desk" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Front Desk
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="front-desk-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Front Desk
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
