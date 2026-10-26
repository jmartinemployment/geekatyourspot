import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A <GlossaryLink slug="marketing-automation-platform">marketing automation platform</GlossaryLink> is software built to automate, streamline, and measure the repetitive marketing work: multi-channel campaigns, customer workflows, and the follow-up that a small team never quite gets to. For a business in Miami-Dade, Broward, or Palm Beach, that means one place where the content plan, the drafts, the email sends, and the lead list all read from the same contact records, instead of five tools that each hold one piece of the picture and never compare notes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Here is what the work looks like without one. The content plan lives in a spreadsheet that nobody has opened since the last quarterly push. Every post and email starts from a blank page. The newsletter goes to the whole list, with the same subject line for a prospect who visited the pricing page yesterday and a customer who bought two years ago. The <GlossaryLink slug="crm">CRM</GlossaryLink> holds eight hundred names, and nobody can say which fifty are worth a phone call this week. Each of those steps is a job someone meant to do properly and did in a hurry, because the next one was already waiting.</p>
      <p className="text-base text-white shadow-text pt-3">
        A platform ties those four jobs into one loop. The plan decides what gets written. The drafts get written from the plan, in your voice, and reviewed before they go anywhere. The emails go out on <GlossaryLink slug="trigger">triggers</GlossaryLink>, to the people whose behavior says they are ready for them. The leads those emails bring in get enriched and scored, and the scores tell the plan what to write about next. Nothing in that loop is magic. It is rules, contact fields, and a few places where a model drafts, suggests, or ranks so that a person can decide faster.</p>
      <p className="text-base text-white shadow-text pt-3">
        This page is the overview for the four use cases that make up marketing automation on this site. Each has its own pillar page with the full assessment, and each has reviews of the tools a South Florida small business is most likely to be quoted for. Read this page first if you want to know how the four jobs fit together and which one to start with. Read the pillars when you are ready to go deep on one. Every tool review here checks the vendor's own claims against what the product actually does at the plan a small business would buy, and says where the claim stops applying.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-a-marketing-automation-platform-does-for-a-small-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What a Marketing Automation Platform Does for a Small Business
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
              <h2 id="what-a-marketing-automation-platform-does-for-a-small-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What a Marketing Automation Platform Does for a Small Business
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
