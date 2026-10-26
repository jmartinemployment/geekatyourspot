import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function FourJobsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The reason the four jobs belong in one platform is data, not convenience. A content plan is only as good as what it knows about who reads the content. An email campaign is only as personal as the fields and behavior it can see. A lead score is only as useful as the activity it has to score. When each job keeps its own copy of the contact list, every copy drifts: the email tool knows who clicked, the CRM knows who bought, the planning tool knows which page ranked, and nobody can join the three to answer a plain question like which topic brought in the leads that closed.</p>
      <p className="text-base text-white shadow-text pt-3">
        A platform, or a set of connected platforms, keeps one record per contact and lets each job write to it and read from it. A page visit becomes a field. An email click becomes a <GlossaryLink slug="trigger">trigger</GlossaryLink>. A purchase moves the contact out of the prospect sequence and into the customer one. That one record is what makes <GlossaryLink slug="email-segmentation">segmentation</GlossaryLink> honest, <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink> possible, and the content plan measurable in something better than page views.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation in this sense means an <GlossaryLink slug="automation-workflow">automation workflow</GlossaryLink>: a rule that says when this happens, do that. Send the second email three days after the first if the first was opened. Add ten points when a contact visits the pricing page. Create a task for the owner when a score crosses a line. AI sits inside those rules in three places. It drafts the content the rule will send. It suggests when to send and to whom, from past behavior. It ranks the leads the rules have collected. In every case a person still sets the rule, approves the draft, and decides what a score is worth.</p>
      <p className="text-base text-white shadow-text pt-3">
        The order below is the order the loop runs in, and it is also the order most small businesses should adopt it in. Planning costs the least and exposes the weakest data. Generation is useless without a plan. Email needs both a plan and clean contact fields. Scoring needs email and website activity to score. Starting at the end of the loop, with scoring, is the most common mistake we see, because it buys a ranking of leads that nothing upstream is feeding.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="four-jobs-one-set-of-contact-records" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Four Jobs, One Set of Contact Records
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="four-jobs-one-set-of-contact-records-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Four Jobs, One Set of Contact Records
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
