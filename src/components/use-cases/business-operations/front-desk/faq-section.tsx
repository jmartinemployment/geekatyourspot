export default function FAQSection() {
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
              What is an AI front desk?
            </h3>
            <p className="pt-3 text-base font-normal text-white shadow-text">An AI front desk is a combination of voice and chat AI that handles your business’s inbound customer contacts without a human receptionist on duty. It answers phone calls, responds to website chat and social messages, qualifies leads, books appointments, and routes inquiries to the right person on your team, around the clock.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the difference between an AI receptionist and an AI chatbot?
            </h3>
            <p className="pt-3 text-base font-normal text-white shadow-text">An AI receptionist is built for voice. It answers phone calls in natural language, captures caller details, and books appointments during a live call. An AI chatbot handles text channels: website chat, WhatsApp, Facebook Messenger, Instagram, and SMS. Some platforms, such as Dapta, cover both in one system, while others specialize in one channel and go deeper on it.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Do I need both an AI receptionist and a chatbot?
            </h3>
            <p className="pt-3 text-base font-normal text-white shadow-text">It depends on how your customers reach you. If most of your inbound contacts are phone calls, start with an AI receptionist. If you field a mix of calls, WhatsApp messages, website chats, and social DMs, a platform that covers every channel is usually easier to run than a separate tool for each one.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can an AI front desk respond in Spanish?
            </h3>
            <p className="pt-3 text-base font-normal text-white shadow-text">Yes. Every AI receptionist and chatbot platform covered here supports Spanish. For businesses serving the bilingual customers of Miami-Dade, Broward, and Palm Beach, that is a requirement rather than an option.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does an AI front desk connect to my calendar and CRM?
            </h3>
            <p className="pt-3 text-base font-normal text-white shadow-text">Most AI front desk platforms connect to Google Calendar, Outlook, and Calendly for booking, and to popular CRM platforms for contact records. When the AI qualifies a lead or books an appointment, the details go to your CRM and your calendar automatically, so your team starts every follow-up with the full context.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens when the AI cannot handle a request?
            </h3>
            <p className="pt-3 text-base font-normal text-white shadow-text">Every platform covered here includes handover rules. When the AI detects that a caller or a chat contact needs a person, it transfers the call or sends your team a notification with a summary of the conversation, so the customer does not have to repeat themselves.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
