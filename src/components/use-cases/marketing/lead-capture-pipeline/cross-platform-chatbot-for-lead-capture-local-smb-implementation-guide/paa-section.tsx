export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="people-also-ask" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does it actually talk to people across different apps, or do I have to build separate bots for everything?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              You only need to build your chatbot logic once. The cross-platform AI engine acts as a unified
              brain, using the same centralized knowledge base for every channel. Whether a lead contacts you
              on your website, Instagram, or WhatsApp, the AI responds with the same information and process.
              You do not have to manage different bots for each app, your inbound messages are unified into
              one automated pipeline.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is a cross-platform lead-capture chatbot?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              A cross-platform lead-capture chatbot is one AI assistant that works on many channels your
              prospects use: website chat, SMS, WhatsApp, Instagram, Facebook Messenger, and sometimes voice.
              It can engage new leads, collect their details, qualify them, and send their info to your CRM
              and calendar. The big advantage is that all customer history and context follow them across
              channels, so you are not stuck checking separate inboxes.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does it help capture leads?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              The chatbot answers common questions, asks what visitors need, collects their contact details,
              and guides them to a next step like booking a consultation or asking for a callback.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Do I need a developer to set this up?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No, you do not need a developer for basic setup. Most cross-platform chatbots (like Manychat,
              Tidio, or MobileMonkey) use no-code, drag-and-drop builders, so you can set them up in under an
              hour. If you want advanced integrations, like connecting to your CRM or payment system, a
              developer can help.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does a chatbot actually separate qualified buyers from tire-kickers?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Chatbots use conditional logic or BANT metrics, Budget, Authority, Need, Timeline, to qualify
              leads. They do this by asking the right questions in a natural conversation and evaluating the
              answers in real time.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What questions should the bot ask?
            </h3>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
              <li>What service or product are you interested in?</li>
              <li>Are you located within our service area?</li>
              <li>How soon do you need this handled?</li>
              <li>What is your approximate budget or project scope?</li>
              <li>Are you the decision-maker, or should we include someone else?</li>
              <li>What is the best phone number or email for follow-up?</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
