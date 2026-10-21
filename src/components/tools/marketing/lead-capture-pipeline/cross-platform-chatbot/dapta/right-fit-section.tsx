export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Dapta is designed for small and medium-sized businesses that want to capture more leads, qualify them
        instantly, and book appointments automatically, without hiring more staff or building custom software.
        The platform is built for non-technical teams: sales, operations, and marketing leaders who need a
        system that works out of the box and fits into the tools they already use. If you are running a
        plumbing service, dental practice, law firm, logistics company, or any business where calls, texts,
        and chat inquiries come in every day, Dapta is in its element.</p>
      <p className="text-md text-white shadow-text pt-3">
        Dapta’s sweet spot is the local business that cannot afford to miss a single lead, whether it arrives
        by phone, WhatsApp, web chat, or SMS. The agent is bilingual in English and Spanish, making it a
        natural fit for the South Florida market, where switching languages is not an edge case but the daily
        reality. Teams that need to respond instantly, keep a clean record of every conversation, and route
        inquiries based on urgency or value will see the biggest change. Dapta is also for businesses that
        want to own their own flows, building, adjusting, and iterating on their own schedule, not waiting on
        a developer or an outside vendor.</p>
      <p className="text-md text-white shadow-text pt-3">
        But Dapta is not for everyone. If your company is a software vendor that wants to embed a raw
        voice&nbsp;API&nbsp;into your own product, with full
        code-level control over every interaction, Dapta will not give you that. It is not a developer toolkit
        or a platform for building custom logic from scratch. Instead, it is for teams that want to describe
        their business rules in plain language, set up the flows, and let the agent run, no code, no
        engineering. For most small businesses, this is an advantage, because it means you get results in
        hours or days, not weeks or months.</p>
      <p className="text-md text-white shadow-text pt-3">
        There are also businesses that may not need Dapta’s full range. If you only want a simple FAQ bot for
        your website, or your entire customer base communicates in a single channel, a lighter tool might be
        enough. But as soon as you want to connect multiple channels, keep a shared conversation history, and
        automate booking or lead qualification, Dapta’s integrated approach pays off. It is especially
        valuable for teams that want to scale without adding headcount, or need to cover after-hours and
        weekends without missing a beat.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next step for a small business considering Dapta is to look at the real flows in their own
        environment. Where are leads dropping off? Which channels see the most unanswered messages? How many
        times does a customer have to repeat their details before they get a booking? Dapta is at its best
        when it replaces the patchwork of disconnected tools and manual tasks with a single, always-on agent
        that fits the way your team already works. The businesses that get the most from Dapta are the ones
        that want to automate the handoff from inquiry to booking, keep every team member on the same page,
        and do it all without a technical project or a big up-front investment.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and West Palm Beach, the real decision is not whether to
        automate, but how much control and coverage you need. Dapta’s model is built around fast setup,
        no-code flows, and integrations with the tools you already rely on. If your team needs to answer every
        call, chat, and message, day and night, in English and Spanish, while keeping
        your&nbsp;CRM&nbsp;and calendar in sync, Dapta is built for
        you. If you need a developer playground, look elsewhere. The value is in the time you get back and the
        leads you no longer lose.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<button type="button" data-scheduler-link id={`tools-marketing-cross-platform-chatbot-dapta-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</button>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
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
              <h2 id="who-dapta-is-for-who-it-is-not-and-the-next-step-for-small-businesses" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Dapta Is For, Who It Is Not, and the Next Step for Small Businesses
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
              <h2 id="who-dapta-is-for-who-it-is-not-and-the-next-step-for-small-businesses-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Dapta Is For, Who It Is Not, and the Next Step for Small Businesses
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
