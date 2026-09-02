import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function WhenToUseSection() {
  return (
    <section className="min-h-screen bg-[#8C4E2A] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 lg:place-items-center">
          <div className="col-span-7">
            <h2
              className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text"
              id="when-to-use"
            >
              When to Use
            </h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Apollo is best suited for teams that need to enhance <GlossaryLink slug="lead-scoring" className="text-[#0B162A] hover:underline">lead scoring</GlossaryLink> with <GlossaryLink slug="machine-learning" className="text-[#0B162A] hover:underline">AI-driven</GlossaryLink> insights. When sales is spending too much time sorting rather than selling, Apollo automates prioritization so reps focus on the most promising leads and convert faster.
            </p>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Organizations handling a high volume of leads benefit most, especially small businesses and lean sales teams without dedicated operations support. Apollo analyzes data patterns to quickly rank leads by likelihood to convert, which is ideal when inbound grows beyond what manual review or basic <GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink> filters can handle.
            </p>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Choose Apollo when accuracy matters more than intuition. Unlike subjective scoring based on gut feel or static rules, Apollo evaluates behavior and engagement objectively to reduce errors and allocate resources efficiently. Its seamless <GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink> integration and scalable design also make it a better fit than standalone scoring utilities that require ripping out existing workflows.
            </p>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Ultimately, Apollo is a strategic choice for businesses aiming to boost sales outcomes through faster response, personalized follow-up, and higher conversion rates. If your goal is to shorten time-to-close and ensure every lead gets the right level of attention, Apollo turns lead scoring into a competitive advantage.
            </p>
          </div>
          <div className="col-span-5 flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
