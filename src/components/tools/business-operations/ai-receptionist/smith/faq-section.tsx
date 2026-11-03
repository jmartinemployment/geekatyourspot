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
              Is Smith.ai an AI bot or a live receptionist service?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Smith.ai combines both AI and live receptionist support in one system. The AI manages routine
              tasks like intake and scheduling, while over 500 trained live agents are available around the
              clock for more complex needs.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will my callers know they&#39;re talking to AI?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Smith.ai lets you set how the AI introduces itself, so it can follow your disclosure preferences
              and any legal rules. The AI never pretends to be human. If you use the Virtual Receptionist, live
              agents answer from the start.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens when the AI can&#39;t handle a call?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              If the AI cannot manage a call, it transfers the caller to a live agent right away. This way,
              callers do not get stuck or left without help.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What are the core capabilities and integrations of Smith.ai?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Smith.ai offers booking, custom intake forms, appointment rescheduling, and outbound calling. Live
              agents can run conflict checks but do not give legal advice. All data is kept secure with
              encrypted dashboards. The system connects directly with platforms like Clio, MyCase, and
              Lawmatics. Pricing is based on each call.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
