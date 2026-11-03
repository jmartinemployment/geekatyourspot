import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">Your front desk is every place a customer reaches you before they become a customer: the business phone line, the chat window on your website, WhatsApp, Instagram, Facebook Messenger, and text messages. Each one needs someone watching it. In most small businesses across Miami-Dade, Broward, and Palm Beach, that someone is also doing the scheduling, the invoicing, and the work itself, so calls go to voicemail and messages wait until the end of the day.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">An AI front desk puts an <GlossaryLink slug="ai-voice-agent" className="text-[#C83803] hover:underline">AI voice agent</GlossaryLink> on your phone line and an AI chatbot on your messaging channels. Both answer from the same information about your business, qualify the person on the other end, book the appointment, and pass every detail to your <GlossaryLink slug="crm" className="text-[#C83803] hover:underline">CRM</GlossaryLink> and your team. They answer in English and Spanish, at any hour, and on as many conversations at once as come in.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">The front desk is one part of <Link id={`use-cases-business-operations-front-desk-lede-business-operations${idSuffix}`} href="/use-cases/business-operations" className="text-[#C83803] hover:underline">Business Operations</Link>. It covers two use cases: the <Link id={`use-cases-business-operations-front-desk-lede-ai-receptionist${idSuffix}`} href="/use-cases/business-operations/ai-receptionist" className="text-[#C83803] hover:underline">AI Receptionist</Link> for calls and the <Link id={`use-cases-business-operations-front-desk-lede-ai-chatbot${idSuffix}`} href="/use-cases/business-operations/ai-chatbot" className="text-[#C83803] hover:underline">AI Chatbot</Link> for messages. This page explains what each one does, which tools we work with, how to choose between voice, chat, or both, and what has to be ready before either one goes live.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-an-ai-front-desk-handles-for-your-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What an AI Front Desk Handles for Your Business
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-an-ai-front-desk-handles-for-your-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What an AI Front Desk Handles for Your Business
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
