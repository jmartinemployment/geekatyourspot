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
              What happened to My AI Front Desk? Is it now Frontdesk?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. The company rebranded to Frontdesk and changed its main product from a standalone voice
              receptionist to a unified AI workforce subscription. This now covers phone, web chat, SMS, email,
              CRM, and basic automations.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is My AI Front Desk legit?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. The company has been operating since 2023, was founded by former Meta engineers, and has
              published case studies with local businesses and real estate groups such as Samson Properties and
              Garman Homes.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the setup work?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              You forward your current business number to Frontdesk and set up rules for what your AI
              receptionist should say. For small operators, the setup is self-serve and takes about five
              minutes.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can it book appointments on live calendars?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. It connects with live scheduling calendars like Google Calendar, Outlook, and other platforms
              to check availability and book appointments during a call.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can it do outbound sales campaigns?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              No. The tool is built for inbound answering, lead capture, and routing. Outbound calls are limited
              and meant only for basic operational follow-ups, not for sales campaigns.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can it handle parallel calls?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. The AI can answer unlimited phone calls at the same time, so no caller ever gets a busy
              signal.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens if the AI gets stuck?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              If the AI cannot understand a request after two or three tries, it collects the customer&#39;s
              contact details and sends a real-time notification or transfers the call to a human employee.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How much does Frontdesk cost?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Frontdesk offers a free plan with 20 voice minutes per month. The Business-in-a-Box plan is $99
              per month, or $79 per month if billed annually, and includes 200 voice minutes. Extra minutes are
              billed at $0.25 each.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What integrations are supported?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              My AI Front Desk supports calendar syncs and connects with Zapier. This lets users send text
              transcripts and captured lead profiles to over 9,000 external CRM and software applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
