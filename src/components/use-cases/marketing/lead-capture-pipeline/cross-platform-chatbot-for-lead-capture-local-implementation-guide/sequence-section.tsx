import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function SequenceSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out a cross-platform chatbot that actually delivers on its promise is a sequence, not a
        one-click install. In a real environment, let’s say a twelve-person HVAC shop in Broward or a retail
        store with three locations, the steps look the same, but the details are all local. Geek @ Your Spot LLC’s
        four-phase method is not just a checklist; it is the order that keeps the project on track and the
        business in control.</p>
      <p className="text-md text-white shadow-text pt-3">
        It starts with a free consultation. Here, you put the key pain point on the table: maybe your team is
        missing thirty percent of inbound calls, or your Instagram DMs are a black hole. Together, you set the
        measurable objective. That could be more appointments booked or a shorter response time. This is not
        just for planning, it is the benchmark for every decision that follows.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next is the&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>&nbsp;assessment. You
        look at where your contact info lives today: is it a&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>,
        a spreadsheet, or just a pile of social app notifications? My AI Front Desk and Dapta both show why
        this matters, they only deliver value if they can pull and push structured data to where your team
        works. For businesses with a lot of Spanish-speaking clients, Dapta’s language flexibility is checked
        here, not after launch. If your WhatsApp contacts are a mess of untagged numbers, now is when you
        clean and standardize, not after the first lead goes missing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Then comes tech selection and architecture. The choice is not between chatbot brands, but which tool’s
        workflow matches your channel mix and support resources. BotPenguin is strong for businesses that must
        cover Instagram, Facebook, and WhatsApp in one dashboard, while Manychat is the fit for teams that
        want to turn social comments into actual follow-up DMs. Tidio is the practical pick for a shop that
        wants an AI answering common web chat questions, with the freedom for staff to jump in when needed.
        You map out which tool connects with your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, how
        handoff to humans will work, and which automations fire on each channel.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pilot implementation is where the work gets real. You do not flip the switch on every channel at once.
        Instead, you launch a sandboxed pilot, often just your website chat and one social channel. This is
        where you run smoke tests: does the bot capture the right details, does it hand off to a person when
        it should, and does every lead land in your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;with
        context? For example, if you use My AI Front Desk to pick up missed calls, you check that the AI logs
        the conversation and triggers a follow-up text, as promised. If you use BotPenguin, you verify that a
        lead who comments on Facebook gets a DM and is synced to your pipeline.</p>
      <p className="text-md text-white shadow-text pt-3">
        After the pilot, you review outcomes against the business objective. If you aimed for a 40% reduction
        in missed leads and only see 10%, you do not roll out the next channel yet, you fix the gaps. Maybe
        the AI is not qualifying leads as expected, or handoff rules are too restrictive. You adjust, re-test,
        and only then expand coverage: add SMS, WhatsApp, or phone as your next step.</p>
      <p className="text-md text-white shadow-text pt-3">
        The last step is continuous scaling. Once the key flows are working, you extend the bot’s reach to
        every channel your prospects use. This is where the benefit compounds: a new lead can DM, call, or
        chat, and your team always sees the whole conversation in one place. For a business owner who used to
        spend Friday afternoons chasing missed messages, the difference is immediate.
        The&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;fills itself, staff answer only the
        high-value questions, and every lead is tracked from first touch to close. The result is not just more
        leads, but more time to work them.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-it-really-takes-to-roll-out-a-cross-platform-chatbot-step-by-step-in-a-real-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Really Takes to Roll Out a Cross-Platform Chatbot: Step by Step in a Real Business
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-it-really-takes-to-roll-out-a-cross-platform-chatbot-step-by-step-in-a-real-business" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Really Takes to Roll Out a Cross-Platform Chatbot: Step by Step in a Real Business
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
