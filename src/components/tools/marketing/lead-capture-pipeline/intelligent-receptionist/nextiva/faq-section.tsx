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
              Will customers know they are speaking to an AI?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              XBert uses realistic, conversational voice engines. Many callers do not notice they are speaking
              to AI. Nextiva also lets admins set the tool to introduce itself as a virtual assistant if
              preferred.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does it handle complex questions?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              XBert answers standard questions using your business&#39;s linked knowledge base and website. If a
              question is too complex or outside its scope, it collects the caller&#39;s details and passes the
              call to a human team member, along with a full text transcript and conversation context. This way,
              callers do not have to repeat themselves.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can it take concurrent calls?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. XBert can handle unlimited inbound calls, texts, and web chats at the same time, so your
              business never gets a busy signal. Human receptionists can only take one call at a time.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Why does the receptionist skill override custom prompts?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              The receptionist skill is a default system setting in Nextiva. It cannot be changed, so it
              overrides any custom prompts within that workflow node.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can phone menu options be customized before handing off to the AI?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Admins can use NEXT Studio to fully edit menu nodes, create multi-department branches, and
              set up conditional options before routing a caller to an AI employee or a human agent.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Why are calls failing to route to the AI receptionist?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              This is often a routing configuration issue. XBert AI employees are limited to one phone number
              and must be assigned only to the default admin group. If the number is moved out of this group,
              the routing sequence will break.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What calendar systems does it support for bookings?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              XBert can connect to business calendars like Outlook and Google Workspace. It can book,
              reschedule, or confirm appointments on its own by checking these linked calendars.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How much does Nextiva XBert cost?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Nextiva XBert is available as a standalone service or as a UCaaS add-on. Pricing starts at $99 per
              month for 100 AI interactions. Each additional interaction is billed at $0.99.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
