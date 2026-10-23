export default function PreparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        If you have read this far and recognize your business in the problems described, the next step is not
        to install a chatbot and hope for the best. The right move is to start with a structured assessment,
        what Geek @ Your Spot LLC calls the free AI consultation. The process is built to make sure the solution
        fits your stack and solves your real pain, not just add another system.</p>
      <p className="text-base text-white shadow-text pt-3">
        First, expect to define your business objectives in measurable terms. That means spelling out where
        the leaks are, missed calls per week, delayed DM replies, manual entry hours lost, or revenue slipping
        away after hours. This is not about vague goals; it is about naming the bottleneck and the cost. A
        small HVAC company in West Palm Beach might see 30% of its leads disappear after hours, while a retail
        store in Miami finds that staff lose entire afternoons updating spreadsheets with customer details
        from different channels. The assessment will dig into your numbers, not just your feelings about the
        workflow.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next comes a&nbsp;data quality&nbsp;check. All the
        tools in the world, My AI Front Desk for phone and SMS, BotPenguin or Manychat for social and
        messaging, Dapta for bilingual coverage, Tidio for affordable live chat and automation, are only as
        good as the data they collect and pass between systems. Expect to be asked about
        your&nbsp;CRM, the fields you track, where your customer
        records live, and how leads are routed today. If your contact data is a mix of phone notes, email
        threads, and sticky notes, part of the rollout will be cleaning and mapping this data so the bot can
        work with it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once you pass the assessment, the real work begins. The team will map your core channels, choose the
        right AI tools based on your needs and budget, and design a pilot implementation. This is not a
        one-size-fits-all install. The solution might combine My AI Front Desk for instant phone and SMS
        capture, BotPenguin or Manychat for Facebook and Instagram automations, and Tidio for website chat,
        all connected to your&nbsp;CRM&nbsp;or spreadsheet. Dapta
        becomes your go-to if you need English and Spanish support, with the agent handling calls, web, and
        WhatsApp without missing a beat. You will see how each tool fits your specific customer journey and
        internal workflow, not just what the vendor demo shows.</p>
      <p className="text-base text-white shadow-text pt-3">
        The pilot phase is a real-world test, not a sandbox. Your team will run through sample conversations,
        check data is captured and routed correctly, and see how fast they can step in when an AI escalates a
        hot lead. You will see how the system handles real customers, real volume, and real edge cases, the
        prospect who starts on Instagram, calls the next day, and expects you to know who they are. Expect
        some tweaking and training in this phase, as you adapt the bot’s scripts, escalation rules, and data
        flows to your actual business. The point is not to get it perfect on day one, but to prove it works
        before you scale.</p>
      <p className="text-base text-white shadow-text pt-3">
        By the end of a successful deployment, you should expect three things: First, every new conversation,
        no matter where it starts, lands in a single system, with the customer history attached. Second,
        qualified leads are tagged, scored, and routed to the right person or next step, not left in limbo.
        And third, your team spends less time chasing missed messages and more time closing sales or solving
        real problems. The business should see fewer lost leads, faster response times, and a team that feels
        less stretched. The goal is not just more automation, but a pipeline that works for you, not against
        you.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<a href="#consultationAppointment2xl" id={`use-cases-marketing-cross-platform-chatbot-preparing-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>How many new inquiries do you receive in a typical week, and where do they come from?</li>
        <li>Where do most serious prospects first contact you today: website, Google, phone, text, Instagram, Facebook, WhatsApp, email, or walk-in?</li>
        <li>How many inquiries do you receive in a typical week, and when do they arrive?</li>
        <li>Out of every 10 people who reach out to your business, how many are actually qualified buyers versus &#39;tire-kickers&#39; who waste your billable time?</li>
        <li>What would make you consider an inquiry “qualified” rather than just curious?</li>
        <li>Do you currently use a&nbsp;CRM, spreadsheet, paper intake form, or nothing at all?</li>
        <li>What systems must the chatbot connect with?&nbsp;CRM, website forms, calendar, email/SMS, help desk, or accounting software?</li>
        <li>What should happen after the bot captures an inquiry? Send a booking link, create a&nbsp;CRM&nbsp;lead, notify a staff member, or start a follow-up sequence?</li>
        <li>What information may the bot answer from, and who will keep it current?</li>
        <li>What tone fits your brand: bilingual, formal, casual, urgent, or high-touch?</li>
        <li>What made you start looking for a solution now?</li>
        <li>What would a successful first 30 days look like?</li>
        <li>What is your budget and preferred way to pay?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-move-forward-the-next-step-and-what-you-should-expect-from-a-real-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Move Forward: The Next Step and What You Should Expect From a Real Deployment
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
              <h2 id="how-to-move-forward-the-next-step-and-what-you-should-expect-from-a-real-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Move Forward: The Next Step and What You Should Expect From a Real Deployment
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
