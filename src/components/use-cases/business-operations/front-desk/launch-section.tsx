import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LaunchSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">An AI front desk is only as good as what it knows and what it is allowed to do. Before it answers a single customer, these pieces have to be in place.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>The knowledge base: your services, service area, hours, policies, and the answers to the questions customers ask most, written in English and Spanish.</li>
        <li>Booking rules: which appointment types the AI may book, how long each one takes, and which calendars it checks.</li>
        <li>Qualifying questions: what the AI must learn from every caller or sender before it books or hands off.</li>
        <li><GlossaryLink slug="human-handover" className="text-[#0B162A] hover:underline">Human handover</GlossaryLink> rules: which situations go to a person at once, who receives them, and whether that happens by live transfer, text, or email.</li>
        <li>CRM fields: where each answer is stored, so every follow-up starts from a complete record.</li>
        <li>Call routing: whether the AI answers every call, only after-hours calls, or the calls your team does not pick up, using forwarding on the number you already have.</li>
      </ul>
      <p className="pt-3 text-base font-normal text-white shadow-text">The last step is testing. We call and message the system the way your customers do, in both languages, with the hard questions and the unusual ones, and we adjust it before your customers ever reach it.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-has-to-be-ready-before-launch" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Has to Be Ready Before Launch
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-has-to-be-ready-before-launch-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Has to Be Ready Before Launch
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
