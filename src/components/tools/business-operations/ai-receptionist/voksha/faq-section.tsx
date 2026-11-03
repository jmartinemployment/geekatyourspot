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
              Do I have to change my phone number?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              No, you keep your current business phone number. All you need to do is set up call forwarding to a
              dedicated Voksha number.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How long does setup take?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Voksha can be up and running in under 5 minutes. You just create an account, upload your business
              knowledge base or URLs, set up the AI agent’s instructions, and forward your phone line.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can the AI greeting and responses be customized?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, you have full control over the greeting message, the tone and personality, and the
              instructions for handling different types of calls.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How fast does it respond?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Voksha answers on the first ring and keeps response times under 200 milliseconds.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will callers know they are talking to an AI?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Voksha uses a natural-sounding voice. You can choose if it introduces itself as an AI at the
              start. If a caller asks directly, Voksha will answer honestly.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens if the call is too complex or the AI gets stuck?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              If Voksha cannot resolve a question after two or three tries, it apologizes, collects the caller’s
              details for a callback, or transfers the call to your team with all the context.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Voksha book appointments directly?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, but only on the Premium and Enterprise plans. Voksha connects with Google Calendar, Outlook,
              Calendly, and Acuity to book openings during the call.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How much does Voksha cost?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              The Starter plan is $14 per month and includes 15 calls. The Premium plan is $99 per month and
              includes 150 calls plus calendar booking. Extra calls are $1 each.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is there a free trial?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Voksha does not offer a free trial. Instead, small businesses in Miami-Dade, Broward and West Palm
              Beach counties can book a free demo call. After purchase, there is a 7-day money-back guarantee.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Are there surcharges for after-hours or busy times?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Voksha does not charge extra for after-hours, holidays, or busy periods. There are no per-minute
              fees or premiums. All calls are handled for a flat per-call rate, no matter when they come in.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
